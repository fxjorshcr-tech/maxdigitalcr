import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Website quote within 24 hours",
  description:
    "Tell MaxDigitalCR what your business does and get a fixed quote for your website within 24 hours. WhatsApp +506 8596 2438. La Fortuna, Costa Rica.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en/contacto",
    languages: {
      es: "https://www.maxdigitalcr.com/contacto",
      en: "https://www.maxdigitalcr.com/en/contacto",
      "x-default": "https://www.maxdigitalcr.com/contacto",
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
