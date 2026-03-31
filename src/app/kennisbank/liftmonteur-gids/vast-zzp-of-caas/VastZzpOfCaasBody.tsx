"use client";

import { Container } from "@/components/ui/Container";
import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "drie-arbeidsvormen", label: "De drie arbeidsvormen" },
  { id: "vast-dienstverband", label: "Vast dienstverband" },
  { id: "zzp", label: "Zzp" },
  { id: "caas-lyfd", label: "CaaS via LYFD" },
  { id: "vergelijkingstabel", label: "Vergelijkingstabel" },
  { id: "voor-wie", label: "Voor wie?" },
];

export function VastZzpOfCaasBody() {
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
                    Samenvatting
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#404040] m-0">
                    <strong className="text-[#1A1A1A]">
                      Liftmonteurs in Nederland
                    </strong>{" "}
                    hebben drie hoofdopties: vast dienstverband (zekerheid,
                    CAO-gebonden), zzp (vrijheid, maar met DBA-risico en eigen
                    administratie), of Capacity as a Service via LYFD (hoger
                    tarief dan vast, zonder zzp-risico&apos;s). Elke optie heeft
                    specifieke voor- en nadelen. De beste keuze hangt af van je
                    persoonlijke prioriteiten: zekerheid, vrijheid of een
                    combinatie van beide.
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Als liftmonteur in Nederland sta je voor een keuze die verder
                  reikt dan alleen je salaris. De manier waarop je werkt, bepaalt
                  niet alleen hoeveel je verdient, maar ook hoeveel zekerheid je
                  hebt, hoeveel administratie je draait, welke risico&apos;s je
                  loopt, en hoeveel vrijheid je hebt in de keuze van je
                  opdrachten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Traditioneel waren er twee opties: vast dienstverband of
                  zzp. De laatste jaren is daar een derde model bijgekomen:
                  Capacity as a Service (CaaS), het model dat LYFD hanteert.
                  Elk model heeft zijn eigen logica, en geen ervan is per
                  definitie &quot;beter&quot;. Het hangt af van wie je bent en
                  wat je belangrijk vindt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel zetten we de drie opties eerlijk naast elkaar.
                  Met de voordelen, de nadelen, en de nuances die je niet op een
                  flyer terugvindt.
                </p>
              </ScrollReveal>

              {/* H2: De drie arbeidsvormen voor liftmonteurs */}
              <ScrollReveal>
                <h2 id="drie-arbeidsvormen">
                  De drie arbeidsvormen voor liftmonteurs
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Voordat we in de details duiken, een kort overzicht van de
                  drie modellen:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li>
                    <strong>Vast dienstverband:</strong> je bent in loondienst bij
                    een liftbedrijf, valt onder de CAO Metalektro, hebt een vast
                    salaris en alle bijbehorende arbeidsrechtelijke bescherming.
                  </li>
                  <li>
                    <strong>Zzp (zelfstandig zonder personeel):</strong> je werkt
                    als ondernemer, factureert je eigen uren, regelt je eigen
                    verzekeringen en administratie, en bent verantwoordelijk voor
                    je eigen opdrachtstroom.
                  </li>
                  <li>
                    <strong>CaaS via LYFD:</strong> je werkt via het
                    LYFD-platform, ontvangt een vergoeding boven de CAO, behoudt
                    keuzevrijheid in opdrachten, maar draagt geen zzp-risico&apos;s
                    en hebt geen eigen administratie.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Elk model trekt een ander type monteur aan. En elk model
                  heeft verborgen voor- en nadelen die pas zichtbaar worden als
                  je ze in de praktijk ervaart.
                </p>
              </ScrollReveal>

              {/* H2: Vast dienstverband: zekerheid met beperkingen */}
              <ScrollReveal>
                <h2 id="vast-dienstverband">
                  Vast dienstverband: zekerheid met beperkingen
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Vast dienstverband is het traditionele model. Je tekent een
                  arbeidscontract bij een liftbedrijf, en daarmee val je onder de
                  CAO Metalektro. Dat geeft je een stevig fundament van
                  zekerheid.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De voordelen zijn reeel.</strong> Je hebt een vast
                  maandelijks salaris dat ongeacht drukte of seizoen wordt
                  uitbetaald. Je bouwt pensioen op via het pensioenfonds
                  (doorgaans PME of PMT). Je hebt recht op vakantiedagen
                  (doorgaans 25 tot 27 per jaar), vakantiegeld (8%), en een
                  eindejaarsuitkering. Bij ziekte wordt je salaris doorbetaald.
                  Je hebt ontslagbescherming. En je hoeft je geen zorgen te
                  maken over administratie, facturatie of belastingaangiftes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Maar er zijn beperkingen.</strong> De CAO-schalen hebben
                  een plafond. Op een gegeven moment zit je aan het maximum van
                  je schaal, en dan stijgt je salaris alleen nog met de
                  CAO-verhogingen. In een markt waarin je als ervaren monteur
                  aanzienlijk meer waard bent dan het schaalmaximum, kan dat
                  frustrerend zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Daarnaast heb je beperkte keuzevrijheid in projecten. Je
                  werkgever bepaalt waar je wordt ingezet, op welke installaties
                  je werkt, en hoe je planning eruitziet. Sommige monteurs
                  vinden dat prima. Anderen ervaren het als een beperking,
                  zeker als ze interesse hebben in specifieke typen werk
                  (modernisering, nieuwbouw) of als ze liever niet elke dag op
                  dezelfde route rijden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  En tot slot: je bent gebonden aan je werkgever. Een
                  opzegtermijn van een tot twee maanden is gebruikelijk. Als je
                  een keer wilt overstappen, is dat een proces. Niet
                  onoverkomelijk, maar ook niet zo simpel als het klinkt in een
                  krappe arbeidsmarkt.
                </p>
              </ScrollReveal>

              {/* H2: Zzp: vrijheid met een prijs */}
              <ScrollReveal>
                <h2 id="zzp">Zzp: vrijheid met een prijs</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het zzp-model trekt liftmonteurs die vrijheid en een hoger
                  bruto inkomen zoeken. En op het eerste gezicht lijkt het
                  aantrekkelijk: je bepaalt zelf je tarief, je kiest je
                  opdrachten, je bent je eigen baas.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De voordelen zijn er zeker.</strong> Je bruto uurtarief
                  ligt hoger dan in loondienst, indicatief tussen{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    EUR 45 en EUR 75
                  </span>{" "}
                  per uur afhankelijk van ervaring en specialisatie.
                  (Illustratief voorbeeld.) Je hebt keuzevrijheid in opdrachten
                  en kunt je specialiseren in het type werk dat je het
                  interessantst vindt. En je hebt volledige controle over je
                  planning.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Maar de prijs is hoger dan je denkt.</strong> Als
                  zzp&apos;er draag je alle risico&apos;s en kosten zelf. Dat
                  begint bij de verzekeringen: een
                  arbeidsongeschiktheidsverzekering (AOV) kost al snel EUR 300
                  tot EUR 600 per maand, afhankelijk van dekking en risicoprofiel.
                  Pensioenopbouw moet je zelf regelen, en als je het vergelijkt
                  met de werkgeversbijdrage in loondienst, praat je over EUR 500+
                  per maand voor een vergelijkbare opbouw.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dan is er de administratie. Facturatie, boekhouding, BTW-aangifte,
                  inkomstenbelasting. De meeste zzp-monteurs besteden dit uit aan
                  een accountant, maar zelfs dan kost het tijd en aandacht die je
                  niet aan je vak besteedt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  En het grootste risico van dit moment: de Wet DBA. Sinds
                  1 januari 2025 handhaaft de Belastingdienst actief op
                  schijnzelfstandigheid. Als liftmonteur die langdurig bij
                  dezelfde opdrachtgever werkt, onder leiding werkt, en
                  hetzelfde werk doet als vaste medewerkers, loop je een reeel
                  risico op herkwalificatie. De gevolgen: naheffingen voor
                  loonbelasting en premies, boetes, en reputatieschade. Niet
                  alleen voor jou, maar ook voor je opdrachtgever, wat ertoe
                  kan leiden dat opdrachtgevers minder bereid zijn om
                  zzp&apos;ers in te zetten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  En tot slot: als zzp&apos;er heb je geen vangnet bij ziekte.
                  Een gebroken enkel, een hernia, een andere aandoening die je
                  weken of maanden uit de running haalt, en je inkomen stopt
                  direct. Geen doorbetaling, geen WIA-aanvulling, alleen je AOV
                  (als je die hebt) die na een wachttijd van doorgaans 30 tot 90
                  dagen een percentage van je inkomen uitkeert.
                </p>
              </ScrollReveal>

              {/* H2: CaaS via LYFD: de derde weg */}
              <ScrollReveal>
                <h2 id="caas-lyfd">CaaS via LYFD: de derde weg</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Capacity as a Service model van LYFD is ontworpen als
                  antwoord op de beperkingen van zowel vast dienstverband als
                  zzp. Het combineert elementen van beide modellen en elimineert
                  een aantal van de belangrijkste nadelen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoger inkomen dan vast.</strong> LYFD betaalt monteurs{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
                    10 tot 15%
                  </span>{" "}
                  boven de CAO Metalektro.{" "}
                  <span className="text-[#A0A0A0] text-xs">
                    (Bron: LYFD, geverifieerde bedrijfscijfers)
                  </span>{" "}
                  Dat is geen klein verschil. Voor een ervaren monteur kan dit
                  op jaarbasis duizenden euro&apos;s schelen ten opzichte van het
                  CAO-maximum.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Geen DBA-risico.</strong> De contractuele structuur van
                  het CaaS-model is zo ingericht dat het DBA-compliant is.
                  Monteurs werken niet als schijnzelfstandige, maar via een
                  model dat juridisch is getoetst. Dat geeft rust, zowel aan
                  de monteur als aan de opdrachtgever.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Geen eigen administratie.</strong> Facturatie,
                  boekhouding, contracten: dat wordt door LYFD afgehandeld. Je
                  hoeft geen tijd te besteden aan zaken die niets met je vak te
                  maken hebben.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Keuzevrijheid in opdrachten.</strong> Anders dan in vast
                  dienstverband bepaal je mee welke opdrachten je aanneemt. Je
                  hebt inzicht in wat er beschikbaar is, en je kiest op basis van
                  je voorkeuren: type werk, locatie, duur, merk. Dat is een
                  vrijheid die in vast dienstverband doorgaans ontbreekt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Toegang tot een breed opdrachtgeversnetwerk.</strong>{" "}
                  Via LYFD heb je toegang tot meerdere opdrachtgevers en
                  projecten, zonder dat je zelf aan acquisitie hoeft te doen.
                  Dat is een significant verschil met zzp, waar je zelf je
                  opdrachtstroom moet genereren en onderhouden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Is het perfect? Nee. Je geeft een deel van de totale marge af
                  aan het platform (LYFD verdient op het verschil tussen het
                  tarief dat de opdrachtgever betaalt en de vergoeding aan de
                  monteur). Maar de vraag is: wat koop je daarvoor terug? Geen
                  DBA-risico, geen administratie, geen acquisitie, geen
                  verzekeringsgedoe, en een hoger inkomen dan vast. Voor veel
                  monteurs is die afweging positief.
                </p>
              </ScrollReveal>

              {/* H2: Vergelijkingstabel */}
              <ScrollReveal>
                <h2 id="vergelijkingstabel">Vergelijkingstabel</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Hieronder een uitgebreide vergelijking van de drie modellen.
                  Alle bedragen zijn indicatief.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">
                          Criterium
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
                    <tbody className="text-[#404040]">
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Inkomen</td>
                        <td className="py-3 px-4">CAO-schaal (plafond)</td>
                        <td className="py-3 px-4">Hoog bruto, lager netto</td>
                        <td className="py-3 pl-4">CAO +10-15%</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Inkomenszekerheid</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 px-4">Laag</td>
                        <td className="py-3 pl-4">Middel tot hoog</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Flexibiliteit</td>
                        <td className="py-3 px-4">Laag</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 pl-4">Hoog</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Administratie</td>
                        <td className="py-3 px-4">Geen</td>
                        <td className="py-3 px-4">Volledig zelf</td>
                        <td className="py-3 pl-4">Geen</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">DBA-risico</td>
                        <td className="py-3 px-4">Geen</td>
                        <td className="py-3 px-4">Hoog</td>
                        <td className="py-3 pl-4">Geen</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Pensioen</td>
                        <td className="py-3 px-4">Via werkgever (PME/PMT)</td>
                        <td className="py-3 px-4">Zelf regelen</td>
                        <td className="py-3 pl-4">Geregeld</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Ziektevangnet</td>
                        <td className="py-3 px-4">Loondoorbetaling 2 jaar</td>
                        <td className="py-3 px-4">Alleen AOV (zelf betaald)</td>
                        <td className="py-3 pl-4">Geregeld</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Projectkeuze</td>
                        <td className="py-3 px-4">Werkgever bepaalt</td>
                        <td className="py-3 px-4">Eigen keuze</td>
                        <td className="py-3 pl-4">Eigen keuze</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Acquisitie nodig</td>
                        <td className="py-3 px-4">Nee</td>
                        <td className="py-3 px-4">Ja</td>
                        <td className="py-3 pl-4">Nee</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">Ontwikkeling</td>
                        <td className="py-3 px-4">Vaak beperkt</td>
                        <td className="py-3 px-4">Eigen verantwoordelijkheid</td>
                        <td className="py-3 pl-4">Breed via pool</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              {/* H2: Voor wie is welke optie het best? */}
              <ScrollReveal>
                <h2 id="voor-wie">Voor wie is welke optie het best?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er is geen universeel &quot;beste&quot; optie. Het hangt af van
                  wie je bent, wat je waardeert, en in welke levensfase je zit.
                  Hieronder drie typische profielen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De zekerheidszoeker.</strong> Je hebt een gezin, een
                  hypotheek, en je slaapt beter als je weet dat het salaris er
                  elke maand staat. Je vindt het prima dat je werkgever je
                  planning maakt, en je hebt geen behoefte aan administratieve
                  rompslomp. Het CAO-plafond accepteer je als de prijs van
                  stabiliteit. Voor jou is vast dienstverband de logische keuze.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De vrijheidszoeker.</strong> Je bent ondernemend, je
                  hebt een netwerk, en je wilt maximale controle over je werk en
                  inkomen. Je vindt het niet erg om je eigen administratie te
                  doen (of uit te besteden), je hebt je verzekeringen op orde, en
                  je begrijpt de risico&apos;s van het zzp-schap volledig. Let wel:
                  het DBA-risico maakt deze optie per 2025 risicovoller dan
                  voorheen. Zorg dat je contractrelaties juridisch waterdicht
                  zijn.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De hybride professional.</strong> Je wilt meer verdienen
                  dan in loondienst, maar je hebt geen zin in de risico&apos;s en
                  lasten van het zzp-schap. Je waardeert keuzevrijheid in
                  opdrachten, maar je wilt niet zelf aan acquisitie doen. Je wilt
                  je focussen op je vak, niet op administratie. Het CaaS-model
                  via LYFD is voor dit profiel ontworpen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De realiteit is dat veel monteurs in hun loopbaan meerdere
                  modellen uitproberen. Je begint in vast dienstverband, maakt de
                  overstap naar zzp voor het hogere tarief, en ontdekt na een
                  paar jaar dat de administratieve lasten en risico&apos;s zwaarder
                  wegen dan verwacht. Of je werkt al jaren als zzp&apos;er en de
                  veranderde DBA-handhaving dwingt je om je model te heroverwegen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Wat je ook kiest: zorg dat je de volledige berekening maakt.
                  Niet alleen het bruto tarief, maar ook de kosten, risico&apos;s
                  en verborgen lasten. En als je twijfelt,{" "}
                  <a
                    href="/kennisbank/liftmonteur-gids/salaris-liftmonteur/"
                    className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300"
                  >
                    lees ons artikel over salarissen en tarieven
                  </a>{" "}
                  voor een gedetailleerde vergelijking van de cijfers.
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
                  actieve monteurs.{" "}
                  <span className="text-[#A0A0A0] text-xs">
                    (Bron: LYFD, marktervaring 5 jaar)
                  </span>{" "}
                  In die schaarse markt heb je als monteur de luxe om te kiezen.
                  Gebruik die positie, en maak een weloverwogen keuze.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Benieuwd of CaaS bij jou past?
              </p>
              <p className="mt-2 text-sm text-[#404040] leading-relaxed max-w-[50ch]">
                We bespreken graag de mogelijkheden. Geen verplichtingen,
                wel een eerlijk gesprek.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors duration-300"
              >
                Neem contact op
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
