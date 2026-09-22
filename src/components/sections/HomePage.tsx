import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import HeroSection from "./HeroSection";
import ClientMarquee from "./ClientMarquee";
import AdvisorySection from "./AdvisorySection";
import VisibilitySection from "./VisibilitySection";
import OfferSection from "./OfferSection";
import SupportSection from "./SupportSection";
import AuditSection from "./AuditSection";
import TalkSection from "./TalkSection";
import { Reveal, Counter, ProcessTimeline } from "@/components/motion";
import { SectionHeader, FAQItem, Icon } from "@/components/ui";
import { getHomeData } from "@/lib/data";
import { portfolioProjects } from "@/lib/portfolio";

const labels = {
  es: {
    contact: "/contacto",
    marquee: "Sitios en producción hoy",
    processBadge: "Proceso",
    processTitle: "Cuatro pasos, sin vueltas.",
    processFoot: "Tu sitio en línea en",
    processFootHighlight: "días, no meses",
    statsBadge: "Por qué importa",
    statsTitle: "Tus clientes te buscan",
    statsHighlight: "antes de llamarte.",
    counters: [
      { to: portfolioProjects.length, suffix: "", label: "sitios en producción" },
      { to: 24, suffix: " h", label: "tiempo máximo de respuesta" },
      { to: 2, suffix: " s", label: "o menos de carga en celular" },
      { to: 30, suffix: " días", label: "de soporte incluido" },
    ],
    industriesBadge: "Para quién",
    industriesTitle: "Negocios con los que trabajamos.",
    industriesDesc: "Negocios cuyos clientes los buscan en internet antes de decidir.",
    industriesFoot: "Si tu rubro no está en la lista, el proceso es el mismo.",
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Lo que se pregunta antes de contratar.",
  },
  en: {
    contact: "/en/contacto",
    marquee: "Sites in production today",
    processBadge: "Process",
    processTitle: "Four steps, no runaround.",
    processFoot: "Your site live in",
    processFootHighlight: "days, not months",
    statsBadge: "Why it matters",
    statsTitle: "Your customers look you up",
    statsHighlight: "before they call.",
    counters: [
      { to: portfolioProjects.length, suffix: "", label: "sites in production" },
      { to: 24, suffix: " h", label: "maximum response time" },
      { to: 2, suffix: " s", label: "or less to load on mobile" },
      { to: 30, suffix: " days", label: "of support included" },
    ],
    industriesBadge: "Who it is for",
    industriesTitle: "Businesses we work with.",
    industriesDesc: "Businesses whose customers look them up online before deciding.",
    industriesFoot: "If your trade is not on the list, the process is the same.",
    faqBadge: "Frequently asked questions",
    faqTitle: "What gets asked before hiring.",
  },
};

export default function HomePage({ lang }: { lang: "es" | "en" }) {
  const data = getHomeData(lang);
  const t = labels[lang];

  return (
    <>
      <Navbar />

      <main className="bg-neutral-950">
        <HeroSection {...data.hero} ctaLink={t.contact} />
        <ClientMarquee label={t.marquee} />

        {/* 1. Asesoría empresarial */}
        <AdvisorySection data={data.advisory} />

        {/* 2. Páginas que hemos hecho */}
        <PortfolioSection lang={lang} />

        {/* 3. La nueva forma de aparecer */}
        <VisibilitySection data={data.visibility} lang={lang} />

        {/* 4. Tecnología, tiempo y precio accesible */}
        <OfferSection data={data.offer} ctaLink={t.contact} lang={lang} />

        {/* 5. Acompañamiento */}
        <SupportSection data={data.support} />

        {/* Proceso + contadores */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-neutral-950 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="rounded-3xl p-6 sm:p-10 md:p-14 bg-white/[0.03] border border-white/10 gradient-border">
                <div className="text-center mb-12">
                  <p className="text-sm uppercase tracking-widest mb-4 text-brand font-bold">{t.processBadge}</p>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{t.processTitle}</h2>
                </div>
                <ProcessTimeline steps={data.process} />
                <div className="mt-12 text-center">
                  <p className="text-xl sm:text-2xl font-bold">
                    {t.processFoot} <span className="text-gradient">{t.processFootHighlight}</span>
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.counters.map((c, i) => (
                <Reveal key={c.label} delay={i * 80}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                    <Counter to={c.to} suffix={c.suffix} className="text-4xl font-bold tracking-tight text-gradient" />
                    <p className="mt-2 text-sm text-neutral-400">{c.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Stats with sources */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeader badge={t.statsBadge} title={t.statsTitle} titleHighlight={t.statsHighlight} />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.stats.map((item, i) => (
                <Reveal key={item.stat} delay={i * 80}>
                  <div className="h-full p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-brand transition-all flex items-start gap-5">
                    <div className="shrink-0 w-11 h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-brand-dark">
                      <Icon name={item.icon} size={22} />
                    </div>
                    <div>
                      <div className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 mb-2">{item.stat}</div>
                      <p className="text-neutral-700 mb-2">{item.desc}</p>
                      <p className="text-xs text-neutral-400">{lang === "es" ? "Fuente" : "Source"}: {item.source}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeader badge={t.industriesBadge} title={t.industriesTitle} description={t.industriesDesc} />
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {data.industries.map((item, i) => (
                <Reveal key={item.name} delay={i * 40}>
                  <div className="group p-5 rounded-2xl border text-center transition-all bg-white border-neutral-200 hover:border-brand hover:-translate-y-1 hover:shadow-lg">
                    <div className="mx-auto mb-3 w-11 h-11 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700 group-hover:bg-gradient-brand group-hover:text-neutral-900 transition-colors">
                      <Icon name={item.icon} size={20} />
                    </div>
                    <span className="text-sm font-medium text-neutral-900">{item.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-neutral-500">{t.industriesFoot}</p>
          </div>
        </section>

        {/* Free review */}
        <AuditSection data={data.audit} ctaLink={t.contact} />

        {/* FAQ */}
        <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <SectionHeader badge={t.faqBadge} title={t.faqTitle} />
            </Reveal>
            <div className="space-y-3">
              {data.faq.map((item, i) => (
                <Reveal key={item.q} delay={Math.min(i, 6) * 50}>
                  <FAQItem question={item.q} answer={item.a} defaultOpen={i === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Hablemos */}
        <TalkSection data={data.talk} contactLink={t.contact} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
