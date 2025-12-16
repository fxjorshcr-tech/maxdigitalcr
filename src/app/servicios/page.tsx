import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | MaxDigitalCR",
  description: "Landing pages, sitios web, sistemas de reservas y e-commerce. Desarrollo web con tecnología de clase mundial.",
};

// Technical visual components
function WireframeCube({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M20 35 L50 20 L80 35 L80 65 L50 80 L20 65 Z" />
      <path d="M20 35 L50 50 L80 35" />
      <path d="M50 50 L50 80" />
      <path d="M20 35 L20 65" />
      <path d="M80 35 L80 65" />
    </svg>
  );
}

function OrbitalRings({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
      <ellipse cx="100" cy="100" rx="80" ry="30" />
      <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(60 100 100)" />
      <ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(120 100 100)" />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
    </svg>
  );
}

function BlueprintCorners({ className = "" }: { className?: string }) {
  return (
    <>
      <div className={`absolute top-0 left-0 w-8 h-8 border-l border-t ${className}`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-r border-t ${className}`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-l border-b ${className}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r border-b ${className}`} />
    </>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 px-6 relative overflow-hidden bg-grid">
          {/* Technical decorations */}
          <WireframeCube className="absolute top-20 right-10 w-32 h-32 text-neutral-200 animate-pulse-slow hidden lg:block" />
          <OrbitalRings className="absolute bottom-10 left-10 w-40 h-40 text-neutral-100 hidden lg:block" />

          <div className="max-w-4xl mx-auto text-center relative">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-6">Nuestros servicios</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-tight tracking-tight">
              Lo que hacemos.
            </h1>
            <p className="mt-6 text-xl text-neutral-500 max-w-2xl mx-auto">
              Sitios web de nueva generación.
              <br />
              Construidos con la mejor tecnología. Entregados en días.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-6 border-y border-neutral-100 relative">
          <BlueprintCorners className="border-neutral-200" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-600 leading-relaxed">
              Cada negocio es diferente. Por eso no usamos plantillas.
              <br /><br />
              Diseñamos y desarrollamos cada proyecto desde cero, usando las mismas herramientas que impulsan a las empresas más innovadoras del mundo.
              <br /><br />
              <span className="text-neutral-900 font-semibold">
                El resultado: sitios rápidos, seguros, y que crecen con tu negocio.
              </span>
            </p>
          </div>
        </section>

        {/* Performance Social Proof */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white overflow-hidden relative bg-grid-dark">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Rendimiento garantizado</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Páginas que cargan
                  <br />
                  <span className="text-neutral-500">en menos de 1 segundo.</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Cada sitio que entregamos está optimizado al máximo nivel.
                  Rendimiento perfecto en Google PageSpeed.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO optimizado
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100% accesible
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Best practices
                  </div>
                </div>
              </div>

              {/* Performance Metrics Display */}
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 relative">
                <BlueprintCorners className="border-neutral-600" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-neutral-500 font-mono">PageSpeed Insights</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { score: 100, label: "Performance", color: "text-green-500" },
                    { score: 100, label: "Accessibility", color: "text-green-500" },
                    { score: 100, label: "Best Practices", color: "text-green-500" },
                    { score: 100, label: "SEO", color: "text-green-500" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className={`text-4xl font-bold ${metric.color} mb-1`}>
                        {metric.score}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-neutral-700">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-500">Tiempo de carga</span>
                    <span className="text-green-500 font-mono font-bold">0.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service 1: Landing Pages */}
        <section className="py-24 sm:py-32 px-6 relative bg-grid">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <WireframeCube className="absolute -top-8 -left-8 w-16 h-16 text-neutral-200 hidden lg:block" />
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-2xl mb-6">
                  <svg className="w-8 h-8 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Landing Pages
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Una sola página. Un solo objetivo. Máximo impacto.
                </p>

                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Lanzamientos", "Campañas", "Presencia rápida", "Validar ideas"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500 font-mono">Entrega: 5-7 días</span>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 relative">
                <BlueprintCorners className="border-neutral-200" />
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                  Incluye
                </h3>
                <ul className="space-y-4">
                  {[
                    "Diseño personalizado",
                    "Formulario de contacto",
                    "Correo automático de confirmación",
                    "Optimización SEO",
                    "Velocidad sub-segundo",
                    "100% responsive",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Sitios Web */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white relative bg-grid-dark">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2 relative">
                <OrbitalRings className="absolute -top-8 -right-8 w-24 h-24 text-neutral-700 hidden lg:block" />
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-2xl mb-6 border border-neutral-700">
                  <svg className="w-8 h-8 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Sitios Web
                </h2>
                <p className="text-xl text-neutral-400 mb-8">
                  Tu negocio en línea. Profesional y listo para crecer.
                </p>

                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Hoteles", "Restaurantes", "Tour operadores", "Profesionales", "Empresas"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-300 border border-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-700">
                  <span className="text-sm text-neutral-500 font-mono">Entrega: 7-10 días</span>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-2xl p-8 lg:order-1 border border-neutral-700 relative">
                <BlueprintCorners className="border-neutral-600" />
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">
                  Incluye
                </h3>
                <ul className="space-y-4">
                  {[
                    "Múltiples páginas (Home, Servicios, Nosotros, Contacto)",
                    "Catálogo de productos o servicios",
                    "Página individual por cada oferta",
                    "Galería de fotos optimizada",
                    "Integración con WhatsApp",
                    "Google Analytics",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Sistemas de Reservas */}
        <section className="py-24 sm:py-32 px-6 relative bg-dots">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-2xl mb-6">
                  <svg className="w-8 h-8 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                  Sistemas de Reservas
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Tu negocio funcionando 24/7. Sin intervención manual.
                </p>

                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Hoteles", "Tours y actividades", "Spas", "Servicios con citas", "Alquileres"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500 font-mono">Entrega: 10-14 días</span>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 relative">
                <BlueprintCorners className="border-neutral-200" />
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-6">
                  Incluye
                </h3>
                <ul className="space-y-4">
                  {[
                    "Todo lo del sitio web",
                    "Formularios de reserva inteligentes",
                    "Base de datos de clientes",
                    "Correos automáticos de confirmación",
                    "Panel administrativo",
                    "Respaldos automáticos",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <svg className="w-5 h-5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: E-Commerce */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white relative bg-grid-dark">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2 relative">
                <WireframeCube className="absolute -top-8 -right-8 w-20 h-20 text-neutral-700 hidden lg:block animate-float" />
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-800 rounded-2xl mb-6 border border-neutral-700">
                  <svg className="w-8 h-8 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  E-Commerce
                </h2>
                <p className="text-xl text-neutral-400 mb-8">
                  Vendé en línea. Cobrá en línea. Sin complicaciones.
                </p>

                <div className="mb-8">
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Tiendas", "Productos digitales", "Servicios con pago", "Negocios que escalan"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-300 border border-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-700">
                  <span className="text-sm text-neutral-500 font-mono">Entrega: 14-21 días</span>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-800 rounded-2xl p-8 lg:order-1 border border-neutral-700 relative">
                <BlueprintCorners className="border-neutral-600" />
                <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">
                  Incluye
                </h3>
                <ul className="space-y-4">
                  {[
                    "Todo lo anterior",
                    "Pasarela de pagos (SINPE / Tarjeta)",
                    "Carrito de compras",
                    "Gestión de inventario",
                    "Notificaciones de venta",
                    "Términos y condiciones",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 sm:py-32 px-6 bg-grid relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 relative">
              <OrbitalRings className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-neutral-100 -z-10" />
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">La diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                ¿Por qué importa la tecnología?
              </h2>
              <p className="text-neutral-500">
                No todos los sitios son iguales por dentro.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  name: "Next.js + React",
                  description: "El framework que usa TikTok, Notion, Twitch.",
                  benefit: "Sitios que cargan instantáneamente.",
                },
                {
                  name: "Vercel",
                  description: "Hosting de The Washington Post y Under Armour.",
                  benefit: "Disponibilidad global. Velocidad extrema.",
                },
                {
                  name: "Supabase",
                  description: "Base de datos de Mozilla, PwC, 1Password.",
                  benefit: "Segura. Escalable. Moderna.",
                },
                {
                  name: "TypeScript",
                  description: "El lenguaje de Google, Microsoft, Slack.",
                  benefit: "Código limpio. Menos errores.",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-neutral-700 transition-colors">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-2">
                        {tech.description}
                      </p>
                      <p className="text-sm text-neutral-900 font-medium">
                        {tech.benefit}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-neutral-300 group-hover:text-neutral-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-neutral-500 max-w-2xl mx-auto p-6 border border-dashed border-neutral-300 rounded-xl">
              <p className="font-medium text-neutral-700 mb-4">Esto no es jerga técnica para impresionar.</p>
              <p>
                Es la diferencia entre un sitio que carga en 1 segundo y uno que carga en 5.
                <br />
                Entre uno que se cae y uno que aguanta miles de visitas.
                <br />
                Entre uno que se hackea y uno que está protegido por defecto.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 bg-dots relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">El proceso</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                ¿Cómo trabajamos?
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  step: "01",
                  title: "Conversación",
                  description: "Nos escribís. Hablamos de tu proyecto. Sin compromiso, sin jerga. Entendemos qué necesitás y qué querés lograr.",
                },
                {
                  step: "02",
                  title: "Propuesta",
                  description: "Te enviamos un documento claro: qué vamos a hacer, cuánto tarda, cuánto cuesta. Sin sorpresas.",
                },
                {
                  step: "03",
                  title: "Desarrollo",
                  description: "Construimos. Te mostramos avances. Ajustamos juntos. No entregamos hasta que estés 100% satisfecho.",
                },
                {
                  step: "04",
                  title: "Lanzamiento",
                  description: "Tu sitio en vivo. Todo configurado. Todo documentado. Te explicamos cómo funciona y cómo mantenerlo.",
                },
              ].map((item, index) => (
                <div key={item.step} className="flex gap-6 items-start relative">
                  {/* Connecting line */}
                  {index < 3 && (
                    <div className="absolute left-8 top-16 w-px h-16 bg-neutral-200" />
                  )}
                  <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-white border border-neutral-200 rounded-2xl font-mono text-lg text-neutral-400">
                    {item.step}
                  </div>
                  <div className="pt-3 pb-12">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="py-24 sm:py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
          <WireframeCube className="absolute top-10 left-10 w-32 h-32 text-neutral-800 animate-pulse-slow" />
          <OrbitalRings className="absolute bottom-10 right-10 w-48 h-48 text-neutral-800" />

          <div className="max-w-xl mx-auto text-center relative">
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Empezá hoy</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-neutral-400 mb-8">
              Contanos sobre tu proyecto. Sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors"
              >
                Contactar
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-neutral-700 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-500 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
