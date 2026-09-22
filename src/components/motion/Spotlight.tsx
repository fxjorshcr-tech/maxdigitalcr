"use client";

import { useCallback, type MouseEvent, type ReactNode } from "react";

interface SpotlightProps {
  children: ReactNode;
  className?: string;
}

/** Card wrapper whose radial glow follows the cursor. Pure CSS otherwise. */
export default function Spotlight({ children, className = "" }: SpotlightProps) {
  const onMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }, []);

  return (
    <div onMouseMove={onMove} className={`spotlight ${className}`}>
      {children}
    </div>
  );
}
