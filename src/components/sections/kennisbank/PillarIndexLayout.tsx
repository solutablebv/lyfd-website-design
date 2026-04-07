"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ArrowRight, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";

interface PillarArticle {
  title: string;
  excerpt: string;
  href: string;
  date: string;
}

interface PillarIndexLayoutProps {
  pillar: string;
  description: string;
  articles: PillarArticle[];
}

export function PillarIndexLayout({
  pillar,
  description,
  articles,
}: PillarIndexLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#FDFCFA] pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDFCFA] to-transparent z-[2] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.05,
              }}
              className="flex items-center gap-1.5 mb-8 flex-wrap"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="text-xs text-[#9C9690] hover:text-[#6B6560] transition-colors duration-300 font-medium"
              >
                Home
              </Link>
              <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DCDCDC]" />
              <Link
                href="/kennisbank/"
                className="text-xs text-[#9C9690] hover:text-[#6B6560] transition-colors duration-300 font-medium"
              >
                Kennisbank
              </Link>
              <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DCDCDC]" />
              <span className="text-xs text-[#6B6560] font-medium">
                {pillar}
              </span>
            </motion.nav>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.1,
              }}
            >
              <Badge className="mb-6">Kennisbank</Badge>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.2,
              }}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-[#1A1A1A] tracking-tighter leading-[1.05]"
            >
              {pillar}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.35,
              }}
              className="mt-5 text-base md:text-lg text-[#3D3A37] leading-relaxed max-w-[55ch]"
            >
              {description}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.32, 0.72, 0, 1],
                delay: 0.45,
              }}
              className="mt-8 h-px bg-[#E8E5E0] origin-left"
            />
          </div>
        </Container>
      </section>

      {/* Articles list */}
      <section className="relative bg-[#FDFCFA] py-32 md:py-44">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance mb-12">
              Artikelen
            </h2>
          </ScrollReveal>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.12}
          >
            {articles.map((article) => (
              <StaggerItem key={article.title}>
                <a href={article.href} className="group block h-full">
                  <div className="h-full rounded-2xl border border-[#E8E5E0] bg-[#FDFCFA] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#D9D4CE] hover:-translate-y-0.5 flex flex-col">
                    {/* Thumbnail placeholder */}
                    <div className="h-40 bg-[#F5F5F4] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F0F0] to-[#E8E8E8] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                    </div>

                    {/* Content */}
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <Badge variant="outline" className="self-start mb-3">
                        {pillar}
                      </Badge>

                      <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug group-hover:text-[#2A2A2A] transition-colors duration-300">
                        {article.title}
                      </h3>

                      <p className="mt-2 text-sm text-[#3D3A37] leading-relaxed line-clamp-2 flex-1">
                        {article.excerpt}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-[#9C9690] font-mono">
                          {article.date}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#F2F0ED] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#1A1A1A]">
                          <ArrowRight
                            weight="bold"
                            className="w-3 h-3 text-[#2A2A2A] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-white group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative bg-[#1A1A1A] py-32 md:py-44 overflow-hidden">
        <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#1A1A1A]" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-white text-balance">
                Klaar om het capaciteitsprobleem structureel op te lossen?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10">
                <Button
                  href="/aanvraag/"
                  variant="white"
                  size="lg"
                  icon="arrow-right"
                >
                  Neem contact op
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent" />
      </section>
    </>
  );
}
