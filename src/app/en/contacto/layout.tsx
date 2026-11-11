import type { Metadata } from "next";
import { pageJsonLd, breadcrumbJsonLd } from "@/lib/schema";

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            pageJsonLd("ContactPage", {
              name: String(metadata.title),
              description: String(metadata.description),
              url: "https://www.maxdigitalcr.com/en/contacto",
              lang: "en",
            }),
            breadcrumbJsonLd([
              { name: "Home", url: "https://www.maxdigitalcr.com/en" },
              { name: "Contact", url: "https://www.maxdigitalcr.com/en/contacto" },
            ]),
          ]),
        }}
      />
      {children}
    </>
  );

}
