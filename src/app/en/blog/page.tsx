import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogHero, BlogCard, BlogCTA } from "@/components/blog";
import { blogDataEN, articlesEN } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Web Development Tips",
  description: "Articles, guides, and trends to boost your digital presence and grow your business in Costa Rica. Web design, SEO, and digital marketing tips.",
  keywords: [
    "web development blog",
    "web design tips",
    "web trends 2025",
    "SEO Costa Rica",
    "digital marketing",
    "professional websites",
  ],
  openGraph: {
    title: "Blog | MaxDigitalCR",
    description: "Articles and tips to boost your digital presence in Costa Rica.",
    type: "website",
    url: "https://www.maxdigitalcr.com/en/blog",
  },
};

export default function BlogPageEN() {
  // Separate featured and regular articles
  const featuredArticles = articlesEN.filter((a) => a.featured);
  const regularArticles = articlesEN.filter((a) => !a.featured);

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      {/* Hero */}
      <BlogHero data={blogDataEN} />

      {/* Articles Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Featured articles
              </h2>
              <div className="space-y-8">
                {featuredArticles.map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="en"
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
                All articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularArticles.map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="en"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Show all if no featured */}
          {featuredArticles.length === 0 && regularArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">No articles available.</p>
            </div>
          )}

          {/* If only featured, show them in grid */}
          {featuredArticles.length > 0 && regularArticles.length === 0 && articlesEN.length > 2 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                More articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articlesEN.slice(1).map((article) => (
                  <BlogCard
                    key={article.slug}
                    article={article}
                    lang="en"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <BlogCTA data={blogDataEN} lang="en" />

      <Footer />
    </main>
  );
}
