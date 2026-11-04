"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav aria-label="Navigasi utama" className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" aria-label="AkademikForge — Beranda" onClick={closeMenu} className="flex shrink-0 items-center">
            <Image src="/logo/Logo.png" width={150} height={48} alt="AkademikForge" priority className="h-10 w-auto object-contain" />
          </Link>

          <div className="hidden items-center space-x-8 md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="font-medium text-gray-700 transition-colors hover:text-blue-600">
                {link.label}
              </Link>
            ))}
            <Link href="/Auth/Login" className="font-medium text-gray-600 transition-colors hover:text-blue-600">
              Login
            </Link>
            <Link href="/Auth/Register" className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
              Daftar Gratis
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="border-t border-gray-100 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-4 px-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMenu} className="font-medium text-gray-700 hover:text-blue-600">
                  {link.label}
                </Link>
              ))}
              <Link href="/Auth/Login" onClick={closeMenu} className="font-medium text-gray-600 hover:text-blue-600">
                Login
              </Link>
              <Link href="/Auth/Register" onClick={closeMenu} className="rounded-lg bg-blue-600 px-6 py-2 text-center font-semibold text-white hover:bg-blue-700">
                Daftar Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
