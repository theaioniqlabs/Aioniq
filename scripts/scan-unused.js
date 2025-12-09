#!/usr/bin/env node
/**
 * Unused Asset Scanner - Lists public assets and candidate unused files
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function scanUnused() {
  const publicDir = path.join(__dirname, '../frontend/public');
  const srcDir = path.join(__dirname, '../frontend/src');
  
  // Get all public assets
  const assets = await glob('**/*', { cwd: publicDir });
  
  // Scan source files for references
  const sourceFiles = await glob('**/*.{ts,tsx,js,jsx,css}', { cwd: srcDir });
  
  const references = new Set();
  for (const file of sourceFiles) {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
    // Simple regex to find asset references
    const matches = content.match(/['"`]([^'"`]+\.(jpg|jpeg|png|svg|gif|webp|ttf|woff|woff2))['"`]/g);
    if (matches) {
      matches.forEach(match => {
        const asset = match.replace(/['"`]/g, '').replace(/^\//, '');
        references.add(asset);
      });
    }
  }
  
  const unused = assets.filter(asset => !references.has(asset));
  
  return {
    totalAssets: assets.length,
    referencedAssets: references.size,
    unusedAssets: unused,
  };
}

async function main() {
  const results = await scanUnused();
  console.log(`Total assets: ${results.totalAssets}`);
  console.log(`Referenced: ${results.referencedAssets}`);
  console.log(`Unused: ${results.unusedAssets.length}`);
  
  if (results.unusedAssets.length > 0) {
    console.log('\nUnused assets:');
    results.unusedAssets.forEach(asset => console.log(`  - ${asset}`));
  }
}

main().catch(console.error);

