"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMarqueeProps {
  items: string[];
  speed?: number; // px/s
  className?: string;
  itemClassName?: string;
  separator?: string;
}

export function InfiniteMarquee({
  items,
  speed = 60,
  className,
  itemClassName,
  separator = "//",
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Width of one set of items
    const w = track.scrollWidth / 2;
    setDuration(w / speed);
  }, [speed, items]);

  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className={cn("overflow-hidden w-full", className)}>
      <div
        ref={trackRef}
        className="flex gap-3 w-max"
        style={
          duration > 0
            ? {
                animation: `marquee ${duration}s linear infinite`,
              }
            : undefined
        }
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={cn(
              "font-mono text-xs border border-zinc-800 text-zinc-500 px-3 py-1.5 shrink-0 hover:border-purple-700 hover:text-purple-400 transition-colors cursor-default",
              itemClassName
            )}
          >
            {item}
            {i < doubled.length - 1 && (
              <span className="ml-3 text-zinc-700">{separator}</span>
            )}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

