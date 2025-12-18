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
              Rápido. Profesional.
              <br />
              <span className="gradient-text">Accesible.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400">
              Páginas web profesionales a una fracción del costo tradicional.
              Entregadas en días, ultrarápidas y construidas con la última tecnología.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Cotizar página
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#precios"
                className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
              >
                Ver precios
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos - WHITE BACKGROUND, FULL COLOR */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs uppercase tracking-widest mb-10 text-neutral-500">
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
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">El mundo es digital</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                El mundo cambió.
                <br />
                <span className="text-neutral-500">¿Tu negocio también?</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                Cada año, más personas buscan productos y servicios en internet.
                Si no estás ahí, no existís.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { stat: "5.4B", desc: "personas usan internet en el mundo", icon: "🌍" },
                { stat: "93%", desc: "de las experiencias online empiezan en Google", icon: "🔍" },
                { stat: "81%", desc: "investigan online antes de comprar", icon: "📱" },
                { stat: "70%", desc: "de PyMEs sin web pierden clientes", icon: "📉" },
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
                No tener página web en 2024 es como no tener teléfono en los 90s.
              </p>
              <p className="text-neutral-400">
                Tus competidores ya están online. ¿Vos?
              </p>
            </div>
          </div>
        </section>

        {/* Who Is This For Section - WHITE */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-neutral-400">Soluciones para todos</p>
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

            <p className="text-center mt-8 text-neutral-500">
              Y cualquier negocio que quiera crecer en el mundo digital.
            </p>
          </div>
        </section>

        {/* Cutting-Edge Technology Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">Tecnología de punta</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                  La misma tecnología
                  <br />
                  <span className="text-neutral-500">que usan los gigantes.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-400">
                  Netflix, Airbnb, TikTok, Uber — todas construyen sus aplicaciones con las mismas
                  herramientas que usamos nosotros.
                </p>
                <p className="text-lg mb-8 text-neutral-400">
                  <strong className="text-white">Antes, esto costaba millones.</strong> Hoy, gracias a
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
                    <li key={item} className="flex items-center gap-3 text-neutral-300">
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
                    className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg ${tech.color} flex items-center justify-center text-white text-sm font-bold mb-3`}>
                      {tech.icon}
                    </div>
                    <h3 className="text-white font-semibold">{tech.name}</h3>
                    <p className="text-sm text-neutral-500">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Professionalism Section - WHITE */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-neutral-400">Primera impresión</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  Dale profesionalismo
                  <br />
                  <span className="text-neutral-400">a tu negocio.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  Un cliente que busca tus servicios te juzga en segundos.
                  Sin página web, parecés improvisado. Con ella, parecés establecido.
                </p>
                <p className="text-lg mb-8 text-neutral-600">
                  <strong className="text-neutral-900">Tu página web es tu carta de presentación.</strong> Es lo primero
                  que ven tus clientes, y define si confían en vos o buscan a otro.
                </p>
                <ul className="space-y-3">
                  {[
                    "Generá confianza desde el primer contacto",
                    "Mostrá tus servicios de forma clara y atractiva",
                    "Competí de igual a igual con empresas más grandes"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl p-8 border bg-white border-neutral-200 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-red-500 text-xl">✗</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-neutral-900">Sin página web</p>
                      <p className="text-sm text-neutral-500">&ldquo;¿Este negocio es serio? No tienen ni página...&rdquo;</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-200" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E] text-xl">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-neutral-900">Con página web profesional</p>
                      <p className="text-sm text-neutral-500">&ldquo;Se ven muy profesionales, voy a contactarlos.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google My Business + Web Synergy Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">La fórmula del crecimiento</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Google My Business + Página Web
                <br />
                <span className="text-neutral-500">= Crecimiento exponencial.</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto text-neutral-400">
                Las reseñas y estrellas en Google generan confianza. Tu página web convierte esa confianza en clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Te encuentran en Google",
                  description: "Alguien busca tu servicio. Ve tus 5 estrellas y buenas reseñas. Quiere saber más...",
                  icon: (
                    <div className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm mb-4">
                      <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">G</div>
                      <div>
                        <div className="text-xs font-semibold text-neutral-900">Tu Negocio</div>
                        <div className="text-xs text-[#3ECF8E]">Verificado</div>
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500 text-xs">★★★★★</span>
                          <span className="text-xs text-neutral-500">4.9 (127)</span>
                        </div>
                      </div>
                    </div>
                  )
                },
                {
                  step: "2",
                  title: "Visitan tu página web",
                  description: "Hacen clic en tu sitio web. Ven tus servicios, precios, fotos. Les gusta lo que ven...",
                  icon: (
                    <div className="p-3 bg-neutral-700 rounded-lg mb-4">
                      <div className="h-16 bg-neutral-600 rounded flex items-center justify-center">
                        <span className="text-neutral-400 text-xs">tunegocio.com</span>
                      </div>
                    </div>
                  )
                },
                {
                  step: "3",
                  title: "Te contactan",
                  description: "Ya confían en vos. Te escriben listos para comprar. ¡Nuevo cliente!",
                  icon: (
                    <div className="p-3 bg-neutral-700 rounded-lg mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#3ECF8E] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">📞</span>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Nuevo mensaje</div>
                          <div className="text-xs text-neutral-400">&ldquo;Hola, quiero cotizar...&rdquo;</div>
                        </div>
                      </div>
                    </div>
                  )
                }
              ].map((item) => (
                <div key={item.step} className="rounded-2xl p-6 border bg-neutral-800 border-neutral-700 transition-all hover:border-[#3ECF8E]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      item.step === "3" ? "bg-[#3ECF8E] text-neutral-900" : "bg-neutral-700 text-white"
                    }`}>{item.step}</span>
                    <span className="font-semibold text-white">{item.title}</span>
                  </div>
                  {item.icon}
                  <p className="text-sm text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl p-8 bg-neutral-800 border border-neutral-700 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white">Más visibilidad → Más confianza → </span>
                <span className="text-[#3ECF8E]">Más clientes</span>
              </p>
              <p className="text-neutral-400">
                Sin página web, perdés todos esos clics. Con ella, cada reseña se convierte en una oportunidad de venta.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Section - with Loading Bars */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-neutral-400">Velocidad que convierte</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  3 segundos.
                  <br />
                  <span className="text-neutral-400">Es todo lo que tenés.</span>
                </h2>
                <p className="text-lg mb-8 text-neutral-600">
                  Si tu página tarda más de 3 segundos en cargar, el 53% de los visitantes la abandona.
                  Nuestros sitios cargan en menos de 1 segundo.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["SEO optimizado", "Totalmente accesible", "Mejores prácticas"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics Display with Loading Bars */}
              <div className="rounded-2xl p-8 border bg-white border-neutral-200 shadow-xl">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className="ml-4 text-sm font-mono text-neutral-400">PageSpeed Insights</span>
                </div>

                <div className="space-y-6">
                  {[
                    { label: "Performance", value: 98 },
                    { label: "Accessibility", value: 100 },
                    { label: "Best Practices", value: 100 },
                    { label: "SEO", value: 100 },
                  ].map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-700">{metric.label}</span>
                        <span className="text-sm font-bold text-[#3ECF8E]">{metric.value}</span>
                      </div>
                      <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#3ECF8E] to-[#2eb67d] rounded-full transition-all duration-1000"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-neutral-500">Tiempo de carga</span>
                  <span className="text-2xl font-bold text-[#3ECF8E]">0.8s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">Precios transparentes</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                Elegí el plan perfecto
                <br />
                <span className="text-neutral-500">para tu negocio.</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-neutral-400">
                Sin sorpresas. Sin costos ocultos. Precio justo por trabajo de calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Landing Page */}
              <div className="rounded-2xl p-6 border bg-neutral-800 border-neutral-700 transition-all hover:border-[#3ECF8E] hover:scale-105">
                <div className="text-3xl mb-4">📄</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Landing Page
                </h3>
                <p className="text-sm mb-4 text-neutral-400">
                  Una página de alto impacto para captar clientes.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡100,000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Diseño responsive",
                    "Correo profesional configurado",
                    "Optimizado para SEO",
                    "Formulario de contacto",
                    "Hosting 1 año incluido"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="block text-center py-3 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Empezar
                </Link>
              </div>

              {/* Catálogo */}
              <div className="rounded-2xl p-6 border bg-neutral-800 border-neutral-700 transition-all hover:border-[#3ECF8E] hover:scale-105">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Sitio Catálogo
                </h3>
                <p className="text-sm mb-4 text-neutral-400">
                  Mostrá todos tus productos o servicios.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡200,000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Todo lo del Landing +",
                    "Múltiples páginas",
                    "Base de datos",
                    "Panel de administración",
                    "Galería de productos"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="block text-center py-3 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Empezar
                </Link>
              </div>

              {/* E-Commerce */}
              <div className="rounded-2xl p-6 border-2 relative bg-neutral-800 border-[#3ECF8E] transition-all hover:scale-105">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
                <div className="text-3xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  E-Commerce
                </h3>
                <p className="text-sm mb-4 text-neutral-400">
                  Tienda online completa con pagos.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡300,000</div>
                  <span className="text-sm text-neutral-500">+ mantenimiento mensual</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Todo lo del Catálogo +",
                    "Procesador de pagos",
                    "Carrito de compras",
                    "Gestión de inventario",
                    "Mantenimiento mensual"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="block text-center py-3 rounded-lg font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                >
                  Empezar
                </Link>
              </div>

              {/* Custom */}
              <div className="rounded-2xl p-6 border bg-neutral-800 border-neutral-700 transition-all hover:border-[#3ECF8E] hover:scale-105">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  Personalizado
                </h3>
                <p className="text-sm mb-4 text-neutral-400">
                  Solución a medida para tu negocio.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">precio</span>
                  <div className="text-3xl font-bold text-white">A medida</div>
                  <span className="text-sm text-neutral-500">según requerimientos</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Diseño 100% único",
                    "Funcionalidades a medida",
                    "Integraciones especiales",
                    "Apps web complejas",
                    "Soporte prioritario"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className="block text-center py-3 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Cotizar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section - WHITE */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-neutral-400">Todo incluido</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
                No solo una página web.
                <br />
                <span className="text-neutral-400">Una solución completa.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🌐", title: "Dominio", desc: "tunegocio.com — profesional y memorable" },
                { icon: "📱", title: "Responsive", desc: "Perfecto en móvil, tablet y desktop" },
                { icon: "🔒", title: "SSL/HTTPS", desc: "Conexión segura que genera confianza" },
                { icon: "⚡", title: "Ultra rápido", desc: "Carga en menos de 1 segundo" },
                { icon: "🔍", title: "SEO", desc: "Optimizado para aparecer en Google" },
                { icon: "💬", title: "Soporte", desc: "30 días post-lanzamiento incluidos" },
              ].map((feature) => (
                <div key={feature.title} className="p-6 rounded-xl border bg-neutral-50 border-neutral-200 transition-all hover:border-[#3ECF8E] hover:shadow-lg">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Improved */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">Proceso simple</p>
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
                  { step: "03", title: "Construimos", desc: "Desarrollamos tu sitio mientras te mostramos el progreso.", icon: "🔨" },
                  { step: "04", title: "Lanzamos", desc: "Tu página en vivo. Te enseñamos a usarla y damos soporte.", icon: "🚀" },
                ].map((item, index) => (
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
                Tu página lista en <span className="text-[#3ECF8E]">5-10 días hábiles</span>
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
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            >
              Empezar hoy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 sm:py-32 px-6 bg-neutral-900">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E]">Empezá hoy</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                ¿Tenés un proyecto?
              </h2>
              <p className="mt-4 text-neutral-400">
                Contanos tu idea. Te respondemos en menos de 24 horas.
              </p>
            </div>

            <form className="space-y-6 p-8 rounded-2xl border bg-neutral-800 border-neutral-700">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2 text-neutral-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-neutral-300">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                  placeholder="+506 8888 8888"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2 text-neutral-300">
                  Contanos
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all resize-none bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                  placeholder="¿Qué tenés en mente?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm mb-4 text-neutral-500">
                ¿Preferís WhatsApp?
              </p>
              <a
                href="https://wa.me/50688888888"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#128C7E] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
