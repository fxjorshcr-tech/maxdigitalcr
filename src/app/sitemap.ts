import { MetadataRoute } from "next";
import { articlesES, articlesEN } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.maxdigitalcr.com";
  const lastModified = new Date();

  // Páginas en español
  const spanishPages = [
    { url: "", priority: 1 },
    { url: "/servicios", priority: 0.9 },
    { url: "/nosotros", priority: 0.8 },
    { url: "/contacto", priority: 0.8 },
    { url: "/blog", priority: 0.9 },
  ];

  // Páginas en inglés
  const englishPages = [
    { url: "/en", priority: 0.9 },
    { url: "/en/servicios", priority: 0.8 },
    { url: "/en/nosotros", priority: 0.7 },
    { url: "/en/contacto", priority: 0.7 },
    { url: "/en/blog", priority: 0.8 },
  ];

  // Blog articles in Spanish
  const spanishArticles = articlesES.map((article) => ({
    url: `/blog/${article.slug}`,
    priority: 0.7,
  }));

  // Blog articles in English
  const englishArticles = articlesEN.map((article) => ({
    url: `/en/blog/${article.slug}`,
    priority: 0.6,
  }));

  const allPages = [...spanishPages, ...englishPages, ...spanishArticles, ...englishArticles];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
