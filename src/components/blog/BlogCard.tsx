import Image from "next/image";
import Link from "next/link";
import { BlogArticle, formatDate } from "@/lib/blog-data";

interface BlogCardProps {
  article: BlogArticle;
  lang?: "es" | "en";
  featured?: boolean;
}

export default function BlogCard({ article, lang = "es", featured = false }: BlogCardProps) {
  const baseUrl = lang === "es" ? "/blog" : "/en/blog";

  if (featured) {
    return (
      <Link
        href={`${baseUrl}/${article.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
      >
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full min-h-[300px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-[#3ECF8E] text-neutral-900 text-xs font-semibold rounded-full">
                {lang === "es" ? "Destacado" : "Featured"}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
              <span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
                {article.category}
              </span>
              <span>{formatDate(article.date, lang)}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#3ECF8E] transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="text-neutral-600 mb-4 line-clamp-3">
              {article.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">{article.readTime} {lang === "es" ? "de lectura" : "read"}</span>
              <span className="text-[#3ECF8E] font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                {lang === "es" ? "Leer más" : "Read more"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`${baseUrl}/${article.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100"
    >
      <div className="relative h-48">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
          <span className="px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium">
            {article.category}
          </span>
          <span>{formatDate(article.date, lang)}</span>
        </div>
        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#3ECF8E] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
          {article.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-500">{article.readTime} {lang === "es" ? "de lectura" : "read"}</span>
          <span className="text-[#3ECF8E] font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            {lang === "es" ? "Leer" : "Read"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
