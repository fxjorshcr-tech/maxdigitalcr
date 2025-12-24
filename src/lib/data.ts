// Colores del tema
export const THEME = {
  primary: "#3ECF8E",
  primaryHover: "#2eb67d",
} as const;

// Datos de la página principal - Español
export const homeDataES = {
  hero: {
    badge: "Desarrollo web en Costa Rica",
    title: "Rápido.",
    titleHighlight: "Profesional.",
    titleEnd: "Accesible.",
    description: "Páginas web profesionales a una fracción del costo tradicional. Entregadas en días, ultrarápidas y construidas con la última tecnología.",
    cta: "Cotizar página",
    ctaSecondary: "Ver planes y precios",
  },

  quickFeatures: [
    { icon: "⚡", title: "1-10 días", desc: "Tu página lista en tiempo récord. No meses de espera." },
    { icon: "💰", title: "Desde ₡100.000", desc: "Fracción del costo de agencias tradicionales." },
    { icon: "🔧", title: "Soporte incluido", desc: "30 días de soporte post-lanzamiento gratis." },
  ],

  techFeatures: [
    { icon: "🔍", title: "SEO técnico", desc: "Primeros en Google" },
    { icon: "🤖", title: "Optimizado para IA", desc: "ChatGPT te recomienda" },
    { icon: "📱", title: "100% responsive", desc: "Perfecto en cualquier dispositivo" },
    { icon: "🔒", title: "SSL incluido", desc: "Seguro desde el día 1" },
  ],

  stats: [
    { stat: "97%", desc: "de consumidores buscan negocios online antes de comprar", source: "BrightLocal Consumer Review Survey 2024", icon: "🔍" },
    { stat: "75%", desc: "juzgan la credibilidad de un negocio por su diseño web", source: "Stanford Web Credibility Research", icon: "💎" },
    { stat: "88%", desc: "confían en reseñas online tanto como recomendaciones personales", source: "BrightLocal Local Consumer Review Survey", icon: "⭐" },
    { stat: "53%", desc: "abandonan si la página tarda más de 3 segundos", source: "Google/SOASTA Research", icon: "⚡" },
  ],

  pricing: {
    landing: {
      icon: "📄",
      title: "Landing Page",
      time: "1-3 DÍAS",
      description: "Página de alto impacto para captar clientes. Perfecta para campañas, lanzamientos o presencia básica.",
      price: "₡100.000",
      priceNote: "pago único",
      features: ["Diseño moderno y responsive", "Hasta 5 secciones", "Formulario de contacto", "Optimizado para SEO", "Integración con WhatsApp", "30 días de soporte", "Hosting primer año incluido"],
      idealFor: "Profesionales independientes, campañas de marketing, lanzamientos",
      cta: "Cotizar Landing Page",
      popular: false,
    },
    catalog: {
      icon: "📚",
      title: "Sitio Catálogo",
      time: "3-7 DÍAS",
      description: "Sitio web completo para mostrar tus productos o servicios. Múltiples páginas y galería de productos.",
      price: "₡200.000",
      priceNote: "pago único",
      features: ["Todo lo de Landing Page +", "Hasta 10 páginas", "Galería de productos/servicios", "Blog opcional", "Panel de administración", "Múltiples formularios", "Integración con redes sociales"],
      idealFor: "Restaurantes, hoteles, servicios profesionales, portafolios",
      cta: "Cotizar Sitio Catálogo",
      popular: true,
    },
    ecommerce: {
      icon: "🛒",
      title: "E-Commerce",
      time: "7-10 DÍAS",
      description: "Tienda online completa con carrito de compras, pagos en línea y gestión de inventario.",
      price: "₡300.000",
      priceNote: "+ mantenimiento mensual",
      features: ["Todo lo de Sitio Catálogo +", "Carrito de compras", "Procesador de pagos (SINPE/tarjeta)", "Gestión de inventario", "Notificaciones de pedidos", "Panel de ventas", "Mantenimiento mensual incluido"],
      idealFor: "Tiendas de ropa, productos artesanales, cualquier negocio con ventas online",
      cta: "Cotizar E-Commerce",
      popular: false,
    },
  },

  differences: [
    { icon: "⚡", title: "Entrega ultra rápida", desc: "Landing pages en 1-3 días. Sitios catálogo en 3-7 días. E-commerce en 7-10 días. Máximo 10 días hábiles, garantizado." },
    { icon: "👀", title: "Revisión en tiempo real", desc: "Te compartimos branches de preview para que veas los cambios en tu celular al instante. Sin esperar, sin sorpresas." },
    { icon: "🤝", title: "Acompañamiento total", desc: "Estamos con vos en cada paso. Desde la primera llamada hasta después del lanzamiento. Nunca te dejamos solo." },
    { icon: "💰", title: "Precios transparentes", desc: "Sabés exactamente cuánto vas a pagar desde el día 1. Sin costos ocultos, sin sorpresas al final." },
    { icon: "🔧", title: "Soporte incluido", desc: "30 días de soporte post-lanzamiento incluidos en todos los planes. Después, planes opcionales de mantenimiento." },
    { icon: "📱", title: "100% responsive", desc: "Tu página se ve perfecta en cualquier dispositivo: celular, tablet, computadora. Sin excepción." },
  ],

  painPoints: [
    { worry: "\"No sé nada de tecnología\"", solution: "Nosotros nos encargamos de todo. Vos solo nos decís qué querés y nosotros lo hacemos realidad.", icon: "🤔" },
    { worry: "\"Es muy caro\"", solution: "Precios desde ₡100.000. Una fracción de lo que cobran las agencias tradicionales.", icon: "💰" },
    { worry: "\"Tarda mucho tiempo\"", solution: "Entregamos en 1-10 días hábiles dependiendo del proyecto. No meses.", icon: "⏰" },
    { worry: "\"¿Y después quién me ayuda?\"", solution: "Soporte post-lanzamiento incluido. Siempre vas a tener a alguien que te responda.", icon: "🤝" },
    { worry: "\"No sé qué diseño necesito\"", solution: "Te guiamos y proponemos opciones basadas en tu industria y objetivos.", icon: "🎨" },
    { worry: "\"Me da miedo que no funcione\"", solution: "Sitios probados, rápidos y optimizados. Funcionan perfecto desde el día 1.", icon: "✅" },
  ],

  industries: [
    { icon: "🏨", name: "Hoteles" },
    { icon: "🍽️", name: "Restaurantes" },
    { icon: "✂️", name: "Barberías" },
    { icon: "🏠", name: "Bienes Raíces" },
    { icon: "🚗", name: "Talleres" },
    { icon: "🌴", name: "Tours" },
    { icon: "💪", name: "Gimnasios" },
    { icon: "🏥", name: "Clínicas" },
    { icon: "📸", name: "Fotógrafos" },
    { icon: "⚖️", name: "Abogados" },
    { icon: "🎨", name: "Diseñadores" },
    { icon: "🛒", name: "Tiendas" },
  ],

  technologies: [
    { name: "Next.js", icon: "▲", color: "bg-white text-black" },
    { name: "React", icon: "⚛️", color: "bg-[#61DAFB]" },
    { name: "TypeScript", icon: "TS", color: "bg-[#3178C6]" },
    { name: "Vercel", icon: "▲", color: "bg-white text-black" },
    { name: "Supabase", icon: "⚡", color: "bg-[#3ECF8E]" },
    { name: "Tailwind", icon: "🎨", color: "bg-[#06B6D4]" },
  ],

  process: [
    { step: "01", title: "Hablamos", desc: "Nos contás tu idea y entendemos qué necesitás.", icon: "💬" },
    { step: "02", title: "Proponemos", desc: "Plan claro con precio fijo. Sin sorpresas.", icon: "📋" },
    { step: "03", title: "Construimos", desc: "Desarrollamos mientras ves el progreso.", icon: "🔨" },
    { step: "04", title: "Lanzamos", desc: "Tu página en vivo con soporte incluido.", icon: "🚀" },
  ],

  faq: [
    { q: "¿Cuánto tiempo tardan en entregar mi página?", a: "Depende del tipo de proyecto. Landing pages: 1-3 días. Sitios catálogo: 3-7 días. E-commerce: 7-10 días. Nunca más de 10 días hábiles." },
    { q: "¿Qué pasa si no me gusta el diseño?", a: "Con nuestro sistema de preview en tiempo real, vas viendo cada cambio. Si algo no te gusta, lo ajustamos al instante. Iteramos hasta que quedes 100% satisfecho." },
    { q: "¿Puedo hacer cambios después de que la página esté lista?", a: "Sí. Los primeros 30 días de soporte están incluidos. Después, podés contratar un plan de mantenimiento o pagar por cambios puntuales." },
    { q: "¿El hosting está incluido?", a: "No, el hosting y correo empresarial son costos adicionales. El hosting cuesta aproximadamente $15/mes y el correo desde $6/mes. Nosotros te ayudamos a configurar todo." },
    { q: "¿Necesito saber de tecnología?", a: "Para nada. Nosotros nos encargamos de todo lo técnico. Vos solo nos decís qué querés y nosotros lo hacemos realidad." },
    { q: "¿Qué métodos de pago aceptan?", a: "SINPE Móvil, transferencia bancaria, y para e-commerce configuramos el procesador de pagos que prefieras (SINPE, tarjeta, etc)." },
  ],
};

// Datos de la página principal - Inglés
export const homeDataEN = {
  hero: {
    badge: "Web development in Costa Rica",
    title: "Fast.",
    titleHighlight: "Professional.",
    titleEnd: "Affordable.",
    description: "Professional websites at a fraction of the traditional cost. Delivered in days, ultra-fast, and built with the latest technology.",
    cta: "Get a quote",
    ctaSecondary: "See plans and pricing",
  },

  quickFeatures: [
    { icon: "⚡", title: "1-10 days", desc: "Your site ready in record time. No months of waiting." },
    { icon: "💰", title: "From $200", desc: "A fraction of traditional agency costs." },
    { icon: "🔧", title: "Support included", desc: "30 days of post-launch support free." },
  ],

  techFeatures: [
    { icon: "🔍", title: "Technical SEO", desc: "First on Google" },
    { icon: "🤖", title: "AI Optimized", desc: "ChatGPT recommends you" },
    { icon: "📱", title: "100% responsive", desc: "Perfect on any device" },
    { icon: "🔒", title: "SSL included", desc: "Secure from day 1" },
  ],

  stats: [
    { stat: "97%", desc: "of consumers search for businesses online before buying", source: "BrightLocal Consumer Review Survey 2024", icon: "🔍" },
    { stat: "75%", desc: "judge a business's credibility by its web design", source: "Stanford Web Credibility Research", icon: "💎" },
    { stat: "88%", desc: "trust online reviews as much as personal recommendations", source: "BrightLocal Local Consumer Review Survey", icon: "⭐" },
    { stat: "53%", desc: "leave if the page takes more than 3 seconds to load", source: "Google/SOASTA Research", icon: "⚡" },
  ],

  pricing: {
    landing: {
      icon: "📄",
      title: "Landing Page",
      time: "1-3 DAYS",
      description: "High-impact page to capture clients. Perfect for campaigns, launches, or basic presence.",
      price: "$200",
      priceNote: "one-time payment",
      features: ["Modern responsive design", "Up to 5 sections", "Contact form", "SEO optimized", "WhatsApp integration", "30 days support", "First year hosting included"],
      idealFor: "Independent professionals, marketing campaigns, launches",
      cta: "Quote Landing Page",
      popular: false,
    },
    catalog: {
      icon: "📚",
      title: "Catalog Site",
      time: "3-7 DAYS",
      description: "Complete website to showcase your products or services. Multiple pages and product gallery.",
      price: "$400",
      priceNote: "one-time payment",
      features: ["Everything in Landing Page +", "Up to 10 pages", "Product/service gallery", "Optional blog", "Admin panel", "Multiple forms", "Social media integration"],
      idealFor: "Restaurants, hotels, professional services, portfolios",
      cta: "Quote Catalog Site",
      popular: true,
    },
    ecommerce: {
      icon: "🛒",
      title: "E-Commerce",
      time: "7-10 DAYS",
      description: "Complete online store with shopping cart, online payments, and inventory management.",
      price: "$600",
      priceNote: "+ monthly maintenance",
      features: ["Everything in Catalog Site +", "Shopping cart", "Payment processor", "Inventory management", "Order notifications", "Sales dashboard", "Monthly maintenance included"],
      idealFor: "Clothing stores, handmade products, any business with online sales",
      cta: "Quote E-Commerce",
      popular: false,
    },
  },

  differences: [
    { icon: "⚡", title: "Ultra-fast delivery", desc: "Landing pages in 1-3 days. Catalog sites in 3-7 days. E-commerce in 7-10 days. Maximum 10 business days, guaranteed." },
    { icon: "👀", title: "Real-time review", desc: "We share preview branches so you can see changes on your phone instantly. No waiting, no surprises." },
    { icon: "🤝", title: "Total support", desc: "We're with you every step. From the first call to after launch. You're never alone." },
    { icon: "💰", title: "Transparent pricing", desc: "You know exactly what you'll pay from day 1. No hidden costs, no end surprises." },
    { icon: "🔧", title: "Support included", desc: "30 days post-launch support included in all plans. Then, optional maintenance plans." },
    { icon: "📱", title: "100% responsive", desc: "Your page looks perfect on any device: phone, tablet, computer. No exceptions." },
  ],

  painPoints: [
    { worry: "\"I don't know anything about technology\"", solution: "We take care of everything. You just tell us what you want and we make it happen.", icon: "🤔" },
    { worry: "\"It's too expensive\"", solution: "Prices from $200. A fraction of what traditional agencies charge.", icon: "💰" },
    { worry: "\"It takes too long\"", solution: "We deliver in 1-10 business days depending on the project. Not months.", icon: "⏰" },
    { worry: "\"Who helps me afterwards?\"", solution: "Post-launch support included. You'll always have someone to respond.", icon: "🤝" },
    { worry: "\"I don't know what design I need\"", solution: "We guide you and propose options based on your industry and goals.", icon: "🎨" },
    { worry: "\"I'm afraid it won't work\"", solution: "Tested, fast, and optimized sites. They work perfectly from day 1.", icon: "✅" },
  ],

  industries: [
    { icon: "🏨", name: "Hotels" },
    { icon: "🍽️", name: "Restaurants" },
    { icon: "✂️", name: "Barbershops" },
    { icon: "🏠", name: "Real Estate" },
    { icon: "🚗", name: "Auto Shops" },
    { icon: "🌴", name: "Tours" },
    { icon: "💪", name: "Gyms" },
    { icon: "🏥", name: "Clinics" },
    { icon: "📸", name: "Photographers" },
    { icon: "⚖️", name: "Lawyers" },
    { icon: "🎨", name: "Designers" },
    { icon: "🛒", name: "Stores" },
  ],

  technologies: [
    { name: "Next.js", icon: "▲", color: "bg-white text-black" },
    { name: "React", icon: "⚛️", color: "bg-[#61DAFB]" },
    { name: "TypeScript", icon: "TS", color: "bg-[#3178C6]" },
    { name: "Vercel", icon: "▲", color: "bg-white text-black" },
    { name: "Supabase", icon: "⚡", color: "bg-[#3ECF8E]" },
    { name: "Tailwind", icon: "🎨", color: "bg-[#06B6D4]" },
  ],

  process: [
    { step: "01", title: "We talk", desc: "Tell us your idea and we understand what you need.", icon: "💬" },
    { step: "02", title: "We propose", desc: "Clear plan with fixed price. No surprises.", icon: "📋" },
    { step: "03", title: "We build", desc: "We develop while you see the progress.", icon: "🔨" },
    { step: "04", title: "We launch", desc: "Your page live with support included.", icon: "🚀" },
  ],

  faq: [
    { q: "How long does it take to deliver my page?", a: "Depends on the project type. Landing pages: 1-3 days. Catalog sites: 3-7 days. E-commerce: 7-10 days. Never more than 10 business days." },
    { q: "What if I don't like the design?", a: "With our real-time preview system, you see every change. If you don't like something, we adjust it instantly. We iterate until you're 100% satisfied." },
    { q: "Can I make changes after the page is ready?", a: "Yes. The first 30 days of support are included. After that, you can hire a maintenance plan or pay for specific changes." },
    { q: "Is hosting included?", a: "No, hosting and business email are additional costs. Hosting costs approximately $15/month and email from $6/month. We help you set everything up." },
    { q: "Do I need to know about technology?", a: "Not at all. We take care of all the technical stuff. You just tell us what you want and we make it happen." },
    { q: "What payment methods do you accept?", a: "Bank transfer, PayPal, and for e-commerce we set up the payment processor you prefer." },
  ],
};
