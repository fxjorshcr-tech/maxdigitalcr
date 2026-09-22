"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFanProps {
  children: ReactNode;
  className?: string;
}

/**
 * Children marked with [data-fan-card] start stacked toward the center,
 * slightly rotated, and fan out into their grid position as you scroll.
 */
export default function ScrollFan({ children, className = "" }: ScrollFanProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-fan-card]"));
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      const isWide = window.innerWidth >= 768;
      cards.forEach((card, i) => {
        const col = i % 2;
        const dirX = isWide ? (col === 0 ? 1 : -1) : 0;
        gsap.fromTo(
          card,
          { x: dirX * 140, y: 90, rotate: dirX * -4 || (i % 2 ? 2 : -2), scale: 0.94, opacity: 0.35 },
          {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              end: "top 45%",
              scrub: 0.8,
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
