"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "vier-modellen", label: "De vier modellen" },
  { id: "on-demand", label: "On-Demand" },
  { id: "project", label: "Project" },
  { id: "retainer", label: "Retainer" },
  { id: "enterprise", label: "Enterprise" },
  { id: "keuzehulp", label: "Keuzehulp" },
];

export function WelkCaasModelContent() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              <ScrollReveal>
                <div className="relative bg-[#F8F8F8] rounded-lg border-l-2 border-[#2A2A2A] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#EBEBEB] text-[#6B6B6B] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#404040] m-0">
                    <strong className="text-[#1A1A1A]">CaaS-modellen</strong> zijn de
                    verschillende configuraties waarmee Capacity as a Service kan worden
                    afgenomen. LYFD biedt vier modellen: On-Demand (acute inzet), Project
                    (tijdelijke versterking), Retainer (structurele reservering) en Enterprise
                    (maatwerk voor grote organisaties). Elk model verschilt in commitment,
                    flexibiliteit, tarief en garanties, zodat elk type liftbedrijf een
                    passende oplossing vindt.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <p>
                  Je hebt besloten dat CaaS de juiste aanpak is voor je capaciteitsbehoefte.
                  Of je overweegt het serieus. Maar dan komt de volgende vraag: welk model
                  past bij jouw situatie? Want CaaS is geen one-size-fits-all oplossing. Het
                  is een raamwerk met vier configuraties, elk ontworpen voor een ander type
                  capaciteitsbehoefte.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  In dit artikel leggen we de vier CaaS-modellen van LYFD uitgebreid uit.
                  Voor elk model bespreken we: voor wie het bedoeld is, hoe het werkt, wat
                  het kost, en wanneer je het inzet. Aan het einde vind je een keuzehulp
                  waarmee je in een paar vragen bij het juiste model uitkomt.
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <h2 id="vier-modellen">De vier CaaS-modellen uitgelegd</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  LYFD biedt vier CaaS-modellen die samen het volledige spectrum aan
                  capaciteitsbehoeften dekken. Van een eenmalige inzet van twee dagen tot
                  een structurele samenwerking met tientallen monteurs per maand. De
                  modellen zijn niet rigide: ze zijn schaalbaar, combineerbaar en in overleg
                  aanpasbaar.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Model</th>
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Doel</th>
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Commitment</th>
                        <th className="text-left py-3 font-semibold text-[#1A1A1A]">Geschikt voor</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#404040]">
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4 font-medium">On-Demand</td><td className="py-3 pr-4">Acute behoefte</td><td className="py-3 pr-4">Geen minimum</td><td className="py-3">Pieken, uitval, ad hoc</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4 font-medium">Project</td><td className="py-3 pr-4">Tijdelijke versterking</td><td className="py-3 pr-4">Projectduur</td><td className="py-3">Modernisering, nieuwbouw</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4 font-medium">Retainer</td><td className="py-3 pr-4">Structurele reservering</td><td className="py-3 pr-4">Maandelijks</td><td className="py-3">Vaste servicecontracten</td></tr>
                      <tr><td className="py-3 pr-4 font-medium">Enterprise</td><td className="py-3 pr-4">Maatwerk groot volume</td><td className="py-3 pr-4">Jaarlijks</td><td className="py-3">Multi-locatie, complexe organisaties</td></tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>Laten we elk model in detail doorlopen.</p>
              </ScrollReveal>

              <ScrollReveal><h2 id="on-demand">On-Demand: voor acute capaciteitsbehoefte</h2></ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het On-Demand model is de meest flexibele variant. Je zet capaciteit in
                  wanneer je het nodig hebt, zonder vaste afspraken, zonder minimale afname,
                  zonder langlopend contract.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoe werkt het?</strong> Je neemt contact op met LYFD wanneer je
                  een monteur nodig hebt. LYFD matcht een geschikte monteur op basis van de
                  gevraagde certificeringen, ervaring en het installatiettype. De levertijd
                  is doorgaans 24 tot 48 uur voor standaard servicewerk. Je betaalt per
                  daadwerkelijke inzet.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Wanneer gebruik je On-Demand?</strong></p>
                <ul>
                  <li>Een monteur valt onverwacht uit (ziekte, verlof) en je hebt direct vervanging nodig</li>
                  <li>Je wint een korte klus of spoedopdracht die je eigen team niet kan opvangen</li>
                  <li>Seizoenspieken die je niet structureel wilt bemensen</li>
                  <li>Je wilt CaaS testen voordat je een groter commitment aangaat</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Voordelen:</strong> maximale flexibiliteit, geen vaste kosten,
                  lage instapdrempel. <strong>Aandachtspunten:</strong> het uurtarief is
                  hoger dan bij Retainer of Enterprise (je betaalt voor de flexibiliteit),
                  en de beschikbaarheid is afhankelijk van het actuele aanbod.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  On-Demand is ideaal als startpunt. Het geeft je de kans om het CaaS-model
                  te ervaren, de kwaliteit te beoordelen, en te ontdekken hoe het in je
                  operatie past. Veel liftbedrijven beginnen met On-Demand en schalen later
                  op naar Retainer.
                </p>
              </ScrollReveal>

              <ScrollReveal><h2 id="project">Project: voor tijdelijke versterking</h2></ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Project-model is ontworpen voor tijdgebonden inzet. Denk aan een
                  moderniseringsproject van drie maanden, een nieuwbouwinstallatie, of een
                  grote onderhoudsklus die tijdelijk extra handen vereist.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoe werkt het?</strong> Je definieert de scope en duur van het
                  project samen met LYFD. Op basis daarvan wordt een capaciteitsplan gemaakt:
                  hoeveel monteurs, welke certificeringen, welke periode. LYFD reserveert de
                  capaciteit voor de projectduur en levert een dedicated team dat voor de
                  looptijd van het project beschikbaar is.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Wanneer gebruik je Project?</strong></p>
                <ul>
                  <li>Moderniseringsprojecten met een duidelijke start- en einddatum</li>
                  <li>Nieuwbouwinstallaties waarbij je eigen team al bezet is</li>
                  <li>Grote onderhoudsrondes (bijvoorbeeld jaarlijkse inspecties van een compleet installatiepark)</li>
                  <li>Migratieprojecten van een leverancier naar een ander OEM-systeem</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Voordelen:</strong> gegarandeerde capaciteit voor de projectduur,
                  vooraf afgesproken scope en kosten, dedicated monteurs die het project
                  leren kennen. <strong>Aandachtspunten:</strong> vereist vooruitplanning
                  (minimaal twee weken aanlooptijd), en de commitment geldt voor de volledige
                  projectduur.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Project-model is bijzonder waardevol bij moderniseringswerk. Een
                  modernisering heeft vaak strakke deadlines (opdrachtgevers hanteren
                  opleverdata met vertragingsboetes). Met een dedicated CaaS-team verminder
                  je het risico op vertraging zonder je eigen serviceoperatie te belasten.
                </p>
              </ScrollReveal>

              <ScrollReveal><h2 id="retainer">Retainer: voor structurele reservering</h2></ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Retainer-model is het meest gekozen model voor liftbedrijven met een
                  constante capaciteitsbehoefte. Je reserveert een vast aantal uren per
                  maand, en LYFD garandeert dat die capaciteit beschikbaar is. Altijd.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoe werkt het?</strong> Op basis van je capaciteitsplan bepaal je
                  samen met LYFD hoeveel uren per maand je nodig hebt. Die uren worden
                  gereserveerd: je hebt er recht op, en LYFD plant er monteurs voor in. De
                  planning wordt maandelijks of wekelijks afgestemd. Ongebruikte uren
                  vervallen doorgaans, maar de afspraken hierover zijn bespreekbaar.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Wanneer gebruik je Retainer?</strong></p>
                <ul>
                  <li>Je servicecontractenportefeuille groeit sneller dan je eigen team</li>
                  <li>Je wilt vaste routes permanent laten rijden door CaaS-monteurs</li>
                  <li>Je hebt een hybride model (eigen team plus flexibele schil) en CaaS is je structurele schil</li>
                  <li>Je wilt de zekerheid van vaste capaciteit met de flexibiliteit om maandelijks bij te sturen</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Voordelen:</strong> gegarandeerde beschikbaarheid, lager uurtarief
                  dan On-Demand (volumekorting), vaste monteurs die jouw klanten en
                  installaties leren kennen, voorspelbare maandelijkse kosten.{" "}
                  <strong>Aandachtspunten:</strong> minimale maandelijkse afname, en je
                  betaalt de reservering ook als je minder inzet dan gepland.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Retainer-model werkt het best voor liftbedrijven die hun flexibele
                  schil strategisch willen inrichten. Door een vast aantal CaaS-uren per
                  maand te reserveren, kun je nieuwe servicecontracten aannemen in de
                  wetenschap dat de capaciteit er is. En als je eigen wervingsproces loopt,
                  fungeert de Retainer als brug naar interne groei.
                </p>
              </ScrollReveal>

              <ScrollReveal><h2 id="enterprise">Enterprise: voor grote liftbedrijven</h2></ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het Enterprise-model is voor liftbedrijven met een complexe,
                  grootschalige capaciteitsbehoefte. Denk aan organisaties met meerdere
                  vestigingen, honderden installaties, en een combinatie van service,
                  onderhoud, modernisering en storingsdienst.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Hoe werkt het?</strong> Enterprise is volledig maatwerk. LYFD stelt
                  een dedicated accountteam samen dat fungeert als verlengstuk van je
                  operatie. Samen wordt een jaarlijks capaciteitsplan opgesteld, inclusief
                  seizoenscorrecties, projectreserveringen en escalatieprotocollen. De
                  samenwerking wordt beheerd via een vaste contactpersoon bij LYFD.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Wanneer gebruik je Enterprise?</strong></p>
                <ul>
                  <li>Je hebt meerdere vestigingen of regio&apos;s waar capaciteit nodig is</li>
                  <li>Je capaciteitsbehoefte omvat meer dan 500 uur per maand</li>
                  <li>Je wilt een strategische capaciteitspartner, niet alleen een leverancier</li>
                  <li>Je hebt behoefte aan op maat gemaakte rapportages, SLA&apos;s en escalatieprotocollen</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Voordelen:</strong> volledig maatwerk, strategisch partnerschap,
                  hoogste korting op uurtarieven, dedicated accountmanagement, SLA&apos;s op
                  maat. <strong>Aandachtspunten:</strong> langere opstarttijd (maatwerk
                  onboarding), jaarlijks commitment, en het is pas relevant bij significante
                  volumes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Enterprise is het model voor liftbedrijven die capaciteitsmanagement als
                  strategisch vraagstuk benaderen. Het is geen transactionele relatie (ik
                  heb een monteur nodig, kun je er een leveren?), maar een partnerschap
                  waarin LYFD meedenkt over de optimale inrichting van je capaciteit.
                </p>
              </ScrollReveal>

              <ScrollReveal><h2 id="keuzehulp">Keuzehulp: welk model past bij jouw situatie?</h2></ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Onderstaande tabel helpt je in een paar stappen bij het juiste model
                  uitkomen. Beantwoord de vragen voor jezelf en kijk welk profiel het
                  beste past.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Jouw situatie</th>
                        <th className="text-left py-3 font-semibold text-[#1A1A1A]">Aanbevolen model</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#404040]">
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik heb incidenteel een extra monteur nodig</td><td className="py-3 font-medium">On-Demand</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik heb een moderniseringsproject dat extra handen vereist</td><td className="py-3 font-medium">Project</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Mijn contractenportefeuille groeit en ik wil structurele capaciteit</td><td className="py-3 font-medium">Retainer</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik wil CaaS eerst testen voordat ik meer commitment geef</td><td className="py-3 font-medium">On-Demand (start)</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik heb seizoenspieken die ik flexibel wil opvangen</td><td className="py-3 font-medium">Retainer + On-Demand</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik zoek een langetermijnpartner voor capaciteitsmanagement</td><td className="py-3 font-medium">Retainer of Enterprise</td></tr>
                      <tr className="border-b border-[#EBEBEB]"><td className="py-3 pr-4">Ik heb meerdere vestigingen en complexe planning</td><td className="py-3 font-medium">Enterprise</td></tr>
                      <tr><td className="py-3 pr-4">Ik werf zelf maar heb een brug nodig tot mijn nieuwe monteur start</td><td className="py-3 font-medium">Project of On-Demand</td></tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Nog steeds twijfel?</strong> Dat is begrijpelijk. De meeste
                  liftbedrijven passen niet precies in een vakje, en dat hoeft ook niet.
                  De kracht van het CaaS-model is dat het meebeweegt met je bedrijf. Start
                  waar je comfortabel bent, en schaal op wanneer je situatie daarom vraagt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Drie praktische tips bij het kiezen:</strong></p>
                <ul>
                  <li><strong>Start klein, denk groot.</strong> Begin met On-Demand of een klein Project. Ervaar hoe CaaS werkt in je operatie. Schaal op wanneer je het vertrouwen hebt.</li>
                  <li><strong>Denk in scenario&apos;s, niet in maanden.</strong> Wat is je capaciteitsbehoefte in de rustigste maand? En in de drukste? Het verschil bepaalt welk model het meest efficient is.</li>
                  <li><strong>Combineer modellen.</strong> Retainer voor je basis, On-Demand voor de pieken, Project voor de modernisering. De modellen sluiten elkaar niet uit.</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het juiste CaaS-model is niet het duurste of het goedkoopste. Het is het
                  model dat het beste aansluit bij hoe jouw bedrijf opereert en groeit. En
                  als dat verandert, verandert je model mee.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Wil je meer weten over hoe CaaS zich verhoudt tot andere oplossingen?
                  Lees ons artikel over{" "}
                  <a href="/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/" className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300">
                    het verschil tussen CaaS en een uitzendbureau
                  </a>{" "}
                  of bekijk onze{" "}
                  <a href="/diensten/capacity-as-a-service/" className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300">
                    CaaS-dienstenpagina
                  </a>.
                </p>
              </ScrollReveal>
            </div>

            <div className="mt-16 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Wil je weten welk CaaS-model bij jouw bedrijf past?
              </p>
              <p className="mt-2 text-sm text-[#404040] leading-relaxed max-w-[50ch]">
                Wij helpen je het juiste model kiezen op basis van jouw situatie.
              </p>
              <a href="/aanvraag/" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors duration-300">
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
