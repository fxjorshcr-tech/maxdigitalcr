import type { Metadata } from "next";
import { AboutPage } from "@/components/sections";
import { pageJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About | Web development agency in La Fortuna, Costa Rica",
  description:
    "MaxDigitalCR is a web design and development agency in La Fortuna de San Carlos, Costa Rica. Learn how we work, what we believe and the sites we have built.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en/nosotros",
    languages: {
      es: "https://www.maxdigitalcr.com/nosotros",
      en: "https://www.maxdigitalcr.com/en/nosotros",
      "x-default": "https://www.maxdigitalcr.com/nosotros",
    },
  },
};

export default function AboutEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            pageJsonLd("AboutPage", {
              name: String(metadata.title),
              description: String(metadata.description),
              url: "https://www.maxdigitalcr.com/en/nosotros",
              lang: "en",
            }),
            breadcrumbJsonLd([
              { name: "Home", url: "https://www.maxdigitalcr.com/en" },
              { name: "About", url: "https://www.maxdigitalcr.com/en/nosotros" },
            ]),
          ]),
        }}
      />
      <AboutPage lang="en" />
    </>
  );
}
