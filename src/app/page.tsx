"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

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
  return (
    <div className={`absolute inset-4 pointer-events-none ${className}`}>
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-neutral-200" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-neutral-200" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-neutral-200" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-neutral-200" />
    </div>
  );
}

// Matrix rain component
function MatrixRain() {
  const [chars, setChars] = useState<string[]>([]);

  useEffect(() => {
    const characters = ['0', '1', '{', '}', '<', '>', '/', ';', ':', '=', '+', '-', '*', '&', '%', '#', '@'];
    const newChars = Array.from({ length: 30 }, () =>
      characters[Math.floor(Math.random() * characters.length)]
    );
    setChars(newChars);
  }, []);

  return (
    <div className="matrix-rain">
      <div className="matrix-column" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        {chars.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-grid">
          <MatrixRain />
          <WireframeCube className="absolute top-32 left-[10%] w-24 h-24 text-neutral-300 animate-float opacity-50" />
          <OrbitalRings className="absolute bottom-32 right-[8%] w-40 h-40 text-neutral-300 opacity-40" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="30%" x2="15%" y2="30%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="15%" y1="30%" x2="15%" y2="50%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <circle cx="15%" cy="30%" r="3" fill="rgba(0,0,0,0.08)" />
            <line x1="100%" y1="60%" x2="85%" y2="60%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <line x1="85%" y1="60%" x2="85%" y2="75%" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
            <circle cx="85%" cy="60%" r="3" fill="rgba(0,0,0,0.08)" />
          </svg>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-neutral-100 border border-neutral-200 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-neutral-600 font-medium">Desarrollo web en Costa Rica</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight tracking-tight">
              Rápido. Profesional.
              <br />
              <span className="text-neutral-400">Accesible.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-2xl mx-auto">
              Páginas web profesionales a una fracción del costo tradicional.
              La misma tecnología que usan las grandes empresas, ahora para tu negocio en Costa Rica.
            </p>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-10">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png"
                alt="Can't Wait Travel"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg"
                alt="Go Adventures"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo.png"
                alt="Orostudios CR"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png"
                alt="Grupo Oroz"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Who Is This For Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Soluciones para todos</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                ¿Para quién es esto?
              </h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
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
                <div key={item.name} className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 text-center hover:border-neutral-300 transition-colors">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{item.name}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-500 mt-8">
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
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Generá confianza desde el primer contacto
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mostrá tus servicios de forma clara y atractiva
                  </li>
                  <li className="flex items-center gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                      <span className="text-green-500">✓</span>
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
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 bg-grid">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">La fórmula del crecimiento</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                Google My Business + Página Web
                <br />
                <span className="text-neutral-400">= Crecimiento exponencial.</span>
              </h2>
              <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                Las reseñas y estrellas en Google generan confianza. Tu página web convierte esa confianza en clientes.
                Juntos, escalan tu negocio más rápido.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1: GMB */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span className="font-semibold text-neutral-900">Te encuentran en Google</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">G</span>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Tu Negocio</p>
                      <p className="text-xs text-green-600">Verificado</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-neutral-500">4.9 (127 reseñas)</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-500">
                  Alguien busca tu servicio. Ve tus 5 estrellas y buenas reseñas. Quiere saber más...
                </p>
              </div>

              {/* Step 2: Click to Web */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span className="font-semibold text-neutral-900">Visitan tu página web</span>
                </div>
                <div className="bg-neutral-50 rounded-xl p-4 mb-4 text-center">
                  <div className="w-full h-20 bg-neutral-200 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-neutral-400 text-xs">tunegocio.com</span>
                  </div>
                  <div className="flex justify-center gap-1">
                    <div className="w-8 h-1 bg-neutral-300 rounded" />
                    <div className="w-8 h-1 bg-neutral-300 rounded" />
                    <div className="w-8 h-1 bg-neutral-300 rounded" />
                  </div>
                </div>
                <p className="text-sm text-neutral-500">
                  Hacen clic en tu sitio web. Ven tus servicios, precios, fotos. Les gusta lo que ven...
                </p>
              </div>

              {/* Step 3: Contact */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span className="font-semibold text-neutral-900">Te contactan</span>
                </div>
                <div className="bg-green-50 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">Nuevo mensaje</p>
                      <p className="text-xs text-neutral-500">&ldquo;Hola, quiero cotizar...&rdquo;</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-500">
                  Ya confían en vos. Te escriben listos para comprar. <strong className="text-neutral-900">Nuevo cliente.</strong>
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
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO optimizado
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Totalmente accesible
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm text-neutral-500 font-mono">PageSpeed Insights</span>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { score: "A+", label: "Performance", color: "text-green-500" },
                    { score: "✓", label: "Accessibility", color: "text-green-500" },
                    { score: "A+", label: "Best Practices", color: "text-green-500" },
                    { score: "✓", label: "SEO", color: "text-green-500" },
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

        {/* Why You Need a Website Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">La realidad del mercado</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                ¿Por qué necesitás una página web?
              </h2>
              <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
                Los números no mienten. Sin presencia digital, tu negocio pierde oportunidades cada día.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-4xl font-bold text-neutral-900 mb-2">97%</div>
                <p className="text-sm text-neutral-600">de los consumidores buscan negocios locales en internet</p>
              </div>
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-4xl font-bold text-neutral-900 mb-2">75%</div>
                <p className="text-sm text-neutral-600">juzgan la credibilidad por el diseño del sitio web</p>
              </div>
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-4xl font-bold text-neutral-900 mb-2">88%</div>
                <p className="text-sm text-neutral-600">no vuelven después de una mala experiencia web</p>
              </div>
              <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-4xl font-bold text-neutral-900 mb-2">24/7</div>
                <p className="text-sm text-neutral-600">tu negocio disponible mientras dormís</p>
              </div>
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
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Genera confianza y credibilidad
                    </li>
                    <li className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Atrae clientes mientras dormís
                    </li>
                    <li className="flex items-center gap-3 text-neutral-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Te diferencia de la competencia
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block bg-neutral-800 rounded-xl p-6 border border-neutral-700">
                    <p className="text-sm text-neutral-500 mb-2">Retorno de inversión promedio</p>
                    <p className="text-5xl font-bold text-green-500">5-10x</p>
                    <p className="text-sm text-neutral-400 mt-2">en el primer año</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Power Section */}
        <section className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Nuestra misión</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                  El poder de la tecnología,
                  <br />
                  <span className="text-neutral-400">ahora en tus manos.</span>
                </h2>
                <p className="text-lg text-neutral-500 mb-6">
                  Antes, tener una página web profesional costaba millones y tomaba meses.
                  Hoy, gracias a la inteligencia artificial y las plataformas más modernas del mundo,
                  podemos darte exactamente la misma calidad a una fracción del costo.
                </p>
                <p className="text-lg text-neutral-500 mb-8">
                  <strong className="text-neutral-900">MaxDigitalCR</strong> democratiza la tecnología.
                  Lo que antes solo podían pagar las grandes empresas, ahora está al alcance de cualquier
                  negocio en Costa Rica.
                </p>
                <Link
                  href="/nosotros"
                  className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
                >
                  Conocenos más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Inteligencia Artificial</p>
                      <p className="text-sm text-neutral-500">Usamos IA para acelerar el desarrollo sin sacrificar calidad.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Plataformas de clase mundial</p>
                      <p className="text-sm text-neutral-500">Next.js, React, Vercel. Las mismas que usan Netflix y Airbnb.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">Precios justos</p>
                      <p className="text-sm text-neutral-500">Tecnología premium a precios accesibles para Costa Rica.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">Nuestra propuesta</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                Máximo valor.
                <br />
                <span className="text-neutral-500">Precio justo.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Tres pilares que nos definen: velocidad, tecnología y accesibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-700">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Tiempo récord</h3>
                <p className="text-neutral-400 mb-4">
                  Tu página lista en días, no en meses. Nuestros procesos optimizados con IA nos permiten
                  entregar más rápido sin sacrificar calidad.
                </p>
                <p className="text-sm text-neutral-500">Promedio de entrega: 5-7 días</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-700">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Máxima tecnología</h3>
                <p className="text-neutral-400 mb-4">
                  Las mismas herramientas que usan Netflix, Airbnb y TikTok. Next.js, React, Vercel.
                  Lo mejor del mercado para tu negocio.
                </p>
                <p className="text-sm text-neutral-500">Tecnología de Silicon Valley</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-neutral-800 rounded-2xl flex items-center justify-center border border-neutral-700">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Precio accesible</h3>
                <p className="text-neutral-400 mb-4">
                  Tecnología premium a precios justos para Costa Rica. Mucho valor por poco dinero.
                  Una inversión que se paga sola.
                </p>
                <p className="text-sm text-neutral-500">Desde ₡100,000</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 border border-neutral-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Conocé más sobre nosotros
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Myths + CTA Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Dejá de poner excusas.
              </h2>
              <p className="text-lg text-neutral-500">
                Cada día que pasa sin página web, es un cliente que se va con tu competencia.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { myth: '"Es muy caro"', truth: "Desde ₡100,000" },
                { myth: '"Toma mucho tiempo"', truth: "Listo en días" },
                { myth: '"Ya tengo redes"', truth: "Las redes no son tuyas" },
                { myth: '"No sé de tecnología"', truth: "Nosotros nos encargamos" },
              ].map((item) => (
                <div key={item.myth} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200">
                  <span className="text-red-500 text-lg">✗</span>
                  <span className="text-neutral-400 line-through text-sm">{item.myth}</span>
                  <span className="text-neutral-900 font-medium text-sm ml-auto">{item.truth}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Quiero mi página web
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section id="precio" className="py-24 sm:py-32 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Inversión</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
              Tu página web profesional
            </h2>
            <p className="text-xl text-neutral-400 mb-8">desde</p>

            <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900">
              ₡100,000
            </span>
            <p className="text-lg text-neutral-500 mt-4 mb-12">
              Pago único · Sin mensualidades ocultas · Tuya para siempre
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
              {[
                "Dominio incluido",
                "Diseño responsive",
                "SSL (https)",
                "SEO básico",
                "Velocidad óptima",
                "30 días soporte",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-neutral-600">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
            >
              Empezar ahora
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Services + Process Combined */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Services */}
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Servicios</p>
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  ¿Qué construimos?
                </h2>
                <div className="space-y-4">
                  {[
                    { title: "Landing Pages", description: "Una página. Máximo impacto. Perfecta para campañas.", icon: "📄" },
                    { title: "Sitios Web", description: "Tu negocio completo en línea. Profesional y moderno.", icon: "🌐" },
                    { title: "Sistemas de Reservas", description: "Automatizá citas y reservaciones. Ahorrá tiempo.", icon: "📅" },
                    { title: "E-Commerce", description: "Vendé tus productos 24/7. Carrito y pagos incluidos.", icon: "🛒" },
                  ].map((service) => (
                    <div key={service.title} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-neutral-200">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{service.title}</h3>
                        <p className="text-sm text-neutral-500">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Proceso</p>
                <h2 className="text-3xl font-bold text-neutral-900 mb-8">
                  Así trabajamos
                </h2>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Hablamos", description: "Nos contás tu idea. Entendemos tu negocio y objetivos." },
                    { step: "2", title: "Proponemos", description: "Te presentamos opciones claras. Sin sorpresas ni letra pequeña." },
                    { step: "3", title: "Construimos", description: "Desarrollamos tu sitio. Te mantenemos informado en cada paso." },
                    { step: "4", title: "Lanzamos", description: "Tu página en vivo. Te enseñamos a usarla. Soporte incluido." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="w-8 h-8 bg-neutral-900 text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-semibold text-neutral-900">{item.title}</h3>
                        <p className="text-sm text-neutral-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="relative py-24 sm:py-32 px-6 border-t border-neutral-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                ¿Tenés un proyecto?
              </h2>
              <p className="mt-4 text-neutral-500">
                Contanos tu idea. Te respondemos en menos de 24 horas.
              </p>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-xl border border-neutral-200">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-2">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                  placeholder="+506 8888 8888"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-2">
                  Contanos
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                  placeholder="¿Qué tenés en mente?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-all"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-neutral-500 mb-4">
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
