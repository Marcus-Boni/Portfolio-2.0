import { NextResponse } from 'next/server';
import { connectDB } from '@/utils';
import Post from '@/models/Post';

export const GET = async (req) => {
  const url = new URL(req.url);

  const username = url.searchParams.get('username');

  try {
    const db = await connectDB();
    const posts = await Post.find(username && { username }).sort({
      createdAt: -1
    });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return NextResponse('Database Error!', { status: 500 });
  }
};

export const POST = async (req) => {
  const body = await req.json();

  const newPost = new Post(body);

  try {
    const db = await connectDB();

    await newPost.save();

    return new NextResponse('Post has been created', { status: 201 });
  } catch (error) {
    return new NextResponse('Database Error!', { status: 500 });
  }
};
