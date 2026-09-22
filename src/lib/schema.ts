import { homeDataES, homeDataEN, SITE, type FAQ } from "./data";
import { portfolioProjects, getProjectImage } from "./portfolio";

const LOGO = "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png";

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
export function organizationJsonLd() {
  const offers = (["landing", "catalog", "ecommerce"] as const).map((id) => {
    const es = homeDataES.pricing[id];
    const en = homeDataEN.pricing[id];
    return {
      "@type": "Offer",
      name: es.title,
      description: es.description,
      itemOffered: {
        "@type": "Service",
        name: es.title,
        alternateName: en.title,
        serviceType: "Web design and development",
        description: es.description,
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: "Costa Rica" },
      },
      priceSpecification: [
        {
          "@type": "PriceSpecification",
          price: es.priceNumeric,
          minPrice: es.priceNumeric,
          priceCurrency: "CRC",
          description: `desde ${es.price}, ${es.priceNote}`,
        },
        {
          "@type": "PriceSpecification",
          price: en.priceNumeric,
          minPrice: en.priceNumeric,
          priceCurrency: "USD",
          description: `from ${en.price}, ${en.priceNote}`,
        },
      ],
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/#planes`,
    };
  });

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
        description:
          "MaxDigitalCR es una agencia de diseño y desarrollo web en La Fortuna de San Carlos, Costa Rica. Crea landing pages, sitios catálogo y tiendas en línea para pequeños y medianos negocios, con entrega en 1 a 10 días hábiles, precios fijos desde ₡100.000 y configuración de Google Business Profile, Search Console y datos estructurados incluida.",
        slogan: "Páginas web para negocios de Costa Rica que necesitan más clientes.",
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
        priceRange: "₡100.000 - ₡300.000+",
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
        knowsAbout: [
          "Diseño web",
          "Desarrollo web",
          "Next.js",
          "React",
          "SEO local",
          "Google Business Profile",
          "Optimización para búsquedas con IA",
          "E-commerce",
          "Landing pages",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de desarrollo web",
          itemListElement: offers,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        description: "Desarrollo web profesional en Costa Rica",
        publisher: { "@id": ORG_ID },
        inLanguage: ["es-CR", "en"],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/portafolio#lista`,
        name: "Sitios web desarrollados por MaxDigitalCR",
        numberOfItems: portfolioProjects.length,
        itemListElement: portfolioProjects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "WebSite",
            name: p.name,
            url: p.url,
            description: p.summary.es,
            image: `${SITE.url}${getProjectImage(p.slug)}`,
            creator: { "@id": ORG_ID },
            inLanguage: p.languages,
          },
        })),
      },
    ],
  };
}

export function faqJsonLd(faq: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
