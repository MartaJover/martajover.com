"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all bg-transparent pointer-events-none`}>
      <div className="px-3 pt-2 pointer-events-auto">
        <div className="max-w-6xl mx-auto h-14 sm:h-16 rounded-2xl flex items-center justify-between px-4 sm:px-6 bg-white/20 border border-white backdrop-blur-xl shadow-md">
          <Link href="#inicio" className="text-black font-semibold tracking-wide text-lg sm:text-xl">
            Marta Jover
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-base sm:text-lg text-black">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-700 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-black hover:text-zinc-700 transition-colors bg-white/40 backdrop-blur-xl shadow z-50"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Full-screen mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl transition-all duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="text-center">
            <ul className="flex flex-col gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block text-3xl font-medium text-white hover:text-zinc-300 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}


