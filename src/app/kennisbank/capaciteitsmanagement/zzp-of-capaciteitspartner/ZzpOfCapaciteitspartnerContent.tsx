"use client";

import { ArticleSidebar } from "@/components/sections/kennisbank/ArticleSidebar";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const tocItems = [
  { id: "huidige-situatie", label: "Zzp als noodoplossing" },
  { id: "werkelijke-kosten", label: "Werkelijke kosten zzp" },
  { id: "capaciteitspartner", label: "Wat een partner anders doet" },
  { id: "wanneer-kiezen", label: "Wanneer zzp, wanneer CaaS?" },
  { id: "totale-kosten", label: "De totale kostenberekening" },
];

export function ZzpOfCapaciteitspartnerContent() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          <article className="w-full max-w-[720px]">
            <div className="prose-lyfd">
              {/* Definitie-blok (AEO-geoptimaliseerd) */}
              <ScrollReveal>
                <div className="relative bg-[#F8F8F8] rounded-lg border-l-2 border-[#2A2A2A] px-6 py-5 mb-10">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#EBEBEB] text-[#6B6B6B] mb-3">
                    Definitie
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-[#404040] m-0">
                    <strong className="text-[#1A1A1A]">Een capaciteitspartner</strong> is een
                    gespecialiseerde dienstverlener die structureel monteurscapaciteit levert
                    aan liftbedrijven, inclusief certificering, gereedschap, vervangingsgarantie
                    en DBA-compliance. In tegenstelling tot een zzp-monteur (die je individueel
                    inhuurt) koop je bij een capaciteitspartner gegarandeerde capaciteit in,
                    niet de arbeid van een specifiek persoon. LYFD is de eerste capaciteitspartner
                    die dit model als Capacity as a Service (CaaS) aanbiedt, specifiek voor
                    de liftindustrie.
                  </p>
                </div>
              </ScrollReveal>

              {/* Inleiding */}
              <ScrollReveal>
                <p>
                  Als directeur of operationeel manager van een liftbedrijf ken je het
                  scenario. Het is maandagochtend, de planning zit vol, en dan belt een
                  zzp-monteur af. Ziek. Of erger: hij heeft een beter betaalde klus
                  aangenomen bij een concurrent. Je planner begint te puzzelen, routes
                  worden omgegooid, klanten worden gebeld. En dit is niet de uitzondering.
                  Dit is de norm.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Zzp-monteurs zijn voor veel liftbedrijven de standaard oplossing voor
                  capaciteitstekorten. En dat is begrijpelijk. Het is snel, het is flexibel,
                  en het voelt goedkoper dan iemand in dienst nemen. Maar is het dat ook?
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.08}>
                <p>
                  In dit artikel maken we een eerlijke vergelijking tussen het werken met
                  zzp-liftmonteurs en het samenwerken met een capaciteitspartner. Geen
                  verkooppraatje, maar een nuchtere analyse van kosten, risico&apos;s,
                  beschikbaarheid en kwaliteit. Zodat je een geinformeerde keuze kunt maken.
                </p>
              </ScrollReveal>

              {/* H2: De huidige situatie */}
              <ScrollReveal>
                <h2 id="huidige-situatie">De huidige situatie: zzp als noodoplossing</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De Nederlandse liftmarkt telt circa 105.000 installaties en slechts 1.600
                  tot 1.800 actieve monteurs. Die schaarste drijft liftbedrijven naar de
                  zzp-markt. En op het eerste gezicht werkt dat. Je belt een monteur, hij
                  komt, hij doet het werk. Geen sollicitatieprocedure, geen vast contract,
                  geen langdurige commitment.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar in de praktijk is zzp-inzet zelden zo eenvoudig als het lijkt. De
                  meeste liftbedrijven die structureel met zzp&apos;ers werken, lopen tegen
                  dezelfde problemen aan:
                </p>
                <ul>
                  <li>
                    <strong>Geen beschikbaarheidsgarantie.</strong> Een zzp&apos;er kan morgen
                    voor een ander werken. Je hebt geen voorrang, geen exclusiviteit, geen
                    zekerheid.
                  </li>
                  <li>
                    <strong>Wisselende kwaliteit.</strong> De ene zzp-monteur kent jouw
                    installaties en werkt zelfstandig. De andere heeft twee dagen inwerktijd
                    nodig en maakt fouten die je eigen team moet herstellen.
                  </li>
                  <li>
                    <strong>Geen vervanging bij uitval.</strong> Als een zzp&apos;er ziek is of
                    afhaakt, is dat jouw probleem. Er is geen backoffice, geen
                    vervangingspool, geen garantie.
                  </li>
                  <li>
                    <strong>DBA-risico.</strong> De Wet DBA stelt strenge eisen aan de
                    werkrelatie met zzp&apos;ers. Structurele inzet leidt al snel tot het
                    vermoeden van schijnzelfstandigheid, met naheffingen en boetes als gevolg.
                  </li>
                  <li>
                    <strong>Administratieve last.</strong> Contracten, facturen, certificeringen
                    controleren, opdrachtbevestigingen. Per zzp&apos;er is het behapbaar. Bij
                    vijf of tien zzp&apos;ers is het een tijdrovende klus.
                  </li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het resultaat? Zzp-inzet begon als een noodoplossing, maar is voor veel
                  liftbedrijven een structurele afhankelijkheid geworden. En
                  afhankelijkheden zonder garanties zijn risico&apos;s.
                </p>
              </ScrollReveal>

              {/* H2: De werkelijke kosten */}
              <ScrollReveal>
                <h2 id="werkelijke-kosten">De werkelijke kosten van zzp-inzet</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Om een eerlijke vergelijking te maken, moeten we verder kijken dan het
                  uurtarief. Hieronder een overzicht van de kostencomponenten die bij
                  zzp-inzet meespelen, maar zelden op de factuur staan.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div className="overflow-x-auto my-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-[#1A1A1A]">
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Kostenpost</th>
                        <th className="text-left py-3 pr-4 font-semibold text-[#1A1A1A]">Zzp-monteur</th>
                        <th className="text-left py-3 font-semibold text-[#1A1A1A]">CaaS (LYFD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#404040]">
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Uurtarief</td>
                        <td className="py-3 pr-4">EUR 45 - 70</td>
                        <td className="py-3">Blended EUR 50</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Certificeringskosten</td>
                        <td className="py-3 pr-4">Jij controleert en faciliteert</td>
                        <td className="py-3">Inbegrepen</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Gereedschap en PBM&apos;s</td>
                        <td className="py-3 pr-4">Vaak van jou (DBA-risico)</td>
                        <td className="py-3">Van LYFD</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Vervanging bij uitval</td>
                        <td className="py-3 pr-4">Niet gegarandeerd</td>
                        <td className="py-3">Vervangingsgarantie</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">DBA-compliance</td>
                        <td className="py-3 pr-4">Jouw risico</td>
                        <td className="py-3">LYFD draagt het</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Administratie</td>
                        <td className="py-3 pr-4">Per monteur apart</td>
                        <td className="py-3">Eenvoudige facturering</td>
                      </tr>
                      <tr className="border-b border-[#EBEBEB]">
                        <td className="py-3 pr-4 font-medium">Onboarding en inwerktijd</td>
                        <td className="py-3 pr-4">1 - 3 dagen per monteur</td>
                        <td className="py-3">Minimaal (branchekennis)</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-medium">Beschikbaarheidsgarantie</td>
                        <td className="py-3 pr-4">Geen</td>
                        <td className="py-3">Contractueel vastgelegd</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De tabel maakt duidelijk dat het uurtarief slechts het topje van de
                  ijsberg is. De werkelijke kosten van zzp-inzet zitten in de risico&apos;s, de
                  onzekerheden en de indirecte kosten die niet op de factuur verschijnen.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Een vaak vergeten kostenpost: uitvaltijd.</strong> Als een
                  zzp-monteur uitvalt en er geen vervanging is, blijven de installaties
                  staan. Routes worden niet gereden, klanten worden niet bediend, en de
                  contractuele verplichtingen lopen door. Bij een servicecontract met
                  vier beurten per jaar is een gemiste beurt direct zichtbaar voor de
                  opdrachtgever. En het kost je niet alleen goodwill, het kan ook leiden
                  tot contractuele boetes.
                </p>
              </ScrollReveal>

              {/* H2: Wat een capaciteitspartner anders doet */}
              <ScrollReveal>
                <h2 id="capaciteitspartner">Wat een capaciteitspartner anders doet</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het fundamentele verschil tussen een zzp-monteur en een capaciteitspartner
                  zit niet in het uurtarief. Het zit in het model. Bij een zzp-monteur koop
                  je de arbeid van een individu. Bij een capaciteitspartner koop je
                  gegarandeerde capaciteit.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Branchekennis als standaard.</strong> LYFD levert uitsluitend
                  monteurs met ervaring in de liftindustrie. Dat betekent: kennis van de
                  relevante normen (NEN 3140, VCA), ervaring met OEM-systemen, en begrip
                  van hoe een liftbedrijf opereert. Een CaaS-monteur hoeft niet uitgelegd
                  te krijgen wat een onderhoudsbeurt inhoudt of hoe een storingsdienst
                  werkt. Dat scheelt inwerkdagen en vermindert het risico op fouten.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Vervangingsgarantie.</strong> Als een monteur uitvalt (ziekte,
                  verhindering, welke reden dan ook), regelt LYFD vervanging. Dat is niet
                  een service erbij, het is de kern van het CaaS-model. Je koopt capaciteit,
                  niet een persoon. En capaciteit wordt geleverd, ongeacht individuele
                  omstandigheden.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>DBA-compliance ingebouwd.</strong> Bij het CaaS-model is de monteur
                  verbonden aan LYFD B.V. Er ontstaat geen directe arbeidsrelatie tussen
                  jouw bedrijf en de monteur. Daarmee vervalt het risico op
                  schijnzelfstandigheid volledig. Geen naheffingen, geen boetes, geen
                  juridische onzekerheid. Lees meer in ons artikel over{" "}
                  <a href="/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/" className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300">
                    de Wet DBA en de liftbranche
                  </a>.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Eenvoudige administratie.</strong> In plaats van aparte contracten,
                  facturen en certificeringscontroles per zzp&apos;er heb je een enkele
                  overeenkomst met LYFD. Eenvoudige maandelijkse facturering op basis van
                  daadwerkelijke inzet. Dat scheelt je backoffice uren per week.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  <strong>Schaalbaar op- en afschalen.</strong> In piekperiodes (na de zomer,
                  rond de jaarwisseling) kun je eenvoudig extra capaciteit inschakelen. In
                  rustigere periodes schaal je terug. Bij zzp-inzet ben je afhankelijk van
                  wie er toevallig beschikbaar is. Bij CaaS plan je vooruit en heb je
                  zekerheid.
                </p>
              </ScrollReveal>

              {/* H2: Wanneer kiezen */}
              <ScrollReveal>
                <h2 id="wanneer-kiezen">Wanneer kies je voor zzp en wanneer voor CaaS?</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Laten we eerlijk zijn: zzp-inzet is niet altijd de verkeerde keuze. Er zijn
                  situaties waarin het inhuren van een individuele monteur de pragmatische
                  optie is. Het gaat om het herkennen van het omslagpunt.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Zzp is geschikt wanneer:</strong></p>
                <ul>
                  <li>Je een eenmalige, korte klus hebt (minder dan twee weken)</li>
                  <li>Je een monteur nodig hebt met een heel specifieke OEM-certificering die je niet structureel nodig hebt</li>
                  <li>De inzet incidenteel is en niet meer dan een paar dagen per maand bedraagt</li>
                  <li>De monteur daadwerkelijk als zelfstandig ondernemer opereert (meerdere opdrachtgevers, eigen gereedschap, eigen planning)</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>CaaS is geschikt wanneer:</strong></p>
                <ul>
                  <li>Je structureel capaciteit nodig hebt (meer dan 20 uur per week)</li>
                  <li>Je beschikbaarheidsgarantie wilt voor je servicecontracten</li>
                  <li>Je het DBA-risico wilt elimineren</li>
                  <li>Je werkt met meerdere zzp&apos;ers en de administratieve last toeneemt</li>
                  <li>Je wilt op- en afschalen met de seizoenen zonder opnieuw te moeten werven</li>
                  <li>Je branchekennis verwacht en geen tijd hebt voor uitgebreide onboarding</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het omslagpunt ligt voor de meeste liftbedrijven bij structurele inzet van
                  meer dan twee tot drie zzp-monteurs. Op dat moment worden de verborgen
                  kosten, risico&apos;s en administratieve lasten zwaarder dan het gemak van de
                  zzp-constructie.
                </p>
              </ScrollReveal>

              {/* H2: De totale kostenberekening */}
              <ScrollReveal>
                <h2 id="totale-kosten">De totale kostenberekening</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <blockquote>
                  Illustratief voorbeeld. De onderstaande berekening is indicatief en bedoeld
                  om de orde van grootte te illustreren. Werkelijke cijfers varieren per
                  bedrijf, contractvorm en regio.
                </blockquote>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Neem een liftbedrijf dat structureel drie zzp-monteurs inzet, elk gemiddeld
                  32 uur per week, 46 weken per jaar.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Scenario A: Drie zzp-monteurs</strong></p>
                <ul>
                  <li>Uurtarief: gemiddeld <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 55</span> per uur</li>
                  <li>Jaarlijkse uren per monteur: 32 x 46 = <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">1.472 uur</span></li>
                  <li>Directe kosten per monteur: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 80.960</span></li>
                  <li>Directe kosten drie monteurs: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 242.880</span></li>
                  <li>Administratie en contractbeheer: circa EUR 5.000 per jaar</li>
                  <li>Onboarding en inwerkkosten: circa EUR 3.000 per jaar (bij verloop)</li>
                  <li>DBA-risico (geschatte exposure bij naheffing): EUR 15.000 - 50.000 per monteur</li>
                  <li>Productiviteitsverlies bij uitval (geen vervanging): circa EUR 8.000 per jaar (illustratief voorbeeld)</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Totaal scenario A (excl. DBA-risico):</strong> <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">circa EUR 259.000</span> per jaar</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Scenario B: CaaS via LYFD</strong></p>
                <ul>
                  <li>Blended tarief: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 50</span> per uur (Bron: LYFD Pricing 2026)</li>
                  <li>Jaarlijkse uren: 3 x 1.472 = <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">4.416 uur</span></li>
                  <li>Totale kosten: <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">EUR 220.800</span></li>
                  <li>Administratie: minimaal (enkele factuur per maand)</li>
                  <li>DBA-risico: nul</li>
                  <li>Vervangingsgarantie: inbegrepen</li>
                  <li>Certificering en gereedschap: inbegrepen</li>
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p><strong>Totaal scenario B:</strong> <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">circa EUR 221.000</span> per jaar</p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Het verschil in directe kosten is al <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">circa EUR 38.000</span> per jaar in het voordeel van CaaS. En dan hebben we het DBA-risico (met een potentiele exposure van tienduizenden euro&apos;s per monteur) nog buiten beschouwing gelaten. (Illustratief voorbeeld)
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Maar het gaat niet alleen om geld. Het gaat om zekerheid. Beschikbaarheidsgarantie, vervangingsgarantie, branchekennis en juridische compliance zijn waarden die je niet in een uurtarief kunt vangen. Ze bepalen wel of je klanten tevreden zijn, je contracten verlengd worden, en je bedrijf kan groeien.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  De keuze tussen zzp en een capaciteitspartner is geen keuze tussen goedkoop en duur. Het is een keuze tussen reactief en structureel. Tussen onzekerheid en garantie. En tussen risico en compliance.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <p>
                  Benieuwd wat het verschil zou betekenen voor jouw specifieke situatie?{" "}
                  <a href="/diensten/caas/" className="text-[#1A1A1A] underline decoration-[#DCDCDC] underline-offset-4 hover:decoration-[#1A1A1A] transition-colors duration-300">
                    Lees meer over ons CaaS-model
                  </a>{" "}
                  of plan direct een gesprek.
                </p>
              </ScrollReveal>
            </div>

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-8 md:p-10">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Wil je de vergelijking voor jouw situatie doorrekenen?
              </p>
              <p className="mt-2 text-sm text-[#404040] leading-relaxed max-w-[50ch]">
                Plan een capaciteitsgesprek. Wij rekenen het samen door, specifiek voor jouw bedrijf.
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

          {/* Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <ArticleSidebar items={tocItems} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
