"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon, { type IconName } from "@/components/ui/Icon";

gsap.registerPlugin(ScrollTrigger);

interface Step {
  step: string;
  title: string;
  desc: string;
  icon: IconName;
}

interface ProcessTimelineProps {
  steps: Step[];
}

/**
 * Four steps joined by a line that draws itself as you scroll; each node
 * lights up when the line reaches it.
 */
export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const line = el.querySelector<SVGPathElement>("[data-line]");
    const vline = el.querySelector<HTMLElement>("[data-vline]");
    const nodes = Array.from(el.querySelectorAll<HTMLElement>("[data-node]"));
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-item]"));

    if (reduced) {
      if (line) line.style.strokeDashoffset = "0";
      if (vline) vline.style.transform = "scaleY(1)";
      nodes.forEach((n) => n.classList.add("is-lit"));
      return;
    }

    const ctx = gsap.context(() => {
      // Node i sits at i/(n-1) along the line. Everything fits inside a
      // timeline of duration 1, so the last node lights before the scroll ends.
      const ats = nodes.map((_, i) => (i / Math.max(1, nodes.length - 1)) * 0.88);
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 65%", scrub: 0.6 },
        // Light the nodes from the playhead position on every update. A
        // callback placed on the timeline can be skipped or read a stale
        // progress while scrubbing, which left the last steps dark.
        onUpdate: () => {
          const time = tl.time();
          nodes.forEach((n, i) => n.classList.toggle("is-lit", time >= ats[i] - 0.001));
        },
      });
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        tl.to(line, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0);
      }
      if (vline) {
        gsap.set(vline, { scaleY: 0, transformOrigin: "top" });
        tl.to(vline, { scaleY: 1, ease: "none", duration: 1 }, 0);
      }
      nodes.forEach((n, i) => {
        tl.fromTo(n, { scale: 0.7 }, { scale: 1, duration: 0.08, ease: "back.out(2)" }, ats[i]);
        tl.fromTo(items[i], { y: 24, opacity: 0.3 }, { y: 0, opacity: 1, duration: 0.12, ease: "power2.out" }, ats[i]);
      });
      nodes[0]?.classList.add("is-lit");
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative">
      {/* Desktop connector. The gradient uses userSpaceOnUse: a horizontal path
          has a zero-height bounding box, where the default units paint nothing. */}
      <svg className="hidden md:block absolute left-0 right-0 top-7 w-full h-4" viewBox="0 0 1000 16" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="process-grad" gradientUnits="userSpaceOnUse" x1="125" y1="8" x2="875" y2="8">
            <stop offset="0" stopColor="#C6F135" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
        </defs>
        <path d="M125 8 H875" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
        <path data-line d="M125 8 H875" stroke="url(#process-grad)" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
      {/* Mobile connector */}
      <div className="md:hidden absolute left-7 top-8 bottom-8 w-px bg-white/10" aria-hidden="true">
        <div data-vline className="w-px h-full bg-gradient-to-b from-brand to-brand-2" />
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {steps.map((s) => (
          <li key={s.step} data-item className="relative flex md:flex-col md:text-center items-start md:items-center gap-5 md:gap-0 pl-0">
            <div
              data-node
              className="process-node relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-400 transition-colors duration-300 md:mb-4"
            >
              <Icon name={s.icon} size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-brand-2 block mb-1 md:mb-2">{s.step}</span>
              <span className="text-lg font-semibold block text-white">{s.title}</span>
              <p className="text-sm mt-2 text-neutral-400 max-w-xs">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
