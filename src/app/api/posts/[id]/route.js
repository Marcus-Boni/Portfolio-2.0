import { NextResponse } from 'next/server';
import { connectDB } from '@/utils';
import Post from '@/models/Post';

export const GET = async (req, { params: { id } }) => {
  try {
    const db = await connectDB();
    const posts = await Post.findById(id).lean();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return NextResponse('Database Error!', { status: 500 });
  }
};
