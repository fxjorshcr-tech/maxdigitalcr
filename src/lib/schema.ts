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
  const services = homeDataES.offer.types.map((t, i) => ({
    "@type": "Offer",
    name: t.title,
    description: t.desc,
    itemOffered: {
      "@type": "Service",
      name: t.title,
      alternateName: homeDataEN.offer.types[i]?.title,
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
    url: `${SITE.url}/servicios`,
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
        description:
          "MaxDigitalCR es una agencia de diseño y desarrollo web en La Fortuna de San Carlos, Costa Rica. Crea landing pages, sitios catálogo y tiendas en línea para pequeños y medianos negocios, con asesoría inicial, entrega en días, precio cerrado desde ₡100.000 y configuración de Google Business Profile, Apple Business Connect, Bing Places, Search Console y datos estructurados incluida.",
        slogan: "Tu negocio, bien puesto en internet.",
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
        priceRange: "desde ₡100.000",
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
          itemListElement: services,
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
