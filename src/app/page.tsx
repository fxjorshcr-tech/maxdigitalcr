"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LogoCarousel from "@/components/LogoCarousel";
import { HeroSection, PricingSection, CTASection } from "@/components/sections";
import { SectionHeader, FeatureCard, StatCard, FAQItem, ProcessStep, CheckIcon } from "@/components/ui";
import { homeDataES } from "@/lib/data";

const data = homeDataES;

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero */}
        <HeroSection {...data.hero} />

        {/* Client Logos */}
        <LogoCarousel title="Confían en nosotros" />

        {/* Páginas Web Profesionales */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Páginas Web Profesionales"
              title="Creamos tu página web."
              titleHighlight="Rápido, accesible y con la mejor tecnología."
              description="Diseñamos y desarrollamos páginas web profesionales usando las mismas herramientas que Netflix y Airbnb — pero a precios accesibles para negocios locales."
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {data.quickFeatures.map((item) => (
                <FeatureCard key={item.title} {...item} variant="large" />
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.techFeatures.map((item) => (
                <FeatureCard key={item.title} {...item} variant="small" />
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="La Realidad"
              title="La presencia digital"
              titleHighlight="ya no es opcional."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.stats.map((item) => (
                <StatCard key={item.stat} {...item} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-neutral-600">
                Si no estás online, <strong className="text-neutral-900">simplemente no existís</strong> para tus clientes potenciales.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection
          badge="Planes y Precios"
          title="Elegí el plan perfecto"
          titleHighlight="para tu negocio."
          description="Todos los planes incluyen diseño responsive, SEO básico y 30 días de soporte."
          plans={data.pricing}
          customProjectTitle="¿Necesitás algo más complejo?"
          customProjectDesc="Desarrollamos aplicaciones web personalizadas, sistemas de reservas, dashboards, integraciones con APIs y más. Contanos tu idea."
          customProjectCta="Cotizar proyecto personalizado"
        />

        {/* Nuestra Diferencia */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Nuestra diferencia"
              title="¿Por qué somos diferentes?"
              description="No solo hacemos páginas web. Creamos una experiencia de desarrollo única."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.differences.map((item) => (
                <FeatureCard key={item.title} {...item} dark={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Sin Complicaciones"
              title="Quitamos tus preocupaciones"
              titleHighlight="de la mesa."
              description="Sabemos que crear una página web puede parecer complicado. Por eso nos encargamos de todo."
              dark
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.painPoints.map((item) => (
                <div key={item.worry} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 transition-all hover:border-[#3ECF8E]">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <p className="text-white font-semibold mb-3">{item.worry}</p>
                  <p className="text-neutral-400 text-sm">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Asesoría Gratis */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Asesoría Gratis</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
                  Analizamos tu página<br />
                  <span className="text-neutral-400">sin costo.</span>
                </h2>
                <p className="text-lg mb-6 text-neutral-600">
                  ¿Ya tenés una página web pero sentís que no está funcionando? <strong className="text-neutral-900">Te ayudamos a identificar qué está fallando.</strong>
                </p>
                <ul className="space-y-4 mb-8">
                  {["Análisis de velocidad de carga", "Revisión de diseño y usabilidad", "Evaluación de SEO básico", "Revisión de experiencia móvil", "Recomendaciones personalizadas"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]">
                  Solicitar asesoría gratis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico Completo</h3>
                  <p className="text-neutral-400">Te entregamos un reporte con:</p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: "⚡", title: "Velocidad", desc: "¿Tu sitio carga rápido o estás perdiendo visitantes?" },
                    { icon: "📱", title: "Mobile", desc: "¿Se ve bien en celulares? El 70% del tráfico viene de ahí." },
                    { icon: "🔍", title: "SEO", desc: "¿Google puede encontrar tu página?" },
                    { icon: "🎯", title: "Conversión", desc: "¿Los visitantes saben qué hacer cuando llegan?" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <p className="text-white font-medium">{item.title}</p>
                        <p className="text-neutral-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-[#3ECF8E]/20 border border-[#3ECF8E] rounded-lg text-center">
                  <p className="text-white font-medium">100% Gratis, sin compromiso</p>
                  <p className="text-neutral-400 text-sm">Solo queremos ayudarte a mejorar</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge="Para Todos"
              title="¿Para quién es esto?"
              description="Si tenés un negocio y querés crecer, necesitás presencia digital."
              dark
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.industries.map((item) => (
                <div key={item.name} className="p-4 rounded-xl border text-center transition-all hover:scale-105 bg-neutral-50 border-neutral-200 hover:border-[#3ECF8E]">
                  <span className="text-3xl mb-2 block">{item.icon}</span>
                  <span className="text-sm font-medium text-neutral-900">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-neutral-400 mb-4">
                <strong className="text-white">¿No ves tu industria?</strong> No importa.
              </p>
              <p className="text-xl font-semibold text-white">
                Si tenés clientes, necesitás una página web. <span className="text-[#3ECF8E]">Punto.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Technology & Process */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
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
                {data.technologies.map((tech) => (
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
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Así trabajamos.</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {data.process.map((item) => (
                  <ProcessStep key={item.step} {...item} />
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
            <SectionHeader badge="Preguntas frecuentes" title="¿Tenés dudas?" />

            <div className="space-y-4">
              {data.faq.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="¿Listo para empezar?"
          description="Contanos tu idea y te damos una cotización sin compromiso en menos de 24 horas."
          cta="Cotizar mi página"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
