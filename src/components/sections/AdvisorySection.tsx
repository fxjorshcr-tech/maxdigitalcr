import { Reveal, Spotlight } from "@/components/motion";
import { Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface AdvisorySectionProps {
  data: HomeData["advisory"];
}

/** 1. Asesoría empresarial: escuchamos, recomendamos, plan cerrado. */
export default function AdvisorySection({ data }: AdvisorySectionProps) {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -right-40 top-10 w-[520px] h-[520px] rounded-full bg-[#3ECF8E]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="text-sm uppercase tracking-widest mb-6 text-[#2eb67d] font-bold">{data.badge}</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 mb-6">
                {data.title}
                <br />
                <span className="text-neutral-400">{data.titleHighlight}</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">{data.description}</p>
            </Reveal>

            <Reveal delay={200}>
              <figure className="mt-10 rounded-2xl bg-neutral-950 text-white p-6 sm:p-8 relative overflow-hidden gradient-border">
                <Icon name="quote" size={40} className="absolute -top-2 -left-1 text-[#3ECF8E]/20" />
                <blockquote className="relative text-lg leading-relaxed">{data.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-[#3ECF8E] font-medium">{data.quoteBy}</figcaption>
              </figure>
            </Reveal>
          </div>

          <ol className="lg:col-span-7 space-y-5">
            {data.steps.map((step, i) => (
              <Reveal key={step.title} as="li" delay={i * 120}>
                <Spotlight className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8 transition-all hover:border-[#3ECF8E] hover:shadow-xl hover:-translate-y-0.5">
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-[#2eb67d] group-hover:bg-[#3ECF8E] group-hover:text-neutral-900 group-hover:border-[#3ECF8E] transition-colors">
                        <Icon name={step.icon} size={24} />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </Spotlight>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
