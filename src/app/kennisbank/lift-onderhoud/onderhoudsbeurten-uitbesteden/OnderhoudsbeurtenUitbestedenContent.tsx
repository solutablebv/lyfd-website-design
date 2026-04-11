"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wanneer-uitbesteden", label: "Wanneer uitbesteden?" },
  { id: "voordelen", label: "Voordelen" },
  { id: "nadelen-risicos", label: "Nadelen en risico's" },
  { id: "stappenplan", label: "Hoe organiseer je het?" },
  { id: "contractueel", label: "Contractueel regelen" },
  { id: "caas-oplossing", label: "CaaS als oplossing" },
];

export function OnderhoudsbeurtenUitbestedenContent() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok */}
              <ScrollReveal>
                <div className="relative bg-[#F7F7F7] rounded-lg border-l-2 border-[#4928FD] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#DDDDDD] text-[#888888] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#333333] m-0">
                    <strong className="text-[#1B1D1E]">Uitbesteden van onderhoudsbeurten</strong> betekent
                    dat een liftbedrijf het periodieke onderhoud aan liftinstallaties laat
                    uitvoeren door een externe partij, in plaats van door eigen monteurs.
                    Dit kan incidenteel zijn (bij piekbelasting) of structureel (als vast
                    onderdeel van de capaciteitsplanning).{" "}
                    <span className="text-[#888888] text-xs">(Bron: LYFD, marktervaring)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Elk liftbedrijf kent het dilemma: er is meer werk dan je team aankan, maar
                  extra personeel aannemen is kostbaar en in de huidige arbeidsmarkt
                  buitengewoon lastig. Onderhoudsbeurten uitbesteden is een optie die steeds
                  meer liftbedrijven overwegen. Maar wanneer is het verstandig, en hoe
                  voorkom je dat de kwaliteit eronder lijdt?
                </p>
              </ScrollReveal>

              {/* H2: Wanneer uitbesteden? */}
              <ScrollReveal>
                <h2 id="wanneer-uitbesteden">Wanneer is uitbesteden verstandig?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er zijn verschillende situaties waarin het uitbesteden van
                  onderhoudsbeurten een logische keuze is:
                </p>
                <ul>
                  <li>
                    <strong>Capaciteitstekort.</strong> Je hebt meer installaties in
                    portefeuille dan je team kan onderhouden. Onderhoud raakt achterstallig,
                    keuringen komen in gevaar en storingen nemen toe.
                  </li>
                  <li>
                    <strong>Seizoenspieken.</strong> Perioden waarin veel keuringen
                    samenvallen of waarin vakantie en ziekte je bezetting onder druk zetten.
                  </li>
                  <li>
                    <strong>Specialistische kennis.</strong> Installaties van fabrikanten
                    waarvoor je intern geen gecertificeerde monteurs hebt. In plaats van een
                    kostbare opleiding kan uitbesteden efficienter zijn.
                  </li>
                  <li>
                    <strong>Groei.</strong> Je wilt je portefeuille uitbreiden maar hebt de
                    monteurs nog niet om het extra onderhoud op te vangen.
                  </li>
                  <li>
                    <strong>Focus.</strong> Je wilt je eigen team inzetten op complexere
                    werkzaamheden (modernisering, storingsdienst) en het routineonderhoud
                    uitbesteden.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Voordelen */}
              <ScrollReveal>
                <h2 id="voordelen">Voordelen van uitbesteden</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Flexibiliteit.</strong> Je schaalt capaciteit op en af zonder
                    vaste personeelskosten. Meer beurten nodig? Opschalen. Rustigere
                    periode? Terugschalen.
                  </li>
                  <li>
                    <strong>Geen wervingskosten.</strong> In een markt waar gekwalificeerde
                    liftmonteurs schaars zijn, bespaar je de kosten en doorlooptijd van
                    werving en selectie.
                  </li>
                  <li>
                    <strong>Gecertificeerde monteurs.</strong> Een goede capaciteitspartner
                    levert monteurs met de juiste certificeringen (NEN 3140, VCA) en
                    relevante ervaring.
                  </li>
                  <li>
                    <strong>Voorspelbare kosten.</strong> Je betaalt per beurt of per periode,
                    wat de kostencalculatie per installatie transparant maakt.
                  </li>
                  <li>
                    <strong>Continuiteit.</strong> Bij ziekte of vertrek van een eigen monteur
                    valt er geen gat. De capaciteitspartner regelt vervanging.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Nadelen en risico's */}
              <ScrollReveal>
                <h2 id="nadelen-risicos">Nadelen en risico&apos;s</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Uitbesteden is niet zonder risico. De belangrijkste aandachtspunten:
                </p>
                <ul>
                  <li>
                    <strong>Kwaliteitscontrole.</strong> Je hebt minder direct toezicht op de
                    uitvoering. Als de werkwijze van de externe monteur afwijkt van jouw
                    standaard, kan dat leiden tot kwaliteitsverschillen.
                  </li>
                  <li>
                    <strong>Installatie-kennis.</strong> Een externe monteur kent de specifieke
                    eigenaardigheden van jouw installaties niet. Een goede inwerkperiode is
                    essentieel.
                  </li>
                  <li>
                    <strong>Afhankelijkheid.</strong> Als je structureel uitbesteedt, word je
                    afhankelijk van de beschikbaarheid en betrouwbaarheid van je
                    capaciteitspartner.
                  </li>
                  <li>
                    <strong>Kosten per beurt.</strong> De kosten per beurt zijn doorgaans
                    hoger dan wanneer je een eigen monteur inzet. Daar staat tegenover dat je
                    de overheadkosten van personeel vermijdt.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Hoe organiseer je het? */}
              <ScrollReveal>
                <h2 id="stappenplan">Hoe organiseer je uitbesteding? Een stappenplan</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Stap 1: Inventariseer je capaciteitsbehoefte.</strong> Hoeveel
                    beurten per maand wil je uitbesteden? Welke installaties? Welke
                    certificeringen zijn vereist?
                  </li>
                  <li>
                    <strong>Stap 2: Selecteer een partner.</strong> Kies een
                    capaciteitspartner met aantoonbare ervaring in de liftbranche, de juiste
                    certificeringen en een bewezen track record. Vraag referenties.
                  </li>
                  <li>
                    <strong>Stap 3: Maak heldere werkafspraken.</strong> Leg vast welke
                    onderhoudsprotocollen gevolgd worden, hoe rapportage verloopt, en wie
                    verantwoordelijk is voor materialen.
                  </li>
                  <li>
                    <strong>Stap 4: Zorg voor een goede inwerking.</strong> Neem de externe
                    monteur mee langs de installaties. Deel bijzonderheden, bekende gebreken
                    en klantspecifieke afspraken.
                  </li>
                  <li>
                    <strong>Stap 5: Monitor en evalueer.</strong> Controleer werkrapporten,
                    bespreek bevindingen en stuur bij waar nodig. Een periodiek
                    evaluatiegesprek houdt de kwaliteit op peil.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Contractueel regelen */}
              <ScrollReveal>
                <h2 id="contractueel">Wat moet je contractueel regelen?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Een goede samenwerkingsovereenkomst bevat minimaal de volgende punten:
                </p>
                <ul>
                  <li>Scope: welke installaties, welk type onderhoud, hoeveel beurten</li>
                  <li>Certificeringen: welke certificeringen moet de monteur aantoonbaar bezitten</li>
                  <li>Rapportage: hoe en wanneer wordt er gerapporteerd over uitgevoerd werk</li>
                  <li>Aansprakelijkheid: wie is verantwoordelijk bij schade of fouten</li>
                  <li>Vervangingsgarantie: wat gebeurt er bij ziekte of uitval van de monteur</li>
                  <li>Geheimhouding: bescherming van klantgegevens en bedrijfsinformatie</li>
                  <li>Opzegtermijn: hoe en wanneer kan de samenwerking worden beeindigd</li>
                </ul>
              </ScrollReveal>

              {/* H2: CaaS als structurele oplossing */}
              <ScrollReveal>
                <h2 id="caas-oplossing">CaaS als structurele oplossing</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Incidenteel uitbesteden werkt als noodoplossing, maar bij structureel
                  capaciteitstekort is een structurele oplossing verstandiger. Capacity as a
                  Service (CaaS) is een model waarbij je maandelijks een vast aantal
                  onderhoudsbeurten of -uren afneemt bij een capaciteitspartner.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het verschil met traditioneel uitbesteden: bij CaaS krijg je een vaste
                  monteur die jouw installaties leert kennen, werkt volgens jouw
                  protocollen, en functioneert als verlengstuk van je team. Er is
                  vervangingsgarantie, vaste kwaliteitsafspraken en een voorspelbaar
                  kostenmodel. LYFD biedt dit model specifiek aan voor de liftbranche, met
                  monteurs die gecertificeerd zijn voor het type installaties in jouw
                  portefeuille.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Uitbesteden is geen zwaktebod. Het is een strategische keuze om je
                  capaciteit af te stemmen op je werkvoorraad, zonder de risico&apos;s van
                  overcapaciteit of onderbezetting.
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Wil je onderhoudsbeurten structureel uitbesteden?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert gecertificeerde monteurs als verlengstuk van je team. Bespreek de mogelijkheden.
              </p>
              <a
                href="/liftmonteurs/beschikbaarheid/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300"
              >
                Bespreek de mogelijkheden
                <span className="text-[#888888]">&rarr;</span>
              </a>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <ArticleSidebar items={tocItems} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
