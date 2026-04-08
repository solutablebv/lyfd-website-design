"use client";

import { Container } from "@/components/ui/Container";
import { LinkedinLogo, ArrowUp } from "@phosphor-icons/react";

const footerColumns = [
  {
    title: "Voor Liftbedrijven",
    links: [
      { label: "Capacity as a Service", href: "/diensten/capacity-as-a-service" },
      { label: "Liftonderhoud", href: "/diensten/liftonderhoud-capaciteit" },
      { label: "Reparatie", href: "/diensten/reparatie" },
      { label: "Modernisering", href: "/diensten/lift-modernisering" },
    ],
  },
  {
    title: "Voor Liftmonteurs",
    links: [
      { label: "Werken bij LYFD", href: "/voor-liftmonteurs/" },
      { label: "Vacatures", href: "/voor-liftmonteurs/" },
      { label: "Certificeringen", href: "/kennisbank/nen-certificering/" },
      { label: "LYFD Academy", href: "/academy/" },
      { label: "Aanmelden", href: "/voor-liftmonteurs/" },
    ],
  },
  {
    title: "LYFD",
    links: [
      { label: "Over ons", href: "/over-lyfd/" },
      { label: "Kennisbank", href: "/kennisbank/" },
      { label: "Platform", href: "/platform/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Juridisch",
    links: [
      { label: "Privacyverklaring", href: "/privacy/" },
      { label: "Algemene voorwaarden", href: "/voorwaarden/" },
    ],
  },
];

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Footer() {
  return (
    <footer className="relative bg-[#F7F7F7]">
      {/* Gradient divider instead of hard border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent" />

      {/* Top gradient blend */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />

      <Container className="py-16 md:py-24">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-[#1B1D1E] mb-5 tracking-tight">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="link-underline text-sm text-[#888888] hover:text-[#1B1D1E] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-[#DDDDDD] to-transparent mb-8" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <img src="/logo.svg" alt="LYFD" className="h-5" />
                <span className="text-sm font-semibold tracking-tight text-[#1B1D1E]">
                  LYFD B.V.
                </span>
              </div>
              <span className="text-xs text-[#DDDDDD] hidden sm:block">
                /
              </span>
              <span className="text-xs text-[#888888]">
                Capacity as a Service voor de liftindustrie
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#888888] font-mono">
                Lifting the workforce.
              </span>
              <a
                href="https://linkedin.com/company/lyfd"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-[#DDDDDD] hover:bg-[#1B1D1E] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110"
                aria-label="LYFD op LinkedIn"
              >
                <LinkedinLogo weight="fill" className="h-4 w-4 text-[#888888] group-hover:text-white transition-colors duration-500" />
              </a>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-8 h-8 rounded-full bg-[#DDDDDD] hover:bg-[#1B1D1E] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 cursor-pointer"
                aria-label="Terug naar boven"
              >
                <ArrowUp weight="bold" className="h-3.5 w-3.5 text-[#888888] group-hover:text-white transition-colors duration-500" />
              </button>

              <span className="text-xs text-[#888888]">
                &copy; {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
