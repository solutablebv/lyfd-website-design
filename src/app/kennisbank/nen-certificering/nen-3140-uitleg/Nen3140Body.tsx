"use client";

import { Container } from "@/components/ui/Container";
import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-is-nen-3140", label: "Wat is NEN 3140?" },
  { id: "waarom-verplicht", label: "Waarom verplicht?" },
  { id: "wat-houdt-keuring-in", label: "De keuring" },
  { id: "hoe-behaal-je-het", label: "Hoe behaal je het?" },
  { id: "hoe-lang-geldig", label: "Geldigheid" },
  { id: "nen-3140-bij-lyfd", label: "NEN 3140 bij LYFD" },
];

export function Nen3140Body() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok (AEO) */}
              <ScrollReveal>
                <div className="relative bg-[#F7F7F7] rounded-lg border-l-2 border-[#4928FD] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#DDDDDD] text-[#888888] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#333333] m-0">
                    <strong className="text-[#1B1D1E]">NEN 3140</strong> is de
                    Nederlandse norm voor het veilig werken aan, met en in de
                    nabijheid van elektrische installaties. Voor liftmonteurs is
                    NEN 3140 een essenti&#235;le certificering, omdat liften
                    complexe elektrotechnische systemen zijn met
                    hoogspanningscomponenten, besturingselektronica en
                    veiligheidscircuits. De norm beschrijft welke competenties
                    iemand nodig heeft, hoe veilig werken geborgd wordt, en
                    welke verantwoordelijkheden werkgever en werknemer
                    dragen.
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Als liftmonteur werk je dagelijks met elektrische installaties.
                  Van schakelkasten en frequentieregelaars tot
                  deurbesturingen en noodstroomvoorzieningen. Elke lift is in
                  essentie een elektromechanisch systeem, en dat betekent dat
                  veilig werken aan elektrische componenten geen optie is, maar
                  een vereiste.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  NEN 3140 is de norm die dit borgt. Het is geen vrijblijvende
                  richtlijn, maar een instrument waarmee werkgevers en
                  opdrachtgevers aantonen dat hun monteurs bekwaam zijn om veilig
                  met elektriciteit te werken. In de liftbranche is NEN 3140
                  daarmee een basisvereiste geworden, zowel wettelijk als
                  praktisch.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel leggen we uit wat NEN 3140 precies inhoudt,
                  waarom het verplicht is, hoe je het certificaat behaalt, en
                  hoe LYFD hiermee omgaat in de praktijk.
                </p>
              </ScrollReveal>

              {/* H2: Wat is NEN 3140? */}
              <ScrollReveal>
                <h2 id="wat-is-nen-3140">Wat is NEN 3140?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  NEN 3140 is de Nederlandse norm voor &quot;Bedrijfsvoering van
                  elektrische installaties&quot;. De norm is afgeleid van de
                  Europese norm EN 50110-1 en specifiek vertaald naar de
                  Nederlandse situatie en wetgeving. NEN 3140 beschrijft de eisen
                  waaraan personen moeten voldoen die werken aan, met of in de
                  buurt van elektrische installaties.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De kern van de norm draait om drie vragen: wie mag wat doen,
                  onder welke voorwaarden, en met welke veiligheidsmaatregelen?
                  NEN 3140 maakt daarbij onderscheid tussen verschillende rollen:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Vakbekwaam persoon (VP):</strong> iemand die zelfstandig
                    mag werken aan elektrische installaties. Dit is het niveau dat
                    voor de meeste liftmonteurs relevant is.
                  </li>
                  <li>
                    <strong>Voldoend onderricht persoon (VOP):</strong> iemand die
                    onder toezicht van een vakbekwaam persoon bepaalde
                    werkzaamheden mag uitvoeren.
                  </li>
                  <li>
                    <strong>Installatieverantwoordelijke (IV):</strong> de persoon
                    die verantwoordelijk is voor de veilige staat van de
                    elektrische installatie.
                  </li>
                  <li>
                    <strong>Werkverantwoordelijke (WV):</strong> de persoon die
                    verantwoordelijk is voor de veilige uitvoering van het werk
                    aan de installatie.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voor liftmonteurs is met name het niveau &quot;vakbekwaam
                  persoon&quot; relevant. Dit houdt in dat je zelfstandig
                  elektrische werkzaamheden mag uitvoeren, mits je aantoonbaar
                  bekwaam bent en de juiste veiligheidsmaatregelen toepast.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Wat NEN 3140 onderscheidt van een puur technische opleiding is
                  de nadruk op veiligheidsbewustzijn. Het gaat niet alleen om de
                  vraag of je een schakelkast kunt openen en een component kunt
                  vervangen. Het gaat om de vraag of je dat veilig kunt doen: met
                  de juiste voorbereiding, de juiste meetapparatuur, de juiste
                  procedures, en het juiste besef van risico&apos;s.
                </p>
              </ScrollReveal>

              {/* H2: Waarom is NEN 3140 verplicht voor liftmonteurs? */}
              <ScrollReveal>
                <h2 id="waarom-verplicht">
                  Waarom is NEN 3140 verplicht voor liftmonteurs?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De verplichting om met NEN 3140 te werken komt voort uit de
                  Arbeidsomstandighedenwet (Arbowet). De Arbowet schrijft voor
                  dat werkgevers verantwoordelijk zijn voor de veiligheid van hun
                  werknemers. Artikel 3 en artikel 8 van de Arbowet stellen dat
                  de werkgever ervoor moet zorgen dat werknemers voldoende zijn
                  opgeleid en getraind om hun werk veilig uit te voeren.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voor werk aan elektrische installaties is NEN 3140 de erkende
                  norm die invulling geeft aan deze verplichting. Het is daarmee
                  geen optionele &quot;nice-to-have&quot;, maar de praktische
                  vertaling van een wettelijke eis. Als een werkgever zijn
                  monteurs zonder NEN 3140 aan elektrische installaties laat
                  werken, is hij aansprakelijk bij een incident.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In de liftbranche is dit bijzonder relevant omdat
                  liftinstallaties per definitie elektrische systemen zijn. Een
                  liftmonteur die onderhoud pleegt, storingen verhelpt of
                  moderniseringen uitvoert, werkt vrijwel altijd aan of in de
                  buurt van spanningsvoerende onderdelen. Denk aan:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    Schakelkasten en besturingssystemen in de machinekamer
                  </li>
                  <li>
                    Frequentieregelaars en motorbesturingen
                  </li>
                  <li>
                    Deurcontacten en veiligheidscircuits in de schacht
                  </li>
                  <li>
                    Noodstroom- en UPS-systemen
                  </li>
                  <li>
                    Communicatie- en alarmsystemen
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Opdrachtgevers (gebouweigenaren, vastgoedbeheerders, VvE&apos;s)
                  eisen steeds vaker dat monteurs die in hun pand werken
                  NEN 3140 gecertificeerd zijn. Dit is niet alleen vanuit
                  aansprakelijkheidsoogpunt logisch, maar ook vanuit
                  verzekeringsperspectief. Bij een incident zonder juiste
                  certificering kan een verzekeraar uitkering weigeren.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Daarnaast speelt aansprakelijkheid een grote rol. Bij een
                  elektrisch incident (kortsluiting, brand, elektrocutie) zal de
                  Inspectie SZW (voorheen Arbeidsinspectie) als eerste vragen:
                  was de monteur bevoegd? Was hij aantoonbaar bekwaam? Zonder
                  NEN 3140 certificering is het antwoord op die vraag per
                  definitie nee.
                </p>
              </ScrollReveal>

              {/* H2: Wat houdt de NEN 3140 keuring in? */}
              <ScrollReveal>
                <h2 id="wat-houdt-keuring-in">
                  Wat houdt de NEN 3140 keuring in?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De NEN 3140 keuring (of beoordeling) bestaat doorgaans uit twee
                  onderdelen: een theoretisch deel en een praktisch deel. Het doel
                  is om vast te stellen dat iemand niet alleen de theorie van
                  veilig werken kent, maar deze ook in de praktijk correct kan
                  toepassen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Het theoretische deel</strong> behandelt onder andere:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    De gevaren van elektriciteit: stroomsterkte, spanning,
                    vlambooggevaar, secundaire effecten
                  </li>
                  <li>
                    De structuur van NEN 3140: rollen, verantwoordelijkheden,
                    bevoegdheden
                  </li>
                  <li>
                    Veilig werken: spanningsloos maken, beveiligen tegen
                    wederinschakeling, vaststellen spanningsloze toestand
                  </li>
                  <li>
                    Persoonlijke beschermingsmiddelen (PBM&apos;s) en meetapparatuur
                  </li>
                  <li>
                    Eerste hulp bij elektrische ongevallen
                  </li>
                  <li>
                    Wet- en regelgeving: Arbowet, Arbobesluit, relatie met
                    NEN 1010
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Het praktische deel</strong> richt zich op het toepassen
                  van de theorie in realistische situaties. Dit kan inhouden:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    Het uitvoeren van een veiligheidsprocedure bij het
                    spanningsloos maken van een installatie
                  </li>
                  <li>
                    Het correct gebruiken van meetapparatuur (spanningsaanwijzer,
                    isolatieweerstandmeter)
                  </li>
                  <li>
                    Het herkennen van gevaarlijke situaties en het nemen van
                    passende maatregelen
                  </li>
                  <li>
                    Het invullen van werkvergunningen en veiligheidsdocumenten
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De totale duur van opleiding en beoordeling varieert van
                  een dag tot twee dagen, afhankelijk van het niveau (VP of VOP)
                  en de aanbieder. Voor ervaren liftmonteurs met een
                  elektrotechnische achtergrond is de opleiding doorgaans in een
                  dag af te ronden. Voor herkeuringen is een dagdeel meestal
                  voldoende.
                </p>
              </ScrollReveal>

              {/* H2: Hoe behaal je het NEN 3140 certificaat? */}
              <ScrollReveal>
                <h2 id="hoe-behaal-je-het">
                  Hoe behaal je het NEN 3140 certificaat?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het behalen van NEN 3140 verloopt in een aantal concrete
                  stappen. Hieronder een overzicht van het gangbare traject.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 1: Vooropleiding en voorkennis.</strong> NEN 3140
                  gaat uit van een basisniveau aan elektrotechnische kennis. Voor
                  het niveau &quot;vakbekwaam persoon&quot; betekent dit dat je
                  een relevante technische opleiding hebt gevolgd (MBO
                  elektrotechniek, mechatronica of vergelijkbaar) of aantoonbare
                  werkervaring hebt in een elektrotechnisch beroep. Voor
                  liftmonteurs met een reguliere vakopleiding is dit doorgaans
                  geen drempel.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 2: Opleiding volgen.</strong> Je volgt een
                  NEN 3140 opleiding bij een erkende opleidingsaanbieder. De
                  opleiding duurt doorgaans een tot twee dagen en behandelt
                  zowel theorie als praktijk. Veel aanbieders bieden ook
                  incompany trainingen aan, wat voor liftbedrijven met meerdere
                  monteurs kostenefficienter kan zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 3: Examen afleggen.</strong> Aan het einde van de
                  opleiding volgt een beoordeling. Bij voldoende resultaat
                  ontvang je een bewijs van bekwaamheid. Let op: het is
                  strikt genomen de werkgever die de aanwijzing tot vakbekwaam
                  persoon formeel vastlegt, op basis van de behaalde beoordeling.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 4: Aanwijzing door werkgever.</strong> De werkgever
                  stelt een schriftelijke aanwijzing op waarin staat dat de
                  medewerker bevoegd is om als vakbekwaam persoon te werken aan
                  specifieke installaties. Dit is een belangrijk onderscheid: het
                  certificaat alleen is niet voldoende. De formele aanwijzing door
                  de werkgever maakt het compleet.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Indicatief: de kosten voor een NEN 3140 opleiding en examen
                  liggen tussen EUR 300 en EUR 600 per persoon. Prijzen
                  varieren per aanbieder, niveau en trainingsformat.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voor liftmonteurs die via een{" "}
                  <a
                    href="/voor-liftbedrijven/"
                    className="text-[#4928FD] underline decoration-[#4928FD]/30 underline-offset-4 hover:decoration-[#4928FD] transition-colors duration-300"
                  >
                    CaaS-model
                  </a>{" "}
                  werken, is het belangrijk om te weten dat de inlenende partij
                  (of het CaaS-platform) verantwoordelijk is voor het verifieren
                  van de certificering. Bij LYFD controleren wij dit bij intake.
                </p>
              </ScrollReveal>

              {/* H2: Hoe lang is NEN 3140 geldig? */}
              <ScrollReveal>
                <h2 id="hoe-lang-geldig">Hoe lang is NEN 3140 geldig?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is een van de meest gestelde vragen, en het antwoord is
                  genuanceerder dan je zou verwachten. NEN 3140 kent formeel
                  geen wettelijke vervaldatum. De norm schrijft niet voor dat
                  een certificaat na een bepaalde periode verloopt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar er is een belangrijke kanttekening. De Arbowet verplicht
                  werkgevers om continu te borgen dat hun werknemers bekwaam zijn.
                  Kennis veroudert. Regelgeving verandert. Installaties worden
                  complexer. Daarom hanteren de meeste werkgevers, en zeker de
                  grotere liftbedrijven, een herkeuringsinterval van drie jaar.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit driejaarlijkse interval is geen wettelijke verplichting, maar
                  het is wel de gangbare best practice in de branche. Vrijwel alle
                  opdrachtgevers in de liftindustrie eisen dat monteurs een
                  herkeuring hebben die niet ouder is dan drie jaar. Als
                  liftbedrijf doe je er verstandig aan dit te volgen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Een herkeuring is doorgaans korter dan de initiele opleiding.
                  Reken op een halve dag tot een dag, afhankelijk van de aanbieder.
                  De kosten zijn navenant lager dan de eerste certificering.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het is overigens verstandig om herkeuring niet te zien als
                  een administratieve formaliteit. Het is een moment om kennis op
                  te frissen, nieuwe ontwikkelingen mee te nemen, en het
                  veiligheidsbewustzijn scherp te houden. In een branche waar
                  een fout fatale gevolgen kan hebben, is dat geen overbodige
                  luxe.
                </p>
              </ScrollReveal>

              {/* H2: NEN 3140 bij LYFD */}
              <ScrollReveal>
                <h2 id="nen-3140-bij-lyfd">NEN 3140 bij LYFD</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Bij LYFD is NEN 3140 een niet-onderhandelbare basisvereiste.
                  Elke monteur die via ons platform wordt ingezet, moet een
                  geldige NEN 3140 certificering hebben. Geen uitzonderingen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dat controleren we bij de intake. Wanneer een liftmonteur zich
                  aanmeldt voor de LYFD-pool, verifieren wij:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    Of er een geldig NEN 3140 certificaat aanwezig is
                  </li>
                  <li>
                    Op welk niveau (VP of VOP) de certificering is afgegeven
                  </li>
                  <li>
                    Wanneer de laatste herkeuring heeft plaatsgevonden
                  </li>
                  <li>
                    Of de certificering aansluit bij het type werkzaamheden
                    waarvoor de monteur wordt ingezet
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Monteurs die niet aan de NEN 3140 eis voldoen, worden niet
                  opgenomen in de pool. Dat klinkt streng, en dat is het ook. Maar
                  het is de enige manier om onze opdrachtgevers de garantie te
                  geven dat elke monteur die wij leveren, veilig en bevoegd is om
                  aan hun installaties te werken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is ook een van de kernverschillen tussen een{" "}
                  <a
                    href="/voor-liftbedrijven/"
                    className="text-[#4928FD] underline decoration-[#4928FD]/30 underline-offset-4 hover:decoration-[#4928FD] transition-colors duration-300"
                  >
                    CaaS-platform als LYFD
                  </a>{" "}
                  en een traditioneel uitzendbureau. Waar een uitzendbureau vaak
                  levert op beschikbaarheid, leveren wij op competentie. NEN 3140
                  is daarin de eerste en meest fundamentele toets.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Daarnaast houden wij bij wanneer herkeuringen verlopen. Als een
                  monteur in onze pool een herkeuring nodig heeft, signaleren wij
                  dat proactief. Zo voorkomen we dat een monteur wordt ingezet met
                  een verlopen certificering, een situatie die voor onze
                  opdrachtgevers onaanvaardbaar zou zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Nederland telt circa{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    105.000
                  </span>{" "}
                  liftinstallaties en slechts{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    1.600 tot 1.800
                  </span>{" "}
                  actieve liftmonteurs.{" "}
                  <span className="text-[#888888] text-xs">
                    (Bron: LYFD, marktervaring 5 jaar)
                  </span>{" "}
                  In die schaarse markt is het des te belangrijker dat elke
                  beschikbare monteur aantoonbaar gekwalificeerd is. NEN 3140 is
                  daarin de eerste stap, en voor LYFD een absolute voorwaarde.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Op zoek naar NEN 3140 gecertificeerde liftmonteurs?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert uitsluitend gecertificeerde monteurs. Plan een
                gesprek en we bespreken je capaciteitsvraag.
              </p>
              <a
                href="/liftmonteurs/beschikbaarheid/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300"
              >
                Plan een gesprek
                <span className="text-[#888888]">&rarr;</span>
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
