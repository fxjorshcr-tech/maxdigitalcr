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
  fromPrice: { crc: 100000, usd: 200, crcLabel: "₡100.000", usdLabel: "$200" },
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
  /** 1. Asesoría empresarial */
  advisory: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    steps: { title: string; desc: string; icon: IconName }[];
    quote: string;
    quoteBy: string;
  };
  /** 3. La nueva forma de aparecer */
  visibility: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: FeatureItem[];
    footnote: string;
  };
  /** 4. Tecnología, tiempo y precio accesible */
  offer: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    pillars: { icon: IconName; label: string; value: string; desc: string }[];
    from: string;
    fromNote: string;
    cta: string;
    types: FeatureItem[];
  };
  /** 5. Acompañamiento y asesoría técnica */
  support: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: FeatureItem[];
  };
  /** 6. Hablemos por todo lado */
  talk: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    whatsapp: string;
    whatsappDesc: string;
    email: string;
    emailDesc: string;
    form: string;
    formDesc: string;
    social: string;
    socialDesc: string;
    response: string;
  };
  stats: { stat: string; desc: string; source: string; icon: IconName }[];
  services: FeatureItem[];
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
    title: "Tu negocio, bien puesto",
    titleHighlight: "en internet.",
    description:
      "Escuchamos qué querés lograr, te recomendamos qué sitio te conviene y lo construimos en días, con la tecnología de los sitios grandes y un precio pensado para negocios de Costa Rica.",
    cta: "Hablemos",
    ctaSecondary: "Ver sitios que hemos hecho",
    proof: ["7 sitios en producción", "Entrega en días, no meses", "Desde ₡100.000"],
  },

  advisory: {
    badge: "Asesoría empresarial",
    title: "Primero escuchamos.",
    titleHighlight: "Después recomendamos.",
    description:
      "No vendemos plantillas. Antes de diseñar nada, entendemos tu negocio, tus clientes y cómo te compran. Con eso te decimos qué tipo de sitio necesitás, qué no necesitás y en qué orden conviene hacerlo.",
    steps: [
      { icon: "messageCircle", title: "Nos contás tu negocio", desc: "Qué vendés, a quién, cómo te contactan hoy y qué querés que cambie." },
      { icon: "target", title: "Te damos una recomendación honesta", desc: "Qué páginas, qué funciones y qué canales. Si algo no lo necesitás, te lo decimos." },
      { icon: "clipboard", title: "Plan claro con precio cerrado", desc: "Alcance, plazo y costo por escrito en menos de 24 horas." },
    ],
    quote: "La mayoría de los negocios no necesita un sitio más grande. Necesita uno que la gente encuentre y entienda en cinco segundos.",
    quoteBy: "Nuestra regla número uno",
  },

  visibility: {
    badge: "La nueva forma de aparecer",
    title: "Google, Apple, Bing",
    titleHighlight: "y las respuestas de la IA.",
    description:
      "Hoy tus clientes no solo buscan en Google. Preguntan a Siri, a ChatGPT, a Copilot. Cada sitio que hacemos sale con su presencia completa configurada para que aparezcas en todos esos lugares con los mismos datos.",
    items: [
      { icon: "mapPin", title: "Google Business Profile", desc: "Google Maps, el panel local, reseñas y enlace a tu sitio. Lo que ve alguien que busca tu rubro cerca." },
      { icon: "compass", title: "Apple Business Connect", desc: "Apple Maps y Siri en todos los iPhone. La mayoría de turistas que llegan a Costa Rica usa iPhone." },
      { icon: "globe", title: "Bing Places", desc: "Alimenta a Copilot y a la búsqueda de ChatGPT. Sin esto, no existís para esos asistentes." },
      { icon: "sparkles", title: "Optimización para búsquedas con IA", desc: "Datos estructurados y contenido que ChatGPT, Gemini y Perplexity pueden leer, entender y citar." },
      { icon: "search", title: "Google Search Console", desc: "Indexación verificada y visibilidad de con qué búsquedas te encuentran." },
      { icon: "barChart", title: "Google Analytics", desc: "Cuánta gente te visita, de dónde viene y qué hace en tu sitio." },
    ],
    footnote: "Todo se configura en tus propias cuentas. Los perfiles son tuyos.",
  },

  offer: {
    badge: "Calidad, tiempo y precio",
    title: "Tecnología de primer nivel,",
    titleHighlight: "a precio de negocio local.",
    description:
      "Usamos la misma base técnica que sitios de alto tráfico para entregar páginas rápidas, seguras y fáciles de encontrar. En días o semanas, no meses. Y con un precio accesible para negocios en Costa Rica.",
    pillars: [
      { icon: "code", label: "Tecnología", value: "Next.js y React", desc: "Sitios que cargan en menos de 2 segundos, sin plugins que se rompen." },
      { icon: "clock", label: "Tiempo", value: "Días, no meses", desc: "Landing pages en 1 a 3 días. Sitios completos en 1 a 2 semanas." },
      { icon: "wallet", label: "Precio", value: "Desde ₡100.000", desc: "Cotización cerrada antes de empezar. Sin sorpresas." },
    ],
    from: "₡100.000",
    fromNote: "Precio de partida para una landing page. El costo final depende de páginas, contenido e integraciones. Te decimos el número exacto antes de empezar.",
    cta: "Pedir cotización",
    types: [
      { icon: "layout", title: "Landing page", desc: "Una página enfocada en que te contacten. Campañas, lanzamientos, profesionales." },
      { icon: "layers", title: "Sitio completo", desc: "Varias páginas para hotel, tours, restaurante, servicios o bienes raíces." },
      { icon: "cart", title: "Tienda en línea", desc: "Carrito, pagos con SINPE o tarjeta, inventario y pedidos." },
      { icon: "compass", title: "A la medida", desc: "Sistemas de reservas, dashboards, integraciones." },
    ],
  },

  support: {
    badge: "Acompañamiento",
    title: "No te entregamos un sitio",
    titleHighlight: "y desaparecemos.",
    description:
      "Después del lanzamiento seguimos ahí. Soporte técnico constante para tu página y asesoría en todo lo que hace falta alrededor para que funcione de verdad.",
    items: [
      { icon: "wrench", title: "Soporte técnico constante", desc: "Ajustes, correcciones y dudas sobre tu sitio. Respondemos por WhatsApp." },
      { icon: "mapPin", title: "Google, Apple y Bing Business", desc: "Te ayudamos a crear, verificar y mantener los perfiles al día." },
      { icon: "star", title: "Estrategia de reseñas", desc: "Cómo pedirlas, cuándo y qué responder. Las reseñas venden por vos." },
      { icon: "search", title: "Posicionamiento", desc: "Qué contenido crear, qué directorios importan y cómo leer Search Console." },
      { icon: "shield", title: "Dominio, correo y hosting", desc: "Todo a tu nombre. Te explicamos qué pagás, a quién y por qué." },
      { icon: "refresh", title: "Mantenimiento opcional", desc: "Plan mensual si querés cambios frecuentes o una tienda que requiere monitoreo." },
    ],
  },

  talk: {
    badge: "Hablemos",
    title: "Por donde te quede",
    titleHighlight: "más cómodo.",
    description: "Contanos qué hace tu negocio. Te respondemos en menos de 24 horas con una recomendación y un precio.",
    whatsapp: "WhatsApp",
    whatsappDesc: "El más rápido. Escribinos y seguimos por ahí.",
    email: "Correo",
    emailDesc: "Para consultas más formales o enviar material.",
    form: "Formulario",
    formDesc: "Dejanos los datos y te escribimos nosotros.",
    social: "Redes",
    socialDesc: "Instagram y Facebook. Ahí publicamos cada sitio nuevo.",
    response: "Respondemos en menos de 24 horas, lunes a viernes.",
  },

  stats: [
    { stat: "97%", desc: "de los consumidores buscan negocios en internet antes de comprar", source: "BrightLocal, Local Consumer Review Survey", icon: "search" },
    { stat: "75%", desc: "juzgan la credibilidad de un negocio por el diseño de su sitio web", source: "Stanford Web Credibility Research", icon: "eye" },
    { stat: "88%", desc: "confían en reseñas en línea tanto como en recomendaciones personales", source: "BrightLocal, Local Consumer Review Survey", icon: "star" },
    { stat: "53%", desc: "abandonan un sitio móvil si tarda más de 3 segundos en cargar", source: "Google / SOASTA Research", icon: "gauge" },
  ],

  services: [
    { icon: "layout", title: "Landing page", desc: "Una sola página enfocada en que te contacten. Para campañas, lanzamientos o profesionales independientes." },
    { icon: "layers", title: "Sitio catálogo", desc: "Varias páginas para mostrar productos, servicios, tours o habitaciones, con galerías y formularios." },
    { icon: "cart", title: "Tienda en línea", desc: "Carrito, pagos con SINPE o tarjeta, inventario y notificaciones de pedidos." },
  ],

  differences: [
    { icon: "clock", title: "Entrega en días, no meses", desc: "Landing pages en 1 a 3 días. Sitios completos en 1 a 2 semanas. Tiendas en 2 semanas." },
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
    { step: "02", title: "Recomendamos", desc: "Propuesta con alcance, plazo y precio cerrado en menos de 24 horas.", icon: "clipboard" },
    { step: "03", title: "Construimos", desc: "Ves cada avance en un enlace privado y comentás por WhatsApp.", icon: "code" },
    { step: "04", title: "Publicamos y acompañamos", desc: "Sitio en línea con Google, Apple y Bing configurados. Soporte después.", icon: "rocket" },
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
      a: "En MaxDigitalCR los proyectos empiezan desde ₡100.000 para una landing page. Un sitio completo o una tienda en línea cuestan más según la cantidad de páginas, el contenido y las integraciones. Después de escuchar tu caso te enviamos una cotización cerrada en menos de 24 horas.",
    },
    {
      q: "¿Cuánto tiempo tarda en estar lista mi página?",
      a: "Entre días y un par de semanas según el tipo de sitio: landing pages en 1 a 3 días, sitios completos en 1 a 2 semanas y tiendas en línea en unas 2 semanas. El plazo empieza a correr cuando recibimos tus textos, fotos y logo.",
    },
    {
      q: "¿Qué incluye el precio?",
      a: "Asesoría inicial, diseño a medida, desarrollo, hosting y certificado SSL el primer año, formulario de contacto, botón de WhatsApp, SEO técnico, datos estructurados, configuración de Google Business Profile, Search Console y Google Analytics, y 30 días de soporte después del lanzamiento.",
    },
    {
      q: "¿Qué no incluye el precio?",
      a: "El dominio (aprox. $12 a $15 al año) y el correo profesional (desde $6 por cuenta al mes) los pagás directamente al proveedor, a tu nombre. Después del primer año el hosting cuesta aprox. $5 a $10 al mes. Te ayudamos a configurar todo.",
    },
    {
      q: "¿Me ayudan a decidir qué tipo de página necesito?",
      a: "Sí, es lo primero que hacemos. Escuchamos qué vendés, a quién y cómo te contactan hoy, y te recomendamos qué sitio te conviene. Si con una landing page te alcanza, te lo decimos aunque cueste menos.",
    },
    {
      q: "¿La página va a ser mía o de ustedes?",
      a: "Tuya. El dominio, las cuentas de Google, Apple y Bing y el hosting se registran a tu nombre. Si un día querés trabajar con otro proveedor, te llevás todo sin depender de nosotros.",
    },
    {
      q: "¿Qué pasa si no me gusta el diseño?",
      a: "Ves cada avance en un enlace privado desde tu celular y comentás por WhatsApp. Ajustamos hasta que el resultado sea el que buscás. Las revisiones durante el desarrollo están incluidas en el precio.",
    },
    {
      q: "¿Puedo hacer cambios después de que la página esté publicada?",
      a: "Sí. Los primeros 30 días de ajustes están incluidos. Después podés contratar un plan de mantenimiento mensual o pedir cambios puntuales, que se cotizan por separado. En sitios completos también te dejamos un panel para editar textos y fotos por tu cuenta.",
    },
    {
      q: "¿Necesito saber de tecnología?",
      a: "No. Nos encargamos del dominio, el hosting, la seguridad y las cuentas de Google, Apple y Bing. Vos aportás la información de tu negocio, fotos y logo; el resto lo hacemos nosotros.",
    },
    {
      q: "¿Cómo hacen para que mi negocio aparezca en Google Maps, en Siri y en ChatGPT?",
      a: "Configuramos tu perfil de Google Business, Apple Business Connect y Bing Places con los mismos datos que tu sitio, enviamos el sitemap a Google y Bing, y agregamos datos estructurados schema.org de negocio, servicios y preguntas frecuentes. Esa consistencia es lo que Google, Siri, ChatGPT, Gemini y Perplexity usan para recomendarte.",
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
    title: "Hablemos de tu negocio.",
    description: "Contanos qué hacés y qué querés lograr. Te respondemos en menos de 24 horas con una recomendación y un precio cerrado.",
    cta: "Hablemos",
  },
};

// ---------------------------------------------------------------------------
// ENGLISH
// ---------------------------------------------------------------------------
export const homeDataEN: HomeData = {
  hero: {
    badge: "Web development in La Fortuna, Costa Rica",
    title: "Your business, properly",
    titleHighlight: "on the internet.",
    description:
      "We listen to what you want to achieve, recommend the site that fits and build it in days, with the technology big sites use and a price made for businesses in Costa Rica.",
    cta: "Let's talk",
    ctaSecondary: "See sites we have built",
    proof: ["7 sites in production", "Delivered in days, not months", "From $200"],
  },

  advisory: {
    badge: "Business advisory",
    title: "First we listen.",
    titleHighlight: "Then we recommend.",
    description:
      "We do not sell templates. Before designing anything we understand your business, your customers and how they buy from you. Then we tell you what kind of site you need, what you do not need, and in what order to do it.",
    steps: [
      { icon: "messageCircle", title: "You tell us about your business", desc: "What you sell, to whom, how people reach you today and what you want to change." },
      { icon: "target", title: "We give an honest recommendation", desc: "Which pages, which features, which channels. If you do not need something, we say so." },
      { icon: "clipboard", title: "Clear plan with a fixed price", desc: "Scope, timeline and cost in writing within 24 hours." },
    ],
    quote: "Most businesses do not need a bigger website. They need one people can find and understand in five seconds.",
    quoteBy: "Our number one rule",
  },

  visibility: {
    badge: "The new way to show up",
    title: "Google, Apple, Bing",
    titleHighlight: "and AI answers.",
    description:
      "Your customers no longer search only on Google. They ask Siri, ChatGPT, Copilot. Every site we build ships with its full presence configured so you appear in all those places with the same data.",
    items: [
      { icon: "mapPin", title: "Google Business Profile", desc: "Google Maps, the local panel, reviews and a link to your site. What someone searching your trade nearby sees." },
      { icon: "compass", title: "Apple Business Connect", desc: "Apple Maps and Siri on every iPhone. Most tourists arriving in Costa Rica use an iPhone." },
      { icon: "globe", title: "Bing Places", desc: "Feeds Copilot and ChatGPT search. Without it, you do not exist for those assistants." },
      { icon: "sparkles", title: "AI search optimization", desc: "Structured data and content that ChatGPT, Gemini and Perplexity can read, understand and cite." },
      { icon: "search", title: "Google Search Console", desc: "Verified indexing and visibility into which searches bring people to you." },
      { icon: "barChart", title: "Google Analytics", desc: "How many people visit, where they come from and what they do on your site." },
    ],
    footnote: "Everything is set up in your own accounts. The profiles are yours.",
  },

  offer: {
    badge: "Quality, time and price",
    title: "First-class technology,",
    titleHighlight: "at a local business price.",
    description:
      "We use the same technical base as high-traffic sites to deliver fast, secure pages that are easy to find. In days or weeks, not months. At a price businesses in Costa Rica can afford.",
    pillars: [
      { icon: "code", label: "Technology", value: "Next.js and React", desc: "Sites that load in under 2 seconds, no plugins that break." },
      { icon: "clock", label: "Time", value: "Days, not months", desc: "Landing pages in 1 to 3 days. Full sites in 1 to 2 weeks." },
      { icon: "wallet", label: "Price", value: "From $200", desc: "Fixed quote before we start. No surprises." },
    ],
    from: "$200",
    fromNote: "Starting price for a landing page. The final cost depends on pages, content and integrations. We tell you the exact number before we start.",
    cta: "Request a quote",
    types: [
      { icon: "layout", title: "Landing page", desc: "One page focused on getting you contacted. Campaigns, launches, professionals." },
      { icon: "layers", title: "Full website", desc: "Several pages for a hotel, tours, restaurant, services or real estate." },
      { icon: "cart", title: "Online store", desc: "Cart, SINPE or card payments, inventory and orders." },
      { icon: "compass", title: "Custom", desc: "Booking systems, dashboards, integrations." },
    ],
  },

  support: {
    badge: "Ongoing support",
    title: "We do not hand over a site",
    titleHighlight: "and disappear.",
    description:
      "After launch we stay around. Constant technical support for your site and advice on everything around it that makes it actually work.",
    items: [
      { icon: "wrench", title: "Constant technical support", desc: "Adjustments, fixes and questions about your site. We answer on WhatsApp." },
      { icon: "mapPin", title: "Google, Apple and Bing Business", desc: "We help you create, verify and keep the profiles up to date." },
      { icon: "star", title: "Review strategy", desc: "How to ask, when, and what to reply. Reviews sell for you." },
      { icon: "search", title: "Ranking", desc: "What content to create, which directories matter and how to read Search Console." },
      { icon: "shield", title: "Domain, email and hosting", desc: "All in your name. We explain what you pay, to whom and why." },
      { icon: "refresh", title: "Optional maintenance", desc: "Monthly plan if you want frequent changes or run a store that needs monitoring." },
    ],
  },

  talk: {
    badge: "Let's talk",
    title: "Whichever way",
    titleHighlight: "suits you best.",
    description: "Tell us what your business does. We reply within 24 hours with a recommendation and a price.",
    whatsapp: "WhatsApp",
    whatsappDesc: "The fastest. Write to us and we continue there.",
    email: "Email",
    emailDesc: "For more formal inquiries or sending material.",
    form: "Form",
    formDesc: "Leave your details and we write to you.",
    social: "Social",
    socialDesc: "Instagram and Facebook. We post every new site there.",
    response: "We reply within 24 hours, Monday to Friday.",
  },

  stats: [
    { stat: "97%", desc: "of consumers search for businesses online before buying", source: "BrightLocal, Local Consumer Review Survey", icon: "search" },
    { stat: "75%", desc: "judge a business's credibility by its website design", source: "Stanford Web Credibility Research", icon: "eye" },
    { stat: "88%", desc: "trust online reviews as much as personal recommendations", source: "BrightLocal, Local Consumer Review Survey", icon: "star" },
    { stat: "53%", desc: "leave a mobile site if it takes more than 3 seconds to load", source: "Google / SOASTA Research", icon: "gauge" },
  ],

  services: [
    { icon: "layout", title: "Landing page", desc: "A single page focused on getting you contacted. For campaigns, launches or independent professionals." },
    { icon: "layers", title: "Catalog site", desc: "Several pages to show products, services, tours or rooms, with galleries and forms." },
    { icon: "cart", title: "Online store", desc: "Cart, SINPE or card payments, inventory and order notifications." },
  ],

  differences: [
    { icon: "clock", title: "Delivered in days, not months", desc: "Landing pages in 1 to 3 days. Full sites in 1 to 2 weeks. Stores in about 2 weeks." },
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
    { step: "02", title: "We recommend", desc: "Proposal with scope, timeline and fixed price within 24 hours.", icon: "clipboard" },
    { step: "03", title: "We build", desc: "You see every step on a private link and comment on WhatsApp.", icon: "code" },
    { step: "04", title: "We publish and stay", desc: "Site live with Google, Apple and Bing configured. Support afterwards.", icon: "rocket" },
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
    { q: "How much does a website cost in Costa Rica?", a: "At MaxDigitalCR projects start from $200 (₡100,000) for a landing page. A full site or an online store costs more depending on the number of pages, content and integrations. After hearing your case we send a fixed quote within 24 hours." },
    { q: "How long until my site is ready?", a: "Between days and a couple of weeks depending on the type: landing pages in 1 to 3 days, full sites in 1 to 2 weeks and online stores in about 2 weeks. The clock starts when we receive your copy, photos and logo." },
    { q: "What does the price include?", a: "Initial advisory, custom design, development, hosting and SSL certificate for the first year, contact form, WhatsApp button, technical SEO, structured data, Google Business Profile, Search Console and Google Analytics setup, and 30 days of post-launch support." },
    { q: "What is not included?", a: "The domain (approx. $12 to $15 per year) and business email (from $6 per account per month) are paid directly to the provider, in your name. After the first year hosting costs approx. $5 to $10 per month. We help you set everything up." },
    { q: "Do you help me decide what kind of site I need?", a: "Yes, it is the first thing we do. We listen to what you sell, to whom and how people reach you today, and recommend the site that fits. If a landing page is enough, we say so even if it costs less." },
    { q: "Will the site be mine or yours?", a: "Yours. The domain, Google, Apple and Bing accounts and hosting are registered in your name. If you ever want to work with another provider, you take everything with you." },
    { q: "What if I do not like the design?", a: "You see every step on a private link from your phone and comment on WhatsApp. We adjust until the result is what you are after. Revisions during development are included in the price." },
    { q: "Can I make changes after the site is published?", a: "Yes. The first 30 days of adjustments are included. After that you can hire a monthly maintenance plan or request one-off changes, quoted separately. On full sites we also give you a panel to edit text and photos yourself." },
    { q: "Do I need to know about technology?", a: "No. We handle the domain, hosting, security and the Google, Apple and Bing accounts. You provide your business information, photos and logo; we do the rest." },
    { q: "How do you get my business to show up on Google Maps, Siri and ChatGPT?", a: "We set up your Google Business Profile, Apple Business Connect and Bing Places with the same data as your site, submit the sitemap to Google and Bing, and add schema.org structured data for business, services and FAQs. That consistency is what Google, Siri, ChatGPT, Gemini and Perplexity use to recommend you." },
    { q: "Do you work with businesses outside La Fortuna?", a: "Yes. We are based in La Fortuna de San Carlos and work remotely with clients across Costa Rica and abroad. The whole process runs on WhatsApp, video calls and preview links." },
    { q: "What payment methods do you accept?", a: "SINPE Móvil, bank transfer and PayPal for international clients. 50% to start and the remaining 50% when the site goes live. For online stores we configure the payment processor you prefer for your own customers." },
    { q: "What technology do you build with?", a: "Next.js, React and TypeScript, hosted on Vercel. It is the same technical base companies like Netflix, Nike and TikTok use for their sites, and it produces fast, secure pages that are easy to index, with no plugins that break or constant updates." },
  ],

  cta: {
    title: "Let's talk about your business.",
    description: "Tell us what you do and what you want to achieve. We reply within 24 hours with a recommendation and a fixed price.",
    cta: "Let's talk",
  },
};

export function getHomeData(lang: "es" | "en"): HomeData {
  return lang === "en" ? homeDataEN : homeDataES;
}
