'use client';

import React from 'react';
import { StarIcon } from '@/components/icons';

const TESTIMONIALS = [
  { name: 'Kevin', role: 'Freelancer', review: 'Vibe-nya enak bgt buat WFH, kopinya mantap pas di kantong.' },
  { name: 'Adit', role: 'Mahasiswa', review: 'Roti bakarnya playful bgt, tempatnya estetik parah buat feed Instagram.' },
  { name: 'Sarah', role: 'Kreator Konten', review: 'Suka bgt sm konsep monokromnya, beda dari coffee shop lain!' },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-[var(--bg-surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Apa Kata <span className="italic font-normal">Keluarga Brayan</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-base)] flex flex-col justify-between space-y-4 hover:scale-102 transition-transform duration-200"
            >
              <p className="text-sm italic text-[var(--text-secondary)]">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-[var(--text-primary)]">{t.name}</h4>
                  <p className="text-xs text-[var(--text-secondary)]">{t.role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-[var(--text-primary)] text-[var(--text-primary)]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
