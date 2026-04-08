"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Phone,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const contactCards = [
  {
    icon: Phone,
    title: "Bel ons",
    text: "Direct spreken met het team",
    subtext: "Ma-vr 08:00 - 18:00",
    color: "bg-[#EDE8FF]",
    href: "tel:+31612345678",
  },
  {
    icon: WhatsappLogo,
    title: "WhatsApp",
    text: "Stuur ons een bericht",
    subtext: "Reactie binnen 1 uur",
    color: "bg-[#E0EAFF]",
    href: "https://wa.me/31612345678",
  },
  {
    icon: EnvelopeSimple,
    title: "Email",
    text: "info@lyfd.nl",
    subtext: "Reactie binnen 1 werkdag",
    color: "bg-[#FFE8E0]",
    href: "mailto:info@lyfd.nl",
  },
];

export function ContactInfo() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className={`${card.color} rounded-3xl p-7 md:p-8 block transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
              >
                <card.icon weight="duotone" className="w-8 h-8 text-[#4928FD] mb-5" />
                <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight mb-1">
                  {card.text}
                </p>
                <p className="text-sm text-[#888888]">{card.subtext}</p>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
