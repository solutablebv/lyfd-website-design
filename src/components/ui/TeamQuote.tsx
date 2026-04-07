"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface TeamQuoteProps {
  quote: string;
  name: string;
  role: string;
}

export function TeamQuote({ quote, name, role }: TeamQuoteProps) {
  return (
    <ScrollReveal>
      <div className="max-w-2xl mx-auto py-8 md:py-12">
        <div className="relative pl-6 border-l-2 border-[#A0704C]">
          <p className="text-base md:text-lg text-[#3D3A37] leading-[1.7] italic">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F2F0ED] flex items-center justify-center">
              <span className="text-[10px] font-bold font-mono text-[#6B6560]">
                {name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1A1A1A]">{name}</p>
              <p className="text-xs text-[#9C9690]">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
