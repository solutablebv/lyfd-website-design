"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CardSlider } from "@/components/ui/CardSlider";
import { Clock, BookOpen, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  category: string;
  href: string;
  image: string;
  readTime: string;
}

const articles: Article[] = [
  {
    title: "Wat kost capaciteitsgebrek een liftbedrijf echt?",
    description:
      "De verborgen kosten van te weinig monteurs: verloren contracten, uitloop en reputatieschade.",
    category: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wat-kost-capaciteitsgebrek",
    image: "/urban-lobby-liften.jpg",
    readTime: "8 min",
  },
  {
    title: "Wet DBA en de liftbranche",
    description:
      "Wat moet een liftbedrijf weten over de Wet DBA? Risico's, boetes en hoe CaaS het oplost.",
    category: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/wet-dba-liftbranche",
    image: "/urban-toren.jpg",
    readTime: "10 min",
  },
  {
    title: "CaaS vs. uitzendbureau: wat is het verschil?",
    description:
      "Op het eerste gezicht hetzelfde, fundamenteel anders. Een gedetailleerde vergelijking.",
    category: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/caas-vs-uitzendbureau",
    image: "/urban-atrium-lift.jpg",
    readTime: "7 min",
  },
  {
    title: "Zzp of capaciteitspartner: wat is verstandiger?",
    description:
      "De voor- en nadelen van zzp versus een capaciteitspartner als LYFD.",
    category: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/zzp-of-capaciteitspartner",
    image: "/lift-lichtinval.jpg",
    readTime: "9 min",
  },
  {
    title: "Welk CaaS-model past bij jou?",
    description:
      "Twee routes naar capaciteit: flexibel of vast. Ontdek welk model bij jouw bedrijf past.",
    category: "CaaS Uitgelegd",
    href: "/kennisbank/caas-uitgelegd/welk-caas-model",
    image: "/lift-deuren-industrieel.jpg",
    readTime: "6 min",
  },
  {
    title: "Wat verdient een liftmonteur in Nederland?",
    description:
      "Salaris in vast dienstverband, als zzp'er en via CaaS. Een eerlijke vergelijking.",
    category: "Liftmonteur Gids",
    href: "/kennisbank/liftmonteur-gids/salaris-liftmonteur",
    image: "/urban-straat.jpg",
    readTime: "12 min",
  },
  {
    title: "NEN 3140: wat is het en hoe behaal je het?",
    description:
      "Alles over de NEN 3140 certificering voor liftmonteurs. Eisen, kosten en hernieuwing.",
    category: "NEN Certificering",
    href: "/kennisbank/nen-certificering/nen-3140-uitleg",
    image: "/lift-staalkabels.jpg",
    readTime: "8 min",
  },
  {
    title: "OEM-certificeringen: KONE, Schindler, Otis",
    description:
      "Welke fabrikant-specifieke certificeringen zijn er en wat zijn de eisen?",
    category: "NEN Certificering",
    href: "/kennisbank/nen-certificering/oem-certificeringen",
    image: "/urban-wolkenkrabbers.jpg",
    readTime: "7 min",
  },
  {
    title: "Capaciteitsplanning voor servicecontracten",
    description:
      "Hoe plan je capaciteit wanneer je contractenportefeuille groeit?",
    category: "Capaciteitsmanagement",
    href: "/kennisbank/capaciteitsmanagement/capaciteitsplanning-servicecontracten",
    image: "/urban-plein-schaduwen.jpg",
    readTime: "9 min",
  },
];

function ArticleCard({ article }: { article: Article }) {
  return (
    <motion.div
      className="min-w-[320px] max-w-[320px] h-[420px] flex-shrink-0"
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
      }}
    >
      <Link href={article.href} className="group block h-full">
        <div className="h-full rounded-2xl border border-[#EBEBEB] bg-white overflow-hidden transition-all duration-500 hover:border-[#DCDCDC] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
          {/* Image */}
          <div className="relative h-44 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="320px"
              className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60" />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-medium bg-white/80 backdrop-blur-sm text-[#2A2A2A] border border-white/50">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col h-[calc(100%-11rem)] justify-between">
            <div>
              <h3 className="text-base font-semibold leading-snug tracking-tight text-[#1A1A1A] group-hover:text-[#2A2A2A] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed line-clamp-3">
                {article.description}
              </p>
            </div>

            <div className="pt-4 mt-auto border-t border-[#EBEBEB]/60 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-[#A0A0A0]">
                <BookOpen weight="regular" className="w-3.5 h-3.5" />
                <span>Kennisbank</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-[#A0A0A0] bg-[#F0F0F0] px-2.5 py-1 rounded-full">
                <Clock weight="regular" className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ArtikelenSlider() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <Badge className="mb-5">Kennisbank</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Verdiep je in de liftindustrie
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-[1.7] max-w-[55ch] mx-auto">
              Praktische artikelen over capaciteitsmanagement, certificering en
              het CaaS-model.
            </p>
          </div>
        </ScrollReveal>
      </Container>

      {/* Slider buiten Container voor full-width drag */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <CardSlider>
          {articles.map((article) => (
            <ArticleCard key={article.href} article={article} />
          ))}
        </CardSlider>
      </div>

      {/* Bekijk alle link */}
      <Container>
        <ScrollReveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/kennisbank/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors duration-300"
            >
              Bekijk alle artikelen
              <CaretRight weight="bold" className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
