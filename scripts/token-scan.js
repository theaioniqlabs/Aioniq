#!/usr/bin/env node
/**
 * Token Scanner - Scans codebase for hardcoded design values
 * Outputs token-coverage.json with coverage metrics
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const SCAN_PATTERNS = {
  colors: /#([0-9a-fA-F]{3,6})|rgb\(|rgba\(|hsl\(/g,
  spacing: /\b(\d+(?:\.\d+)?)\s*(px|rem|em)\b/g,
  radius: /border-radius:\s*(\d+(?:\.\d+)?)\s*(px|rem|em)/g,
};

const TOKEN_FILES = {
  spacing: path.join(__dirname, '../ui/tokens.json'),
  colors: path.join(__dirname, '../ui/colors.json'),
  typography: path.join(__dirname, '../ui/typography.json'),
};

async function scanFiles() {
  const files = await glob('frontend/src/**/*.{ts,tsx,css}', {
    ignore: ['**/node_modules/**', '**/.next/**'],
  });

  const results = {
    totalFiles: files.length,
    tokensFound: 0,
    rawLiterals: [],
    suggestions: [],
  };

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    
    // Check for hardcoded values
    const spacingMatches = content.match(SCAN_PATTERNS.spacing);
    const colorMatches = content.match(SCAN_PATTERNS.colors);
    
    if (spacingMatches || colorMatches) {
      results.rawLiterals.push({
        file,
        spacing: spacingMatches || [],
        colors: colorMatches || [],
      });
    }
  }

  // Calculate coverage
  const totalValues = results.rawLiterals.reduce((sum, item) => 
    sum + item.spacing.length + item.colors.length, 0
  );
  
  results.coverage_percent = totalValues > 0 
    ? Math.max(0, 100 - (totalValues / files.length) * 10)
    : 100;

  return results;
}

async function main() {
  const results = await scanFiles();
  const outputPath = path.join(__dirname, '../scripts/token-coverage.json');
  
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`Token scan complete. Coverage: ${results.coverage_percent.toFixed(1)}%`);
  console.log(`Results saved to: ${outputPath}`);
}

main().catch(console.error);

