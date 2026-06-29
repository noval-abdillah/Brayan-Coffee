'use client';

import React, { useState } from 'react';
import { CoffeeBeanIcon } from '@/components/icons';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackIcon?: React.ReactNode;
}

export function SafeImage({ src, alt, className, fallbackIcon, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[var(--border)]/30 text-[var(--text-secondary)]/50 border border-[var(--border)] w-full h-full ${className}`}>
        {fallbackIcon || <CoffeeBeanIcon className="w-10 h-10 animate-pulse" />}
        <span className="text-[10px] mt-2 px-2 text-center uppercase tracking-wider">{alt || 'Image'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
