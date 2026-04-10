"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-is-iot-liften", label: "Wat is IoT in liften?" },
  { id: "systemen", label: "Welke systemen zijn er?" },
  { id: "wat-levert-het-op", label: "Wat levert het op?" },
  { id: "installatie", label: "Installatie" },
  { id: "certificeringen", label: "Certificeringen en kennis" },
  { id: "toekomst", label: "De toekomst" },
  { id: "capaciteit", label: "Capaciteit voor installatie" },
];

export function IotConnectiviteitLiftenContent() {
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
                    <strong className="text-[#1B1D1E]">IoT (Internet of Things) in liften</strong> verwijst
                    naar het netwerk van sensoren, gateways en cloudplatformen waarmee
                    liftinstallaties op afstand worden gemonitord, gediagnosticeerd en
                    geoptimaliseerd. Het doel is om storingen te voorspellen, onderhoud te
                    plannen op basis van data, en de beschikbaarheid van de lift te verhogen.{" "}
                    <span className="text-[#888888] text-xs">(Bron: LYFD, marktervaring)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  De liftbranche digitaliseert. Waar onderhoud traditioneel plaatsvond op
                  basis van vaste intervallen en reactieve storingsafhandeling, maakt IoT het
                  mogelijk om te werken op basis van data. Sensoren meten wat er in de
                  installatie gebeurt, software analyseert de trends, en het liftbedrijf
                  krijgt inzicht in welke installaties aandacht nodig hebben voordat er een
                  storing optreedt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel bespreken we welke IoT-systemen er beschikbaar zijn voor de
                  liftbranche, wat ze opleveren, en wat er bij de installatie komt kijken.
                </p>
              </ScrollReveal>

              {/* H2: Wat is IoT in de liftbranche? */}
              <ScrollReveal>
                <h2 id="wat-is-iot-liften">Wat is IoT in de liftbranche?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  IoT in liften draait om het verzamelen en analyseren van operationele data
                  uit de liftinstallatie. Sensoren worden geplaatst op kritieke componenten
                  (deuraandrijving, motor, kabels, besturing) en meten parameters zoals
                  trillingen, temperatuur, aantal ritten, deuropeningen en energieverbruik.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Deze data wordt via een gateway (meestal 4G of ethernet) naar een
                  cloudplatform gestuurd, waar algoritmen patronen herkennen. Een stijgende
                  trend in trillingen van de aandrijving kan bijvoorbeeld wijzen op
                  lagerslijtage, nog voordat de monteur of gebruiker iets merkt.
                </p>
              </ScrollReveal>

              {/* H2: Welke systemen zijn er? */}
              <ScrollReveal>
                <h2 id="systemen">Welke systemen zijn er?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er zijn verschillende categorieen IoT-systemen voor liften:
                </p>
                <ul>
                  <li>
                    <strong>Remote monitoring.</strong> Het basissysteem: sensoren meten de
                    status van de lift (in bedrijf, storing, buiten bedrijf) en sturen
                    realtime meldingen naar het liftbedrijf. Dit vervangt de traditionele
                    storingsmelding via de gebouweigenaar of bewoner.
                  </li>
                  <li>
                    <strong>Telemetrie.</strong> Een stap verder: naast status worden ook
                    operationele parameters gemeten (ritten per dag, deuropeningen,
                    energieverbruik, reistijden). Dit geeft inzicht in het gebruiksprofiel
                    en helpt bij het optimaliseren van onderhoudsintervallen.
                  </li>
                  <li>
                    <strong>Predictive maintenance.</strong> Het meest geavanceerde niveau:
                    algoritmen analyseren trends in sensordata en voorspellen welke
                    componenten op korte termijn onderhoud nodig hebben. Dit maakt het
                    mogelijk om onderhoud te plannen op het optimale moment, niet te vroeg
                    (verspilling) en niet te laat (storing).
                  </li>
                  <li>
                    <strong>Passagierscommunicatie.</strong> Sommige IoT-platformen
                    integreren ook de noodcommunicatie (
                    <a
                      href="/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/"
                      className="text-[#4928FD] underline decoration-[#4928FD]/30"
                    >
                      spreek-luister verbinding
                    </a>
                    ) met het monitoringplatform, zodat insluiting automatisch wordt
                    gedetecteerd en gemeld.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Wat levert het op? */}
              <ScrollReveal>
                <h2 id="wat-levert-het-op">Wat levert IoT op?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De voordelen van IoT-monitoring zijn concreet en meetbaar:
                </p>
                <ul>
                  <li>
                    <strong>Minder ongeplande stilstand.</strong> Door problemen vroegtijdig
                    te signaleren, kunnen storingen worden voorkomen. Dat betekent minder
                    noodoproepen en minder ontevreden gebouweigenaren.
                  </li>
                  <li>
                    <strong>Snellere responstijd.</strong> Bij een storing weet het
                    liftbedrijf direct wat het probleem is, nog voordat de monteur ter plaatse
                    is. De monteur kan het juiste gereedschap en de juiste onderdelen
                    meenemen, wat de first-time-fix rate verhoogt.
                  </li>
                  <li>
                    <strong>Data-gedreven onderhoud.</strong> In plaats van onderhoud op basis
                    van vaste intervallen (elke 6 weken, ongeacht de staat) wordt onderhoud
                    gepland op basis van de werkelijke conditie van de installatie.
                  </li>
                  <li>
                    <strong>Rapportage naar opdrachtgevers.</strong> IoT-data biedt
                    transparantie richting gebouweigenaren: beschikbaarheidspercentages,
                    aantal ritten, onderhoudshistorie. Dit versterkt de klantrelatie en
                    onderbouwt de waarde van het onderhoudscontract.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Installatie */}
              <ScrollReveal>
                <h2 id="installatie">Installatie: wat komt erbij kijken?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De installatie van een IoT-systeem in een bestaande lift omvat de volgende
                  stappen:
                </p>
                <ul>
                  <li>
                    <strong>Assessment.</strong> Bepaal welke parameters je wilt monitoren en
                    welke sensoren daarvoor nodig zijn. Dit hangt af van het type installatie
                    en de doelstellingen.
                  </li>
                  <li>
                    <strong>Sensorplaatsing.</strong> Sensoren worden bevestigd aan de
                    relevante componenten: deuraandrijving, motor, kabels, besturingskast.
                    De plaatsing moet zodanig zijn dat de sensor betrouwbare metingen levert
                    zonder de werking van de lift te beinvloeden.
                  </li>
                  <li>
                    <strong>Gateway-installatie.</strong> Een centrale gateway wordt
                    geplaatst in de machineruimte of besturingskast. Deze verzamelt de
                    sensordata en stuurt deze via 4G of ethernet naar het cloudplatform.
                  </li>
                  <li>
                    <strong>Configuratie en kalibratie.</strong> Sensoren worden gekalibreerd,
                    het platform wordt geconfigureerd met de installatiegegevens, en
                    drempelwaarden voor alerts worden ingesteld.
                  </li>
                  <li>
                    <strong>Testen.</strong> Een volledige test met proefritten, simulatie
                    van storingen en verificatie dat alle data correct binnenkomt op het
                    platform.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De lift hoeft voor de fysieke installatie slechts kort buiten bedrijf.
                  Het grootste deel van de configuratie en kalibratie kan worden gedaan
                  terwijl de lift operationeel is.
                </p>
              </ScrollReveal>

              {/* H2: Certificeringen en kennis */}
              <ScrollReveal>
                <h2 id="certificeringen">Welke certificeringen en kennis zijn nodig?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  IoT-installatie in liften vraagt om een combinatie van competenties die niet
                  elke liftmonteur standaard bezit:
                </p>
                <ul>
                  <li>
                    <strong>Liftkennis:</strong> NEN 3140, VCA en kennis van de specifieke
                    installatie (besturing, aandrijving, veiligheidscomponenten).
                  </li>
                  <li>
                    <strong>IT-kennis:</strong> Netwerkconfiguratie, SIM-kaart provisioning,
                    cloudplatform configuratie en basiskennis van dataprotocollen.
                  </li>
                  <li>
                    <strong>Platformkennis:</strong> Ervaring met het specifieke IoT-platform
                    dat wordt toegepast, inclusief sensorconfiguartie en alertbeheer.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit maakt IoT-installatie een specialisme binnen het liftvak. Niet elke
                  monteur die regulier onderhoud uitvoert, is automatisch gekwalificeerd
                  voor het installeren en configureren van IoT-systemen.
                </p>
              </ScrollReveal>

              {/* H2: De toekomst */}
              <ScrollReveal>
                <h2 id="toekomst">De toekomst: regelgeving en verplichtingen</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Europese regelgeving beweegt in de richting van verplichte remote
                  monitoring voor liften. De herziene Liftenrichtlijn en de EN 81-20/50
                  bevatten al bepalingen die digitale monitoring aanmoedigen. De verwachting
                  in de branche is dat remote monitoring op termijn verplicht wordt, vergelijkbaar
                  met de huidige verplichting voor noodcommunicatie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voor liftbedrijven die nu investeren in IoT-capaciteit, betekent dit een
                  voorsprong. Ze bouwen kennis en ervaring op die straks vereist is, en
                  bieden hun klanten nu al een dienst die de concurrentie nog niet levert.
                </p>
              </ScrollReveal>

              {/* H2: Capaciteit voor installatie */}
              <ScrollReveal>
                <h2 id="capaciteit">Capaciteit voor IoT-installatie</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het uitrollen van IoT over een portefeuille van tientallen of honderden
                  liften is een capaciteitsintensief project. Elke installatie kost een halve
                  tot een hele dag, en je eigen monteurs hebben al een volle planning met
                  regulier onderhoud en storingsdienst.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD kan monteurs leveren die de IoT-installatie uitvoeren terwijl je eigen
                  team het dagelijkse werk blijft doen. De monteurs van LYFD combineren
                  liftkennis met IoT-ervaring, waardoor ze direct inzetbaar zijn op dit type
                  projecten. Dat versnelt de uitrol en voorkomt dat je reguliere onderhoud
                  in de knel komt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  IoT in liften is geen toekomstmuziek meer. Het is een concreet instrument
                  voor beter onderhoud, minder storingen en een sterkere klantrelatie. De
                  vraag is niet of, maar wanneer je ermee begint.
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                IoT uitrollen over je portefeuille en capaciteit nodig?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert monteurs met liftkennis en IoT-ervaring voor de installatie van monitoringsystemen. Neem contact op.
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
