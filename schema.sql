-- SQL Setup Script for Supabase / PostgreSQL Database
-- Run this in your Supabase SQL Editor to initialize tables

-- 1. Create Menu Items Table
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price_hot TEXT,
  price_iced TEXT,
  category TEXT NOT NULL CHECK (category IN ('Coffee', 'Non-Coffee', 'Snacks')),
  tag TEXT,
  desc TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for menu_items
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-only access to menu_items" ON menu_items
  FOR SELECT USING (true);

CREATE POLICY "Allow write access for authenticated users to menu_items" ON menu_items
  FOR ALL USING (auth.role() = 'authenticated');


-- 2. Create Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for blog_posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-only access to blog_posts" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Allow write access for authenticated users to blog_posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');
