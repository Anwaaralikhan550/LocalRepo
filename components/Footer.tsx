import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="glass mt-16">
      <div className="max-w-6xl mx-auto p-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} As-Saadah. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="/about" className="hover:text-gold">About</Link>
          <Link href="/contact" className="hover:text-gold">Contact</Link>
        </div>
      </div>
    </footer>
  )
}
