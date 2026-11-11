"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import type { AiDemoCopy } from "@/lib/ai-demo";

type Phase = "typing" | "thinking" | "answering" | "done";

function BusinessChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-brand/15 border border-brand/40 px-1.5 py-0.5 text-brand font-semibold whitespace-nowrap">
      {name}
      <Icon name="externalLink" size={12} />
    </span>
  );
}

/**
 * An assistant conversation: the question types itself, the assistant thinks,
 * the answer streams in and cites the business with its sources. Cycles
 * through several scenarios. The first scenario is fully rendered on the
 * server, and every scenario is laid out invisibly underneath so the panel
 * never changes height while the text streams.
 */
export default function AiAnswerDemo({ title, scenarios, sources, sourcesLabel }: AiDemoCopy) {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("done");
  const [typed, setTyped] = useState(scenarios[0].query);
  const [streamed, setStreamed] = useState(scenarios[0].answer);
  const timers = useRef<number[]>([]);

  const s = scenarios[idx];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const later = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms));
    };

    const run = (i: number) => {
      const sc = scenarios[i];
      setIdx(i);
      setPhase("typing");
      setTyped("");
      setStreamed("");
      for (let c = 1; c <= sc.query.length; c++) later(() => setTyped(sc.query.slice(0, c)), 38 * c);
      const tEnd = 38 * sc.query.length + 350;
      later(() => setPhase("thinking"), tEnd);
      const words = sc.answer.split(" ");
      const aStart = tEnd + 900;
      later(() => setPhase("answering"), aStart);
      words.forEach((_, w) => later(() => setStreamed(words.slice(0, w + 1).join(" ")), aStart + 65 * w));
      const aEnd = aStart + 65 * words.length;
      later(() => setPhase("done"), aEnd + 200);
      later(() => run((i + 1) % scenarios.length), aEnd + 5600);
    };

    later(() => run(1 % scenarios.length), 4200);
    const list = timers.current;
    return () => list.forEach(clearTimeout);
  }, [scenarios]);

  const done = phase === "done";

  return (
    <div className="relative rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
      {/* Window bar */}
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-brand text-neutral-900">
          <Icon name="sparkles" size={13} />
        </span>
        <span className="text-[13px] font-medium text-neutral-200">{title}</span>
        <span className="ml-auto flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Question */}
        <div className="flex justify-end">
          <div className="grid max-w-[88%] rounded-2xl rounded-br-md bg-white/[0.08] px-4 py-2.5 text-sm text-white">
            {scenarios.map((sc) => (
              <span key={sc.query} className="invisible col-start-1 row-start-1" aria-hidden="true">
                {sc.query}
              </span>
            ))}
            <span className="col-start-1 row-start-1">
              {typed}
              {phase === "typing" && <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-brand align-middle" />}
            </span>
          </div>
        </div>

        {/* Answer */}
        <div className="mt-4 flex items-start gap-3">
          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] border border-white/10 text-brand">
            <Icon name="sparkles" size={14} />
          </span>
          <div className="grid flex-1 text-sm leading-relaxed text-neutral-300">
            {scenarios.map((sc) => (
              <p key={sc.query} className="invisible col-start-1 row-start-1" aria-hidden="true">
                {sc.answer} <BusinessChip name={sc.business} />.
              </p>
            ))}
            <div className="col-start-1 row-start-1">
              {phase === "thinking" ? (
                <span className="flex items-center gap-1.5 pt-2" aria-hidden="true">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-500 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-500 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-500" />
                </span>
              ) : (
                <p>
                  {phase === "typing" ? "" : streamed}
                  {done && (
                    <>
                      {" "}
                      <BusinessChip name={s.business} />.
                    </>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Cited business */}
        <div
          className={`mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950/70 p-3.5 transition-all duration-500 ${
            done ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand">
            <Icon name="mapPin" size={20} />
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-white">{s.business}</p>
            <p className="truncate text-xs text-neutral-400">{s.meta}</p>
          </div>
          <div className="ml-auto flex gap-0.5 text-brand">
            {[0, 1, 2, 3, 4].map((i) => (
              <Icon key={i} name="star" size={12} className="fill-current" />
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className={`mt-4 transition-opacity duration-700 ${done ? "opacity-100" : "opacity-0"}`}>
          <p className="mb-2 text-[11px] uppercase tracking-widest text-neutral-500">{sourcesLabel}</p>
          <ul className="flex flex-wrap gap-2">
            {sources.map((src) => (
              <li
                key={src.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-neutral-300"
              >
                <Icon name={src.icon} size={12} className="text-brand-2" />
                {src.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
