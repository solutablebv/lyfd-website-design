import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur per Regio | Randstad, Noord, Oost, Zuid | LYFD",
  description:
    "Liftmonteur nodig in de Randstad, Amsterdam, Rotterdam of elders in Nederland? LYFD levert gecertificeerde monteurs in heel Nederland. Check beschikbaarheid.",
  openGraph: {
    title: "Liftmonteur per Regio | Randstad, Noord, Oost, Zuid | LYFD",
    description:
      "Liftmonteur nodig in de Randstad, Amsterdam, Rotterdam of elders in Nederland? LYFD levert gecertificeerde monteurs in heel Nederland. Check beschikbaarheid.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/regio/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur per Regio | Randstad, Noord, Oost, Zuid | LYFD",
    description:
      "Liftmonteur nodig in de Randstad, Amsterdam, Rotterdam of elders in Nederland? LYFD levert gecertificeerde monteurs in heel Nederland. Check beschikbaarheid.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/regio/",
  },
};

export default function RegioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
