"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      theme === "dark"
        ? "bg-neutral-900/80 border-neutral-800"
        : "bg-white/80 border-neutral-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Made bigger */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"
              alt="MaxDigitalCR"
              width={220}
              height={68}
              className={`h-16 md:h-20 w-auto transition-all ${
                theme === "dark" ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#precios"
              className={`text-sm transition-colors ${
                theme === "dark"
                  ? "text-neutral-400 hover:text-white"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Precios
            </Link>
            <Link
              href="#contacto"
              className={`text-sm px-5 py-2.5 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}
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
            theme === "dark" ? "border-neutral-800" : "border-neutral-100"
          }`}>
            <div className="flex flex-col gap-4">
              <Link
                href="#precios"
                className={`text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-white"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Precios
              </Link>
              <Link
                href="#contacto"
                className={`text-sm px-5 py-2.5 rounded-full text-center transition-colors ${
                  theme === "dark"
                    ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
