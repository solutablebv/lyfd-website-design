"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const checkItems = [
  "Servicecontracten die je eigen team structureel te dun uitrekken",
  "Regelmatig tegen ziekteverzuim, verlof of onverwachte uitval aanloopt",
  "Nieuwe contracten wilt aannemen maar de capaciteit daarvoor niet in huis hebt",
  "Zzp-afhankelijkheid wilt vervangen door een betrouwbare, compliante partner",
];

export function OnderhoudZelfdiagnose() {
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
                Is LYFD liftonderhoudscapaciteit iets voor jou?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-[#404040] leading-relaxed text-center mb-10">
              LYFD onderhoudscapaciteit is voor jou als je:
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

          {/* Gerelateerde kennisbank artikelen */}
          <ScrollReveal delay={0.3}>
            <div className="mt-14 md:mt-18 pt-10 border-t border-[#EBEBEB]">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#A0A0A0] mb-5">Lees ook in de kennisbank</p>
              <div className="space-y-3">
                <Link href="/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" className="group flex items-center justify-between rounded-xl bg-white border border-[#EBEBEB] px-5 py-4 transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2A2A2A]">Wat kost capaciteitsgebrek een liftbedrijf echt?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#2A2A2A]" />
                </Link>
                <Link href="/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" className="group flex items-center justify-between rounded-xl bg-white border border-[#EBEBEB] px-5 py-4 transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1A1A1A] group-hover:text-[#2A2A2A]">Capaciteitsplanning voor servicecontracten</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#A0A0A0] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#2A2A2A]" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend (into ServiceCta dark section) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
