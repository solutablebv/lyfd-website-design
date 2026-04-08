"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { DualHeading } from "@/components/ui/DualHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export function OverHero() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      {/* Multi-color gradient background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(237,232,255,0.6) 0%, transparent 70%), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(224,234,255,0.5) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 60% 80%, rgba(255,232,224,0.4) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Over LYFD" },
            ]}
            className="mb-8"
          />
        </ScrollReveal>

        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.05}>
            <Badge variant="pastel-lilac" className="mb-6">
              Over LYFD
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.svg"
                alt="LYFD"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <DualHeading
              bold="Gebouwd voor de liftindustrie."
              italic="Door mensen die het vak kennen."
              as="h1"
              size="hero"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-[#333333] leading-relaxed max-w-[60ch] mx-auto">
              Een team van gepassioneerde liftspecialisten, ontwikkelaars en
              vakmannen. Samen bouwen we aan de toekomst van capaciteit in de
              liftbranche.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="#team" variant="primary" size="lg" icon="arrow-right">
                Ontmoet het team
              </Button>
              <Button href="/contact/" variant="ghost" size="lg" icon="arrow-right">
                Neem contact op
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
