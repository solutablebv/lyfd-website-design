"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TeamPlaceholder() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Team</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              De mensen achter LYFD
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 md:mt-18 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-10 md:p-14">
              <p className="text-sm md:text-base text-[#6B6B6B] leading-relaxed">
                [Wordt aangevuld met oprichtersprofiel en foto&apos;s]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
