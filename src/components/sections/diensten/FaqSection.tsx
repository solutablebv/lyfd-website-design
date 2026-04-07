"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Plus } from "@phosphor-icons/react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  items: FaqItem[];
  closingText?: string;
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="border-b border-[#E8E5E0] last:border-b-0">
        <button
          onClick={onToggle}
          className="group flex items-start justify-between w-full py-6 md:py-7 text-left cursor-pointer"
          aria-expanded={isOpen}
        >
          <span className="text-lg font-semibold text-[#1A1A1A] tracking-tight pr-8 leading-snug">
            {item.question}
          </span>
          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-[#F2F0ED] flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-[#E5E0DA]">
            <Plus
              weight="bold"
              className={`w-3.5 h-3.5 text-[#6B6560] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:text-[#2A2A2A] ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
                opacity: { duration: 0.3, ease: [0.32, 0.72, 0, 1] },
              }}
              className="overflow-hidden"
            >
              <p className="pb-6 md:pb-7 text-sm md:text-base text-[#3D3A37] leading-relaxed max-w-[65ch]">
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function FaqSection({ title, items, closingText }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-[#FDFCFA] py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#FDFCFA] to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14 md:mb-20">
              <Badge className="mb-5">Veelgestelde vragen</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
                {title}
              </h2>
            </div>
          </ScrollReveal>

          <div>
            {items.map((item, index) => (
              <FaqAccordionItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>

          {closingText && (
            <ScrollReveal delay={0.2}>
              <p className="mt-12 md:mt-16 text-sm text-[#9C9690] leading-relaxed text-center max-w-[60ch] mx-auto font-mono">
                {closingText}
              </p>
            </ScrollReveal>
          )}
        </div>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
