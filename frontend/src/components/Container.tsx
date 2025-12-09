import React from 'react';
import { tokens } from '../design/tokens';

type Size = '1280' | '1440' | '1600' | '1800' | 'marketing' | 'visual' | 'showcase' | 'app';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  center?: boolean;
}

/**
 * Mobile-first Container component.
 * Usage: <Container size="marketing" className="px-4">...</Container>
 * Supports both legacy numeric sizes and semantic names (marketing, visual, showcase, app)
 */
export const Container: React.FC<ContainerProps> = ({ children, size = '1280', center = true, className = '', ...rest }) => {
  // Map semantic names to numeric sizes for token lookup
  const sizeMap: Record<string, keyof typeof tokens.containers> = {
    'marketing': '1280',
    'visual': '1440',
    'showcase': '1600',
    'app': '1800',
  };
  
  // Convert semantic name to numeric size if needed
  const numericSize = sizeMap[size] || size as keyof typeof tokens.containers;
  const maxWidth = tokens.containers[numericSize] || tokens.containers['1280'];
  
  return (
    <div
      style={{ maxWidth, marginLeft: center ? 'auto' : undefined, marginRight: center ? 'auto' : undefined }}
      className={`w-full ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
