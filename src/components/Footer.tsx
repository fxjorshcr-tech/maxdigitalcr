import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              MaxDigitalCR
            </h3>
            <p className="text-sm text-neutral-500">
              La Fortuna, Costa Rica
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-neutral-900 mb-4">
              Contacto
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:hola@maxdigitalcr.com"
                className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                hola@maxdigitalcr.com
              </a>
              <a
                href="https://instagram.com/maxdigitalcr"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                @maxdigitalcr
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-medium text-neutral-900 mb-4">
              Enlaces
            </h4>
            <div className="space-y-2">
              <Link
                href="/servicios"
                className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Servicios
              </Link>
              <Link
                href="#proyectos"
                className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className="block text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-400 text-center">
            © {new Date().getFullYear()} MaxDigitalCR. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
