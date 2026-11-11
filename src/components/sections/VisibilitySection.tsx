import { Reveal, Spotlight } from "@/components/motion";
import SchemaWindow from "./SchemaWindow";
import { Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface VisibilitySectionProps {
  data: HomeData["visibility"];
  lang?: "es" | "en";
}

/**
 * 3. La nueva forma de aparecer: Google, Apple, Bing y respuestas de IA.
 * Left: the structured data assistants read. Right: the six items.
 */
export default function VisibilitySection({ data, lang = "es" }: VisibilitySectionProps) {
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
          {/* What machines read */}
          <Reveal className="lg:col-span-5">
            <SchemaWindow lang={lang} />
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
