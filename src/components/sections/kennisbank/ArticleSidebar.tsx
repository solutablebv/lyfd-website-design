"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  label: string;
}

interface ArticleSidebarProps {
  items: TocItem[];
}

export function ArticleSidebar({ items }: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    // Set first item as active by default
    setActiveId(items[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible heading
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Use the first visible one (topmost in the DOM)
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -60% 0px",
        threshold: 0,
      }
    );

    for (const heading of headings) {
      observer.observe(heading);
    }

    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update active state immediately on click
        setActiveId(id);
        // Update URL hash without jump
        window.history.pushState(null, "", `#${id}`);
      }
    },
    []
  );

  return (
    <nav className="hidden xl:block sticky top-32">
      <h4 className="text-xs font-semibold text-[#A0A0A0] uppercase tracking-[0.15em] mb-4">
        In dit artikel
      </h4>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={cn(
                "block py-1.5 pl-4 text-sm leading-snug border-l-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                activeId === item.id
                  ? "border-[#1A1A1A] text-[#1A1A1A] font-medium"
                  : "border-transparent text-[#A0A0A0] hover:text-[#6B6B6B] hover:border-[#EBEBEB]"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
