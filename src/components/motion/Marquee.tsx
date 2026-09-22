import type { ReactNode } from "react";

interface MarqueeProps {
  items: ReactNode[];
  duration?: number;
  className?: string;
}

/** Infinite horizontal scroll. Items are duplicated for a seamless loop. */
export default function Marquee({ items, duration = 40, className = "" }: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s` } as React.CSSProperties;
  return (
    <div className={`marquee relative overflow-hidden ${className}`} style={style} aria-hidden="true">
      <div className="marquee-track gap-10 pr-10">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
