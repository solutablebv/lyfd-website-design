"use client";

import { Container } from "@/components/ui/Container";
import { ArticleBody } from "./ArticleBody";
import { ArticleSidebar } from "./ArticleSidebar";

const tocItems = [
  { id: "zichtbare-kosten", label: "De zichtbare kosten" },
  { id: "onzichtbare-kosten", label: "De onzichtbare kosten" },
  { id: "rekenvoorbeeld", label: "Een rekenvoorbeeld" },
  { id: "caas-verandert", label: "Hoe CaaS het verandert" },
];

export function ArticleLayout() {
  return (
    <section className="relative bg-[#FDFCFA] pb-20 md:pb-28">
      <Container>
        <div className="relative flex justify-center gap-16">
          {/* Article content */}
          <article className="w-full max-w-[720px]">
            <ArticleBody />

            {/* Article closing CTA */}
            <div className="mt-16 rounded-2xl bg-[#F5F3F0] border border-[#E8E5E0] p-7 md:p-8">
              <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                Wil je weten wat capaciteitsgebrek jouw bedrijf kost?
              </p>
              <p className="mt-2 text-sm text-[#3D3A37] leading-relaxed max-w-[50ch]">
                Neem contact op. Wij rekenen het samen door.
              </p>
              <a
                href="/aanvraag/"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] hover:text-[#2A2A2A] transition-colors duration-300"
              >
                Plan een gesprek
                <span className="text-[#9C9690]">&rarr;</span>
              </a>
            </div>
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
