import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />);
    expect(screen.getByText(/AiONIQ — design x AI/i)).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<Hero />);
    expect(screen.getByText(/We build thoughtful design systems/i)).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    expect(screen.getByText('View work')).toBeInTheDocument();
  });

  it('has correct links', () => {
    render(<Hero />);
    const contactLink = screen.getByText('Get in touch').closest('a');
    const workLink = screen.getByText('View work').closest('a');
    
    expect(contactLink).toHaveAttribute('href', '/contact');
    expect(workLink).toHaveAttribute('href', '/work');
  });
});

