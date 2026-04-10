"use client";

import { Container } from "@/components/ui/Container";
import { ArticleBody } from "./ArticleBody";
import { ArticleSidebar } from "./ArticleSidebar";
import { ArtikelCTA } from "./ArtikelCTA";

const tocItems = [
  { id: "zichtbare-kosten", label: "De zichtbare kosten" },
  { id: "onzichtbare-kosten", label: "De onzichtbare kosten" },
  { id: "rekenvoorbeeld", label: "Een rekenvoorbeeld" },
  { id: "caas-verandert", label: "Hoe CaaS het verandert" },
];

export function ArticleLayout() {
  return (
    <section className="relative bg-white pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          {/* Article content */}
          <article className="w-full max-w-[720px]">
            <ArticleBody />

            {/* Article conversion CTA */}
            <ArtikelCTA variant="technisch" />
          </article>

          {/* Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <ArticleSidebar items={tocItems} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
