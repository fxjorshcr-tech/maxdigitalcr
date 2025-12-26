import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "MaxDigitalCR | Professional Web Development in Costa Rica",
    template: "%s | MaxDigitalCR"
  },
  description: "Web development agency in Costa Rica. We create landing pages, digital catalogs, and e-commerce stores with Next.js and React. Delivery in 1-10 days. Affordable prices.",
  keywords: [
    "web development Costa Rica",
    "professional web design",
    "landing pages Costa Rica",
    "e-commerce Costa Rica",
    "online store Costa Rica",
    "affordable websites",
    "Next.js development",
    "React Costa Rica",
    "digital agency Costa Rica",
    "digital catalog",
    "professional website",
    "MaxDigitalCR"
  ],
  authors: [{ name: "MaxDigitalCR", url: "https://www.maxdigitalcr.com" }],
  creator: "MaxDigitalCR",
  publisher: "MaxDigitalCR",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en",
    languages: {
      "es": "https://www.maxdigitalcr.com",
      "en": "https://www.maxdigitalcr.com/en",
      "x-default": "https://www.maxdigitalcr.com",
    },
  },
  openGraph: {
    title: "MaxDigitalCR | Professional Web Development in Costa Rica",
    description: "We create landing pages, catalogs, and e-commerce with world-class technology. Delivery in 1-10 days.",
    locale: "en_US",
    alternateLocale: ["es_CR"],
    type: "website",
    url: "https://www.maxdigitalcr.com/en",
    siteName: "MaxDigitalCR",
    images: [
      {
        url: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png",
        width: 512,
        height: 512,
        alt: "MaxDigitalCR - Professional Web Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxDigitalCR | Professional Web Development",
    description: "Web development agency in Costa Rica. Landing pages, e-commerce, and digital catalogs.",
    images: ["https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"],
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
