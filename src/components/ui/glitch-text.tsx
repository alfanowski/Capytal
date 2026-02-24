"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#@$%&";

type GlitchTextProps = {
  text: string;
  as?: React.ElementType;
  className?: string;
  glitchColor?: string;
};

export function GlitchText({
  text,
  as: Tag = "span",
  className,
  glitchColor = "rgba(139,92,246,0.35)",
}: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = text.length * 2;

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterations / 2) return char;
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      iterations++;
      if (iterations >= maxIterations) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }
    }, 40);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(triggerGlitch, 400);
    const periodic = setInterval(() => {
      if (Math.random() > 0.6) triggerGlitch();
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearInterval(periodic);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const AnyTag = Tag;

  return (
    <AnyTag
      className={cn("relative inline-block cursor-default select-none", className)}
      onMouseEnter={triggerGlitch}
      data-text={text}
    >
      <span className="relative z-10">{displayText}</span>
      <span
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          color: glitchColor,
          clipPath: isGlitching ? "inset(10% 0 60% 0)" : "none",
          transform: isGlitching ? "translateX(-4px)" : "none",
          transition: "none",
        }}
      >
        {displayText}
      </span>
      <span
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          color: "rgba(255,255,255,0.15)",
          clipPath: isGlitching ? "inset(60% 0 10% 0)" : "none",
          transform: isGlitching ? "translateX(4px)" : "none",
          transition: "none",
        }}
      >
        {displayText}
      </span>
    </AnyTag>
  );
}

