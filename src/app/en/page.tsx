import { HomePage } from "@/components/sections";
import { homeDataEN } from "@/lib/data";
import { faqJsonLd } from "@/lib/schema";

export default function HomeEN() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeDataEN.faq)) }}
      />
      <HomePage lang="en" />
    </>
  );
}
