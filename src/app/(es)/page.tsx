import { HomePage } from "@/components/sections";
import { homeDataES } from "@/lib/data";
import { faqJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(homeDataES.faq, "es")) }}
      />
      <HomePage lang="es" />
    </>
  );
}
