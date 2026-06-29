'use client';

import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: 'Di mana alamat lokasi Brayan Coffee di Bekasi?',
      answer: 'Brayan Coffee memiliki dua outlet resmi di Bekasi, yaitu Cabang Tarumajaya (TarJay) dan Cabang Permata Harapan Baru (PHB). Kedua lokasi sudah terdaftar di Google Maps untuk memudahkan navigasi.',
    },
    {
      question: 'Jam berapa jam buka operasional Brayan Coffee?',
      answer: 'Kedua outlet Brayan Coffee buka setiap hari mulai pukul 07:00 WIB sampai 24:00 WIB.',
    },
    {
      question: 'Apakah di Brayan Coffee tersedia koneksi WiFi untuk WFH?',
      answer: 'Ya, kami menyediakan fasilitas WiFi gratis berkecepatan tinggi yang ramah untuk kebutuhan kerja remote (WFH) maupun belajar kelompok mahasiswa.',
    },
    {
      question: 'Bagaimana cara melakukan pemesanan online di Brayan Coffee?',
      answer: 'Anda dapat memesan menu kopi dan camilan kami melalui layanan GoFood, GrabFood, atau menghubungi langsung WhatsApp bisnis resmi kami.',
    },
  ];

  return (
    <section className="py-16 bg-[var(--bg-base)] border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Pertanyaan <span className="italic font-normal">Sering Diajukan (FAQ)</span>
          </h2>
          <p className="text-xs text-[var(--text-secondary)] mt-2">
            Membantu Anda mendapatkan informasi instan seputar operasional Brayan Coffee.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[28px] border border-[var(--border)] bg-[var(--bg-surface)] space-y-2"
            >
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                {faq.question}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
