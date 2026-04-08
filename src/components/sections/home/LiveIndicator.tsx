"use client";

import { Container } from "@/components/ui/Container";

export function LiveIndicator() {
  return (
    <section className="relative bg-white py-4">
      <Container>
        <div className="flex items-center justify-center gap-3">
          {/* Pulserende groene dot */}
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#22C55E] animate-ping opacity-75" />
          </div>
          <span className="text-xs text-[#888888] font-mono tracking-wide">
            Op dit moment <span className="font-semibold text-[#4928FD]">12</span> monteurs actief in het veld
          </span>
        </div>
      </Container>
    </section>
  );
}
