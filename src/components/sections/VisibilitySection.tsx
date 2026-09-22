import { Reveal, Spotlight } from "@/components/motion";
import { Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface VisibilitySectionProps {
  data: HomeData["visibility"];
  lang?: "es" | "en";
}

/**
 * 3. La nueva forma de aparecer: Google, Apple, Bing y respuestas de IA.
 * Left: a stylized "where you show up" panel. Right: the six items.
 */
export default function VisibilitySection({ data, lang = "es" }: VisibilitySectionProps) {
  const mock =
    lang === "es"
      ? {
          query: "mejor hotel boutique en La Fortuna",
          ai: "Según los datos de Google, Apple y Bing, una opción muy bien valorada es",
          biz: "Tu negocio",
          maps: "Abierto ahora · 4.9 · La Fortuna",
          siri: "Siri encontró tu negocio en Apple Maps",
          bing: "Copilot cita tu sitio como fuente",
        }
      : {
          query: "best boutique hotel in La Fortuna",
          ai: "Based on Google, Apple and Bing data, a highly rated option is",
          biz: "Your business",
          maps: "Open now · 4.9 · La Fortuna",
          siri: "Siri found your business on Apple Maps",
          bing: "Copilot cites your site as a source",
        };

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-neutral-950 text-white overflow-hidden grain">
      <div className="pointer-events-none absolute -left-40 top-0 w-[700px] h-[500px] rounded-full bg-brand/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 w-[700px] h-[500px] rounded-full bg-brand-2/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand font-bold">{data.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight mb-6">
              {data.title}
              <br />
              <span className="text-gradient">{data.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-400 leading-relaxed">{data.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Illustration: an AI answer citing the business, with map/siri/copilot chips */}
          <Reveal className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 gradient-border">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
                  <Icon name="sparkles" size={14} className="text-brand" />
                  <span className="font-mono">{mock.query}</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {mock.ai}{" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand/15 border border-brand/40 px-1.5 py-0.5 text-brand font-semibold">
                    {mock.biz}
                    <Icon name="externalLink" size={12} />
                  </span>
                  .
                </p>
                <div className="mt-5 rounded-xl bg-neutral-900 border border-white/10 p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand/15 flex items-center justify-center text-brand">
                    <Icon name="mapPin" size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold truncate">{mock.biz}</p>
                    <p className="text-xs text-neutral-400 truncate">{mock.maps}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-brand">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon key={i} name="star" size={12} className="fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="float-slow absolute -right-3 -top-6 sm:-right-8 rounded-full border border-white/10 bg-neutral-900/90 backdrop-blur px-4 py-2 text-xs text-neutral-300 shadow-xl flex items-center gap-2">
                <Icon name="compass" size={14} className="text-brand-2" />
                {mock.siri}
              </div>
              <div className="float-slow [animation-delay:-3s] absolute -left-3 -bottom-6 sm:-left-8 rounded-full border border-white/10 bg-neutral-900/90 backdrop-blur px-4 py-2 text-xs text-neutral-300 shadow-xl flex items-center gap-2">
                <Icon name="globe" size={14} className="text-brand-2" />
                {mock.bing}
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <Spotlight className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all hover:border-brand/50 hover:bg-white/[0.06]">
                  <div className="w-10 h-10 mb-4 rounded-lg bg-brand/15 flex items-center justify-center text-brand">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h3 className="font-bold mb-1.5">{item.title}</h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <p className="mt-12 text-center text-sm text-neutral-500 flex items-center justify-center gap-2">
            <Icon name="shield" size={16} className="text-brand" />
            {data.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
