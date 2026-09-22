import { Reveal, Spotlight } from "@/components/motion";
import { Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface SupportSectionProps {
  data: HomeData["support"];
}

/** 5. Acompañamiento y asesoría técnica. Bento layout. */
export default function SupportSection({ data }: SupportSectionProps) {
  const [first, ...rest] = data.items;

  return (
    <section className="relative py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -bottom-32 w-[560px] h-[560px] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{data.badge}</p>
            <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-tight text-neutral-900 mb-6">
              {data.title}
              <br />
              <span className="text-gradient-dark">{data.titleHighlight}</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">{data.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Reveal className="md:col-span-2 md:row-span-2">
            <Spotlight className="h-full rounded-3xl bg-neutral-950 text-white p-8 sm:p-10 flex flex-col justify-between gradient-border">
              <div>
                <div className="w-12 h-12 mb-6 rounded-xl bg-brand/15 flex items-center justify-center text-brand">
                  <Icon name={first.icon} size={24} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{first.title}</h3>
                <p className="text-neutral-400 leading-relaxed max-w-md">{first.desc}</p>
              </div>
              <div className="mt-10 flex items-center gap-3 text-sm text-neutral-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
                </span>
                WhatsApp
              </div>
            </Spotlight>
          </Reveal>

          {rest.map((item, i) => (
            <Reveal key={item.title} delay={(i + 1) * 80}>
              <Spotlight className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-brand hover:bg-white hover:shadow-lg">
                <div className="w-10 h-10 mb-4 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-brand-dark">
                  <Icon name={item.icon} size={20} />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
