"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ArrowRight } from "@phosphor-icons/react";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  pillar: string;
  href: string;
}

const recentArticles: Article[] = [
  {
    title: "Welk CaaS-model past bij jou?",
    excerpt:
      "LYFD biedt vier CaaS-modellen. Welk model past bij jouw liftbedrijf? Een praktische keuzehulp met beslisboom.",
    date: "29 maart 2026",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/welk-caas-model/",
  },
  {
    title: "CaaS vs. Uitzendbureau: Wat is het Verschil?",
    excerpt:
      "Capacity as a Service en uitzenden lijken op het eerste gezicht op elkaar. De verschillen zijn fundamenteel. Een eerlijke vergelijking.",
    date: "29 maart 2026",
    pillar: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau/",
  },
  {
    title: "Wet DBA en de Liftbranche: Wat Moet een Liftbedrijf Weten?",
    excerpt:
      "De Wet DBA heeft directe gevolgen voor liftbedrijven die werken met zzp-monteurs. Wat zijn de risico's en hoe bescherm je je bedrijf?",
    date: "29 maart 2026",
    pillar: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche/",
  },
];

export function RecentArticles() {
  return (
    <section className="relative bg-white py-32 md:py-44">
      <Container>
        <ScrollReveal>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance">
              Recente artikelen
            </h2>
            <a
              href="/kennisbank/"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-[#1B1D1E] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
            >
              Alle artikelen
              <ArrowRight weight="bold" className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {recentArticles.map((article, index) => (
            <StaggerItem key={article.title}>
              <ArticleCard article={article} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}

const pillarBadgeVariants: Record<string, "pastel-blue" | "pastel-lilac" | "pastel-pink" | "pastel-peach"> = {
  "Capaciteitsmanagement": "pastel-blue",
  "CaaS Uitgelegd": "pastel-lilac",
  "Liftmonteur Gids": "pastel-pink",
  "NEN Certificering": "pastel-peach",
};

const pastelColors = ["bg-[#E0EAFF]/30", "bg-[#EDE8FF]/30", "bg-[#FFE8E0]/30", "bg-[#FFE4E4]/30"];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const bgColor = pastelColors[index % pastelColors.length];
  const badgeVariant = pillarBadgeVariants[article.pillar] || "pastel-blue";

  return (
    <a href={article.href} className="group block h-full">
      <div className={`h-full rounded-3xl ${bgColor} overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#4928FD]/20 hover:-translate-y-0.5 flex flex-col`}>
        {/* Thumbnail placeholder */}
        <div className="h-40 bg-[#F5F5F4]/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F7F7F7] to-[#E8E8E8] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <Badge variant={badgeVariant} className="self-start mb-3">
            {article.pillar}
          </Badge>

          <h3 className="text-base font-semibold text-[#1B1D1E] tracking-tight leading-snug group-hover:text-[#1B1D1E] transition-colors duration-300">
            {article.title}
          </h3>

          <p className="mt-2 text-sm text-[#333333] leading-relaxed line-clamp-2 flex-1">
            {article.excerpt}
          </p>

          <span className="mt-4 text-xs text-[#888888] font-mono">
            {article.date}
          </span>
        </div>
      </div>
    </a>
  );
}
