import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Marcus Dev',
  description:
    'A portfolio page is a dedicated section of a website or a standalone webpage that showcases the work, projects, and achievements of an individual, freelancer, or a company.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <section className="container">
              <NavBar />
              {children}
              <Footer />
            </section>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
