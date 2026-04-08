"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react";

interface ServiceHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  ctaText: string;
  ctaHref: string;
  breadcrumbLabel: string;
  videoSrc?: string;
  imageSrc?: string;
}

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  intro,
  ctaText,
  ctaHref,
  breadcrumbLabel,
  videoSrc,
  imageSrc,
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[85dvh] bg-white overflow-hidden flex items-center">
      {/* Background video (cropped tighter, shifted right) */}
      {videoSrc && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="relative w-full h-full"
            style={{
              maskImage: `
                radial-gradient(ellipse 45% 45% at 68% 50%, black 15%, transparent 58%)
              `,
              WebkitMaskImage: `
                radial-gradient(ellipse 45% 45% at 68% 50%, black 15%, transparent 58%)
              `,
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Background image (same masking as video) */}
      {imageSrc && !videoSrc && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="relative w-full h-full"
            style={{
              maskImage: `
                radial-gradient(ellipse 45% 45% at 68% 50%, black 15%, transparent 58%)
              `,
              WebkitMaskImage: `
                radial-gradient(ellipse 45% 45% at 68% 50%, black 15%, transparent 58%)
              `,
            }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center opacity-50"
              priority
            />
          </div>
        </div>
      )}

      {/* Top gradient (seamless header blend) */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      {/* Bottom gradient (seamless section transition) */}
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent z-[2] pointer-events-none" />

      <Container className="relative z-10 py-32 md:py-0" style={{ textShadow: '0 1px 8px rgba(255,255,255,0.9), 0 0 30px rgba(255,255,255,0.5)' }}>
        <div className="max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
            className="flex items-center gap-1.5 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-xs text-[#888888] hover:text-[#888888] transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DDDDDD]" />
            <span className="text-xs text-[#888888] font-medium">Diensten</span>
            <CaretRight weight="bold" className="w-2.5 h-2.5 text-[#DDDDDD]" />
            <span className="text-xs text-[#888888] font-medium">
              {breadcrumbLabel}
            </span>
          </motion.nav>

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.25 }}
          >
            <Badge variant="outline" className={(videoSrc || imageSrc) ? "bg-white/80 backdrop-blur-sm border-[#DDDDDD] mb-6" : "mb-6"}>
              {eyebrow}
            </Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.35 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#1B1D1E] tracking-tighter leading-[1.05]"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1], delay: 0.5 }}
            className="mt-5 text-base md:text-lg text-[#1B1D1E] font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.6 }}
            className="mt-4 text-sm md:text-base text-[#333333] leading-[1.8] max-w-[640px]"
          >
            {intro}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.7 }}
            className="mt-10"
          >
            <Button href={ctaHref} variant="primary" size="lg" icon="arrow-right">
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
