'use client';

import React from 'react';
import Link from 'next/link';
import { DUMMY_POSTS } from '@/app/blog/page';
import { CoffeeBeanIcon } from '@/components/icons';
import { SafeImage } from '@/components/ui/SafeImage';

export function BlogPreview() {
  const latestPosts = DUMMY_POSTS.slice(0, 2);

  return (
    <section className="py-16 bg-[var(--bg-base)] border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Kabar & <span className="italic font-normal">Cerita Terbaru</span>
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-2">
            Ikuti tips menyeduh dari barista dan info aktivitas outlet kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="h-40 rounded-xl overflow-hidden border border-[var(--border)] relative">
                  <SafeImage
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] uppercase tracking-wider font-bold">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:underline">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] inline-flex items-center gap-1"
                >
                  Baca Selengkapnya &rarr;
                </Link>
                <CoffeeBeanIcon className="w-5 h-5 text-[var(--text-secondary)]/20" />
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[var(--text-primary)] font-bold text-sm hover:scale-95 transition-transform"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
}
