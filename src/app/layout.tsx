import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxDigitalCR | Desarrollo Web de Nueva Generación",
  description: "Creá en días. Escalá sin límites. Desarrollo web con tecnología de clase mundial en Costa Rica.",
  keywords: ["desarrollo web", "Costa Rica", "Next.js", "React", "landing pages", "e-commerce"],
  authors: [{ name: "MaxDigitalCR" }],
  openGraph: {
    title: "MaxDigitalCR | Desarrollo Web de Nueva Generación",
    description: "Creá en días. Escalá sin límites. Desarrollo web con tecnología de clase mundial.",
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
