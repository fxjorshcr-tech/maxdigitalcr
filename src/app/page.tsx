import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-neutral-900 leading-tight tracking-tight">
              Creá en días.
              <br />
              <span className="text-neutral-400">Escalá sin límites.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-500 max-w-xl mx-auto">
              Desarrollo web de nueva generación.
            </p>
            <div className="mt-10">
              <Link
                href="#contacto"
                className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Iniciar proyecto
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 px-6 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-8">
              Proyectos recientes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["Can't Wait Travel", "Go Adventures", "Grupo Oroz", "OroStudios"].map((client) => (
                <span key={client} className="text-sm font-medium text-neutral-300">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Revolution Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
                La mejor tecnología del mundo.
                <br />
                <span className="text-neutral-400">Ahora accesible.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  Tecnología
                </h3>
                <p className="text-neutral-500 text-sm">
                  de clase mundial
                </p>
              </div>

              <div className="text-center p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  Días
                </h3>
                <p className="text-neutral-500 text-sm">
                  no meses
                </p>
              </div>

              <div className="text-center p-8">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  Sin pagar
                </h3>
                <p className="text-neutral-500 text-sm">
                  de más
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
              Construido con lo mejor.
            </h2>
            <p className="text-neutral-500 mb-12">
              Lo mismo que usa Netflix. Airbnb. TikTok.
              <br />
              <span className="text-neutral-900 font-medium">Ahora para tu negocio.</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {[
                { name: "Next.js", icon: "▲" },
                { name: "React", icon: "⚛" },
                { name: "TypeScript", icon: "TS" },
                { name: "Vercel", icon: "▲" },
                { name: "Supabase", icon: "⚡" },
                { name: "Tailwind", icon: "🎨" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-neutral-200"
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span className="text-sm font-medium text-neutral-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                ¿Qué construimos?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Landing Pages",
                  description: "Una página. Máximo impacto.",
                  icon: "📄",
                },
                {
                  title: "Sitios Web",
                  description: "Tu negocio en línea. Profesional.",
                  icon: "🌐",
                },
                {
                  title: "Reservas",
                  description: "Automatizá tu operación.",
                  icon: "📅",
                },
                {
                  title: "E-Commerce",
                  description: "Vendé 24/7.",
                  icon: "🛒",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group p-8 border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors"
                >
                  <div className="text-3xl mb-4">{service.icon}</div>
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
        <section id="proyectos" className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                Nuestro trabajo.
              </h2>
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
                  className="group relative aspect-[4/3] bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-400 transition-colors"
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <span className="text-xs text-neutral-400 uppercase tracking-widest mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-neutral-900">
                      {project.name}
                    </h3>
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
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                Así trabajamos.
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Hablamos" },
                { step: "02", title: "Proponemos" },
                { step: "03", title: "Construimos" },
                { step: "04", title: "Lanzamos" },
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <span className="text-3xl sm:text-4xl font-light text-neutral-300 mb-2 block">
                    {item.step}
                  </span>
                  <div className="w-12 h-px bg-neutral-200 mx-auto mb-4" />
                  <span className="text-sm font-medium text-neutral-900">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24 sm:py-32 px-6 bg-neutral-50">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">
                ¿Tenés un proyecto?
              </h2>
            </div>

            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                  placeholder="¿Qué tenés en mente?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-4 rounded-full font-medium hover:bg-neutral-800 transition-colors"
              >
                Enviar
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
                className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:gap-3 transition-all"
              >
                Abrir chat
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
