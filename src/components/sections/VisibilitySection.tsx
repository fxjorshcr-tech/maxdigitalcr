import { FeatureCard, Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface VisibilitySectionProps {
  data: HomeData["visibility"];
}

/**
 * "Included in every plan": Google Business Profile, Search Console,
 * Bing Places, Apple Business Connect, structured data for AI, Analytics.
 */
export default function VisibilitySection({ data }: VisibilitySectionProps) {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-sm uppercase tracking-widest mb-6 text-[#2eb67d] font-bold">{data.badge}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
            {data.title}
            <br />
            <span className="text-neutral-400">{data.titleHighlight}</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-neutral-600">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((item) => (
            <FeatureCard key={item.title} {...item} dark={false} />
          ))}
        </div>

        <div className="mt-10 flex items-start gap-3 max-w-3xl mx-auto text-sm text-neutral-500">
          <Icon name="shield" size={18} className="shrink-0 mt-0.5 text-[#2eb67d]" />
          <p>{data.footnote}</p>
        </div>
      </div>
    </section>
  );
}
