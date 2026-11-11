import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/RootDocument";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxdigitalcr.com"),
  title: {
    default: "MaxDigitalCR | Desarrollo Web Profesional en Costa Rica",
    template: "%s | MaxDigitalCR"
  },
  description: "Agencia de diseño y desarrollo web en La Fortuna, Costa Rica. Páginas web desde ₡100.000, entregadas en días y preparadas para Google, Apple Maps, Bing y las respuestas de ChatGPT, Gemini y Perplexity.",
  keywords: [
    "desarrollo web Costa Rica",
    "diseño web profesional",
    "landing pages Costa Rica",
    "e-commerce Costa Rica",
    "tienda online Costa Rica",
    "páginas web La Fortuna",
    "optimización para búsquedas con IA",
    "aparecer en ChatGPT",
    "SEO para inteligencia artificial",
    "cuánto cuesta una página web en Costa Rica",
    "desarrollo Next.js",
    "React Costa Rica",
    "agencia digital Costa Rica",
    "catálogo digital",
    "sitio web profesional",
    "MaxDigitalCR"
  ],
  authors: [{ name: "MaxDigitalCR", url: "https://www.maxdigitalcr.com" }],
  creator: "MaxDigitalCR",
  publisher: "MaxDigitalCR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.maxdigitalcr.com",
    languages: {
      "es": "https://www.maxdigitalcr.com",
      "en": "https://www.maxdigitalcr.com/en",
      "x-default": "https://www.maxdigitalcr.com",
    },
  },
  openGraph: {
    title: "MaxDigitalCR | Desarrollo Web Profesional en Costa Rica",
    description: "Páginas web para negocios de Costa Rica, hechas para Google y para las respuestas de la IA. Entrega en días, precio cerrado desde ₡100.000.",
    locale: "es_CR",
    alternateLocale: ["en_US"],
    type: "website",
    url: "https://www.maxdigitalcr.com",
    siteName: "MaxDigitalCR",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "MaxDigital CR - Desarrollo Web Profesional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxDigitalCR | Desarrollo Web Profesional",
    description: "Páginas web para negocios de Costa Rica, hechas para Google y para las respuestas de la IA.",
    images: ["/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Set these in Vercel (Settings > Environment Variables) after creating the
    // properties. See docs/presencia-digital.md for the step-by-step.
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
      : {}),
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
