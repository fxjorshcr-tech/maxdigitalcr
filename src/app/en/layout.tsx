import type { Metadata, Viewport } from "next";
import RootDocument from "@/components/RootDocument";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxdigitalcr.com"),
  title: {
    default: "MaxDigitalCR | Professional Web Development in Costa Rica",
    template: "%s | MaxDigitalCR"
  },
  description: "Web design and development agency in La Fortuna, Costa Rica. Websites from $200, delivered in days and built for Google, Apple Maps, Bing and the answers of ChatGPT, Gemini and Perplexity.",
  keywords: [
    "web development Costa Rica",
    "professional web design",
    "landing pages Costa Rica",
    "e-commerce Costa Rica",
    "online store Costa Rica",
    "affordable websites",
    "AI search optimization",
    "show up in ChatGPT",
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
    description: "Websites for businesses in Costa Rica, built for Google and for AI answers. Delivered in days, fixed price from $200.",
    locale: "en_US",
    alternateLocale: ["es_CR"],
    type: "website",
    url: "https://www.maxdigitalcr.com/en",
    siteName: "MaxDigitalCR",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "MaxDigital CR - Professional Web Development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxDigitalCR | Professional Web Development",
    description: "Websites for businesses in Costa Rica, built for Google and for AI answers.",
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

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
