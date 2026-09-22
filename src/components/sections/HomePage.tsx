import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import HeroSection from "./HeroSection";
import PricingSection from "./PricingSection";
import VisibilitySection from "./VisibilitySection";
import AuditSection from "./AuditSection";
import CTASection from "./CTASection";
import { SectionHeader, FeatureCard, StatCard, FAQItem, ProcessStep, Icon } from "@/components/ui";
import { getHomeData, SITE } from "@/lib/data";

const labels = {
  es: {
    contact: "/contacto",
    servicesBadge: "Qué hacemos",
    servicesTitle: "Tres tipos de sitio.",
    servicesHighlight: "Uno se ajusta a tu negocio.",
    servicesDesc: "Sitios rápidos, fáciles de encontrar y hechos a la medida del negocio. Sin plantillas genéricas.",
    statsBadge: "Por qué importa",
    statsTitle: "Tus clientes te buscan en internet",
    statsHighlight: "antes de llamarte.",
    statsFoot: "Si no aparecés, o aparecés con un sitio lento y viejo, esa llamada se la lleva otro.",
    pricingBadge: "Planes y precios",
    pricingTitle: "Precios claros,",
    pricingHighlight: "desde el primer mensaje.",
    pricingDesc: "Todos los planes incluyen diseño responsive, SEO técnico, perfil de Google y 30 días de soporte.",
    customTitle: "¿Necesitás algo a la medida?",
    customDesc: "Sistemas de reservas, dashboards, integraciones con APIs, aplicaciones web. Contanos qué necesitás y te decimos si podemos y cuánto cuesta.",
    customCta: "Cotizar proyecto a la medida",
    diffBadge: "Cómo trabajamos",
    diffTitle: "Lo que podés esperar",
    diffHighlight: "de trabajar con nosotros.",
    processBadge: "Proceso",
    processTitle: "Cuatro pasos, sin vueltas.",
    processFoot: "Tu sitio en línea en",
    processFootHighlight: "1 a 10 días hábiles",
    techBadge: "Tecnología",
    techTitle: "Construido con herramientas modernas, no con plantillas.",
    techDesc: "Usamos la misma base técnica que sitios de alto tráfico: rápida, segura y sin plugins que se rompen.",
    industriesBadge: "Para quién",
    industriesTitle: "Negocios con los que trabajamos.",
    industriesDesc: "Si tenés clientes que te buscan en Google antes de comprar, esto es para vos.",
    industriesFoot: "¿No ves tu industria? Escribinos igual. El proceso es el mismo.",
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Lo que todo el mundo pregunta antes de contratar.",
  },
  en: {
    contact: "/en/contacto",
    servicesBadge: "What we do",
    servicesTitle: "Three types of site.",
    servicesHighlight: "One fits your business.",
    servicesDesc: "Fast sites, easy to find and built around the business. No generic templates.",
    statsBadge: "Why it matters",
    statsTitle: "Your customers look you up online",
    statsHighlight: "before they call.",
    statsFoot: "If you do not show up, or show up with a slow, dated site, someone else gets that call.",
    pricingBadge: "Plans and pricing",
    pricingTitle: "Clear prices,",
    pricingHighlight: "from the first message.",
    pricingDesc: "Every plan includes responsive design, technical SEO, Google profile and 30 days of support.",
    customTitle: "Need something custom?",
    customDesc: "Booking systems, dashboards, API integrations, web apps. Tell us what you need and we will tell you if we can do it and what it costs.",
    customCta: "Quote a custom project",
    diffBadge: "How we work",
    diffTitle: "What you can expect",
    diffHighlight: "from working with us.",
    processBadge: "Process",
    processTitle: "Four steps, no runaround.",
    processFoot: "Your site live in",
    processFootHighlight: "1 to 10 business days",
    techBadge: "Technology",
    techTitle: "Built with modern tools, not templates.",
    techDesc: "We use the same technical base as high-traffic sites: fast, secure and free of plugins that break.",
    industriesBadge: "Who it is for",
    industriesTitle: "Businesses we work with.",
    industriesDesc: "If you have customers who look you up on Google before buying, this is for you.",
    industriesFoot: "Do not see your industry? Write to us anyway. The process is the same.",
    faqBadge: "Frequently asked questions",
    faqTitle: "What everyone asks before hiring.",
  },
};

export default function HomePage({ lang }: { lang: "es" | "en" }) {
  const data = getHomeData(lang);
  const t = labels[lang];

  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        <HeroSection {...data.hero} ctaLink={t.contact} />

        {/* Real work, right after the hero */}
        <PortfolioSection lang={lang} />

        {/* Services */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              badge={t.servicesBadge}
              title={t.servicesTitle}
              titleHighlight={t.servicesHighlight}
              description={t.servicesDesc}
              dark
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {data.services.map((item) => (
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

        {/* Pricing */}
        <PricingSection
          badge={t.pricingBadge}
          title={t.pricingTitle}
          titleHighlight={t.pricingHighlight}
          description={t.pricingDesc}
          plans={data.pricing}
          notes={data.pricingNotes}
          pricesUpdated={SITE.pricesUpdated[lang]}
          customProjectTitle={t.customTitle}
          customProjectDesc={t.customDesc}
          customProjectCta={t.customCta}
          ctaLink={t.contact}
          lang={lang}
        />

        {/* Visibility: Google, Maps, AI */}
        <VisibilitySection data={data.visibility} />

        {/* How we work */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.diffBadge} title={t.diffTitle} titleHighlight={t.diffHighlight} dark />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.differences.map((item) => (
                <FeatureCard key={item.title} {...item} />
              ))}
            </div>

            {/* Process */}
            <div className="mt-16 rounded-3xl p-6 sm:p-8 md:p-12 bg-neutral-800 border border-neutral-700">
              <div className="text-center mb-12">
                <p className="text-sm uppercase tracking-widest mb-4 text-[#3ECF8E] font-bold">{t.processBadge}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{t.processTitle}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {data.process.map((item) => (
                  <ProcessStep key={item.step} {...item} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {t.processFoot} <span className="text-[#3ECF8E]">{t.processFootHighlight}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.statsBadge} title={t.statsTitle} titleHighlight={t.statsHighlight} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {data.stats.map((item) => (
                <StatCard key={item.stat} {...item} />
              ))}
            </div>
            <p className="mt-12 text-center text-lg text-neutral-600 max-w-2xl mx-auto">{t.statsFoot}</p>
          </div>
        </section>

        {/* Industries + technology */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.industriesBadge} title={t.industriesTitle} description={t.industriesDesc} dark />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.industries.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border text-center transition-all bg-neutral-800 border-neutral-700 hover:border-[#3ECF8E]"
                >
                  <div className="mx-auto mb-3 w-10 h-10 rounded-lg bg-neutral-700/60 flex items-center justify-center text-[#3ECF8E]">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <span className="text-sm font-medium text-white">{item.name}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-neutral-400">{t.industriesFoot}</p>

            <div className="mt-20 text-center">
              <p className="text-sm uppercase tracking-widest mb-4 text-[#3ECF8E] font-bold">{t.techBadge}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.techTitle}</h3>
              <p className="text-neutral-400 max-w-2xl mx-auto mb-10">{t.techDesc}</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {data.technologies.map((tech) => (
                  <div key={tech.name} className="p-4 rounded-xl bg-neutral-800 border border-neutral-700 text-center">
                    <p className="text-sm font-semibold text-white">{tech.name}</p>
                    <p className="text-xs text-neutral-500 mt-1">{tech.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free review */}
        <AuditSection data={data.audit} ctaLink={t.contact} />

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <SectionHeader badge={t.faqBadge} title={t.faqTitle} />
            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} defaultOpen={i === 0} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title={data.cta.title} description={data.cta.description} cta={data.cta.cta} ctaLink={t.contact} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
