import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | LYFD",
  description:
    "De algemene voorwaarden van LYFD B.V. voor Capacity as a Service dienstverlening in de liftindustrie.",
  openGraph: {
    title: "Algemene Voorwaarden | LYFD",
    description:
      "De algemene voorwaarden van LYFD B.V. voor Capacity as a Service dienstverlening in de liftindustrie.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Algemene Voorwaarden | LYFD",
    description:
      "De algemene voorwaarden van LYFD B.V. voor Capacity as a Service dienstverlening in de liftindustrie.",
  },
};

export default function VoorwaardenPage() {
  return (
    <section className="bg-[#FDFCFA] pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] mb-6">
              Algemene Voorwaarden
            </h1>

            <div className="bg-[#F5F3F0] border border-[#E8E5E0] rounded-xl p-4 mb-10">
              <p className="text-sm text-[#6B6560] leading-relaxed">
                Dit zijn conceptteksten. Raadpleeg een juridisch adviseur voor
                definitieve versies.
              </p>
            </div>

            <div className="prose-lyfd">
              <h2>1. Toepasselijkheid</h2>
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle
                aanbiedingen, offertes en overeenkomsten tussen LYFD B.V. en de
                opdrachtgever, voor zover niet schriftelijk anders is
                overeengekomen. Afwijkingen van deze voorwaarden gelden alleen
                als zij schriftelijk zijn bevestigd door LYFD B.V.
              </p>

              <h2>2. Aanbiedingen en overeenkomsten</h2>
              <p>
                Alle aanbiedingen van LYFD B.V. zijn vrijblijvend, tenzij
                uitdrukkelijk anders vermeld. Een overeenkomst komt tot stand
                op het moment dat de opdrachtgever een aanbod van LYFD B.V.
                schriftelijk of digitaal aanvaardt, of wanneer LYFD B.V.
                feitelijk uitvoering geeft aan een opdracht.
              </p>

              <h2>3. Uitvoering van diensten</h2>
              <p>
                LYFD B.V. zal de overeengekomen diensten naar beste inzicht en
                vermogen uitvoeren, overeenkomstig de eisen van goed
                vakmanschap. LYFD B.V. levert capaciteit (gecertificeerde
                liftmonteurs) voor werkzaamheden zoals overeengekomen in de
                opdracht.
              </p>
              <p>
                De monteurs van LYFD B.V. voeren werkzaamheden uit op locatie
                van de opdrachtgever of diens eindklant. De opdrachtgever is
                verantwoordelijk voor het aanleveren van een veilige
                werkomgeving conform geldende wet- en regelgeving.
              </p>

              <h2>4. Tarieven en betaling</h2>
              <p>
                Tarieven worden vooraf overeengekomen per engagement (On-Demand,
                Project, Retainer of Enterprise). Alle genoemde tarieven zijn
                exclusief BTW, tenzij anders vermeld. Facturering vindt plaats
                op de overeengekomen frequentie (wekelijks of maandelijks).
              </p>
              <p>
                Betaling dient te geschieden binnen 30 dagen na factuurdatum,
                tenzij schriftelijk anders overeengekomen. Bij overschrijding
                van de betalingstermijn is de opdrachtgever van rechtswege in
                verzuim en is LYFD B.V. gerechtigd wettelijke rente in
                rekening te brengen.
              </p>

              <h2>5. Aansprakelijkheid</h2>
              <p>
                LYFD B.V. is niet aansprakelijk voor schade die het gevolg is
                van onjuiste of onvolledige informatie verstrekt door de
                opdrachtgever. De aansprakelijkheid van LYFD B.V. is beperkt
                tot het bedrag dat in het betreffende geval door de
                aansprakelijkheidsverzekering wordt uitgekeerd, vermeerderd
                met het eigen risico.
              </p>
              <p>
                Indien geen uitkering plaatsvindt, is de aansprakelijkheid
                beperkt tot het factuurbedrag over de laatste drie maanden
                voorafgaand aan de schadeveroorzakende gebeurtenis.
              </p>

              <h2>6. Overmacht</h2>
              <p>
                In geval van overmacht is LYFD B.V. niet gehouden tot het
                nakomen van enige verplichting. Onder overmacht wordt verstaan:
                elke omstandigheid buiten de macht van LYFD B.V. die de
                nakoming van verplichtingen geheel of gedeeltelijk
                verhindert. Hieronder vallen onder meer ziekte van personeel,
                stakingen, overheidsmaatregelen en storingen in de
                energievoorziening.
              </p>

              <h2>7. Geheimhouding</h2>
              <p>
                Beide partijen zijn verplicht tot geheimhouding van alle
                vertrouwelijke informatie die zij in het kader van de
                overeenkomst hebben verkregen. Deze verplichting geldt ook na
                beeindiging van de overeenkomst.
              </p>

              <h2>8. Toepasselijk recht</h2>
              <p>
                Op alle overeenkomsten tussen LYFD B.V. en de opdrachtgever is
                Nederlands recht van toepassing. Geschillen worden voorgelegd
                aan de bevoegde rechter in het arrondissement waar LYFD B.V.
                is gevestigd.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
