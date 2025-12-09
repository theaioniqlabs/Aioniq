import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BentoGrid from './BentoGrid';

const mockItems = [
  { id: '1', title: 'Test Item 1', desc: 'Description 1' },
  { id: '2', title: 'Test Item 2', desc: 'Description 2' },
];

describe('BentoGrid Component', () => {
  it('renders all items', () => {
    render(<BentoGrid items={mockItems} />);
    expect(screen.getByText('Test Item 1')).toBeInTheDocument();
    expect(screen.getByText('Test Item 2')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    render(<BentoGrid items={mockItems} />);
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
  });

  it('renders empty state when no items', () => {
    const { container } = render(<BentoGrid items={[]} />);
    expect(container.querySelector('.grid')).toBeInTheDocument();
  });
});

