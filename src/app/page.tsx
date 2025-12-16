import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Floating code snippets for background decoration
function CodeBackground() {
  const codeSnippets = [
    "const web = await build();",
    "function createSite() { }",
    "<div className=\"hero\">",
    "export default App;",
    "npm run deploy",
    "git push origin main",
    "async function getData()",
    "return <Component />;",
    "const [state, setState]",
    "useEffect(() => { })",
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <div className="absolute top-0 left-[10%] animate-code-scroll">
        {[...codeSnippets, ...codeSnippets].map((code, i) => (
          <div key={i} className="font-mono text-sm py-8 text-neutral-900">
            {code}
          </div>
        ))}
      </div>
      <div className="absolute top-0 right-[15%] animate-code-scroll" style={{ animationDelay: "-10s" }}>
        {[...codeSnippets.reverse(), ...codeSnippets].map((code, i) => (
          <div key={i} className="font-mono text-sm py-8 text-neutral-900">
            {code}
          </div>
        ))}
      </div>
    </div>
  );
}

// Floating geometric shapes
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circles */}
      <div className="absolute top-20 left-[10%] w-64 h-64 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute top-40 right-[5%] w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl animate-float-delay" />
      <div className="absolute bottom-20 left-[20%] w-72 h-72 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl animate-float" />

      {/* Stars */}
      <svg className="absolute top-32 left-[20%] w-4 h-4 text-violet-400 animate-twinkle" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
      <svg className="absolute top-48 right-[25%] w-3 h-3 text-blue-400 animate-twinkle-delay-1" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
      <svg className="absolute top-64 left-[40%] w-2 h-2 text-indigo-400 animate-twinkle-delay-2" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
      <svg className="absolute bottom-32 right-[30%] w-3 h-3 text-violet-400 animate-twinkle-delay-3" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
      <svg className="absolute top-[40%] left-[8%] w-2 h-2 text-blue-400 animate-twinkle" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
      <svg className="absolute top-[60%] right-[12%] w-4 h-4 text-indigo-400 animate-twinkle-delay-2" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15,10 24,10 17,15 20,24 12,18 4,24 7,15 0,10 9,10" />
      </svg>
    </div>
  );
}

// Constellation lines connecting dots
function ConstellationBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Dots */}
        <circle cx="100" cy="100" r="2" fill="#6366f1" className="animate-pulse-slow" />
        <circle cx="200" cy="150" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="350" cy="80" r="2" fill="#6366f1" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="500" cy="200" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <circle cx="700" cy="120" r="2" fill="#6366f1" className="animate-pulse-slow" />
        <circle cx="900" cy="180" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="1050" cy="100" r="2" fill="#6366f1" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />

        <circle cx="150" cy="400" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" />
        <circle cx="400" cy="350" r="2" fill="#6366f1" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="600" cy="450" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="850" cy="380" r="2" fill="#6366f1" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <circle cx="1100" cy="420" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" />

        <circle cx="80" cy="650" r="2" fill="#6366f1" className="animate-pulse-slow" />
        <circle cx="300" cy="700" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
        <circle cx="550" cy="620" r="2" fill="#6366f1" className="animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <circle cx="750" cy="720" r="1.5" fill="#8b5cf6" className="animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <circle cx="950" cy="680" r="2" fill="#6366f1" className="animate-pulse-slow" />

        {/* Lines connecting dots */}
        <line x1="100" y1="100" x2="200" y2="150" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
        <line x1="200" y1="150" x2="350" y2="80" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
        <line x1="350" y1="80" x2="500" y2="200" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
        <line x1="500" y1="200" x2="700" y2="120" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
        <line x1="700" y1="120" x2="900" y2="180" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
        <line x1="900" y1="180" x2="1050" y2="100" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />

        <line x1="150" y1="400" x2="400" y2="350" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
        <line x1="400" y1="350" x2="600" y2="450" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
        <line x1="600" y1="450" x2="850" y2="380" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
        <line x1="850" y1="380" x2="1100" y2="420" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />

        {/* Cross connections */}
        <line x1="200" y1="150" x2="150" y2="400" stroke="#6366f1" strokeWidth="0.3" opacity="0.2" />
        <line x1="500" y1="200" x2="400" y2="350" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.2" />
        <line x1="700" y1="120" x2="600" y2="450" stroke="#6366f1" strokeWidth="0.3" opacity="0.2" />
        <line x1="900" y1="180" x2="850" y2="380" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.2" />
      </svg>
    </div>
  );
}

// Binary/code rain effect
function CodeRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
      <div className="absolute top-0 left-[5%] font-mono text-xs leading-4 animate-code-scroll">
        {"01001101 01000001 01011000 ".repeat(50).split(" ").map((bin, i) => (
          <div key={i}>{bin}</div>
        ))}
      </div>
      <div className="absolute top-0 left-[25%] font-mono text-xs leading-4 animate-code-scroll" style={{ animationDelay: "-5s" }}>
        {"10110100 11001010 01010111 ".repeat(50).split(" ").map((bin, i) => (
          <div key={i}>{bin}</div>
        ))}
      </div>
      <div className="absolute top-0 right-[25%] font-mono text-xs leading-4 animate-code-scroll" style={{ animationDelay: "-15s" }}>
        {"11010010 01101001 10100110 ".repeat(50).split(" ").map((bin, i) => (
          <div key={i}>{bin}</div>
        ))}
      </div>
      <div className="absolute top-0 right-[5%] font-mono text-xs leading-4 animate-code-scroll" style={{ animationDelay: "-8s" }}>
        {"01110011 10011010 01001110 ".repeat(50).split(" ").map((bin, i) => (
          <div key={i}>{bin}</div>
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
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
          <FloatingShapes />
          <ConstellationBackground />
          <CodeRain />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-200 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-sm text-violet-700 font-medium">Tecnología de nueva generación</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight tracking-tight">
              Creá en días.
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Escalá sin límites.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto">
              Desarrollo web de nueva generación para negocios que quieren crecer.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-105"
              >
                Iniciar proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#precio"
                className="inline-flex items-center justify-center gap-2 border border-neutral-200 px-8 py-4 rounded-full text-sm font-medium hover:border-neutral-400 transition-all"
              >
                Ver precios
              </Link>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg className="w-6 h-6 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 border-y border-neutral-100 bg-neutral-50/50">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-8">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["Can't Wait Travel", "Go Adventures", "Grupo Oroz", "OroStudios"].map((client) => (
                <span key={client} className="text-sm font-medium text-neutral-400 hover:text-neutral-600 transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Revolution Section - NEW */}
        <section className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 text-white overflow-hidden">
          {/* Background stars */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-[10%] w-1 h-1 bg-white rounded-full animate-twinkle" />
            <div className="absolute top-20 left-[30%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delay-1" />
            <div className="absolute top-32 right-[20%] w-1 h-1 bg-white rounded-full animate-twinkle-delay-2" />
            <div className="absolute top-16 right-[35%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
            <div className="absolute bottom-20 left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle-delay-3" />
            <div className="absolute bottom-32 left-[45%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle-delay-1" />
            <div className="absolute bottom-16 right-[25%] w-1 h-1 bg-white rounded-full animate-twinkle-delay-2" />
            <div className="absolute top-1/2 left-[5%] w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
            <div className="absolute top-1/3 right-[8%] w-1 h-1 bg-white rounded-full animate-twinkle-delay-3" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="text-2xl">🚀</span>
              <span className="text-sm text-white/80">El futuro llegó a Costa Rica</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pagar miles de dólares
              <br />
              <span className="text-neutral-500 line-through decoration-red-500/50">por una página web</span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                es cosa del pasado.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-8">
              La nueva tecnología y el poder de la inteligencia artificial llegaron a Costa Rica.
              Lo que antes costaba millones, ahora es accesible para todos.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sin código obsoleto
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sin intermediarios
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Sin sorpresas
              </span>
            </div>
          </div>
        </section>

        {/* Price Section - NEW */}
        <section id="precio" className="relative py-24 sm:py-32 px-6 overflow-hidden">
          <FloatingShapes />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-4">
              Tu página web profesional
              <br />
              <span className="text-neutral-400">desde</span>
            </h2>

            <div className="my-8">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  ₡100,000
                </span>
              </div>
              <p className="text-lg text-neutral-500 mt-2">
                Pago único · Sin mensualidades ocultas
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="p-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-violet-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Tecnología</h3>
                <p className="text-sm text-neutral-500">La misma que usa Netflix y Airbnb</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Velocidad</h3>
                <p className="text-sm text-neutral-500">Entregado en días, no meses</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-semibold text-neutral-900 mb-1">Calidad</h3>
                <p className="text-sm text-neutral-500">Diseño profesional garantizado</p>
              </div>
            </div>

            <div className="mt-12">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-105"
              >
                Empezar ahora
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 px-6 bg-dots">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                La mejor tecnología del mundo.
                <br />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Ahora accesible.
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="group text-center p-8 bg-white rounded-2xl border border-neutral-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Tecnología de clase mundial
                </h3>
                <p className="text-neutral-500 text-sm">
                  Frameworks modernos que garantizan velocidad y seguridad
                </p>
              </div>

              <div className="group text-center p-8 bg-white rounded-2xl border border-neutral-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Días, no meses
                </h3>
                <p className="text-neutral-500 text-sm">
                  Procesos optimizados para entregar resultados rápido
                </p>
              </div>

              <div className="group text-center p-8 bg-white rounded-2xl border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-100/50 transition-all">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Sin pagar de más
                </h3>
                <p className="text-neutral-500 text-sm">
                  Precios justos sin costos ocultos ni sorpresas
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="relative py-24 sm:py-32 px-6 bg-neutral-50 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-50" />

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
                { name: "React", icon: "⚛️", color: "bg-blue-500 text-white" },
                { name: "TypeScript", icon: "TS", color: "bg-blue-600 text-white" },
                { name: "Vercel", icon: "▲", color: "bg-neutral-900 text-white" },
                { name: "Supabase", icon: "⚡", color: "bg-green-600 text-white" },
                { name: "Tailwind", icon: "🎨", color: "bg-cyan-500 text-white" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all"
                >
                  <span className={`w-8 h-8 rounded-lg ${tech.color} flex items-center justify-center text-xs font-bold`}>
                    {tech.icon}
                  </span>
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
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
                {
                  title: "Landing Pages",
                  description: "Una página. Máximo impacto.",
                  icon: "📄",
                  gradient: "from-violet-500 to-indigo-500",
                },
                {
                  title: "Sitios Web",
                  description: "Tu negocio en línea. Profesional.",
                  icon: "🌐",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Reservas",
                  description: "Automatizá tu operación.",
                  icon: "📅",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  title: "E-Commerce",
                  description: "Vendé 24/7.",
                  icon: "🛒",
                  gradient: "from-orange-500 to-amber-500",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group relative p-8 bg-white border border-neutral-200 rounded-2xl hover:border-transparent hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all group"
              >
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Explorar servicios
                </span>
                <svg className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Nuestro trabajo.
              </h2>
              <p className="mt-4 text-neutral-500">Proyectos que hablan por sí solos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Can't Wait Travel", category: "Turismo", gradient: "from-violet-500 to-indigo-500" },
                { name: "Go Adventures", category: "Tours", gradient: "from-blue-500 to-cyan-500" },
                { name: "Grupo Oroz", category: "Corporativo", gradient: "from-amber-500 to-orange-500" },
                { name: "OroStudios", category: "Creativo", gradient: "from-pink-500 to-rose-500" },
              ].map((project) => (
                <div
                  key={project.name}
                  className="group relative aspect-[4/3] bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-transparent hover:shadow-xl transition-all cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-xs text-neutral-400 uppercase tracking-widest mb-2 group-hover:text-neutral-600 transition-colors">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {project.name}
                    </h3>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-neutral-500">Ver proyecto →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                Así trabajamos.
              </h2>
              <p className="mt-4 text-neutral-500">Simple. Transparente. Efectivo.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Hablamos", icon: "💬", description: "Entendemos tu proyecto" },
                { step: "02", title: "Proponemos", icon: "📝", description: "Sin sorpresas" },
                { step: "03", title: "Construimos", icon: "⚡", description: "Rápido y bien" },
                { step: "04", title: "Lanzamos", icon: "🚀", description: "Tu sitio en vivo" },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className="text-3xl sm:text-4xl font-light text-neutral-200 mb-2 block">
                    {item.step}
                  </span>
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
        <section id="contacto" className="relative py-24 sm:py-32 px-6 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
          <FloatingShapes />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
                ¿Tenés un proyecto?
              </h2>
              <p className="mt-4 text-neutral-500">
                Contanos tu idea. Te respondemos en menos de 24 horas.
              </p>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-100/50">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
                  placeholder="¿Qué tenés en mente?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-full font-medium hover:from-violet-700 hover:to-indigo-700 transition-all hover:shadow-lg hover:shadow-violet-200"
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
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-all hover:scale-105"
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
