import { Marquee } from "@/components/motion";
import { portfolioProjects } from "@/lib/portfolio";

interface ClientMarqueeProps {
  label: string;
}

/** Scrolling strip of the client domains that are live today. */
export default function ClientMarquee({ label }: ClientMarqueeProps) {
  const items = portfolioProjects.map((p) => (
    <span key={p.slug} className="inline-flex items-center gap-3 text-neutral-500">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      <span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-300">{p.name}</span>
      <span className="hidden sm:inline text-sm font-mono text-neutral-600">{p.domain}</span>
    </span>
  ));

  return (
    <section className="relative bg-neutral-950 border-y border-white/5 py-8">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-neutral-500 mb-6">{label}</p>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Marquee items={items} duration={36} />
      </div>
    </section>
  );
}
