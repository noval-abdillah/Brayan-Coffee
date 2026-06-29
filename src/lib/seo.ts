import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brayan Coffee Bekasi | Tempat Ngopi Estetik & WFH Friendly Tarumajaya & PHB',
  description: 'Brayan Coffee menyajikan kopi susu gula aren terbaik di Bekasi (Tarumajaya & Permata Harapan Baru). Tempat nongkrong estetik, tenang untuk WFH, dan playful.',
  keywords: [
    'Brayan Coffee',
    'Brayan Coffee Bekasi',
    'Tempat ngopi Tarumajaya',
    'Coffee shop Permata Harapan Baru',
    'Kopi susu gula aren Bekasi',
    'Cafe ramah WFH Bekasi',
    'Cafe estetik terdekat',
    'Brayan Ngopi Tarjay',
    'Brayan Ngopi PHB',
  ],
  openGraph: {
    title: 'Brayan Coffee Bekasi | Tempat Ngopi Estetik & WFH Friendly',
    description: 'Sajikan kopi susu signature dan cemilan lezat dengan konsep monokrom playful di Tarumajaya & PHB Bekasi.',
    type: 'website',
    locale: 'id_ID',
    url: 'https://brayancoffee.com',
  },
};

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CafeOrCoffeeShop',
      'name': 'Brayan Coffee Tarumajaya',
      'image': 'https://brayancoffee.com/images/hero-preview.jpg',
      '@id': 'https://brayancoffee.com/#tarumajaya',
      'url': 'https://brayancoffee.com/menu-kontak',
      'telephone': '+6285283810837',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Tarumajaya',
        'addressLocality': 'Bekasi',
        'addressRegion': 'Jawa Barat',
        'addressCountry': 'ID',
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        'opens': '07:00',
        'closes': '24:00'
      },
      'menu': 'https://brayancoffee.com/menu-kontak',
      'servesCuisine': 'Coffee and Light Meals'
    },
    {
      '@type': 'CafeOrCoffeeShop',
      'name': 'Brayan Coffee Permata Harapan Baru (PHB)',
      'image': 'https://brayancoffee.com/images/hero-preview.jpg',
      '@id': 'https://brayancoffee.com/#phb',
      'url': 'https://brayancoffee.com/menu-kontak',
      'telephone': '+6285283810837',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Permata Harapan Baru (PHB)',
        'addressLocality': 'Bekasi',
        'addressRegion': 'Jawa Barat',
        'addressCountry': 'ID',
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
        ],
        'opens': '07:00',
        'closes': '24:00'
      },
      'menu': 'https://brayancoffee.com/menu-kontak',
      'servesCuisine': 'Coffee and Light Meals'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://brayancoffee.com/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Di mana alamat lokasi Brayan Coffee di Bekasi?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Brayan Coffee memiliki dua outlet resmi di Bekasi, yaitu Cabang Tarumajaya (TarJay) dan Cabang Permata Harapan Baru (PHB).'
          }
        },
        {
          '@type': 'Question',
          'name': 'Jam berapa jam buka operasional Brayan Coffee?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Kedua outlet Brayan Coffee buka setiap hari mulai pukul 07:00 WIB sampai 24:00 WIB.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Apakah di Brayan Coffee tersedia koneksi WiFi untuk WFH?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ya, Brayan Coffee menyediakan fasilitas WiFi gratis berkecepatan tinggi yang ramah untuk pekerja remote (WFH) dan mahasiswa.'
          }
        }
      ]
    }
  ]
};
