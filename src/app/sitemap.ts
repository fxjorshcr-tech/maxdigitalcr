import { MetadataRoute } from "next";
import { articlesES, articlesEN } from "@/lib/blog-data";

const baseUrl = "https://www.maxdigitalcr.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: { es: string; en: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { es: "", en: "/en", priority: 1, changeFrequency: "weekly" },
    { es: "/portafolio", en: "/en/portafolio", priority: 0.9, changeFrequency: "monthly" },
    { es: "/servicios", en: "/en/servicios", priority: 0.9, changeFrequency: "monthly" },
    { es: "/nosotros", en: "/en/nosotros", priority: 0.7, changeFrequency: "monthly" },
    { es: "/contacto", en: "/en/contacto", priority: 0.8, changeFrequency: "monthly" },
    { es: "/blog", en: "/en/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.flatMap((p) => {
    const alternates = { languages: { es: `${baseUrl}${p.es}`, en: `${baseUrl}${p.en}`, "x-default": `${baseUrl}${p.es}` } };
    return [
      { url: `${baseUrl}${p.es}`, lastModified, changeFrequency: p.changeFrequency, priority: p.priority, alternates },
      { url: `${baseUrl}${p.en}`, lastModified, changeFrequency: p.changeFrequency, priority: p.priority - 0.1, alternates },
    ];
  });

  const articles: MetadataRoute.Sitemap = [
    ...articlesES.map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...articlesEN.map((a) => ({
      url: `${baseUrl}/en/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticEntries, ...articles];
}
