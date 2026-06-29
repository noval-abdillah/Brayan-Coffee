'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { CupSteamIcon } from '@/components/icons';
import { gsap } from '@/lib/animations/gsapConfig';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

import { SafeImage } from '../ui/SafeImage';

export function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // 07:00 - 24:00 Jakarta (UTC+7)
    const checkStatus = () => {
      const now = new Date();
      // Adjust to UTC+7 locally or system based.
      // Since it's local client time, let's look at local hours
      const hours = now.getHours();
      // Open if >= 7 and < 24 (12 AM)
      setIsOpen(hours >= 7 && hours < 24);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.hero-badge', { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' });
      gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.2, ease: 'power3.out' });
      gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.6, delay: 0.4, ease: 'power2.out' });
      gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.6, delay: 0.5, ease: 'power2.out' });
      gsap.from('.hero-card', { opacity: 0, scale: 0.95, duration: 0.8, delay: 0.6, ease: 'back.out(1.2)' });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="relative overflow-hidden py-16 lg:py-24 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Status Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] text-xs font-semibold">
            <span className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-[#22C55E]' : 'bg-[#EF4444]'}`} />
            <span>{isOpen ? 'Sedang Menyeduh Sekarang' : 'Tutup — Buka Pukul 07:00'}</span>
          </div>

          {/* Headline (Fraunces Serif + Jakarta Sans) */}
          <h1 className="hero-title font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
            Temukan Jiwa Kopi <br />
            <span className="italic font-normal">Indie Sejati</span> di Sini.
          </h1>

          <p className="hero-desc text-[var(--text-secondary)] text-lg sm:text-xl max-w-lg leading-relaxed">
            Brayan Coffee menyajikan seduhan kopi terbaik dengan vibe hangat, estetik, dan playful. Tempat ternyaman buat tugas atau remote work.
          </p>

          {/* CTAs */}
          <div className="hero-ctas flex flex-wrap gap-4 pt-2">
            <Link
              href="/menu-kontak"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold text-sm border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] hover:scale-95 transition-all duration-200"
            >
              Lihat Menu
            </Link>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full font-semibold text-sm border-2 border-[var(--text-primary)] bg-transparent text-[var(--text-primary)] hover:scale-95 transition-all duration-200"
            >
              Cerita Kami
            </Link>
          </div>
        </div>

        {/* Right Content / Visual Card */}
        <div className="hero-card flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Visual Dotted Circles Decoration */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-dashed border-[var(--text-secondary)]/30 animate-spin" style={{ animationDuration: '20s' }} />
            
            {/* Card Content placeholder for illustration */}
            <div className="h-64 rounded-2xl bg-[var(--border)]/50 border border-[var(--border)] overflow-hidden relative group">
              <SafeImage
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop"
                alt="Es Kopi Susu Signature"
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <h4 className="font-display text-lg font-bold text-[var(--text-primary)]">Kopi Susu Gula Aren</h4>
                <p className="text-xs text-[var(--text-secondary)]">Best Seller</p>
              </div>
              <span className="font-handwritten text-xl font-bold border-2 border-[var(--text-primary)] px-3 py-1 rounded-full rotate-6 bg-[var(--bg-base)]">
                Rp 18k
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
