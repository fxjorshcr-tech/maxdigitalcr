import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogHero, BlogCard, BlogCTA } from "@/components/blog";
import { blogDataES, articlesES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Consejos de Desarrollo Web",
  description: "Artículos, guías y tendencias para impulsar tu presencia digital y hacer crecer tu negocio en Costa Rica. Tips de diseño web, SEO y marketing digital.",
  keywords: [
    "blog desarrollo web",
    "consejos diseño web",
    "tendencias web 2025",
    "SEO Costa Rica",
    "marketing digital",
    "páginas web profesionales",
  ],
  openGraph: {
    title: "Blog | MaxDigitalCR",
    description: "Artículos y consejos para impulsar tu presencia digital en Costa Rica.",
    type: "website",
    url: "https://www.maxdigitalcr.com/blog",
  },
};

export default function BlogPage() {
  // Separar artículos destacados y normales
  const featuredArticles = articlesES.filter((a) => a.featured);
  const regularArticles = articlesES.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Hero */}
      <BlogHero data={blogDataES} />

      {/* Articles Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Artículos destacados
              </h2>
              <div className="space-y-8">
                {featuredArticles.map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="es"
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          {regularArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Todos los artículos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="es"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Show all if no featured */}
          {featuredArticles.length === 0 && regularArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No hay artículos disponibles.</p>
            </div>
          )}

          {/* If only featured, show them in grid */}
          {featuredArticles.length > 0 && regularArticles.length === 0 && articlesES.length > 2 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Más artículos
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesES.slice(1).map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="es"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <BlogCTA data={blogDataES} lang="es" />

      <Footer />
    </main>
  );
}
