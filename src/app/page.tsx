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
              <span className="text-sm text-neutral-600 font-medium">Tu competencia ya está en línea</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight tracking-tight">
              Si no estás en Google,
              <br />
              <span className="text-neutral-400">no existís.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto">
              El 97% de los consumidores buscan negocios locales en internet antes de comprar.
              Sin presencia digital, perdés clientes todos los días.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
              >
                Iniciar proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#precio"
                className="inline-flex items-center justify-center gap-2 border border-neutral-300 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-900 transition-all"
              >
                Ver precios
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-10">
              Confían en nosotros
            </p>
            <div className="flex items-center justify-center gap-16 md:gap-24">
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png"
                alt="Can't Wait Travel"
                width={280}
                height={100}
                className="h-20 md:h-24 w-auto"
              />
              <Image
                src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg"
                alt="Go Adventures"
                width={280}
                height={100}
                className="h-20 md:h-24 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Google My Business Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 bg-grid">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">El poder de Google</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
                  Google My Business
                  <br />
                  <span className="text-neutral-400">tu vitrina digital gratuita.</span>
                </h2>
                <p className="text-lg text-neutral-500 mb-6">
                  Cuando alguien busca &ldquo;restaurantes cerca de mí&rdquo; o &ldquo;talleres en San José&rdquo;,
                  Google muestra los negocios con perfil verificado primero.
                </p>
                <p className="text-lg text-neutral-500 mb-8">
                  <strong className="text-neutral-900">Sin Google My Business, sos invisible.</strong> Con él,
                  aparecés en Maps, en búsquedas locales, y tus clientes te encuentran con un clic.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Aparecer en Maps</span>
                  <span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Reseñas de clientes</span>
                  <span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Horarios y contacto</span>
                  <span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Fotos del negocio</span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">G</span>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">Tu Negocio</p>
                    <p className="text-sm text-green-600">Verificado</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-neutral-500">4.9 (127 reseñas)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    San José, Costa Rica
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-green-600 font-medium">Abierto ahora</span> · Cierra a las 6PM
                  </div>
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +506 8888-8888
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-neutral-100 flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium">Llamar</button>
                  <button className="flex-1 border border-neutral-200 py-2 rounded-lg text-sm font-medium">Direcciones</button>
                </div>
              </div>
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

        {/* AI Search Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 bg-grid">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">El futuro ya llegó</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-8">
              Tus clientes ya no solo buscan en Google.
              <br />
              <span className="text-neutral-400">Ahora preguntan a la IA.</span>
            </h2>

            <p className="text-xl text-neutral-500 mb-12 max-w-2xl mx-auto">
              ChatGPT, Claude, Gemini. Las búsquedas conversacionales son el presente.
              Cuando alguien pregunta &ldquo;¿cuál es el mejor taller en San José?&rdquo;, ¿tu negocio aparece?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                <div className="text-3xl font-bold text-neutral-900 mb-2">AI-Ready</div>
                <p className="text-sm text-neutral-500">Sitios optimizados para que las IA te recomienden</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                <div className="text-3xl font-bold text-neutral-900 mb-2">SEO</div>
                <p className="text-sm text-neutral-500">Aparecer primero en Google y otros buscadores</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl border border-neutral-200">
                <div className="text-3xl font-bold text-neutral-900 mb-2">Local</div>
                <p className="text-sm text-neutral-500">Clientes cerca de vos te encuentran fácil</p>
              </div>
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
                <div key={item.myth} className="p-6 border border-neutral-700 rounded-xl bg-neutral-800/50">
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
        <section className="py-24 sm:py-32 px-6 border-b border-neutral-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">No es si, es cuándo</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
              Cada día sin página web
              <br />
              <span className="text-neutral-400">es un cliente que perdiste.</span>
            </h2>
            <p className="text-lg text-neutral-500 mb-6 max-w-2xl mx-auto">
              Mientras leés esto, alguien está buscando exactamente lo que ofrecés.
              Si no te encuentra a vos, encuentra a tu competencia.
            </p>
            <p className="text-lg text-neutral-700 font-medium mb-10 max-w-2xl mx-auto">
              La pregunta no es si necesitás una página web.
              Es cuánto más vas a esperar para tenerla.
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all"
            >
              Empezar hoy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Price Section */}
        <section id="precio" className="relative py-24 sm:py-32 px-6 overflow-hidden bg-dots">
          <BlueprintCorners />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
              Tu página web profesional
            </h2>
            <p className="text-xl text-neutral-400 mb-2">desde</p>

            <div className="my-8">
              <span className="text-6xl sm:text-7xl md:text-8xl font-bold text-neutral-900">
                ₡100,000
              </span>
              <p className="text-lg text-neutral-500 mt-4">
                Pago único · Sin mensualidades ocultas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 border border-neutral-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Tecnología</h3>
                <p className="text-sm text-neutral-500">La misma que usa Netflix</p>
              </div>
              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 border border-neutral-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Velocidad</h3>
                <p className="text-sm text-neutral-500">Entregado en días</p>
              </div>
              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <div className="w-12 h-12 mx-auto mb-4 border border-neutral-200 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1">Calidad</h3>
                <p className="text-sm text-neutral-500">Diseño profesional</p>
              </div>
            </div>

            <div className="mt-12">
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
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-24 sm:py-32 px-6 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Todo incluido</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                No solo una página web.
                <br />
                <span className="text-neutral-400">Una solución completa.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ),
                  title: "Dominio personalizado",
                  description: "tunegocio.com — profesional y fácil de recordar para tus clientes",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Diseño responsive",
                  description: "Se ve perfecto en celular, tablet y computadora",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "SSL incluido",
                  description: "Conexión segura (https) que genera confianza y mejora SEO",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Velocidad extrema",
                  description: "Carga en menos de 1 segundo para no perder visitantes",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  title: "SEO básico",
                  description: "Optimizado para aparecer en Google desde el día uno",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ),
                  title: "Soporte incluido",
                  description: "30 días de soporte post-lanzamiento sin costo adicional",
                },
              ].map((feature) => (
                <div key={feature.title} className="relative p-8 border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors group">
                  <BlueprintCorners className="opacity-0 group-hover:opacity-100 transition-opacity !inset-2" />
                  <div className="text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="relative py-24 sm:py-32 px-6 bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <WireframeCube className="absolute top-20 right-[5%] w-32 h-32 text-neutral-300 opacity-30" />

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Construido con lo mejor.
            </h2>
            <p className="text-neutral-500 mb-4">
              Lo mismo que usa Netflix. Airbnb. TikTok.
            </p>
            <p className="text-lg text-neutral-900 font-semibold mb-12">
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
                  className="group flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-neutral-200 hover:border-neutral-400 hover:shadow-sm transition-all"
                >
                  <span className={`w-8 h-8 rounded-lg ${tech.color} flex items-center justify-center text-xs font-bold`}>
                    {tech.icon}
                  </span>
                  <span className="text-sm font-medium text-neutral-700">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
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
                  className="group p-8 bg-white border border-neutral-200 rounded-xl hover:border-neutral-900 transition-all"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-neutral-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all"
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
        <section className="py-24 sm:py-32 px-6 bg-neutral-50 bg-dots">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Así trabajamos.
              </h2>
              <p className="mt-4 text-neutral-500">Simple. Transparente. Efectivo.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Hablamos", description: "Entendemos tu proyecto" },
                { step: "02", title: "Proponemos", description: "Sin sorpresas" },
                { step: "03", title: "Construimos", description: "Rápido y bien" },
                { step: "04", title: "Lanzamos", description: "Tu sitio en vivo" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 border border-neutral-200 rounded-xl flex items-center justify-center bg-white">
                    <span className="text-xl font-mono font-bold text-neutral-900">{item.step}</span>
                  </div>
                  <span className="text-sm font-semibold text-neutral-900 block">
                    {item.title}
                  </span>
                  <span className="text-xs text-neutral-500 block mt-1">
                    {item.description}
                  </span>
                </div>
              ))}
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
