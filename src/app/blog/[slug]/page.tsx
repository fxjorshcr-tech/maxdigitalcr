import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogCTA } from "@/components/blog";
import { getArticleBySlug, getAllSlugs, formatDate, articlesES, blogDataES } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("es").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "es");

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [article.category, "desarrollo web", "MaxDigitalCR", "Costa Rica"],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.maxdigitalcr.com/blog/${article.slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

// Simple markdown-like parser for content
function parseContent(content: string): string {
  return content
    // Headers
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold text-neutral-900 mt-10 mb-4">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold text-neutral-900 mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-900">$1</strong>')
    // Lists
    .replace(/^- (.*$)/gm, '<li class="ml-4 mb-2 text-neutral-700">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 my-4">$&</ul>')
    // Checkmarks
    .replace(/- ✅ (.*$)/gm, '<li class="flex items-start gap-2 mb-2"><span class="text-[#3ECF8E] mt-1">✅</span><span class="text-neutral-700">$1</span></li>')
    // Paragraphs (lines that don't start with < and aren't empty)
    .replace(/^(?!<|$|\s*$)(.+)$/gm, '<p class="text-neutral-700 leading-relaxed mb-4">$1</p>')
    // Clean up empty paragraphs
    .replace(/<p class="[^"]*"><\/p>/g, '')
    // Fix nested lists
    .replace(/<\/ul>\s*<ul[^>]*>/g, '');
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "es");

  if (!article) {
    notFound();
  }

  // Get related articles (excluding current)
  const relatedArticles = articlesES
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const parsedContent = parseContent(article.content);

  // JSON-LD for article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://www.maxdigitalcr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "MaxDigitalCR",
      logo: {
        "@type": "ImageObject",
        url: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-max-transparente.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-neutral-50">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[450px] md:min-h-[550px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 pt-32 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-neutral-300 mb-4">
            <span className="px-3 py-1 bg-[#3ECF8E]/20 text-[#3ECF8E] rounded-full font-medium">
              {article.category}
            </span>
            <span>{formatDate(article.date, "es")}</span>
            <span>·</span>
            <span>{article.readTime} de lectura</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: parsedContent }}
          />

          {/* Author and Share */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#3ECF8E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{article.author}</p>
                  <p className="text-sm text-neutral-500">Desarrollo Web Profesional</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500">Compartir:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://www.maxdigitalcr.com/blog/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
                  aria-label="Compartir en WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.maxdigitalcr.com/blog/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 rounded-full hover:bg-[#0077B5] hover:text-white transition-colors"
                  aria-label="Compartir en LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 bg-white border-t border-neutral-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8">
              Artículos relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group flex gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors"
                >
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-[#3ECF8E] font-medium">
                      {related.category}
                    </span>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-[#3ECF8E] transition-colors line-clamp-2 mt-1">
                      {related.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mt-1">
                      {related.readTime} de lectura
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <BlogCTA data={blogDataES} lang="es" />

      <Footer />
    </main>
  );
}
