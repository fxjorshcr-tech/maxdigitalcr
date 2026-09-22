import { Reveal, Spotlight } from "@/components/motion";
import AiAnswerDemo from "@/components/motion/AiAnswerDemo";
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
  const demo =
    lang === "es"
      ? {
          scenarios: [
            { query: "mejor hotel boutique en La Fortuna", answer: "Según Google, Apple Maps y Bing, una opción muy bien valorada cerca del volcán es", business: "Tu hotel", meta: "Abierto ahora · 4.9 · La Fortuna" },
            { query: "tour de cataratas con guía certificado", answer: "Un operador con reseñas recientes y guía naturalista certificado es", business: "Tu tour", meta: "Desde $55 · 5.0 · La Fortuna" },
            { query: "dónde comer casado en La Fortuna", answer: "Entre los lugares mejor calificados por locales aparece", business: "Tu restaurante", meta: "Abierto hasta las 21:00 · 4.8" },
          ],
          sources: [
            { icon: "mapPin" as const, label: "Google Business" },
            { icon: "compass" as const, label: "Apple Maps" },
            { icon: "globe" as const, label: "Bing Places" },
            { icon: "fileText" as const, label: "tu-sitio.com" },
          ],
          sourcesLabel: "Fuentes",
        }
      : {
          scenarios: [
            { query: "best boutique hotel in La Fortuna", answer: "Based on Google, Apple Maps and Bing, a highly rated option near the volcano is", business: "Your hotel", meta: "Open now · 4.9 · La Fortuna" },
            { query: "waterfall tour with certified guide", answer: "An operator with recent reviews and a certified naturalist guide is", business: "Your tour", meta: "From $55 · 5.0 · La Fortuna" },
            { query: "where to eat casado in La Fortuna", answer: "Among the places locals rate highest is", business: "Your restaurant", meta: "Open until 9 pm · 4.8" },
          ],
          sources: [
            { icon: "mapPin" as const, label: "Google Business" },
            { icon: "compass" as const, label: "Apple Maps" },
            { icon: "globe" as const, label: "Bing Places" },
            { icon: "fileText" as const, label: "your-site.com" },
          ],
          sourcesLabel: "Sources",
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
          {/* Live assistant demo */}
          <Reveal className="lg:col-span-5">
            <AiAnswerDemo scenarios={demo.scenarios} sources={demo.sources} sourcesLabel={demo.sourcesLabel} />
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
