import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";

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
}

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
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden bg-neutral-950 grain">
      {/* Animated aurora background */}
      <div className="aurora">
        <span className="a" />
        <span className="b" />
        <span className="c" />
      </div>
      <div className="absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-white/5 border border-white/10 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#3ECF8E] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3ECF8E]" />
            </span>
            <span className="text-sm font-medium text-neutral-300">{badge}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white">
            {title}
            <br />
            <span className="text-shimmer">{titleHighlight}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400 leading-relaxed">{description}</p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d] hover:shadow-[0_0_40px_rgba(62,207,142,0.45)]"
            >
              {cta}
              <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={ctaSecondaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all border border-white/15 text-white bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/30"
            >
              {ctaSecondary}
            </a>
          </div>
        </Reveal>

        {proof.length > 0 && (
          <Reveal delay={450}>
            <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
              {proof.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <Icon name="checkCircle" size={16} className="text-[#3ECF8E]" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-neutral-950" />
    </section>
  );
}
