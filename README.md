# Brayan Coffee Web Application

A customized digital platform for Brayan Coffee, designed with a **Playful Monochrome Cartoon Theme** using modern web technologies.

## 📸 Preview Tampilan Aplikasi
![Landing Page & Vibe](https://raw.githubusercontent.com/noval-abdillah/Brayan-Coffee/main/public/images/preview-landing.png)
![Dashboard Content Manager](https://raw.githubusercontent.com/noval-abdillah/Brayan-Coffee/main/public/images/preview-dashboard.png)

## 🚀 Keuntungan Menggunakan Website Ini

1. **Brand Identity Kuat (Playful Monochrome):** Desain visual 100% hitam-putih-abu bergaya kartun/doodle yang estetik, memberikan diferensiasi yang unik dibanding kompetitor kafe tradisional.
2. **Kinerja & Responsivitas Sangat Cepat:** Dibangun menggunakan Next.js 14 App Router untuk performa render optimal (skor Lighthouse tinggi) dan mobile-first responsive design.
3. **Optimasi Search Engine Modern (SEO, AEO, GEO Ready):**
   * **SEO:** Meta tag lengkap untuk robot perayap Google.
   * **AEO:** Integrasi skema Q&A interaktif yang siap dijawab mesin pencari.
   * **GEO:** Skema lokal (`LocalBusiness` JSON-LD) yang memisahkan data cabang Tarumajaya dan PHB Bekasi agar mudah diindeks AI (seperti ChatGPT/Perplexity).
4. **Admin Dashboard CMS:** Portal internal khusus admin/owner untuk mengelola data menu makanan/minuman, mengunggah foto galeri cabang spesifik, dan mempublikasikan artikel blog tanpa menulis kode.
5. **Transisi Lancar & Ringan:** Animasi interaktif dinamis menggunakan GSAP ScrollTrigger dan smooth-scroll Lenis yang ramah performa dan mendukung preferensi `prefers-reduced-motion`.

---

## 📂 Struktur Folder Proyek

```
brayan-coffee/
├── src/
│   ├── app/
│   │   ├── (marketing)/        # Halaman publik (Home, Tentang Kami, Galeri, Menu & Kontak, Blog)
│   │   ├── admin/              # Admin Portal (Login & Dashboard manajemen konten)
│   │   └── api/                # API REST Handlers (Menu, Blog, dan Auth)
│   ├── components/
│   │   ├── ui/                 # Elemen presentasi (SafeImage, WashiTape, WavyDivider)
│   │   ├── layout/             # Struktur utama (Navbar, Footer, ThemeToggle)
│   │   └── icons/              # Ikon custom SVG (currentColor adaptif light/dark)
│   ├── lib/
│   │   ├── animations/         # Konfigurasi GSAP & Lenis smooth scroll
│   │   ├── supabase.ts         # Inisialisasi Klien Supabase JS SDK
│   │   └── seo.ts              # Pengaturan metadata & Structured Data JSON-LD
│   ├── stores/                 # State management Zustand (Theme store)
│   └── styles/                 # CSS Variables & Design tokens global
├── schema.sql                  # Skrip tabel inisialisasi database Supabase
├── .env.example                # Variabel lingkungan template
└── package.json                # Daftar dependensi & script runner
```

---

## 🛠️ Langkah Pemasangan (Setup)

1. **Salin Environment Variables:**
   ```bash
   cp .env.example .env.local
   ```
   Isi file tersebut dengan URL & Anon Key database Supabase Anda.

2. **Inisialisasi Database:**
   Salin dan jalankan skrip SQL di file `schema.sql` pada SQL Editor di dashboard Supabase Anda.

3. **Install Dependensi:**
   ```bash
   npm install
   ```

4. **Jalankan Project:**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

5. **Akses Dashboard Admin:**
   Masuk ke halaman `/admin/login` dengan akun tester:
   * **Username:** `brayan`
   * **Password:** `coffee123`
