import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import AiAnswerDemo from "@/components/motion/AiAnswerDemo";
import { aiDemo } from "@/lib/ai-demo";

interface HeroSectionProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  proof?: string[];
  ctaLink?: string;
  ctaSecondaryLink?: string;
  lang?: "es" | "en";
}

const panelCopy = {
  es: {
    schema: "Datos estructurados",
    schemaState: "schema.org válido",
    readable: "Legible para",
    engines: ["Google", "Apple Maps", "Bing", "ChatGPT", "Gemini", "Perplexity"],
    caption: "Ejemplo ilustrativo de cómo un asistente cita a un negocio bien configurado.",
  },
  en: {
    schema: "Structured data",
    schemaState: "valid schema.org",
    readable: "Readable by",
    engines: ["Google", "Apple Maps", "Bing", "ChatGPT", "Gemini", "Perplexity"],
    caption: "Illustrative example of how an assistant cites a well-configured business.",
  },
};

export default function HeroSection({
  badge,
  title,
  titleHighlight,
  description,
  cta,
  ctaSecondary,
  proof = [],
  ctaLink = "/contacto",
  ctaSecondaryLink = "#portafolio",
  lang = "es",
}: HeroSectionProps) {
  const t = panelCopy[lang];

  return (
    <section className="relative flex items-center px-4 sm:px-6 pt-32 pb-20 lg:min-h-[92vh] lg:pt-28 overflow-hidden bg-neutral-950">
      {/* Background: fine grid and two restrained glows */}
      <div className="absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[640px] w-[640px] rounded-full bg-brand/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-52 left-[-10%] h-[520px] w-[520px] rounded-full bg-brand-2/[0.07] blur-[130px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
        <div className="lg:col-span-7 text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-7 bg-white/5 border border-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="text-[13px] font-medium text-neutral-300">{badge}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight text-white text-balance">
              {title} <span className="text-gradient">{titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 text-neutral-400 leading-relaxed">{description}</p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href={ctaLink}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all bg-brand text-neutral-900 hover:shadow-[0_0_40px_rgba(198,241,53,0.35)]"
              >
                {cta}
                <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={ctaSecondaryLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all border border-white/15 text-white hover:bg-white/5 hover:border-white/30"
              >
                {ctaSecondary}
              </a>
            </div>
          </Reveal>

          {proof.length > 0 && (
            <Reveal delay={320}>
              <ul className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-neutral-400">
                {proof.map((item) => (
                  <li key={item} className="inline-flex items-center gap-2">
                    <Icon name="checkCircle" size={16} className="text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Product visual: an assistant answer citing the business */}
        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="hidden sm:flex absolute -top-9 right-4 lg:-right-5 z-10 items-center gap-2.5 rounded-xl border border-white/10 bg-neutral-900 px-3.5 py-2.5 shadow-2xl">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <Icon name="code" size={14} />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] text-neutral-500">{t.schema}</span>
                <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                  {t.schemaState}
                </span>
              </span>
            </div>

            <AiAnswerDemo {...aiDemo[lang]} />

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-neutral-500">{t.readable}</p>
              <ul className="grid grid-cols-3 gap-x-3 gap-y-1.5 text-[13px] font-medium text-neutral-300">
                {t.engines.map((e) => (
                  <li key={e} className="inline-flex items-center gap-1.5">
                    <Icon name="check" size={12} className="text-brand" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-3 text-center text-[11px] text-neutral-600 lg:text-left">{t.caption}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
