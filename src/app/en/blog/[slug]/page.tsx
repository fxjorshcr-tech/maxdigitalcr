import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BlogCTA } from "@/components/blog";
import { getArticleBySlug, getAllSlugs, formatDate, articlesEN, blogDataEN } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs("en").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "en");

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: article.title,
    description: article.description,
    keywords: [article.category, "web development", "MaxDigitalCR", "Costa Rica"],
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url: `https://www.maxdigitalcr.com/en/blog/${article.slug}`,
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

export default async function ArticlePageEN({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug, "en");

  if (!article) {
    notFound();
  }

  // Get related articles (excluding current)
  const relatedArticles = articlesEN
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
            href="/en/blog"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-neutral-300 mb-4">
            <span className="px-3 py-1 bg-[#3ECF8E]/20 text-[#3ECF8E] rounded-full font-medium">
              {article.category}
            </span>
            <span>{formatDate(article.date, "en")}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
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
                  <p className="text-sm text-neutral-500">Professional Web Development</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-500">Share:</span>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(article.title + " - https://www.maxdigitalcr.com/en/blog/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 rounded-full hover:bg-[#25D366] hover:text-white transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://www.maxdigitalcr.com/en/blog/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 rounded-full hover:bg-[#1877F2] hover:text-white transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maxdigitalcostarica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-100 rounded-full hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white transition-colors"
                  aria-label="Follow on Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
              Related articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/en/blog/${related.slug}`}
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
                      {related.readTime} read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <BlogCTA data={blogDataEN} lang="en" />

      <Footer />
    </main>
  );
}
