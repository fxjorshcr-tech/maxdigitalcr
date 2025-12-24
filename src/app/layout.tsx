import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-F86DTXXD46";

export const metadata: Metadata = {
  title: "MaxDigitalCR | Desarrollo Web de Nueva Generación",
  description: "Creá en días. Escalá sin límites. Desarrollo web con tecnología de clase mundial en Costa Rica.",
  keywords: ["desarrollo web", "Costa Rica", "Next.js", "React", "landing pages", "e-commerce"],
  authors: [{ name: "MaxDigitalCR" }],
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
    title: "MaxDigitalCR | Desarrollo Web de Nueva Generación",
    description: "Creá en días. Escalá sin límites. Desarrollo web con tecnología de clase mundial.",
    locale: "es_CR",
    alternateLocale: ["en_US"],
    type: "website",
    url: "https://www.maxdigitalcr.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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
        {children}
      </body>
    </html>
  );
}
