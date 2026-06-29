import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { z } from 'zod';

const MenuSchema = z.object({
  name: z.string().min(1),
  price_hot: z.string().optional(),
  price_iced: z.string().optional(),
  category: z.enum(['Coffee', 'Non-Coffee', 'Snacks']),
  tag: z.string().optional(),
  desc: z.string().optional(),
  image_url: z.string().url().optional(),
});

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('name', { ascending: true });

    if (error) {
      // Fallback to offline/mock data if database is not connected
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = MenuSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error.errors }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('menu_items')
      .insert([result.data])
      .select();

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
