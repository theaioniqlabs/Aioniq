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
    '1280': 'var(--container-1280)',
    '1440': 'var(--container-1440)',
    '1600': 'var(--container-1600)',
    '1800': 'var(--container-1800)'
  },
  spacing: {
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)'
  },
  radii: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  },
  typography: {
    display1: ['var(--display-1-size)', 'var(--display-1-lh)'],
    h1: ['var(--h1-size)', 'var(--h1-lh)'],
    bodyMd: ['var(--body-md-size)', 'var(--body-md-lh)']
  }
} as const;

export type Tokens = typeof tokens;
