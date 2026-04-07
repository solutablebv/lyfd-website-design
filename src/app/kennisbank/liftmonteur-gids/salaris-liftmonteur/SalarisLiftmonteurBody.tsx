"use client";

import { Container } from "@/components/ui/Container";
import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "salaris-vast-dienstverband", label: "Vast dienstverband" },
  { id: "tarief-zzp", label: "Zzp-tarief" },
  { id: "verdienen-via-caas", label: "Verdienen via CaaS" },
  { id: "vergelijking", label: "Vast vs. zzp vs. CaaS" },
  { id: "wat-beinvloedt-tarief", label: "Wat bepaalt je tarief?" },
];

export function SalarisLiftmonteurBody() {
  return (
    <section className="relative bg-[#FDFCFA] pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok (AEO) */}
              <ScrollReveal>
                <div className="relative bg-[#F5F3F0] rounded-lg border-l-2 border-[#A0704C] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#E8E5E0] text-[#6B6560] mb-3">
                    Samenvatting
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#3D3A37] m-0">
                    <strong className="text-[#1A1A1A]">Het salaris van een liftmonteur in Nederland</strong>{" "}
                    varieert sterk afhankelijk van ervaringsniveau, arbeidsmodel
                    en certificeringen. In vast dienstverband is de CAO
                    Metalektro leidend. Als zzp&apos;er liggen indicatieve
                    uurtarieven tussen EUR 45 en EUR 75. Via het CaaS-model
                    van LYFD verdienen monteurs 10 tot 15% boven de CAO
                    Metalektro, zonder eigen administratie en zonder
                    DBA-risico.{" "}
                    <span className="text-[#9C9690] text-xs">
                      (Bron: LYFD, geverifieerde bedrijfscijfers)
                    </span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  &quot;Wat verdient een liftmonteur?&quot; Het is een van de
                  meest gezochte vragen in de branche, en het antwoord is minder
                  eenvoudig dan een getal. Want wat je verdient als liftmonteur
                  hangt niet alleen af van je ervaring en certificeringen, maar
                  ook van hoe je werkt: in vast dienstverband, als zzp&apos;er,
                  of via een model als Capacity as a Service.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel geven we een eerlijk overzicht van de
                  verschillende verdienmodellen, gebaseerd op geverifieerde
                  cijfers waar beschikbaar en met duidelijke markering waar we
                  indicatieve schattingen gebruiken. Het doel is niet om een
                  exact bedrag te noemen (dat verschilt per situatie), maar om je
                  te helpen een weloverwogen keuze te maken.
                </p>
              </ScrollReveal>

              {/* H2: Salaris in vast dienstverband */}
              <ScrollReveal>
                <h2 id="salaris-vast-dienstverband">
                  Salaris liftmonteur in vast dienstverband
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De meeste liftmonteurs in Nederland die in loondienst werken,
                  vallen onder de CAO Metalektro. Dit is de collectieve
                  arbeidsovereenkomst voor de metaal- en elektrotechnische
                  industrie en dekt onder andere salarisschalen, vakantiegeld,
                  pensioenopbouw en overwerkregelingen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  De onderstaande bedragen zijn indicatief en gebaseerd op de
                  CAO Metalektro 2025-2026. Werkelijke salarissen kunnen afwijken
                  afhankelijk van de specifieke werkgever, regio en individuele
                  arbeidsovereenkomst.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De CAO Metalektro werkt met een schalensysteem. Liftmonteurs
                  worden doorgaans ingedeeld in de middelste tot hogere schalen,
                  afhankelijk van hun functieniveau en ervaring. Een globale
                  indicatie:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Junior liftmonteur (0-2 jaar ervaring):</strong>{" "}
                    instroom in de lagere technische schalen. Bruto jaarsalaris
                    inclusief vakantiegeld indicatief rond EUR 30.000 tot
                    EUR 36.000. (Illustratief voorbeeld, afhankelijk van
                    schaal-indeling.)
                  </li>
                  <li>
                    <strong>Medior liftmonteur (3-5 jaar ervaring):</strong>{" "}
                    middelste schalen met NEN 3140 en basiservaring op een of meer
                    OEM-merken. Bruto jaarsalaris indicatief rond EUR 36.000 tot
                    EUR 44.000. (Illustratief voorbeeld.)
                  </li>
                  <li>
                    <strong>Senior liftmonteur (6+ jaar ervaring):</strong>{" "}
                    hogere schalen met meerdere certificeringen en
                    OEM-specialisaties. Bruto jaarsalaris indicatief rond
                    EUR 44.000 tot EUR 55.000. (Illustratief voorbeeld.)
                  </li>
                  <li>
                    <strong>Specialist / voorman (10+ jaar):</strong>{" "}
                    topschalen met leidinggevende of consultancytaken. Bruto
                    jaarsalaris indicatief boven EUR 55.000. (Illustratief
                    voorbeeld.)
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Bij een vast dienstverband komen daar secundaire
                  arbeidsvoorwaarden bij: pensioenopbouw (via PME of PMT),
                  vakantiedagen (doorgaans 25 tot 27 dagen), een
                  eindejaarsuitkering, en vergoedingen voor reistijd en
                  gereedschap. Deze zijn niet zichtbaar in het brutosalaris, maar
                  vertegenwoordigen een aanzienlijke waarde.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het nadeel van vast dienstverband is het CAO-plafond. De
                  loonschalen hebben een maximum, en dat maximum is niet altijd
                  in lijn met wat de markt bereid is te betalen voor een schaarse,
                  ervaren liftmonteur. Dit is een van de redenen waarom monteurs
                  de overstap maken naar zzp of naar een model als CaaS.
                </p>
              </ScrollReveal>

              {/* H2: Tarief als zzp-liftmonteur */}
              <ScrollReveal>
                <h2 id="tarief-zzp">Tarief als zzp-liftmonteur</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Als zzp-liftmonteur bepaal je in theorie je eigen tarief. In de
                  praktijk wordt dat tarief gedicteerd door wat de markt bereid is
                  te betalen, en dat varieert sterk afhankelijk van je profiel.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Een indicatief overzicht van uurtarieven in de markt:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Junior zzp (beperkte ervaring):</strong> indicatief{" "}
                    <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                      EUR 45 tot 50
                    </span>{" "}
                    per uur. (Illustratief voorbeeld.)
                  </li>
                  <li>
                    <strong>Medior zzp (3-5 jaar, NEN 3140 + OEM):</strong>{" "}
                    indicatief{" "}
                    <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                      EUR 50 tot 60
                    </span>{" "}
                    per uur. (Illustratief voorbeeld.)
                  </li>
                  <li>
                    <strong>Senior zzp (6+ jaar, meerdere OEM&apos;s):</strong>{" "}
                    indicatief{" "}
                    <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                      EUR 60 tot 75
                    </span>{" "}
                    per uur. (Illustratief voorbeeld.)
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar let op: een bruto uurtarief van EUR 65 als zzp&apos;er is
                  niet hetzelfde als EUR 65 in loondienst. Als zzp&apos;er betaal
                  je zelf:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    Arbeidsongeschiktheidsverzekering (AOV): indicatief EUR 300
                    tot 600 per maand
                  </li>
                  <li>
                    Pensioenopbouw: moet je zelf regelen (vaak EUR 500+ per
                    maand voor vergelijkbare opbouw)
                  </li>
                  <li>
                    Aansprakelijkheidsverzekering (beroeps- en
                    bedrijfsaansprakelijkheid)
                  </li>
                  <li>
                    Administratie en boekhouding: accountant, facturatie,
                    belastingaangifte
                  </li>
                  <li>
                    Geen vakantiegeld, geen doorbetaling bij ziekte, geen
                    vakantiedagen
                  </li>
                  <li>
                    Acquisitiekosten en niet-declarabele uren
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Als je dit allemaal meerekent, is het netto besteedbare inkomen
                  van een zzp&apos;er met een tarief van EUR 65 per uur vaak
                  vergelijkbaar met een werknemer met een bruto jaarsalaris in de
                  range van EUR 48.000 tot EUR 55.000. Het hogere bruto tarief
                  ziet er aantrekkelijk uit, maar de werkelijke marge is kleiner
                  dan je zou denken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Daarbovenop komt het DBA-risico. Sinds de herinvoering van de
                  handhaving van de Wet DBA (per 1 januari 2025) lopen
                  zzp-liftmonteurs het risico dat hun opdrachtrelatie wordt
                  geherkwalificeerd als een dienstverband. De boetes en
                  naheffingen die daaruit voortvloeien kunnen aanzienlijk zijn.
                </p>
              </ScrollReveal>

              {/* H2: Verdienen via CaaS (het LYFD-model) */}
              <ScrollReveal>
                <h2 id="verdienen-via-caas">
                  Verdienen via CaaS (het LYFD-model)
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD biedt een derde weg: het{" "}
                  <a
                    href="/diensten/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    Capacity as a Service model
                  </a>
                  . Monteurs werken via LYFD, niet als zzp&apos;er en niet in
                  traditioneel vast dienstverband bij de opdrachtgever.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De kern van het LYFD-verdienmodel:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>
                      Vergoeding:{" "}
                      <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                        10 tot 15%
                      </span>{" "}
                      boven CAO Metalektro
                    </strong>{" "}
                    <span className="text-[#9C9690] text-xs">
                      (Bron: LYFD, geverifieerde bedrijfscijfers)
                    </span>
                  </li>
                  <li>
                    Geen eigen administratie of facturatie
                  </li>
                  <li>
                    Geen DBA-risico (de contractuele structuur is DBA-compliant)
                  </li>
                  <li>
                    Keuzevrijheid in opdrachten en planning
                  </li>
                  <li>
                    Toegang tot een breed scala aan opdrachtgevers en projecten
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Wat dat in de praktijk betekent: een ervaren liftmonteur die
                  in loondienst tegen het CAO-plafond aanzit, kan via LYFD een
                  hoger inkomen realiseren zonder de risico&apos;s en
                  administratieve lasten van het zzp-schap. En een zzp&apos;er
                  die het DBA-risico wil vermijden of geen zin meer heeft in
                  eigen administratie, behoudt via LYFD de flexibiliteit maar
                  verliest de zorgen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het is geen wondermodel. Het is een eerlijke berekening.
                  LYFD verdient een marge op de inzet (de opdrachtgever betaalt
                  het uurtarief), en de monteur ontvangt een vergoeding die
                  structureel boven de CAO ligt. Beide partijen weten precies
                  waar ze aan toe zijn.
                </p>
              </ScrollReveal>

              {/* H2: Vergelijking: vast vs. zzp vs. CaaS */}
              <ScrollReveal>
                <h2 id="vergelijking">
                  Vergelijking: vast vs. zzp vs. CaaS
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Om de drie modellen naast elkaar te zetten, hebben we een
                  vergelijkingstabel opgesteld. Deze is gebaseerd op een medior
                  liftmonteur met 4 jaar ervaring en NEN 3140 certificering.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Alle bedragen zijn indicatief en bedoeld om de orde van grootte
                  te illustreren. Werkelijke bedragen varieren per situatie.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">
                          Aspect
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A]">
                          Vast
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-[#1A1A1A]">
                          Zzp
                        </th>
                        <th className="text-left py-3 pl-4 font-semibold text-[#1A1A1A]">
                          CaaS (LYFD)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-[#3D3A37]">
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Bruto inkomen</td>
                        <td className="py-3 px-4">CAO-schaal</td>
                        <td className="py-3 px-4">EUR 50-60/uur</td>
                        <td className="py-3 pl-4">CAO +10-15%</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Netto na kosten</td>
                        <td className="py-3 px-4">Voorspelbaar</td>
                        <td className="py-3 px-4">Lager dan verwacht</td>
                        <td className="py-3 pl-4">Hoger dan vast</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Zekerheid</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 px-4">Laag</td>
                        <td className="py-3 pl-4">Middel tot hoog</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Flexibiliteit</td>
                        <td className="py-3 px-4">Beperkt</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 pl-4">Hoog</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Administratie</td>
                        <td className="py-3 px-4">Geen</td>
                        <td className="py-3 px-4">Volledig zelf</td>
                        <td className="py-3 pl-4">Geen</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">DBA-risico</td>
                        <td className="py-3 px-4">Geen</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 pl-4">Geen</td>
                      </tr>
                      <tr className="border-b border-[#E8E5E0]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Pensioen</td>
                        <td className="py-3 px-4">Via werkgever</td>
                        <td className="py-3 px-4">Zelf regelen</td>
                        <td className="py-3 pl-4">Geregeld</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Projectkeuze</td>
                        <td className="py-3 px-4">Beperkt</td>
                        <td className="py-3 px-4">Vrij</td>
                        <td className="py-3 pl-4">Vrij</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De tabel laat zien dat er geen &quot;beste&quot; optie is, alleen
                  de optie die het beste past bij jouw situatie, risicobereidheid
                  en prioriteiten. Maar het CaaS-model combineert elementen van
                  beide werelden op een manier die voor veel monteurs aantrekkelijk
                  is.
                </p>
              </ScrollReveal>

              {/* H2: Wat beinvloedt je tarief als liftmonteur? */}
              <ScrollReveal>
                <h2 id="wat-beinvloedt-tarief">
                  Wat beinvloedt je tarief als liftmonteur?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Of je nu in loondienst bent, als zzp&apos;er werkt of via CaaS:
                  er zijn een aantal factoren die bepalen waar je in de
                  tarievenrange terechtkomt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Ervaringsjaren.</strong> Dit is de meest voor de hand
                  liggende factor. Hoe meer ervaring, hoe hoger je wordt
                  ingeschaald of hoe hoger je tarief kan liggen. Maar ervaring
                  alleen is niet genoeg, het gaat om relevante ervaring op de
                  typen installaties die de markt vraagt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Certificeringen.</strong>{" "}
                  <a
                    href="/kennisbank/nen-certificering/nen-3140-uitleg/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    NEN 3140
                  </a>{" "}
                  is een basisvereiste. Maar aanvullende certificeringen
                  (VCA, specifieke PBM-opleidingen) verhogen je waarde. Hoe meer
                  aantoonbare bekwaamheden, hoe minder risico een opdrachtgever
                  loopt, en dat vertaalt zich in een hoger tarief.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>OEM-specialisatie.</strong> Dit is misschien wel de
                  grootste tariefdrijver in de huidige markt. Een monteur die
                  aantoonbaar op twee of drie grote{" "}
                  <a
                    href="/kennisbank/nen-certificering/oem-certificeringen/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    OEM-merken
                  </a>{" "}
                  kan werken, is significant waardevoller dan een monteur met
                  enkel generieke kennis. Multi-OEM monteurs zijn schaars, en
                  die schaarste vertaalt zich direct in hogere tarieven.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Regio.</strong> De Randstad betaalt doorgaans iets
                  hogere tarieven dan de rest van Nederland, deels door hogere
                  levenskosten en deels door concentratie van grote gebouwen met
                  complexe installaties. Maar het verschil is kleiner dan in
                  andere technische branches, omdat liftmonteurs vaak regionaal
                  worden ingezet.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Beschikbaarheid en flexibiliteit.</strong> Monteurs die
                  ook buiten reguliere werktijden beschikbaar zijn (weekenden,
                  storingsdienst, piekperiodes) kunnen een hoger tarief
                  bedingen. In een branche met structureel capaciteitsgebrek is
                  flexibele inzetbaarheid een waardevolle eigenschap.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Type werkzaamheden.</strong> Modernisering en nieuwbouw
                  worden doorgaans hoger vergoed dan regulier onderhoud.
                  Specialistisch werk (zoals het programmeren van
                  besturingssystemen of het uitvoeren van
                  load-tests) ligt qua tarief boven standaard servicewerk.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Nederlandse liftmarkt telt circa{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    105.000
                  </span>{" "}
                  installaties en slechts{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    1.600 tot 1.800
                  </span>{" "}
                  actieve monteurs.{" "}
                  <span className="text-[#9C9690] text-xs">
                    (Bron: LYFD, marktervaring 5 jaar)
                  </span>{" "}
                  Die structurele schaarste betekent dat de tarieven de komende
                  jaren waarschijnlijk niet zullen dalen. Voor liftmonteurs die
                  investeren in hun profiel (certificeringen, OEM-kennis,
                  flexibiliteit) is dat goed nieuws.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Benieuwd wat je via LYFD kunt verdienen?
              </p>
              <p className="mt-2 text-sm text-[#3D3A37] leading-relaxed max-w-[50ch]">
                We berekenen graag wat het LYFD-model voor jouw situatie betekent.
                Transparant, zonder verplichtingen.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors duration-300"
              >
                Neem contact op
                <span className="text-[#9C9690]">&rarr;</span>
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
