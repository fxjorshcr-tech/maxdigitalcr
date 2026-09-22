import Link from "next/link";
import Icon from "@/components/ui/Icon";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects, portfolioProjects, type Lang } from "@/lib/portfolio";

interface PortfolioSectionProps {
  lang?: Lang;
  /** Show every project (portfolio page) instead of the featured subset (home). */
  all?: boolean;
  showHeader?: boolean;
}

const copy = {
  es: {
    badge: "Páginas que hemos hecho",
    title: "Sitios reales, en producción,",
    highlight: "para negocios reales de Costa Rica.",
    description:
      "Cada uno de estos sitios está en línea hoy. Hacé clic para verlos funcionando en tu propio celular o computadora.",
    cta: "Ver todos los proyectos",
    count: (n: number) => `${n} sitios publicados`,
  },
  en: {
    badge: "Websites we have built",
    title: "Real sites, live in production,",
    highlight: "for real businesses in Costa Rica.",
    description:
      "Every one of these sites is online today. Click through and see them working on your own phone or computer.",
    cta: "See all projects",
    count: (n: number) => `${n} published sites`,
  },
};

export default function PortfolioSection({ lang = "es", all = false, showHeader = true }: PortfolioSectionProps) {
  const t = copy[lang];
  const projects = all ? portfolioProjects : getFeaturedProjects(4);
  const portfolioHref = lang === "es" ? "/portafolio" : "/en/portafolio";

  return (
    <section id="portafolio" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {showHeader && (
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#2eb67d] font-bold">{t.badge}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neutral-900">
              {t.title}
              <br />
              <span className="text-neutral-400">{t.highlight}</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto text-neutral-600">{t.description}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} lang={lang} priority={i < 2} />
          ))}
        </div>

        {!all && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={portfolioHref}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-neutral-900 text-white hover:bg-neutral-800"
            >
              {t.cta}
              <Icon name="arrowRight" size={16} />
            </Link>
            <span className="text-sm text-neutral-500">{t.count(portfolioProjects.length)}</span>
          </div>
        )}
      </div>
    </section>
  );
}
