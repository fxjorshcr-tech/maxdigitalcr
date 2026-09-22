import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import { SectionHeader, FeatureCard, CheckIcon, Icon, type IconName } from "@/components/ui";
import { portfolioProjects } from "@/lib/portfolio";

const copy = {
  es: {
    contact: "/contacto",
    services: "/servicios",
    badge: "Quiénes somos",
    h1: "MaxDigitalCR.",
    h1b: "Desarrollo web desde La Fortuna.",
    intro:
      "MaxDigitalCR es una agencia de diseño y desarrollo web en La Fortuna de San Carlos, Costa Rica. Construimos landing pages, sitios catálogo y tiendas en línea para negocios de todo el país, con entrega en días y precio cerrado.",
    storyBadge: "Por qué existimos",
    storyTitle: "Por qué hacemos esto.",
    storyP1: "Los negocios de Costa Rica merecen sitios al nivel de los grandes, sin los precios ni los plazos de una agencia grande.",
    storyP2: "Hoteles, tours, restaurantes y profesionales pierden clientes cada día frente a competidores que sí aparecen cuando alguien busca.",
    storyP3: "Nuestro trabajo es que aparezcas, que te entiendan y que te contacten. Con la tecnología de los sitios de alto tráfico, en días, y con un precio que conocés antes de empezar.",
    pillars: [
      { icon: "clock", t: "Velocidad", d: "Entregamos en días, no en meses" },
      { icon: "wallet", t: "Precio cerrado", d: "Sabés cuánto vas a pagar antes de empezar" },
      { icon: "target", t: "Resultados", d: "Sitios que generan contactos, no solo visitas" },
    ] as { icon: IconName; t: string; d: string }[],
    valuesBadge: "Nuestros valores",
    valuesTitle: "En qué creemos.",
    values: [
      { icon: "target", title: "Resultados sobre estética", desc: "Diseñamos para que el visitante llame, escriba o reserve." },
      { icon: "messageCircle", title: "Comunicación directa", desc: "Hablás con la persona que construye tu sitio. Sin intermediarios ni tickets de soporte." },
      { icon: "zap", title: "Rápido sin recortar", desc: "Buenas herramientas y un proceso claro. Por eso entregamos rápido." },
      { icon: "handshake", title: "Honestidad", desc: "Si hay una opción más simple o más barata que te sirve, te la recomendamos." },
      { icon: "refresh", title: "Aprendizaje constante", desc: "La forma en que la gente busca cambia cada año. Nos mantenemos al día para que tu sitio también lo esté." },
      { icon: "mapPin", title: "Impacto local", desc: "Cuando los negocios de Costa Rica crecen, crece la comunidad." },
    ] as { icon: IconName; title: string; desc: string }[],
    doBadge: "Qué hacemos",
    doTitle: "Resolvemos un problema concreto.",
    doDesc: "Que tu negocio aparezca donde tus clientes buscan y que, cuando lleguen, sepan qué hacer.",
    doList: ["Landing pages que convierten visitantes en contactos", "Sitios catálogo para hoteles, tours, restaurantes y servicios", "Tiendas en línea con pagos integrados", "Aplicaciones web y sistemas de reservas a la medida", "SEO técnico y datos estructurados para Google y asistentes de IA", "Configuración de Google Business, Search Console, Bing y Apple", "Soporte y mantenimiento después del lanzamiento"],
    commitTitle: "Nuestro compromiso",
    commitList: ["Precio cerrado antes de empezar", "Entrega en días, no meses", "Diseño a la medida, sin plantillas genéricas", "Dominio, cuentas y código a tu nombre", "Respuesta en menos de 24 horas", "Solo te ofrecemos lo que necesitás"],
    numbersBadge: "En números",
    numbersTitle: "Lo que podemos mostrar.",
    numbers: [
      { n: String(portfolioProjects.length), l: "sitios en producción" },
      { n: "1 a 3", l: "días para una landing page" },
      { n: "24 h", l: "tiempo de respuesta" },
      { n: "2", l: "idiomas: español e inglés" },
    ],
    workBadge: "Nuestro trabajo",
    locBadge: "Dónde estamos",
    locTitle: "La Fortuna de San Carlos.",
    locHighlight: "Clientes en todo el país.",
    locP1: "Trabajamos desde La Fortuna, Alajuela, y atendemos negocios de todo Costa Rica de forma remota: por WhatsApp, videollamada y enlaces de vista previa.",
    locP2: "Conocemos el mercado turístico de la zona norte y Guanacaste, cómo compra el cliente costarricense y qué esperan los visitantes extranjeros. Eso se nota en los sitios.",
    locCards: [
      { icon: "mapPin", l: "La Fortuna, Alajuela" },
      { icon: "globe", l: "Todo Costa Rica" },
      { icon: "monitor", l: "Trabajo remoto" },
      { icon: "languages", l: "Español e inglés" },
    ] as { icon: IconName; l: string }[],
    ctaTitle: "¿Trabajamos juntos?",
    ctaDesc: "Contanos qué hace tu negocio y te decimos cómo podemos ayudar.",
    ctaPrimary: "Contactanos",
    ctaSecondary: "Ver servicios",
  },
  en: {
    contact: "/en/contacto",
    services: "/en/servicios",
    badge: "About us",
    h1: "MaxDigitalCR.",
    h1b: "Web development from La Fortuna.",
    intro:
      "MaxDigitalCR is a web design and development agency in La Fortuna de San Carlos, Costa Rica. We build landing pages, catalog sites and online stores for businesses across the country, delivered in days at a fixed price.",
    storyBadge: "Why we exist",
    storyTitle: "Why we do this.",
    storyP1: "Businesses in Costa Rica deserve sites at the level of the big ones, without big-agency prices or timelines.",
    storyP2: "Hotels, tour operators, restaurants and professionals lose customers every day to competitors who do show up when someone searches.",
    storyP3: "Our job is that you show up, get understood and get contacted. With the technology of high-traffic sites, in days, at a price you know before we start.",
    pillars: [
      { icon: "clock", t: "Speed", d: "Delivered in days, not months" },
      { icon: "wallet", t: "Fixed price", d: "You know what you will pay before we start" },
      { icon: "target", t: "Results", d: "Sites that generate inquiries, not just visits" },
    ] as { icon: IconName; t: string; d: string }[],
    valuesBadge: "Our values",
    valuesTitle: "What we believe.",
    values: [
      { icon: "target", title: "Results over looks", desc: "We design so the visitor calls, writes or books." },
      { icon: "messageCircle", title: "Direct communication", desc: "You talk to the person building your site. No middlemen or support tickets." },
      { icon: "zap", title: "Fast without cutting corners", desc: "Good tools and a clear process. That is why we deliver fast." },
      { icon: "handshake", title: "Honesty", desc: "If a simpler or cheaper option works for you, we recommend it." },
      { icon: "refresh", title: "Constant learning", desc: "The way people search changes every year. We stay current so your site does too." },
      { icon: "mapPin", title: "Local impact", desc: "When Costa Rican businesses grow, the community grows." },
    ] as { icon: IconName; title: string; desc: string }[],
    doBadge: "What we do",
    doTitle: "We solve one concrete problem.",
    doDesc: "That your business shows up where your customers search and that, when they arrive, they know what to do.",
    doList: ["Landing pages that turn visitors into inquiries", "Catalog sites for hotels, tours, restaurants and services", "Online stores with integrated payments", "Custom web apps and booking systems", "Technical SEO and structured data for Google and AI assistants", "Google Business, Search Console, Bing and Apple setup", "Support and maintenance after launch"],
    commitTitle: "Our commitment",
    commitList: ["Fixed price before we start", "Delivery in days, not months", "Custom design, no generic templates", "Domain, accounts and code in your name", "Reply within 24 hours", "We only offer what you need"],
    numbersBadge: "In numbers",
    numbersTitle: "What we can show.",
    numbers: [
      { n: String(portfolioProjects.length), l: "sites in production" },
      { n: "1 to 3", l: "days for a landing page" },
      { n: "24 h", l: "response time" },
      { n: "2", l: "languages: Spanish and English" },
    ],
    workBadge: "Our work",
    locBadge: "Where we are",
    locTitle: "La Fortuna de San Carlos.",
    locHighlight: "Clients across the country.",
    locP1: "We work from La Fortuna, Alajuela, and serve businesses across Costa Rica remotely: WhatsApp, video calls and preview links.",
    locP2: "We know the tourism market of the northern zone and Guanacaste, how Costa Rican customers buy and what foreign visitors expect. It shows in the sites.",
    locCards: [
      { icon: "mapPin", l: "La Fortuna, Alajuela" },
      { icon: "globe", l: "All of Costa Rica" },
      { icon: "monitor", l: "Remote work" },
      { icon: "languages", l: "Spanish and English" },
    ] as { icon: IconName; l: string }[],
    ctaTitle: "Shall we work together?",
    ctaDesc: "Tell us what your business does and we will tell you how we can help.",
    ctaPrimary: "Contact us",
    ctaSecondary: "See services",
  },
};

export default function AboutPage({ lang }: { lang: "es" | "en" }) {
  const t = copy[lang];

  return (
    <>
      <Navbar />
      <main className="bg-neutral-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand font-bold">{t.badge}</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              {t.h1}
              <br />
              <span className="text-gradient">{t.h1b}</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">{t.intro}</p>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{t.storyBadge}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">{t.storyTitle}</h2>
              <p className="text-lg text-neutral-600 mb-6">{t.storyP1}</p>
              <p className="text-lg text-neutral-600 mb-6">{t.storyP2}</p>
              <p className="text-lg text-neutral-600">{t.storyP3}</p>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-8 space-y-6">
              {t.pillars.map((p, i) => (
                <div key={p.t}>
                  {i > 0 && <div className="border-t border-neutral-700 mb-6" />}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/15 rounded-xl flex items-center justify-center shrink-0 text-brand">
                      <Icon name={p.icon} size={22} />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">{p.t}</p>
                      <p className="text-sm text-neutral-400">{p.d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.valuesBadge} title={t.valuesTitle} dark />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.values.map((v) => (
                <FeatureCard key={v.title} {...v} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.doBadge} title={t.doTitle} description={t.doDesc} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200">
                <ul className="space-y-4">
                  {t.doList.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-700">
                <h3 className="text-xl font-bold text-white mb-6">{t.commitTitle}</h3>
                <ul className="space-y-4">
                  {t.commitList.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.numbersBadge} title={t.numbersTitle} dark />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.numbers.map((item) => (
                <div key={item.l} className="p-6 rounded-xl bg-neutral-800 border border-neutral-700 text-center">
                  <div className="text-4xl font-bold text-brand mb-2">{item.n}</div>
                  <p className="text-neutral-400">{item.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioSection lang={lang} />

        <section className="py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{t.locBadge}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                {t.locTitle}
                <br />
                <span className="text-gradient-dark">{t.locHighlight}</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-6">{t.locP1}</p>
              <p className="text-lg text-neutral-600">{t.locP2}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {t.locCards.map((c) => (
                <div key={c.l} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                  <div className="mx-auto mb-3 w-11 h-11 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-brand-dark">
                    <Icon name={c.icon} size={22} />
                  </div>
                  <p className="font-medium text-neutral-900">{c.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">{t.ctaTitle}</h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={t.contact} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-brand text-neutral-900 hover:bg-brand-dark">
                {t.ctaPrimary}
                <Icon name="arrowRight" size={16} />
              </Link>
              <Link href={t.services} className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-600 text-white hover:border-brand hover:text-brand">
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
