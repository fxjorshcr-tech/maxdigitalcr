import Link from "next/link";
import { CheckIcon, Icon } from "@/components/ui";
import type { HomeData } from "@/lib/data";

interface AuditSectionProps {
  data: HomeData["audit"];
  ctaLink?: string;
}

export default function AuditSection({ data, ctaLink = "/contacto" }: AuditSectionProps) {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest mb-6 text-brand-dark font-bold">{data.badge}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
              {data.title}
              <br />
              <span className="text-gradient-dark">{data.titleHighlight}</span>
            </h2>
            <p className="text-lg mb-6 text-neutral-600">{data.description}</p>
            <ul className="space-y-4 mb-8">
              {data.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-neutral-700">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-brand text-neutral-900 hover:bg-brand-dark"
            >
              {data.cta}
              <Icon name="arrowRight" size={16} />
            </Link>
          </div>

          <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8">
            <div className="mb-8">
              <div className="w-12 h-12 mb-4 rounded-xl bg-brand/15 flex items-center justify-center text-brand">
                <Icon name="fileText" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{data.reportTitle}</h3>
              <p className="text-neutral-400">{data.reportDesc}</p>
            </div>
            <div className="space-y-3">
              {data.checks.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-neutral-800 rounded-lg">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-neutral-700/60 flex items-center justify-center text-brand">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-brand/10 border border-brand/40 rounded-lg text-center">
              <p className="text-white font-medium">{data.free}</p>
              <p className="text-neutral-400 text-sm">{data.freeNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
