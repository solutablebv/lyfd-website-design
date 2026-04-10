import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liftmonteur ZZP vs Loondienst | Eerlijke Vergelijking | LYFD",
  description:
    "ZZP of loondienst als liftmonteur? Vergelijk inkomen, risico's, pensioen, vrijheid en zekerheid. Plus de derde optie: werken via LYFD.",
  openGraph: {
    title: "Liftmonteur ZZP vs Loondienst | Eerlijke Vergelijking | LYFD",
    description:
      "ZZP of loondienst als liftmonteur? Vergelijk inkomen, risico's, pensioen, vrijheid en zekerheid. Plus de derde optie: werken via LYFD.",
    type: "website",
    locale: "nl_NL",
    siteName: "LYFD",
    url: "https://lyfd.nl/monteurs/zzp-vs-loondienst/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liftmonteur ZZP vs Loondienst | Eerlijke Vergelijking | LYFD",
    description:
      "ZZP of loondienst als liftmonteur? Vergelijk inkomen, risico's, pensioen, vrijheid en zekerheid. Plus de derde optie: werken via LYFD.",
  },
  alternates: {
    canonical: "https://lyfd.nl/monteurs/zzp-vs-loondienst/",
  },
};

export default function ZzpVsLoondienst({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
