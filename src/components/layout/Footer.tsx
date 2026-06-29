'use client';

import React from 'react';
import Link from 'next/link';
import { CoffeeBeanIcon, MapPinIcon, PhoneIcon, ClockIcon, InstagramIcon, TiktokIcon, EmailIcon } from '@/components/icons';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-secondary)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-display text-2xl font-bold text-[var(--text-primary)]">
              <CoffeeBeanIcon className="w-6 h-6 rotate-12" />
              <span>Brayan Coffee</span>
            </div>
            <p className="text-sm max-w-xs">
              Indie coffee shop yang bikin ngopi terasa lebih hangat, playful, dan estetik.
            </p>
            {/* Social Icons inside Footer Brand info */}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com/brayanngopibekasi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@brayanngopibekasi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)]" aria-label="TikTok">
                <TiktokIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Outlets & Operational Hours */}
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider">Jam Operasional & Outlet</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <ClockIcon className="w-5 h-5 text-[var(--text-primary)] flex-shrink-0" />
                <span>07:00 - 24:00 (Setiap Hari)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-[var(--text-primary)] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">Tarumajaya (TarJay)</p>
                  <a href="https://bit.ly/BrayanNgopiTRJY" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text-primary)]">
                    Lihat Peta
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-[var(--text-primary)] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-[var(--text-primary)]">Permata Harapan Baru (PHB)</p>
                  <a href="https://bit.ly/BrayanNgopiPHB" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--text-primary)]">
                    Lihat Peta
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social / Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-wider">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-[var(--text-primary)]" />
                <a href="https://wa.me/6285283810837" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] font-semibold">
                  +62 852 8381 0837
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="w-5 h-5 text-[var(--text-primary)]" />
                <a href="mailto:farhancksgroup@gmail.com" className="hover:text-[var(--text-primary)]">
                  farhancksgroup@gmail.com
                </a>
              </div>
              <p className="text-xs pt-2">
                © {new Date().getFullYear()} Brayan Coffee. Semua hak cipta dilindungi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
