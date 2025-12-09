import React from 'react';
import Container from '@/components/Container';

/**
 * Blank Home page scaffold.
 * Uses AiONIQ design tokens and Container component for responsive layout.
 * Mobile-first: pt-10 (spacing-40) → md:pt-16 (spacing-64)
 * Horizontal padding: px-4 (spacing-16) → md:px-10 (spacing-40)
 */
export default function Home() {
  return (
    <div className="pt-10 md:pt-16">
      <Container className="px-4 md:px-10">
        <div className="min-h-[200px] w-full" />
      </Container>
    </div>
  );
}

