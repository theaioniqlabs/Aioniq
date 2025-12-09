'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Container from '../Container';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/what', label: 'What' },
  { href: '/why', label: 'Why' },
  { href: '/how', label: 'How' },
  { href: '/who', label: 'Who' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' }
];

export const Header: React.FC = () => {
  const path = usePathname() || '/';
  return (
    <header className="border-b" role="banner" style={{ borderColor: 'var(--border)' }}>
      <Container className="py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-display" aria-label="AiONIQ Home">AiONIQ</Link>
        <nav aria-label="Main navigation">
          <ul className="flex gap-6 text-sm">
            {NAV.map((item) => {
              const isActive = item.href === '/' ? path === '/' : path.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? 'text-primary font-medium' : 'text-muted'}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
