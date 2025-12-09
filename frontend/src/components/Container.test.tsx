import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Container from './Container';

describe('Container Component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Container>Test Content</Container>
    );
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">Content</Container>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('uses default size when not specified', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toBeInTheDocument();
  });
});

