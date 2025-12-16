import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | MaxDigitalCR",
  description: "Landing pages, sitios web, sistemas de reservas y e-commerce. Desarrollo web con tecnología de clase mundial.",
};

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-20">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 leading-tight tracking-tight">
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
        <section className="py-16 px-6 border-y border-neutral-100">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-neutral-600 leading-relaxed">
              Cada negocio es diferente. Por eso no usamos plantillas.
              <br /><br />
              Diseñamos y desarrollamos cada proyecto desde cero, usando las mismas herramientas que impulsan a las empresas más innovadoras del mundo.
              <br /><br />
              <span className="text-neutral-900 font-medium">
                El resultado: sitios rápidos, seguros, y que crecen con tu negocio.
              </span>
            </p>
          </div>
        </section>

        {/* Service 1: Landing Pages */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-5xl mb-6">📄</div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                  Landing Pages
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Una sola página. Un solo objetivo. Máximo impacto.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Lanzamientos", "Campañas", "Presencia rápida", "Validar ideas"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">Entrega: 5-7 días</span>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización →
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
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
                    <li key={item} className="flex items-center gap-3 text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2: Sitios Web */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="text-5xl mb-6">🌐</div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                  Sitios Web
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Tu negocio en línea. Profesional y listo para crecer.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Hoteles", "Restaurantes", "Tour operadores", "Profesionales", "Empresas de servicios"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-white rounded-full text-sm text-neutral-700 border border-neutral-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">Entrega: 7-10 días</span>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:order-1 border border-neutral-200">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
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
                    <li key={item} className="flex items-center gap-3 text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3: Sistemas de Reservas */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="text-5xl mb-6">📅</div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                  Sistemas de Reservas
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Tu negocio funcionando 24/7. Sin intervención manual.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Hoteles", "Tours y actividades", "Spas", "Servicios con citas", "Alquileres"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-neutral-100 rounded-full text-sm text-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">Entrega: 10-14 días</span>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización →
                  </Link>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
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
                    <li key={item} className="flex items-center gap-3 text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4: E-Commerce */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:order-2">
                <div className="text-5xl mb-6">🛒</div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
                  E-Commerce
                </h2>
                <p className="text-xl text-neutral-500 mb-8">
                  Vendé en línea. Cobrá en línea. Sin complicaciones.
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-4">
                    Ideal para
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Tiendas", "Productos digitales", "Servicios con pago anticipado", "Negocios que quieren escalar"].map((item) => (
                      <span key={item} className="px-4 py-2 bg-white rounded-full text-sm text-neutral-700 border border-neutral-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">Entrega: 14-21 días</span>
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all text-sm"
                  >
                    Solicitar cotización →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:order-1 border border-neutral-200">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-6">
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
                    <li key={item} className="flex items-center gap-3 text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
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
                  className="p-6 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-2">
                    {tech.description}
                  </p>
                  <p className="text-sm text-neutral-700 font-medium">
                    {tech.benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
              <p>
                Esto no es jerga técnica para impresionar.
                <br /><br />
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
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                ¿Cómo trabajamos?
              </h2>
            </div>

            <div className="space-y-12">
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
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <span className="text-4xl font-light text-neutral-300 shrink-0 w-16">
                    {item.step}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
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
        <section id="contacto" className="py-24 sm:py-32 px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-8">
              ¿Listo para empezar?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
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
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-400 transition-colors"
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
