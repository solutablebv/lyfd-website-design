"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import {
  CalendarCheck,
  Handshake,
  TrendUp,
  ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";

const outcomes = [
  {
    icon: CalendarCheck,
    title: "Opgeleverd op datum",
    description:
      "Geen uitloop, geen boeteclausules, geen ongemakkelijke telefoontjes naar de opdrachtgever. Het project wordt afgerond zoals afgesproken.",
  },
  {
    icon: Handshake,
    title: "Opdrachtgever tevreden",
    description:
      "Een soepel project versterkt de relatie. Tevreden opdrachtgevers komen terug, en ze vertellen het door.",
  },
  {
    icon: TrendUp,
    title: "Volgende project al in de planning",
    description:
      "Met betrouwbare capaciteit achter de hand durf je grotere projecten aan te nemen. Je orderportefeuille groeit, zonder dat je team onder druk staat.",
  },
];

export function ModerniseringWatJeKrijgt() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Het resultaat</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Na het project: wat je hebt bereikt
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-[#404040] leading-relaxed max-w-[55ch] mx-auto">
              Opgeleverd op datum. Opdrachtgever tevreden. Volgende project al in
              de planning. Dat is het verschil van een capaciteitspartner die
              levert.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.1}
        >
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-7 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center mb-6">
                    <Icon weight="bold" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight leading-snug text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#404040] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA link */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/aanvraag/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A1A] hover:gap-3 transition-all duration-300"
            >
              Plan je project in
              <ArrowRight weight="bold" className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
