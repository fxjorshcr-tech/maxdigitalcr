import type { IconName } from "@/components/ui/Icon";

export interface AiScenario {
  query: string;
  answer: string;
  business: string;
  meta: string;
}

export interface AiDemoCopy {
  title: string;
  scenarios: AiScenario[];
  sources: { icon: IconName; label: string }[];
  sourcesLabel: string;
}

/**
 * Illustrative assistant answers for the hero panel. The business is always
 * the visitor's ("Tu hotel"), never a named client: it shows the goal, it is
 * not a claim about a specific ranking.
 */
export const aiDemo: Record<"es" | "en", AiDemoCopy> = {
  es: {
    title: "Asistente de IA",
    scenarios: [
      { query: "mejor hotel boutique en La Fortuna", answer: "Según Google, Apple Maps y Bing, una opción muy bien valorada cerca del volcán es", business: "Tu hotel", meta: "Abierto ahora · 4.9 · La Fortuna" },
      { query: "tour de cataratas con guía certificado", answer: "Un operador con reseñas recientes y guía naturalista certificado es", business: "Tu tour", meta: "Desde $55 · 5.0 · La Fortuna" },
      { query: "dónde comer casado en La Fortuna", answer: "Entre los lugares mejor calificados por locales aparece", business: "Tu restaurante", meta: "Abierto hasta las 21:00 · 4.8" },
    ],
    sources: [
      { icon: "mapPin", label: "Google Business" },
      { icon: "compass", label: "Apple Maps" },
      { icon: "globe", label: "Bing Places" },
      { icon: "fileText", label: "tu-sitio.com" },
    ],
    sourcesLabel: "Fuentes",
  },
  en: {
    title: "AI assistant",
    scenarios: [
      { query: "best boutique hotel in La Fortuna", answer: "Based on Google, Apple Maps and Bing, a highly rated option near the volcano is", business: "Your hotel", meta: "Open now · 4.9 · La Fortuna" },
      { query: "waterfall tour with certified guide", answer: "An operator with recent reviews and a certified naturalist guide is", business: "Your tour", meta: "From $55 · 5.0 · La Fortuna" },
      { query: "where to eat casado in La Fortuna", answer: "Among the places locals rate highest is", business: "Your restaurant", meta: "Open until 9 pm · 4.8" },
    ],
    sources: [
      { icon: "mapPin", label: "Google Business" },
      { icon: "compass", label: "Apple Maps" },
      { icon: "globe", label: "Bing Places" },
      { icon: "fileText", label: "your-site.com" },
    ],
    sourcesLabel: "Sources",
  },
};
