import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmodernisering Capaciteit | Monteurs voor Projecten | LYFD",
  description:
    "Moderniseringsproject gepland maar geen team? LYFD levert combiteams met vervangingsgarantie. Merkonafhankelijk, CAN-OPEN ervaring, keiharde deadlines gehaald.",
  openGraph: {
    title: "Liftmodernisering Capaciteit | Monteurs voor Projecten | LYFD",
    description:
      "Moderniseringsproject gepland maar geen team? LYFD levert combiteams met vervangingsgarantie. Merkonafhankelijk, CAN-OPEN ervaring, keiharde deadlines gehaald.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/modernisering/capaciteit/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmodernisering Capaciteit | Monteurs voor Projecten | LYFD",
    description:
      "Moderniseringsproject gepland maar geen team? LYFD levert combiteams met vervangingsgarantie. Merkonafhankelijk, CAN-OPEN ervaring, keiharde deadlines gehaald.",
  },
  alternates: {
    canonical: "https://lyfd.nl/modernisering/capaciteit/",
  },
};

export default function ModerniseringCapaciteitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
