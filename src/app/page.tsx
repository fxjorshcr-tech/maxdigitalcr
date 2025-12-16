import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Technical grid with circuit-like lines
function TechGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Circuit lines */}
      <g stroke="rgba(0,0,0,0.08)" strokeWidth="1" fill="none">
        <path d="M 0 200 L 120 200 L 120 280 L 200 280" />
        <path d="M 100% 300 L calc(100% - 150px) 300 L calc(100% - 150px) 400" />
        <circle cx="120" cy="200" r="3" fill="rgba(0,0,0,0.1)" />
        <circle cx="120" cy="280" r="3" fill="rgba(0,0,0,0.1)" />
        <circle cx="200" cy="280" r="3" fill="rgba(0,0,0,0.1)" />
      </g>
    </svg>
  );
}

// Wireframe cube
function WireframeCube({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
      {/* Back face */}
      <path d="M 25 25 L 75 25 L 75 75 L 25 75 Z" opacity="0.3" />
      {/* Front face */}
      <path d="M 15 35 L 65 35 L 65 85 L 15 85 Z" opacity="0.6" />
      {/* Connecting lines */}
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
      {/* Orbital dots */}
      <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="160" cy="100" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="60" cy="140" r="2.5" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

// Connection nodes
function ConnectionNodes() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.15)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />

      {/* Connection lines */}
      <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
        <line x1="10%" y1="20%" x2="30%" y2="40%" />
        <line x1="30%" y1="40%" x2="50%" y2="30%" />
        <line x1="70%" y1="60%" x2="90%" y2="50%" />
        <line x1="60%" y1="80%" x2="80%" y2="70%" />
      </g>

      {/* Nodes */}
      <g fill="rgba(255,255,255,0.2)">
        <circle cx="10%" cy="20%" r="4" />
        <circle cx="30%" cy="40%" r="3" />
        <circle cx="50%" cy="30%" r="4" />
        <circle cx="70%" cy="60%" r="3" />
        <circle cx="90%" cy="50%" r="4" />
        <circle cx="60%" cy="80%" r="3" />
        <circle cx="80%" cy="70%" r="4" />
      </g>
    </svg>
  );
}

// Blueprint corner marks
function BlueprintCorners({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-4 pointer-events-none ${className}`}>
      {/* Top left */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-neutral-200" />
      {/* Top right */}
      <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-neutral-200" />
      {/* Bottom left */}
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-neutral-200" />
      {/* Bottom right */}
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-neutral-200" />
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
          {/* Decorative elements */}
          <WireframeCube className="absolute top-32 left-[10%] w-24 h-24 text-neutral-300 animate-float opacity-50" />
          <OrbitalRings className="absolute bottom-32 right-[8%] w-40 h-40 text-neutral-300 opacity-40" />

          {/* Circuit lines */}
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
              <span className="w-2 h-2 bg-neutral-900 rounded-full" />
              <span className="text-sm text-neutral-600 font-medium">Tecnología de nueva generación</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight tracking-tight">
              Creá en días.
              <br />
              <span className="text-neutral-400">Escalá sin límites.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto">
              Desarrollo web de nueva generación para negocios que quieren crecer.
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
            <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-8">
              Confían en nosotros
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["Can't Wait Travel", "Go Adventures", "Grupo Oroz", "OroStudios"].map((client) => (
                <span key={client} className="text-sm font-medium text-neutral-300 hover:text-neutral-500 transition-colors">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Revolution Section - Dark */}
        <section className="relative py-24 sm:py-32 px-6 bg-neutral-900 text-white overflow-hidden">
          <ConnectionNodes />
          <div className="absolute inset-0 bg-grid-dark" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">El futuro llegó</p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Pagar miles de dólares
              <br />
              <span className="text-neutral-600 line-through">por una página web</span>
              <br />
              es cosa del pasado.
            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
              La nueva tecnología llegó a Costa Rica.
              Lo que antes costaba millones, ahora es accesible.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Sin código obsoleto
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Sin intermediarios
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Sin sorpresas
              </span>
            </div>
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

        {/* Features Section */}
        <section className="py-24 sm:py-32 px-6 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
                La mejor tecnología del mundo.
                <br />
                <span className="text-neutral-400">Ahora accesible.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Tecnología de clase mundial",
                  description: "Frameworks modernos que garantizan velocidad y seguridad",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Días, no meses",
                  description: "Procesos optimizados para entregar resultados rápido",
                },
                {
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Sin pagar de más",
                  description: "Precios justos sin costos ocultos ni sorpresas",
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

          {/* Decorative wireframe */}
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

        {/* Projects Section */}
        <section id="proyectos" className="relative py-24 sm:py-32 px-6 bg-neutral-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Nuestro trabajo.
              </h2>
              <p className="mt-4 text-neutral-500">Proyectos que hablan por sí solos</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Can't Wait Travel", category: "Turismo" },
                { name: "Go Adventures", category: "Tours" },
                { name: "Grupo Oroz", category: "Corporativo" },
                { name: "OroStudios", category: "Creativo" },
              ].map((project) => (
                <div
                  key={project.name}
                  className="group relative aspect-[4/3] bg-neutral-800 rounded-xl border border-neutral-700 overflow-hidden hover:border-neutral-500 transition-all cursor-pointer"
                >
                  <div className="absolute inset-0 bg-grid-dark opacity-50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-xs text-neutral-500 uppercase tracking-widest mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {project.name}
                    </h3>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm text-neutral-400">Ver proyecto →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 sm:py-32 px-6 bg-dots">
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
              ].map((item, index) => (
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
