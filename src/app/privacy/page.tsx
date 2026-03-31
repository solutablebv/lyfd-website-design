import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacyverklaring | LYFD",
  description:
    "Lees hoe LYFD B.V. omgaat met persoonsgegevens. Transparant over gegevensverwerking, bewaartermijnen en jouw rechten.",
  openGraph: {
    title: "Privacyverklaring | LYFD",
    description:
      "Lees hoe LYFD B.V. omgaat met persoonsgegevens. Transparant over gegevensverwerking, bewaartermijnen en jouw rechten.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacyverklaring | LYFD",
    description:
      "Lees hoe LYFD B.V. omgaat met persoonsgegevens. Transparant over gegevensverwerking, bewaartermijnen en jouw rechten.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-20 md:pb-28">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] mb-10">
              Privacyverklaring
            </h1>

            <div className="prose-lyfd">
              <h2>1. Verantwoordelijke</h2>
              <p>
                LYFD B.V. is verantwoordelijk voor de verwerking van
                persoonsgegevens zoals beschreven in deze privacyverklaring.
                LYFD B.V. is gevestigd in Nederland en ingeschreven bij de
                Kamer van Koophandel.
              </p>

              <h2>2. Welke gegevens verzamelen wij</h2>
              <p>Wij verwerken de volgende persoonsgegevens:</p>
              <ul>
                <li>
                  Contactgegevens die je invult via het contactformulier of
                  aanvraagformulier (naam, e-mailadres, telefoonnummer,
                  bedrijfsnaam)
                </li>
                <li>
                  Gegevens die automatisch worden verzameld bij websitebezoek
                  (IP-adres, browsertype, bezochte pagina&apos;s, verwijzende
                  website)
                </li>
                <li>
                  Cookies en vergelijkbare technologieen voor
                  websiteanalyse
                </li>
              </ul>

              <h2>3. Doel van verwerking</h2>
              <p>
                Wij verwerken persoonsgegevens voor de volgende doeleinden:
              </p>
              <ul>
                <li>
                  Het beantwoorden van je contactverzoek of capaciteitsaanvraag
                </li>
                <li>
                  Het verbeteren van onze website en dienstverlening
                </li>
                <li>
                  Het analyseren van websitegebruik om de gebruikerservaring
                  te optimaliseren
                </li>
                <li>
                  Het nakomen van wettelijke verplichtingen
                </li>
              </ul>

              <h2>4. Bewaartermijn</h2>
              <p>
                Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor
                het doel waarvoor ze zijn verzameld. Contactgegevens uit
                formulieren worden maximaal 2 jaar bewaard na het laatste
                contact. Analytische gegevens worden geanonimiseerd bewaard.
              </p>

              <h2>5. Rechten van betrokkenen</h2>
              <p>
                Je hebt het recht om je persoonsgegevens in te zien, te
                corrigeren of te laten verwijderen. Daarnaast heb je het recht
                om bezwaar te maken tegen de verwerking, het recht op
                gegevensoverdraagbaarheid en het recht om een eerder gegeven
                toestemming in te trekken.
              </p>
              <p>
                Een verzoek kun je indienen via het contactformulier op onze
                website of per e-mail. We reageren binnen 30 dagen op je
                verzoek.
              </p>

              <h2>6. Delen met derden</h2>
              <p>
                Wij delen persoonsgegevens alleen met derden als dit
                noodzakelijk is voor de uitvoering van onze dienstverlening,
                of als wij hiertoe wettelijk verplicht zijn. Met partijen die
                gegevens verwerken in onze opdracht sluiten wij een
                verwerkersovereenkomst.
              </p>

              <h2>7. Beveiliging</h2>
              <p>
                Wij nemen passende technische en organisatorische maatregelen
                om persoonsgegevens te beschermen tegen verlies, misbruik en
                ongeautoriseerde toegang.
              </p>

              <h2>8. Contact</h2>
              <p>
                Heb je vragen over deze privacyverklaring of over de
                verwerking van je persoonsgegevens? Neem dan contact met ons
                op via het contactformulier op onze website.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
