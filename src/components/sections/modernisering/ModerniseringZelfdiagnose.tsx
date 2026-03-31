"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { CheckCircle } from "@phosphor-icons/react";

const checkItems = [
  "Je een moderniseringsportefeuille hebt en structureel tegen capaciteitsdruk aanloopt",
  "Je incidenteel een groot project binnenkrijgt dat je eigen team overstijgt",
  "Je geregeld te maken hebt met uitval op het verkeerde moment in een project",
  "Je boeteclausules in je contracten hebt en dat risico wilt afdekken",
];

export function ModerniseringZelfdiagnose() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <Badge className="mb-5">Voor wie?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
                Is LYFD moderniseringscapaciteit iets voor jou?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed text-center mb-10">
              LYFD moderniseringscapaciteit is voor jou als:
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="space-y-4 max-w-2xl mx-auto"
            staggerDelay={0.1}
          >
            {checkItems.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-[#EBEBEB] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      weight="fill"
                      className="w-6 h-6 text-[#2A2A2A]"
                    />
                  </div>
                  <p className="text-sm md:text-base text-[#1A1A1A] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
