import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.maxdigitalcr.com";
  const lastModified = new Date();

  // Páginas en español
  const spanishPages = [
    { url: "", priority: 1 },
    { url: "/servicios", priority: 0.9 },
    { url: "/nosotros", priority: 0.8 },
    { url: "/contacto", priority: 0.8 },
  ];

  // Páginas en inglés
  const englishPages = [
    { url: "/en", priority: 0.9 },
    { url: "/en/servicios", priority: 0.8 },
    { url: "/en/nosotros", priority: 0.7 },
    { url: "/en/contacto", priority: 0.7 },
  ];

  const allPages = [...spanishPages, ...englishPages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
