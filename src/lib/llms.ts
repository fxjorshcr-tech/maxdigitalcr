import { SITE, homeDataES, homeDataEN, type HomeData } from "./data";
import { portfolioProjects } from "./portfolio";
import { articlesES, articlesEN } from "./blog-data";

/**
 * llms.txt (https://llmstxt.org): a plain-markdown summary of the site for AI
 * assistants. Generated from the same data the pages render, so prices,
 * timelines and the project list never drift out of sync with the site.
 */

const pages = [
  { path: "/", es: "Inicio", en: "Home", desc: "servicios, precios, proceso y preguntas frecuentes." },
  { path: "/servicios", es: "Servicios", en: "Services", desc: "detalle de planes, mantenimiento y costos adicionales." },
  { path: "/portafolio", es: "Portafolio", en: "Portfolio", desc: "sitios reales en producción desarrollados por MaxDigitalCR." },
  { path: "/nosotros", es: "Nosotros", en: "About", desc: "quiénes somos y cómo trabajamos." },
  { path: "/contacto", es: "Contacto", en: "Contact", desc: "formulario y WhatsApp." },
  { path: "/blog", es: "Blog", en: "Blog", desc: "artículos sobre páginas web para negocios en Costa Rica." },
];

function contactBlock(): string {
  return [
    `Contacto: WhatsApp ${SITE.phone} (${SITE.whatsapp}) · ${SITE.email} · ${SITE.url}`,
    `Ubicación: ${SITE.city}, ${SITE.region}, ${SITE.country}. Atiende clientes en todo Costa Rica de forma remota.`,
    "Idiomas: español e inglés.",
  ].join("\n");
}

export function llmsTxt(): string {
  const d = homeDataES;
  const included = d.faq.find((f) => f.q.startsWith("¿Qué incluye"))?.a;
  const notIncluded = d.faq.find((f) => f.q.startsWith("¿Qué no incluye"))?.a;
  return [
    `# ${SITE.name}`,
    "",
    `> ${d.facts.summary}`,
    "",
    contactBlock(),
    "",
    "## Datos clave",
    "",
    ...d.facts.items.map((f) => `- ${f.label}: ${f.value}`),
    "",
    "## Servicios",
    "",
    ...d.offer.types.map((t) => `- ${t.title}: ${t.desc}`),
    ...(included ? [`- Todos los planes incluyen: ${included}`] : []),
    ...(notIncluded ? [`- No incluido: ${notIncluded}`] : []),
    "",
    "## Páginas",
    "",
    ...pages.map((p) => `- [${p.es}](${SITE.url}${p.path}): ${p.desc}`),
    `- [English version](${SITE.url}/en)`,
    "",
    "## Sitios desarrollados",
    "",
    ...portfolioProjects.map((p) => `- [${p.name}](${p.url}): ${p.industry.es}, ${p.location}. ${p.summary.es}`),
    "",
    "## Contenido completo",
    "",
    `- [llms-full.txt](${SITE.url}/llms-full.txt): todo el contenido del sitio en un solo archivo, en español e inglés, con preguntas frecuentes y proceso de trabajo.`,
    "",
  ].join("\n");
}

function fullSection(d: HomeData, lang: "es" | "en"): string[] {
  const es = lang === "es";
  const base = es ? SITE.url : `${SITE.url}/en`;
  const articles = es ? articlesES : articlesEN;
  return [
    `# ${SITE.name} (${es ? "español" : "English"})`,
    "",
    `> ${d.facts.summary}`,
    "",
    `## ${es ? "Datos clave" : "Key facts"}`,
    "",
    ...d.facts.items.map((f) => `- ${f.label}: ${f.value}`),
    "",
    `## ${es ? "Servicios" : "Services"}`,
    "",
    ...d.offer.types.map((t) => `- ${t.title}: ${t.desc}`),
    "",
    d.offer.fromNote,
    "",
    `## ${es ? "Cómo trabajamos" : "How we work"}`,
    "",
    ...d.process.map((s) => `${Number(s.step)}. ${s.title}: ${s.desc}`),
    "",
    ...d.differences.map((x) => `- ${x.title}: ${x.desc}`),
    "",
    `## ${es ? "Presencia en buscadores y asistentes de IA" : "Search engine and AI assistant presence"}`,
    "",
    d.visibility.description,
    "",
    ...d.visibility.items.map((x) => `- ${x.title}: ${x.desc}`),
    "",
    `## ${es ? "Acompañamiento después del lanzamiento" : "Support after launch"}`,
    "",
    ...d.support.items.map((x) => `- ${x.title}: ${x.desc}`),
    "",
    `## ${es ? "Sitios desarrollados" : "Websites built"}`,
    "",
    ...portfolioProjects.flatMap((p) => [
      `### ${p.name}`,
      "",
      `- URL: ${p.url}`,
      `- ${es ? "Rubro" : "Industry"}: ${p.industry[lang]}`,
      `- ${es ? "Ubicación" : "Location"}: ${p.location}`,
      `- ${es ? "Tipo" : "Type"}: ${p.type[lang]}`,
      `- ${es ? "Funciones" : "Features"}: ${p.features[lang].join(", ")}`,
      "",
      p.summary[lang],
      "",
    ]),
    `## ${es ? "Preguntas frecuentes" : "Frequently asked questions"}`,
    "",
    ...d.faq.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    `## ${es ? "Artículos" : "Articles"}`,
    "",
    ...articles.map((a) => `- [${a.title}](${base}/blog/${a.slug}) (${a.date}): ${a.description}`),
    "",
    `## ${es ? "Contacto" : "Contact"}`,
    "",
    `- WhatsApp: ${SITE.phone} (${SITE.whatsapp})`,
    `- ${es ? "Correo" : "Email"}: ${SITE.email}`,
    `- ${es ? "Formulario" : "Form"}: ${base}/contacto`,
    `- ${d.talk.response}`,
    "",
  ];
}

export function llmsFullTxt(): string {
  return [...fullSection(homeDataES, "es"), "---", "", ...fullSection(homeDataEN, "en")].join("\n");
}
