import Link from "next/link";
import CheckIcon from "./CheckIcon";
import Icon, { type IconName } from "./Icon";

interface PricingCardProps {
  icon: IconName;
  title: string;
  time: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  idealFor: string;
  cta: string;
  popular?: boolean;
  ctaLink?: string;
  lang?: "es" | "en";
}

export default function PricingCard({
  icon,
  title,
  time,
  description,
  price,
  priceNote,
  features,
  idealFor,
  cta,
  popular = false,
  ctaLink = "/contacto",
  lang = "es",
}: PricingCardProps) {
  const t = lang === "es"
    ? { popular: "Más solicitado", from: "desde", idealFor: "Ideal para" }
    : { popular: "Most requested", from: "from", idealFor: "Ideal for" };

  return (
    <div
      className={`rounded-2xl p-6 sm:p-8 bg-neutral-800 relative flex flex-col transition-all ${
        popular ? "border-2 border-[#3ECF8E] lg:-translate-y-2" : "border border-neutral-700 hover:border-neutral-500"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#3ECF8E] text-neutral-900 text-xs font-bold uppercase tracking-wide px-4 py-2 rounded-full">
            {t.popular}
          </span>
        </div>
      )}
      <div className={`flex items-center justify-between mb-6 ${popular ? "mt-2" : ""}`}>
        <div className="w-12 h-12 rounded-xl bg-neutral-700/60 flex items-center justify-center text-[#3ECF8E]">
          <Icon name={icon} size={24} />
        </div>
        <div className="inline-flex items-center gap-1.5 bg-neutral-700/60 text-neutral-200 text-xs font-semibold px-3 py-1.5 rounded-full">
          <Icon name="clock" size={14} />
          {time}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-sm text-neutral-500">{t.from}</span>
        <div className="text-4xl font-bold text-white tracking-tight">{price}</div>
        <span className="text-sm text-neutral-500">{priceNote}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>
      <div className="p-4 bg-neutral-700/50 rounded-lg mb-6 mt-auto">
        <p className="text-xs text-neutral-400 mb-1">{t.idealFor}:</p>
        <p className="text-sm text-white">{idealFor}</p>
      </div>
      <Link
        href={ctaLink}
        className={`block text-center py-4 rounded-lg font-medium transition-all ${
          popular
            ? "bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            : "bg-neutral-700 text-white hover:bg-neutral-600"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
