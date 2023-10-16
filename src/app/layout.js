import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}