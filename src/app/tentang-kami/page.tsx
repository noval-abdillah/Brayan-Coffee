'use client';

import React from 'react';
import { useLenis } from '@/lib/animations/useLenis';
import { CoffeeBeanIcon } from '@/components/icons';
import { WashiTape } from '@/components/ui/WashiTape';
import { WavyDivider } from '@/components/ui/WavyDivider';

import { SafeImage } from '@/components/ui/SafeImage';

export default function TentangKami() {
  useLenis();

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center relative py-6">
          <WashiTape className="top-0 left-1/2 -translate-x-1/2 -translate-y-4 rotate-2" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Cerita Hangat <span className="italic font-normal">Di Balik Seduhan</span>
          </h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto">
            Bagaimana secangkir kopi membawa kami pada mimpi untuk menghangatkan setiap sudut perkumpulan.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
          <div className="relative p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)]">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full border border-dashed border-[var(--text-secondary)]/30 animate-spin" style={{ animationDuration: '30s' }} />
            <div className="h-64 rounded-2xl bg-[var(--border)]/50 border border-[var(--border)] overflow-hidden relative group">
              <SafeImage
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
                alt="Suasana Cafe Brayan Coffee"
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold">Kopi Kami, Cerita Kita</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Brayan Coffee lahir dari keinginan sederhana: menciptakan tempat berkumpul (brayan) yang tidak berjarak. Kami percaya kopi berkualitas tidak harus dinikmati secara kaku.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Dengan konsep monokrom yang playful, kami menyajikan kopi terbaik dengan nuansa santai, estetik, dan bersahabat untuk siapa saja.
            </p>
          </div>
        </div>

        <WavyDivider className="py-8" />
        
        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Playful', desc: 'Tidak ada batasan kaku. Mari bersenang-senang dengan ide dan kreativitas.' },
            { title: 'Hangat', desc: 'Menjadi rumah kedua yang ramah untuk mahasiswa dan pekerja remote.' },
            { title: 'Otentik', desc: 'Rasa dan kualitas biji kopi pilihan nusantara disajikan apa adanya.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] hover:scale-95 transition-transform duration-200">
              <span className="font-handwritten text-3xl text-[var(--text-secondary)]">0{idx + 1}</span>
              <h3 className="font-display text-xl font-bold mt-2">{item.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
