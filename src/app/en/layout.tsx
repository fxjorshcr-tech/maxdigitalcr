import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MaxDigitalCR | Next-Generation Web Development",
  description: "Build in days. Scale without limits. World-class web development technology in Costa Rica.",
  keywords: ["web development", "Costa Rica", "Next.js", "React", "landing pages", "e-commerce"],
  authors: [{ name: "MaxDigitalCR" }],
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en",
    languages: {
      "es": "https://www.maxdigitalcr.com",
      "en": "https://www.maxdigitalcr.com/en",
      "x-default": "https://www.maxdigitalcr.com",
    },
  },
  openGraph: {
    title: "MaxDigitalCR | Next-Generation Web Development",
    description: "Build in days. Scale without limits. World-class web development technology.",
    locale: "en_US",
    alternateLocale: ["es_CR"],
    type: "website",
    url: "https://www.maxdigitalcr.com/en",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
