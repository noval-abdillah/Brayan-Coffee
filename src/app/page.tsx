'use client';

import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { Testimonials } from '@/components/sections/Testimonials';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { FAQ } from '@/components/sections/FAQ';
import { useLenis } from '@/lib/animations/useLenis';

export default function Home() {
  useLenis();

  return (
    <>
      <Hero />
      <Testimonials />
      <BlogPreview />
      <FAQ />
    </>
  );
}
