import type { Metadata } from "next";

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
  return children;
}
