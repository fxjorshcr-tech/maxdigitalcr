import Image from "next/image";
import { BLOG_IMAGES, BlogData } from "@/lib/blog-data";

interface BlogHeroProps {
  data: BlogData;
}

export default function BlogHero({ data }: BlogHeroProps) {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BLOG_IMAGES.hero}
          alt="Blog MaxDigitalCR"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/70 to-neutral-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <span className="inline-block px-4 py-2 bg-[#3ECF8E]/20 text-[#3ECF8E] text-sm font-medium rounded-full mb-6">
          {data.hero.subtitle}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {data.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          {data.hero.description}
        </p>
      </div>
    </section>
  );
}
