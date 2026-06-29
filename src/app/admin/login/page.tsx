'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLenis } from '@/lib/animations/useLenis';
import { WashiTape } from '@/components/ui/WashiTape';
import { CoffeeBeanIcon } from '@/components/icons';

export default function AdminLogin() {
  useLenis();
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Credentials sync for tester account requested: brayan / coffee123
    if (username === 'brayan' && password === 'coffee123') {
      router.push('/admin/dashboard');
    } else {
      setError('Username atau password salah! Gunakan: brayan / coffee123');
    }
  };

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)] min-h-screen flex items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="relative p-8 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-xl flex flex-col space-y-6">
          <WashiTape className="-top-4 left-1/2 -translate-x-1/2 rotate-1" />
          
          <div className="text-center">
            <CoffeeBeanIcon className="w-12 h-12 text-[var(--text-primary)] mx-auto rotate-12" />
            <h1 className="font-display text-2xl font-bold mt-4">Admin Portal</h1>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Khusus owner/admin untuk memperbarui menu & galeri
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full h-11 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] transition-all"
                placeholder="brayan"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 rounded-md border border-[var(--border)] bg-[var(--bg-base)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--text-primary)] transition-all"
                placeholder="coffee123"
                required
              />
            </div>

            {error && <p className="text-xs text-red-500 font-semibold text-center">{error}</p>}

            <button
              type="submit"
              className="w-full h-11 rounded-full border-2 border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-surface)] font-bold text-sm hover:scale-95 transition-transform mt-2"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
