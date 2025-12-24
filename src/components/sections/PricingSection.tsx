import Link from "next/link";
import { SectionHeader, PricingCard } from "@/components/ui";

interface PricingPlan {
  icon: string;
  title: string;
  time: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  idealFor: string;
  cta: string;
  popular: boolean;
}

interface PricingSectionProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  plans: {
    landing: PricingPlan;
    catalog: PricingPlan;
    ecommerce: PricingPlan;
  };
  customProjectTitle: string;
  customProjectDesc: string;
  customProjectCta: string;
  ctaLink?: string;
}

export default function PricingSection({
  badge,
  title,
  titleHighlight,
  description,
  plans,
  customProjectTitle,
  customProjectDesc,
  customProjectCta,
  ctaLink = "/contacto",
}: PricingSectionProps) {
  return (
    <section id="planes" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge={badge}
          title={title}
          titleHighlight={titleHighlight}
          description={description}
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PricingCard {...plans.landing} ctaLink={ctaLink} />
          <PricingCard {...plans.catalog} ctaLink={ctaLink} />
          <PricingCard {...plans.ecommerce} ctaLink={ctaLink} />
        </div>

        {/* Custom Projects Banner */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30">
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
