import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  cta: string;
  ctaLink?: string;
}

export default function CTASection({
  title,
  description,
  cta,
  ctaLink = "/contacto",
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          {title}
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-neutral-400">
          {description}
        </p>
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
