"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroObject = dynamic(() => import("./HeroObject"), { ssr: false });

/**
 * Mounts the WebGL scene only on wide screens without reduced-motion, after
 * first paint, so the hero text is never delayed by the 3D bundle.
 */
export default function HeroObjectLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wide || reduced) return;
    const id = window.requestIdleCallback ? window.requestIdleCallback(() => setReady(true)) : window.setTimeout(() => setReady(true), 300);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id as number);
      else clearTimeout(id as number);
    };
  }, []);

  if (!ready) return null;
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <HeroObject />
    </div>
  );
}
