"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { useTheme } from "@/components/ThemeProvider";

// Wireframe cube
function WireframeCube({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M 25 25 L 75 25 L 75 75 L 25 75 Z" opacity="0.3" />
      <path d="M 15 35 L 65 35 L 65 85 L 15 85 Z" opacity="0.6" />
      <line x1="15" y1="35" x2="25" y2="25" opacity="0.4" />
      <line x1="65" y1="35" x2="75" y2="25" opacity="0.4" />
      <line x1="65" y1="85" x2="75" y2="75" opacity="0.4" />
      <line x1="15" y1="85" x2="25" y2="75" opacity="0.4" />
    </svg>
  );
}

// Orbital rings
function OrbitalRings({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="160" cy="100" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="60" cy="140" r="2.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

// Connection nodes for dark sections
function ConnectionNodes() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
      <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
        <line x1="10%" y1="20%" x2="30%" y2="40%" />
        <line x1="30%" y1="40%" x2="50%" y2="30%" />
        <line x1="70%" y1="60%" x2="90%" y2="50%" />
      </g>
      <g fill="rgba(255,255,255,0.2)">
        <circle cx="10%" cy="20%" r="4" />
        <circle cx="30%" cy="40%" r="3" />
        <circle cx="50%" cy="30%" r="4" />
        <circle cx="70%" cy="60%" r="3" />
        <circle cx="90%" cy="50%" r="4" />
      </g>
    </svg>
  );
}

// Blueprint corner marks
function BlueprintCorners({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  return (
    <div className={`absolute inset-4 pointer-events-none ${className}`}>
      <div className={`absolute top-0 left-0 w-8 h-8 border-l border-t ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-r border-t ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-l border-b ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r border-b ${theme === "dark" ? "border-neutral-700" : "border-neutral-200"}`} />
    </div>
  );
}

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

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />

      <main className={`transition-colors duration-300 ${theme === "dark" ? "bg-neutral-900" : "bg-white"}`}>
        {/* Hero Section with Particles */}
        <section className={`relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden ${theme === "dark" ? "bg-neutral-900" : "bg-white bg-grid"}`}>
          <ParticleBackground />

          <WireframeCube className={`absolute top-32 left-[10%] w-24 h-24 animate-float opacity-30 ${theme === "dark" ? "text-neutral-600" : "text-neutral-300"}`} />
          <OrbitalRings className={`absolute bottom-32 right-[8%] w-40 h-40 opacity-20 ${theme === "dark" ? "text-neutral-600" : "text-neutral-300"}`} />

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
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all animate-glow ${
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
                href="#precio"
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
          theme === "dark" ? "border-neutral-800" : "border-neutral-100"
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
                className={`h-16 md:h-20 w-auto ${theme === "dark" ? "brightness-0 invert opacity-70" : ""}`}
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg"
                alt="Go Adventures"
                width={200}
                height={80}
                className={`h-16 md:h-20 w-auto ${theme === "dark" ? "brightness-0 invert opacity-70" : ""}`}
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.png"
                alt="Orostudios CR"
                width={200}
                height={80}
                className={`h-16 md:h-20 w-auto ${theme === "dark" ? "brightness-0 invert opacity-70" : ""}`}
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png"
                alt="Grupo Oroz"
                width={200}
                height={80}
                className={`h-16 md:h-20 w-auto ${theme === "dark" ? "brightness-0 invert opacity-70" : ""}`}
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
                <div key={item.name} className={`p-4 rounded-xl border text-center transition-colors card-hover ${
                  theme === "dark"
                    ? "bg-neutral-800 border-neutral-700 hover:border-[#3ECF8E]"
                    : "bg-neutral-50 border-neutral-100 hover:border-neutral-300"
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
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Primera impresión</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Dale profesionalismo
                  <br />
                  <span className="text-neutral-500">a tu negocio.</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-6">
                  Un cliente que busca tus servicios te juzga en segundos.
                  Sin página web, parecés improvisado. Con ella, parecés establecido.
                </p>
                <p className="text-lg text-neutral-400 mb-8">
                  <strong className="text-white">Tu página web es tu carta de presentación.</strong> Es lo primero
                  que ven tus clientes, y define si confían en vos o buscan a otro.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Generá confianza desde el primer contacto
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mostrá tus servicios de forma clara y atractiva
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Competí de igual a igual con empresas más grandes
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-red-500">✗</span>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Sin página web</p>
                      <p className="text-sm text-neutral-400">&ldquo;¿Este negocio es serio? No tienen ni página...&rdquo;</p>
                    </div>
                  </div>
                  <div className="border-t border-neutral-700" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#3ECF8E]/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-[#3ECF8E]">✓</span>
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Con página web profesional</p>
                      <p className="text-sm text-neutral-400">&ldquo;Se ven muy profesionales, voy a contactarlos.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google My Business + Web Synergy Section */}
        <section className={`py-24 sm:py-32 px-6 bg-grid transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
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
                Juntos, escalan tu negocio más rápido.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: GMB */}
              <div className={`rounded-2xl p-6 border shadow-sm card-hover ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Te encuentran en Google</span>
                </div>
                <div className={`rounded-xl p-4 mb-4 ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Tu Negocio</p>
                      <p className="text-xs text-[#3ECF8E]">Verificado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className={theme === "dark" ? "text-neutral-400" : "text-neutral-500"}>4.9 (127 reseñas)</span>
                  </div>
                </div>
                <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Alguien busca tu servicio. Ve tus 5 estrellas y buenas reseñas. Quiere saber más...
                </p>
              </div>

              {/* Step 2: Click to Web */}
              <div className={`rounded-2xl p-6 border shadow-sm card-hover ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Visitan tu página web</span>
                </div>
                <div className={`rounded-xl p-4 mb-4 text-center ${
                  theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
                }`}>
                  <div className={`w-full h-20 rounded-lg flex items-center justify-center mb-2 ${
                    theme === "dark" ? "bg-neutral-700" : "bg-neutral-200"
                  }`}>
                    <span className={`text-xs ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>tunegocio.com</span>
                  </div>
                  <div className="flex justify-center gap-1">
                    <div className={`w-8 h-1 rounded ${theme === "dark" ? "bg-neutral-600" : "bg-neutral-300"}`} />
                    <div className={`w-8 h-1 rounded ${theme === "dark" ? "bg-neutral-600" : "bg-neutral-300"}`} />
                    <div className={`w-8 h-1 rounded ${theme === "dark" ? "bg-neutral-600" : "bg-neutral-300"}`} />
                  </div>
                </div>
                <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Hacen clic en tu sitio web. Ven tus servicios, precios, fotos. Les gusta lo que ven...
                </p>
              </div>

              {/* Step 3: Contact */}
              <div className={`rounded-2xl p-6 border shadow-sm card-hover ${
                theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
              }`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-[#3ECF8E] text-neutral-900 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className={`font-semibold ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Te contactan</span>
                </div>
                <div className="bg-[#3ECF8E]/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>
                    <div>
                      <p className={`font-medium text-sm ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>Nuevo mensaje</p>
                      <p className={`text-xs ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>&ldquo;Hola, quiero cotizar...&rdquo;</p>
                    </div>
                  </div>
                </div>
                <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                  Ya confían en vos. Te escriben listos para comprar. <strong className={theme === "dark" ? "text-white" : "text-neutral-900"}>Nuevo cliente.</strong>
                </p>
              </div>
            </div>

            <div className="mt-12 bg-neutral-900 rounded-2xl p-8 text-center">
              <p className="text-neutral-400 mb-2">El resultado</p>
              <p className="text-2xl md:text-3xl font-bold text-white mb-4">
                Más visibilidad → Más confianza → Más clientes
              </p>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Sin página web, perdés todos esos clics. Con ella, cada reseña se convierte en una oportunidad de venta.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Social Proof */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Velocidad que convierte</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                  3 segundos.
                  <br />
                  <span className="text-neutral-500">Es todo lo que tenés.</span>
                </h2>
                <p className="text-lg text-neutral-400 mb-8">
                  Si tu página tarda más de 3 segundos en cargar, el 53% de los visitantes la abandona.
                  Nuestros sitios cargan en menos de 1 segundo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO optimizado
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Totalmente accesible
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mejores prácticas
                  </div>
                </div>
              </div>

              {/* Performance Metrics Display */}
              <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className="ml-4 text-sm text-neutral-500 font-mono">PageSpeed Insights</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { score: "A+", label: "Performance", color: "text-[#3ECF8E]" },
                    { score: "✓", label: "Accessibility", color: "text-[#3ECF8E]" },
                    { score: "A+", label: "Best Practices", color: "text-[#3ECF8E]" },
                    { score: "✓", label: "SEO", color: "text-[#3ECF8E]" },
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
                    <span className="text-[#3ECF8E] font-mono font-bold">0.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why You Need a Website Section */}
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
              <p className={`text-xl max-w-2xl mx-auto ${
                theme === "dark" ? "text-neutral-400" : "text-neutral-500"
              }`}>
                Los números no mienten. Sin presencia digital, tu negocio pierde oportunidades cada día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { stat: "97%", desc: "de los consumidores buscan negocios locales en internet" },
                { stat: "75%", desc: "juzgan la credibilidad por el diseño del sitio web" },
                { stat: "88%", desc: "no vuelven después de una mala experiencia web" },
                { stat: "24/7", desc: "tu negocio disponible mientras dormís" },
              ].map((item) => (
                <div key={item.stat} className={`p-6 rounded-xl border card-hover ${
                  theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-neutral-50 border-neutral-100"
                }`}>
                  <div className={`text-4xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>{item.stat}</div>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-600"}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-neutral-900 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Tu página web es tu mejor vendedor
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    Trabaja las 24 horas, los 7 días de la semana. No pide vacaciones, no se enferma,
                    y puede atender a miles de clientes al mismo tiempo. Una inversión que se paga sola.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Genera confianza y credibilidad
                    </li>
                    <li className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Atrae clientes mientras dormís
                    </li>
                    <li className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Te diferencia de la competencia
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                    <p className="text-sm text-neutral-500 mb-2">Retorno de inversión promedio</p>
                    <p className="text-5xl font-bold text-[#3ECF8E]">5-10x</p>
                    <p className="text-sm text-neutral-400 mt-2">en el primer año</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Search Section */}
        <section className={`py-24 sm:py-32 px-6 bg-grid transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-sm uppercase tracking-widest mb-6 ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-400"
            }`}>El futuro ya llegó</p>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Tus clientes ya no solo buscan en Google.
              <br />
              <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>Ahora preguntan a la IA.</span>
            </h2>

            <p className={`text-xl mb-12 max-w-2xl mx-auto ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-500"
            }`}>
              ChatGPT, Claude, Gemini. Las búsquedas conversacionales son el presente.
              Cuando alguien pregunta &ldquo;¿cuál es el mejor taller en San José?&rdquo;, ¿tu negocio aparece?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { title: "AI-Ready", desc: "Sitios optimizados para que las IA te recomienden" },
                { title: "SEO", desc: "Aparecer primero en Google y otros buscadores" },
                { title: "Local", desc: "Clientes cerca de vos te encuentran fácil" },
              ].map((item) => (
                <div key={item.title} className={`text-center p-6 rounded-xl border card-hover ${
                  theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
                }`}>
                  <div className={`text-3xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>{item.title}</div>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Myths Section (Dark) */}
        <section className="relative py-24 sm:py-32 px-6 bg-neutral-900 text-white overflow-hidden">
          <ConnectionNodes />
          <div className="absolute inset-0 bg-grid-dark" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Derribando barreras</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Las excusas que te frenan
                <br />
                <span className="text-neutral-500">ya no tienen sentido.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { myth: '"Es muy caro"', truth: "Desde ₡100,000 — menos que un anuncio en radio" },
                { myth: '"Toma mucho tiempo"', truth: "Tu sitio listo en días, no en meses" },
                { myth: '"Es muy complicado"', truth: "Vos solo decidís, nosotros ejecutamos" },
                { myth: '"Ya tengo redes sociales"', truth: "Las redes alquilan, tu web es tuya para siempre" },
                { myth: '"Mi negocio es pequeño"', truth: "Los pequeños son los que más crecen con presencia web" },
                { myth: '"No sé de tecnología"', truth: "No necesitás saber, para eso estamos nosotros" },
              ].map((item) => (
                <div key={item.myth} className="p-6 border border-neutral-700 rounded-xl bg-neutral-800/50 card-hover">
                  <div className="flex items-start gap-4">
                    <span className="text-red-500 text-xl">✗</span>
                    <div>
                      <p className="text-neutral-500 line-through mb-2">{item.myth}</p>
                      <p className="text-white font-medium">{item.truth}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className={`py-24 sm:py-32 px-6 border-b transition-colors ${
          theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-100"
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <p className={`text-sm uppercase tracking-widest mb-6 ${
              theme === "dark" ? "text-neutral-500" : "text-neutral-400"
            }`}>No es si, es cuándo</p>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Cada día sin página web
              <br />
              <span className={theme === "dark" ? "text-neutral-500" : "text-neutral-400"}>es un cliente que perdiste.</span>
            </h2>
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              theme === "dark" ? "text-neutral-400" : "text-neutral-500"
            }`}>
              Mientras leés esto, alguien está buscando exactamente lo que ofrecés.
              Si no te encuentra a vos, encuentra a tu competencia.
            </p>
            <p className={`text-lg font-medium mb-10 max-w-2xl mx-auto ${
              theme === "dark" ? "text-white" : "text-neutral-700"
            }`}>
              La pregunta no es si necesitás una página web.
              Es cuánto más vas a esperar para tenerla.
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

        {/* Price Section */}
        <section id="precio" className={`relative py-24 sm:py-32 px-6 overflow-hidden bg-dots transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-white"
        }`}>
          <BlueprintCorners />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 ${
              theme === "dark" ? "text-white" : "text-neutral-900"
            }`}>
              Tu página web profesional
            </h2>
            <p className={`text-xl mb-2 ${theme === "dark" ? "text-neutral-500" : "text-neutral-400"}`}>desde</p>

            <div className="my-8">
              <span className={`text-6xl sm:text-7xl md:text-8xl font-bold ${
                theme === "dark" ? "text-[#3ECF8E]" : "text-neutral-900"
              }`}>
                ₡100,000
              </span>
              <p className={`text-lg mt-4 ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                Pago único · Sin mensualidades ocultas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              {[
                { icon: "⚡", title: "Tecnología", desc: "La misma que usa Netflix" },
                { icon: "🚀", title: "Velocidad", desc: "Entregado en días" },
                { icon: "✓", title: "Calidad", desc: "Diseño profesional" },
              ].map((item) => (
                <div key={item.title} className={`p-6 border rounded-xl card-hover ${
                  theme === "dark" ? "bg-neutral-900 border-neutral-700" : "bg-white border-neutral-200"
                }`}>
                  <div className={`w-12 h-12 mx-auto mb-4 border rounded-lg flex items-center justify-center text-2xl ${
                    theme === "dark" ? "border-neutral-700" : "border-neutral-200"
                  }`}>
                    {item.icon}
                  </div>
                  <h3 className={`font-semibold mb-1 ${theme === "dark" ? "text-white" : "text-neutral-900"}`}>{item.title}</h3>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="#contacto"
                className={`inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all animate-glow ${
                  theme === "dark"
                    ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                    : "bg-neutral-900 text-white hover:bg-neutral-800"
                }`}
              >
                Empezar ahora
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className={`py-24 sm:py-32 px-6 border-y transition-colors ${
          theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-100"
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: "🌐", title: "Dominio personalizado", description: "tunegocio.com — profesional y fácil de recordar para tus clientes" },
                { icon: "📱", title: "Diseño responsive", description: "Se ve perfecto en celular, tablet y computadora" },
                { icon: "🔒", title: "SSL incluido", description: "Conexión segura (https) que genera confianza y mejora SEO" },
                { icon: "⚡", title: "Velocidad extrema", description: "Carga en menos de 1 segundo para no perder visitantes" },
                { icon: "🔍", title: "SEO básico", description: "Optimizado para aparecer en Google desde el día uno" },
                { icon: "💬", title: "Soporte incluido", description: "30 días de soporte post-lanzamiento sin costo adicional" },
              ].map((feature) => (
                <div key={feature.title} className={`relative p-8 border rounded-xl transition-colors group card-hover ${
                  theme === "dark" ? "border-neutral-700 hover:border-[#3ECF8E]" : "border-neutral-200 hover:border-neutral-400"
                }`}>
                  <BlueprintCorners className="opacity-0 group-hover:opacity-100 transition-opacity !inset-2" />
                  <div className="text-4xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className={`relative py-24 sm:py-32 px-6 overflow-hidden transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
        }`}>
          <div className="absolute inset-0 bg-grid opacity-50" />
          <WireframeCube className={`absolute top-20 right-[5%] w-32 h-32 opacity-30 ${
            theme === "dark" ? "text-neutral-600" : "text-neutral-300"
          }`} />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
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
                  className={`group flex items-center gap-3 px-5 py-3 rounded-full border transition-all card-hover ${
                    theme === "dark"
                      ? "bg-neutral-900 border-neutral-700 hover:border-[#3ECF8E]"
                      : "bg-white border-neutral-200 hover:border-neutral-400 hover:shadow-sm"
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

        {/* Services Section */}
        <section className={`py-24 sm:py-32 px-6 transition-colors ${
          theme === "dark" ? "bg-neutral-900" : "bg-white"
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                theme === "dark" ? "text-white" : "text-neutral-900"
              }`}>
                ¿Qué construimos?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Landing Pages", description: "Una página. Máximo impacto.", icon: "📄" },
                { title: "Sitios Web", description: "Tu negocio en línea. Profesional.", icon: "🌐" },
                { title: "Reservas", description: "Automatizá tu operación.", icon: "📅" },
                { title: "E-Commerce", description: "Vendé 24/7.", icon: "🛒" },
              ].map((service) => (
                <div
                  key={service.title}
                  className={`group p-8 border rounded-xl transition-all card-hover ${
                    theme === "dark"
                      ? "bg-neutral-800 border-neutral-700 hover:border-[#3ECF8E]"
                      : "bg-white border-neutral-200 hover:border-neutral-900"
                  }`}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className={`text-lg font-semibold mb-2 ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm ${theme === "dark" ? "text-neutral-400" : "text-neutral-500"}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/servicios"
                className={`inline-flex items-center gap-2 font-medium hover:gap-3 transition-all ${
                  theme === "dark" ? "text-[#3ECF8E]" : "text-neutral-900"
                }`}
              >
                Explorar servicios
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={`py-24 sm:py-32 px-6 bg-dots transition-colors ${
          theme === "dark" ? "bg-neutral-800" : "bg-neutral-50"
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
                { step: "01", title: "Hablamos", description: "Entendemos tu proyecto" },
                { step: "02", title: "Proponemos", description: "Sin sorpresas" },
                { step: "03", title: "Construimos", description: "Rápido y bien" },
                { step: "04", title: "Lanzamos", description: "Tu sitio en vivo" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 border rounded-xl flex items-center justify-center ${
                    theme === "dark" ? "border-neutral-700 bg-neutral-900" : "border-neutral-200 bg-white"
                  }`}>
                    <span className={`text-xl font-mono font-bold ${
                      theme === "dark" ? "text-[#3ECF8E]" : "text-neutral-900"
                    }`}>{item.step}</span>
                  </div>
                  <span className={`text-sm font-semibold block ${
                    theme === "dark" ? "text-white" : "text-neutral-900"
                  }`}>
                    {item.title}
                  </span>
                  <span className={`text-xs block mt-1 ${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-500"
                  }`}>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className={`relative py-24 sm:py-32 px-6 border-t overflow-hidden transition-colors ${
          theme === "dark" ? "bg-neutral-900 border-neutral-800" : "bg-white border-neutral-100"
        }`}>
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative z-10 max-w-xl mx-auto">
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

            <form className={`space-y-6 p-8 rounded-xl border ${
              theme === "dark" ? "bg-neutral-800 border-neutral-700" : "bg-white border-neutral-200"
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
                      : "bg-neutral-50 border-neutral-200"
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
                      : "bg-neutral-50 border-neutral-200"
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
                      : "bg-neutral-50 border-neutral-200"
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
