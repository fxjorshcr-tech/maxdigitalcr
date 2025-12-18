import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Checkmark icon component
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-[#3ECF8E] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Servicios() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestros Servicios</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Páginas web que
              <br />
              <span className="text-neutral-500">impulsan tu negocio.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Desde landing pages en 1 día hasta tiendas online completas.
              Todo con la mejor tecnología y a precios accesibles.
            </p>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Nuestra diferencia</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                ¿Por qué somos diferentes?
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                No solo hacemos páginas web. Creamos una experiencia de desarrollo única.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Entrega ultra rápida",
                  desc: "Landing pages en 1-3 días. Sitios catálogo en 3-7 días. E-commerce en 7-10 días. Máximo 10 días hábiles, garantizado."
                },
                {
                  icon: "👀",
                  title: "Revisión en tiempo real",
                  desc: "Te compartimos branches de preview para que veas los cambios en tu celular al instante. Sin esperar, sin sorpresas."
                },
                {
                  icon: "🤝",
                  title: "Acompañamiento total",
                  desc: "Estamos con vos en cada paso. Desde la primera llamada hasta después del lanzamiento. Nunca te dejamos solo."
                },
                {
                  icon: "💰",
                  title: "Precios transparentes",
                  desc: "Sabés exactamente cuánto vas a pagar desde el día 1. Sin costos ocultos, sin sorpresas al final."
                },
                {
                  icon: "🔧",
                  title: "Soporte incluido",
                  desc: "30 días de soporte post-lanzamiento incluidos en todos los planes. Después, planes opcionales de mantenimiento."
                },
                {
                  icon: "📱",
                  title: "100% responsive",
                  desc: "Tu página se ve perfecta en cualquier dispositivo: celular, tablet, computadora. Sin excepción."
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#3ECF8E] transition-all">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section id="planes" className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Planes y Precios</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Elegí el plan perfecto
                <br />
                <span className="text-neutral-500">para tu negocio.</span>
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                Todos los planes incluyen diseño responsive, SEO básico y 30 días de soporte.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Landing Page */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl">📄</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    1-3 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
                <p className="text-neutral-400 mb-6">
                  Página de alto impacto para captar clientes. Perfecta para campañas, lanzamientos o presencia básica.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡100,000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Diseño moderno y responsive",
                    "Hasta 5 secciones",
                    "Formulario de contacto",
                    "Optimizado para SEO",
                    "Integración con WhatsApp",
                    "30 días de soporte",
                    "Hosting primer año incluido"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Profesionales independientes, campañas de marketing, lanzamientos</p>
                </div>
                <Link
                  href="/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Cotizar Landing Page
                </Link>
              </div>

              {/* Sitio Catálogo */}
              <div className="rounded-2xl p-8 bg-neutral-800 border-2 border-[#3ECF8E] relative hover:scale-105 transition-all">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#3ECF8E] text-neutral-900 text-sm font-bold px-4 py-2 rounded-full">
                    MÁS POPULAR
                  </span>
                </div>
                <div className="flex items-center justify-between mb-6 mt-2">
                  <div>
                    <span className="text-4xl">📚</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    3-7 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Sitio Catálogo</h3>
                <p className="text-neutral-400 mb-6">
                  Sitio web completo para mostrar tus productos o servicios. Múltiples páginas y galería de productos.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡200,000</div>
                  <span className="text-sm text-neutral-500">pago único</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Todo lo de Landing Page +",
                    "Hasta 10 páginas",
                    "Galería de productos/servicios",
                    "Blog opcional",
                    "Panel de administración",
                    "Múltiples formularios",
                    "Integración con redes sociales"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Restaurantes, hoteles, servicios profesionales, portafolios</p>
                </div>
                <Link
                  href="/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
                >
                  Cotizar Sitio Catálogo
                </Link>
              </div>

              {/* E-Commerce */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700 hover:border-[#3ECF8E] transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl">🛒</span>
                  </div>
                  <div className="bg-[#3ECF8E]/20 text-[#3ECF8E] text-xs font-bold px-3 py-1 rounded-full">
                    7-10 DÍAS
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">E-Commerce</h3>
                <p className="text-neutral-400 mb-6">
                  Tienda online completa con carrito de compras, pagos en línea y gestión de inventario.
                </p>
                <div className="mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-4xl font-bold text-[#3ECF8E]">₡300,000</div>
                  <span className="text-sm text-neutral-500">+ mantenimiento mensual</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Todo lo de Sitio Catálogo +",
                    "Carrito de compras",
                    "Procesador de pagos (SINPE/tarjeta)",
                    "Gestión de inventario",
                    "Notificaciones de pedidos",
                    "Panel de ventas",
                    "Mantenimiento mensual incluido"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-neutral-700/50 rounded-lg mb-6">
                  <p className="text-xs text-neutral-400 mb-1">Ideal para:</p>
                  <p className="text-sm text-white">Tiendas de ropa, productos artesanales, cualquier negocio con ventas online</p>
                </div>
                <Link
                  href="/contacto"
                  className="block text-center py-4 rounded-lg font-medium transition-all bg-neutral-700 text-white hover:bg-neutral-600"
                >
                  Cotizar E-Commerce
                </Link>
              </div>
            </div>

            {/* Custom Projects */}
            <div className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-[#3ECF8E]/10 to-transparent border border-[#3ECF8E]/30">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">¿Necesitás algo más complejo?</h3>
                  <p className="text-neutral-400">
                    Desarrollamos aplicaciones web personalizadas, sistemas de reservas, dashboards,
                    integraciones con APIs y más. Contanos tu idea.
                  </p>
                </div>
                <Link
                  href="/contacto"
                  className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-white text-neutral-900 hover:bg-neutral-100"
                >
                  Cotizar proyecto personalizado
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work - Preview System */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Proceso único</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                  Revisá los cambios
                  <br />
                  <span className="text-neutral-400">en tiempo real.</span>
                </h2>
                <p className="text-lg text-neutral-600 mb-6">
                  Olvidate de esperar semanas para ver cómo va tu página. Con nuestro sistema de
                  preview branches, podés ver cada cambio que hacemos <strong>instantáneamente</strong> en tu celular.
                </p>
                <p className="text-lg text-neutral-600 mb-8">
                  Así trabajamos más rápido, evitamos malentendidos y te entregamos exactamente lo que querés.
                  Es una forma de desarrollar que antes solo usaban las grandes empresas de tecnología.
                </p>
                <ul className="space-y-4">
                  {[
                    "Te compartimos un link privado para ver los cambios",
                    "Funciona en tu celular, tablet o computadora",
                    "Nos das feedback inmediato por WhatsApp",
                    "Iteramos hasta que quedes 100% satisfecho"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-700">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-2xl p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-[#3ECF8E]" />
                  <span className="ml-4 text-sm font-mono text-neutral-500">preview.tunegocio.com</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Hacemos un cambio</p>
                      <p className="text-neutral-500 text-sm">Nuevo diseño del header</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Abrís el link en tu cel</p>
                      <p className="text-neutral-500 text-sm">Ves el cambio al instante</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white text-lg">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Nos escribís por WhatsApp</p>
                      <p className="text-neutral-500 text-sm">&ldquo;Me gusta, pero cambiá el color&rdquo;</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#3ECF8E]/20 border border-[#3ECF8E] rounded-lg">
                    <div className="w-10 h-10 bg-[#3ECF8E] rounded-full flex items-center justify-center text-neutral-900 text-lg">
                      ✓
                    </div>
                    <div>
                      <p className="text-white font-medium">Listo en minutos</p>
                      <p className="text-neutral-400 text-sm">Sin esperas, sin emails eternos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance & Support */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Después del lanzamiento</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Mantenimiento y Soporte
              </h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                No todas las páginas necesitan mantenimiento constante, pero todas necesitan soporte.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* No Maintenance Needed */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-neutral-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Landing y Catálogo</h3>
                    <p className="text-neutral-500">Sin mantenimiento obligatorio</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Las páginas estáticas (landing pages y catálogos) no requieren mantenimiento mensual.
                  Una vez entregadas, funcionan perfectamente sin intervención.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Soporte incluido</span>
                    <span className="text-[#3ECF8E] font-medium">30 días gratis</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Cambios menores después</span>
                    <span className="text-white font-medium">Se cotizan aparte</span>
                  </div>
                </div>
              </div>

              {/* Maintenance Required */}
              <div className="rounded-2xl p-8 bg-neutral-800 border border-[#3ECF8E]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">E-Commerce</h3>
                    <p className="text-neutral-500">Mantenimiento mensual incluido</p>
                  </div>
                </div>
                <p className="text-neutral-400 mb-6">
                  Las tiendas online requieren mantenimiento constante: actualizaciones de seguridad,
                  backups, monitoreo del procesador de pagos, y soporte técnico continuo.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Actualizaciones de seguridad</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Backups automáticos</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Soporte prioritario</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-neutral-700/50 rounded-lg">
                    <span className="text-neutral-300">Cambios menores incluidos</span>
                    <span className="text-[#3ECF8E]">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="rounded-xl p-6 bg-neutral-800 border border-neutral-700">
              <p className="text-center text-neutral-400">
                <strong className="text-white">Importante:</strong> Aunque no todas las páginas requieren mantenimiento,
                siempre es buena idea tener un plan de soporte. La tecnología cambia y tu negocio también.
                Estamos aquí cuando nos necesités.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Costs */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Costos adicionales</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Costos que corren por tu cuenta
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Somos transparentes. Estos son costos externos que vos pagás directamente a los proveedores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Domain */}
              <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Dominio</h3>
                    <p className="text-neutral-500">tunegocio.com o .cr</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">aproximadamente</span>
                  <div className="text-3xl font-bold text-neutral-900">$11-15</div>
                  <span className="text-sm text-neutral-500">por año</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  El dominio es la dirección de tu página (ej: tunegocio.com). Lo registrás a tu nombre
                  y es tuyo para siempre. Te ayudamos con el proceso de registro.
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl p-8 bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">Correo Profesional</h3>
                    <p className="text-neutral-500">info@tunegocio.com</p>
                  </div>
                </div>
                <div className="text-center py-4 bg-white rounded-lg border border-neutral-200 mb-6">
                  <span className="text-sm text-neutral-500">desde</span>
                  <div className="text-3xl font-bold text-neutral-900">$6</div>
                  <span className="text-sm text-neutral-500">por cuenta / mes</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  Correo profesional con tu dominio (ej: info@tunegocio.com). Usamos Google Workspace
                  o alternativas más económicas según tu presupuesto. Te ayudamos a configurarlo.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-neutral-500">
                <strong className="text-neutral-900">Nota:</strong> El hosting del primer año está incluido
                en todos nuestros planes. Después, el costo es mínimo (aproximadamente $5-10/mes).
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-widest mb-6 text-[#3ECF8E] font-bold">Preguntas frecuentes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                ¿Tenés dudas?
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "¿Cuánto tiempo tardan en entregar mi página?",
                  a: "Depende del tipo de proyecto. Landing pages: 1-3 días. Sitios catálogo: 3-7 días. E-commerce: 7-10 días. Nunca más de 10 días hábiles."
                },
                {
                  q: "¿Qué pasa si no me gusta el diseño?",
                  a: "Con nuestro sistema de preview en tiempo real, vas viendo cada cambio. Si algo no te gusta, lo ajustamos al instante. Iteramos hasta que quedes 100% satisfecho."
                },
                {
                  q: "¿Puedo hacer cambios después de que la página esté lista?",
                  a: "Sí. Los primeros 30 días de soporte están incluidos. Después, podés contratar un plan de mantenimiento o pagar por cambios puntuales."
                },
                {
                  q: "¿El hosting está incluido?",
                  a: "Sí, el hosting del primer año está incluido en todos los planes. Después el costo es mínimo (aproximadamente $5-10/mes)."
                },
                {
                  q: "¿Necesito saber de tecnología?",
                  a: "Para nada. Nosotros nos encargamos de todo lo técnico. Vos solo nos decís qué querés y nosotros lo hacemos realidad."
                },
                {
                  q: "¿Qué métodos de pago aceptan?",
                  a: "SINPE Móvil, transferencia bancaria, y para e-commerce configuramos el procesador de pagos que prefieras (SINPE, tarjeta, etc)."
                },
              ].map((item) => (
                <div key={item.q} className="rounded-xl p-6 bg-neutral-800 border border-neutral-700">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-neutral-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-neutral-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
              Contanos tu idea y te damos una cotización sin compromiso en menos de 24 horas.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all bg-[#3ECF8E] text-neutral-900 hover:bg-[#2eb67d]"
            >
              Cotizar mi página
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
