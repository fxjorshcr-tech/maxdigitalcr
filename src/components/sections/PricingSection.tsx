import Link from "next/link";
import { SectionHeader, PricingCard, CheckIcon, Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface PricingSectionProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  plans: HomeData["pricing"];
  notes: HomeData["pricingNotes"];
  pricesUpdated: string;
  customProjectTitle: string;
  customProjectDesc: string;
  customProjectCta: string;
  ctaLink?: string;
  lang?: "es" | "en";
}

export default function PricingSection({
  badge,
  title,
  titleHighlight,
  description,
  plans,
  notes,
  pricesUpdated,
  customProjectTitle,
  customProjectDesc,
  customProjectCta,
  ctaLink = "/contacto",
  lang = "es",
}: PricingSectionProps) {
  return (
    <section id="planes" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader badge={badge} title={title} titleHighlight={titleHighlight} description={description} dark />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-stretch">
          <PricingCard {...plans.landing} ctaLink={ctaLink} lang={lang} />
          <PricingCard {...plans.catalog} ctaLink={ctaLink} lang={lang} />
          <PricingCard {...plans.ecommerce} ctaLink={ctaLink} lang={lang} />
        </div>

        <p className="mt-6 text-center text-xs text-neutral-500">{pricesUpdated}</p>

        {/* Pricing transparency */}
        <div className="mt-12 rounded-2xl border border-neutral-700 bg-neutral-800/60 p-6 sm:p-8">
          <h3 className="text-xl font-bold text-white mb-6">{notes.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400 mb-4">{notes.factorsTitle}</p>
              <ul className="space-y-3">
                {notes.factors.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Icon name="arrowUpRight" size={16} className="mt-0.5 shrink-0 text-[#3ECF8E]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-neutral-400 mb-4">{notes.notIncludedTitle}</p>
              <ul className="space-y-3">
                {notes.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Icon name="creditCard" size={16} className="mt-0.5 shrink-0 text-neutral-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 p-4">
            <CheckIcon />
            <p className="text-sm text-neutral-200">{notes.guarantee}</p>
          </div>
        </div>

        {/* Custom projects */}
        <div className="mt-8 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{customProjectTitle}</h3>
              <p className="text-neutral-400">{customProjectDesc}</p>
            </div>
            <Link
              href={ctaLink}
              className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-white text-neutral-900 hover:bg-neutral-100"
            >
              {customProjectCta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
