"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Certificate,
  Users,
  ArrowsClockwise,
  Toolbox,
  Timer,
} from "@phosphor-icons/react";

const usps = [
  {
    icon: Certificate,
    title: "Gecertificeerde monteurs voor nieuwbouwinstallatie",
    description:
      "Alle LYFD-monteurs die voor nieuwbouwprojecten worden ingezet, zijn gecertificeerd voor de betreffende installaties en OEM-typen. Wij matchen op basis van jouw project en de vereiste kennis.",
  },
  {
    icon: Users,
    title: "Combiteams voor efficiency",
    description:
      "Een senior monteur leidt het technisch complexe werk, een junior ondersteunt. Sneller, goedkoper, en veiliger dan een homogeen team van een niveau.",
  },
  {
    icon: ArrowsClockwise,
    title: "Vervangingsgarantie",
    description:
      "Als een monteur uitvalt, wordt er vervangen. Geen gat in de ploeg, geen risico voor de opleverdatum.",
  },
  {
    icon: Toolbox,
    title: "Volledig uitgerust",
    description:
      "Auto, gereedschapspakket, PBM, verzekering. Alles is inbegrepen. Niets hoef jij voor te schieten.",
  },
  {
    icon: Timer,
    title: "Projectduur flexibel",
    description:
      "Wij leveren voor de exacte duur van het project. Loopt het langer? We passen aan. Eerder klaar? We schalen af. Geen onnodige kosten.",
  },
];

export function NieuwbouwAanpak() {
  return (
    <section className="relative bg-[#F8F8F8] py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F8F8F8] to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Onze aanpak</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Hoe levert LYFD capaciteit voor nieuwbouwprojecten?
            </h2>
          </ScrollReveal>
        </div>

        {/* Zig-zag feature blocks */}
        <div className="mt-16 md:mt-24 space-y-6 md:space-y-0">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={usp.title} delay={index * 0.08}>
                <div
                  className={`md:grid md:grid-cols-12 md:gap-8 lg:gap-12 items-center ${
                    index > 0 ? "md:mt-0 mt-6" : ""
                  } ${index < usps.length - 1 ? "md:pb-16 lg:pb-20" : ""}`}
                >
                  {/* Number + Icon block */}
                  <div
                    className={`md:col-span-4 lg:col-span-4 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="flex items-center gap-4 md:justify-center mb-5 md:mb-0">
                      <div className="relative">
                        <span className="text-[5rem] md:text-[6rem] font-bold tracking-tighter text-[#EBEBEB]/50 leading-none select-none font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="absolute bottom-2 right-0 w-12 h-12 rounded-2xl bg-[#F0F0F0] flex items-center justify-center">
                          <Icon
                            weight="light"
                            className="w-6 h-6 text-[#2A2A2A]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <div
                    className={`md:col-span-8 lg:col-span-8 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight">
                      {usp.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#404040] leading-relaxed max-w-[55ch]">
                      {usp.description}
                    </p>
                  </div>
                </div>

                {/* Divider between items */}
                {index < usps.length - 1 && (
                  <div className="hidden md:block my-0 h-px bg-gradient-to-r from-transparent via-[#EBEBEB] to-transparent max-w-lg mx-auto" />
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
