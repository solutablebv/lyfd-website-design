"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ClipboardText,
  UsersThree,
  CheckCircle,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    icon: ClipboardText,
    title: "Inventariseer je reparatielijst",
    description:
      "Welke installaties, welke onderdelen, welke prioriteit. Breng de achterstand in kaart zodat wij gericht kunnen matchen.",
  },
  {
    number: "02",
    icon: UsersThree,
    title: "Wij matchen monteurs met de juiste ervaring",
    description:
      "Component-specifiek: deuren, besturing, hydrauliek. Geen generalisten, maar monteurs die precies weten wat ze doen bij het onderdeel dat vervangen moet worden.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Systematisch wegwerken",
    description:
      "Planmatig, van hoge naar lage prioriteit. Veiligheidskritisch eerst, daarna preventief en kosmetisch. Jij bepaalt het tempo.",
  },
];

export function ReparatieAanpak() {
  return (
    <section className="relative bg-[#F8F8F8] py-32 md:py-44 overflow-hidden">
      {/* Decorative background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 60%)",
          WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 60%)",
        }}
      >
        <Image
          src="/lift-staalkabels.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover grayscale contrast-[1.05] brightness-[1.1] opacity-[0.06]"
          loading="lazy"
        />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Het plan</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              LYFD pakt je reparatieberg aan
            </h2>
          </ScrollReveal>
        </div>

        {/* Vertical timeline */}
        <div className="mt-16 md:mt-24 max-w-2xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-px bg-[#EBEBEB]" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#1A1A1A] flex items-center justify-center z-10">
                      <Icon
                        weight="bold"
                        className="w-5 h-5 md:w-6 md:h-6 text-white"
                      />
                    </div>

                    {/* Step number */}
                    <span className="text-xs font-mono font-medium text-[#A0A0A0] uppercase tracking-wider">
                      Stap {step.number}
                    </span>

                    <h3 className="mt-2 text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#404040] leading-relaxed max-w-[50ch]">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
