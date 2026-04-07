"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";

interface ArticleHeaderProps {
  pillar: string;
  pillarHref: string;
  title: string;
  date: string;
  readTime: string;
  author: string;
}

export function ArticleHeader({
  pillar,
  pillarHref,
  title,
  date,
  readTime,
  author,
}: ArticleHeaderProps) {
  return (
    <section className="relative bg-[#FDFCFA] pt-36 md:pt-44 pb-12 md:pb-16">
      {/* Top gradient (seamless header blend) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FDFCFA] to-transparent z-[2] pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-[720px] mx-auto">
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
            <Link
              href={pillarHref}
              className="text-xs text-[#9C9690] hover:text-[#6B6560] transition-colors duration-300 font-medium"
            >
              {pillar}
            </Link>
            <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DCDCDC]" />
            <span className="text-xs text-[#6B6560] font-medium">Artikel</span>
          </motion.nav>

          {/* Pillar Badge */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.1,
            }}
          >
            <Badge variant="outline" className="mb-6">
              {pillar}
            </Badge>
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tighter leading-[1.05] text-balance"
          >
            {title}
          </motion.h1>

          {/* Meta line */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.32, 0.72, 0, 1],
              delay: 0.35,
            }}
            className="mt-6 flex items-center gap-3 text-sm text-[#9C9690]"
          >
            <span className="font-mono text-xs">{date}</span>
            <span className="w-1 h-1 rounded-full bg-[#DCDCDC]" />
            <span className="font-mono text-xs">{readTime}</span>
            <span className="w-1 h-1 rounded-full bg-[#DCDCDC]" />
            <span className="text-xs">
              Door{" "}
              <span className="text-[#6B6560] font-medium">{author}</span>
            </span>
          </motion.div>

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
  );
}
