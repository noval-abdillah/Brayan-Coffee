'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { DUMMY_POSTS } from '../page';
import Link from 'next/link';

import { SafeImage } from '@/components/ui/SafeImage';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostDetail({ params }: PageProps) {
  useLenis();

  const post = DUMMY_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/blog"
          className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1"
        >
          &larr; Kembali ke Blog
        </Link>

        <article className="p-8 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-lg space-y-6 relative">
          <WashiTape className="-top-4 left-6 rotate-1" />
          
          <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] pt-4">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.2]">
            {post.title}
          </h1>

          <div className="h-64 rounded-2xl overflow-hidden border border-[var(--border)] relative">
            <SafeImage
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="text-[var(--text-secondary)] space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              Seduhan kopi nikmat tidak pernah terlepas dari bagaimana proses pembuatannya. Di Brayan Coffee Tarumajaya dan Permata Harapan Baru (PHB) Bekasi, kami berupaya menjaga kualitas rasa agar tetap konsisten sejak biji kopi dipanggang hingga disajikan di atas meja Anda.
            </p>
            <p>
              Bagi Anda yang menyukai aktivitas menyeduh sendiri di rumah, langkah awal yang krusial adalah memahami perbedaan dasar ekstraksi dan bagaimana air dengan suhu optimal (sekitar 90-96 derajat Celcius) memengaruhi ekstraksi minyak alami dari bubuk kopi.
            </p>
            <p>
              Kami mengundang Anda juga untuk langsung berdiskusi dengan barista kami mengenai tips menuangkan susu (pouring technique) atau mendiskusikan biji kopi nusantara teranyar yang sedang kami seduh minggu ini.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
