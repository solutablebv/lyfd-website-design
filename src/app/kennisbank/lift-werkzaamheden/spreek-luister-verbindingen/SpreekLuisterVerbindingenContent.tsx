"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-is-spreek-luister", label: "Wat is het?" },
  { id: "wettelijke-eisen", label: "Wettelijke eisen" },
  { id: "wanneer-vervangen", label: "Wanneer vervangen?" },
  { id: "installatie", label: "Installatie" },
  { id: "onderhoud", label: "Onderhoud" },
  { id: "kosten-planning", label: "Kosten en planning" },
  { id: "uitbesteden", label: "Wanneer uitbesteden?" },
];

export function SpreekLuisterVerbindingenContent() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok (AEO-geoptimaliseerd) */}
              <ScrollReveal>
                <div className="relative bg-[#F7F7F7] rounded-lg border-l-2 border-[#4928FD] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#DDDDDD] text-[#888888] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#333333] m-0">
                    <strong className="text-[#1B1D1E]">Een spreek-luister verbinding</strong> is
                    een noodcommunicatiesysteem in een liftinstallatie waarmee een ingesloten
                    passagier contact kan leggen met een alarmcentrale of bewakingspost. De
                    verbinding is wettelijk verplicht op basis van de Europese norm EN 81-28 en
                    vormt een essentieel onderdeel van de liftveiligheid.{" "}
                    <span className="text-[#888888] text-xs">(Bron: EN 81-28, Warenwetbesluit Liften)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Elke lift waarin personen vervoerd worden, moet beschikken over een werkende
                  noodcommunicatievoorziening. Dat klinkt vanzelfsprekend, maar in de praktijk
                  zien we dat spreek-luister verbindingen regelmatig verouderd, slecht onderhouden
                  of niet conform de huidige normen zijn. Zeker nu telecomproviders het analoge
                  telefonienetwerk afbouwen, is dit een actueel thema voor elk liftbedrijf.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel bespreken we wat een spreek-luister verbinding precies is, welke
                  wettelijke eisen eraan gesteld worden, wanneer vervanging nodig is en wat er bij
                  de installatie komt kijken.
                </p>
              </ScrollReveal>

              {/* H2: Wat is een spreek-luister verbinding? */}
              <ScrollReveal>
                <h2 id="wat-is-spreek-luister">Wat is een spreek-luister verbinding?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Een spreek-luister verbinding, ook wel noodtelefoon of lifttelefoon genoemd, is
                  het communicatiesysteem dat passagiers in staat stelt om bij insluiting hulp in
                  te roepen. Het systeem bestaat uit een intercom of telefoonunit in de liftkooi,
                  bekabeling door de schacht, en een verbinding met een externe alarmcentrale.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Moderne systemen werken digitaal via GSM of 4G en kunnen naast spraak ook
                  data versturen, zoals de locatie van de lift en storingscodes. Oudere systemen
                  werken via het analoge telefoonnetwerk (PSTN), dat in Nederland gefaseerd wordt
                  uitgefaseerd. Dit maakt vervanging voor veel installaties urgent.
                </p>
              </ScrollReveal>

              {/* H2: Wettelijke eisen */}
              <ScrollReveal>
                <h2 id="wettelijke-eisen">Wettelijke eisen: EN 81-28 en het Warenwetbesluit</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De EN 81-28 is de Europese norm die de eisen aan noodcommunicatie in liften
                  vastlegt. De belangrijkste vereisten zijn:
                </p>
                <ul>
                  <li>
                    <strong>Tweewegcommunicatie.</strong> De passagier moet kunnen spreken en
                    luisteren. Een eenzijdige alarmknop is niet voldoende.
                  </li>
                  <li>
                    <strong>Automatische activering.</strong> Het systeem moet automatisch contact
                    leggen met de alarmcentrale wanneer de alarmknop wordt ingedrukt.
                  </li>
                  <li>
                    <strong>Automatische testcyclus.</strong> De verbinding moet minimaal elke 72
                    uur automatisch getest worden op werking.
                  </li>
                  <li>
                    <strong>Noodstroomvoorziening.</strong> Het systeem moet minimaal 1 uur
                    functioneren bij stroomuitval, via een batterijback-up.
                  </li>
                  <li>
                    <strong>24/7 bereikbaarheid.</strong> De alarmcentrale moet permanent bemand
                    zijn en binnen 30 seconden opnemen.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In Nederland is deze norm verankerd in het Warenwetbesluit Liften. Bij elke
                  liftkeuring wordt de werking van de spreek-luister verbinding gecontroleerd.
                  Voldoet het systeem niet, dan kan de lift worden afgekeurd.
                </p>
              </ScrollReveal>

              {/* H2: Wanneer vervangen? */}
              <ScrollReveal>
                <h2 id="wanneer-vervangen">Wanneer moet een spreek-luister verbinding vervangen worden?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er zijn verschillende signalen die wijzen op de noodzaak van vervanging:
                </p>
                <ul>
                  <li>
                    <strong>Analoge verbinding.</strong> Als het systeem nog via het PSTN-netwerk
                    werkt, is vervanging op korte termijn noodzakelijk vanwege de uitfasering van
                    analoge telefonie in Nederland.
                  </li>
                  <li>
                    <strong>Slechte spraakkwaliteit.</strong> Ruis, echo of onduidelijke
                    communicatie tijdens testen.
                  </li>
                  <li>
                    <strong>Mislukte automatische testen.</strong> Als het 72-uurstestprotocol
                    regelmatig faalt.
                  </li>
                  <li>
                    <strong>Verouderde hardware.</strong> Apparatuur ouder dan 10 tot 15 jaar
                    waarbij reserveonderdelen lastig verkrijgbaar zijn.
                  </li>
                  <li>
                    <strong>Keuring met opmerking.</strong> Als de inspectie-instelling bij de
                    keuring opmerkingen plaatst over de noodcommunicatie.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Installatie */}
              <ScrollReveal>
                <h2 id="installatie">Installatie: wat komt erbij kijken?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De installatie van een spreek-luister verbinding omvat meerdere stappen. De
                  exacte omvang hangt af van of het een nieuwbouwinstallatie betreft of een
                  vervanging in een bestaande lift.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Bij vervanging:</strong> De bestaande unit in de kooi wordt verwijderd
                  en vervangen door een nieuw systeem. De bekabeling in de schacht wordt
                  gecontroleerd en waar nodig vervangen. Bij een overgang van analoog naar
                  digitaal wordt een GSM-module geplaatst, inclusief SIM-kaart en antenne. Na
                  installatie volgt een volledige test: spraakkwaliteit, batterijback-up,
                  automatische testcyclus en verbinding met de alarmcentrale.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Bij nieuwbouw:</strong> De bekabeling wordt meegenomen in het
                  installatieontwerp. De positie van de intercom in de kooi, de routing van
                  kabels door de schacht en de aansluiting op het netwerk worden vooraf bepaald.
                  Dit is doorgaans eenvoudiger dan vervanging, omdat er geen bestaande
                  installatie ontmanteld hoeft te worden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Na installatie moet het systeem worden opgenomen in het liftlogboek en wordt
                  het bij de eerstvolgende keuring gecontroleerd door de inspectie-instelling.
                </p>
              </ScrollReveal>

              {/* H2: Onderhoud */}
              <ScrollReveal>
                <h2 id="onderhoud">Onderhoud: hoe vaak en wat controleren?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Onderhoud aan de spreek-luister verbinding is onderdeel van het reguliere
                  liftonderhoud. De volgende zaken verdienen aandacht:
                </p>
                <ul>
                  <li>
                    <strong>Spraaktest.</strong> Bij elk onderhoudsbezoek een handmatige test
                    uitvoeren: druk op de alarmknop, controleer of de verbinding tot stand komt
                    en of de spraakkwaliteit voldoende is.
                  </li>
                  <li>
                    <strong>Batterijcontrole.</strong> De noodstroomaccu heeft een beperkte
                    levensduur (doorgaans 3 tot 5 jaar). Controleer de staat en vervang tijdig.
                  </li>
                  <li>
                    <strong>Automatische testlog.</strong> Controleer of de 72-uurstests correct
                    worden uitgevoerd en gelogd. Sommige systemen sturen automatische meldingen
                    bij falen.
                  </li>
                  <li>
                    <strong>SIM-kaart en abonnement.</strong> Bij GSM-systemen: controleer of de
                    SIM-kaart actief is en of het dataverkeer correct functioneert.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Kosten en planning */}
              <ScrollReveal>
                <h2 id="kosten-planning">Kosten en planning</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De kosten voor een spreek-luister verbinding hangen af van meerdere factoren:
                  het type systeem, de staat van de bestaande bekabeling, en of er een nieuw
                  abonnement bij een alarmcentrale afgesloten moet worden. Reken indicatief op
                  enkele honderden euro&apos;s voor een eenvoudige vervanging tot ruim duizend
                  euro voor een volledige upgrade van analoog naar digitaal, exclusief het
                  maandelijkse abonnement. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Qua planning: een vervanging duurt doorgaans een halve dag tot een dag per
                  lift. De lift moet tijdens de werkzaamheden buiten bedrijf, maar de
                  doorlooptijd is beperkt. Bij grotere portefeuilles is het verstandig om de
                  vervangingen gefaseerd te plannen.
                </p>
              </ScrollReveal>

              {/* H2: Wanneer uitbesteden? */}
              <ScrollReveal>
                <h2 id="uitbesteden">Wanneer uitbesteden?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De installatie en vervanging van spreek-luister verbindingen is
                  specialistisch werk dat certificering en kennis van de EN 81-28 vereist. Voor
                  liftbedrijven die deze werkzaamheden niet regelmatig uitvoeren of die te
                  maken hebben met een piek in vervangingen (bijvoorbeeld door de uitfasering
                  van analoge telefonie), kan het uitbesteden van deze werkzaamheden een
                  verstandige keuze zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD levert gecertificeerde monteurs die ervaring hebben met de installatie
                  en vervanging van noodcommunicatiesystemen in liften. Dat betekent dat je de
                  capaciteit kunt opschalen wanneer het nodig is, zonder dat je zelf extra
                  personeel hoeft aan te nemen of op te leiden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Een werkende spreek-luister verbinding is geen optie, maar een wettelijke
                  verplichting. Zorg dat je systemen op orde zijn voordat de inspecteur langskomt.
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Hulp nodig bij de installatie of vervanging van spreek-luister verbindingen?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert gekwalificeerde monteurs voor noodcommunicatie-installaties. Neem contact op voor de mogelijkheden.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300"
              >
                Neem contact op
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
