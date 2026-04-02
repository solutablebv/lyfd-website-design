"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  duration?: string;
  gap?: string;
}

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  duration = "35s",
  gap = "1.5rem",
}: MarqueeProps) {
  const animationStyle = {
    "--marquee-duration": duration,
    "--marquee-gap": gap,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        vertical ? "flex-col" : "flex-row",
        className
      )}
      style={{
        ...animationStyle,
        gap: gap,
      }}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0",
            vertical ? "flex-col" : "flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
          style={{
            gap: gap,
            animation: `${vertical ? "marquee-vertical" : "marquee"} var(--marquee-duration) linear infinite${reverse ? " reverse" : ""}`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
