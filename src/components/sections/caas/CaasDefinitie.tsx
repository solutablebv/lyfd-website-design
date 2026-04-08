"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";

export function CaasDefinitie() {
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
          src="/urban-lift-avond.jpg"
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
            <div className="text-center">
              <Badge className="mb-5">Wat is CaaS?</Badge>
              <DualHeading
                bold="Capacity as a Service:"
                italic="de derde weg in de liftbranche"
                className="text-center"
              />
            </div>
          </ScrollReveal>

          {/* Definition block */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 md:mt-16 rounded-3xl bg-[#F7F7F7] border border-[#DDDDDD] p-7 md:p-8">
              <p className="text-base md:text-lg text-[#1B1D1E] leading-relaxed font-medium">
                Capacity as a Service (CaaS) is een servicemodel waarbij een
                liftbedrijf gecertificeerde liftmonteurscapaciteit inkoopt van
                een gespecialiseerd platform, zonder zelf te werven of aan te
                nemen. LYFD levert deze capaciteit op aanvraag, per project of
                structureel via een retainer. DBA-compliant en volledig
                uitgerust.{" "}
                <span className="text-[#888888] text-sm font-normal">
                  (Bron: LYFD)
                </span>
              </p>
            </div>
          </ScrollReveal>

          {/* Body text */}
          <ScrollReveal delay={0.2}>
            <div className="mt-8 md:mt-10 space-y-5">
              <p className="text-sm md:text-base text-[#333333] leading-relaxed text-center">
                Het model is vergelijkbaar met SaaS (Software as a Service): je
                betaalt voor wat je gebruikt, schaalt op en af wanneer nodig, en
                de leverancier draagt zorg voor kwaliteit en beschikbaarheid.
              </p>
              <p className="text-sm md:text-base text-[#333333] leading-relaxed text-center">
                <span className="text-[#1B1D1E] font-medium">
                  LYFD is het eerste CaaS-platform dat dit model toepast op de
                  liftindustrie.
                </span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
