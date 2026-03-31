"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { ArrowRight } from "@phosphor-icons/react";
import {
  Gear,
  Buildings,
  CraneTower,
  Stack,
} from "@phosphor-icons/react";
import Image from "next/image";

const services = [
  {
    icon: Gear,
    title: "Service en onderhoud",
    description:
      "Routes die door moeten gaan, storingen die niet kunnen wachten. Wij leveren binnen 48 uur.",
    href: "/diensten/liftonderhoud-capaciteit",
    span: "large",
    bgImage: "/service-shaft.jpg",
  },
  {
    icon: Buildings,
    title: "Lift modernisering",
    description:
      "Vaste opleverdatum. Combiteams. Vervangingsgarantie. Modernisering zonder uitvalrisico.",
    href: "/diensten/lift-modernisering",
    span: "small",
    bgImage: "/modern-door.jpg",
  },
  {
    icon: CraneTower,
    title: "Nieuwbouw projecten",
    description:
      "Van funderingsbouw tot oplevering. Gekwalificeerde monteurs voor de volledige nieuwbouwfase.",
    href: "/diensten/nieuwbouw-projecten",
    span: "small",
    bgImage: "/construction-site.jpg",
  },
  {
    icon: Stack,
    title: "Capacity as a Service",
    description:
      "Het model achter LYFD uitgelegd, en waarom het beter werkt dan zzp of uitzendbureau.",
    href: "/diensten/capacity-as-a-service",
    span: "full",
    bgImage: "/network-nodes.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="diensten" className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl">
          <ScrollReveal>
            <Badge className="mb-5">Diensten</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Waarvoor zet je LYFD in?
            </h2>
          </ScrollReveal>
        </div>

        {/* Asymmetric Services Grid */}
        <StaggerContainer
          className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-4"
          staggerDelay={0.1}
        >
          {/* Row 1: Large (7col) + Small (5col) */}
          <StaggerItem className="md:col-span-7">
            <ServiceCard service={services[0]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-5">
            <ServiceCard service={services[1]} />
          </StaggerItem>

          {/* Row 2: Small (5col) + Large (7col) with featured */}
          <StaggerItem className="md:col-span-5">
            <ServiceCard service={services[2]} />
          </StaggerItem>
          <StaggerItem className="md:col-span-7">
            <ServiceCard service={services[3]} featured />
          </StaggerItem>
        </StaggerContainer>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

function ServiceCard({
  service,
  featured = false,
}: {
  service: (typeof services)[number];
  featured?: boolean;
}) {
  const Icon = service.icon;

  return (
    <a
      href={service.href}
      className="group block h-full"
    >
      <div
        className={`relative h-full rounded-2xl bg-white border transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden ${
          featured
            ? "p-8 md:p-10 flex flex-col md:flex-row md:items-center md:gap-10 border-[#DCDCDC] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-[#C0C0C0]"
            : "p-6 md:p-8 border-[#EBEBEB] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-[#DCDCDC]"
        } hover:-translate-y-1`}
      >
        {/* Decorative background image */}
        {service.bgImage && (
          <div
            className="absolute inset-0 opacity-[0.18] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-[0.28] group-hover:-translate-y-1 pointer-events-none"
            aria-hidden="true"
            style={{
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 75%)",
            }}
          >
            <Image
              src={service.bgImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover grayscale contrast-[1.05] brightness-[1.1]"
              loading="lazy"
            />
          </div>
        )}

        {/* Subtle background shift on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F8F8]/0 to-[#F0F0F0]/0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:from-[#FAFAFA] group-hover:to-[#F5F5F5]/50 pointer-events-none" />

        <div className={`relative ${featured ? "flex-1" : ""}`}>
          <div className="w-12 h-12 rounded-2xl bg-[#F0F0F0] flex items-center justify-center mb-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-[#EBEBEB]">
            <Icon weight="light" className="w-6 h-6 text-[#2A2A2A]" />
          </div>

          <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-tight">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-[#404040] leading-relaxed max-w-[45ch]">
            {service.description}
          </p>
        </div>

        <div
          className={`relative flex items-center gap-2 text-sm font-medium text-[#2A2A2A] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:gap-4 ${
            featured ? "mt-6 md:mt-0" : "mt-6"
          }`}
        >
          <span>Meer over {service.title.toLowerCase().split(" ")[0]}</span>
          <ArrowRight
            weight="bold"
            className="w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-2"
          />
        </div>
      </div>
    </a>
  );
}
