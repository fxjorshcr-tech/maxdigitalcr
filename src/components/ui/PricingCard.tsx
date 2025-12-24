import Link from "next/link";
import CheckIcon from "./CheckIcon";

interface PricingCardProps {
  icon: string;
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
}: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-6 sm:p-8 bg-neutral-800 relative hover:scale-105 transition-all ${
      popular ? "border-2 border-[#3ECF8E]" : "border border-neutral-700 hover:border-[#3ECF8E]"
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#3ECF8E] text-neutral-900 text-sm font-bold px-4 py-2 rounded-full">
            MÁS POPULAR
          </span>
        </div>
      )}
      <div className={`flex items-center justify-between mb-6 ${popular ? "mt-2" : ""}`}>
        <span className="text-4xl">{icon}</span>
        <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
          {time}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-sm text-neutral-500">desde</span>
        <div className="text-4xl font-bold text-[#3ECF8E]">{price}</div>
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
      <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
        <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
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
