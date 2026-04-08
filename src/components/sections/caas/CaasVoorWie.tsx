"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

const scenarios = [
  {
    number: "01",
    title: "Structureel tekort",
    description:
      "Je hebt meer contracten dan monteurs. Routes blijven liggen, klanten wachten.",
  },
  {
    number: "02",
    title: "Vervanging bij ziekte",
    description:
      "Een monteur valt uit. De route moet morgen gereden worden.",
  },
  {
    number: "03",
    title: "Alternatief voor zzp",
    description:
      "Je wilt geen DBA-risico meer. Maar je hebt wel flexibele inzet nodig.",
  },
  {
    number: "04",
    title: "Projectcapaciteit",
    description:
      "Een moderniseringsproject vraagt tijdelijk extra handen.",
  },
  {
    number: "05",
    title: "Piekbelasting",
    description:
      "Seizoensgebonden drukte, of een grote klant die ineens opschaalt.",
  },
  {
    number: "06",
    title: "Expertise",
    description:
      "Je hebt een specifieke OEM-certificering nodig die je intern niet hebt.",
  },
];

export function CaasVoorWie() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
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
          src="/urban-lobby-liften.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover contrast-[1.05] brightness-[1.1] opacity-[0.05]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-18">
              <Badge className="mb-5">Voor wie?</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
                Wanneer zetten liftbedrijven LYFD in?
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
            staggerDelay={0.08}
          >
            {scenarios.map((scenario) => (
              <StaggerItem key={scenario.number}>
                <div className="h-full rounded-3xl bg-[#F7F7F7] border border-[#DDDDDD] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <span className="font-mono text-xs text-[#888888] mb-3 block">
                    {scenario.number}
                  </span>
                  <h3 className="text-base font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.3}>
            <p className="mt-12 md:mt-16 text-base md:text-lg text-[#333333] leading-relaxed text-center max-w-2xl mx-auto">
              Elke situatie is anders. Daarom begint elk traject met een
              capaciteitsgesprek waarin we samen bepalen wat jouw organisatie
              nodig heeft.
            </p>
          </ScrollReveal>

          {/* Gerelateerde kennisbank artikelen */}
          <ScrollReveal delay={0.4}>
            <div className="mt-14 md:mt-18 pt-10 border-t border-[#DDDDDD]">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#888888] mb-5">Lees ook in de kennisbank</p>
              <div className="space-y-3">
                <Link href="/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" className="group flex items-center justify-between rounded-xl bg-[#F7F7F7] border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">CaaS vs. uitzendbureau: wat is het verschil?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
                </Link>
                <Link href="/kennisbank/caas-uitgelegd/welk-caas-model/" className="group flex items-center justify-between rounded-xl bg-[#F7F7F7] border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Welk CaaS-model past bij jouw liftbedrijf?</span>
                  <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
