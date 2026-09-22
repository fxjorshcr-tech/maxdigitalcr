/**
 * Portfolio: real websites built by MaxDigitalCR.
 * Screenshots live in /public/portfolio/<slug>-desktop.webp and <slug>-mobile.webp.
 * Descriptions reflect what each production site actually does today.
 */

export type Lang = "es" | "en";

export interface PortfolioProject {
  slug: string;
  name: string;
  url: string;
  domain: string;
  location: string;
  industry: { es: string; en: string };
  type: { es: string; en: string };
  summary: { es: string; en: string };
  features: { es: string[]; en: string[] };
  languages: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "cantwaittravel",
    name: "Can't Wait Travel",
    url: "https://cantwaittravelcr.com",
    domain: "cantwaittravelcr.com",
    location: "La Fortuna, Costa Rica",
    industry: { es: "Transporte turístico", en: "Tourist transport" },
    type: { es: "Sitio con reservas en línea", en: "Site with online booking" },
    summary: {
      es: "Empresa de traslados privados con licencia ICT. Buscador de rutas, armado de viajes de varios tramos y pago en línea con confirmación inmediata. Más de 1.200 rutas.",
      en: "ICT-licensed private shuttle company. Route search, multi-leg trip builder and online checkout with instant confirmation. Over 1,200 routes.",
    },
    features: {
      es: ["Reservas y pago en línea", "Buscador de rutas", "Blog e itinerarios", "Inglés y español"],
      en: ["Online booking & checkout", "Route search", "Blog & itineraries", "English & Spanish"],
    },
    languages: ["en", "es"],
    featured: true,
  },
  {
    slug: "rutapacifico",
    name: "Ruta Pacífico",
    url: "https://rutapacifico.com",
    domain: "rutapacifico.com",
    location: "Liberia, Guanacaste",
    industry: { es: "Transporte turístico", en: "Tourist transport" },
    type: { es: "Sitio catálogo con reservas", en: "Catalog site with bookings" },
    summary: {
      es: "Traslados privados desde el aeropuerto de Liberia a las playas de Guanacaste. Precios fijos, página de reservas, preguntas frecuentes y blog para captar viajeros antes de llegar.",
      en: "Private shuttles from Liberia Airport to the Guanacaste beaches. Fixed prices, booking page, FAQ and a blog to capture travelers before they land.",
    },
    features: {
      es: ["Página de reservas", "Precios por destino", "Blog y FAQ", "Inglés y español"],
      en: ["Booking page", "Prices per destination", "Blog & FAQ", "English & Spanish"],
    },
    languages: ["en", "es"],
  },
  {
    slug: "naturabungalows",
    name: "Natura Bungalows",
    url: "https://naturabungalowscr.com/",
    domain: "naturabungalowscr.com",
    location: "La Fortuna, Costa Rica",
    industry: { es: "Hotelería", en: "Hospitality" },
    type: { es: "Sitio de hotel", en: "Hotel website" },
    summary: {
      es: "Tres bungalows de lujo con vista al Volcán Arenal. Galería, amenidades, mapa y botón de reserva directa para no depender solo de Booking.com y sus comisiones.",
      en: "Three luxury bungalows with Arenal Volcano views. Gallery, amenities, map and a direct booking button so the owners do not depend only on Booking.com and its commissions.",
    },
    features: {
      es: ["Reserva directa", "Galería de fotos", "Mapa integrado", "Español e inglés"],
      en: ["Direct booking", "Photo gallery", "Embedded map", "Spanish & English"],
    },
    languages: ["es", "en"],
    featured: true,
  },
  {
    slug: "rainforestexperiences",
    name: "Rainforest Experiences",
    url: "https://www.rainforestexperiencescr.com/",
    domain: "rainforestexperiencescr.com",
    location: "La Fortuna, Costa Rica",
    industry: { es: "Tours y naturaleza", en: "Tours & nature" },
    type: { es: "Sitio catálogo con reservas", en: "Catalog site with bookings" },
    summary: {
      es: "Guía naturalista certificado con más de 13 años de experiencia. Cada tour tiene su página con precio, duración y botón de reserva, más ayuda por WhatsApp.",
      en: "Certified naturalist guide with over 13 years of experience. Every tour has its own page with price, duration and booking button, plus WhatsApp help.",
    },
    features: {
      es: ["Página por tour", "Reservas", "Blog", "Inglés y español"],
      en: ["Page per tour", "Bookings", "Blog", "English & Spanish"],
    },
    languages: ["en", "es"],
    featured: true,
  },
  {
    slug: "jysadventuretour",
    name: "JYS Adventure Tour",
    url: "https://www.jysadventuretour.com/",
    domain: "jysadventuretour.com",
    location: "Guanacaste, Costa Rica",
    industry: { es: "Tours de aventura", en: "Adventure tours" },
    type: { es: "Sitio catálogo con reservas", en: "Catalog site with bookings" },
    summary: {
      es: "Tours en ATV y UTV por montaña, río y playa. Catálogo de tours con precios, galería, preguntas frecuentes y reserva en línea.",
      en: "ATV and UTV tours through mountains, rivers and beaches. Tour catalog with prices, gallery, FAQ and online booking.",
    },
    features: {
      es: ["Catálogo de tours", "Reserva en línea", "Galería y FAQ", "Inglés y español"],
      en: ["Tour catalog", "Online booking", "Gallery & FAQ", "English & Spanish"],
    },
    languages: ["en", "es"],
  },
  {
    slug: "arenalsports",
    name: "Arenal Sports Company",
    url: "https://www.arenalsports.com/",
    domain: "arenalsports.com",
    location: "Costa Rica",
    industry: { es: "Distribución de equipo", en: "Equipment distribution" },
    type: { es: "Catálogo de productos", en: "Product catalog" },
    summary: {
      es: "Distribuidor de equipo certificado para escalada, rafting y seguridad en altura. Catálogo por categoría y marca, con consultas directas por WhatsApp para clientes empresariales.",
      en: "Distributor of certified climbing, rafting and height-safety equipment. Catalog by category and brand, with direct WhatsApp inquiries for business customers.",
    },
    features: {
      es: ["Catálogo por categoría", "Marcas distribuidas", "Consultas por WhatsApp", "Enfoque B2B"],
      en: ["Catalog by category", "Brands carried", "WhatsApp inquiries", "B2B focus"],
    },
    languages: ["es"],
  },
  {
    slug: "elladayhomes",
    name: "EllaDay Homes",
    url: "https://elladayhomes.com/",
    domain: "elladayhomes.com",
    location: "La Fortuna, Costa Rica",
    industry: { es: "Bienes raíces", en: "Real estate" },
    type: { es: "Catálogo de propiedades", en: "Property catalog" },
    summary: {
      es: "Agencia boutique de bienes raíces con lotes, casas y fincas en La Fortuna. Buscador por tipo y zona, fichas de propiedades, guía de compra y sitio en cuatro idiomas.",
      en: "Boutique real estate agency with lots, homes and farms in La Fortuna. Search by type and zone, property listings, buying guide and a four-language site.",
    },
    features: {
      es: ["Buscador de propiedades", "Fichas con fotos", "Guía de compra", "4 idiomas"],
      en: ["Property search", "Listings with photos", "Buying guide", "4 languages"],
    },
    languages: ["es", "en", "fr", "de"],
    featured: true,
  },
];

export function getFeaturedProjects(limit = 4): PortfolioProject[] {
  const featured = portfolioProjects.filter((p) => p.featured);
  return (featured.length >= limit ? featured : portfolioProjects).slice(0, limit);
}

export function getProjectImage(slug: string, device: "desktop" | "mobile" = "desktop"): string {
  return `/portfolio/${slug}-${device}.webp`;
}
