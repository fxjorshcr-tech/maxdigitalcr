import type { Metadata } from "next";
import { AboutPage } from "@/components/sections";

export const metadata: Metadata = {
  title: "Nosotros | Agencia de desarrollo web en La Fortuna, Costa Rica",
  description:
    "MaxDigitalCR es una agencia de diseño y desarrollo web en La Fortuna de San Carlos, Costa Rica. Conocé cómo trabajamos, en qué creemos y los sitios que hemos construido.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/nosotros",
    languages: {
      es: "https://www.maxdigitalcr.com/nosotros",
      en: "https://www.maxdigitalcr.com/en/nosotros",
      "x-default": "https://www.maxdigitalcr.com/nosotros",
    },
  },
};

export default function Nosotros() {
  return <AboutPage lang="es" />;
}
