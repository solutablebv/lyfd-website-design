"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-is-wet-dba", label: "Wat is de Wet DBA?" },
  { id: "risicos-zzp-inzet", label: "Risico's van zzp-inzet" },
  { id: "arbeidsrelatie", label: "Wanneer arbeidsrelatie?" },
  { id: "caas-dba-risico", label: "Hoe CaaS het oplost" },
  { id: "praktische-stappen", label: "Praktische stappen" },
];

export function WetDbaLiftbrancheContent() {
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
                    <strong className="text-[#1B1D1E]">De Wet DBA (Deregulering Beoordeling Arbeidsrelaties)</strong> is
                    de wet die sinds 2016 de Verklaring Arbeidsrelatie (VAR) vervangt. De wet regelt
                    hoe opdrachtgevers en zzp&apos;ers hun werkrelatie moeten vormgeven om
                    schijnzelfstandigheid te voorkomen. Voor liftbedrijven die structureel werken
                    met zzp-monteurs is deze wet direct relevant: de Nederlandse liftmarkt telt
                    circa 105.000 installaties tegenover slechts 1.600 tot 1.800 actieve monteurs,
                    waardoor de verleiding groot is om flexibele arbeid in te zetten zonder de
                    juridische implicaties volledig te doorgronden.{" "}
                    <span className="text-[#888888] text-xs">(Bron: LYFD, marktervaring 5 jaar)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  De liftbranche heeft een capaciteitsprobleem. Dat is geen geheim. Met circa
                  105.000 liftinstallaties in Nederland en slechts 1.600 tot 1.800 actieve
                  monteurs is de rekening snel gemaakt: er zijn structureel te weinig mensen om
                  al het werk te doen. Veel liftbedrijven lossen dit op door zzp-monteurs in
                  te huren. Logisch, flexibel, en op het eerste gezicht goedkoper dan vast
                  personeel aannemen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar er zit een juridisch risico aan die oplossing. En dat risico heet de
                  Wet DBA. Sinds de Belastingdienst in 2025 het handhavingsmoratorium heeft
                  opgeheven, wordt er actief gecontroleerd op schijnzelfstandigheid. Voor
                  liftbedrijven die structureel met zzp&apos;ers werken, is het niet langer een
                  theoretisch risico. Het is een concreet financieel en operationeel gevaar.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel leggen we uit wat de Wet DBA precies inhoudt, wanneer je als
                  liftbedrijf risico loopt, en hoe je dat risico kunt elimineren zonder in te
                  leveren op flexibiliteit.
                </p>
              </ScrollReveal>

              {/* H2: Wat is de Wet DBA? */}
              <ScrollReveal>
                <h2 id="wat-is-wet-dba">Wat is de Wet DBA en waarom is het relevant voor liftbedrijven?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Wet DBA werd in 2016 ingevoerd als opvolger van de VAR (Verklaring
                  Arbeidsrelatie). Onder de VAR lag de verantwoordelijkheid voor de juiste
                  kwalificatie van de werkrelatie vrijwel volledig bij de zzp&apos;er. De
                  opdrachtgever kon een kopie van de VAR-verklaring in het dossier stoppen en
                  was gevrijwaard van naheffingen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dat is veranderd. Onder de Wet DBA zijn opdrachtgever en opdrachtnemer
                  samen verantwoordelijk voor de juiste kwalificatie. De kernvraag is
                  eenvoudig: is er sprake van een zelfstandige opdracht, of is er feitelijk
                  sprake van een arbeidsrelatie? Als het laatste het geval is, moet de
                  opdrachtgever loonheffing inhouden en afdragen, ook als dat niet is
                  gebeurd.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Waarom is dit specifiek relevant voor de liftbranche?</strong> Omdat
                  de manier waarop veel liftbedrijven met zzp-monteurs werken, precies de
                  kenmerken vertoont die de Belastingdienst als indicatoren voor
                  schijnzelfstandigheid beschouwt. Denk aan vaste routes, werkkleding van het
                  bedrijf, gereedschap van het bedrijf, en langdurige samenwerkingen zonder
                  echte ondernemersvrijheid.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De liftbranche is bovendien een sector waar specialistische kennis
                  vereist is. Monteurs moeten beschikken over de juiste certificeringen
                  (NEN 3140, VCA, en vaak OEM-specifieke certificaten). Dat maakt de pool
                  van beschikbare zzp&apos;ers klein en de afhankelijkheid groot. Een
                  zzp-monteur die al twee jaar uitsluitend voor jouw bedrijf werkt, ziet er
                  op papier steeds meer uit als een werknemer.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Belastingdienst kijkt niet naar wat er op papier staat, maar naar hoe
                  de werkrelatie feitelijk is ingericht. En dat is precies waar het risico
                  zit.
                </p>
              </ScrollReveal>

              {/* H2: De risico's */}
              <ScrollReveal>
                <h2 id="risicos-zzp-inzet">De risico&apos;s van zzp-inzet in de liftbranche</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De risico&apos;s van werken met zzp-monteurs onder de Wet DBA zijn zowel
                  financieel als operationeel. Laten we beide categorieeen doorlopen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Financiele risico&apos;s.</strong> Als de Belastingdienst oordeelt dat er
                  sprake is van een verkapt dienstverband, kan zij naheffingen opleggen voor
                  loonbelasting en premies werknemersverzekeringen. Die naheffingen gelden
                  niet alleen voor het huidige jaar, maar kunnen met terugwerkende kracht
                  worden opgelegd over de volledige duur van de samenwerking.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Reken maar even mee. Een zzp-monteur met een uurtarief van{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    EUR 55
                  </span>{" "}
                  per uur die gemiddeld 36 uur per week werkt, factureert circa{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    EUR 100.000
                  </span>{" "}
                  per jaar. Bij een naheffing over twee jaar praat je al snel over tienduizenden
                  euro&apos;s aan loonheffing, premies en rente. En bij kwaadwilligheid kan de
                  Belastingdienst een boete opleggen tot 100% van de naheffing. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Operationele risico&apos;s.</strong> Naast het financiele risico is er
                  het operationele gevolg. Als een zzp-monteur door de Belastingdienst wordt
                  geherkwalificeerd als werknemer, verandert de juridische positie van die
                  monteur onmiddellijk. De monteur heeft dan recht op ontslagbescherming,
                  vakantiedagen, pensioenopbouw en loondoorbetaling bij ziekte. Dat is een
                  scenario waar geen liftbedrijf op zit te wachten als het niet bewust voor
                  is gekozen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Daarnaast ontstaat er onzekerheid over beschikbaarheid. Als zzp-monteurs
                  door verscherpt toezicht kiezen om minder opdrachten aan te nemen of zich
                  terugtrekken uit bepaalde samenwerkingen, valt je capaciteitsplanning in
                  het water. En in een branche waar elke monteur telt, is dat een direct
                  bedrijfsrisico.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Reputatierisico.</strong> De liftbranche is klein. Iedereen kent
                  iedereen. Een naheffing of boete van de Belastingdienst blijft niet
                  geheim. Het kan je reputatie schaden bij opdrachtgevers, bij monteurs die
                  voor je willen werken, en bij concurrenten die er graag gebruik van maken.
                </p>
              </ScrollReveal>

              {/* H2: Wanneer arbeidsrelatie? */}
              <ScrollReveal>
                <h2 id="arbeidsrelatie">Wanneer is er sprake van een arbeidsrelatie?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Belastingdienst beoordeelt de werkrelatie op basis van drie
                  hoofdcriteria. Dit zijn dezelfde criteria die het arbeidsrecht hanteert
                  voor het vaststellen van een arbeidsovereenkomst.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>1. Gezagsverhouding (instructiebevoegdheid).</strong> Is er sprake
                  van een gezagsverhouding? Bepaalt het liftbedrijf hoe, wanneer en waar de
                  monteur zijn werk uitvoert? Bij een echte zzp-relatie bepaalt de
                  opdrachtnemer zelf hoe hij het resultaat bereikt. Als het liftbedrijf de
                  routes indeelt, de werktijden bepaalt, de planning maakt en toezicht
                  houdt op de uitvoering, wijst dat op een gezagsverhouding.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>2. Persoonlijke arbeid.</strong> Moet de monteur het werk
                  persoonlijk uitvoeren, of mag hij zich laten vervangen? Bij een echte
                  zzp-relatie kan de opdrachtnemer een vervanger sturen zonder toestemming
                  van de opdrachtgever. In de praktijk is vervanging bij liftwerk lastig
                  (certificeringen, OEM-kennis), waardoor dit criterium bijna altijd in het
                  nadeel van de zzp-constructie uitvalt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>3. Loon.</strong> Krijgt de monteur een vaste vergoeding per uur
                  of per periode, ongeacht het resultaat? Bij een echte opdracht wordt er
                  betaald voor een resultaat, niet voor tijd. In de liftbranche worden
                  zzp-monteurs vrijwel altijd per uur betaald, wat lijkt op een
                  loonconstructie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Specifiek voor liftbedrijven</strong> zijn er een aantal praktische
                  indicatoren die de Belastingdienst meeneemt in de beoordeling:
                </p>
                <ul>
                  <li>
                    <strong>Vaste routes.</strong> Deelt het liftbedrijf de onderhoudroutes in
                    voor de zzp-monteur? Dan is er sprake van werkgeversgezag.
                  </li>
                  <li>
                    <strong>Werkkleding.</strong> Draagt de monteur kleding met het logo van het
                    liftbedrijf? Dan presenteert hij zich als onderdeel van die organisatie.
                  </li>
                  <li>
                    <strong>Gereedschap en materialen.</strong> Gebruikt de monteur het
                    gereedschap en de bus van het liftbedrijf? Dat wijst op een
                    werkgeversrelatie.
                  </li>
                  <li>
                    <strong>Duur van de samenwerking.</strong> Werkt de monteur al langer dan
                    zes maanden structureel voor hetzelfde bedrijf? Hoe langer de duur, hoe
                    sterker het vermoeden van een arbeidsrelatie.
                  </li>
                  <li>
                    <strong>Exclusiviteit.</strong> Werkt de monteur uitsluitend voor jouw
                    bedrijf? Een echte zelfstandige heeft meerdere opdrachtgevers.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Hoe meer van deze indicatoren van toepassing zijn, hoe groter het risico
                  dat de Belastingdienst de werkrelatie herkwalificeert als arbeidsrelatie.
                  En in de liftbranche zijn er, eerlijk gezegd, maar weinig zzp-constructies
                  die op alle punten standhouden.
                </p>
              </ScrollReveal>

              {/* H2: Hoe CaaS het DBA-risico elimineert */}
              <ScrollReveal>
                <h2 id="caas-dba-risico">Hoe CaaS het DBA-risico elimineert</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Capacity as a Service (CaaS) biedt een structurele oplossing voor het
                  DBA-vraagstuk. Het model is fundamenteel anders dan het inhuren van een
                  zzp&apos;er, en daardoor verdwijnt het schijnzelfstandigheidsrisico volledig.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoe werkt het?</strong> Bij het CaaS-model van LYFD huur je als
                  liftbedrijf geen individuele monteur in, maar koop je capaciteit in bij
                  LYFD B.V. LYFD is de opdrachtnemer. De monteur is verbonden aan LYFD,
                  niet aan jouw bedrijf. Daarmee ontstaat er geen directe arbeidsrelatie
                  tussen het liftbedrijf en de monteur.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De drie criteria die de Belastingdienst toetst, vallen bij CaaS anders uit:
                </p>
                <ul>
                  <li>
                    <strong>Gezag:</strong> De monteur werkt onder regie van LYFD, niet onder
                    gezag van het liftbedrijf. LYFD bepaalt welke monteur wordt ingezet en
                    draagt de verantwoordelijkheid voor de uitvoering.
                  </li>
                  <li>
                    <strong>Arbeid:</strong> Het liftbedrijf koopt capaciteit, geen persoonlijke
                    arbeid. Als een monteur uitvalt, regelt LYFD vervanging. De levering is
                    niet persoonsgebonden.
                  </li>
                  <li>
                    <strong>Loon:</strong> Het liftbedrijf betaalt LYFD een capaciteitstarief,
                    geen uurloon aan een individu. De vergoeding van de monteur is een zaak
                    tussen LYFD en de monteur.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Het resultaat:</strong> volledige DBA-compliance zonder dat je
                  inlevert op flexibiliteit. Je hebt toegang tot gecertificeerde monteurs
                  wanneer je ze nodig hebt, zonder het juridische risico van een directe
                  zzp-constructie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Bovendien levert LYFD monteurs die gekwalificeerd zijn voor de
                  installaties waar ze op worden ingezet. Gecertificeerd conform NEN 3140,
                  VCA, en waar nodig OEM-specifiek. Dat is een wezenlijk verschil met een
                  uitzendbureau dat generieke kandidaten levert zonder branchekennis.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voor liftbedrijven die nu werken met drie, vijf of tien zzp-monteurs is de
                  overstap naar CaaS niet alleen juridisch verstandig. Het is ook
                  operationeel stabieler. Je vervangt onzekerheid (komt de zzp&apos;er morgen
                  nog?) door garantie (LYFD levert de afgesproken capaciteit, met
                  vervangingsgarantie).
                </p>
              </ScrollReveal>

              {/* H2: Praktische stappen */}
              <ScrollReveal>
                <h2 id="praktische-stappen">Praktische stappen voor liftbedrijven</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Of je nu overweegt om over te stappen op CaaS of eerst je huidige situatie
                  wilt beoordelen, er zijn concrete stappen die je vandaag kunt zetten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 1: Breng je huidige zzp-relaties in kaart.</strong> Maak een
                  overzicht van alle zzp-monteurs waarmee je structureel werkt. Noteer per
                  monteur: hoe lang de samenwerking duurt, hoeveel uur per week hij gemiddeld
                  werkt, of hij ook voor andere opdrachtgevers werkt, en of hij jouw
                  werkkleding, gereedschap of voertuig gebruikt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 2: Toets elke relatie op de drie criteria.</strong> Loop per
                  monteur de drie criteria langs: gezag, persoonlijke arbeid en loon. Wees
                  eerlijk. Het gaat niet om wat er in het contract staat, maar om hoe de
                  werkrelatie er in de praktijk uitziet. Als je bij twee of meer criteria
                  twijfelt, is dat een serieus signaal.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 3: Beoordeel het financiele risico.</strong> Bereken wat een
                  naheffing zou betekenen als de Belastingdienst een of meerdere relaties
                  herkwalificeert. Neem het uurtarief, het aantal uren per jaar, de duur van
                  de samenwerking, en reken de loonheffing en premies door. Dat geeft je een
                  beeld van de mogelijke exposure.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 4: Overweeg alternatieven.</strong> Voor zzp-relaties die
                  risicovol zijn, zijn er drie opties: de monteur in dienst nemen (vaste
                  kosten, minder flexibiliteit), de samenwerking beeindigen (capaciteitsverlies),
                  of overstappen op een CaaS-model (flexibiliteit behouden zonder juridisch
                  risico).
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 5: Maak een transitieplan.</strong> Als je kiest voor CaaS,
                  hoeft dat niet van de ene op de andere dag. Begin met de zzp-relaties die
                  het meeste risico dragen (lang, exclusief, intensief) en faseer de
                  overstap. LYFD kan hierin meedenken en een transitietraject op maat
                  vormgeven.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  De Wet DBA is geen reden tot paniek. Het is wel een reden om je huidige
                  werkwijze kritisch te bekijken. Wie nu handelt, voorkomt straks
                  vervelende verrassingen.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De liftbranche verandert. De regelgeving wordt strenger, de handhaving
                  intensiever, en de arbeidsmarkt blijft krap. Liftbedrijven die nu een
                  juridisch en operationeel robuuste oplossing kiezen voor hun
                  capaciteitsvraagstuk, staan straks sterker dan bedrijven die afwachten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  CaaS is niet de enige oplossing. Maar voor liftbedrijven die flexibiliteit
                  willen behouden zonder de juridische risico&apos;s van zzp-constructies, is het
                  op dit moment de meest complete optie. En het elimineert het DBA-risico
                  niet als bijeffect, maar als kernfunctie van het model.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Wil je weten of jouw zzp-constructies DBA-proof zijn?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                Plan een gesprek. Wij beoordelen je situatie en laten zien hoe CaaS het risico elimineert.
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

          {/* Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <ArticleSidebar items={tocItems} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
