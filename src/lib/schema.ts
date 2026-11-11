import { homeDataES, homeDataEN, SITE, type FAQ } from "./data";
import { portfolioProjects, getProjectImage } from "./portfolio";

const LOGO = `${SITE.url}/brand/logo-maxdigitalcr.png`;

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/**
 * Site-wide entity graph. One clear "X is a ..." description, consistent
 * NAP (name, location, phone), services with "from" prices in CRC and USD,
 * and links to every public profile so search engines and AI assistants can
 * disambiguate the business.
 *
 * Add the Google Maps, Bing and Apple Maps profile URLs to `sameAs` once the
 * profiles are live (see docs/presencia-digital.md).
 */
export function organizationJsonLd(lang: "es" | "en" = "es") {
  const es = lang === "es";
  const home = es ? homeDataES : homeDataEN;
  const other = es ? homeDataEN : homeDataES;
  const base = es ? SITE.url : `${SITE.url}/en`;
  const services = home.offer.types.map((t, i) => ({
    "@type": "Offer",
    name: t.title,
    description: t.desc,
    itemOffered: {
      "@type": "Service",
      name: t.title,
      alternateName: other.offer.types[i]?.title,
      serviceType: "Web design and development",
      description: t.desc,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "Costa Rica" },
    },
    ...(i === 0
      ? {
          priceSpecification: [
            { "@type": "PriceSpecification", minPrice: SITE.fromPrice.crc, priceCurrency: "CRC", description: `desde ${SITE.fromPrice.crcLabel}` },
            { "@type": "PriceSpecification", minPrice: SITE.fromPrice.usd, priceCurrency: "USD", description: `from ${SITE.fromPrice.usdLabel}` },
          ],
        }
      : {}),
    url: `${base}/servicios`,
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: SITE.name,
        legalName: SITE.name,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: LOGO, width: 512, height: 512 },
        image: LOGO,
        description: home.facts.summary,
        slogan: es ? "Páginas web hechas para Google y para las respuestas de la IA." : "Websites built for Google and for AI answers.",
        foundingLocation: { "@type": "Place", name: "La Fortuna, Alajuela, Costa Rica" },
        telephone: SITE.phoneIntl,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: "CR",
        },
        geo: { "@type": "GeoCoordinates", latitude: 10.4678, longitude: -84.6427 },
        areaServed: [
          { "@type": "Country", name: "Costa Rica" },
          { "@type": "City", name: "La Fortuna" },
          { "@type": "AdministrativeArea", name: "Alajuela" },
          { "@type": "AdministrativeArea", name: "Guanacaste" },
          { "@type": "City", name: "San José" },
        ],
        priceRange: es ? "desde ₡100.000" : "from $200",
        currenciesAccepted: "CRC, USD",
        paymentAccepted: "SINPE Móvil, transferencia bancaria, PayPal",
        knowsLanguage: ["es", "en"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phoneIntl,
          contactType: "sales",
          availableLanguage: ["Spanish", "English"],
          url: SITE.whatsapp,
        },
        sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.whatsapp],
        knowsAbout: es
          ? [
              "Diseño web",
              "Desarrollo web",
              "Next.js",
              "React",
              "SEO local",
              "Google Business Profile",
              "Apple Business Connect",
              "Bing Places",
              "Datos estructurados schema.org",
              "Optimización para búsquedas con IA (GEO)",
              "E-commerce",
              "Landing pages",
            ]
          : [
              "Web design",
              "Web development",
              "Next.js",
              "React",
              "Local SEO",
              "Google Business Profile",
              "Apple Business Connect",
              "Bing Places",
              "schema.org structured data",
              "Generative engine optimization (GEO)",
              "E-commerce",
              "Landing pages",
            ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: es ? "Servicios de desarrollo web" : "Web development services",
          itemListElement: services,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: es ? "Desarrollo web profesional en Costa Rica" : "Professional web development in Costa Rica",
        publisher: { "@id": ORG_ID },
        inLanguage: ["es-CR", "en"],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/portafolio#lista`,
        name: es ? "Sitios web desarrollados por MaxDigitalCR" : "Websites built by MaxDigitalCR",
        numberOfItems: portfolioProjects.length,
        itemListElement: portfolioProjects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "WebSite",
            name: p.name,
            url: p.url,
            description: es ? p.summary.es : p.summary.en,
            image: `${SITE.url}${getProjectImage(p.slug)}`,
            creator: { "@id": ORG_ID },
            inLanguage: p.languages,
          },
        })),
      },
    ],
  };
}

export function faqJsonLd(faq: FAQ[], lang: "es" | "en" = "es") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang === "es" ? "es-CR" : "en",
    publisher: { "@id": ORG_ID },
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** AboutPage / ContactPage node tied to the organization entity. */
export function pageJsonLd(type: "AboutPage" | "ContactPage", opts: { name: string; description: string; url: string; lang: "es" | "en" }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.lang === "es" ? "es-CR" : "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    mainEntity: { "@id": ORG_ID },
  };
}

/** BlogPosting with the fields answer engines use to date and attribute an article. */
export function articleJsonLd(a: { title: string; description: string; image: string; date: string; slug: string }, lang: "es" | "en") {
  const url = `${SITE.url}${lang === "es" ? "" : "/en"}/blog/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: a.title,
    description: a.description,
    image: a.image.startsWith("http") ? a.image : `${SITE.url}${a.image}`,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: lang === "es" ? "es-CR" : "en",
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}
