import { Icon } from "@/components/ui";

const copy = {
  es: {
    file: "tu-sitio.com",
    title: "Así lee una IA tu negocio",
    desc: "No ve el diseño: lee datos. Los dejamos escritos en el formato que entienden.",
    name: "Tu hotel",
    readable: "Lo leen",
  },
  en: {
    file: "your-site.com",
    title: "How an AI reads your business",
    desc: "It does not see the design: it reads data. We write it in the format they understand.",
    name: "Your hotel",
    readable: "Read by",
  },
};

const K = ({ children }: { children: string }) => <span className="text-brand-2">&quot;{children}&quot;</span>;
const S = ({ children }: { children: string }) => <span className="text-neutral-100">&quot;{children}&quot;</span>;
const N = ({ children }: { children: string }) => <span className="text-brand">{children}</span>;

/** A code window with the structured data assistants and search engines read. */
export default function SchemaWindow({ lang = "es" }: { lang?: "es" | "en" }) {
  const t = copy[lang];
  const lines = [
    <>{"{"}</>,
    <>  <K>@type</K>: <S>Hotel</S>,</>,
    <>  <K>name</K>: <S>{t.name}</S>,</>,
    <>  <K>address</K>: <S>La Fortuna, Costa Rica</S>,</>,
    <>  <K>telephone</K>: <S>+506 0000 0000</S>,</>,
    <>  <K>priceRange</K>: <S>$$</S>,</>,
    <>  <K>openingHours</K>: <S>Mo-Su 07:00-22:00</S>,</>,
    <>  <K>aggregateRating</K>: {"{"} <K>ratingValue</K>: <N>4.9</N> {"}"},</>,
    <>  <K>sameAs</K>: [<S>Google Maps</S>, <S>Apple Maps</S>, <S>Bing</S>]</>,
    <>{"}"}</>,
  ];

  return (
    <figure className="rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl overflow-hidden shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <span className="font-mono text-xs text-neutral-400">{t.file}</span>
        <span className="ml-auto rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-neutral-400">
          schema.org · JSON-LD
        </span>
      </div>

      <pre className="overflow-x-auto px-4 py-5 font-mono text-[12.5px] leading-6 text-neutral-500" aria-hidden="true">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="w-7 shrink-0 select-none pr-3 text-right text-neutral-700">{i + 1}</span>
            <code className="whitespace-pre">{line}</code>
          </div>
        ))}
      </pre>

      <figcaption className="border-t border-white/10 px-4 py-4">
        <p className="font-semibold text-white">{t.title}</p>
        <p className="mt-1 text-sm text-neutral-400 leading-relaxed">{t.desc}</p>
        <p className="mt-4 mb-1.5 text-[11px] uppercase tracking-widest text-neutral-500">{t.readable}</p>
        <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs text-neutral-300">
          {["Google", "Bing", "ChatGPT", "Gemini", "Perplexity"].map((e) => (
            <li key={e} className="inline-flex items-center gap-1.5">
              <Icon name="check" size={12} className="text-brand" />
              {e}
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}
