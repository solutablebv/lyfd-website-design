import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur als Ketenpartner | Langdurige Samenwerking | LYFD",
  description:
    "LYFD als ketenpartner voor uw liftbedrijf. Van tijdelijk contract tot langdurige samenwerking. Flexibel of vast, op projectbasis of structureel.",
  openGraph: {
    title: "Liftmonteur als Ketenpartner | Langdurige Samenwerking | LYFD",
    description:
      "LYFD als ketenpartner voor uw liftbedrijf. Van tijdelijk contract tot langdurige samenwerking. Flexibel of vast, op projectbasis of structureel.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/liftmonteurs/samenwerking/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur als Ketenpartner | Langdurige Samenwerking | LYFD",
    description:
      "LYFD als ketenpartner voor uw liftbedrijf. Van tijdelijk contract tot langdurige samenwerking. Flexibel of vast, op projectbasis of structureel.",
  },
  alternates: {
    canonical: "https://lyfd.nl/liftmonteurs/samenwerking/",
  },
};

export default function SamenwerkingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
