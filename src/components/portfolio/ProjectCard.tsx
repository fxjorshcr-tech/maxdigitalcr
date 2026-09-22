import Image from "next/image";
import Icon from "@/components/ui/Icon";
import { getProjectImage, type Lang, type PortfolioProject } from "@/lib/portfolio";

interface ProjectCardProps {
  project: PortfolioProject;
  lang?: Lang;
  priority?: boolean;
}

/**
 * Real screenshot of a live client site inside a subtle browser frame,
 * with the mobile view layered on top. Links straight to the production site.
 */
export default function ProjectCard({ project, lang = "es", priority = false }: ProjectCardProps) {
  const visitLabel = lang === "es" ? "Ver sitio" : "View site";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:border-[#3ECF8E] hover:shadow-xl hover:-translate-y-1"
      aria-label={`${project.name} – ${visitLabel}`}
    >
      {/* Browser frame */}
      <div className="relative bg-neutral-100 p-3 sm:p-4">
        <div className="rounded-lg overflow-hidden border border-neutral-200 bg-white shadow-sm">
          <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 border-b border-neutral-200">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-500 font-mono">
              {project.domain}
            </span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={getProjectImage(project.slug, "desktop")}
              alt={`${project.name} – ${project.type[lang]}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              priority={priority}
            />
          </div>
        </div>

        {/* Mobile overlay */}
        <div className="absolute bottom-3 right-5 sm:right-7 w-[22%] max-w-[110px] rounded-xl border-[3px] border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
          <div className="relative aspect-[9/19.5]">
            <Image
              src={getProjectImage(project.slug, "mobile")}
              alt=""
              fill
              sizes="120px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#2eb67d] font-semibold mb-1">
              {project.industry[lang]}
            </p>
            <h3 className="text-lg font-bold text-neutral-900 leading-tight">{project.name}</h3>
            <p className="text-sm text-neutral-500 mt-1">{project.location}</p>
          </div>
          <span className="shrink-0 inline-flex items-center gap-1 text-sm font-medium text-neutral-700 group-hover:text-[#2eb67d] transition-colors">
            {visitLabel}
            <Icon name="arrowUpRight" size={16} />
          </span>
        </div>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{project.summary[lang]}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.features[lang].map((f) => (
            <li
              key={f}
              className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
