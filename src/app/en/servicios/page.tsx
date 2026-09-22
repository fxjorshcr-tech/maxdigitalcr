import type { Metadata } from "next";
import { ServicesPage } from "@/components/sections";
import { homeDataEN } from "@/lib/data";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services and pricing | Landing pages, catalog sites and online stores",
  description:
    "Landing page from $200, catalog site from $400 and online store from $600. What each plan includes, what is paid separately and how maintenance works. MaxDigitalCR, Costa Rica.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en/servicios",
    languages: {
      es: "https://www.maxdigitalcr.com/servicios",
      en: "https://www.maxdigitalcr.com/en/servicios",
      "x-default": "https://www.maxdigitalcr.com/servicios",
    },
  },
};

export default function ServicesEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            faqJsonLd(homeDataEN.faq),
            breadcrumbJsonLd([
              { name: "Home", url: "https://www.maxdigitalcr.com/en" },
              { name: "Services", url: "https://www.maxdigitalcr.com/en/servicios" },
            ]),
          ]),
        }}
      />
      <ServicesPage lang="en" />
    </>
  );
}
