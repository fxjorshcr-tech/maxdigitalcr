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
              <span className="whitespace-nowrap">Rápido. <span className="text-[#3ECF8E]">Profesional.</span> Accesible.</span>
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

        {/* Client Logos */}
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
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.webp"
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

        {/* Nuestra Propuesta - NEW SECTION */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Páginas Web Profesionales</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Creamos tu página web.
                <br />
                <span className="text-neutral-500">Rápido, accesible y con la mejor tecnología.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                Diseñamos y desarrollamos páginas web profesionales usando las mismas herramientas que Netflix y Airbnb — pero a precios accesibles para negocios locales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: "⚡", title: "1-10 días", desc: "Tu página lista en tiempo récord. No meses de espera." },
                { icon: "💰", title: "Desde ₡100k", desc: "Fracción del costo de agencias tradicionales." },
                { icon: "🔧", title: "Soporte incluido", desc: "30 días de soporte post-lanzamiento gratis." },
              ].map((item) => (
                <div key={item.title} className="p-8 rounded-2xl bg-neutral-800 border border-neutral-700 text-center hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-[#3ECF8E] mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🔍", title: "SEO técnico", desc: "Primeros en Google" },
                { icon: "🤖", title: "Optimizado para IA", desc: "ChatGPT te recomienda" },
                { icon: "📱", title: "100% responsive", desc: "Perfecto en cualquier dispositivo" },
                { icon: "🔒", title: "SSL incluido", desc: "Seguro desde el día 1" },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="font-medium text-white text-sm">{item.title}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats with Real Sources */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">La Realidad</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                La presencia digital
                <br />
                <span className="text-neutral-400">ya no es opcional.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  stat: "97%",
                  desc: "de consumidores buscan negocios online antes de comprar",
                  source: "BrightLocal Consumer Review Survey 2024",
                  icon: "🔍"
                },
                {
                  stat: "75%",
                  desc: "juzgan la credibilidad de un negocio por su diseño web",
                  source: "Stanford Web Credibility Research",
                  icon: "💎"
                },
                {
                  stat: "88%",
                  desc: "confían en reseñas online tanto como recomendaciones personales",
                  source: "BrightLocal Local Consumer Review Survey",
                  icon: "⭐"
                },
                {
                  stat: "53%",
                  desc: "abandonan si la página tarda más de 3 segundos",
                  source: "Google/SOASTA Research",
                  icon: "⚡"
                },
              ].map((item) => (
                <div key={item.stat} className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                      <p className="text-lg text-neutral-700 mb-3">{item.desc}</p>
                      <p className="text-sm text-neutral-400 italic">— {item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-neutral-600">
                Si no estás online, <strong className="text-neutral-900">simplemente no existís</strong> para tus clientes potenciales.
              </p>
            </div>
          </div>
        </section>

        {/* Services Preview - LA SOLUCIÓN */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestros Servicios</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                La página perfecta
                <br />
                <span className="text-neutral-500">para tu negocio.</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-400">
                Desde landing pages hasta tiendas online completas. Todas optimizadas para Google e IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Landing Page",
                  price: "₡100,000",
                  time: "1-3 días",
                  desc: "Página de alto impacto para captar clientes.",
                  features: ["Diseño responsive", "SEO + IA optimizado", "Formulario de contacto"]
                },
                {
                  title: "Sitio Catálogo",
                  price: "₡200,000",
                  time: "3-7 días",
                  desc: "Mostrá todos tus productos o servicios.",
                  features: ["Múltiples páginas", "Google My Business", "Panel admin"],
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
                    ? "bg-neutral-900 border-[#3ECF8E] border-2 relative"
                    : "bg-neutral-900 border-neutral-700"
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

        {/* Pain Points Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Sin Complicaciones</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                Quitamos tus preocupaciones
                <br />
                <span className="text-neutral-400">de la mesa.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-600">
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
                <div key={item.worry} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 transition-all hover:border-[#3ECF8E]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-neutral-900 font-semibold mb-3">{item.worry}</p>
                  <p className="text-neutral-600 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google My Business Section - PRUEBA SOCIAL */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Reputación Online</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  Las estrellas de Google
                  <br />
                  <span className="text-neutral-500">venden por vos.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  Un negocio con 4.5+ estrellas genera <strong className="text-white">270% más clics</strong> que uno sin reseñas. Tu página web y tu perfil de Google My Business trabajan juntos.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  <strong className="text-white">Nosotros te ayudamos a configurar ambos</strong> para que tu negocio se vea profesional y confiable desde el primer momento.
                </p>
                <ul className="space-y-3">
                  {[
                    "Configuración de Google My Business",
                    "Integración con tu página web",
                    "Estrategia para obtener más reseñas",
                    "Widget de reseñas en tu sitio"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                {/* Google Review Card Mock */}
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">G</div>
                    <div>
                      <p className="font-semibold text-neutral-900">Tu Negocio</p>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-sm text-neutral-500 ml-2">4.9 (127 reseñas)</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-neutral-100 pt-4">
                    <p className="text-sm text-neutral-600 italic">&quot;Excelente servicio, muy profesionales. Mi página quedó increíble y la entregaron super rápido. 100% recomendados.&quot;</p>
                    <p className="text-xs text-neutral-400 mt-2">— Cliente satisfecho</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { number: "4.9", label: "Calificación" },
                    { number: "270%", label: "Más clics" },
                    { number: "88%", label: "Confían en reseñas" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700">
                      <div className="text-2xl font-bold text-[#3ECF8E]">{item.number}</div>
                      <p className="text-xs text-neutral-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Para Todos</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                ¿Para quién es esto?
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-600">
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
                <div key={item.name} className="p-4 rounded-xl border text-center transition-all hover:scale-105 bg-neutral-50 border-neutral-200 hover:border-[#3ECF8E]">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-900">{item.name}</span>
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

        {/* Who We Are + Technology + Process */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            {/* Who We Are */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Quiénes Somos</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  Somos MaxDigitalCR.
                  <br />
                  <span className="text-neutral-500">Tu equipo de desarrollo web.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  Un equipo de desarrolladores en Costa Rica especializados en crear páginas web
                  profesionales para PyMEs y emprendedores.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  <strong className="text-white">Comunicación directa, procesos eficientes</strong> y tu página lista en días, no en meses.
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
                  { icon: "⚡", title: "Entrega rápida", desc: "1-10 días hábiles" },
                  { icon: "💬", title: "Comunicación directa", desc: "Hablás con quien hace tu página" },
                  { icon: "🔧", title: "Soporte continuo", desc: "Siempre hay alguien para ayudarte" },
                  { icon: "🇨🇷", title: "100% Ticos", desc: "Entendemos el mercado local" },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Tecnología</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Las mismas herramientas que usan los gigantes.
                </h3>
                <p className="text-neutral-400 max-w-2xl mx-auto">
                  Netflix, Airbnb, TikTok — todas construyen con las mismas herramientas que usamos nosotros.
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: "Next.js", icon: "▲", color: "bg-white text-black" },
                  { name: "React", icon: "⚛️", color: "bg-[#61DAFB]" },
                  { name: "TypeScript", icon: "TS", color: "bg-[#3178C6]" },
                  { name: "Vercel", icon: "▲", color: "bg-white text-black" },
                  { name: "Supabase", icon: "⚡", color: "bg-[#3ECF8E]" },
                  { name: "Tailwind", icon: "🎨", color: "bg-[#06B6D4]" },
                ].map((tech) => (
                  <div key={tech.name} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 text-center hover:border-[#3ECF8E] transition-all">
                    <div className={`w-10 h-10 mx-auto rounded-lg ${tech.color} flex items-center justify-center text-sm font-bold mb-2`}>
                      {tech.icon}
                    </div>
                    <p className="text-sm font-medium text-white">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="rounded-3xl p-8 md:p-12 bg-neutral-800 border border-neutral-700">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest mb-4 text-[#3ECF8E] font-bold">Proceso Simple</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Así trabajamos.
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { step: "01", title: "Hablamos", desc: "Nos contás tu idea y entendemos qué necesitás.", icon: "💬" },
                  { step: "02", title: "Proponemos", desc: "Plan claro con precio fijo. Sin sorpresas.", icon: "📋" },
                  { step: "03", title: "Construimos", desc: "Desarrollamos mientras ves el progreso.", icon: "🔨" },
                  { step: "04", title: "Lanzamos", desc: "Tu página en vivo con soporte incluido.", icon: "🚀" },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neutral-700 border border-neutral-600 flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono text-[#3ECF8E] block mb-2">{item.step}</span>
                    <span className="text-lg font-semibold block text-white">{item.title}</span>
                    <p className="text-sm mt-2 text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-white">
                  Tu página lista en <span className="text-[#3ECF8E]">1-10 días hábiles</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
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
