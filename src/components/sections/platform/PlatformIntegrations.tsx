"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  Link,
  Code,
  Globe,
  WindowsLogo,
  Database,
  Cloud,
  Lightning,
  Plugs,
} from "@phosphor-icons/react";

/* ------------------------------------------------------------------ */
/*  Integrations data                                                  */
/* ------------------------------------------------------------------ */

type IntegrationStatus = "active" | "planned" | "on-request";

interface Integration {
  name: string;
  icon: React.ElementType;
  status: IntegrationStatus;
}

const integrations: Integration[] = [
  { name: "HubSpot CRM", icon: Link, status: "active" },
  { name: "LYFD API", icon: Code, status: "active" },
  { name: "Google Workspace", icon: Globe, status: "planned" },
  { name: "Microsoft 365", icon: WindowsLogo, status: "planned" },
  { name: "SAP", icon: Database, status: "on-request" },
  { name: "Salesforce", icon: Cloud, status: "on-request" },
  { name: "Zapier", icon: Lightning, status: "planned" },
  { name: "Webhooks", icon: Plugs, status: "active" },
];

const statusConfig: Record<
  IntegrationStatus,
  { label: string | null; cardClass: string; textClass: string; iconClass: string }
> = {
  active: {
    label: null,
    cardClass:
      "bg-[#EDE8FF] border-[#EDE8FF] hover:border-[#4928FD]/30 hover:shadow-[0_4px_16px_rgba(73,40,253,0.08)]",
    textClass: "text-[#1B1D1E]",
    iconClass: "text-[#4928FD]",
  },
  planned: {
    label: "Binnenkort",
    cardClass:
      "bg-[#F7F7F7] border-[#DDDDDD] hover:border-[#DDDDDD] hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
    textClass: "text-[#888888]",
    iconClass: "text-[#888888]",
  },
  "on-request": {
    label: "Op aanvraag",
    cardClass:
      "bg-transparent border-[#DDDDDD] border-dashed hover:border-[#DDDDDD] hover:bg-[#F7F7F7]",
    textClass: "text-[#888888]",
    iconClass: "text-[#888888]",
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PlatformIntegrations() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <Badge className="mb-5">Integraties</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Verbindt met je bestaande systemen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-[#888888] leading-[1.7] max-w-[55ch] mx-auto">
              Het LYFD platform integreert met de tools die je al gebruikt. En
              met onze open API bouw je elke koppeling die je nodig hebt.
            </p>
          </ScrollReveal>
        </div>

        {/* Integration grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {integrations.map((integration) => {
            const config = statusConfig[integration.status];
            const Icon = integration.icon;

            return (
              <StaggerItem key={integration.name}>
                <div
                  className={cn(
                    "relative rounded-3xl border p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] h-full flex flex-col items-center justify-center gap-3",
                    config.cardClass
                  )}
                >
                  {integration.status === "active" && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium bg-[#22C55E]/10 text-[#22C55E] whitespace-nowrap">
                        Actief
                      </span>
                    </div>
                  )}
                  {config.label && integration.status !== "active" && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium bg-[#F7F7F7] text-[#888888] whitespace-nowrap">
                        {config.label}
                      </span>
                    </div>
                  )}

                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500",
                      integration.status === "active"
                        ? "bg-[#F7F7F7]"
                        : "bg-[#F7F7F7]"
                    )}
                  >
                    <Icon
                      weight="regular"
                      className={cn("w-5 h-5", config.iconClass)}
                    />
                  </div>

                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-500",
                      config.textClass
                    )}
                  >
                    {integration.name}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom text */}
        <ScrollReveal delay={0.3}>
          <p className="mt-12 md:mt-16 text-center text-sm text-[#888888] leading-relaxed max-w-[55ch] mx-auto">
            Mis je een integratie? Neem{" "}
            <a
              href="/contact/"
              className="text-[#4928FD] underline underline-offset-4 decoration-[#4928FD]/30 hover:decoration-[#4928FD] transition-colors duration-300"
            >
              contact
            </a>{" "}
            op. Met onze open API is vrijwel alles mogelijk.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
