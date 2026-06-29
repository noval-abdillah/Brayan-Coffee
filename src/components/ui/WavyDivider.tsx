'use client';

import React from 'react';

export function WavyDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[20px] text-[var(--text-primary)]"
        fill="currentColor"
      >
        <path d="M0,0 C150,90 350,10 500,60 C650,110 850,20 1000,70 C1150,120 1200,30 1200,30 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
