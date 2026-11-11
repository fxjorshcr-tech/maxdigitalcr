import type { Metadata } from "next";
import { pageJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto | Cotización de página web en menos de 24 horas",
  description:
    "Contá a MaxDigitalCR qué hace tu negocio y recibí una cotización cerrada para tu página web en menos de 24 horas. WhatsApp +506 8596 2438. La Fortuna, Costa Rica.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/contacto",
    languages: {
      es: "https://www.maxdigitalcr.com/contacto",
      en: "https://www.maxdigitalcr.com/en/contacto",
      "x-default": "https://www.maxdigitalcr.com/contacto",
    },
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            pageJsonLd("ContactPage", {
              name: String(metadata.title),
              description: String(metadata.description),
              url: "https://www.maxdigitalcr.com/contacto",
              lang: "es",
            }),
            breadcrumbJsonLd([
              { name: "Inicio", url: "https://www.maxdigitalcr.com/" },
              { name: "Contacto", url: "https://www.maxdigitalcr.com/contacto" },
            ]),
          ]),
        }}
      />
      {children}
    </>
  );

}
