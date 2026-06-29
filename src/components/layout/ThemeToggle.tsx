'use client';

import React, { useEffect, useState } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import { SunIcon, MoonIcon } from '@/components/icons';
import { gsap } from '@/lib/animations/gsapConfig';

export function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const activeTheme = saved || (systemPrefersDark ? 'dark' : 'light');
    setTheme(activeTheme);
    setMounted(true);
  }, [setTheme]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Squash/wiggle button animation with GSAP on click
    gsap.fromTo(
      e.currentTarget,
      { scale: 0.9 },
      { scale: 1, duration: 0.2, ease: 'back.out(1.7)' }
    );
    toggleTheme();
  };

  if (!mounted) {
    return <div className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-surface)]" />;
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  );
}
