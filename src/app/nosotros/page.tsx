import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Quiénes Somos</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Somos MaxDigitalCR.
              <br />
              <span className="text-neutral-500">Tu equipo de desarrollo web.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Un equipo de desarrolladores en Costa Rica apasionados por crear
              páginas web profesionales y accesibles para negocios locales.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestra historia</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Nacimos de una frustración.
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Vimos cómo las agencias tradicionales cobraban fortunas por páginas web simples.
                  Tiempos de entrega de meses. Procesos burocráticos eternos. Resultados mediocres.
                </p>
                <p className="text-lg text-neutral-600 mb-6">
                  Mientras tanto, las PyMEs y emprendedores de Costa Rica seguían sin presencia digital,
                  perdiendo clientes cada día frente a competidores que sí tenían página web.
                </p>
                <p className="text-lg text-neutral-600">
                  <strong className="text-neutral-900">Decidimos cambiar eso.</strong> Usamos la misma tecnología
                  que usan Netflix y Airbnb, pero la hacemos accesible para negocios locales.
                  Entregamos en días, no en meses. Y a una fracción del costo.
                </p>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">⚡</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Velocidad</p>
                      <p className="text-sm text-neutral-400">Entregamos en días, no en meses</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">💰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Precios justos</p>
                      <p className="text-sm text-neutral-400">Tecnología de punta accesible para todos</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">🎯</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Resultados reales</p>
                      <p className="text-sm text-neutral-400">Páginas que generan clientes para tu negocio</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestros valores</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                En qué creemos.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Resultados sobre todo",
                  desc: "No hacemos páginas bonitas que no sirven. Hacemos páginas que generan clientes y ventas para tu negocio."
                },
                {
                  icon: "💬",
                  title: "Comunicación directa",
                  desc: "Nada de intermediarios ni procesos burocráticos. Hablás directamente con quien hace tu página."
                },
                {
                  icon: "⚡",
                  title: "Velocidad sin sacrificar calidad",
                  desc: "Entregamos rápido porque usamos las mejores herramientas, no porque cortamos esquinas."
                },
                {
                  icon: "🤝",
                  title: "Honestidad radical",
                  desc: "Si algo no lo necesitás, te lo decimos. Si hay una opción más barata que te sirve, te la recomendamos."
                },
                {
                  icon: "📚",
                  title: "Aprendizaje constante",
                  desc: "La tecnología cambia cada día. Nos mantenemos actualizados para darte siempre lo mejor."
                },
                {
                  icon: "🌱",
                  title: "Impacto local",
                  desc: "Creemos que cuando los negocios locales crecen, toda la comunidad se beneficia."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Qué hacemos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Resolvemos problemas reales.
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                No solo hacemos páginas web. Ayudamos a negocios a crecer en el mundo digital.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-900 mb-6">Lo que hacemos</h3>
                <ul className="space-y-4">
                  {[
                    "Landing pages que convierten visitantes en clientes",
                    "Sitios catálogo para mostrar productos y servicios",
                    "Tiendas online con pagos integrados",
                    "Aplicaciones web personalizadas",
                    "Optimización SEO para aparecer en Google",
                    "Integración con redes sociales y WhatsApp",
                    "Soporte y mantenimiento continuo"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-6">Nuestro compromiso</h3>
                <ul className="space-y-4">
                  {[
                    "Precios justos y transparentes desde el inicio",
                    "Entregas rápidas en 1-10 días hábiles",
                    "Diseños personalizados para tu negocio",
                    "Soporte continuo después de la entrega",
                    "Comunicación clara y directa",
                    "Soluciones simples y efectivas",
                    "Solo te ofrecemos lo que realmente necesitás"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Stats */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestros números</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Los resultados hablan.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "1-10", label: "Días de entrega" },
                { number: "100%", label: "Clientes satisfechos" },
                { number: "24h", label: "Tiempo de respuesta" },
                { number: "🇨🇷", label: "100% Ticos" },
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 text-center">
                  <div className="text-4xl font-bold text-[#3ECF8E] mb-2">{item.number}</div>
                  <p className="text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Dónde estamos</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  100% costarricenses.
                  <br />
                  <span className="text-neutral-400">100% comprometidos.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Operamos desde La Fortuna, en el corazón de Costa Rica. Pero trabajamos con
                  clientes de todo el país (y del mundo).
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  Entendemos el mercado local, los retos de las PyMEs costarricenses, y cómo
                  funciona el consumidor tico. Eso nos da una ventaja que ninguna agencia
                  extranjera puede ofrecer.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">La Fortuna, Alajuela</p>
                    <p className="text-neutral-500">Costa Rica</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🌋", label: "La Fortuna" },
                  { icon: "🇨🇷", label: "Costa Rica" },
                  { icon: "💻", label: "100% Remoto" },
                  { icon: "🌎", label: "Clientes globales" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="font-medium text-neutral-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Querés trabajar con nosotros?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Contanos tu idea. Estamos listos para ayudarte a llevar tu negocio al mundo digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Contactanos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-600 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
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
