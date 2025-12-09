import './styles/variables.css';
import '../styles/globals.css';
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { googleSansFlex } from '../lib/fonts';

export const metadata = {
  title: 'AiONIQ Labs',
  description: 'AiONIQ — hybrid digital studio & intelligent product environment'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={googleSansFlex.variable}>
      <body style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
