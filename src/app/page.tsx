"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section with Particles */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-neutral-900">
          <ParticleBackground />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-neutral-800 border border-neutral-700">
              <span className="w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-neutral-400">
                Desarrollo web en Costa Rica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              <span className="whitespace-nowrap">Rápido. Profesional. Accesible.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400">
              Páginas web profesionales a una fracción del costo tradicional.
              Entregadas en días, ultrarápidas y construidas con la última tecnología.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Cotizar página
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos - WHITE BACKGROUND, FULL COLOR */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-sm uppercase tracking-widest mb-10 text-neutral-900 font-bold">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png"
                alt="Can't Wait Travel"
                width={200}
                height={80}
                className="h-14 md:h-18 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg"
                alt="Go Adventures"
                width={200}
                height={80}
                className="h-14 md:h-18 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.png"
                alt="Orostudios CR"
                width={200}
                height={80}
                className="h-14 md:h-18 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png"
                alt="Grupo Oroz"
                width={200}
                height={80}
                className="h-14 md:h-18 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Digital Growth Statistics Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">El mundo es digital</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                El mundo satisface sus necesidades en línea.
                <br />
                <span className="text-neutral-500">¿Ya estás en línea?</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                En 2025, el 97% de los consumidores buscan negocios locales en Google antes de tomar una decisión de compra.
                Si no te encuentran, simplemente no existís para ellos.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { stat: "5.4B", desc: "personas usan internet en el mundo", icon: "🌍" },
                { stat: "97%", desc: "buscan negocios en Google antes de comprar", icon: "🔍" },
                { stat: "75%", desc: "juzgan credibilidad por el diseño web", icon: "💎" },
                { stat: "53%", desc: "abandonan si tarda más de 3 segundos", icon: "⚡" },
              ].map((item) => (
                <div key={item.stat} className="p-6 rounded-xl border bg-neutral-800 border-neutral-700 text-center transition-all hover:border-[#3ECF8E] hover:scale-105">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30 text-center">
              <p className="text-xl md:text-2xl font-semibold text-white mb-2">
                No tener página web en 2025 es como no tener teléfono en los 90s.
              </p>
              <p className="text-neutral-400">
                Tus competidores ya están online. La pregunta es: ¿vos cuándo?
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Quiénes somos</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  Somos MaxDigitalCR.
                  <br />
                  <span className="text-neutral-400">Tu equipo de desarrollo web.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Somos un equipo de desarrolladores en Costa Rica especializados en crear páginas web
                  profesionales para PyMEs y emprendedores. Combinamos tecnología de clase mundial con
                  un profundo entendimiento del mercado local.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  <strong className="text-neutral-900">No somos una agencia gigante con procesos eternos.</strong> Somos
                  ágiles, directos y enfocados en resultados. Tu página lista en días, no en meses.
                </p>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline"
                >
                  Conocé más sobre nosotros
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "50+", label: "Proyectos entregados" },
                  { number: "10", label: "Días máximo de entrega" },
                  { number: "100%", label: "Clientes satisfechos" },
                  { number: "24h", label: "Tiempo de respuesta" },
                ].map((item) => (
                  <div key={item.label} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                    <div className="text-3xl font-bold text-[#3ECF8E] mb-2">{item.number}</div>
                    <p className="text-sm text-neutral-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Sin complicaciones</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Quitamos tus preocupaciones
                <br />
                <span className="text-neutral-500">de la mesa.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                Sabemos que crear una página web puede parecer complicado. Por eso nos encargamos de todo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  worry: "\"No sé nada de tecnología\"",
                  solution: "Nosotros nos encargamos de todo. Vos solo nos decís qué querés y nosotros lo hacemos realidad.",
                  icon: "🤔"
                },
                {
                  worry: "\"Es muy caro\"",
                  solution: "Precios desde ₡100,000. Una fracción de lo que cobran las agencias tradicionales.",
                  icon: "💰"
                },
                {
                  worry: "\"Tarda mucho tiempo\"",
                  solution: "Entregamos en 1-10 días hábiles dependiendo del proyecto. No meses.",
                  icon: "⏰"
                },
                {
                  worry: "\"¿Y después quién me ayuda?\"",
                  solution: "Soporte post-lanzamiento incluido. Siempre vas a tener a alguien que te responda.",
                  icon: "🤝"
                },
                {
                  worry: "\"No sé qué diseño necesito\"",
                  solution: "Te guiamos y proponemos opciones basadas en tu industria y objetivos.",
                  icon: "🎨"
                },
                {
                  worry: "\"Me da miedo que no funcione\"",
                  solution: "Sitios probados, rápidos y optimizados. Funcionan perfecto desde el día 1.",
                  icon: "✅"
                },
              ].map((item) => (
                <div key={item.worry} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all hover:border-[#3ECF8E]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-white font-semibold mb-3">{item.worry}</p>
                  <p className="text-neutral-400 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Is This For Section - WHITE */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-neutral-500 font-bold">Soluciones para todos</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                ¿Para quién es esto?
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-500">
                Si tenés un negocio y querés crecer, necesitás presencia digital.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: "🏨", name: "Hoteles" },
                { icon: "🍽️", name: "Restaurantes" },
                { icon: "✂️", name: "Barberías" },
                { icon: "🏠", name: "Bienes Raíces" },
                { icon: "🚗", name: "Talleres" },
                { icon: "🌴", name: "Tours" },
                { icon: "💪", name: "Gimnasios" },
                { icon: "🏥", name: "Clínicas" },
                { icon: "📸", name: "Fotógrafos" },
                { icon: "⚖️", name: "Abogados" },
                { icon: "🎨", name: "Diseñadores" },
                { icon: "🛒", name: "Tiendas" },
              ].map((item) => (
                <div key={item.name} className="p-4 rounded-xl border text-center transition-all hover:scale-105 bg-neutral-50 border-neutral-200 hover:border-[#3ECF8E] hover:shadow-lg">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-neutral-600 mb-4">
                <strong className="text-neutral-900">¿No ves tu industria?</strong> No importa.
              </p>
              <p className="text-xl font-semibold text-neutral-900">
                Si tenés clientes, necesitás una página web. <span className="text-[#3ECF8E]">Punto.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestros servicios</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                La página perfecta
                <br />
                <span className="text-neutral-500">para tu negocio.</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-400">
                Desde landing pages hasta tiendas online completas. Entregadas en tiempo récord.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Landing Page",
                  price: "₡100,000",
                  time: "1-3 días",
                  desc: "Página de alto impacto para captar clientes.",
                  features: ["Diseño responsive", "Formulario de contacto", "SEO optimizado"]
                },
                {
                  title: "Sitio Catálogo",
                  price: "₡200,000",
                  time: "3-7 días",
                  desc: "Mostrá todos tus productos o servicios.",
                  features: ["Múltiples páginas", "Galería de productos", "Panel admin"],
                  popular: true
                },
                {
                  title: "E-Commerce",
                  price: "₡300,000",
                  time: "7-10 días",
                  desc: "Tienda online completa con pagos.",
                  features: ["Carrito de compras", "Procesador de pagos", "Inventario"]
                },
              ].map((service) => (
                <div key={service.title} className={`rounded-2xl p-6 border transition-all hover:scale-105 ${
                  service.popular
                    ? "bg-neutral-800 border-[#3ECF8E] border-2 relative"
                    : "bg-neutral-800 border-neutral-700"
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                        MÁS POPULAR
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-neutral-400 mb-4">{service.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-[#3ECF8E]">{service.price}</span>
                    <span className="text-neutral-500 text-sm ml-2">• {service.time}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-neutral-300">
                        <CheckIcon />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Ver todos los servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Tecnología de punta</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  La misma tecnología
                  <br />
                  <span className="text-neutral-400">que usan los gigantes.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Netflix, Airbnb, TikTok, Uber — todas construyen sus aplicaciones con las mismas
                  herramientas que usamos nosotros.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  <strong className="text-neutral-900">Antes, esto costaba millones.</strong> Hoy, gracias a
                  herramientas open-source y la nube, podemos darte la misma calidad a una fracción
                  del costo y en tiempo récord.
                </p>
                <ul className="space-y-3">
                  {[
                    "Sitios que cargan en menos de 1 segundo",
                    "Escalables para miles de visitantes",
                    "Seguros con certificado SSL incluido",
                    "Optimizados para Google desde el día 1"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Next.js", desc: "Framework de React", icon: "▲", color: "bg-black" },
                  { name: "React", desc: "Interfaz de usuario", icon: "⚛️", color: "bg-[#61DAFB]" },
                  { name: "TypeScript", desc: "Código robusto", icon: "TS", color: "bg-[#3178C6]" },
                  { name: "Vercel", desc: "Deploy global", icon: "▲", color: "bg-black" },
                  { name: "Supabase", desc: "Base de datos", icon: "⚡", color: "bg-[#3ECF8E]" },
                  { name: "Tailwind", desc: "Diseño moderno", icon: "🎨", color: "bg-[#06B6D4]" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center text-white text-sm font-bold mb-3`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-neutral-900 font-semibold">{tech.name}</h3>
                    <p className="text-sm text-neutral-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Proceso simple</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Así trabajamos.
              </h2>
              <p className="mt-4 text-neutral-400">
                Simple. Transparente. Efectivo.
              </p>
            </div>

            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#3ECF8E]/30 to-transparent -translate-y-1/2" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Hablamos", desc: "Nos contás tu idea y entendemos exactamente qué necesitás.", icon: "💬" },
                  { step: "02", title: "Proponemos", desc: "Te presentamos un plan claro con precio fijo. Sin sorpresas.", icon: "📋" },
                  { step: "03", title: "Construimos", desc: "Desarrollamos mientras ves el progreso en tiempo real.", icon: "🔨" },
                  { step: "04", title: "Lanzamos", desc: "Tu página en vivo. Te enseñamos a usarla y damos soporte.", icon: "🚀" },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-neutral-800 border border-neutral-700 flex flex-col items-center justify-center relative z-10 transition-all hover:border-[#3ECF8E] hover:scale-110">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <span className="text-xs font-mono text-[#3ECF8E] block mb-2">{item.step}</span>
                    <span className="text-lg font-semibold block text-white">
                      {item.title}
                    </span>
                    <p className="text-sm mt-2 text-neutral-400 max-w-[200px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-neutral-400 mb-6">¿El resultado?</p>
              <p className="text-2xl font-bold text-white">
                Tu página lista en <span className="text-[#3ECF8E]">1-10 días hábiles</span>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Cada día sin página web
              <br />
              <span className="text-neutral-500">es un cliente que perdiste.</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-400">
              Mientras leés esto, alguien está buscando exactamente lo que ofrecés.
              Si no te encuentra a vos, encuentra a tu competencia.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            >
              Empezar hoy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
