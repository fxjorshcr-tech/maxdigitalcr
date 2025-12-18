"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useTheme } from "@/components/ThemeProvider";

// Theme Toggle Component
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button
        onClick={() => setTheme("light")}
        className={`theme-toggle-btn ${theme === "light" ? "active" : ""}`}
        aria-label="Light mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`theme-toggle-btn ${theme === "dark" ? "active" : ""}`}
        aria-label="Dark mode"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>
  );
}

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />

      <main className={`transition-colors duration-300 ${theme === "dark" ? "bg-neutral-900" : "bg-white"}`}>
        {/* Hero Section with Particles */}
        <section className={`relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden ${theme === "dark" ? "bg-neutral-900" : "bg-white"}`}>
          <ParticleBackground />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            {/* Theme Toggle in Hero */}
            <div className="flex justify-center mb-8">
              <ThemeToggle />
            </div>

            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 ${
              theme === "dark"
                ? "bg-neutral-800 border border-neutral-700"
                : "bg-neutral-100 border border-neutral-200"
            }`}>
              <span className="w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
              <span className={`text-sm font-medium ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                Desarrollo web en Costa Rica
              </span>
            </div>

            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Rápido. Profesional.
              <br />
              <span className="gradient-text">Accesible.</span>
            </h1>
            <p className={`mt-6 text-lg sm:text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-500"
            }`}>
              Páginas web profesionales a una fracción del costo tradicional.
              La misma tecnología que usan las grandes empresas, ahora para tu negocio en Costa Rica.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all ${
                  theme === "dark"
                    ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                Iniciar proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#precios"
                className={`inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all ${
                  theme === "dark"
                    ? "border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
                    : "border-neutral-300 hover:border-neutral-900"
                }`}
              >
                Ver precios
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className={`py-16 px-6 border-y transition-colors ${
          theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-neutral-50 border-neutral-100"
        }`}>
          <div className="max-w-6xl mx-auto">
            <p className={`text-center text-xs uppercase tracking-widest mb-10 ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-400"
            }`}>
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png"
                alt="Can't Wait Travel"
                width={200}
                height={80}
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg"
                alt="Go Adventures"
                width={200}
                height={80}
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.png"
                alt="Orostudios CR"
                width={200}
                height={80}
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png"
                alt="Grupo Oroz"
                width={200}
                height={80}
                className="h-12 md:h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-sm uppercase tracking-widest mb-6 ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>Soluciones para todos</p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                ¿Para quién es esto?
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
              }`}>
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
                <div key={item.name} className={`p-4 rounded-xl border text-center transition-all hover:scale-105 ${
                  theme === "dark"
                    ? "bg-neutral-800 border-neutral-700 hover:border-[#3ECF8E]"
                    : "bg-neutral-50 border-neutral-200 hover:border-neutral-400"
                }`}>
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className={`text-sm font-medium ${
                    theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                  }`}>{item.name}</span>
                </div>
              ))}
            </div>

            <p className={`text-center mt-8 ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-500"
            }`}>
              Y cualquier negocio que quiera crecer en el mundo digital.
            </p>
          </div>
        </section>

        {/* Professionalism Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-sm uppercase tracking-widest mb-6 ${
                  theme === "dark" ? "text-neutral-500" : "text-neutral-400"
                }`}>Primera impresión</p>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                  theme === "dark" ? "text-white" : "text-neutral-900"
                }`}>
                  Dale profesionalismo
                  <br />
                  <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>a tu negocio.</span>
                </h2>
                <p className={`text-lg mb-6 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                  Un cliente que busca tus servicios te juzga en segundos.
                  Sin página web, parecés improvisado. Con ella, parecés establecido.
                </p>
                <p className={`text-lg mb-8 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                  <strong className={theme === "dark" ? "text-white" : "text-neutral-900"}>Tu página web es tu carta de presentación.</strong> Es lo primero
                  que ven tus clientes, y define si confían en vos o buscan a otro.
                </p>
                <ul className="space-y-3">
                  {[
                    "Generá confianza desde el primer contacto",
                    "Mostrá tus servicios de forma clara y atractiva",
                    "Competí de igual a igual con empresas más grandes"
                  ].map((item) => (
                    <li key={item} className={`flex items-center gap-3 ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-2xl p-8 border ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-red-500">✗</span>
                    </div>
                    <div>
                      <p className={`font-medium mb-1 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Sin página web</p>
                      <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>&ldquo;¿Este negocio es serio? No tienen ni página...&rdquo;</p>
                    </div>
                  </div>
                  <div className={`border-t ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`} />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3ECF8E]/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E]">✓</span>
                    </div>
                    <div>
                      <p className={`font-medium mb-1 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Con página web profesional</p>
                      <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>&ldquo;Se ven muy profesionales, voy a contactarlos.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google My Business + Web Synergy Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-sm uppercase tracking-widest mb-6 ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>La fórmula del crecimiento</p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                Google My Business + Página Web
                <br />
                <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>= Crecimiento exponencial.</span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
              }`}>
                Las reseñas y estrellas en Google generan confianza. Tu página web convierte esa confianza en clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Te encuentran en Google",
                  description: "Alguien busca tu servicio. Ve tus 5 estrellas y buenas reseñas. Quiere saber más...",
                  highlight: false
                },
                {
                  step: "2",
                  title: "Visitan tu página web",
                  description: "Hacen clic en tu sitio web. Ven tus servicios, precios, fotos. Les gusta lo que ven...",
                  highlight: false
                },
                {
                  step: "3",
                  title: "Te contactan",
                  description: "Ya confían en vos. Te escriben listos para comprar. Nuevo cliente.",
                  highlight: true
                }
              ].map((item) => (
                <div key={item.step} className={`rounded-2xl p-6 border transition-all hover:scale-105 ${
                  theme === "dark"
                    ? "bg-neutral-800 border-neutral-700"
                    : "bg-neutral-50 border-neutral-200"
                }`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      item.highlight
                        ? "bg-[#3ECF8E] text-neutral-900"
                        : theme === "dark" ? "bg-neutral-700 text-white" : "bg-neutral-200 text-neutral-900"
                    }`}>{item.step}</span>
                    <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>{item.title}</span>
                  </div>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className={`mt-12 rounded-2xl p-8 text-center ${
              theme === "dark" ? "bg-neutral-800 border border-neutral-700" : "bg-neutral-100"
            }`}>
              <p className="text-2xl md:text-3xl font-bold mb-4">
                <span className={theme === "dark" ? "text-white" : "text-neutral-900"}>Más visibilidad → Más confianza → </span>
                <span className="text-[#3ECF8E]">Más clientes</span>
              </p>
              <p className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>
                Sin página web, perdés todos esos clics. Con ella, cada reseña se convierte en una oportunidad de venta.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-sm uppercase tracking-widest mb-6 ${
                  theme === "dark" ? "text-neutral-500" : "text-neutral-400"
                }`}>Velocidad que convierte</p>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                  theme === "dark" ? "text-white" : "text-neutral-900"
                }`}>
                  3 segundos.
                  <br />
                  <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>Es todo lo que tenés.</span>
                </h2>
                <p className={`text-lg mb-8 ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>
                  Si tu página tarda más de 3 segundos en cargar, el 53% de los visitantes la abandona.
                  Nuestros sitios cargan en menos de 1 segundo.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["SEO optimizado", "Totalmente accesible", "Mejores prácticas"].map((item) => (
                    <div key={item} className={`flex items-center gap-2 text-sm ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
                      <CheckIcon />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics Display */}
              <div className={`rounded-2xl p-8 border ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className={`ml-4 text-sm font-mono ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>PageSpeed Insights</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { score: "A+", label: "Performance" },
                    { score: "✓", label: "Accessibility" },
                    { score: "A+", label: "Best Practices" },
                    { score: "✓", label: "SEO" },
                  ].map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-4xl font-bold text-[#3ECF8E] mb-1">
                        {metric.score}
                      </div>
                      <div className={`text-xs uppercase tracking-wider ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 pt-6 border-t ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>Tiempo de carga</span>
                    <span className="text-[#3ECF8E] font-mono font-bold">0.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-sm uppercase tracking-widest mb-6 ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>La realidad del mercado</p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                ¿Por qué necesitás una página web?
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "97%", desc: "buscan negocios locales en internet" },
                { stat: "75%", desc: "juzgan credibilidad por el diseño web" },
                { stat: "88%", desc: "no vuelven tras mala experiencia" },
                { stat: "24/7", desc: "tu negocio siempre disponible" },
              ].map((item) => (
                <div key={item.stat} className={`p-6 rounded-xl border text-center transition-all hover:scale-105 ${
                  theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-neutral-50 border-neutral-200"
                }`}>
                  <div className="text-3xl md:text-4xl font-bold text-[#3ECF8E] mb-2">{item.stat}</div>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="precios" className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-sm uppercase tracking-widest mb-6 ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>Precios transparentes</p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                Elegí el plan perfecto
                <br />
                <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>para tu negocio.</span>
              </h2>
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
              }`}>
                Sin sorpresas. Sin costos ocultos. Precio justo por trabajo de calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Landing Page */}
              <div className={`rounded-2xl p-6 border transition-all hover:scale-105 ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="text-3xl mb-4">📄</div>
                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                  Landing Page
                </h3>
                <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Una página de alto impacto para captar clientes.
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡100,000</div>
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>pago único</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Diseño responsive",
                    "Correo profesional configurado",
                    "Optimizado para SEO",
                    "Formulario de contacto",
                    "Hosting 1 año incluido"
                  ].map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`block text-center py-3 rounded-lg font-medium transition-all ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white hover:bg-neutral-700"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                  }`}
                >
                  Empezar
                </Link>
              </div>

              {/* Catálogo */}
              <div className={`rounded-2xl p-6 border transition-all hover:scale-105 ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="text-3xl mb-4">📚</div>
                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                  Sitio Catálogo
                </h3>
                <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Mostrá todos tus productos o servicios.
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡200,000</div>
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>pago único</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Todo lo del Landing +",
                    "Múltiples páginas",
                    "Base de datos",
                    "Panel de administración",
                    "Galería de productos"
                  ].map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`block text-center py-3 rounded-lg font-medium transition-all ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white hover:bg-neutral-700"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                  }`}
                >
                  Empezar
                </Link>
              </div>

              {/* E-Commerce */}
              <div className={`rounded-2xl p-6 border-2 relative transition-all hover:scale-105 ${
                theme === "dark" ? "bg-neutral-900 border-[#3ECF8E]" : "bg-white border-[#3ECF8E]"
              }`}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </span>
                </div>
                <div className="text-3xl mb-4">🛒</div>
                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                  E-Commerce
                </h3>
                <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Tienda online completa con pagos.
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>desde</span>
                  <div className="text-3xl font-bold text-[#3ECF8E]">₡300,000</div>
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>+ ₡25,000/mes</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Todo lo del Catálogo +",
                    "Procesador de pagos",
                    "Carrito de compras",
                    "Gestión de inventario",
                    "Mantenimiento mensual"
                  ].map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
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
              <div className={`rounded-2xl p-6 border transition-all hover:scale-105 ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="text-3xl mb-4">🚀</div>
                <h3 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                  Personalizado
                </h3>
                <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Solución a medida para tu negocio.
                </p>
                <div className="mb-6">
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>precio</span>
                  <div className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>A medida</div>
                  <span className={`text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>según requerimientos</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {[
                    "Diseño 100% único",
                    "Funcionalidades a medida",
                    "Integraciones especiales",
                    "Apps web complejas",
                    "Soporte prioritario"
                  ].map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${theme === "dark" ? "text-neutral-300" : "text-neutral-700"}`}>
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contacto"
                  className={`block text-center py-3 rounded-lg font-medium transition-all ${
                    theme === "dark"
                      ? "bg-neutral-800 text-white hover:bg-neutral-700"
                      : "bg-neutral-100 text-neutral-900 hover:bg-neutral-200"
                  }`}
                >
                  Cotizar
                </Link>
              </div>
            </div>

            <p className={`text-center mt-8 text-sm ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>
              Todos los planes incluyen: SSL, dominio (.com o .cr), y soporte post-lanzamiento.
            </p>
          </div>
        </section>

        {/* What's Included Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className={`text-sm uppercase tracking-widest mb-6 ${
                theme === "dark" ? "text-neutral-500" : "text-neutral-400"
              }`}>Todo incluido</p>
              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                No solo una página web.
                <br />
                <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>Una solución completa.</span>
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
                <div key={feature.title} className={`p-6 rounded-xl border transition-all hover:scale-105 ${
                  theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-neutral-50 border-neutral-200"
                }`}>
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Construido con lo mejor.
            </h2>
            <p className={`mb-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
              Lo mismo que usa Netflix. Airbnb. TikTok.
            </p>
            <p className={`text-lg font-semibold mb-12 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Ahora para tu negocio.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {[
                { name: "Next.js", icon: "▲", color: "bg-black text-white" },
                { name: "React", icon: "⚛️", color: "bg-[#61DAFB] text-black" },
                { name: "TypeScript", icon: "TS", color: "bg-[#3178C6] text-white" },
                { name: "Vercel", icon: "▲", color: "bg-black text-white" },
                { name: "Supabase", icon: "⚡", color: "bg-[#3ECF8E] text-white" },
                { name: "Tailwind", icon: "🎨", color: "bg-[#06B6D4] text-white" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all hover:scale-105 ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-700"
                      : "bg-white border-neutral-200"
                  }`}
                >
                  <span className={`w-8 h-8 rounded-lg ${tech.color} flex items-center justify-center text-xs font-bold`}>
                    {tech.icon}
                  </span>
                  <span className={`text-sm font-medium ${
                    theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                Así trabajamos.
              </h2>
              <p className={`mt-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                Simple. Transparente. Efectivo.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Hablamos", desc: "Entendemos tu proyecto" },
                { step: "02", title: "Proponemos", desc: "Sin sorpresas" },
                { step: "03", title: "Construimos", desc: "Rápido y bien" },
                { step: "04", title: "Lanzamos", desc: "Tu sitio en vivo" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center ${
                    theme === "dark" ? "bg-neutral-800" : "bg-neutral-100"
                  }`}>
                    <span className="text-xl font-mono font-bold text-[#3ECF8E]">{item.step}</span>
                  </div>
                  <span className={`text-sm font-semibold block ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>
                    {item.title}
                  </span>
                  <span className={`text-xs block mt-1 ${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                  }`}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Cada día sin página web
              <br />
              <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>es un cliente que perdiste.</span>
            </h2>
            <p className={`text-lg mb-10 max-w-2xl mx-auto ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-500"
            }`}>
              Mientras leés esto, alguien está buscando exactamente lo que ofrecés.
              Si no te encuentra a vos, encuentra a tu competencia.
            </p>
            <Link
              href="#contacto"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all ${
                theme === "dark"
                  ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                  : "bg-neutral-900 text-white hover:bg-neutral-800"
              }`}
            >
              Empezar hoy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                ¿Tenés un proyecto?
              </h2>
              <p className={`mt-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                Contanos tu idea. Te respondemos en menos de 24 horas.
              </p>
            </div>

            <form className={`space-y-6 p-8 rounded-2xl border ${
              theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-neutral-50 border-neutral-200"
            }`}>
              <div>
                <label htmlFor="nombre" className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                }`}>
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                      : "bg-white border-neutral-200 text-neutral-900"
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                }`}>
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                      : "bg-white border-neutral-200 text-neutral-900"
                  }`}
                  placeholder="+506 8888 8888"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className={`block text-sm font-medium mb-2 ${
                  theme === "dark" ? "text-neutral-300" : "text-neutral-700"
                }`}>
                  Contanos
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ECF8E] focus:border-transparent transition-all resize-none ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
                      : "bg-white border-neutral-200 text-neutral-900"
                  }`}
                  placeholder="¿Qué tenés en mente?"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-lg font-medium transition-all ${
                  theme === "dark"
                    ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                Enviar mensaje
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className={`text-sm mb-4 ${theme === "dark" ? "text-neutral-500" : "text-neutral-500"}`}>
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
