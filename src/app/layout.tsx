import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-F86DTXXD46";

// Schema.org structured data for LocalBusiness
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.maxdigitalcr.com/#organization",
      "name": "MaxDigitalCR",
      "url": "https://www.maxdigitalcr.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png",
        "width": 512,
        "height": 512
      },
      "sameAs": [
        "https://wa.me/50685680801"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+506-8568-0801",
        "contactType": "sales",
        "availableLanguage": ["Spanish", "English"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.maxdigitalcr.com/#localbusiness",
      "name": "MaxDigitalCR",
      "description": "Agencia de desarrollo web profesional en Costa Rica. Creamos landing pages, catálogos digitales y e-commerce con tecnología Next.js y React.",
      "url": "https://www.maxdigitalcr.com",
      "telephone": "+506-8568-0801",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CR",
        "addressRegion": "Costa Rica"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.9281,
        "longitude": -84.0907
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Costa Rica"
      },
      "serviceType": ["Web Development", "Landing Pages", "E-commerce", "Digital Catalogs"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.maxdigitalcr.com/#website",
      "url": "https://www.maxdigitalcr.com",
      "name": "MaxDigitalCR",
      "description": "Desarrollo web profesional en Costa Rica",
      "publisher": {
        "@id": "https://www.maxdigitalcr.com/#organization"
      },
      "inLanguage": ["es", "en"]
    },
    {
      "@type": "Service",
      "serviceType": "Web Development",
      "provider": {
        "@id": "https://www.maxdigitalcr.com/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Costa Rica"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios de Desarrollo Web",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Landing Page Profesional",
              "description": "Página web de una sola página optimizada para conversiones"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Catálogo Digital",
              "description": "Sitio web multi-página para mostrar productos o servicios"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "E-commerce",
              "description": "Tienda en línea completa con carrito de compras"
            }
          }
        ]
      }
    }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maxdigitalcr.com"),
  title: {
    default: "MaxDigitalCR | Desarrollo Web Profesional en Costa Rica",
    template: "%s | MaxDigitalCR"
  },
  description: "Agencia de desarrollo web en Costa Rica. Creamos landing pages, catálogos digitales y tiendas e-commerce con Next.js y React. Entrega en 1-10 días. Precios accesibles.",
  keywords: [
    "desarrollo web Costa Rica",
    "diseño web profesional",
    "landing pages Costa Rica",
    "e-commerce Costa Rica",
    "tienda online Costa Rica",
    "páginas web baratas",
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
    description: "Creamos landing pages, catálogos y e-commerce con tecnología de clase mundial. Entrega en 1-10 días.",
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
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
