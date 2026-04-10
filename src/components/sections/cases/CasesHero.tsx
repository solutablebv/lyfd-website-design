"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DualHeading } from "@/components/ui/DualHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CasesHero() {
  return (
    <section className="relative bg-white pt-40 pb-20 md:pt-48 md:pb-28">
      <Container>
        <div className="max-w-3xl">
          <ScrollReveal>
            <Badge variant="pastel-blue" className="mb-5">
              Resultaten
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="Projecten die"
              italic="spreken"
              as="h1"
              size="hero"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-[#333333] leading-[1.75] max-w-[55ch]">
              Concrete resultaten van liftbedrijven die met LYFD werken.
              Geanonimiseerd op verzoek, maar de cijfers zijn echt.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
