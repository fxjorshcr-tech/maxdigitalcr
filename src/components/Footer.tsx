"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`border-t transition-colors ${
      theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-neutral-50 border-neutral-100"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Us */}
          <div className="md:col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              MaxDigitalCR
            </h3>
            <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
              Somos un equipo de desarrolladores apasionados por crear páginas web profesionales
              y accesibles para negocios en Costa Rica.
            </p>
            <p className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
              La Fortuna, Costa Rica
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`text-sm font-medium mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Contacto
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:hola@maxdigitalcr.com"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hola@maxdigitalcr.com
              </a>
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="https://instagram.com/maxdigitalcr"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @maxdigitalcr
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-sm font-medium mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Enlaces
            </h4>
            <div className="space-y-2">
              <Link
                href="#precios"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Precios
              </Link>
              <Link
                href="#contacto"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-400 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t ${
          theme === "dark" ? "border-neutral-800" : "border-neutral-200"
        }`}>
          <p className={`text-sm text-center ${
            theme === "dark" ? "text-neutral-600" : "text-neutral-400"
          }`}>
            © {new Date().getFullYear()} MaxDigitalCR. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
