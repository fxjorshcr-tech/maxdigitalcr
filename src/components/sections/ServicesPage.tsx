import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferSection from "./OfferSection";
import SupportSection from "./SupportSection";
import VisibilitySection from "./VisibilitySection";
import CTASection from "./CTASection";
import { SectionHeader, FeatureCard, FAQItem, CheckIcon, Icon } from "@/components/ui";
import { getHomeData } from "@/lib/data";

const copy = {
  es: {
    contact: "/contacto",
    badge: "Servicios",
    h1: "Páginas web que",
    h1b: "traen clientes.",
    intro: "De una landing page en días a una tienda en línea completa. Precio cerrado antes de empezar y presencia configurada para que te encuentren.",
    diffBadge: "Cómo trabajamos",
    diffTitle: "Lo que podés esperar de nosotros.",
    previewBadge: "Vista previa en tiempo real",
    previewTitle: "Ves cada cambio",
    previewHighlight: "antes de que se publique.",
    previewP1: "Con cada cambio recibís un enlace privado que abrís en tu celular.",
    previewP2: "Menos malentendidos, más velocidad, y el resultado que pediste.",
    previewItems: ["Enlace privado con cada avance", "Funciona en celular, tablet o computadora", "Comentás por WhatsApp", "Ajustamos el mismo día"],
    previewSteps: [
      { n: "1", t: "Hacemos un cambio", d: "Nuevo diseño del encabezado" },
      { n: "2", t: "Abrís el enlace en tu celular", d: "Ves el cambio al instante" },
      { n: "3", t: "Comentás por WhatsApp", d: "“Me gusta, pero cambiá el color”" },
    ],
    previewDone: { t: "Listo en minutos", d: "Sin esperas ni correos eternos" },
    maintBadge: "Después del lanzamiento",
    maintTitle: "Mantenimiento y soporte",
    maintDesc: "Siempre hay alguien que responde. El plan mensual, solo si tu sitio lo necesita.",
    staticTitle: "Landing y catálogo",
    staticSub: "Sin mantenimiento obligatorio",
    staticDesc: "Una vez publicadas funcionan sin intervención. Si querés cambios después de los 30 días de soporte, se cotizan por separado o con un plan mensual opcional.",
    staticRows: [["Soporte incluido", "30 días"], ["Cambios menores después", "Se cotizan aparte"], ["Plan mensual opcional", "Se cotiza según el sitio"]],
    storeTitle: "Tienda en línea",
    storeSub: "Mantenimiento mensual incluido",
    storeDesc: "Una tienda maneja pagos e inventario y necesita actualizaciones de seguridad, respaldos y monitoreo del procesador de pagos.",
    storeRows: ["Actualizaciones de seguridad", "Respaldos automáticos", "Soporte prioritario", "Cambios menores incluidos"],
    costsBadge: "Costos adicionales",
    costsTitle: "Lo que pagás aparte, directo al proveedor",
    costsDesc: "Estos costos son externos, van a tu nombre y no pasan por nosotros. Te ayudamos a configurarlos.",
    domain: { title: "Dominio", sub: "tunegocio.com o .cr", pre: "aproximadamente", price: "$12 a $15", per: "por año", desc: "Es la dirección de tu página. Se registra a tu nombre y es tuyo mientras lo renovés." },
    email: { title: "Correo profesional", sub: "info@tunegocio.com", pre: "desde", price: "$6", per: "por cuenta al mes", desc: "Correo con tu dominio, con Google Workspace o una alternativa más económica según tu presupuesto." },
    hosting: { title: "Hosting", sub: "después del primer año", pre: "aproximadamente", price: "$5 a $10", per: "al mes", desc: "El primer año está incluido en todos los planes. Después se paga directo a Vercel o al proveedor que elijamos." },
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Antes de contratar",
    cta: { title: "¿Listo para empezar?", description: "Contanos qué hace tu negocio y te enviamos una cotización cerrada en menos de 24 horas.", cta: "Cotizar mi página" },
  },
  en: {
    contact: "/en/contacto",
    badge: "Services",
    h1: "Websites that",
    h1b: "bring in customers.",
    intro: "From a landing page in days to a complete online store. Fixed price before we start and presence configured so you are found.",
    diffBadge: "How we work",
    diffTitle: "What you can expect from us.",
    previewBadge: "Real-time preview",
    previewTitle: "See every change",
    previewHighlight: "before it goes live.",
    previewP1: "With every change you get a private link you open on your phone.",
    previewP2: "Fewer misunderstandings, more speed, and the result you asked for.",
    previewItems: ["Private link with every step", "Works on phone, tablet or computer", "You comment on WhatsApp", "We adjust the same day"],
    previewSteps: [
      { n: "1", t: "We make a change", d: "New header design" },
      { n: "2", t: "You open the link on your phone", d: "You see the change instantly" },
      { n: "3", t: "You comment on WhatsApp", d: "“I like it, but change the color”" },
    ],
    previewDone: { t: "Done in minutes", d: "No waiting, no endless emails" },
    maintBadge: "After launch",
    maintTitle: "Maintenance and support",
    maintDesc: "There is always someone who answers. The monthly plan, only if your site needs it.",
    staticTitle: "Landing and catalog",
    staticSub: "No mandatory maintenance",
    staticDesc: "Once published they run without intervention. If you want changes after the 30 days of support, they are quoted separately or through an optional monthly plan.",
    staticRows: [["Support included", "30 days"], ["Minor changes afterwards", "Quoted separately"], ["Optional monthly plan", "Quoted per site"]],
    storeTitle: "Online store",
    storeSub: "Monthly maintenance included",
    storeDesc: "A store handles payments and inventory and needs security updates, backups and payment processor monitoring.",
    storeRows: ["Security updates", "Automatic backups", "Priority support", "Minor changes included"],
    costsBadge: "Additional costs",
    costsTitle: "What you pay separately, directly to the provider",
    costsDesc: "These costs are external, in your name and do not go through us. We help you set them up.",
    domain: { title: "Domain", sub: "yourbusiness.com or .cr", pre: "approximately", price: "$12 to $15", per: "per year", desc: "It is your site's address. Registered in your name and yours as long as you renew it." },
    email: { title: "Business email", sub: "info@yourbusiness.com", pre: "from", price: "$6", per: "per account per month", desc: "Email on your domain, with Google Workspace or a cheaper alternative depending on your budget." },
    hosting: { title: "Hosting", sub: "after the first year", pre: "approximately", price: "$5 to $10", per: "per month", desc: "The first year is included in every plan. After that it is paid directly to Vercel or the provider we choose." },
    faqBadge: "Frequently asked questions",
    faqTitle: "Before you hire",
    cta: { title: "Ready to start?", description: "Tell us what your business does and we will send a fixed quote within 24 hours.", cta: "Get a quote" },
  },
};

interface CostInfo { title: string; sub: string; pre: string; price: string; per: string; desc: string }

function CostCard({ c, icon }: { c: CostInfo; icon: "globe" | "mail" | "monitor" }) {
  return (
    <div className="rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center text-white">
          <Icon name={icon} size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900">{c.title}</h3>
          <p className="text-neutral-500">{c.sub}</p>
        </div>
      </div>
      <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
        <span className="text-sm text-neutral-500">{c.pre}</span>
        <div className="text-3xl font-bold text-neutral-900">{c.price}</div>
        <span className="text-sm text-neutral-500">{c.per}</span>
      </div>
      <p className="text-neutral-600 text-sm">{c.desc}</p>
    </div>
  );
}

export default function ServicesPage({ lang }: { lang: "es" | "en" }) {
  const data = getHomeData(lang);
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
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{t.intro}</p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.diffBadge} title={t.diffTitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.differences.map((item) => (
                <FeatureCard key={item.title} {...item} dark={false} />
              ))}
            </div>
          </div>
        </section>

        <OfferSection data={data.offer} ctaLink={t.contact} lang={lang} />

        <VisibilitySection data={data.visibility} lang={lang} />

        <SupportSection data={data.support} />

        {/* Preview system */}
        <section className="py-24 px-4 sm:px-6 bg-neutral-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{t.previewBadge}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  {t.previewTitle}
                  <br />
                  <span className="text-gradient-dark">{t.previewHighlight}</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">{t.previewP1}</p>
                <p className="text-lg text-neutral-600 mb-8">{t.previewP2}</p>
                <ul className="space-y-4">
                  {t.previewItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-neutral-600" />
                  <div className="w-3 h-3 rounded-full bg-brand" />
                  <span className="ml-4 text-sm font-mono text-neutral-500">preview.tunegocio.com</span>
                </div>
                <div className="space-y-4">
                  {t.previewSteps.map((s) => (
                    <div key={s.n} className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                      <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center text-brand font-bold">{s.n}</div>
                      <div>
                        <p className="text-white font-medium">{s.t}</p>
                        <p className="text-neutral-500 text-sm">{s.d}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-4 p-4 bg-brand/10 border border-brand/50 rounded-lg">
                    <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-neutral-900">
                      <Icon name="check" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{t.previewDone.t}</p>
                      <p className="text-neutral-400 text-sm">{t.previewDone.d}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance */}
        <section className="py-24 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.maintBadge} title={t.maintTitle} description={t.maintDesc} dark />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-neutral-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-700/60 rounded-xl flex items-center justify-center text-brand">
                    <Icon name="layers" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.staticTitle}</h3>
                    <p className="text-neutral-500">{t.staticSub}</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">{t.staticDesc}</p>
                <div className="space-y-3">
                  {t.staticRows.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                      <span className="text-neutral-300">{k}</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl p-6 sm:p-8 bg-neutral-800 border border-brand/60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand/15 rounded-xl flex items-center justify-center text-brand">
                    <Icon name="cart" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{t.storeTitle}</h3>
                    <p className="text-neutral-500">{t.storeSub}</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">{t.storeDesc}</p>
                <div className="space-y-3">
                  {t.storeRows.map((k) => (
                    <div key={k} className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                      <span className="text-neutral-300">{k}</span>
                      <Icon name="check" size={18} className="text-brand" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional costs */}
        <section className="py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeader badge={t.costsBadge} title={t.costsTitle} description={t.costsDesc} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <CostCard c={t.domain} icon="globe" />
              <CostCard c={t.email} icon="mail" />
              <CostCard c={t.hosting} icon="monitor" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 sm:px-6 bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <SectionHeader badge={t.faqBadge} title={t.faqTitle} />
            <div className="space-y-4">
              {data.faq.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
            <p className="mt-8 text-center text-neutral-600">
              <Link href={t.contact} className="font-medium text-brand-dark hover:underline">
                {lang === "es" ? "¿Otra pregunta? Escribinos." : "Another question? Write to us."}
              </Link>
            </p>
          </div>
        </section>

        <CTASection {...t.cta} ctaLink={t.contact} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
