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
      <section className="relative bg-white py-20 md:py-28">
        <Container>
          <div className="max-w-[720px] mx-auto xl:max-w-none">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-[#1A1A1A] mb-10">
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
                    <div className="h-full rounded-2xl border border-[#EBEBEB] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC] hover:-translate-y-0.5">
                      {/* Thumbnail placeholder */}
                      <div className="h-36 bg-[#F5F5F4] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F0F0] to-[#E8E8E8] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" />
                      </div>

                      <div className="p-5">
                        <Badge variant="outline" className="mb-3">
                          {article.pillar}
                        </Badge>
                        <h3 className="text-base font-semibold text-[#1A1A1A] tracking-tight leading-snug group-hover:text-[#2A2A2A] transition-colors duration-300">
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
      <section className="relative bg-[#1A1A1A] py-24 md:py-32 overflow-hidden">
        {/* Top gradient blend */}
        <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#1A1A1A]" />

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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] text-white">
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
                  Plan een capaciteitsgesprek
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Bottom gradient blend */}
        <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-[#1A1A1A] to-transparent" />
      </section>
    </>
  );
}
