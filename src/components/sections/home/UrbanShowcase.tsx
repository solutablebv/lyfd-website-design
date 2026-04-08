"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import StackedPanels from "@/components/ui/StackedPanels";

const mobileImages = [
  "/urban-lift-avond.jpg",
  "/urban-wolkenkrabbers.jpg",
  "/urban-bovenaanzicht.jpg",
  "/urban-lobby-liften.jpg",
  "/urban-atrium-lift.jpg",
  "/urban-straat.jpg",
];

export function UrbanShowcase() {
  return (
    <section className="relative bg-white py-8 md:py-16 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <Badge className="mb-5">De wereld die we bedienen</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              105.000 installaties. Elk gebouw telt.
            </h2>
          </div>
        </ScrollReveal>

        {/* Desktop: StackedPanels 3D effect */}
        <div className="hidden md:block h-[70vh] w-full">
          <StackedPanels />
        </div>

        {/* Mobile: Photo grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {mobileImages.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/5] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover grayscale-[30%]"
                sizes="50vw"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(27,29,30,0.2)]" />
            </div>
          ))}
        </div>

        <p className="hidden md:block text-center text-xs text-[#888888] mt-6 font-mono">
          Beweeg je cursor om te interacteren
        </p>
      </Container>
    </section>
  );
}
