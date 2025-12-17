import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center px-6 pt-32 pb-20 bg-neutral-900 text-white">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Sobre nosotros</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Tecnología de primer mundo.
              <br />
              <span className="text-neutral-500">Para Costa Rica.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Hacemos accesible lo que antes era imposible: páginas web profesionales,
              con la mejor tecnología, en tiempo récord y a precios justos.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Nuestra misión</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Democratizar la tecnología web en Costa Rica.
                </h2>
                <p className="text-lg text-neutral-500 mb-6">
                  Antes, tener una página web profesional requería contratar una agencia grande,
                  esperar meses y pagar millones de colones. Eso dejaba afuera a la mayoría de
                  los negocios pequeños y medianos.
                </p>
                <p className="text-lg text-neutral-500 mb-6">
                  Hoy, gracias a la <strong className="text-neutral-900">inteligencia artificial</strong> y
                  las plataformas más avanzadas del mundo, podemos entregar exactamente la misma
                  calidad en una fracción del tiempo y costo.
                </p>
                <p className="text-lg text-neutral-500">
                  <strong className="text-neutral-900">MaxDigitalCR</strong> nació para cerrar esa brecha.
                  Para que cualquier negocio en Costa Rica pueda tener una presencia digital
                  profesional, sin importar su tamaño o presupuesto.
                </p>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-8">Lo que nos hace diferentes</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Sin intermediarios</p>
                      <p className="text-sm text-neutral-500">Hablás directamente con quien construye tu sitio.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">IA como herramienta</p>
                      <p className="text-sm text-neutral-500">Aceleramos el desarrollo sin perder calidad humana.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Precios transparentes</p>
                      <p className="text-sm text-neutral-500">Sin sorpresas ni costos ocultos. Lo que ves es lo que pagás.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Nuestra tecnología</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Las herramientas de los gigantes.
                <br />
                <span className="text-neutral-500">Para tu negocio.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
                Usamos exactamente las mismas tecnologías que Netflix, Airbnb, TikTok y las
                empresas más grandes del mundo. No hay razón para conformarse con menos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Next.js",
                  description: "El framework de React usado por Netflix, TikTok, y Twitch. Velocidad extrema.",
                  icon: "N"
                },
                {
                  name: "React",
                  description: "La librería de Facebook para interfaces. Usada por millones de aplicaciones.",
                  icon: "R"
                },
                {
                  name: "Vercel",
                  description: "Hosting de clase mundial. Infraestructura global. Carga instantánea.",
                  icon: "V"
                },
                {
                  name: "Tailwind CSS",
                  description: "Diseño moderno y consistente. Usado por Shopify, OpenAI y GitHub.",
                  icon: "T"
                },
              ].map((tech) => (
                <div key={tech.name} className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                  <div className="w-12 h-12 bg-white text-neutral-900 rounded-lg flex items-center justify-center text-xl font-bold mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-neutral-400">{tech.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-neutral-400 mb-6">
                Además utilizamos inteligencia artificial para acelerar el desarrollo,
                permitiéndonos entregar proyectos de alta calidad en tiempo récord.
              </p>
              <div className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-neutral-300">IA integrada en nuestro flujo de trabajo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Nuestros valores</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Tres pilares. Una promesa.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-neutral-900 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Tiempo récord</h3>
                <p className="text-neutral-500 mb-4">
                  Tu página web lista en días, no en meses. Nuestros procesos optimizados
                  con IA nos permiten entregar más rápido sin sacrificar calidad.
                </p>
                <p className="text-3xl font-bold text-neutral-900">5-7 días</p>
                <p className="text-sm text-neutral-400">promedio de entrega</p>
              </div>

              <div className="text-center p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-neutral-900 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Máxima tecnología</h3>
                <p className="text-neutral-500 mb-4">
                  Las mismas herramientas que usan las empresas más grandes del mundo.
                  Next.js, React, Vercel. Lo mejor del mercado para tu negocio.
                </p>
                <p className="text-3xl font-bold text-neutral-900">Silicon Valley</p>
                <p className="text-sm text-neutral-400">tecnología de primer nivel</p>
              </div>

              <div className="text-center p-8 bg-neutral-50 rounded-2xl border border-neutral-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-neutral-900 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Precio accesible</h3>
                <p className="text-neutral-500 mb-4">
                  Tecnología premium a precios justos para Costa Rica. Mucho valor
                  por poco dinero. Una inversión que se paga sola.
                </p>
                <p className="text-3xl font-bold text-neutral-900">₡100,000</p>
                <p className="text-sm text-neutral-400">precio inicial</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
              ¿Listo para llevar tu negocio al siguiente nivel?
            </h2>
            <p className="text-xl text-neutral-500 mb-8">
              Hablemos sobre tu proyecto. Sin compromiso, sin presión.
              Te respondemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Iniciar mi proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-900 transition-all"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
