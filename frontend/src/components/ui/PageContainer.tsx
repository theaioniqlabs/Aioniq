import React from 'react';
import Container from '../Container';

/**
 * PageContainer component - Wrapper around Container for page-level layouts
 * 
 * This component provides consistent page-level container behavior.
 * It's an alias for Container with semantic defaults for page layouts.
 * 
 * Usage:
 *   <PageContainer size="marketing">
 *     <h1>Page Content</h1>
 *   </PageContainer>
 * 
 * @see Container - Base container component
 */
export interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'marketing' | 'visual' | 'showcase' | 'app';
  center?: boolean;
}

/**
 * PageContainer - Semantic wrapper for page-level content containers
 * 
 * Provides consistent spacing and width constraints for page content.
 * Defaults to 'marketing' size (1280px) for text-heavy content.
 */
export const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  size = 'marketing', 
  center = true, 
  className = '', 
  ...rest 
}) => {
  return (
    <Container size={size} center={center} className={className} {...rest}>
      {children}
    </Container>
  );
};

export default PageContainer;

