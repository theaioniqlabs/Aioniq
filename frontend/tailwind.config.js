/** @type {import('tailwindcss').Config} */
const tokens = require('../ui/tokens.json');
const colors = require('../ui/colors.json');
const typography = require('../ui/typography.json');
const layoutWidths = require('../ui/layout-widths.json');

module.exports = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
      colors: {
        foreground: colors.light.foreground,
        background: colors.light.background,
        primary: {
          DEFAULT: colors.light.primary,
          foreground: colors.light['primary-foreground'],
        },
        muted: colors.light.muted,
        border: colors.light.border,
        accent: colors.light.accent,
      },
      fontFamily: {
        display: ['var(--font-google-sans-flex)', typography.fonts.display.split(',')[0], 'system-ui', 'sans-serif'],
        sans: ['var(--font-google-sans-flex)', typography.fonts.sans.split(',')[0], 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': [typography.sizes['display-1'].fontSize, { lineHeight: typography.sizes['display-1'].lineHeight }],
        'h1': [typography.sizes.h1.fontSize, { lineHeight: typography.sizes.h1.lineHeight }],
        'h2': [typography.sizes.h2.fontSize, { lineHeight: typography.sizes.h2.lineHeight }],
        'h3': [typography.sizes.h3.fontSize, { lineHeight: typography.sizes.h3.lineHeight }],
        'body-md': [typography.sizes['body-md'].fontSize, { lineHeight: typography.sizes['body-md'].lineHeight }],
        'body-sm': [typography.sizes['body-sm'].fontSize, { lineHeight: typography.sizes['body-sm'].lineHeight }],
        'caption': [typography.sizes.caption.fontSize, { lineHeight: typography.sizes.caption.lineHeight }],
      },
      maxWidth: {
        'container-marketing': layoutWidths.containers['container-marketing'],
        'container-visual': layoutWidths.containers['container-visual'],
        'container-showcase': layoutWidths.containers['container-showcase'],
        'container-app': layoutWidths.containers['container-app'],
      },
    },
  },
  plugins: [],
};
