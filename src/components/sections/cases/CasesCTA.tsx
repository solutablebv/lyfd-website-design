"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CasesCTA() {
  return (
    <section className="relative bg-[#F7F7F7] py-32 md:py-44">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Wil je het volgende succesverhaal zijn?
            </h2>
            <div className="mt-8">
              <Button
                href="/aanvraag/"
                variant="primary"
                size="lg"
                icon="arrow-right"
              >
                Plan een capaciteitsgesprek
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
