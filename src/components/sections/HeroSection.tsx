import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import Icon from "@/components/ui/Icon";

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
    <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden bg-neutral-900">
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 bg-neutral-800 border border-neutral-700">
          <Icon name="mapPin" size={14} className="text-[#3ECF8E]" />
          <span className="text-sm font-medium text-neutral-300">{badge}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
          {title}
          <br />
          <span className="text-[#3ECF8E]">{titleHighlight}</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl mx-auto text-neutral-400 leading-relaxed">
          {description}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ctaLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
          >
            {cta}
            <Icon name="arrowRight" size={16} />
          </Link>
          <a
            href={ctaSecondaryLink}
            className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full text-sm font-medium transition-all border-neutral-700 text-white hover:border-[#3ECF8E] hover:text-[#3ECF8E]"
          >
            {ctaSecondary}
          </a>
        </div>

        {proof.length > 0 && (
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-400">
            {proof.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Icon name="checkCircle" size={16} className="text-[#3ECF8E]" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
