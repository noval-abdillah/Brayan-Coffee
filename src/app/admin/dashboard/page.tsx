'use client';

import React, { useState } from 'react';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { CoffeeBeanIcon, CupSteamIcon } from '@/components/icons';

interface PhotoItem {
  id: string;
  url: string;
  caption: string;
  outlet: 'Tarumajaya' | 'PHB' | 'Semua';
}

interface BlogItem {
  id: string;
  title: string;
  content: string;
}

export default function AdminDashboard() {
  useLenis();

  // Simple reactive store for mock dynamic actions
  const [photos, setPhotos] = useState<PhotoItem[]>([
    { id: '1', url: '/images/phb-vibe.jpg', caption: 'Sudut Terang PHB Bekasi', outlet: 'PHB' },
    { id: '2', url: '/images/tarjay-brewing.jpg', caption: 'Seduh Manual Tarumajaya', outlet: 'Tarumajaya' },
  ]);

  const [blogs, setBlogs] = useState<BlogItem[]>([
    { id: '1', title: 'Tips Latte Art Estetik', content: 'Panduan lengkap pouring susu...' },
  ]);

  const [photoCaption, setPhotoCaption] = useState('');
  const [photoOutlet, setPhotoOutlet] = useState<'Tarumajaya' | 'PHB' | 'Semua'>('Semua');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');

  const handleUploadPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoCaption) return;
    const newItem: PhotoItem = {
      id: Date.now().toString(),
      url: '/images/placeholder.jpg',
      caption: photoCaption,
      outlet: photoOutlet,
    };
    setPhotos([newItem, ...photos]);
    setPhotoCaption('');
  };

  const handleCreateBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogTitle || !blogContent) return;
    const newBlog: BlogItem = {
      id: Date.now().toString(),
      title: blogTitle,
      content: blogContent,
    };
    setBlogs([newBlog, ...blogs]);
    setBlogTitle('');
    setBlogContent('');
  };

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="relative py-6 border-b border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <WashiTape className="-top-4 left-6 rotate-1" />
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight mt-4">
              Dashboard <span className="italic font-normal">Manajemen Konten</span>
            </h1>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Selamat datang kembali, Owner Brayan Coffee.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Sesi Aktif: Tester
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section 1: Upload Foto Real-Life */}
          <div className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] space-y-6">
            <h2 className="font-display text-xl font-bold flex items-center gap-2">
              <CoffeeBeanIcon className="w-5 h-5" />
              Kelola Galeri Foto Real-Life
            </h2>

            <form onSubmit={handleUploadPhoto} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                  Pilih File Foto
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-xs text-[var(--text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-2 file:border-[var(--text-primary)] file:text-xs file:font-semibold file:bg-[var(--bg-base)] file:text-[var(--text-primary)] file:cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                  Keterangan / Kategori
                </label>
                <input
                  type="text"
                  value={photoCaption}
                  onChange={(e) => setPhotoCaption(e.target.value)}
                  placeholder="Contoh: Sudut Santai Tarumajaya"
                  className="w-full h-11 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                  Pilih Cabang / Lokasi Foto
                </label>
                <select
                  value={photoOutlet}
                  onChange={(e) => setPhotoOutlet(e.target.value as any)}
                  className="w-full h-11 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] font-semibold text-xs"
                >
                  <option value="Semua">Semua Cabang</option>
                  <option value="Tarumajaya">Tarumajaya (TarJay)</option>
                  <option value="PHB">Permata Harapan Baru (PHB)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-full border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-bold text-sm hover:scale-95 transition-transform"
              >
                Upload & Tampilkan
              </button>
            </form>

            <div className="border-t border-[var(--border)] pt-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Foto Aktif ({photos.length})</h3>
              <div className="grid grid-cols-2 gap-4">
                {photos.map((photo) => (
                  <div key={photo.id} className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] space-y-2">
                    <div className="h-24 rounded-lg bg-[var(--border)]/30 flex items-center justify-center text-[var(--text-secondary)]/30">
                      <CoffeeBeanIcon className="w-8 h-8" />
                    </div>
                    <p className="text-xs font-bold truncate">{photo.caption}</p>
                    <span className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-mono block">
                      Cabang: {photo.outlet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2: Blog Manager */}
          <div className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] space-y-6">
            <h2 className="font-display text-xl font-bold flex items-center gap-2">
              <CupSteamIcon className="w-5 h-5" />
              Tulis & Kelola Artikel Blog
            </h2>

            <form onSubmit={handleCreateBlog} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                  Judul Artikel
                </label>
                <input
                  type="text"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  placeholder="Contoh: Manfaat Menyeduh Kopi Sendiri"
                  className="w-full h-11 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                  Konten Artikel
                </label>
                <textarea
                  value={blogContent}
                  onChange={(e) => setBlogContent(e.target.value)}
                  placeholder="Tulis cerita atau tips di sini..."
                  rows={4}
                  className="w-full p-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)]"
                />
              </div>
              <button
                type="submit"
                className="w-full h-11 rounded-full border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-bold text-sm hover:scale-95 transition-transform"
              >
                Terbitkan Artikel
              </button>
            </form>

            <div className="border-t border-[var(--border)] pt-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Artikel Terbit ({blogs.length})</h3>
              <div className="space-y-2">
                {blogs.map((blog) => (
                  <div key={blog.id} className="p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-base)] flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold">{blog.title}</h4>
                      <p className="text-xs text-[var(--text-secondary)] truncate max-w-xs">{blog.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
