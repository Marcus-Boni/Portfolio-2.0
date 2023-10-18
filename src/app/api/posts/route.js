import { NextResponse } from 'next/server';
import { connectDB } from '@/utils';
import Post from '@/models/Post';

export const GET = async (req, res) => {
  try {
    const db = await connectDB();
    const posts = await Post.find({}).sort({ createdAt: -1 });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return NextResponse('Database Error!', { status: 500 });
  }
};
