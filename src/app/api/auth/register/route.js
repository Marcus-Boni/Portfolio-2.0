import User from '@/models/User';
import { connectDB } from '@/utils';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectDB();

  const hashedPassword = await bcryptjs.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });
  try {
    await newUser.save();
    return new NextResponse('User has been created', { status: 201 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
