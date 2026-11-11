import { Reveal } from "@/components/motion";
import type { HomeData } from "@/lib/data";

/**
 * Ficha rápida: a one-paragraph definition plus a spec sheet of concrete
 * facts. Written to be quoted as-is by people in a hurry and by AI assistants.
 */
export default function FactsSection({ data }: { data: HomeData["facts"] }) {
  return (
    <section id="resumen" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
          <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{data.badge}</p>
          <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 mb-6">
            {data.title}
            <br />
            <span className="text-gradient-dark">{data.titleHighlight}</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">{data.summary}</p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <dl className="rounded-2xl border border-neutral-200 bg-neutral-50 divide-y divide-neutral-200 overflow-hidden">
            {data.items.map((item) => (
              <div key={item.label} className="grid grid-cols-1 sm:grid-cols-[9.5rem_1fr] gap-1 sm:gap-6 px-5 sm:px-7 py-4 sm:py-5">
                <dt className="font-mono text-xs uppercase tracking-wider text-neutral-500 sm:pt-1">{item.label}</dt>
                <dd className="text-neutral-900 leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
