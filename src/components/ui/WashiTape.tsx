'use client';

import React from 'react';

export function WashiTape({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute bg-[var(--text-secondary)]/20 backdrop-blur-xs border border-dashed border-[var(--text-primary)]/40 px-6 py-1 text-xs font-handwritten font-semibold select-none shadow-sm ${className}`}
      style={{
        transform: 'rotate(-4deg)',
        clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)',
      }}
    >
      BRAYAN COFFEE
    </div>
  );
}
