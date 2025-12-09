/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    // Enforce token usage - warn on common hardcoded values
    'no-magic-numbers': 'off', // TypeScript handles this better
    // Allow console in development
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // React best practices
    'react/react-in-jsx-scope': 'off', // Next.js doesn't require this
    'react/prop-types': 'off', // Using TypeScript for prop validation
  },
  ignorePatterns: [
    '.next/**',
    'node_modules/**',
    'out/**',
    'build/**',
    '*.config.js',
    '*.config.ts',
  ],
};

