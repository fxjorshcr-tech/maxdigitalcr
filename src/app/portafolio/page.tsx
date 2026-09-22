import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import CTASection from "@/components/sections/CTASection";
import { Icon } from "@/components/ui";
import { portfolioProjects } from "@/lib/portfolio";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portafolio | Sitios web que hemos desarrollado en Costa Rica",
  description:
    "Sitios web reales, en producción, desarrollados por MaxDigitalCR para hoteles, tours, transporte turístico, bienes raíces y distribuidores en Costa Rica. Vea cada uno funcionando.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/portafolio",
    languages: {
      es: "https://www.maxdigitalcr.com/portafolio",
      en: "https://www.maxdigitalcr.com/en/portafolio",
      "x-default": "https://www.maxdigitalcr.com/portafolio",
    },
  },
  openGraph: {
    title: "Portafolio | MaxDigitalCR",
    description: "Sitios web reales desarrollados para negocios de Costa Rica.",
    url: "https://www.maxdigitalcr.com/portafolio",
    images: [{ url: "https://www.maxdigitalcr.com/portfolio/cantwaittravel-desktop.webp", width: 1440, height: 900 }],
  },
};

const stats = [
  { value: String(portfolioProjects.length), label: "sitios en producción" },
  { value: "1 a 3", label: "días para una landing page" },
  { value: "4", label: "industrias distintas" },
  { value: "2+", label: "idiomas por sitio" },
];

export default function PortafolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", url: "https://www.maxdigitalcr.com/" },
              { name: "Portafolio", url: "https://www.maxdigitalcr.com/portafolio" },
            ])
          ),
        }}
      />
      <Navbar />
      <main className="bg-neutral-900">
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand font-bold">Portafolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Sitios que hemos hecho.
              <br />
              <span className="text-gradient">Todos en línea hoy.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Cada proyecto de esta página es un negocio real de Costa Rica que hoy recibe clientes desde su sitio.
              Podés abrir cualquiera y verlo funcionando desde tu celular.
            </p>
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-5 rounded-xl bg-neutral-800 border border-neutral-700">
                  <dt className="text-3xl font-bold text-white">{s.value}</dt>
                  <dd className="text-sm text-neutral-400 mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <PortfolioSection lang="es" all showHeader={false} />

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">Qué tienen en común estos sitios</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Cargan en menos de 2 segundos en celular",
                "Cada tour, habitación o propiedad tiene su propia página indexable",
                "Botón de WhatsApp y formulario en cada pantalla",
                "Perfil de Google Business enlazado con el sitio",
                "Datos estructurados schema.org para Google y asistentes de IA",
                "Versión en inglés para captar visitantes extranjeros",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700">
                  <Icon name="checkCircle" size={20} className="shrink-0 mt-0.5 text-brand-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-neutral-600">
              ¿Querés saber cuánto costaría un sitio así para tu negocio?{" "}
              <Link href="/#planes" className="font-medium text-brand-dark hover:underline">
                Mirá cómo trabajamos
              </Link>{" "}
              o escribinos directamente.
            </p>
          </div>
        </section>

        <CTASection
          title="¿Querés el tuyo?"
          description="Contanos qué hace tu negocio y te enviamos una cotización cerrada en menos de 24 horas."
          cta="Cotizar mi página"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
