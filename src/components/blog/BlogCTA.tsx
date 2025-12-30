import Link from "next/link";
import { BlogData } from "@/lib/blog-data";

interface BlogCTAProps {
  data: BlogData;
  lang?: "es" | "en";
}

export default function BlogCTA({ data, lang = "es" }: BlogCTAProps) {
  const contactUrl = lang === "es" ? "/contacto" : "/en/contacto";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {data.cta.title}
        </h2>
        <p className="text-lg text-neutral-300 mb-8">
          {data.cta.description}
        </p>
        <Link
          href={contactUrl}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#3ECF8E] text-neutral-900 font-semibold rounded-full hover:bg-[#2eb67d] transition-colors"
        >
          {data.cta.button}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
