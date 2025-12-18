"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import LogoCarousel from "@/components/LogoCarousel";

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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              Rápido. <span className="text-[#3ECF8E]">Profesional.</span> Accesible.
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
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                Ver planes y precios
              </a>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <LogoCarousel title="Confían en nosotros" />

        {/* Páginas Web Profesionales */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
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
                { icon: "💰", title: "Desde ₡100.000", desc: "Fracción del costo de agencias tradicionales." },
                { icon: "🔧", title: "Soporte incluido", desc: "30 días de soporte post-lanzamiento gratis." },
              ].map((item) => (
                <div key={item.title} className="p-6 sm:p-8 rounded-2xl bg-neutral-800 border border-neutral-700 text-center hover:border-[#3ECF8E] transition-all">
                  <div className="text-3xl sm:text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#3ECF8E] mb-2">{item.title}</h3>
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
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
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
                { stat: "97%", desc: "de consumidores buscan negocios online antes de comprar", source: "BrightLocal Consumer Review Survey 2024", icon: "🔍" },
                { stat: "75%", desc: "juzgan la credibilidad de un negocio por su diseño web", source: "Stanford Web Credibility Research", icon: "💎" },
                { stat: "88%", desc: "confían en reseñas online tanto como recomendaciones personales", source: "BrightLocal Local Consumer Review Survey", icon: "⭐" },
                { stat: "53%", desc: "abandonan si la página tarda más de 3 segundos", source: "Google/SOASTA Research", icon: "⚡" },
              ].map((item) => (
                <div key={item.stat} className="p-5 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-3xl sm:text-4xl">{item.icon}</div>
                    <div>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                      <p className="text-base sm:text-lg text-neutral-700 mb-3">{item.desc}</p>
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

        {/* PLANES Y PRECIOS - Full Version */}
        <section id="planes" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Planes y Precios</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Elegí el plan perfecto
                <br />
                <span className="text-neutral-500">para tu negocio.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Todos los planes incluyen diseño responsive, SEO básico y 30 días de soporte.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Landing Page */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">📄</span>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    1-3 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
                <p className="text-neutral-400 mb-6">
                  Página de alto impacto para captar clientes. Perfecta para campañas, lanzamientos o presencia básica.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡100.000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Diseño moderno y responsive", "Hasta 5 secciones", "Formulario de contacto", "Optimizado para SEO", "Integración con WhatsApp", "30 días de soporte", "Hosting primer año incluido"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Profesionales independientes, campañas de marketing, lanzamientos</p>
                </div>
                <Link href="/contacto" className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600">
                  Cotizar Landing Page
                </Link>
              </div>

              {/* Sitio Catálogo */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border-2 border-[#3ECF8E] relative hover:scale-105 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-sm font-bold px-4 py-2 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
                <div className="flex items-center justify-between mb-6 mt-2">
                  <span className="text-4xl">📚</span>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    3-7 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sitio Catálogo</h3>
                <p className="text-neutral-400 mb-6">
                  Sitio web completo para mostrar tus productos o servicios. Múltiples páginas y galería de productos.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡200.000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Todo lo de Landing Page +", "Hasta 10 páginas", "Galería de productos/servicios", "Blog opcional", "Panel de administración", "Múltiples formularios", "Integración con redes sociales"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Restaurantes, hoteles, servicios profesionales, portafolios</p>
                </div>
                <Link href="/contacto" className="block text-center py-4 rounded-lg font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]">
                  Cotizar Sitio Catálogo
                </Link>
              </div>

              {/* E-Commerce */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">🛒</span>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    7-10 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce</h3>
                <p className="text-neutral-400 mb-6">
                  Tienda online completa con carrito de compras, pagos en línea y gestión de inventario.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡300.000</div>
                  <span className="text-sm text-neutral-500">+ mantenimiento mensual</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {["Todo lo de Sitio Catálogo +", "Carrito de compras", "Procesador de pagos (SINPE/tarjeta)", "Gestión de inventario", "Notificaciones de pedidos", "Panel de ventas", "Mantenimiento mensual incluido"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Tiendas de ropa, productos artesanales, cualquier negocio con ventas online</p>
                </div>
                <Link href="/contacto" className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600">
                  Cotizar E-Commerce
                </Link>
              </div>
            </div>

            {/* Custom Projects Banner */}
            <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">¿Necesitás algo más complejo?</h3>
                  <p className="text-neutral-400">
                    Desarrollamos aplicaciones web personalizadas, sistemas de reservas, dashboards,
                    integraciones con APIs y más. Contanos tu idea.
                  </p>
                </div>
                <Link href="/contacto" className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-white text-neutral-900 hover:bg-neutral-100">
                  Cotizar proyecto personalizado
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* NUESTRA DIFERENCIA */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestra diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                ¿Por qué somos diferentes?
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                No solo hacemos páginas web. Creamos una experiencia de desarrollo única.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: "⚡", title: "Entrega ultra rápida", desc: "Landing pages en 1-3 días. Sitios catálogo en 3-7 días. E-commerce en 7-10 días. Máximo 10 días hábiles, garantizado." },
                { icon: "👀", title: "Revisión en tiempo real", desc: "Te compartimos branches de preview para que veas los cambios en tu celular al instante. Sin esperar, sin sorpresas." },
                { icon: "🤝", title: "Acompañamiento total", desc: "Estamos con vos en cada paso. Desde la primera llamada hasta después del lanzamiento. Nunca te dejamos solo." },
                { icon: "💰", title: "Precios transparentes", desc: "Sabés exactamente cuánto vas a pagar desde el día 1. Sin costos ocultos, sin sorpresas al final." },
                { icon: "🔧", title: "Soporte incluido", desc: "30 días de soporte post-lanzamiento incluidos en todos los planes. Después, planes opcionales de mantenimiento." },
                { icon: "📱", title: "100% responsive", desc: "Tu página se ve perfecta en cualquier dispositivo: celular, tablet, computadora. Sin excepción." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Sin Complicaciones</p>
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
                { worry: "\"No sé nada de tecnología\"", solution: "Nosotros nos encargamos de todo. Vos solo nos decís qué querés y nosotros lo hacemos realidad.", icon: "🤔" },
                { worry: "\"Es muy caro\"", solution: "Precios desde ₡100.000. Una fracción de lo que cobran las agencias tradicionales.", icon: "💰" },
                { worry: "\"Tarda mucho tiempo\"", solution: "Entregamos en 1-10 días hábiles dependiendo del proyecto. No meses.", icon: "⏰" },
                { worry: "\"¿Y después quién me ayuda?\"", solution: "Soporte post-lanzamiento incluido. Siempre vas a tener a alguien que te responda.", icon: "🤝" },
                { worry: "\"No sé qué diseño necesito\"", solution: "Te guiamos y proponemos opciones basadas en tu industria y objetivos.", icon: "🎨" },
                { worry: "\"Me da miedo que no funcione\"", solution: "Sitios probados, rápidos y optimizados. Funcionan perfecto desde el día 1.", icon: "✅" },
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

        {/* PROCESO ÚNICO - Preview System */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Proceso único</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Revisá los cambios
                  <br />
                  <span className="text-neutral-400">en tiempo real.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Olvidate de esperar semanas para ver cómo va tu página. Con nuestro sistema de
                  preview branches, podés ver cada cambio que hacemos <strong>instantáneamente</strong> en tu celular.
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  Así trabajamos más rápido, evitamos malentendidos y te entregamos exactamente lo que querés.
                </p>
                <ul className="space-y-4">
                  {[
                    "Te compartimos un link privado para ver los cambios",
                    "Funciona en tu celular, tablet o computadora",
                    "Nos das feedback inmediato por WhatsApp",
                    "Iteramos hasta que quedes 100% satisfecho"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className="ml-4 text-sm font-mono text-neutral-500">preview.tunegocio.com</span>
                </div>
                <div className="space-y-4">
                  {[
                    { num: "1", title: "Hacemos un cambio", desc: "Nuevo diseño del header" },
                    { num: "2", title: "Abrís el link en tu cel", desc: "Ves el cambio al instante" },
                    { num: "3", title: "Nos escribís por WhatsApp", desc: "\"Me gusta, pero cambiá el color\"" },
                  ].map((step) => (
                    <div key={step.num} className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                      <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                        {step.num}
                      </div>
                      <div>
                        <p className="text-white font-medium">{step.title}</p>
                        <p className="text-neutral-500 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 p-4 bg-[#3ECF8E]/20 border border-[#3ECF8E] rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-neutral-900 text-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">Listo en minutos</p>
                      <p className="text-neutral-400 text-sm">Sin esperas, sin emails eternos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google My Business Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
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
                  {["Configuración de Google My Business", "Integración con tu página web", "Estrategia para obtener más reseñas", "Widget de reseñas en tu sitio"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
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

        {/* Industries Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
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

        {/* MANTENIMIENTO Y SOPORTE */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Después del lanzamiento</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Mantenimiento y Soporte
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                No todas las páginas necesitan mantenimiento constante, pero todas necesitan soporte.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* No Maintenance Needed */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Landing y Catálogo</h3>
                    <p className="text-neutral-500">Sin mantenimiento obligatorio</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Las páginas estáticas (landing pages y catálogos) no requieren mantenimiento mensual.
                  Una vez entregadas, funcionan perfectamente sin intervención.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Soporte incluido</span>
                    <span className="text-[#3ECF8E] font-medium">30 días gratis</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Cambios menores después</span>
                    <span className="text-white font-medium">Se cotizan aparte</span>
                  </div>
                </div>
              </div>

              {/* Maintenance Required */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-[#3ECF8E]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">E-Commerce</h3>
                    <p className="text-neutral-500">Mantenimiento mensual incluido</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Las tiendas online requieren mantenimiento constante: actualizaciones de seguridad,
                  backups, monitoreo del procesador de pagos, y soporte técnico continuo.
                </p>
                <div className="space-y-3">
                  {["Actualizaciones de seguridad", "Backups automáticos", "Soporte prioritario", "Cambios menores incluidos"].map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                      <span className="text-neutral-300">{item}</span>
                      <span className="text-[#3ECF8E]">✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COSTOS ADICIONALES */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Costos adicionales</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Costos que corren por tu cuenta
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Somos transparentes. Estos son costos externos que vos pagás directamente a los proveedores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Domain */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Dominio</h3>
                    <p className="text-neutral-500">tunegocio.com o .cr</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">aproximadamente</span>
                  <div className="text-3xl font-bold text-neutral-900">$11-15</div>
                  <span className="text-sm text-neutral-500">por año</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  El dominio es la dirección de tu página (ej: tunegocio.com). Lo registrás a tu nombre
                  y es tuyo para siempre. Te ayudamos con el proceso de registro.
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Correo Profesional</h3>
                    <p className="text-neutral-500">info@tunegocio.com</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-3xl font-bold text-neutral-900">$6</div>
                  <span className="text-sm text-neutral-500">por cuenta / mes</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  Correo profesional con tu dominio (ej: info@tunegocio.com). Usamos Google Workspace
                  o alternativas más económicas según tu presupuesto. Te ayudamos a configurarlo.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-500">
                <strong className="text-neutral-900">Nota:</strong> El hosting y correo empresarial no están incluidos
                en el precio del desarrollo. Son costos adicionales que se pagan aparte.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are + Technology + Process */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
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
                <Link href="/nosotros" className="inline-flex items-center gap-2 text-[#3ECF8E] font-medium hover:underline">
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
            <div className="rounded-3xl p-6 sm:p-8 md:p-12 bg-neutral-800 border border-neutral-700">
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

        {/* FAQ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Preguntas frecuentes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                ¿Tenés dudas?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: "¿Cuánto tiempo tardan en entregar mi página?", a: "Depende del tipo de proyecto. Landing pages: 1-3 días. Sitios catálogo: 3-7 días. E-commerce: 7-10 días. Nunca más de 10 días hábiles." },
                { q: "¿Qué pasa si no me gusta el diseño?", a: "Con nuestro sistema de preview en tiempo real, vas viendo cada cambio. Si algo no te gusta, lo ajustamos al instante. Iteramos hasta que quedes 100% satisfecho." },
                { q: "¿Puedo hacer cambios después de que la página esté lista?", a: "Sí. Los primeros 30 días de soporte están incluidos. Después, podés contratar un plan de mantenimiento o pagar por cambios puntuales." },
                { q: "¿El hosting está incluido?", a: "No, el hosting y correo empresarial son costos adicionales. El hosting cuesta aproximadamente $15/mes y el correo desde $6/mes. Nosotros te ayudamos a configurar todo." },
                { q: "¿Necesito saber de tecnología?", a: "Para nada. Nosotros nos encargamos de todo lo técnico. Vos solo nos decís qué querés y nosotros lo hacemos realidad." },
                { q: "¿Qué métodos de pago aceptan?", a: "SINPE Móvil, transferencia bancaria, y para e-commerce configuramos el procesador de pagos que prefieras (SINPE, tarjeta, etc)." },
              ].map((item) => (
                <div key={item.q} className="rounded-xl p-6 bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{item.q}</h3>
                  <p className="text-neutral-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-400">
              Contanos tu idea y te damos una cotización sin compromiso en menos de 24 horas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            >
              Cotizar mi página
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
