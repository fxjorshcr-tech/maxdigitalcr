import Link from "next/link";
import { Reveal, Spotlight } from "@/components/motion";
import { Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface OfferSectionProps {
  data: HomeData["offer"];
  ctaLink?: string;
  lang?: "es" | "en";
}

/** 4. Tecnología, tiempo y precio accesible, sin tablas de precios. */
export default function OfferSection({ data, ctaLink = "/contacto", lang = "es" }: OfferSectionProps) {
  return (
    <section id="planes" className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-neutral-50 overflow-hidden">
      <div className="pointer-events-none absolute -left-40 bottom-0 w-[600px] h-[600px] rounded-full bg-brand-2/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{data.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 mb-6">
              {data.title}
              <br />
              <span className="text-gradient-dark">{data.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{data.description}</p>
          </div>
        </Reveal>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {data.pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 100}>
              <Spotlight className="h-full rounded-3xl bg-neutral-950 text-white p-7 sm:p-8 gradient-border">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs uppercase tracking-widest text-neutral-400">{p.label}</span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand">
                    <Icon name={p.icon} size={20} />
                  </div>
                </div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{p.value}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        {/* Price band */}
        <Reveal delay={150}>
          <div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8 shadow-sm">
            <div className="md:w-1/3">
              <p className="text-sm text-neutral-500 mb-1">{lang === "es" ? "desde" : "from"}</p>
              <p className="text-5xl sm:text-6xl font-bold tracking-tight text-gradient-dark">{data.from}</p>
            </div>
            <p className="md:flex-1 text-neutral-600 leading-relaxed">{data.fromNote}</p>
            <Link
              href={ctaLink}
              className="group shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all bg-gradient-brand text-neutral-900 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >
              {data.cta}
              <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Types of site */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {data.types.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:border-brand hover:-translate-y-0.5">
                <div className="w-9 h-9 mb-3 rounded-lg bg-neutral-100 flex items-center justify-center text-brand-dark">
                  <Icon name={t.icon} size={18} />
                </div>
                <p className="font-semibold text-neutral-900 mb-1">{t.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
