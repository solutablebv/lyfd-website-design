"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Marquee } from "@/components/ui/Marquee";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const projecten = [
  {
    title: "Besturingsmodernisering",
    client: "Vertrouwelijk",
    location: "Rotterdam",
    year: "2025",
    description: "12 installaties, KONE besturing vervangen",
    image: "/lift-deuren-industrieel.jpg",
  },
  {
    title: "Complete renovatie",
    client: "Vertrouwelijk",
    location: "Amsterdam",
    year: "2025",
    description: "4 installaties, volledige modernisering inclusief deuren en besturing",
    image: "/lift-cabine-schacht.jpg",
  },
  {
    title: "Deurmodernisering",
    client: "Vertrouwelijk",
    location: "Utrecht",
    year: "2026",
    description: "8 installaties, complete deursets vervangen",
    image: "/lift-schacht-boven.jpg",
  },
  {
    title: "CAN-OPEN upgrade",
    client: "Vertrouwelijk",
    location: "Den Haag",
    year: "2026",
    description: "6 installaties, merkonafhankelijke besturingsupgrade",
    image: "/lift-lichtinval.jpg",
  },
  {
    title: "Hydraulisch naar MRL",
    client: "Vertrouwelijk",
    location: "Eindhoven",
    year: "2026",
    description: "3 installaties, conversie van hydraulisch naar MRL",
    image: "/lift-schacht-trap.jpg",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projecten)[number];
}) {
  return (
    <div className="w-72 flex-shrink-0 rounded-2xl border border-[#EBEBEB] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
          sizes="288px"
        />
      </div>
      <div className="p-5">
        <h3 className="text-sm font-semibold text-[#1A1A1A] tracking-tight leading-snug text-balance">
          {project.title}
        </h3>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="text-xs font-mono text-[#A0A0A0]">
            {project.location}
          </span>
          <span className="text-xs text-[#DCDCDC]">/</span>
          <span className="text-xs font-mono text-[#A0A0A0]">
            {project.year}
          </span>
        </div>
        <p className="mt-3 text-sm text-[#404040] leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export function ProjectenSlider() {
  return (
    <section className="relative bg-white py-32 md:py-44 overflow-hidden">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Track record</Badge>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A] text-balance">
              Projecten die ons voorgingen
            </h2>
          </ScrollReveal>
        </div>
      </Container>

      {/* Marquee slider (full width) */}
      <ScrollReveal delay={0.2}>
        <div className="mt-14 md:mt-20">
          <Marquee pauseOnHover duration="40s" gap="1.5rem">
            {projecten.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </Marquee>
        </div>
      </ScrollReveal>

      <Container>
        <ScrollReveal delay={0.3}>
          <p className="mt-10 text-center text-xs text-[#A0A0A0] leading-relaxed">
            Klantnamen worden op verzoek gedeeld tijdens een persoonlijk gesprek.
          </p>
        </ScrollReveal>
      </Container>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
