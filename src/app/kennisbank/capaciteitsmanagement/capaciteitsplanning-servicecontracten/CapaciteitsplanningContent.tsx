"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "groeiparadox", label: "Het groeiparadox" },
  { id: "signalen-druk", label: "Signalen van druk" },
  { id: "drie-strategieen", label: "Drie strategieen" },
  { id: "hybride-model", label: "Het hybride model" },
  { id: "capaciteitsplan", label: "Plan in 5 stappen" },
];

export function CapaciteitsplanningContent() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              <ScrollReveal>
                <div className="relative bg-[#F7F7F7] rounded-lg border-l-2 border-[#4928FD] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#DDDDDD] text-[#888888] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#333333] m-0">
                    <strong className="text-[#1B1D1E]">Capaciteitsplanning in de liftindustrie</strong> is
                    het strategisch afstemmen van beschikbare monteurscapaciteit op de
                    groeiende vraag vanuit servicecontracten, onderhoudsverplichtingen,
                    moderniseringsprojecten en storingsdiensten. Bij een portefeuille van
                    circa 105.000 liftinstallaties in Nederland en slechts 1.600 tot 1.800
                    actieve monteurs is effectieve capaciteitsplanning het verschil tussen
                    winstgevende groei en onbeheersbare werkdruk.{" "}
                    <span className="text-[#888888] text-xs">(Bron: LYFD, marktervaring 5 jaar)</span>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p>
                  Je bedrijf groeit. Nieuwe servicecontracten komen binnen, bestaande klanten
                  breiden uit, en de commerciele afdeling heeft mooie vooruitzichten voor het
                  komende kwartaal. Goed nieuws, zou je zeggen. Maar op de werkvloer voelt
                  het anders. Je planners lopen vast, je monteurs draaien overuren, en de
                  kwaliteit van je dienstverlening staat onder druk.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is het groeiparadox waarmee veel liftbedrijven worstelen: meer
                  contracten zouden moeten leiden tot meer omzet en meer marge. Maar als je
                  team niet meegroeit, is het tegenovergestelde waar. Je marge daalt, je
                  klanten worden ontevreden, en je beste mensen vertrekken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel bespreken we hoe je capaciteitsplanning strategisch kunt
                  aanpakken bij een groeiende servicecontractportefeuille. Niet met een
                  spreadsheet en een dosis hoop, maar met een doordachte aanpak die je
                  bedrijf laat groeien zonder de controle te verliezen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="groeiparadox">Het groeiparadox: meer contracten, minder marge</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het mechanisme is simpel maar verraderlijk. Een liftbedrijf wint een nieuw
                  servicecontract. Dat contract genereert omzet, maar het vraagt ook
                  capaciteit: monteurs die routes rijden, onderhoud plegen, storingen
                  oplossen. Als die capaciteit er niet is, zijn er drie opties: overwerk,
                  kwaliteit inleveren, of het contract weigeren.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Overwerk</strong> is de meest voorkomende reactie. Het is ook de
                  duurste. Niet alleen vanwege de hogere uurtarieven, maar vooral vanwege
                  de gevolgen op langere termijn: hogere uitval, meer fouten, en toenemend
                  verloop. Een monteur die structureel 50 uur per week draait, is na een
                  jaar een vertrekrisico. En het vervangen van een ervaren monteur kost{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 25.000</span> tot{" "}
                  <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 40.000</span>. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Kwaliteit inleveren</strong> is de sluipmoordenaar. Je rijdt de
                  routes, maar minder grondig. Je schakelt minder ervaren mensen in. Je
                  slaat stappen over. De klant merkt het niet meteen, maar na een jaar wel.
                  En dan is het te laat: de concurrent staat op de stoep met een betere propositie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Contracten weigeren</strong> is het eerlijkst, maar ook het
                  pijnlijkst. Je laat omzet liggen die je nodig hebt om te groeien. En in
                  een concurrerende markt weet je: wat je laat liggen, pakt een ander op.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het groeiparadox ontstaat wanneer een liftbedrijf commercieel sneller
                  groeit dan operationeel. En in de huidige arbeidsmarkt, met een structureel
                  tekort aan gecertificeerde liftmonteurs, is dat geen uitzondering. Het is de norm.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="signalen-druk">Signalen dat je capaciteitsplanning onder druk staat</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het groeiparadox sluipt erin. Het begint niet met een crisis, maar met
                  kleine signalen die steeds luider worden. Herken je drie of meer van
                  onderstaande signalen? Dan staat je capaciteitsplanning onder druk.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <ul>
                  <li><strong>Structureel overwerk.</strong> Je monteurs draaien regelmatig meer dan 40 uur per week, niet incidenteel maar als vast patroon.</li>
                  <li><strong>Stijgend ziekteverzuim.</strong> Werkdruk leidt tot fysieke en mentale klachten. Als je verzuimpercentage boven de 5% ligt, is dat een serieus signaal.</li>
                  <li><strong>Achterstand in onderhoudsbeurten.</strong> Routes die niet gereden worden, beurten die worden uitgesteld, klanten die bellen waar hun monteur blijft.</li>
                  <li><strong>Langere reactietijden bij storingen.</strong> Als je SLA&apos;s voor storingsdienst structureel onder druk staan, is dat een capaciteitsprobleem.</li>
                  <li><strong>Commerciele kansen die je laat liggen.</strong> Tenders waar je niet op inschrijft, contracten die je niet durft aan te nemen, uitbreidingen die je uitstelt.</li>
                  <li><strong>Verloop onder ervaren monteurs.</strong> Als je beste mensen vertrekken, is dat bijna altijd een gevolg van werkdruk en gebrek aan perspectief.</li>
                  <li><strong>Planners die meer tijd besteden aan puzzelen dan aan plannen.</strong> Als het vullen van gaten de hoofdtaak wordt in plaats van het optimaliseren van routes en inzet.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Geen van deze signalen is op zichzelf een ramp. Maar samen vormen ze een
                  patroon dat wijst op een structureel capaciteitsprobleem. En structurele
                  problemen vragen om structurele oplossingen.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="drie-strategieen">Drie strategieen voor capaciteitsgroei</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Er zijn fundamenteel drie manieren om je capaciteit te laten meegroeien met
                  je contractenportefeuille. Elke strategie heeft voor- en nadelen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Strategie 1: Intern groeien (meer aannemen).</strong> De klassieke
                  aanpak: werf monteurs, neem ze in dienst, leid ze op. De voordelen zijn
                  duidelijk: loyaliteit, continuiteit, volledige controle. Maar de nadelen
                  zijn in de huidige markt even duidelijk.
                </p>
                <ul>
                  <li>Werving duurt gemiddeld drie tot zes maanden in de liftbranche</li>
                  <li>Wervingskosten liggen tussen <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 8.000</span> en <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 15.000</span> per hire (illustratief voorbeeld)</li>
                  <li>Inwerkperiode van drie tot zes maanden</li>
                  <li>Vaste loonkosten, ook in dalperiodes</li>
                  <li>Het aanbod van beschikbare monteurs is structureel kleiner dan de vraag</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Strategie 2: Extern inhuren (zzp of uitzendkracht).</strong> Snel,
                  flexibel, geen vaste verplichtingen. Maar met bekende nadelen: geen
                  beschikbaarheidsgarantie, wisselende kwaliteit, DBA-risico bij zzp-inzet,
                  en geen branchekennis bij uitzendbureaus. Lees meer in ons artikel over{" "}
                  <a href="/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner/" className="text-[#4928FD] underline decoration-[#4928FD]/30 underline-offset-4 hover:decoration-[#4928FD] transition-colors duration-300">
                    zzp versus capaciteitspartner
                  </a>.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Strategie 3: Hybride (eigen kern plus flexibele schil).</strong> Dit
                  is het model dat in de praktijk het beste werkt voor groeiende
                  liftbedrijven. Je houdt een vaste kern van eigen monteurs voor je
                  basiskapaciteit en vult pieken en groei op met een capaciteitspartner. Het
                  combineert de voordelen van beide modellen: stabiliteit en loyaliteit van
                  je eigen team, flexibiliteit en garantie van CaaS.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="hybride-model">Het hybride model: eigen team + CaaS</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het hybride model is geen compromis. Het is een bewuste keuze voor het
                  beste van twee werelden. Laten we het concreet maken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Je vaste kern</strong> bestaat uit monteurs in dienst. Zij vormen
                  de ruggengraat van je operatie. Ze kennen je klanten, je processen, je
                  cultuur. Ze rijden de vaste routes, doen de complexe installaties, en zijn
                  het gezicht van je bedrijf. Richt je vaste kern in op je basiskapaciteit:
                  het minimum dat je het hele jaar door nodig hebt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Je flexibele schil</strong> bestaat uit CaaS-capaciteit. Die zet je in voor drie scenario&apos;s:</p>
                <ul>
                  <li><strong>Pieken.</strong> Seizoensgebonden drukte (na de zomer, voor de jaarwisseling) die je niet het hele jaar door wilt bemensen.</li>
                  <li><strong>Groei.</strong> Nieuwe contracten die je aanneemt terwijl je eigen wervingsproces loopt. CaaS als brug naar interne groei.</li>
                  <li><strong>Projecten.</strong> Moderniseringsprojecten of nieuwbouwinstallaties die tijdelijk extra capaciteit vragen.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>De verhouding</strong> tussen vast en flex verschilt per bedrijf.
                  Als vuistregel hanteren veel liftbedrijven een verhouding van 70/30 tot
                  80/20 (vast/flex). Maar de optimale verhouding hangt af van je
                  seizoenspatroon, je groeiambitie en je risicoprofiel. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het belangrijkste voordeel van het hybride model is dat je vaste kosten
                  beheersbaar blijven terwijl je groeicapaciteit hebt. Je hoeft niet te
                  kiezen tussen een contract weigeren en een monteur aannemen. Je zet
                  CaaS-capaciteit in, bedient de klant, en beslist later of je het intern wilt oppakken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Bij LYFD is het CaaS-model specifiek ontworpen voor de liftindustrie.
                  Dat betekent: monteurs met de juiste certificeringen (NEN 3140, VCA),
                  branchekennis, en ervaring met OEM-systemen. Geen generieke uitzendkrachten,
                  maar vakmensen die direct inzetbaar zijn.{" "}
                  <a href="/liftmonteurs/detachering/" className="text-[#4928FD] underline decoration-[#4928FD]/30 underline-offset-4 hover:decoration-[#4928FD] transition-colors duration-300">
                    Lees meer over onze CaaS-modellen
                  </a>.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="capaciteitsplan">Een capaciteitsplan in 5 stappen</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Ongeacht welke strategie je kiest, een goed capaciteitsplan begint met
                  een helder overzicht van vraag en aanbod. Hieronder vijf stappen om je
                  capaciteitsplanning op orde te krijgen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 1: Breng je huidige capaciteit in kaart.</strong> Hoeveel
                  monteurs heb je in dienst? Hoeveel uur per week zijn ze productief
                  inzetbaar (minus vakanties, ziekteverzuim, opleidingsdagen, reistijd)?
                  De meeste liftbedrijven overschatten hun beschikbare capaciteit. Een
                  monteur op papier is niet hetzelfde als een monteur op de installatie.
                  Reken met een netto-inzetbaarheid van 75% tot 80% van de bruto-uren. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 2: Breng je capaciteitsvraag in kaart.</strong> Hoeveel
                  installaties heb je in portefeuille? Hoeveel beurten per jaar per
                  installatie? Hoeveel uren per beurt? Tel daar de projecturen bij op
                  (modernisering, nieuwbouw) en de storingsdienst. Nu heb je een beeld van
                  je totale capaciteitsvraag per maand en per kwartaal.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 3: Identificeer het gat.</strong> Het verschil tussen stap 1
                  en stap 2 is je capaciteitsgat. Breek het op per maand om
                  seizoenspatronen zichtbaar te maken. Is het gat structureel (elke maand
                  te weinig), cyclisch (pieken in bepaalde maanden), of groeiend (het gat
                  wordt groter naarmate je meer contracten wint)?
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 4: Kies je strategie per scenario.</strong> Structureel gat?
                  Overweeg intern groeien of een retainer-model bij LYFD. Cyclisch gat?
                  On-demand CaaS-capaciteit voor de pieken. Groeiend gat? Een combinatie
                  van werving en CaaS als brug. Het hybride model geeft je de flexibiliteit
                  om per scenario de juiste keuze te maken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Stap 5: Plan vooruit, niet achteruit.</strong> De meeste
                  liftbedrijven plannen reactief: er is een gat, en dan gaan ze zoeken naar
                  een oplossing. Draai het om. Plan je capaciteit per kwartaal vooruit. Weet
                  in januari al wat je in september nodig hebt. Reserveer CaaS-capaciteit
                  voordat de piek begint. Dat is het verschil tussen brandjes blussen en
                  strategisch groeien.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Capaciteitsplanning is geen eenmalige exercitie. Het is een doorlopend
                  proces dat meebeweegt met je bedrijf. Door het structureel te benaderen
                  in plaats van ad hoc, voorkom je dat groei een last wordt in plaats van een kans.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De liftbedrijven die de komende jaren het sterkst groeien, zijn niet per
                  se de bedrijven met de meeste monteurs in dienst. Het zijn de bedrijven die
                  hun capaciteit het slimst organiseren. En dat begint met een plan.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Wil je je capaciteitsplanning strategisch aanpakken?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                Wij helpen je het gat in kaart te brengen en een plan op maat te maken.
              </p>
              <a href="/liftmonteurs/beschikbaarheid/" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300">
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
