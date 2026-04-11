"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "wat-wordt-gecontroleerd", label: "Wat wordt gecontroleerd?" },
  { id: "complete-checklist", label: "De complete checklist" },
  { id: "veelgemaakte-fouten", label: "Veelgemaakte fouten" },
  { id: "tijd-rekenen", label: "Hoeveel tijd rekenen?" },
  { id: "uitbesteden", label: "Wanneer uitbesteden?" },
];

export function LiftkeuringVoorbereidenContent() {
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
                    <strong className="text-[#1B1D1E]">Een liftkeuring</strong> is een
                    wettelijk verplichte inspectie door een Aangewezen Keurings Instelling
                    (AKI) waarbij de veiligheid en conformiteit van een liftinstallatie worden
                    beoordeeld. De keuring vindt doorgaans elke 18 maanden tot 2 jaar plaats
                    en is vereist op basis van het Warenwetbesluit Liften.{" "}
                    <span className="text-[#888888] text-xs">(Bron: Warenwetbesluit Liften)</span>
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Een liftkeuring is geen formaliteit. Het is het moment waarop een
                  onafhankelijke inspecteur beoordeelt of jouw installatie veilig en conform
                  de geldende normen is. Een afkeuring betekent stilstand, herstelkosten en
                  vertraging. Een goede voorbereiding voorkomt dat.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel doorlopen we precies wat er bij een keuring gecontroleerd
                  wordt, geven we een complete checklist voor de voorbereiding, en bespreken
                  we de meest voorkomende fouten die tot afkeuring leiden.
                </p>
              </ScrollReveal>

              {/* H2: Wat wordt er gecontroleerd? */}
              <ScrollReveal>
                <h2 id="wat-wordt-gecontroleerd">Wat wordt er gecontroleerd bij een liftkeuring?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De inspecteur beoordeelt de gehele liftinstallatie op veiligheid en
                  conformiteit. De keuring omvat zowel visuele inspectie als functionele
                  testen. De hoofdgebieden zijn:
                </p>
                <ul>
                  <li>Documentatie en administratie</li>
                  <li>Schacht, put en bovenkant kooi</li>
                  <li>Machineruimte of MRL-besturing</li>
                  <li>Deur- en sluitwerk (kooi- en schachtdeuren)</li>
                  <li>Veiligheidscomponenten (vangrem, snelheidsbegrenzers, buffers)</li>
                  <li>Noodcommunicatie (spreek-luister verbinding)</li>
                  <li>Elektrische installatie</li>
                  <li>Proefdraaien en noodprocedures</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De inspecteur werkt met een gestandaardiseerde checklist en rapporteert
                  bevindingen in categorieen: goedgekeurd, opmerking (verhelpen voor
                  volgende keuring), of afkeuring (direct verhelpen, lift buiten bedrijf).
                </p>
              </ScrollReveal>

              {/* H2: De complete checklist */}
              <ScrollReveal>
                <h2 id="complete-checklist">De complete checklist voor keuringvoorbereiding</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Gebruik deze checklist om je installatie systematisch keuringklaar te maken:
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>1. Documentatie op orde.</strong> Zorg dat het liftlogboek compleet
                  en actueel is. Alle uitgevoerde onderhoudswerkzaamheden, reparaties en
                  vervangingen moeten zijn geregistreerd. Daarnaast moeten de volgende
                  documenten beschikbaar zijn: het certificaat van de vorige keuring, de
                  oorspronkelijke EG-verklaring van overeenstemming, technische tekeningen
                  van de installatie, en certificaten van veiligheidscomponenten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>2. Visuele inspectie schacht.</strong> Controleer de schacht op
                  verontreinigingen, losliggende kabels, lekkage en obstakels. De put moet
                  schoon en droog zijn. De verlichting in de schacht moet functioneren. Check
                  de geleiderails op slijtage en de bevestigingen op stevigheid.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>3. Machineruimte of MRL-besturing.</strong> Bij liften met
                  machineruimte: controleer de ruimte op netheid, ventilatie en temperatuur.
                  De aandrijving, besturing en noodremvoorziening moeten bereikbaar en in
                  goede staat zijn. Bij MRL-liften (machine room-less): controleer de
                  besturingskast en de toegankelijkheid voor noodbediening.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>4. Deur- en sluitwerk.</strong> Test alle kooi- en schachtdeuren.
                  Controleer of de vergrendelingen correct functioneren, de deuren soepel
                  openen en sluiten, en de{" "}
                  <a
                    href="/kennisbank/lift-werkzaamheden/sensorlijsten-installeren/"
                    className="text-[#4928FD] underline decoration-[#4928FD]/30"
                  >
                    sensorlijsten
                  </a>{" "}
                  correct reageren. Deurvergrendelingen zijn een van de meest voorkomende
                  redenen voor afkeuring.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>5. Veiligheidscomponenten.</strong> Test de vangrem
                  (valbeveiliging), de snelheidsbegrenzers en de buffers. Controleer of de
                  snelheidsbegrenzer is voorzien van een geldig keuringscertificaat (deze
                  heeft een apart keuringsinterval). Test de noodstop en controleer de
                  werking van de overbelastbeveiliging.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>6. Noodcommunicatie.</strong> Test de{" "}
                  <a
                    href="/kennisbank/lift-werkzaamheden/spreek-luister-verbindingen/"
                    className="text-[#4928FD] underline decoration-[#4928FD]/30"
                  >
                    spreek-luister verbinding
                  </a>{" "}
                  op werking: spraakkwaliteit, verbinding met de alarmcentrale, batterijback-up
                  en automatische testcyclus. Zorg dat het abonnement bij de alarmcentrale
                  actief is.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>7. Proefdraaien en noodprocedures.</strong> Voer een volledige
                  proefrit uit op alle verdiepingen. Test de noodbediening (handmatig
                  verplaatsen van de kooi bij stroomuitval). Controleer de werking van de
                  noodverlichting in de kooi. Test de inspectiebesturing op de kooi.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>8. Elektrische controles (NEN 3140).</strong> Controleer de
                  aarding, de isolatieweerstand en de werking van de aardlekbeveiliging.
                  Zorg dat alle elektrische aansluitingen in goede staat zijn en dat de
                  markering en etikettering van kabels en componenten klopt.
                </p>
              </ScrollReveal>

              {/* H2: Veelgemaakte fouten */}
              <ScrollReveal>
                <h2 id="veelgemaakte-fouten">Veelgemaakte fouten bij keuringvoorbereiding</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Op basis van praktijkervaring zijn dit de meest voorkomende redenen voor
                  afkeuring of opmerkingen bij een liftkeuring:
                </p>
                <ul>
                  <li>
                    <strong>Onvolledig logboek.</strong> Het liftlogboek is niet bijgewerkt
                    of ontbreekt geheel. De inspecteur kan niet verifieren welk onderhoud is
                    uitgevoerd.
                  </li>
                  <li>
                    <strong>Verlopen snelheidsbegrenzercertificaat.</strong> De
                    snelheidsbegrenzer heeft een apart keuringsinterval (doorgaans elke 5
                    jaar). Dit wordt regelmatig vergeten.
                  </li>
                  <li>
                    <strong>Niet-werkende noodcommunicatie.</strong> De spreek-luister
                    verbinding werkt niet of de verbinding met de alarmcentrale is verbroken.
                  </li>
                  <li>
                    <strong>Vuile of natte put.</strong> De liftput is verontreinigd met
                    water, vuil of afval. Dit is een direct veiligheidsprobleem.
                  </li>
                  <li>
                    <strong>Deurvergrendelingen.</strong> Schachtdeurvergrendelingen die niet
                    correct functioneren of versleten zijn. Dit is de meest voorkomende
                    afkeuringsreden.
                  </li>
                  <li>
                    <strong>Ontbrekende markering.</strong> Hoofdschakelaar niet gemarkeerd,
                    stophoogte niet aangegeven, of ontbrekende veiligheidssignalering.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De meeste van deze punten zijn relatief eenvoudig te verhelpen, mits je er
                  op tijd bij bent. Een voorinspectie twee tot vier weken voor de geplande
                  keuring geeft voldoende tijd om eventuele gebreken te herstellen.
                  (Bron: LYFD, marktervaring)
                </p>
              </ScrollReveal>

              {/* H2: Hoeveel tijd rekenen? */}
              <ScrollReveal>
                <h2 id="tijd-rekenen">Hoeveel tijd rekenen voor voorbereiding?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De benodigde voorbereidingstijd hangt af van de staat van de installatie en
                  de kwaliteit van het reguliere onderhoud. Als richtlijn:
                </p>
                <ul>
                  <li>
                    <strong>Goed onderhouden installatie:</strong> 2 tot 4 uur voor een
                    voorinspectie en het op orde brengen van documentatie.
                  </li>
                  <li>
                    <strong>Installatie met achterstallig onderhoud:</strong> 1 tot 2 dagen,
                    afhankelijk van de omvang van de gebreken. Denk aan vervanging van
                    slijtdelen, herstel van deurvergrendelingen en het bijwerken van het
                    logboek.
                  </li>
                  <li>
                    <strong>Grote portefeuille:</strong> Plan de voorinspectie minimaal 4
                    weken voor de keuring in. Zo heb je voldoende tijd om materialen te
                    bestellen en reparaties in te plannen.
                  </li>
                </ul>
              </ScrollReveal>

              {/* H2: Wanneer uitbesteden? */}
              <ScrollReveal>
                <h2 id="uitbesteden">Wanneer uitbesteden?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De voorbereiding van liftkeuringen is tijdrovend, zeker bij grotere
                  portefeuilles. Het is werk dat gepland moet worden naast het reguliere
                  onderhoud en storingsafhandeling. Voor liftbedrijven die moeite hebben om
                  al hun keuringen op tijd voor te bereiden, is uitbesteden een reele optie.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD kan gecertificeerde monteurs inzetten die de voorinspectie uitvoeren,
                  gebreken verhelpen en de installatie keuringklaar opleveren. Dit ontlast je
                  eigen team en verkleint het risico op afkeuringen. Vooral in perioden
                  waarin meerdere keuringen samenvallen, kan extra capaciteit het verschil
                  maken.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Een goede keuringvoorbereiding begint niet de dag voor de keuring, maar
                  weken eerder. Wie structureel voorbereidt, voorkomt structureel
                  afkeuringen.
                </blockquote>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Hulp nodig bij het keuringklaar maken van je liftportefeuille?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                LYFD levert monteurs die je installaties voorinspecteren en keuringklaar opleveren. Plan een gesprek.
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
