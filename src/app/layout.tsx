import type { Metadata } from "next";
import Script from "next/script";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { organizationJsonLd } from "@/lib/schema";

const GA_MEASUREMENT_ID = "G-F86DTXXD46";

// Tipografía: serif editorial para titulares, sans limpia para texto.
const display = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxdigitalcr.com"),
  title: {
    default: "MaxDigitalCR | Desarrollo Web Profesional en Costa Rica",
    template: "%s | MaxDigitalCR"
  },
  description: "Agencia de diseño y desarrollo web en La Fortuna, Costa Rica. Landing pages desde ₡100.000, sitios catálogo y tiendas en línea, entregados en 1 a 10 días hábiles con Google Business y Search Console incluidos.",
  keywords: [
    "desarrollo web Costa Rica",
    "diseño web profesional",
    "landing pages Costa Rica",
    "e-commerce Costa Rica",
    "tienda online Costa Rica",
    "páginas web La Fortuna",
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    description: "Landing pages, sitios catálogo y tiendas en línea para negocios de Costa Rica. Entrega en 1 a 10 días hábiles, precios desde ₡100.000.",
    locale: "es_CR",
    alternateLocale: ["en_US"],
    type: "website",
    url: "https://www.maxdigitalcr.com",
    siteName: "MaxDigitalCR",
    images: [
      {
        url: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png",
        width: 512,
        height: 512,
        alt: "MaxDigitalCR - Desarrollo Web Profesional"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxDigitalCR | Desarrollo Web Profesional",
    description: "Agencia de desarrollo web en Costa Rica. Landing pages, e-commerce y catálogos digitales.",
    images: ["https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
