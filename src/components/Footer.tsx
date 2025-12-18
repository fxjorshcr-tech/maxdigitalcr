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
          {/* Brand */}
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              MaxDigitalCR
            </h3>
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
            <div className="space-y-2">
              <a
                href="mailto:hola@maxdigitalcr.com"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                hola@maxdigitalcr.com
              </a>
              <a
                href="https://instagram.com/maxdigitalcr"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                @maxdigitalcr
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={`text-sm font-medium mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Enlaces
            </h4>
            <div className="space-y-2">
              <Link
                href="/servicios"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-[#3ECF8E]"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className={`block text-sm transition-colors ${
                  theme === "dark"
                    ? "text-neutral-500 hover:text-[#3ECF8E]"
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
