import { MetadataRoute } from "next";

/**
 * Explicitly allow the crawlers that power AI search and answers.
 * Blocking the *search* bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot,
 * bingbot) removes the site from ChatGPT, Claude, Perplexity and Copilot
 * answers. Training-only bots (GPTBot, ClaudeBot, Google-Extended) are also
 * allowed: for a marketing site there is no downside to being in the corpus.
 */
const AI_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "DuckAssistBot",
  "meta-externalagent",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      { userAgent: AI_SEARCH_BOTS, allow: "/" },
    ],
    sitemap: "https://www.maxdigitalcr.com/sitemap.xml",
    host: "https://www.maxdigitalcr.com",
  };
}
