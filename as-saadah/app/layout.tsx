import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'As-Saadah',
  description: 'Transforming Lives, Inspiring Hope',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 backdrop-blur bg-white/30 shadow-sm">
          <nav className="container mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-bold text-teal text-lg">As-Saadah</Link>
            <div className="space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/glossary">Glossary</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">{children}</main>
        <footer className="bg-white/30 backdrop-blur p-4 text-center text-sm">
          &copy; {new Date().getFullYear()} As-Saadah
        </footer>
      </body>
    </html>
  );
}
