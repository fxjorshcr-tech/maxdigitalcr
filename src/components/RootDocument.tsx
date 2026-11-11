import Script from "next/script";
import { Source_Serif_4, Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
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

/**
 * Shared <html> shell for both language trees. Each tree has its own root
 * layout so the document declares the right language (`es-CR` or `en`),
 * which search engines, screen readers and AI crawlers rely on.
 */
export default function RootDocument({ lang, children }: { lang: "es" | "en"; children: React.ReactNode }) {
  return (
    <html lang={lang === "es" ? "es-CR" : "en"} className={`${display.variable} ${sans.variable}`}>
      {/* App Router root layout: a literal <head> is the supported way to add tags here. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        {/* Machine-readable summaries for AI assistants (llmstxt.org). */}
        <link rel="alternate" type="text/markdown" href="/llms.txt" title="LLM summary" />
        <link rel="alternate" type="text/markdown" href="/llms-full.txt" title="LLM full content" />
        {/* Without JavaScript nothing triggers the scroll reveals: show everything. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(lang)) }}
        />
        {children}
      </body>
    </html>
  );
}
