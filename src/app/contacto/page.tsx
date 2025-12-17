import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center px-6 pt-32 pb-20 bg-neutral-900 text-white">
          <div className="absolute inset-0 bg-grid-dark opacity-30" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">Contacto</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hablemos de tu proyecto.
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Te respondemos en menos de 24 horas. Sin compromiso, sin presión.
            </p>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Envianos un mensaje
                </h2>
                <p className="text-neutral-500 mb-8">
                  Contanos sobre tu negocio y qué necesitás. Te contactamos para entender
                  mejor tu proyecto y darte una propuesta personalizada.
                </p>

                <form className="space-y-6">
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
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-neutral-700 mb-2">
                      WhatsApp (opcional)
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
                    <label htmlFor="negocio" className="block text-sm font-medium text-neutral-700 mb-2">
                      Tipo de negocio
                    </label>
                    <select
                      id="negocio"
                      name="negocio"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="restaurante">Restaurante / Café</option>
                      <option value="hotel">Hotel / Hospedaje</option>
                      <option value="tour">Agencia de Tours</option>
                      <option value="tienda">Tienda / E-commerce</option>
                      <option value="servicios">Servicios profesionales</option>
                      <option value="salud">Salud / Clínica</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-2">
                      Contanos sobre tu proyecto
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
                      placeholder="¿Qué tenés en mente? ¿Qué querés lograr con tu página web?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-neutral-900 text-white py-4 rounded-lg font-medium hover:bg-neutral-800 transition-all"
                  >
                    Enviar mensaje
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Otras formas de contactarnos
                </h2>
                <p className="text-neutral-500 mb-8">
                  Si preferís una comunicación más directa, también podés escribirnos
                  por WhatsApp o enviarnos un email.
                </p>

                <div className="space-y-6 mb-12">
                  <a
                    href="https://wa.me/50688888888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366]/20 transition-colors"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">WhatsApp</p>
                      <p className="text-sm text-neutral-500">+506 8888 8888</p>
                      <p className="text-xs text-[#25D366] mt-1">Respuesta en minutos</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hola@maxdigitalcr.com"
                    className="flex items-center gap-4 p-6 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-neutral-100 transition-colors"
                  >
                    <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-500">hola@maxdigitalcr.com</p>
                      <p className="text-xs text-neutral-400 mt-1">Respuesta en 24 horas</p>
                    </div>
                  </a>
                </div>

                {/* FAQ Section */}
                <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                  <h3 className="font-semibold text-neutral-900 mb-4">Preguntas frecuentes</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">¿Cuánto tarda en estar lista mi página?</p>
                      <p className="text-sm text-neutral-500">En promedio, 5-7 días hábiles para una página web estándar.</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">¿Hay costos ocultos?</p>
                      <p className="text-sm text-neutral-500">No. El precio que te damos incluye todo: dominio, hosting, diseño y desarrollo.</p>
                    </div>
                    <div>
                      <p className="font-medium text-neutral-900 text-sm">¿Qué pasa después de la entrega?</p>
                      <p className="text-sm text-neutral-500">Tenés 30 días de soporte incluido. Luego, planes de mantenimiento opcionales.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Location Section (Optional Placeholder) */}
        <section className="py-16 px-6 bg-neutral-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-neutral-400 uppercase tracking-widest mb-4">Ubicación</p>
            <h2 className="text-2xl font-bold mb-4">San José, Costa Rica</h2>
            <p className="text-neutral-400 mb-6">
              Trabajamos 100% remoto, lo que nos permite atender clientes en todo el país
              sin aumentar costos de operación.
            </p>
            <div className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-neutral-300">Atendemos todo Costa Rica</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-neutral-50 border-t border-neutral-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              ¿No estás seguro de qué necesitás?
            </h2>
            <p className="text-neutral-500 mb-6">
              No te preocupes. Explorá nuestros servicios para ver qué opción se ajusta mejor
              a tu negocio, o simplemente escribinos y te asesoramos.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-full text-sm font-medium hover:border-neutral-900 transition-all"
            >
              Ver nuestros servicios
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
