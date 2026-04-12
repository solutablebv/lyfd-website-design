import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarieven Liftmonteurs | Transparante Prijzen | LYFD",
  description:
    "Transparante tarieven voor liftmonteurs via LYFD. Vanaf EUR 69,96 per uur (excl. BTW). All-in: certificering, uitrusting, verzekeringen, vervangingsgarantie.",
  openGraph: {
    title: "Tarieven Liftmonteurs | Transparante Prijzen | LYFD",
    description:
      "Transparante tarieven voor liftmonteurs via LYFD. Vanaf EUR 69,96 per uur (excl. BTW). All-in.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/tarieven/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarieven Liftmonteurs | Transparante Prijzen | LYFD",
    description:
      "Transparante tarieven voor liftmonteurs via LYFD. Vanaf EUR 69,96 per uur. All-in.",
  },
  alternates: {
    canonical: "https://lyfd.nl/tarieven/",
  },
};

export default function TarievenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
