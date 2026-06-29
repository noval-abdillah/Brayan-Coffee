'use client';

import React, { useState } from 'react';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { CoffeeBeanIcon, CloseIcon } from '@/components/icons';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Vibe' | 'Menu' | 'Aktivitas';
  imageUrl: string;
  outlet: 'Tarumajaya' | 'PHB' | 'Semua';
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', title: 'Sudut PHB Terang', category: 'Vibe', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop', outlet: 'PHB' },
  { id: '2', title: 'Kopi Susu Signatur', category: 'Menu', imageUrl: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop', outlet: 'Semua' },
  { id: '3', title: 'Barista Sedang Menyeduh', category: 'Aktivitas', imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop', outlet: 'Tarumajaya' },
  { id: '4', title: 'Vibe Hangat Malam Hari', category: 'Vibe', imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=600&auto=format&fit=crop', outlet: 'Tarumajaya' },
  { id: '5', title: 'Roti Bakar Playful', category: 'Menu', imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop', outlet: 'Semua' },
  { id: '6', title: 'Coretan Doodle Brayan', category: 'Aktivitas', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop', outlet: 'PHB' },
];

import { SafeImage } from '@/components/ui/SafeImage';

export default function Galeri() {
  useLenis();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeOutlet, setActiveOutlet] = useState<'Semua' | 'Tarumajaya' | 'PHB'>('Semua');

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeOutlet === 'Semua' || item.outlet === activeOutlet || item.outlet === 'Semua'
  );

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center relative py-6">
          <WashiTape className="top-0 left-1/2 -translate-x-1/2 -translate-y-4 rotate-1" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Galeri <span className="italic font-normal">Momen & Vibe</span>
          </h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto text-sm">
            Intip suasana santai dan kreasi minuman kami dari dekat.
          </p>
        </div>

        {/* Filter Outlet Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
          {(['Semua', 'Tarumajaya', 'PHB'] as const).map((ot) => (
            <button
              key={ot}
              onClick={() => setActiveOutlet(ot)}
              className={`px-6 py-2 rounded-full text-xs font-semibold border-2 transition-all duration-200 ${
                activeOutlet === ot
                  ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)]'
                  : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
              }`}
            >
              {ot === 'Semua' ? 'Semua Cabang' : `Cabang ${ot}`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer relative aspect-[4/5] rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] overflow-hidden transition-all duration-300 hover:scale-[0.98] hover:shadow-lg flex flex-col justify-between p-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[var(--text-primary)]/20 bg-[var(--bg-base)]">
                    {item.category}
                  </span>
                  <span className="text-[9px] font-mono text-[var(--text-secondary)]">
                    {item.outlet === 'Semua' ? 'Semua Cabang' : item.outlet}
                  </span>
                </div>
                <span className="font-handwritten text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Click
                </span>
              </div>

              {/* Placeholder for Grayscale Images */}
              <div className="flex-grow rounded-xl overflow-hidden bg-[var(--border)]/35 flex items-center justify-center relative">
                <SafeImage
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <div>
                <h3 className="font-display text-sm font-bold truncate">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-base)]/90 backdrop-blur-md p-4">
            <div className="relative w-full max-w-2xl p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-2xl flex flex-col space-y-6">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full border border-[var(--border)] hover:bg-[var(--border)] transition-colors"
                aria-label="Close lightbox"
              >
                <CloseIcon className="w-6 h-6" />
              </button>

              <div className="h-96 rounded-2xl overflow-hidden border border-[var(--border)] relative">
                <SafeImage
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                    {selectedItem.category} • Cabang {selectedItem.outlet}
                  </span>
                  <h2 className="font-display text-2xl font-bold mt-1">{selectedItem.title}</h2>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
