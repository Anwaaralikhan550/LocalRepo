'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/contact', label: 'Contact' },
  { href: '/donations', label: 'Donations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full glass z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-semibold text-teal">As-Saadah</Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle Menu</span>
          &#9776;
        </button>
        <ul className={`md:flex gap-4 ${open ? 'block' : 'hidden'} md:block`}>
          {links.map((link) => (
            <li key={link.href} className="my-2 md:my-0">
              <Link href={link.href} className="hover:text-gold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
