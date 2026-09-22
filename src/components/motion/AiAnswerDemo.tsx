"use client";

import { useEffect, useRef, useState } from "react";
import Icon, { type IconName } from "@/components/ui/Icon";

interface Scenario {
  query: string;
  answer: string;
  business: string;
  meta: string;
}

interface AiAnswerDemoProps {
  scenarios: Scenario[];
  sources: { icon: IconName; label: string }[];
  sourcesLabel: string;
}

type Phase = "typing" | "thinking" | "answering" | "done";

/**
 * A live "AI assistant" panel: the query types itself, the assistant thinks,
 * the answer streams in and the business card pops with its sources.
 * Cycles through several scenarios. Static full render before hydration.
 */
export default function AiAnswerDemo({ scenarios, sources, sourcesLabel }: AiAnswerDemoProps) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("done");
  const [typed, setTyped] = useState(scenarios[0].query);
  const [streamed, setStreamed] = useState(scenarios[0].answer);
  const [reduced, setReduced] = useState(false);
  const timers = useRef<number[]>([]);

  const s = scenarios[idx];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;

    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timers.current.push(id);
    };

    const run = (i: number) => {
      const sc = scenarios[i];
      setPhase("typing");
      setTyped("");
      setStreamed("");
      // type the query
      for (let c = 1; c <= sc.query.length; c++) later(() => setTyped(sc.query.slice(0, c)), 40 * c);
      const tEnd = 40 * sc.query.length + 350;
      later(() => setPhase("thinking"), tEnd);
      // stream the answer word by word
      const words = sc.answer.split(" ");
      const aStart = tEnd + 900;
      words.forEach((_, w) => later(() => setStreamed(words.slice(0, w + 1).join(" ")), aStart + 70 * w));
      const aEnd = aStart + 70 * words.length;
      later(() => setPhase("answering"), aStart);
      later(() => setPhase("done"), aEnd + 200);
      later(() => run((i + 1) % scenarios.length), aEnd + 5200);
      setIdx(i);
    };

    later(() => run(0), 1200);
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, [scenarios]);

  const showCard = phase === "done" || reduced;
  const showAnswer = phase === "answering" || phase === "done" || reduced;

  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur p-5 sm:p-6 gradient-border">
      {/* Query */}
      <div className="flex items-center gap-2 rounded-xl bg-neutral-900/80 border border-white/10 px-3 py-2.5 text-sm text-neutral-200">
        <Icon name="search" size={16} className="shrink-0 text-neutral-500" />
        <span className="font-mono text-[13px] min-h-[1.25rem]">
          {reduced ? s.query : typed}
          {phase === "typing" && <span className="ml-0.5 inline-block w-[2px] h-4 align-middle bg-brand animate-pulse" />}
        </span>
      </div>

      {/* Assistant */}
      <div className="mt-5 flex items-start gap-3">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-neutral-900">
          <Icon name="sparkles" size={16} />
        </div>
        <div className="min-h-[3.5rem] flex-1">
          {phase === "thinking" && !reduced ? (
            <div className="flex items-center gap-1.5 pt-2" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 animate-bounce" />
            </div>
          ) : (
            <p className="text-sm text-neutral-300 leading-relaxed">
              {showAnswer ? (reduced ? s.answer : streamed) : ""}
              {showCard && (
                <>
                  {" "}
                  <span className="inline-flex items-center gap-1 rounded-md bg-brand/15 border border-brand/40 px-1.5 py-0.5 text-brand font-semibold whitespace-nowrap">
                    {s.business}
                    <Icon name="externalLink" size={12} />
                  </span>
                  .
                </>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Business card */}
      <div
        className={`mt-4 rounded-xl bg-neutral-900 border border-white/10 p-4 flex items-center gap-3 transition-all duration-500 ${
          showCard ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="w-10 h-10 rounded-lg bg-brand/15 flex items-center justify-center text-brand">
          <Icon name="mapPin" size={20} />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-white truncate">{s.business}</p>
          <p className="text-xs text-neutral-400 truncate">{s.meta}</p>
        </div>
        <div className="ml-auto flex gap-0.5 text-brand">
          {[0, 1, 2, 3, 4].map((i) => (
            <Icon key={i} name="star" size={12} className="fill-current" />
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className={`mt-4 transition-opacity duration-700 ${showCard ? "opacity-100" : "opacity-0"}`}>
        <p className="text-[11px] uppercase tracking-widest text-neutral-500 mb-2">{sourcesLabel}</p>
        <ul className="flex flex-wrap gap-2">
          {sources.map((src, i) => (
            <li
              key={src.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-300"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Icon name={src.icon} size={12} className="text-brand-2" />
              {src.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
