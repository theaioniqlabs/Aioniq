export const tokens = {
  colors: {
    foreground: 'var(--foreground)',
    background: 'var(--background)',
    primary: 'var(--primary)',
    primaryForeground: 'var(--primary-foreground)',
    border: 'var(--border)',
    muted: 'var(--muted)',
    accent: 'var(--accent)'
  },
  containers: {
    // Semantic container names (preferred)
    marketing: 'var(--container-marketing)',
    visual: 'var(--container-visual)',
    showcase: 'var(--container-showcase)',
    app: 'var(--container-app)',
    // Legacy numeric keys for backward compatibility
    '1280': 'var(--container-1280)',
    '1440': 'var(--container-1440)',
    '1728': 'var(--container-showcase)',
    '1800': 'var(--container-1800)'
  },
  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    // Token-based spacing values
    '4': 'var(--spacing-4)',
    '8': 'var(--spacing-8)',
    '12': 'var(--spacing-12)',
    '16': 'var(--spacing-16)',
    '20': 'var(--spacing-20)',
    '24': 'var(--spacing-24)',
    '32': 'var(--spacing-32)',
    '40': 'var(--spacing-40)',
    '48': 'var(--spacing-48)',
    '64': 'var(--spacing-64)'
  },
  radii: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  },
  typography: {
    display1: ['var(--display-1-size)', 'var(--display-1-lh)'],
    h1: ['var(--h1-size)', 'var(--h1-lh)'],
    h2: ['var(--h2-size)', 'var(--h2-lh)'],
    h3: ['var(--h3-size)', 'var(--h3-lh)'],
    bodyMd: ['var(--body-md-size)', 'var(--body-md-lh)'],
    bodySm: ['var(--body-sm-size)', 'var(--body-sm-lh)'],
    caption: ['var(--caption-size)', 'var(--caption-lh)']
  }
} as const;

export type Tokens = typeof tokens;
