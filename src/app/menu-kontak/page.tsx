'use client';

import React, { useState } from 'react';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { SafeImage } from '@/components/ui/SafeImage';

interface MenuItem {
  id: string;
  name: string;
  priceHot?: string;
  priceIced?: string;
  category: 'Coffee' | 'Non-Coffee' | 'Snacks';
  tag?: 'Best Seller' | 'Baru' | 'Favorit';
  desc: string;
  imageUrl: string;
}

const DUMMY_MENU: MenuItem[] = [
  // Coffee
  { id: '1', name: 'Espresso', priceHot: '8.000', category: 'Coffee', desc: 'Sari kopi murni pekat diekstrak dengan tekanan tinggi.', imageUrl: 'https://images.unsplash.com/photo-1510707577719-0d34102d1840?q=80&w=600&auto=format&fit=crop' },
  { id: '2', name: 'Double Espresso', priceHot: '12.000', category: 'Coffee', desc: 'Double shot espresso blend arabica & robusta yang bold.', imageUrl: 'https://images.unsplash.com/photo-1579888944880-d98341148733?q=80&w=600&auto=format&fit=crop' },
  { id: '3', name: 'Americano / Black Coffee', priceHot: '10.000', priceIced: '12.000', category: 'Coffee', desc: 'Espresso murni dipadukan dengan air panas atau es batu.', imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop' },
  { id: '4', name: 'Cappuccino', priceHot: '15.000', priceIced: '17.000', category: 'Coffee', desc: 'Espresso signature dengan frother susu tebal melimpah.', imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop' },
  { id: '5', name: 'Coffee Latte', priceHot: '13.000', priceIced: '15.000', category: 'Coffee', desc: 'Espresso dengan susu creamy lembut khas barista Brayan.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },
  { id: '6', name: 'Kopsuren', priceHot: '13.000', priceIced: '15.000', category: 'Coffee', tag: 'Best Seller', desc: 'Kopi susu gula aren signature yang legit nan segar.', imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop' },
  { id: '7', name: 'Magic', priceHot: '15.000', category: 'Coffee', desc: 'Double ristretto dengan susu creamy yang pas di lidah.', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop' },
  { id: '8', name: 'Sanger', priceHot: '10.000', priceIced: '15.000', category: 'Coffee', desc: 'Kopi susu khas dengan takaran susu kental manis yang pas.', imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop' },
  { id: '9', name: 'v60 / Kalita', priceHot: '17.000', priceIced: '17.000', category: 'Coffee', desc: 'Seduhan manual dengan filter kertas untuk rasa yang clean.', imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop' },
  { id: '10', name: 'Vietnam Drip', priceHot: '17.000', priceIced: '20.000', category: 'Coffee', desc: 'Kopi tetes tradisional ala Vietnam dengan susu kental manis.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },
  { id: '11', name: 'Tubruk', priceHot: '10.000', category: 'Coffee', desc: 'Kopi hitam tradisional seduh langsung dengan ampas.', imageUrl: 'https://images.unsplash.com/photo-1510707577719-0d34102d1840?q=80&w=600&auto=format&fit=crop' },
  { id: '12', name: 'Caramel Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', desc: 'Espresso latte ditambah saus karamel manis nan harum.', imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop' },
  { id: '13', name: 'Salted Caramel Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', tag: 'Best Seller', desc: 'Paduan karamel manis, espresso, susu, dan sejumput garam gurih.', imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop' },
  { id: '14', name: 'Butterscotch Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', desc: 'Kopi susu dengan saus mentega karamel gurih lezat.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },
  { id: '15', name: 'Hazelnut Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', desc: 'Kopi susu dengan aroma hazelnut kacang yang khas.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },
  { id: '16', name: 'Banana Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', desc: 'Kopi susu dengan sentuhan sirup pisang manis lembut.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },
  { id: '17', name: 'Pandan Latte', priceHot: '16.000', priceIced: '18.000', category: 'Coffee', tag: 'Favorit', desc: 'Kopi susu pandan dengan aroma daun pandan lokal alami.', imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop' },

  // Non Coffee
  { id: '18', name: 'Chocolate Latte', priceHot: '12.000', priceIced: '15.000', category: 'Non-Coffee', desc: 'Suku dengan cokelat premium tebal khas Brayan.', imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop' },
  { id: '19', name: 'Matcha Latte', priceHot: '12.000', priceIced: '15.000', category: 'Non-Coffee', tag: 'Best Seller', desc: 'Susu dengan bubuk matcha murni berkualitas tinggi.', imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop' },
  { id: '20', name: 'Red Velvet Latte', priceHot: '12.000', priceIced: '15.000', category: 'Non-Coffee', desc: 'Susu dengan sensasi manis lembut kue red velvet.', imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop' },
  { id: '21', name: 'Taro Latte', priceHot: '12.000', priceIced: '15.000', category: 'Non-Coffee', desc: 'Susu dengan ekstrak taro manis gurih yang legit.', imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop' },

  // Snacks
  { id: '22', name: 'Cireng', priceHot: '10.000', category: 'Snacks', desc: 'Cireng goreng renyah dengan bumbu rujak pedas manis.', imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop' },
  { id: '23', name: 'Piscok', priceHot: '10.000', category: 'Snacks', desc: 'Pisang cokelat goreng lumer manis dibalut kulit lumpia renyah.', imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop' },
  { id: '24', name: 'Kentang', priceHot: '15.000', category: 'Snacks', tag: 'Favorit', desc: 'Kentang goreng gurih renyah porsi pas buat nongkrong.', imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop' },
  { id: '25', name: 'Sosis Bakar', priceHot: '20.000', category: 'Snacks', desc: 'Sosis bakar jumbo dengan olesan saus bakar dan mayones.', imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop' },
  { id: '26', name: 'Chicken Wings', priceHot: '20.000', category: 'Snacks', desc: 'Sayap ayam bumbu gurih dibakar/goreng renyah.', imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop' },
  { id: '27', name: 'Mix Platter', priceHot: '30.000', category: 'Snacks', tag: 'Best Seller', desc: 'Kombinasi kentang, sosis, dan camilan goreng porsi sharing.', imageUrl: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop' },
];

const OUTLETS = [
  { name: 'Tarumajaya (TarJay)', maps: 'https://bit.ly/BrayanNgopiTRJY', gofood: 'https://gofood.link/a/Rau6XrA' },
  { name: 'Permata Harapan Baru (PHB)', maps: 'https://bit.ly/BrayanNgopiPHB', gofood: 'https://gofood.link/a/Rau6rQQ' },
];

export default function MenuKontak() {
  useLenis();
  const [activeCategory, setActiveCategory] = useState<'All' | 'Coffee' | 'Non-Coffee' | 'Snacks'>('All');

  const filteredMenu = DUMMY_MENU.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center relative py-6">
          <WashiTape className="top-0 left-1/2 -translate-x-1/2 -translate-y-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Daftar Menu <span className="italic font-normal">& Outlet Kami</span>
          </h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto text-sm">
            Semua diseduh fresh oleh barista kami untuk menemani harimu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
          {(['All', 'Coffee', 'Non-Coffee', 'Snacks'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                activeCategory === cat
                  ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)]'
                  : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
              }`}
            >
              {cat === 'Snacks' ? 'Snacks / Camilan' : cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className="relative p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
            >
              {item.tag && (
                <span className="absolute -top-3 right-4 font-handwritten text-xs font-bold border-2 border-[var(--text-primary)] bg-[var(--bg-base)] px-3 py-1 rounded-full rotate-6 z-10">
                  {item.tag}
                </span>
              )}
              
              <div className="space-y-4">
                {/* Visual Image with grayscale to color hover transition */}
                <div className="h-40 rounded-2xl border border-[var(--border)] relative overflow-hidden group-hover:shadow-md transition-shadow">
                  <SafeImage
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                
                <h3 className="font-display text-xl font-bold group-hover:underline">{item.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2 border-t border-[var(--border)] pt-4">
                <div className="flex justify-between items-center text-sm font-semibold">
                  {item.priceHot && (
                    <span className="text-[var(--text-primary)]">
                      {item.priceIced ? 'Hot: ' : ''}Rp {item.priceHot}
                    </span>
                  )}
                  {item.priceIced && (
                    <span className="text-[var(--text-primary)]">
                      Iced: Rp {item.priceIced}
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
                  <span>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outlets Section */}
        <div className="border-t border-[var(--border)] pt-16 space-y-8">
          <h2 className="font-display text-3xl font-bold text-center">Outlet & Pemesanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {OUTLETS.map((outlet, idx) => (
              <div key={idx} className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{outlet.name}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">Open: 07:00 - 24:00 (Setiap Hari)</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={outlet.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border-2 border-[var(--text-primary)] text-sm font-semibold rounded-full hover:bg-[var(--text-primary)] hover:text-[var(--bg-surface)] transition-all duration-200"
                  >
                    Google Maps
                  </a>
                  <a
                    href={outlet.gofood}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] text-sm font-semibold rounded-full hover:scale-95 transition-all duration-200"
                  >
                    Pesan GoFood
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-[var(--text-secondary)]">Hubungi via WhatsApp Bisnis kami untuk info lebih lanjut:</p>
            <a
              href="https://wa.me/6285283810837?text=Halo%20Brayan%20Coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-8 py-3 rounded-full border-2 border-[var(--text-primary)] font-bold text-sm hover:scale-95 transition-transform"
            >
              Hubungi WhatsApp (+62 852-8381-0837)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
