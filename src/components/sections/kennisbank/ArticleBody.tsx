"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ArticleBody() {
  return (
    <div className="prose-lyfd">
      {/* Definitie-blok (AEO-geoptimaliseerd) */}
      <ScrollReveal>
        <div className="relative bg-[#F5F3F0] rounded-lg border-l-2 border-[#A0704C] px-6 py-5 mb-10">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-[#E8E5E0] text-[#6B6560] mb-3">
            Definitie
          </span>
          <p className="text-[0.9375rem] leading-relaxed text-[#3D3A37] m-0">
            <strong className="text-[#1A1A1A]">Capaciteitsgebrek in de liftindustrie</strong> is
            de situatie waarin een liftbedrijf structureel te weinig gecertificeerde monteurs
            beschikbaar heeft om alle gecontracteerde werkzaamheden (service, onderhoud,
            modernisering en nieuwbouw) tijdig en volledig uit te voeren. De Nederlandse liftmarkt
            telt circa 105.000 installaties tegenover 1.600 tot 1.800 actieve monteurs, waardoor
            capaciteitsgebrek een sector-breed probleem is.{" "}
            <span className="text-[#9C9690] text-xs">(Bron: LYFD, marktervaring 5 jaar)</span>
          </p>
        </div>
      </ScrollReveal>

      {/* Inleiding */}
      <ScrollReveal>
        <p>
          De meeste liftbedrijven weten dat capaciteitsgebrek een probleem is.
          Maar weinig directeuren hebben een helder beeld van wat het ze
          werkelijk kost. Het gaat niet alleen om de omzet die je misloopt door
          contracten die je niet kunt aannemen. De werkelijke kosten zitten
          dieper, en ze stapelen op.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          In deze analyse kijken we verder dan de zichtbare cijfers. We laten
          zien waar de werkelijke impact van onderbezetting zit, hoe die
          doorwerkt in je hele organisatie, en wat het verschil kan zijn als je
          capaciteit als variabele gaat benaderen in plaats van als vast gegeven.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <p>
          Want het probleem is niet dat je het niet ziet. Het probleem is dat de
          kosten verspreid liggen over afdelingen, kwartalen en klantrelaties,
          en daardoor onzichtbaar blijven totdat het te laat is.
        </p>
      </ScrollReveal>

      {/* H2: De zichtbare kosten */}
      <ScrollReveal>
        <h2 id="zichtbare-kosten">De zichtbare kosten</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Laten we beginnen met wat de meeste bedrijven wél meten. De directe
          gevolgen van te weinig mensen op de werkvloer zijn tastbaar en vaak
          pijnlijk.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <p>
          <strong>Gemiste contracten en tenders.</strong> Als je niet kunt
          garanderen dat je de capaciteit hebt om een onderhoudscontract uit te
          voeren, win je het niet. Opdrachtgevers, zeker de grotere, willen
          zekerheid. Een tender die je niet kunt bedienen is omzet die naar een
          concurrent gaat. Niet omdat je minder goed bent, maar omdat je niet
          kunt leveren.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>Vertragingsboetes bij modernisering en nieuwbouw.</strong>{" "}
          Projecten hebben opleverdata. Als je monteurs niet beschikbaar zijn,
          schuift de planning op, en bij veel contracten komt daar een
          financieel gevolg aan vast. Vertragingsboetes van{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 500
          </span>{" "}
          tot{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 2.500
          </span>{" "}
          per week zijn geen uitzondering.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>Overwerk en weekendtarieven.</strong> Als je bestaande team het
          tekort moet opvangen, betaal je de rekening in overuren. Niet alleen
          financieel, maar ook in motivatie en fysieke belasting. Overwerk is
          geen oplossing. Het is symptoombestrijding die steeds duurder wordt.
        </p>
      </ScrollReveal>

      {/* H2: De onzichtbare kosten */}
      <ScrollReveal>
        <h2 id="onzichtbare-kosten">De onzichtbare kosten</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Hier wordt het interessant. De kosten die niet op een factuur staan
          maar je bedrijf wél uithollen.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>Klantverlies door onbetrouwbare levering.</strong> Een
          onderhoudroute die niet gereden wordt, is een klant die belt. En als
          dat vaker gebeurt, is het een klant die vertrekt. In de liftbranche
          zijn contracten langlopend, maar het vertrouwen waarmee ze verlengd
          worden is broos. Een paar gemiste beurten en de concurrent staat op de
          stoep.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>
            Reputatieschade in een sector waar mond-tot-mondreclame alles is.
          </strong>{" "}
          Nederland heeft een overzichtelijke liftbranche. Iedereen kent
          iedereen. Als jij structureel niet kunt leveren, weten je concurrenten
          dat eerder dan jij denkt. En je potentiele opdrachtgevers ook.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>
            Managementtijd die opgaat aan brandjes blussen in plaats van
            groeistrategie.
          </strong>{" "}
          Hoeveel uur per week besteden jouw planners en teamleiders aan het
          oplossen van gaten in de bezetting? Dat is tijd die niet naar
          procesverbetering, klantrelaties of strategische ontwikkeling gaat.
          Het is de duurste vorm van inefficientie: je beste mensen bezig houden
          met operationele noodgrepen.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          <strong>Verloop onder eigen personeel door werkdruk.</strong> Dit is
          misschien de meest onderschatte kostenpost. Monteurs die structureel
          overbelast worden, vertrekken. En het vervangen van een ervaren
          liftmonteur kost, inclusief werving, inwerkperiode en productiviteitsverlies,
          al snel{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 25.000
          </span>{" "}
          tot{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 40.000
          </span>
          .
        </p>
      </ScrollReveal>

      {/* H2: Een rekenvoorbeeld */}
      <ScrollReveal>
        <h2 id="rekenvoorbeeld">Een rekenvoorbeeld</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Neem een middelgroot liftbedrijf met{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            120
          </span>{" "}
          medewerkers en{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            3.000
          </span>{" "}
          installaties in portefeuille. Als{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            5%
          </span>{" "}
          van de routes structureel niet gereden kan worden door
          capaciteitsgebrek, dan praten we over{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            150
          </span>{" "}
          installaties die niet het onderhoud krijgen dat ze nodig hebben.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <blockquote>
          Illustratief voorbeeld. De onderstaande berekening is indicatief en
          bedoeld om de orde van grootte te illustreren. Werkelijke cijfers
          varieren per bedrijf, contractvorm en regio.
        </blockquote>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>Reken het door:</p>
        <ul>
          <li>
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              150
            </span>{" "}
            gemiste beurten per kwartaal bij een gemiddelde contractwaarde van{" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 145
            </span>{" "}
            per beurt ={" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 21.750
            </span>{" "}
            direct verlies per kwartaal
          </li>
          <li>
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              3
            </span>{" "}
            vertragingsboetes per jaar bij moderniseringsprojecten ={" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 15.000
            </span>{" "}
            tot{" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 30.000
            </span>
          </li>
          <li>
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              2
            </span>{" "}
            monteurs die vertrekken door werkdruk = vervangingskosten van{" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 50.000
            </span>{" "}
            tot{" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 80.000
            </span>
          </li>
          <li>
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              1
            </span>{" "}
            verloren onderhoudscontract van{" "}
            <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
              EUR 85.000
            </span>{" "}
            per jaar
          </li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Totaal:{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 237.000
          </span>{" "}
          tot{" "}
          <span className="font-mono bg-[#F5F5F4] px-1.5 py-0.5 rounded text-sm">
            EUR 282.000
          </span>{" "}
          per jaar. En dat is een conservatieve schatting die de kosten van
          reputatieschade en managementtijd nog buiten beschouwing laat.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Het punt is niet het exacte bedrag. Het punt is de orde van grootte.
          Capaciteitsgebrek is geen operationeel ongemak. Het is een
          strategisch risico dat honderden duizenden euro's per jaar kan kosten.
        </p>
      </ScrollReveal>

      {/* H2: Hoe CaaS het kostenplaatje verandert */}
      <ScrollReveal>
        <h2 id="caas-verandert">Hoe CaaS het kostenplaatje verandert</h2>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Capacity as a Service draait het model om. In plaats van vaste
          personeelskosten die doorlopen, ook als het rustiger is, betaal je
          voor daadwerkelijke inzet. Geen wervingskosten. Geen uitvalrisico. En
          geen maanden wachten op de juiste kandidaat.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Het verandert een vaste kostenpost in een variabele. En dat is niet
          alleen financieel relevant. Het geeft je organisatie ademruimte. Je
          planners hoeven geen puzzels meer op te lossen met stukken die
          ontbreken. Je teamleiders kunnen zich richten op kwaliteit in plaats
          van op bezetting. En je klanten krijgen het onderhoud dat je ze
          belooft.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Het verschil met een traditioneel uitzendbureau? LYFD matcht niet op
          beschikbaarheid, maar op competentie. Onze monteurs zijn gecertificeerd
          voor de installaties waar ze op ingezet worden. Ze kennen de branche,
          de normen, en de verwachtingen. Dat scheelt inwerkdagen, dat scheelt
          fouten, en dat scheelt geld.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Bovendien biedt CaaS garantie. Als een monteur uitvalt, regelen wij
          vervanging. Dat is geen service, dat is de kern van het model. Je
          koopt niet een persoon, je koopt capaciteit. En die capaciteit wordt
          gegarandeerd geleverd.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <p>
          Voor het liftbedrijf uit ons rekenvoorbeeld zou een CaaS-model een
          fractie kosten van het jaarlijkse verlies door capaciteitsgebrek. De
          business case is niet ingewikkeld, maar je moet hem wel maken.
        </p>
      </ScrollReveal>
    </div>
  );
}
