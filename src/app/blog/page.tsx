'use client';

import React from 'react';
import Link from 'next/link';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { CoffeeBeanIcon } from '@/components/icons';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

export const DUMMY_POSTS: BlogPost[] = [
  {
    slug: 'tips-membuat-latte-art-di-rumah',
    title: 'Tips Mudah Membuat Latte Art Estetik di Rumah',
    excerpt: 'Ingin membuat latte art cantik seperti di Brayan Coffee? Simak tips dasar frothing susu dan teknik pouring untuk pemula.',
    date: '28 Juni 2026',
    readTime: '3 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'perbedaan-arabica-dan-robusta',
    title: 'Perbedaan Arabica & Robusta: Mana yang Cocok Untukmu?',
    excerpt: 'Masih bingung memilih jenis biji kopi? Pelajari profil rasa, kandungan kafein, dan kecocokan metode seduh antara Arabica dan Robusta.',
    date: '25 Juni 2026',
    readTime: '4 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop',
  },
  {
    slug: 'sejarah-kopi-susu-gula-aren-indonesia',
    title: 'Menelusuri Sejarah Kopi Susu Gula Aren di Indonesia',
    excerpt: 'Kenapa es kopi susu gula aren begitu dicintai anak muda urban? Mari kuliti asal-usul tren minuman yang jadi andalan di outlet Tarumajaya dan PHB Bekasi.',
    date: '20 Juni 2026',
    readTime: '5 menit baca',
    imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop',
  },
];

export default function BlogList() {
  useLenis();

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center relative py-6">
          <WashiTape className="top-0 left-1/2 -translate-x-1/2 -translate-y-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Cerita & <span className="italic font-normal">Kabar Seduhan</span>
          </h1>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto text-sm">
            Artikel seputar kopi, aktivitas outlet Brayan Coffee Bekasi, dan tips menarik dari barista kami.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="space-y-8">
          {DUMMY_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] hover:shadow-lg transition-shadow duration-200 flex flex-col md:flex-row gap-6 justify-between relative group"
            >
              <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden border border-[var(--border)] relative flex-shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold group-hover:underline">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:translate-x-2 transition-transform duration-200 inline-flex items-center gap-1"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                  <CoffeeBeanIcon className="w-5 h-5 text-[var(--text-secondary)]/20" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
