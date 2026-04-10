"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-zijn-sensorlijsten", label: "Wat zijn sensorlijsten?" },
  { id: "signalen-vervanging", label: "Signalen voor vervanging" },
  { id: "vervangingsproces", label: "Het vervangingsproces" },
  { id: "typen-sensorlijsten", label: "Typen sensorlijsten" },
  { id: "kosten-doorlooptijd", label: "Kosten en doorlooptijd" },
  { id: "zelf-doen-of-uitbesteden", label: "Zelf doen of uitbesteden?" },
];

export function SensorlijstenInstallerenContent() {
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
                    <strong className="text-[#1B1D1E]">Een sensorlijst</strong> (ook wel
                    lichtscherm of deurdetector genoemd) is een veiligheidscomponent die
                    voorkomt dat liftdeuren sluiten wanneer er een persoon of object in de
                    deuropening staat. De sensorlijst detecteert obstakels via infrarood,
                    mechanisch contact of 3D-sensortechnologie en stuurt de deuren aan om te
                    heropenen.{" "}
                    <span className="text-[#888888] text-xs">(Bron: LYFD, marktervaring)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Sensorlijsten zijn een van de meest belaste componenten in een liftinstallatie.
                  Ze worden bij elke deuropening en -sluiting geactiveerd, wat neerkomt op
                  tienduizenden cycli per jaar. Slijtage is onvermijdelijk, en een defecte
                  sensorlijst leidt direct tot problemen: deuren die niet goed sluiten,
                  onnodig heropenen, of in het slechtste geval onvoldoende bescherming bieden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel bespreken we hoe je een defecte sensorlijst herkent, welke typen
                  er beschikbaar zijn, en wat het vervangingsproces inhoudt.
                </p>
              </ScrollReveal>

              {/* H2: Wat zijn sensorlijsten en wat doen ze? */}
              <ScrollReveal>
                <h2 id="wat-zijn-sensorlijsten">Wat zijn sensorlijsten en wat doen ze?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De sensorlijst zit gemonteerd aan de rand van de liftdeur en vormt een
                  onzichtbare detectiezone in de deuropening. Zodra iets of iemand deze zone
                  doorbreekt, stuurt de sensor een signaal naar de deurbesturing om de deuren
                  te heropenen of het sluitproces te stoppen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is een direct veiligheidssysteem. Bij falen kan een deur tegen een
                  passagier sluiten, wat leidt tot letselrisico, klachten van gebouweigenaren
                  en mogelijke aansprakelijkheid. Een goed werkende sensorlijst is daarom geen
                  luxe, maar een vereiste.
                </p>
              </ScrollReveal>

              {/* H2: Signalen dat vervanging nodig is */}
              <ScrollReveal>
                <h2 id="signalen-vervanging">Signalen dat vervanging nodig is</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De volgende signalen wijzen erop dat een sensorlijst aan vervanging toe is:
                </p>
                <ul>
                  <li>
                    <strong>Vals alarm.</strong> De deuren heropenen zonder dat er iets in de
                    deuropening staat. Dit kan duiden op vervuilde lenzen of een verouderde
                    sensor die niet meer correct kalibreert.
                  </li>
                  <li>
                    <strong>Trage reactie.</strong> De deuren reageren merkbaar langzamer op
                    obstakels dan voorheen, of stoppen pas na fysiek contact.
                  </li>
                  <li>
                    <strong>Fysieke schade.</strong> Zichtbare scheuren, vervorming of
                    loskomen van de sensorlijst door aanrijding met karren, rolstoelen of
                    andere objecten.
                  </li>
                  <li>
                    <strong>Terugkerende storingen.</strong> Herhaalde deurgerelateerde
                    storingscodes in de liftbesturing die na reset steeds terugkomen.
                  </li>
                  <li>
                    <strong>Leeftijd.</strong> Sensorlijsten hebben een beperkte levensduur.
                    Na 8 tot 12 jaar intensief gebruik neemt de betrouwbaarheid af, ook zonder
                    zichtbare schade.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Het vervangingsproces stap voor stap */}
              <ScrollReveal>
                <h2 id="vervangingsproces">Het vervangingsproces stap voor stap</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het vervangen van een sensorlijst is een gestructureerd proces dat de
                  volgende stappen omvat:
                </p>
                <ul>
                  <li>
                    <strong>1. Diagnose.</strong> De monteur stelt vast welk type sensorlijst
                    is gemonteerd, controleert de bekabeling en bepaalt of alleen de sensor of
                    ook de beugels en aansluitingen vervangen moeten worden.
                  </li>
                  <li>
                    <strong>2. Lift buiten bedrijf stellen.</strong> De lift wordt veilig buiten
                    bedrijf gesteld conform de geldende veiligheidsprotocollen.
                  </li>
                  <li>
                    <strong>3. Demontage.</strong> De bestaande sensorlijst wordt verwijderd,
                    inclusief bevestigingsbeugels en bekabeling indien nodig.
                  </li>
                  <li>
                    <strong>4. Montage.</strong> De nieuwe sensorlijst wordt gemonteerd,
                    uitgelijnd en aangesloten op de deurbesturing.
                  </li>
                  <li>
                    <strong>5. Kalibratie en testen.</strong> De sensor wordt gekalibreerd
                    voor de specifieke deuropening. Er volgt een uitgebreide test: detectie
                    op verschillende hoogtes, reactiesnelheid en samenspel met de
                    deurbesturing.
                  </li>
                  <li>
                    <strong>6. Vrijgave.</strong> Na goedkeuring wordt de lift weer in bedrijf
                    gesteld en wordt de vervanging geregistreerd in het liftlogboek.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Welke typen sensorlijsten zijn er? */}
              <ScrollReveal>
                <h2 id="typen-sensorlijsten">Welke typen sensorlijsten zijn er?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er zijn drie gangbare typen sensorlijsten in de liftbranche:
                </p>
                <ul>
                  <li>
                    <strong>Mechanische sensorlijsten.</strong> De oudste technologie. Een
                    fysieke strip aan de deurrand detecteert contact met een obstakel. Nadeel:
                    er is fysiek contact nodig voordat de deur reageert, wat minder comfortabel
                    is en sneller slijt.
                  </li>
                  <li>
                    <strong>Infrarood (2D) sensorlijsten.</strong> Het meest gangbare type.
                    Een rij infraroodsensoren creert een lichtgordijn in de deuropening.
                    Contactloos, betrouwbaar en geschikt voor de meeste installaties.
                  </li>
                  <li>
                    <strong>3D-sensorlijsten.</strong> De nieuwste generatie. Deze sensoren
                    detecteren niet alleen in het vlak van de deuropening, maar ook in de
                    ruimte ervoor. Hierdoor wordt een obstakel eerder gedetecteerd en kan de
                    deur al vertragen voordat iemand de deuropening bereikt. Ideaal voor
                    drukke locaties en installaties met hoge gebruikersfrequentie.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De keuze voor een type hangt af van de installatie, het gebruiksprofiel en
                  het budget. Bij vervanging is het vaak verstandig om te upgraden naar
                  infrarood of 3D, zelfs als de oorspronkelijke installatie mechanisch was.
                </p>
              </ScrollReveal>

              {/* H2: Kosten en doorlooptijd */}
              <ScrollReveal>
                <h2 id="kosten-doorlooptijd">Kosten en doorlooptijd</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De kosten voor het vervangen van een sensorlijst varieren afhankelijk van het
                  type sensor, de fabrikant en de complexiteit van de installatie. Reken
                  indicatief op enkele honderden euro&apos;s per deur voor materiaal, plus de
                  arbeidskosten van 1 tot 3 uur per deur. Bij een lift met meerdere stops
                  lopen de kosten op, maar de investering weegt ruimschoots op tegen de kosten
                  van herhaalde storingen en de bijbehorende stilstandtijd. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De doorlooptijd van bestelling tot installatie bedraagt doorgaans 1 tot 3
                  weken, afhankelijk van de beschikbaarheid van het specifieke type. Bij
                  gangbare modellen is snellere levering mogelijk.
                </p>
              </ScrollReveal>

              {/* H2: Zelf doen of uitbesteden? */}
              <ScrollReveal>
                <h2 id="zelf-doen-of-uitbesteden">Zelf doen of uitbesteden?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het vervangen van sensorlijsten vereist kennis van de specifieke
                  deurbesturing, ervaring met kalibratie en de juiste certificeringen (NEN
                  3140, VCA). Voor liftbedrijven die dit werk regelmatig uitvoeren is het
                  doorgaans interne routine. Maar er zijn situaties waarin uitbesteden
                  verstandiger is:
                </p>
                <ul>
                  <li>Bij een groot vervangingsproject waarbij je eigen monteurs al volledig bezet zijn.</li>
                  <li>Bij installaties van fabrikanten waarvoor je intern geen specialistische kennis hebt.</li>
                  <li>Bij seizoenspieken of onverwachte capaciteitsuitval.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD kan in deze situaties gecertificeerde monteurs leveren die direct
                  inzetbaar zijn voor sensorlijstvervangingen. Dat voorkomt dat regulier
                  onderhoud in de knel komt doordat je eigen team wordt ingezet op
                  projectmatig werk.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Een sensorlijst die niet goed werkt, is meer dan een storing. Het is een
                  veiligheidsrisico. Wacht niet tot de keuring, maar vervang proactief.
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Sensorlijsten vervangen en te weinig capaciteit?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert gekwalificeerde monteurs voor sensorlijstvervanging en andere lift-werkzaamheden. Vraag vrijblijvend aan.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300"
              >
                Vraag capaciteit aan
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
