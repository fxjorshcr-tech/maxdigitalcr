import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";

interface HeroSectionProps {
  badge: string;
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  ctaLink?: string;
  ctaSecondaryLink?: string;
}

export default function HeroSection({
  badge,
  title,
  titleHighlight,
  titleEnd,
  description,
  cta,
  ctaSecondary,
  ctaLink = "/contacto",
  ctaSecondaryLink = "#planes",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-neutral-900">
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-neutral-800 border border-neutral-700">
          <span className="w-2 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-neutral-400">{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
          {title} <span className="text-[#3ECF8E]">{titleHighlight}</span> {titleEnd}
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
          >
            {cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={ctaSecondaryLink}
            className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
