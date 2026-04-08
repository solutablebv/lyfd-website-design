"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import {
  CurrencyEur,
  ShieldCheck,
  ArrowsClockwise,
  UsersThree,
  Phone,
  Laptop,
  TrendUp,
  Binoculars,
  ArrowRight,
} from "@phosphor-icons/react";
import Link from "next/link";

const voordelen = [
  {
    icon: ShieldCheck,
    title: "Vast contract, geen zzp-risico",
    text: "Je werkt in dienst van LYFD B.V. Volledige zekerheid, geen DBA-risico, geen eigen administratie.",
  },
  {
    icon: CurrencyEur,
    title: "10-15% boven CAO Metalektro",
    text: "Je vakmanschap verdient de juiste beloning. Afhankelijk van ervaring en specialisatie.",
  },
  {
    icon: ArrowsClockwise,
    title: "Afwisseling bij diverse opdrachtgevers",
    text: "Vandaag een hydraulische installatie, morgen een modernisering. Je leert continu bij.",
  },
  {
    icon: UsersThree,
    title: "Collega's met ervaring en passie",
    text: "Werk met monteurs die dezelfde passie voor het liftvak delen. Kennis uitwisselen, van elkaar leren.",
  },
  {
    icon: Phone,
    title: "Technische achterwacht (24/7)",
    text: "Loop je ergens tegenaan op locatie? Onze achterwacht staat klaar met technische ondersteuning.",
  },
  {
    icon: Laptop,
    title: "EVA platform",
    text: "Digitale ondersteuning via ons eigen platform. Liftmanuals, checklists en documentatie altijd bij de hand.",
  },
  {
    icon: TrendUp,
    title: "Groeimogelijkheden en training",
    text: "OEM-trainingen, certificeringen en doorgroeimogelijkheden. Investeren in jouw ontwikkeling is investeren in kwaliteit.",
  },
  {
    icon: Binoculars,
    title: "Een kijkje in verschillende keukens",
    text: "Werk bij OEM's, onafhankelijke liftbedrijven en gespecialiseerde onderhoudspartijen. Verbreed je ervaring.",
  },
];

export function WatLyfdBiedt() {
  return (
    <section className="relative bg-[#FFE8E0]/20 py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge variant="pastel-peach" className="mb-5">Wat LYFD biedt</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <DualHeading
              bold="Wat LYFD anders maakt"
              italic="voor monteurs"
            />
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          staggerDelay={0.08}
        >
          {voordelen.map((voordeel) => {
            const Icon = voordeel.icon;
            return (
              <StaggerItem key={voordeel.title}>
                <div className="h-full rounded-3xl bg-white border border-[#DDDDDD] p-6 md:p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    voordeel.icon === ShieldCheck ? 'bg-[#E0EAFF]' :
                    voordeel.icon === CurrencyEur ? 'bg-[#EDE8FF]' :
                    voordeel.icon === ArrowsClockwise ? 'bg-[#FFE8E0]' :
                    voordeel.icon === UsersThree ? 'bg-[#FFE4E4]' :
                    voordeel.icon === Phone ? 'bg-[#E0EAFF]' :
                    voordeel.icon === Laptop ? 'bg-[#EDE8FF]' :
                    voordeel.icon === TrendUp ? 'bg-[#FFE8E0]' :
                    'bg-[#FFE4E4]'
                  }`}>
                    <Icon weight="light" className="w-5 h-5 text-[#1B1D1E]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1B1D1E] tracking-tight leading-snug mb-2">
                    {voordeel.title}
                  </h3>
                  <p className="text-sm text-[#333333] leading-relaxed">
                    {voordeel.text}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Gerelateerde kennisbank artikelen */}
        <ScrollReveal delay={0.3}>
          <div className="mt-14 md:mt-18 pt-10 border-t border-[#DDDDDD]">
            <p className="text-xs uppercase tracking-[0.15em] font-medium text-[#888888] mb-5">Lees ook in de kennisbank</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/kennisbank/liftmonteur-gids/salaris-liftmonteur/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Wat verdient een liftmonteur?</span>
                <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
              </Link>
              <Link href="/kennisbank/liftmonteur-gids/vast-zzp-of-caas/" className="group flex items-center justify-between rounded-xl bg-white border border-[#DDDDDD] px-5 py-4 transition-all duration-500 hover:border-[#DDDDDD] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <span className="text-sm font-medium text-[#1B1D1E] group-hover:text-[#1B1D1E]">Vast, zzp of CaaS?</span>
                <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#888888] transition-transform duration-500 group-hover:translate-x-1 group-hover:text-[#1B1D1E]" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#FFE8E0]/20" />
    </section>
  );
}
