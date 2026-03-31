"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HetVerhaal() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Badge className="mb-5">Het verhaal</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-[#1A1A1A]">
              Waarom LYFD bestaat
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-base md:text-lg text-[#404040] leading-relaxed">
              Nederland heeft ruim 105.000 liftinstallaties. Die worden onderhouden, gemoderniseerd en gebouwd door naar schatting 1.600 tot 1.800 monteurs. De rekensom is simpel: er is structureel te weinig capaciteit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed">
              Liftbedrijven lossen dit op met zzp'ers (DBA-risico), uitzendbureaus (geen branchekennis) of wachten (verloren omzet). Geen van deze oplossingen is duurzaam.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-base md:text-lg text-[#404040] leading-relaxed">
              LYFD is gebouwd vanuit de overtuiging dat het anders kan. Een platform dat uitsluitend voor de liftindustrie werkt. Met monteurs die de installaties kennen. Met een model dat juridisch, operationeel en financieel klopt.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-6 text-xs text-[#A0A0A0] font-mono">
              Bron: LYFD, marktervaring 5 jaar
            </p>
          </ScrollReveal>
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
