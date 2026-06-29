'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { MenuIcon, CloseIcon, CoffeeBeanIcon } from '@/components/icons';
import { gsap } from '@/lib/animations/gsapConfig';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/tentang-kami', label: 'Tentang Kami' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/menu-kontak', label: 'Menu & Kontak' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-base)]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            <CoffeeBeanIcon className="w-6 h-6 rotate-12" />
            <span>Brayan Coffee</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors hover:text-[var(--text-primary)] ${
                    isActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[var(--text-primary)] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/admin/login"
              className="text-xs font-semibold px-4 py-2 rounded-full border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-surface)] transition-all duration-200"
            >
              Admin Portal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-[var(--text-primary)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[var(--border)] bg-[var(--bg-base)] px-4 pt-2 pb-4 space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'bg-[var(--border)] text-[var(--text-primary)] font-bold'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--border)]/50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[var(--border)] mt-2">
            <Link
              href="/admin/login"
              className="block w-full text-center px-4 py-2 rounded-full border border-[var(--text-primary)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-surface)] transition-all duration-200"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
