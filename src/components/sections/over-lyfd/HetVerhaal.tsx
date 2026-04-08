"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import Image from "next/image";

export function HetVerhaal() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      {/* Decorative background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/lift-lichtinval.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het verhaal</Badge>
            <DualHeading
              bold="Waarom LYFD"
              italic="bestaat"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-base md:text-lg text-[#333333] leading-relaxed">
              In 5 jaar tijd zag ik hetzelfde patroon bij elk liftbedrijf waar ik werkte. Het onderhoud moest gebeuren, de contracten lagen klaar, maar er waren simpelweg niet genoeg mensen. Directeuren die nee moesten zeggen tegen nieuwe klanten. Monteurs die overbelast raakten. En de oplossingen die er waren (zzp-constructies, uitzendbureaus zonder branchekennis) losten niets structureel op.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed">
              Nederland heeft ruim 105.000 liftinstallaties. Die worden onderhouden, gemoderniseerd en gebouwd door naar schatting 1.600 tot 1.800 monteurs. De rekensom is simpel: er is structureel te weinig capaciteit. En dat probleem wordt elk jaar groter.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-[#333333] leading-relaxed">
              LYFD is het antwoord op die uitdaging. Geen uitzendbureau, geen detacheerder, maar een capaciteitspartner die de liftbranche van binnenuit kent. We weten welk certificaat een monteur nodig heeft voor een specifieke installatie. We weten het verschil tussen een OEM-servicecontract en een onafhankelijke onderhoudsportefeuille. En we hebben het model gebouwd dat juridisch, operationeel en financieel klopt.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 rounded-3xl bg-[#F7F7F7] border border-[#DDDDDD] p-7 md:p-8">
              <p className="text-base md:text-lg text-[#1B1D1E] font-medium leading-relaxed">
                &ldquo;De liftbranche verdient een capaciteitsoplossing die de branche begrijpt. Dat is waar LYFD voor gebouwd is.&rdquo;
              </p>
              <p className="mt-4 text-sm text-[#888888]">
                Peter Koenhen, oprichter LYFD
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="mt-6 text-xs text-[#888888] font-mono">
              Bron: LYFD, marktervaring 5 jaar
            </p>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
