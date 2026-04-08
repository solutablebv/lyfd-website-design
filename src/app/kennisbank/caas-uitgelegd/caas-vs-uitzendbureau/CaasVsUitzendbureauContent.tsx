"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "op-het-eerste-gezicht", label: "Op het eerste gezicht" },
  { id: "vergelijkingstabel", label: "Vergelijkingstabel" },
  { id: "branchekennis", label: "Branchekennis" },
  { id: "kostenvergelijking", label: "Kostenvergelijking" },
  { id: "wanneer-uitzendbureau", label: "Wanneer uitzendbureau?" },
];

export function CaasVsUitzendbureauContent() {
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
                    <strong className="text-[#1B1D1E]">Capacity as a Service (CaaS)</strong> is
                    een capaciteitsmodel waarbij een liftbedrijf gegarandeerde monteurscapaciteit
                    inkoopt bij een gespecialiseerde partner, inclusief certificeringen, gereedschap,
                    vervangingsgarantie en volledige DBA-compliance. In tegenstelling tot
                    uitzending, waarbij een individu wordt uitgeleend, levert CaaS een
                    resultaat: gegarandeerde capaciteit op het juiste kwaliteitsniveau.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p>
                  Wanneer een liftbedrijf extra capaciteit nodig heeft, zijn er twee
                  modellen die op het eerste gezicht sterk op elkaar lijken: een
                  uitzendbureau inschakelen of Capacity as a Service afnemen. In beide
                  gevallen komt er een monteur op de werkvloer die niet bij jou in dienst
                  is. In beide gevallen betaal je per uur of per inzet. En in beide gevallen
                  los je een capaciteitsprobleem op.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar daar houdt de vergelijking op. De verschillen tussen uitzending en
                  CaaS zijn fundamenteel. Ze zitten in het model, in de kwaliteit, in de
                  garanties, en uiteindelijk in de resultaten. In dit artikel leggen we die
                  verschillen eerlijk naast elkaar, inclusief de situaties waarin een
                  uitzendbureau de betere keuze is.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="op-het-eerste-gezicht">Op het eerste gezicht hetzelfde, fundamenteel anders</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>Laten we beginnen bij de basis. Wat is uitzending precies, en wat is CaaS?</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Uitzending</strong> is een arbeidsrelatie in driehoeksvorm. Het
                  uitzendbureau is de juridische werkgever, de uitzendkracht verricht het
                  werk, en het inlenende bedrijf (jij) geeft leiding. De uitzendkracht
                  werkt onder jouw gezag, op jouw locatie, met jouw instructies. Het
                  uitzendbureau handelt de administratie af (loon, belasting, verzekeringen)
                  en factureert jou een uurtarief met een marge.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>CaaS (Capacity as a Service)</strong> is een capaciteitsrelatie.
                  Je koopt bij LYFD geen persoon, maar capaciteit. LYFD bepaalt welke
                  monteur wordt ingezet en draagt de verantwoordelijkheid voor de
                  kwalificatie, certificering en uitrusting van die monteur. De monteur
                  werkt onder regie van LYFD, niet onder jouw gezag. En als de monteur
                  uitvalt, regelt LYFD vervanging. Dat is geen service erbij, dat is de
                  kern van het model.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het verschil is niet cosmetisch. Het raakt aan de kern van wat je koopt.
                  Bij uitzending koop je arbeidsuren. Bij CaaS koop je een resultaat:
                  gegarandeerde capaciteit op het juiste kwaliteitsniveau.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="vergelijkingstabel">De uitgebreide vergelijking</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Onderstaande tabel zet de twee modellen naast elkaar op de criteria die er
                  voor liftbedrijven toe doen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1B1D1E]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1B1D1E]">Criterium</th>
                        <th className="text-left py-3 pr-4 font-semibold text-[#1B1D1E]">Uitzendbureau</th>
                        <th className="text-left py-3 font-semibold text-[#1B1D1E]">CaaS (LYFD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#333333]">
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Wat je koopt</td><td className="py-3 pr-4">Arbeidsuren van een individu</td><td className="py-3">Gegarandeerde capaciteit</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Branchekennis</td><td className="py-3 pr-4">Zelden tot nooit</td><td className="py-3">Standaard (liftindustrie-specifiek)</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Certificeringen (NEN 3140, VCA)</td><td className="py-3 pr-4">Vaak niet aanwezig</td><td className="py-3">Standaard inbegrepen</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">OEM-kennis</td><td className="py-3 pr-4">Niet beschikbaar</td><td className="py-3">Gematcht op installatietype</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Vervangingsgarantie</td><td className="py-3 pr-4">Niet standaard</td><td className="py-3">Kern van het model</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">DBA-compliance</td><td className="py-3 pr-4">Geregeld (uitzendconstructie)</td><td className="py-3">Geregeld (B2B-constructie)</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Gereedschap en PBM&apos;s</td><td className="py-3 pr-4">Van het inlenende bedrijf</td><td className="py-3">Van LYFD (volledig uitgerust)</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Inwerkperiode</td><td className="py-3 pr-4">3 - 5 dagen (geen branchekennis)</td><td className="py-3">Minimaal (monteur kent de branche)</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Gezagsverhouding</td><td className="py-3 pr-4">Onder jouw gezag</td><td className="py-3">Onder regie LYFD</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Op-/afschalen</td><td className="py-3 pr-4">Beperkt (afhankelijk van aanbod)</td><td className="py-3">Flexibel (contractueel vastgelegd)</td></tr>
                      <tr className="border-b border-[#DDDDDD]"><td className="py-3 pr-4 font-medium">Kwaliteitscontrole</td><td className="py-3 pr-4">Jouw verantwoordelijkheid</td><td className="py-3">LYFD bewaakt kwaliteit</td></tr>
                      <tr><td className="py-3 pr-4 font-medium">Administratieve last</td><td className="py-3 pr-4">Tijdregistratie, inlenersbeloning</td><td className="py-3">Eenvoudige maandfactuur</td></tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De tabel maakt het patroon zichtbaar: op vrijwel elk criterium dat er toe
                  doet voor een liftbedrijf, levert CaaS meer waarde dan uitzending. Niet
                  omdat uitzending slecht is, maar omdat het niet is ontworpen voor
                  specialistisch werk in een niche-industrie.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="branchekennis">Branchekennis: het verschil dat je voelt op dag 1</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Dit is misschien wel het meest onderschatte verschil. Een uitzendkracht
                  die binnenkomt zonder liftbranche-ervaring moet van nul beginnen. Hij kent
                  de normen niet, de installaties niet, de werkwijze niet. Zelfs een technisch
                  bekwame monteur uit een andere sector heeft dagen nodig om productief te
                  worden in de liftbranche.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De liftindustrie is een wereld apart. NEN 3140 voor elektrische veiligheid.
                  VCA voor arbeidsveiligheid. OEM-specifieke certificeringen per fabrikant.
                  Kennis van de EN 81-normreeks. Begrip van het verschil tussen preventief
                  onderhoud, correctief onderhoud en wettelijke inspecties. Dat is niet iets
                  wat je in een ochtend leert.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Een CaaS-monteur van LYFD kent dit landschap. Hij heeft ervaring in de
                  liftbranche, beschikt over de juiste certificeringen, en wordt gematcht
                  op het type installatie waar hij op wordt ingezet. Dat scheelt inwerkdagen,
                  vermindert fouten, en verhoogt de productiviteit vanaf dag 1.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In een branche waar een fout niet alleen geld kost maar ook
                  veiligheidsrisico&apos;s met zich meebrengt, is branchekennis geen luxe. Het
                  is een harde eis.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="kostenvergelijking">Kostenvergelijking: wat betaal je werkelijk?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Illustratief voorbeeld. De onderstaande berekening is indicatief en
                  bedoeld om de orde van grootte te illustreren. Werkelijke cijfers
                  varieren per bedrijf, contractvorm en regio.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>Neem een inzet van een monteur voor 40 uur per week, 4 weken lang. Dus 160 uur totaal.</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Scenario A: Uitzendbureau</strong></p>
                <ul>
                  <li>Uurtarief uitzendkracht (technisch profiel): <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 38 - 45</span> per uur</li>
                  <li>Directe kosten 160 uur: EUR 6.080 - 7.200</li>
                  <li>Inwerkperiode: 3 - 5 dagen (24 - 40 uur) aan verminderde productiviteit</li>
                  <li>Gereedschap en PBM&apos;s: van jou (eigen kosten)</li>
                  <li>Certificeringskosten (NEN 3140, VCA): circa EUR 1.500 - 2.500 als deze ontbreken</li>
                  <li>Kwaliteitskosten (fouten, herstelwerk): variabel maar reeel</li>
                  <li>Geen vervangingsgarantie bij uitval</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Effectieve kosten scenario A:</strong> <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 8.000 - 10.000+</span> (inclusief verborgen kosten)</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Scenario B: CaaS via LYFD</strong></p>
                <ul>
                  <li>Vanaf-tarief: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 64,99</span> per uur (Bron: LYFD Pricing 2026)</li>
                  <li>Directe kosten 160 uur: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 10.398</span></li>
                  <li>Inwerkperiode: minimaal (branchekennis aanwezig)</li>
                  <li>Gereedschap en PBM&apos;s: inbegrepen</li>
                  <li>Certificeringen: inbegrepen</li>
                  <li>Vervangingsgarantie: inbegrepen</li>
                  <li>Kwaliteitsbewaking: door LYFD</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Effectieve kosten scenario B:</strong> <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 10.398</span> (alle kosten inbegrepen)</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Op papier lijkt het uitzendtarief goedkoper. In de praktijk zijn de
                  effectieve kosten vergelijkbaar of hoger, terwijl CaaS meer levert op
                  het gebied van kwaliteit, zekerheid en gemak. En dan hebben we het nog
                  niet over de reputatiekosten als een onervaren uitzendkracht fouten maakt
                  bij een klant.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="wanneer-uitzendbureau">Wanneer is een uitzendbureau de betere keuze?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Eerlijkheid gebiedt te zeggen: er zijn situaties waarin een uitzendbureau
                  de betere keuze is. CaaS is niet voor elke situatie de optimale oplossing.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Een uitzendbureau kan geschikter zijn wanneer:</strong></p>
                <ul>
                  <li>Je generieke technische ondersteuning nodig hebt die geen liftspecifieke kennis vereist (bijvoorbeeld bij nieuwbouwondersteuning, logistiek, of assemblagewerk)</li>
                  <li>Je op zoek bent naar een potentiele vaste medewerker en uitzending wilt gebruiken als uitgebreide proefperiode (temp-to-perm)</li>
                  <li>Je heel korte inzet nodig hebt (minder dan een week) voor eenvoudig werk zonder certificeringseisen</li>
                  <li>Je in een regio opereert waar CaaS nog niet beschikbaar is</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>CaaS is de betere keuze wanneer:</strong></p>
                <ul>
                  <li>Je gecertificeerde liftmonteurs nodig hebt (NEN 3140, VCA, OEM)</li>
                  <li>Je beschikbaarheids- en vervangingsgarantie wilt</li>
                  <li>Je structurele capaciteitsbehoefte hebt (meer dan twee weken)</li>
                  <li>Je de administratieve last wilt minimaliseren</li>
                  <li>Kwaliteit en veiligheid niet onderhandelbaar zijn</li>
                  <li>Je DBA-compliant wilt werken zonder gedoe</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het is geen zwart-wit keuze. Maar voor het overgrote deel van de
                  capaciteitsbehoefte in de liftbranche, namelijk gecertificeerde monteurs
                  voor service, onderhoud en modernisering, is CaaS het model dat het
                  meeste waarde levert. Niet omdat het nieuwer is, maar omdat het is
                  ontworpen voor precies dit probleem.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Benieuwd welk model het beste past bij jouw situatie?{" "}
                  <a href="/kennisbank/caas-uitgelegd/welk-caas-model/" className="text-[#4928FD] underline decoration-[#4928FD]/30 underline-offset-4 hover:decoration-[#4928FD] transition-colors duration-300">
                    Lees ons artikel over de vier CaaS-modellen
                  </a>{" "}
                  of plan direct een gesprek.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 rounded-2xl bg-[#F7F7F7] border border-[#DDDDDD] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1B1D1E] tracking-tight">
                Wil je weten wat het verschil betekent voor jouw bedrijf?
              </p>
              <p className="mt-2 text-sm text-[#333333] leading-relaxed max-w-[50ch]">
                Plan een gesprek. Wij rekenen beide scenario&apos;s voor je door.
              </p>
              <a href="/aanvraag/" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1B1D1E] hover:text-[#1B1D1E] transition-colors duration-300">
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
