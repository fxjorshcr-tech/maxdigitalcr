"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on English version
  const isEnglish = pathname.startsWith('/en');

  // Get the base path without /en prefix
  const basePath = isEnglish ? pathname.replace('/en', '') || '/' : pathname;

  // Determine if we're on a page with a dark hero (both Spanish and English versions)
  const darkHeroPages = ['/', '/servicios', '/nosotros', '/contacto'];
  const isDarkHero = darkHeroPages.includes(basePath);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Navigation links with translations
  const navLinks = isEnglish ? [
    { href: "/en/servicios", label: "Services" },
    { href: "/en/nosotros", label: "About" },
    { href: "/en/contacto", label: "Contact", isCTA: true },
  ] : [
    { href: "/servicios", label: "Servicios" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto", isCTA: true },
  ];

  // Home link based on language
  const homeLink = isEnglish ? "/en" : "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
      scrolled || !isDarkHero
        ? "bg-white/90 border-neutral-200"
        : "bg-neutral-900/80 border-neutral-800"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={homeLink} className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"
              alt="MaxDigitalCR"
              width={220}
              height={68}
              className={`h-14 md:h-16 w-auto transition-all ${
                scrolled || !isDarkHero ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.isCTA
                    ? "text-sm px-5 py-2.5 rounded-full transition-colors bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    : `text-sm transition-colors ${
                        scrolled || !isDarkHero
                          ? "text-neutral-600 hover:text-neutral-900"
                          : "text-neutral-400 hover:text-white"
                      } ${pathname === link.href ? "font-semibold" : ""}`
                }
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className={`flex items-center gap-2 ml-2 border-l pl-4 ${scrolled || !isDarkHero ? 'border-neutral-300' : 'border-neutral-600'}`}>
              <Link
                href={basePath || '/'}
                className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-all hover:scale-110 ${
                  !isEnglish ? 'border-[#3ECF8E]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                title="Español"
              >
                <svg viewBox="0 0 512 512" className="w-full h-full">
                  <rect fill="#002b7f" width="512" height="512"/>
                  <rect fill="#fff" y="102.4" width="512" height="307.2"/>
                  <rect fill="#ce1126" y="170.7" width="512" height="170.7"/>
                </svg>
              </Link>
              <Link
                href={`/en${basePath}`}
                className={`w-7 h-7 rounded-full overflow-hidden border-2 transition-all hover:scale-110 ${
                  isEnglish ? 'border-[#3ECF8E]' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
                title="English"
              >
                <svg viewBox="0 0 512 512" className="w-full h-full">
                  <rect fill="#bd3d44" width="512" height="512"/>
                  <rect fill="#fff" y="39.4" width="512" height="39.4"/>
                  <rect fill="#fff" y="118.2" width="512" height="39.4"/>
                  <rect fill="#fff" y="197" width="512" height="39.4"/>
                  <rect fill="#fff" y="275.8" width="512" height="39.4"/>
                  <rect fill="#fff" y="354.6" width="512" height="39.4"/>
                  <rect fill="#fff" y="433.4" width="512" height="39.4"/>
                  <rect fill="#192f5d" width="204.8" height="275.8"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${scrolled || !isDarkHero ? "text-neutral-900" : "text-white"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden pt-4 pb-2 border-t mt-4 ${
            scrolled || !isDarkHero ? "border-neutral-200" : "border-neutral-800"
          }`}>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={
                    link.isCTA
                      ? "text-sm px-5 py-3 rounded-full text-center transition-colors bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                      : `text-sm py-2 transition-colors ${
                          scrolled || !isDarkHero
                            ? "text-neutral-600 hover:text-neutral-900"
                            : "text-neutral-400 hover:text-white"
                        } ${pathname === link.href ? "font-semibold" : ""}`
                  }
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Switcher Mobile */}
              <div className={`flex items-center gap-4 pt-4 mt-2 border-t ${scrolled || !isDarkHero ? 'border-neutral-200' : 'border-neutral-700'}`}>
                <span className={`text-sm ${scrolled || !isDarkHero ? 'text-neutral-500' : 'text-neutral-400'}`}>
                  {isEnglish ? 'Language:' : 'Idioma:'}
                </span>
                <Link
                  href={basePath || '/'}
                  onClick={handleLinkClick}
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
                    !isEnglish ? 'border-[#3ECF8E]' : 'border-transparent opacity-60'
                  }`}
                  title="Español"
                >
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <rect fill="#002b7f" width="512" height="512"/>
                    <rect fill="#fff" y="102.4" width="512" height="307.2"/>
                    <rect fill="#ce1126" y="170.7" width="512" height="170.7"/>
                  </svg>
                </Link>
                <Link
                  href={`/en${basePath}`}
                  onClick={handleLinkClick}
                  className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
                    isEnglish ? 'border-[#3ECF8E]' : 'border-transparent opacity-60'
                  }`}
                  title="English"
                >
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <rect fill="#bd3d44" width="512" height="512"/>
                    <rect fill="#fff" y="39.4" width="512" height="39.4"/>
                    <rect fill="#fff" y="118.2" width="512" height="39.4"/>
                    <rect fill="#fff" y="197" width="512" height="39.4"/>
                    <rect fill="#fff" y="275.8" width="512" height="39.4"/>
                    <rect fill="#fff" y="354.6" width="512" height="39.4"/>
                    <rect fill="#fff" y="433.4" width="512" height="39.4"/>
                    <rect fill="#192f5d" width="204.8" height="275.8"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
