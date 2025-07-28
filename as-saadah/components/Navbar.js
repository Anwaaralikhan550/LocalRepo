import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/70 shadow-sm flex items-center justify-between px-6 py-4">
      <Link href="/" className="font-bold text-teal">As-Saadah</Link>
      <div className="space-x-4">
        <Link href="/about" className="hover:text-teal">About</Link>
        <Link href="/blog" className="hover:text-teal">Blog</Link>
        <Link href="/glossary" className="hover:text-teal">Glossary</Link>
        <Link href="/contact" className="hover:text-teal">Contact</Link>
      </div>
    </nav>
  )
}
