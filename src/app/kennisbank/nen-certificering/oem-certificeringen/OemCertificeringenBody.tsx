"use client";

import { Container } from "@/components/ui/Container";
import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-zijn-oem-certificeringen", label: "Wat zijn OEM-certificeringen?" },
  { id: "waarom-belangrijk", label: "Waarom belangrijk?" },
  { id: "overzicht-oems", label: "De grote OEM's" },
  { id: "probleem-oem-gebonden", label: "Het probleem" },
  { id: "lyfd-en-oem", label: "LYFD en OEM" },
];

export function OemCertificeringenBody() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok (AEO) */}
              <ScrollReveal>
                <div className="relative bg-[#F8F8F8] rounded-lg border-l-2 border-[#2A2A2A] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#EBEBEB] text-[#6B6B6B] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#404040] m-0">
                    <strong className="text-[#1A1A1A]">OEM-certificeringen</strong>{" "}
                    (Original Equipment Manufacturer) zijn fabrikantspecifieke
                    opleidingen en certificeringen die aantonen dat een
                    liftmonteur gekwalificeerd is om aan installaties van een
                    specifiek merk te werken. In tegenstelling tot generieke
                    certificeringen zoals{" "}
                    <a
                      href="/kennisbank/nen-certificering/nen-3140-uitleg/"
                      className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                    >
                      NEN 3140
                    </a>
                    , zijn OEM-certificeringen gericht op de unieke
                    technologie, software en procedures van een specifieke
                    fabrikant.
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Een lift is geen generiek product. Elke fabrikant heeft eigen
                  besturingssystemen, eigen software, eigen diagnosetools en
                  eigen onderhoudsprocedures. Een KONE MonoSpace heeft een
                  fundamenteel andere architectuur dan een Schindler 3300 of een
                  Otis Gen2. Dat betekent dat een monteur die uitstekend werk
                  levert op het ene merk, niet automatisch gekwalificeerd is
                  voor het andere.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  OEM-certificeringen zijn de manier waarop fabrikanten borgen dat
                  monteurs hun installaties correct en veilig kunnen onderhouden.
                  Het is een systeem dat logisch is vanuit veiligheids- en
                  kwaliteitsperspectief, maar dat ook een keerzijde heeft:
                  kennismonopolisering en beperkte toegankelijkheid voor
                  onafhankelijke partijen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel geven we een eerlijk overzicht van wat
                  OEM-certificeringen inhouden, welke eisen de grote fabrikanten
                  stellen, en hoe LYFD hiermee omgaat bij het matchen van
                  monteurs.
                </p>
              </ScrollReveal>

              {/* H2: Wat zijn OEM-certificeringen in de liftbranche? */}
              <ScrollReveal>
                <h2 id="wat-zijn-oem-certificeringen">
                  Wat zijn OEM-certificeringen in de liftbranche?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  OEM staat voor Original Equipment Manufacturer, de oorspronkelijke
                  fabrikant van de liftinstallatie. Een OEM-certificering is een
                  door de fabrikant uitgegeven bewijs dat een monteur de kennis
                  en vaardigheden heeft om aan hun specifieke producten te werken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Waar een certificering zoals NEN 3140 generiek is (het gaat over
                  veilig werken aan alle elektrische installaties), is een
                  OEM-certificering specifiek. Het gaat over de unieke
                  eigenschappen van een bepaald merk en type lift:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Besturingssoftware:</strong> elke fabrikant gebruikt
                    eigen besturingssystemen met eigen interfaces, foutcodes en
                    parameters
                  </li>
                  <li>
                    <strong>Diagnosetools:</strong> fabrikanten ontwikkelen eigen
                    tools om storingen te diagnosticeren en installaties te
                    configureren
                  </li>
                  <li>
                    <strong>Onderhoudsprocedures:</strong> de specifieke stappen
                    voor periodiek onderhoud, vervanging van componenten en
                    kalibratie
                  </li>
                  <li>
                    <strong>Veiligheidssystemen:</strong> de werking van
                    noodstopsystemen, vangvoorzieningen en oversnelheidsdetectie
                    verschilt per fabrikant
                  </li>
                  <li>
                    <strong>Onderdelen:</strong> proprietary componenten die alleen
                    via de fabrikant leverbaar zijn en specifieke montagekennis
                    vereisen
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het niveau van OEM-certificeringen varieert. Sommige fabrikanten
                  werken met meerdere niveaus (basis, gevorderd, specialist),
                  terwijl anderen een enkel certificeringstraject hanteren. De
                  trainingen worden doorgaans gegeven in de opleidingscentra
                  van de fabrikant, soms aangevuld met e-learning modules.
                </p>
              </ScrollReveal>

              {/* H2: Waarom zijn OEM-certificeringen belangrijk? */}
              <ScrollReveal>
                <h2 id="waarom-belangrijk">
                  Waarom zijn OEM-certificeringen belangrijk?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het belang van OEM-certificeringen gaat verder dan een papieren
                  vereiste. Er zijn vier fundamentele redenen waarom ze in de
                  liftbranche onmisbaar zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Veiligheid.</strong> Liften zijn veiligheidskritische
                  installaties. Een fout bij onderhoud of storingsoplossing kan
                  leiden tot ernstige ongevallen. Fabrikantspecifieke kennis
                  voorkomt dat een monteur een systeem op de verkeerde manier
                  benadert of een veiligheidsfunctie per ongeluk omzeilt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Garantie en contractuele vereisten.</strong> Bij
                  nieuwbouw- en moderniseringsprojecten geldt doorgaans een
                  garantieperiode. Als onderhoud of reparatie wordt uitgevoerd
                  door een niet door de fabrikant gecertificeerde monteur, kan
                  de garantie vervallen. Dit is een reeel risico voor
                  gebouweigenaren en liftbedrijven.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Complexiteit van moderne liftsystemen.</strong> De
                  huidige generatie liften is in essentie een netwerk van
                  computers, sensoren en actuatoren. Zonder kennis van de
                  specifieke software en communicatieprotocollen is het
                  praktisch onmogelijk om een storing effici&#235;nt te
                  diagnosticeren, laat staan op te lossen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Toegang tot onderdelen en software-updates.</strong>{" "}
                  Fabrikanten koppelen de levering van proprietary onderdelen en
                  software-updates vaak aan het hebben van een geldige
                  OEM-relatie. Zonder certificering heb je als monteur of
                  liftbedrijf geen toegang tot deze essenti&#235;le middelen.
                </p>
              </ScrollReveal>

              {/* H2: Overzicht: de grote OEM's en hun eisen */}
              <ScrollReveal>
                <h2 id="overzicht-oems">
                  Overzicht: de grote OEM&apos;s en hun eisen
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De liftmarkt wordt gedomineerd door een handvol grote
                  fabrikanten. Hieronder een overzicht van de belangrijkste
                  OEM&apos;s en hoe zij omgaan met certificering en training.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Let op: de onderstaande informatie is gebaseerd op algemeen
                  bekende branche-informatie en kan per regio en tijdstip
                  varieren. Neem voor actuele details contact op met de betreffende
                  fabrikant.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>KONE.</strong> KONE is een van de grootste liftfabrikanten
                  ter wereld, met een sterke aanwezigheid in Nederland. KONE
                  hanteert een gelaagd certificeringssysteem waarbij monteurs via
                  de KONE Academy worden opgeleid op specifieke productlijnen
                  (MonoSpace, MiniSpace, EcoDisc). KONE staat bekend om relatief
                  gesloten systemen: diagnosetools en software zijn primair
                  beschikbaar voor eigen servicemonteurs. Voor derde partijen is
                  de toegang tot training beperkt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Schindler.</strong> Schindler investeert aanzienlijk in
                  training via eigen opleidingscentra. De certificering richt zich
                  op productfamilies (Schindler 3300, 5500, 7000) en omvat zowel
                  mechanische als elektronische componenten. Schindler biedt in
                  sommige markten trainingen aan voor servicepartners, maar de
                  meest geavanceerde opleidingen (met name rond digitale
                  producten) zijn voorbehouden aan het eigen serviceapparaat.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Otis.</strong> Otis is de oudste en een van de grootste
                  liftfabrikanten ter wereld. Otis hanteert een uitgebreid
                  certificeringsprogramma dat gekoppeld is aan specifieke
                  producttypen (Gen2, SkyRise, GeN2 Switch). De Otis Academy
                  biedt trainingen op meerdere niveaus. Net als andere grote
                  OEM&apos;s beperkt Otis de toegang tot diagnosetools en
                  software voor niet-gecertificeerde partijen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>thyssenkrupp.</strong> thyssenkrupp Elevator (inmiddels TK
                  Elevator) onderscheidt zich door een relatief open houding
                  richting derde partijen. In sommige markten biedt het bedrijf
                  trainingen aan die ook toegankelijk zijn voor onafhankelijke
                  liftbedrijven. De certificeringen richten zich op producten als
                  de endura en synergy reeks.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Mitsubishi Electric.</strong> Mitsubishi Electric heeft
                  een groeiende positie in de Europese markt. De
                  certificeringstrajecten zijn sterk Japans georienteerd, met
                  nadruk op standaardisatie en precisie. Training voor derde
                  partijen is beperkt beschikbaar in Europa.
                </p>
              </ScrollReveal>

              {/* H2: Het probleem met OEM-gebonden kennis */}
              <ScrollReveal>
                <h2 id="probleem-oem-gebonden">
                  Het probleem met OEM-gebonden kennis
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het OEM-certificeringssysteem is logisch vanuit het perspectief
                  van kwaliteitsborging. Maar het heeft een keerzijde die de hele
                  branche raakt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Kennismonopolisering.</strong> Door training en
                  diagnosetools exclusief beschikbaar te stellen aan eigen
                  servicemonteurs, creeren fabrikanten een afhankelijkheid. Een
                  gebouweigenaar die een KONE-lift heeft, is voor service en
                  onderhoud grotendeels aangewezen op KONE of op de schaarse
                  onafhankelijke monteurs die toevallig KONE-ervaring hebben.
                  Dit beperkt de keuzevrijheid en drijft de prijzen op.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Beperkte beschikbaarheid van multi-OEM monteurs.</strong>{" "}
                  In een markt met circa{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    1.600 tot 1.800
                  </span>{" "}
                  actieve liftmonteurs op{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    105.000
                  </span>{" "}
                  installaties{" "}
                  <span className="text-[#A0A0A0] text-xs">
                    (Bron: LYFD, marktervaring 5 jaar)
                  </span>{" "}
                  is het tekort al structureel. Binnen die schaarse pool is het
                  aantal monteurs dat meerdere OEM-merken beheerst nog veel
                  kleiner. Dit maakt planning en capaciteitsmanagement voor
                  liftbedrijven met een gemengde portefeuille bijzonder lastig.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Afhankelijkheid bij storingen.</strong> Wanneer een
                  storing optreedt op een merk waarvoor je geen gecertificeerde
                  monteur beschikbaar hebt, sta je voor een dilemma: wachten op
                  beschikbaarheid (met kans op boetes en ontevreden
                  gebruikers) of een niet-gecertificeerde monteur sturen (met
                  risico&apos;s voor veiligheid en garantie).
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoge kosten voor brede certificering.</strong> Een
                  monteur op meerdere OEM-merken laten certificeren is een
                  aanzienlijke investering in tijd en geld. De trainingen duren
                  dagen tot weken, zijn vaak alleen op specifieke locaties
                  beschikbaar, en de kosten per training zijn fors. Voor kleinere
                  en middelgrote liftbedrijven is het financieel vaak niet
                  haalbaar om monteurs breed te laten certificeren.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is precies waar het schaarsteprobleem in de liftbranche een
                  extra dimensie krijgt. Het gaat niet alleen om het aantal
                  beschikbare monteurs, maar om het aantal monteurs met de juiste
                  OEM-kennis voor de specifieke installatie die onderhoud nodig
                  heeft. Dat maakt{" "}
                  <a
                    href="/kennisbank/capaciteitsmanagement/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    capaciteitsmanagement
                  </a>{" "}
                  een puzzel met steeds kleinere stukjes.
                </p>
              </ScrollReveal>

              {/* H2: Hoe LYFD omgaat met OEM-certificeringen */}
              <ScrollReveal>
                <h2 id="lyfd-en-oem">
                  Hoe LYFD omgaat met OEM-certificeringen
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD herkent het OEM-vraagstuk als een van de kernuitdagingen
                  in de liftbranche. Ons antwoord is een systematische aanpak die
                  verder gaat dan alleen beschikbaarheid.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Matching op basis van OEM-ervaring.</strong> Bij elke
                  capaciteitsaanvraag brengen we in kaart welke merken en typen
                  installaties de opdrachtgever in portefeuille heeft.
                  Vervolgens matchen we op basis van de OEM-ervaring van de
                  monteurs in onze pool. Dat betekent dat een monteur die via
                  LYFD wordt ingezet, altijd aantoonbare ervaring heeft met het
                  merk waarop hij werkt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Registratie bij intake.</strong> Bij de intake van elke
                  monteur registreren we gedetailleerd welke OEM-merken en
                  producttypen hij beheerst. Dit gaat verder dan een simpele
                  checkbox. We documenteren het niveau van ervaring, het type
                  werkzaamheden (service, modernisering, nieuwbouw) en de recentheid
                  van de ervaring.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Voortdurende bijscholing.</strong> LYFD investeert in
                  het verbreden van het OEM-profiel van monteurs in de pool. Dit
                  doen we door monteurs, waar mogelijk, in te zetten op
                  opdrachten waar ze hun kennis kunnen verbreden, en door te
                  faciliteren bij het volgen van aanvullende OEM-trainingen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is een van de concrete voordelen van het{" "}
                  <a
                    href="/diensten/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    Capacity as a Service model
                  </a>
                  . Een individueel liftbedrijf kan het zich zelden veroorloven om
                  een monteur op drie of vier merken te laten certificeren. Maar
                  een pool van monteurs die gezamenlijk alle grote OEM-merken
                  dekken, biedt die breedte wel, zonder dat een individuele
                  opdrachtgever alle kosten draagt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het resultaat: opdrachtgevers krijgen monteurs die niet alleen
                  NEN 3140 gecertificeerd zijn, maar ook de specifieke installaties
                  kennen waarop ze ingezet worden. Dat scheelt inwerkdagen, dat
                  scheelt fouten, en dat vergroot de kans dat een storing in een
                  bezoek wordt opgelost in plaats van in drie.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Monteurs nodig met de juiste OEM-ervaring?
              </p>
              <p className="mt-2 text-sm text-[#404040] leading-relaxed max-w-[50ch]">
                LYFD matcht op competentie, niet alleen op beschikbaarheid. Vertel
                ons welke merken je in portefeuille hebt.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors duration-300"
              >
                Plan een gesprek
                <span className="text-[#A0A0A0]">&rarr;</span>
              </a>
            </div>
          </article>

          <aside className="hidden xl:block w-56 shrink-0">
            <ArticleSidebar items={tocItems} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
