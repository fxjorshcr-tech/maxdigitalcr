import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections";
import { homeDataES } from "@/lib/data";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servicios y precios | Landing pages, sitios catálogo y tiendas en línea",
  description:
    "Landing page desde ₡100.000, sitio catálogo desde ₡200.000 y tienda en línea desde ₡300.000. Qué incluye cada plan, qué se paga aparte y cómo funciona el mantenimiento. MaxDigitalCR, Costa Rica.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/servicios",
    languages: {
      es: "https://www.maxdigitalcr.com/servicios",
      en: "https://www.maxdigitalcr.com/en/servicios",
      "x-default": "https://www.maxdigitalcr.com/servicios",
    },
  },
};

export default function Servicios() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqJsonLd(homeDataES.faq),
            breadcrumbJsonLd([
              { name: "Inicio", url: "https://www.maxdigitalcr.com/" },
              { name: "Servicios", url: "https://www.maxdigitalcr.com/servicios" },
            ]),
          ]),
        }}
      />
      <ServicesPage lang="es" />
    </>
  );
}
