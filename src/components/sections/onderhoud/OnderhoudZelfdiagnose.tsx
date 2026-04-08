"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import Image from "next/image";
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
    <section className="relative bg-[#FFE8E0]/20 py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(0,0,0,1) 0%, transparent 70%)",
        }}
      >
        <Image
          src="/lift-lichtinval.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover contrast-[1.05] brightness-[1.1] opacity-[0.05]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FFE8E0]/20 to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <Badge className="mb-5">Voor wie?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
                Is LYFD liftonderhoudscapaciteit iets voor jou?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-[#333333] leading-relaxed text-center max-w-[65ch] mx-auto mb-10">
              LYFD onderhoudscapaciteit is voor jou als je:
            </p>
          </ScrollReveal>

          <StaggerContainer
            className="space-y-4 max-w-2xl mx-auto"
            staggerDelay={0.1}
          >
            {checkItems.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 rounded-3xl bg-white p-5 border border-[#DDDDDD] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle
                      weight="fill"
                      className="w-6 h-6 text-[#1B1D1E]"
                    />
                  </div>
                  <p className="text-sm md:text-base text-[#1B1D1E] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Gerelateerde kennisbank artikelen */}
          <ScrollReveal delay={0.3}>
            <div className="mt-14 md:mt-18 pt-10 border-t border-[#DDDDDD]">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#888888] mb-5">Lees ook in de kennisbank</p>
              <div className="space-y-3">
                <Link href="/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Wat kost capaciteitsgebrek een liftbedrijf echt?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
                </Link>
                <Link href="/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Capaciteitsplanning voor servicecontracten</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend (into ServiceCta dark section) */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FFE8E0]/20" />
    </section>
  );
}
