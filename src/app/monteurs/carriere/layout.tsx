import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carriere als Liftmonteur | Groei, Afwisseling & Perspectief | LYFD",
  description:
    "Een carriere als liftmonteur bij LYFD: groeimogelijkheden, afwisseling bij diverse opdrachtgevers, technische ondersteuning en een team dat je vak deelt.",
  openGraph: {
    title: "Carriere als Liftmonteur | Groei, Afwisseling & Perspectief | LYFD",
    description:
      "Een carriere als liftmonteur bij LYFD: groeimogelijkheden, afwisseling bij diverse opdrachtgevers, technische ondersteuning en een team dat je vak deelt.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/monteurs/carriere/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carriere als Liftmonteur | Groei, Afwisseling & Perspectief | LYFD",
    description:
      "Een carriere als liftmonteur bij LYFD: groeimogelijkheden, afwisseling bij diverse opdrachtgevers, technische ondersteuning en een team dat je vak deelt.",
  },
  alternates: {
    canonical: "https://lyfd.nl/monteurs/carriere/",
  },
};

export default function CarriereLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
