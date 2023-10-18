import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialProvider from 'next-auth/providers/credentials';
import { connectDB } from '@/utils';
import User from '@/models/User';
import bcrypt from 'bcryptjs/dist/bcrypt';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        await connectDB();

        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error('Wrong Credentials!');
            }
          }

          if (user) {
            const isValid = await bcrypt;
          } else {
            throw new Error('No user found!');
          }
        } catch (error) {
          throw new Error(error);
        }
      }
    })
  ],
  pages: {
    error: '/dashboard/login'
  }
});

export { handler as GET, handler as POST };
