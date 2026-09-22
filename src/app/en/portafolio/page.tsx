import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import CTASection from "@/components/sections/CTASection";
import { Icon } from "@/components/ui";
import { portfolioProjects } from "@/lib/portfolio";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Portfolio | Websites we have built in Costa Rica",
  description:
    "Real, live websites built by MaxDigitalCR for hotels, tour operators, shuttle companies, real estate agencies and distributors in Costa Rica. See each one working.",
  alternates: {
    canonical: "https://www.maxdigitalcr.com/en/portafolio",
    languages: {
      es: "https://www.maxdigitalcr.com/portafolio",
      en: "https://www.maxdigitalcr.com/en/portafolio",
      "x-default": "https://www.maxdigitalcr.com/portafolio",
    },
  },
  openGraph: {
    title: "Portfolio | MaxDigitalCR",
    description: "Real websites built for businesses in Costa Rica.",
    url: "https://www.maxdigitalcr.com/en/portafolio",
    images: [{ url: "https://www.maxdigitalcr.com/portfolio/cantwaittravel-desktop.webp", width: 1440, height: 900 }],
  },
};

const stats = [
  { value: String(portfolioProjects.length), label: "sites in production" },
  { value: "1 to 3", label: "days for a landing page" },
  { value: "4", label: "different industries" },
  { value: "2+", label: "languages per site" },
];

export default function PortfolioPageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "https://www.maxdigitalcr.com/en" },
              { name: "Portfolio", url: "https://www.maxdigitalcr.com/en/portafolio" },
            ])
          ),
        }}
      />
      <Navbar />
      <main className="bg-neutral-900">
        <section className="pt-32 pb-16 px-4 sm:px-6 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest mb-6 text-brand font-bold">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
              Sites we have built.
              <br />
              <span className="text-gradient">All live today.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Every project on this page is a real Costa Rican business that gets customers from its website today.
              Open any of them and see it working from your phone.
            </p>
            <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-5 rounded-xl bg-neutral-800 border border-neutral-700">
                  <dt className="text-3xl font-bold text-white">{s.value}</dt>
                  <dd className="text-sm text-neutral-400 mt-1">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <PortfolioSection lang="en" all showHeader={false} />

        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">What these sites have in common</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Load in under 2 seconds on mobile",
                "Every tour, room or property has its own indexable page",
                "WhatsApp button and form on every screen",
                "Google Business Profile linked to the site",
                "Schema.org structured data for Google and AI assistants",
                "English version to capture foreign visitors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-700">
                  <Icon name="checkCircle" size={20} className="shrink-0 mt-0.5 text-brand-dark" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-neutral-600">
              Want to know what a site like this would cost for your business?{" "}
              <Link href="/en#planes" className="font-medium text-brand-dark hover:underline">
                See how we work
              </Link>{" "}
              or write to us directly.
            </p>
          </div>
        </section>

        <CTASection
          title="Want yours?"
          description="Tell us what your business does and we will send a fixed quote within 24 hours."
          cta="Get a quote"
          ctaLink="/en/contacto"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
