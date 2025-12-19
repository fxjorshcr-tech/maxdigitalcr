"use client";

import Image from "next/image";

const logos = [
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Logo%20CWT%20Costa%20Rica-FINAL-01.png",
    alt: "Can't Wait Travel",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/WhatsApp%20Image%202025-12-15%20at%2010.26.40%20PM.jpeg",
    alt: "Go Adventures",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Orostudios%20CR%20Logo%20(2).webp",
    alt: "Orostudios CR",
  },
  {
    src: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/logo-grupo-oroz.png",
    alt: "Grupo Oroz",
  },
];

interface LogoCarouselProps {
  title?: string;
}

export default function LogoCarousel({ title = "Confían en nosotros" }: LogoCarouselProps) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm uppercase tracking-widest mb-10 text-neutral-900 font-bold">
          {title}
        </p>

        {/* Desktop: Static horizontal layout */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {logos.map((logo) => (
            <div key={logo.alt} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={80}
                className="h-14 lg:h-16 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Mobile: Infinite scrolling carousel */}
        <div className="md:hidden relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
