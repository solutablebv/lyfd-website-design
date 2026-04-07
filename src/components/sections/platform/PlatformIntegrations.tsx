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
      "bg-[#FDFCFA] border-[#D9D4CE] hover:border-[#C0C0C0] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
    textClass: "text-[#1A1A1A]",
    iconClass: "text-[#1A1A1A]",
  },
  planned: {
    label: "Binnenkort",
    cardClass:
      "bg-[#F8F6F3] border-[#E8E5E0] hover:border-[#D9D4CE] hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)]",
    textClass: "text-[#6B6560]",
    iconClass: "text-[#9C9690]",
  },
  "on-request": {
    label: "Op aanvraag",
    cardClass:
      "bg-transparent border-[#E8E5E0] border-dashed hover:border-[#D9D4CE] hover:bg-[#F8F6F3]",
    textClass: "text-[#6B6560]",
    iconClass: "text-[#9C9690]",
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PlatformIntegrations() {
  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44 overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal>
            <Badge className="mb-5">Integraties</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Verbindt met je bestaande systemen
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-6 text-base md:text-lg text-[#6B6560] leading-[1.7] max-w-[55ch] mx-auto">
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
                    "relative rounded-2xl border p-6 text-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] h-full flex flex-col items-center justify-center gap-3",
                    config.cardClass
                  )}
                >
                  {config.label && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.12em] font-medium bg-[#F2F0ED] text-[#6B6560] whitespace-nowrap">
                        {config.label}
                      </span>
                    </div>
                  )}

                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500",
                      integration.status === "active"
                        ? "bg-[#F2F0ED]"
                        : "bg-[#F5F3F0]"
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
          <p className="mt-12 md:mt-16 text-center text-sm text-[#6B6560] leading-relaxed max-w-[55ch] mx-auto">
            Mis je een integratie? Neem{" "}
            <a
              href="/contact/"
              className="text-[#1A1A1A] underline underline-offset-4 decoration-[#DCDCDC] hover:decoration-[#1A1A1A] transition-colors duration-300"
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
