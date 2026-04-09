'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Solution',      href: '#solution' },
    { label: 'Impact',        href: '#impact'   },
    { label: 'How it works',  href: '#how'      },
    { label: 'Pricing',       href: '#pricing'  },
    { label: 'Contact',       href: '#contact'  },
  ]

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f1f5f9]/92 backdrop-blur-md border-b border-[#dde3ea] py-3 shadow-sm' : 'py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center gap-10">

        {/* ── LOGO ──────────────────────────────────────────────────────────
            Coloca tu logo en:  /public/images/logo.png
            Tamaño recomendado: mínimo 320 px ancho, PNG con fondo transparente.
            Si tienes variantes de color, usa el logo en azul oscuro (#113368) aquí.
        ────────────────────────────────────────────────────────────────── */}
        <a href="#" className="shrink-0 flex items-center">
          <Image
            src="/images/logo.png"
            alt="HemAI"
            width={120}
            height={36}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex gap-8 flex-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-[#3d4f63] hover:text-[#113368] transition-colors font-light">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href="#pricing"
             className="text-sm font-medium text-[#113368] border border-[#113368] px-4 py-2 rounded hover:bg-[#113368] hover:text-white transition-all">
            See plans
          </a>
          <a href="#contact"
             className="text-sm font-medium text-white bg-[#7e0a0a] px-4 py-2 rounded hover:bg-[#a01212] transition-all">
            Request demo
          </a>
        </div>

        <button className="md:hidden ml-auto flex flex-col gap-[5px] p-1"
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span className={`block w-5 h-[2px] bg-[#113368] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#113368] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-[#113368] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#dde3ea] px-6 py-5 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="text-sm text-[#3d4f63] hover:text-[#113368] font-light">{l.label}</a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-[#eef1f5]">
            <a href="#pricing" className="flex-1 text-center text-sm font-medium text-[#113368] border border-[#113368] px-4 py-2 rounded">See plans</a>
            <a href="#contact" className="flex-1 text-center text-sm font-medium text-white bg-[#7e0a0a] px-4 py-2 rounded">Request demo</a>
          </div>
        </div>
      )}
    </header>
  )
}