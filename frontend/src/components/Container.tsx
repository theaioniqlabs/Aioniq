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
 * 
 * This component serves as the PageContainer referenced in .cursorrules.
 * It provides responsive container widths based on design tokens.
 */
export const Container: React.FC<ContainerProps> = ({ children, size = 'marketing', center = true, className = '', ...rest }) => {
  // Map legacy numeric sizes to semantic names
  const sizeMap: Record<string, 'marketing' | 'visual' | 'showcase' | 'app'> = {
    '1280': 'marketing',
    '1440': 'visual',
    '1600': 'visual', // Legacy mapping
    '1728': 'showcase',
    '1800': 'app',
  };
  
  // Normalize size to semantic name
  const semanticSize = sizeMap[size] || size as 'marketing' | 'visual' | 'showcase' | 'app';
  const maxWidth = tokens.containers[semanticSize] || tokens.containers.marketing;
  
  return (
    <div
      style={{ 
        maxWidth, 
        marginLeft: center ? 'auto' : undefined, 
        marginRight: center ? 'auto' : undefined 
      }}
      className={`w-full ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
