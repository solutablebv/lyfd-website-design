"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { Certificate, ShieldCheck, ArrowsClockwise } from "@phosphor-icons/react";
import Image from "next/image";

const trustIndicators = [
  {
    icon: Certificate,
    title: "Branchekennis",
    description:
      "Wij matchen op certificering, OEM-ervaring en projecttype. Niet op beschikbaarheid.",
  },
  {
    icon: ShieldCheck,
    title: "DBA-compliant",
    description:
      "Alle inzet via LYFD B.V. Geen ZZP-risico. Geen juridische grijs gebied.",
  },
  {
    icon: ArrowsClockwise,
    title: "Gegarandeerde continuïteit",
    description:
      "Als een monteur uitvalt, leveren wij vervanging. Dat is de afspraak, niet een gunst.",
  },
];

export function GuideSection() {
  return (
    <section className="relative bg-[#F8F8F8] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      {/* Subtle background image */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 60%)",
          WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 60%)",
        }}
      >
        <Image
          src="/modern-door.jpg"
          alt=""
          fill
          sizes="50vw"
          className="object-cover grayscale contrast-[1.1] brightness-[1.05]"
          loading="lazy"
        />
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <Badge className="mb-5">Waarom LYFD</Badge>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                LYFD: de capaciteitspartner die de liftbranche kent
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-[#404040] leading-[1.75] max-w-[50ch]">
                Wij zijn geen uitzendbureau. Wij zijn geen headhunter. LYFD is een
                Capacity as a Service platform, gebouwd door mensen die weten wat
                een MRL is, wat een hydraulische installatie vraagt, en welk
                certificaat een monteur nodig heeft voor een KONE-installatie. Dat
                maakt het verschil.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column (7 cols) */}
          <div className="lg:col-span-7">
            <StaggerContainer className="space-y-4" staggerDelay={0.15}>
              {trustIndicators.map((item) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={item.title}>
                    <div className="group rounded-2xl bg-white p-6 md:p-8 border border-[#EBEBEB] shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-[#DCDCDC]">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#F0F0F0] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-[#EBEBEB]">
                          <Icon
                            weight="light"
                            className="w-6 h-6 text-[#2A2A2A]"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-[#404040] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
