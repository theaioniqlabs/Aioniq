import React from 'react';

export const Display1: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <h1 className={`text-display-1 font-display ${className}`}>{children}</h1>
);

export const H1: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <h2 className={`text-h1 font-display ${className}`}>{children}</h2>
);

export const H2: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <h2 className={`text-h2 font-display ${className}`}>{children}</h2>
);

export const H3: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <h3 className={`text-h3 font-sans ${className}`}>{children}</h3>
);

export const Body: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <p className={`text-body-md ${className}`}>{children}</p>
);

export const BodySm: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <p className={`text-body-sm ${className}`}>{children}</p>
);

export const Caption: React.FC<{children: React.ReactNode, className?: string}> = ({ children, className = '' }) => (
  <p className={`text-caption ${className}`}>{children}</p>
);

