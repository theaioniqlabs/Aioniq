import React from 'react';
import Container from '../Container';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t mt-12" style={{borderColor: 'var(--border)'}} role="contentinfo">
      <Container className="py-32 text-sm text-muted-foreground">
        <div className="flex items-center justify-between">
          <div>© {new Date().getFullYear()} AiONIQ Labs</div>
          <div>Made with care</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
