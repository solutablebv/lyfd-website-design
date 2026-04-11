"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

interface RelatedArticle {
  title: string;
  pillar: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <>
      {/* Related Articles Section */}
      <section className="relative bg-white py-32 md:py-44">
        <Container>
          <div className="max-w-[720px] mx-auto xl:max-w-none">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1B1D1E] text-balance mb-10">
                Gerelateerde artikelen
              </h2>
            </ScrollReveal>

            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
              staggerDelay={0.1}
            >
              {articles.map((article) => (
                <StaggerItem key={article.title}>
                  <a href={article.href} className="group block h-full">
                    <div className="h-full rounded-3xl border border-[#DDDDDD] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#4928FD]/20 hover:-translate-y-0.5">
                      {/* Thumbnail placeholder */}
                      <div className="h-36 bg-[#F5F5F4] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F7F7] to-[#E8E8E8] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                      </div>

                      <div className="p-5">
                        <Badge variant="outline" className="mb-3">
                          {article.pillar}
                        </Badge>
                        <h3 className="text-base font-semibold text-[#1B1D1E] tracking-tight leading-snug group-hover:text-[#1B1D1E] transition-colors duration-300">
                          {article.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </Container>
      </section>

      {/* Dark CTA band */}
      <section className="relative bg-[#1B1D1E] py-32 md:py-44 overflow-hidden">
        {/* Top gradient blend */}
        <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#1B1D1E]" />

        {/* Subtle pattern overlay */}
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
                  href="/liftmonteurs/beschikbaarheid/"
                  variant="white"
                  size="lg"
                  icon="arrow-right"
                >
                  Vraag een gesprek aan
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Bottom gradient blend */}
        <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#1B1D1E] to-transparent" />
      </section>
    </>
  );
}
