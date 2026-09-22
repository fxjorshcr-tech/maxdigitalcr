import type { IconName } from "@/components/ui/Icon";

// Colores del tema
export const THEME = {
  primary: "#3ECF8E",
  primaryHover: "#2eb67d",
} as const;

export const SITE = {
  name: "MaxDigitalCR",
  url: "https://www.maxdigitalcr.com",
  phone: "+506 8596 2438",
  phoneIntl: "+50685962438",
  whatsapp: "https://wa.me/50685962438",
  email: "info@maxdigitalcr.com",
  city: "La Fortuna",
  region: "Alajuela",
  country: "Costa Rica",
  pricesUpdated: { es: "Precios actualizados: setiembre 2026", en: "Prices updated: September 2026" },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61585468526315",
    instagram: "https://www.instagram.com/maxdigitalcostarica/",
  },
} as const;

export interface FeatureItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface PricingPlan {
  id: "landing" | "catalog" | "ecommerce";
  icon: IconName;
  title: string;
  time: string;
  description: string;
  price: string;
  priceNumeric: number;
  currency: "CRC" | "USD";
  priceNote: string;
  features: string[];
  idealFor: string;
  cta: string;
  popular: boolean;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HomeData {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    ctaSecondary: string;
    proof: string[];
  };
  services: FeatureItem[];
  quickFeatures: FeatureItem[];
  techFeatures: FeatureItem[];
  stats: { stat: string; desc: string; source: string; icon: IconName }[];
  pricing: { landing: PricingPlan; catalog: PricingPlan; ecommerce: PricingPlan };
  pricingNotes: {
    title: string;
    factorsTitle: string;
    factors: string[];
    notIncludedTitle: string;
    notIncluded: string[];
    guarantee: string;
  };
  visibility: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: FeatureItem[];
    footnote: string;
  };
  differences: FeatureItem[];
  industries: { icon: IconName; name: string }[];
  technologies: { name: string; role: string }[];
  process: { step: string; title: string; desc: string; icon: IconName }[];
  audit: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: string[];
    cta: string;
    reportTitle: string;
    reportDesc: string;
    checks: FeatureItem[];
    free: string;
    freeNote: string;
  };
  faq: FAQ[];
  cta: { title: string; description: string; cta: string };
}

// ---------------------------------------------------------------------------
// ESPAÑOL
// ---------------------------------------------------------------------------
export const homeDataES: HomeData = {
  hero: {
    badge: "Desarrollo web en La Fortuna, Costa Rica",
    title: "Páginas web para negocios de Costa Rica",
    titleHighlight: "que necesitan más clientes.",
    description:
      "Diseñamos, desarrollamos y publicamos tu sitio en 1 a 10 días hábiles. Precio fijo desde ₡100.000, con perfil de Google, Search Console y 30 días de soporte incluidos.",
    cta: "Cotizar mi página",
    ctaSecondary: "Ver sitios que hemos hecho",
    proof: ["7 sitios en producción", "Entrega en 1 a 10 días hábiles", "Respuesta en menos de 24 horas"],
  },

  services: [
    {
      icon: "layout",
      title: "Landing page",
      desc: "Una sola página enfocada en que te contacten. Para campañas, lanzamientos o profesionales independientes.",
    },
    {
      icon: "layers",
      title: "Sitio catálogo",
      desc: "Varias páginas para mostrar productos, servicios, tours o habitaciones, con galerías y formularios.",
    },
    {
      icon: "cart",
      title: "Tienda en línea",
      desc: "Carrito, pagos con SINPE o tarjeta, inventario y notificaciones de pedidos.",
    },
  ],

  quickFeatures: [
    { icon: "clock", title: "1 a 10 días hábiles", desc: "Tu página publicada en días. Landing pages en 1 a 3 días." },
    { icon: "wallet", title: "Desde ₡100.000", desc: "Precio cerrado antes de empezar. Sin costos ocultos." },
    { icon: "wrench", title: "Soporte incluido", desc: "30 días de ajustes y soporte después del lanzamiento." },
  ],

  techFeatures: [
    { icon: "search", title: "SEO técnico", desc: "Estructura, velocidad y datos para Google" },
    { icon: "sparkles", title: "Listo para búsquedas con IA", desc: "Datos estructurados que ChatGPT y Google leen" },
    { icon: "smartphone", title: "100% responsive", desc: "Diseñado primero para celular" },
    { icon: "lock", title: "SSL y hosting", desc: "Certificado de seguridad incluido" },
  ],

  stats: [
    { stat: "97%", desc: "de los consumidores buscan negocios en internet antes de comprar", source: "BrightLocal, Local Consumer Review Survey", icon: "search" },
    { stat: "75%", desc: "juzgan la credibilidad de un negocio por el diseño de su sitio web", source: "Stanford Web Credibility Research", icon: "eye" },
    { stat: "88%", desc: "confían en reseñas en línea tanto como en recomendaciones personales", source: "BrightLocal, Local Consumer Review Survey", icon: "star" },
    { stat: "53%", desc: "abandonan un sitio móvil si tarda más de 3 segundos en cargar", source: "Google / SOASTA Research", icon: "gauge" },
  ],

  pricing: {
    landing: {
      id: "landing",
      icon: "layout",
      title: "Landing Page",
      time: "1 a 3 días",
      description: "Una página de alto impacto para captar clientes. Para campañas, lanzamientos o presencia básica.",
      price: "₡100.000",
      priceNumeric: 100000,
      currency: "CRC",
      priceNote: "pago único",
      features: [
        "Diseño a medida y responsive",
        "Hasta 5 secciones",
        "Formulario de contacto y botón de WhatsApp",
        "SEO técnico y datos estructurados",
        "Perfil de Google Business y Search Console",
        "Hosting y SSL el primer año",
        "30 días de soporte",
      ],
      idealFor: "Profesionales independientes, campañas, lanzamientos",
      cta: "Cotizar Landing Page",
      popular: false,
    },
    catalog: {
      id: "catalog",
      icon: "layers",
      title: "Sitio Catálogo",
      time: "3 a 7 días",
      description: "Sitio completo para mostrar productos, servicios, tours o habitaciones. Varias páginas y galerías.",
      price: "₡200.000",
      priceNumeric: 200000,
      currency: "CRC",
      priceNote: "pago único",
      features: [
        "Todo lo de Landing Page",
        "Hasta 10 páginas",
        "Galería de productos o servicios",
        "Blog opcional",
        "Panel para editar contenido",
        "Varios formularios",
        "Español e inglés opcional",
      ],
      idealFor: "Hoteles, tours, restaurantes, servicios profesionales, bienes raíces",
      cta: "Cotizar Sitio Catálogo",
      popular: true,
    },
    ecommerce: {
      id: "ecommerce",
      icon: "cart",
      title: "Tienda en línea",
      time: "7 a 10 días",
      description: "Tienda completa con carrito, pagos en línea y gestión de inventario.",
      price: "₡300.000",
      priceNumeric: 300000,
      currency: "CRC",
      priceNote: "más mantenimiento mensual",
      features: [
        "Todo lo de Sitio Catálogo",
        "Carrito de compras",
        "Pagos con SINPE Móvil o tarjeta",
        "Gestión de inventario",
        "Notificaciones de pedidos",
        "Panel de ventas",
        "Mantenimiento mensual incluido",
      ],
      idealFor: "Tiendas de ropa, productos artesanales, cualquier negocio con ventas en línea",
      cta: "Cotizar Tienda",
      popular: false,
    },
  },

  pricingNotes: {
    title: "Cómo funcionan los precios",
    factorsTitle: "El precio final sube según",
    factors: [
      "Número de páginas o productos",
      "Contenido: si redactamos textos o editamos fotos",
      "Integraciones: reservas, pagos, mapas, calendarios",
      "Segundo idioma",
      "Funciones a medida (sistemas de reservas, dashboards)",
    ],
    notIncludedTitle: "Pagás aparte, directo al proveedor",
    notIncluded: [
      "Dominio (tunegocio.com): aprox. $12 a $15 por año",
      "Correo profesional (info@tunegocio.com): desde $6 por cuenta al mes",
      "Hosting después del primer año: aprox. $5 a $10 al mes",
    ],
    guarantee: "Te enviamos una cotización cerrada en menos de 24 horas. El precio que aceptás es el precio que pagás.",
  },

  visibility: {
    badge: "Incluido en todos los planes",
    title: "Que te encuentren en Google, en Maps",
    titleHighlight: "y en las respuestas de la IA.",
    description:
      "Una página que nadie encuentra no sirve. Por eso cada sitio sale con su presencia digital completa configurada, no solo el diseño.",
    items: [
      { icon: "mapPin", title: "Perfil de Google Business", desc: "Aparecés en Google Maps y en el panel local con horario, fotos, reseñas y enlace a tu sitio." },
      { icon: "search", title: "Google Search Console", desc: "Sitemap enviado e indexación verificada. Sabés con qué búsquedas te encuentran." },
      { icon: "compass", title: "Bing Places y Apple Business Connect", desc: "Tu negocio en los mapas de Apple, en Bing y en los asistentes que usan esos datos, como Siri y Copilot." },
      { icon: "sparkles", title: "Datos estructurados para IA", desc: "Marcado schema.org de negocio, servicios, precios y preguntas frecuentes para que ChatGPT, Gemini y Google AI te citen correctamente." },
      { icon: "barChart", title: "Google Analytics", desc: "Cuántas personas te visitan, de dónde vienen y qué hacen en tu sitio." },
      { icon: "gauge", title: "Velocidad y Core Web Vitals", desc: "Sitios que cargan en menos de 2 segundos en celular, el factor que Google mide primero." },
    ],
    footnote: "La configuración de Google Business, Search Console, Bing y Apple se hace con vos, en tu propia cuenta. Los perfiles son tuyos, no nuestros.",
  },

  differences: [
    { icon: "clock", title: "Entrega en días, no meses", desc: "Landing pages en 1 a 3 días. Sitios catálogo en 3 a 7. Tiendas en 7 a 10. Máximo 10 días hábiles." },
    { icon: "eye", title: "Ves el avance en tu celular", desc: "Te compartimos un enlace privado de vista previa con cada cambio. Comentás por WhatsApp y ajustamos el mismo día." },
    { icon: "messageCircle", title: "Hablás con quien construye tu sitio", desc: "Sin ejecutivos de cuenta ni intermediarios. Una sola persona de contacto de principio a fin." },
    { icon: "wallet", title: "Precio cerrado antes de empezar", desc: "Cotización fija por escrito. Si el alcance cambia, lo acordamos antes, nunca después." },
    { icon: "shield", title: "El sitio es tuyo", desc: "Dominio, cuentas y código a tu nombre. Si un día querés cambiar de proveedor, te llevás todo." },
    { icon: "wrench", title: "Soporte después del lanzamiento", desc: "30 días de ajustes incluidos. Después, mantenimiento opcional o cambios puntuales cotizados." },
  ],

  industries: [
    { icon: "building", name: "Hoteles" },
    { icon: "palmtree", name: "Tours" },
    { icon: "utensils", name: "Restaurantes" },
    { icon: "home", name: "Bienes raíces" },
    { icon: "dumbbell", name: "Gimnasios" },
    { icon: "stethoscope", name: "Clínicas" },
    { icon: "camera", name: "Fotógrafos" },
    { icon: "scale", name: "Abogados" },
    { icon: "scissors", name: "Barberías" },
    { icon: "car", name: "Talleres" },
    { icon: "penTool", name: "Diseñadores" },
    { icon: "store", name: "Tiendas" },
  ],

  technologies: [
    { name: "Next.js", role: "Framework" },
    { name: "React", role: "Interfaz" },
    { name: "TypeScript", role: "Código" },
    { name: "Tailwind CSS", role: "Diseño" },
    { name: "Vercel", role: "Hosting" },
    { name: "Supabase", role: "Base de datos" },
  ],

  process: [
    { step: "01", title: "Hablamos", desc: "Una llamada o chat de 20 minutos para entender tu negocio y qué necesitás.", icon: "messageCircle" },
    { step: "02", title: "Cotizamos", desc: "Propuesta con alcance, plazo y precio cerrado en menos de 24 horas.", icon: "clipboard" },
    { step: "03", title: "Construimos", desc: "Ves cada avance en un enlace privado y comentás por WhatsApp.", icon: "code" },
    { step: "04", title: "Publicamos", desc: "Sitio en línea con dominio, Google Business y Search Console configurados.", icon: "rocket" },
  ],

  audit: {
    badge: "Revisión sin costo",
    title: "¿Ya tenés página web?",
    titleHighlight: "Te decimos qué está fallando.",
    description: "Revisamos tu sitio actual y te enviamos un informe corto con lo que está frenando tus visitas y contactos.",
    items: ["Velocidad de carga en celular", "Cómo te ve Google y si estás indexado", "Experiencia en móvil", "Claridad del mensaje y llamados a la acción", "Recomendaciones concretas, en orden de prioridad"],
    cta: "Pedir revisión gratis",
    reportTitle: "Qué revisamos",
    reportDesc: "Te entregamos un informe con:",
    checks: [
      { icon: "gauge", title: "Velocidad", desc: "Tiempo de carga real en celular y qué lo frena." },
      { icon: "smartphone", title: "Móvil", desc: "Más del 70% de las visitas en Costa Rica llegan desde el celular." },
      { icon: "search", title: "Google", desc: "Si estás indexado, qué títulos muestra y qué errores detecta." },
      { icon: "target", title: "Conversión", desc: "Si el visitante entiende en 5 segundos qué hacés y cómo contactarte." },
    ],
    free: "Sin costo y sin compromiso",
    freeNote: "Si tu sitio está bien, te lo decimos igual.",
  },

  faq: [
    {
      q: "¿Cuánto cuesta una página web en Costa Rica?",
      a: "En MaxDigitalCR una landing page cuesta desde ₡100.000, un sitio catálogo desde ₡200.000 y una tienda en línea desde ₡300.000 más mantenimiento mensual. El precio final depende del número de páginas, el contenido y las integraciones. Recibís una cotización cerrada en menos de 24 horas.",
    },
    {
      q: "¿Cuánto tiempo tarda en estar lista mi página?",
      a: "Entre 1 y 10 días hábiles según el tipo de sitio: landing pages en 1 a 3 días, sitios catálogo en 3 a 7 días y tiendas en línea en 7 a 10 días. El plazo empieza a correr cuando recibimos tus textos, fotos y logo.",
    },
    {
      q: "¿Qué incluye el precio?",
      a: "Diseño a medida, desarrollo, hosting y certificado SSL el primer año, formulario de contacto, botón de WhatsApp, SEO técnico, datos estructurados, configuración de Google Business Profile, Google Search Console y Google Analytics, y 30 días de soporte después del lanzamiento.",
    },
    {
      q: "¿Qué no incluye el precio?",
      a: "El dominio (aprox. $12 a $15 al año) y el correo profesional (desde $6 por cuenta al mes) los pagás directamente al proveedor, a tu nombre. Después del primer año el hosting cuesta aprox. $5 a $10 al mes. Te ayudamos a configurar todo.",
    },
    {
      q: "¿La página va a ser mía o de ustedes?",
      a: "Tuya. El dominio, las cuentas de Google y el hosting se registran a tu nombre. Si un día querés trabajar con otro proveedor, te llevás todo sin depender de nosotros.",
    },
    {
      q: "¿Qué pasa si no me gusta el diseño?",
      a: "Ves cada avance en un enlace privado desde tu celular y comentás por WhatsApp. Ajustamos hasta que el resultado sea el que buscás. Las revisiones durante el desarrollo están incluidas en el precio.",
    },
    {
      q: "¿Puedo hacer cambios después de que la página esté publicada?",
      a: "Sí. Los primeros 30 días de ajustes están incluidos. Después podés contratar un plan de mantenimiento mensual o pedir cambios puntuales, que se cotizan por separado. En sitios catálogo también te dejamos un panel para editar textos y fotos por tu cuenta.",
    },
    {
      q: "¿Necesito saber de tecnología?",
      a: "No. Nos encargamos del dominio, el hosting, la seguridad y las cuentas de Google. Vos aportás la información de tu negocio, fotos y logo; el resto lo hacemos nosotros.",
    },
    {
      q: "¿Cómo hacen para que mi negocio aparezca en Google Maps y en ChatGPT?",
      a: "Configuramos tu perfil de Google Business, Bing Places y Apple Business Connect con los mismos datos que tu sitio, enviamos el sitemap a Google y Bing, y agregamos datos estructurados schema.org de negocio, servicios, precios y preguntas frecuentes. Esa consistencia es lo que Google, ChatGPT, Gemini y Perplexity usan para citarte.",
    },
    {
      q: "¿Trabajan con negocios fuera de La Fortuna?",
      a: "Sí. Estamos en La Fortuna de San Carlos y trabajamos con clientes de todo Costa Rica de forma remota. Todo el proceso se hace por WhatsApp, videollamada y enlaces de vista previa.",
    },
    {
      q: "¿Qué métodos de pago aceptan?",
      a: "SINPE Móvil y transferencia bancaria. Se paga un 50% al iniciar y el 50% restante al publicar el sitio. Para tiendas en línea configuramos el procesador de pagos que prefieras para tus propios clientes.",
    },
    {
      q: "¿Con qué tecnología construyen los sitios?",
      a: "Con Next.js, React y TypeScript, alojados en Vercel. Es la misma base técnica que usan empresas como Netflix, Nike y TikTok para sus sitios, y permite páginas rápidas, seguras y fáciles de indexar, sin plugins que se rompen ni actualizaciones constantes.",
    },
  ],

  cta: {
    title: "¿Listo para empezar?",
    description: "Contanos qué hace tu negocio y te enviamos una cotización cerrada en menos de 24 horas.",
    cta: "Cotizar mi página",
  },
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------
export const homeDataEN: HomeData = {
  hero: {
    badge: "Web development in La Fortuna, Costa Rica",
    title: "Websites for Costa Rican businesses",
    titleHighlight: "that need more customers.",
    description:
      "We design, build and publish your site in 1 to 10 business days. Fixed price from $200, with Google Business Profile, Search Console and 30 days of support included.",
    cta: "Get a quote",
    ctaSecondary: "See sites we have built",
    proof: ["7 sites in production", "Delivered in 1 to 10 business days", "Reply within 24 hours"],
  },

  services: [
    { icon: "layout", title: "Landing page", desc: "A single page focused on getting you contacted. For campaigns, launches or independent professionals." },
    { icon: "layers", title: "Catalog site", desc: "Several pages to show products, services, tours or rooms, with galleries and forms." },
    { icon: "cart", title: "Online store", desc: "Cart, SINPE or card payments, inventory and order notifications." },
  ],

  quickFeatures: [
    { icon: "clock", title: "1 to 10 business days", desc: "Your site published in days. Landing pages in 1 to 3 days." },
    { icon: "wallet", title: "From $200", desc: "Fixed price before we start. No hidden costs." },
    { icon: "wrench", title: "Support included", desc: "30 days of adjustments and support after launch." },
  ],

  techFeatures: [
    { icon: "search", title: "Technical SEO", desc: "Structure, speed and data for Google" },
    { icon: "sparkles", title: "Ready for AI search", desc: "Structured data ChatGPT and Google can read" },
    { icon: "smartphone", title: "100% responsive", desc: "Designed mobile-first" },
    { icon: "lock", title: "SSL and hosting", desc: "Security certificate included" },
  ],

  stats: [
    { stat: "97%", desc: "of consumers search for businesses online before buying", source: "BrightLocal, Local Consumer Review Survey", icon: "search" },
    { stat: "75%", desc: "judge a business's credibility by its website design", source: "Stanford Web Credibility Research", icon: "eye" },
    { stat: "88%", desc: "trust online reviews as much as personal recommendations", source: "BrightLocal, Local Consumer Review Survey", icon: "star" },
    { stat: "53%", desc: "leave a mobile site if it takes more than 3 seconds to load", source: "Google / SOASTA Research", icon: "gauge" },
  ],

  pricing: {
    landing: {
      id: "landing",
      icon: "layout",
      title: "Landing Page",
      time: "1 to 3 days",
      description: "A high-impact page to capture clients. For campaigns, launches or a basic presence.",
      price: "$200",
      priceNumeric: 200,
      currency: "USD",
      priceNote: "one-time payment",
      features: [
        "Custom responsive design",
        "Up to 5 sections",
        "Contact form and WhatsApp button",
        "Technical SEO and structured data",
        "Google Business Profile and Search Console",
        "Hosting and SSL for the first year",
        "30 days of support",
      ],
      idealFor: "Independent professionals, campaigns, launches",
      cta: "Quote Landing Page",
      popular: false,
    },
    catalog: {
      id: "catalog",
      icon: "layers",
      title: "Catalog Site",
      time: "3 to 7 days",
      description: "Complete site to show products, services, tours or rooms. Multiple pages and galleries.",
      price: "$400",
      priceNumeric: 400,
      currency: "USD",
      priceNote: "one-time payment",
      features: [
        "Everything in Landing Page",
        "Up to 10 pages",
        "Product or service gallery",
        "Optional blog",
        "Panel to edit content",
        "Multiple forms",
        "Spanish and English optional",
      ],
      idealFor: "Hotels, tours, restaurants, professional services, real estate",
      cta: "Quote Catalog Site",
      popular: true,
    },
    ecommerce: {
      id: "ecommerce",
      icon: "cart",
      title: "Online Store",
      time: "7 to 10 days",
      description: "Complete store with cart, online payments and inventory management.",
      price: "$600",
      priceNumeric: 600,
      currency: "USD",
      priceNote: "plus monthly maintenance",
      features: [
        "Everything in Catalog Site",
        "Shopping cart",
        "SINPE Móvil or card payments",
        "Inventory management",
        "Order notifications",
        "Sales dashboard",
        "Monthly maintenance included",
      ],
      idealFor: "Clothing stores, handmade products, any business selling online",
      cta: "Quote Store",
      popular: false,
    },
  },

  pricingNotes: {
    title: "How pricing works",
    factorsTitle: "The final price goes up with",
    factors: [
      "Number of pages or products",
      "Content: if we write copy or edit photos",
      "Integrations: bookings, payments, maps, calendars",
      "A second language",
      "Custom features (booking systems, dashboards)",
    ],
    notIncludedTitle: "Paid separately, directly to the provider",
    notIncluded: [
      "Domain (yourbusiness.com): approx. $12 to $15 per year",
      "Business email (info@yourbusiness.com): from $6 per account per month",
      "Hosting after the first year: approx. $5 to $10 per month",
    ],
    guarantee: "You get a fixed quote within 24 hours. The price you accept is the price you pay.",
  },

  visibility: {
    badge: "Included in every plan",
    title: "Be found on Google, on Maps",
    titleHighlight: "and in AI answers.",
    description: "A website nobody finds is useless. That is why every site ships with its full digital presence configured, not just the design.",
    items: [
      { icon: "mapPin", title: "Google Business Profile", desc: "You appear on Google Maps and in the local panel with hours, photos, reviews and a link to your site." },
      { icon: "search", title: "Google Search Console", desc: "Sitemap submitted and indexing verified. You know which searches bring people to you." },
      { icon: "compass", title: "Bing Places and Apple Business Connect", desc: "Your business on Apple Maps, on Bing and in the assistants that use that data, like Siri and Copilot." },
      { icon: "sparkles", title: "Structured data for AI", desc: "Schema.org markup for business, services, prices and FAQs so ChatGPT, Gemini and Google AI cite you correctly." },
      { icon: "barChart", title: "Google Analytics", desc: "How many people visit you, where they come from and what they do on your site." },
      { icon: "gauge", title: "Speed and Core Web Vitals", desc: "Sites that load in under 2 seconds on mobile, the first thing Google measures." },
    ],
    footnote: "Google Business, Search Console, Bing and Apple are set up with you, in your own account. The profiles are yours, not ours.",
  },

  differences: [
    { icon: "clock", title: "Delivered in days, not months", desc: "Landing pages in 1 to 3 days. Catalog sites in 3 to 7. Stores in 7 to 10. Never more than 10 business days." },
    { icon: "eye", title: "See progress on your phone", desc: "We share a private preview link with every change. You comment on WhatsApp and we adjust the same day." },
    { icon: "messageCircle", title: "Talk to the person building your site", desc: "No account executives or middlemen. One point of contact from start to finish." },
    { icon: "wallet", title: "Fixed price before we start", desc: "Written fixed quote. If the scope changes, we agree on it before, never after." },
    { icon: "shield", title: "The site is yours", desc: "Domain, accounts and code in your name. If you ever switch providers, you take everything with you." },
    { icon: "wrench", title: "Support after launch", desc: "30 days of adjustments included. Then optional maintenance or quoted one-off changes." },
  ],

  industries: [
    { icon: "building", name: "Hotels" },
    { icon: "palmtree", name: "Tours" },
    { icon: "utensils", name: "Restaurants" },
    { icon: "home", name: "Real estate" },
    { icon: "dumbbell", name: "Gyms" },
    { icon: "stethoscope", name: "Clinics" },
    { icon: "camera", name: "Photographers" },
    { icon: "scale", name: "Lawyers" },
    { icon: "scissors", name: "Barbershops" },
    { icon: "car", name: "Auto shops" },
    { icon: "penTool", name: "Designers" },
    { icon: "store", name: "Stores" },
  ],

  technologies: [
    { name: "Next.js", role: "Framework" },
    { name: "React", role: "Interface" },
    { name: "TypeScript", role: "Code" },
    { name: "Tailwind CSS", role: "Design" },
    { name: "Vercel", role: "Hosting" },
    { name: "Supabase", role: "Database" },
  ],

  process: [
    { step: "01", title: "We talk", desc: "A 20-minute call or chat to understand your business and what you need.", icon: "messageCircle" },
    { step: "02", title: "We quote", desc: "Proposal with scope, timeline and fixed price within 24 hours.", icon: "clipboard" },
    { step: "03", title: "We build", desc: "You see every step on a private link and comment on WhatsApp.", icon: "code" },
    { step: "04", title: "We publish", desc: "Site live with domain, Google Business and Search Console configured.", icon: "rocket" },
  ],

  audit: {
    badge: "Free review",
    title: "Already have a website?",
    titleHighlight: "We tell you what is failing.",
    description: "We review your current site and send you a short report on what is holding back your visits and inquiries.",
    items: ["Mobile load speed", "How Google sees you and whether you are indexed", "Mobile experience", "Message clarity and calls to action", "Concrete recommendations, in priority order"],
    cta: "Request free review",
    reportTitle: "What we check",
    reportDesc: "You get a report with:",
    checks: [
      { icon: "gauge", title: "Speed", desc: "Real load time on mobile and what slows it down." },
      { icon: "smartphone", title: "Mobile", desc: "Over 70% of visits in Costa Rica come from phones." },
      { icon: "search", title: "Google", desc: "Whether you are indexed, what titles show and what errors it finds." },
      { icon: "target", title: "Conversion", desc: "Whether a visitor understands in 5 seconds what you do and how to reach you." },
    ],
    free: "No cost, no commitment",
    freeNote: "If your site is fine, we tell you that too.",
  },

  faq: [
    { q: "How much does a website cost in Costa Rica?", a: "At MaxDigitalCR a landing page starts at $200, a catalog site at $400 and an online store at $600 plus monthly maintenance. The final price depends on the number of pages, content and integrations. You get a fixed quote within 24 hours." },
    { q: "How long until my site is ready?", a: "Between 1 and 10 business days depending on the type: landing pages in 1 to 3 days, catalog sites in 3 to 7 days and online stores in 7 to 10 days. The clock starts when we receive your copy, photos and logo." },
    { q: "What does the price include?", a: "Custom design, development, hosting and SSL certificate for the first year, contact form, WhatsApp button, technical SEO, structured data, Google Business Profile, Google Search Console and Google Analytics setup, and 30 days of post-launch support." },
    { q: "What is not included?", a: "The domain (approx. $12 to $15 per year) and business email (from $6 per account per month) are paid directly to the provider, in your name. After the first year hosting costs approx. $5 to $10 per month. We help you set everything up." },
    { q: "Will the site be mine or yours?", a: "Yours. The domain, Google accounts and hosting are registered in your name. If you ever want to work with another provider, you take everything with you." },
    { q: "What if I do not like the design?", a: "You see every step on a private link from your phone and comment on WhatsApp. We adjust until the result is what you are after. Revisions during development are included in the price." },
    { q: "Can I make changes after the site is published?", a: "Yes. The first 30 days of adjustments are included. After that you can hire a monthly maintenance plan or request one-off changes, quoted separately. On catalog sites we also give you a panel to edit text and photos yourself." },
    { q: "Do I need to know about technology?", a: "No. We handle the domain, hosting, security and Google accounts. You provide your business information, photos and logo; we do the rest." },
    { q: "How do you get my business to show up on Google Maps and in ChatGPT?", a: "We set up your Google Business Profile, Bing Places and Apple Business Connect with the same data as your site, submit the sitemap to Google and Bing, and add schema.org structured data for business, services, prices and FAQs. That consistency is what Google, ChatGPT, Gemini and Perplexity use to cite you." },
    { q: "Do you work with businesses outside La Fortuna?", a: "Yes. We are based in La Fortuna de San Carlos and work remotely with clients across Costa Rica and abroad. The whole process runs on WhatsApp, video calls and preview links." },
    { q: "What payment methods do you accept?", a: "SINPE Móvil, bank transfer and PayPal for international clients. 50% to start and the remaining 50% when the site goes live. For online stores we configure the payment processor you prefer for your own customers." },
    { q: "What technology do you build with?", a: "Next.js, React and TypeScript, hosted on Vercel. It is the same technical base companies like Netflix, Nike and TikTok use for their sites, and it produces fast, secure pages that are easy to index, with no plugins that break or constant updates." },
  ],

  cta: {
    title: "Ready to start?",
    description: "Tell us what your business does and we will send a fixed quote within 24 hours.",
    cta: "Get a quote",
  },
};

export function getHomeData(lang: "es" | "en"): HomeData {
  return lang === "en" ? homeDataEN : homeDataES;
}
