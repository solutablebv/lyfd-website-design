"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { DualHeading } from "@/components/ui/DualHeading";
import { Marquee } from "@/components/ui/Marquee";

const leadership = [
  {
    name: "Peter Koenhen",
    role: "Oprichter",
    bio: "5 jaar in de liftbranche. Bouwde LYFD vanuit de overtuiging dat het anders moet.",
    color: "bg-[#EDE8FF]",
  },
  {
    name: "Joppe Erkelens",
    role: "Sales & Contractmanagement",
    bio: "Eerste aanspreekpunt voor opdrachtgevers. Reageert sneller dan een storing gemeld wordt.",
    color: "bg-[#E0EAFF]",
  },
  {
    name: "Gydo Broos",
    role: "CTO",
    bio: "Bouwt het platform dat monteurs echt willen gebruiken.",
    color: "bg-[#FFE4E4]",
  },
];

const teamMembers = [
  { name: "Jarno de Kock", role: "Technisch Specialist" },
  { name: "Jasvir Singh", role: "Sr Servicemonteur Liften" },
  { name: "Sander Viet", role: "Medior Servicemonteur Liften" },
  { name: "Justin Kort", role: "Jr Servicemonteur Liften" },
  { name: "Randy Janssen", role: "Jr Servicemonteur Liften" },
  { name: "Nordin Bos", role: "Moderniseringsmonteur" },
  { name: "Danny Boshamer", role: "Jr Servicemonteur Liften" },
  { name: "Jerry Groenenstein", role: "Projectleider Modernisering" },
];

const allMembers = [
  ...leadership.map((l) => ({ name: l.name, role: l.role })),
  ...teamMembers,
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export function OprichterSection() {
  return (
    <section id="team" className="relative bg-white py-32 md:py-44">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Het team</Badge>
            <DualHeading bold="De mensen achter" italic="LYFD" />
            <p className="mt-5 text-sm md:text-base text-[#888888] leading-relaxed max-w-[52ch] mx-auto">
              LYFD groeit. Ons team combineert liftbranche-ervaring met
              technologie en operationele kennis.
            </p>
          </ScrollReveal>
        </div>

        {/* Leadership grid */}
        <StaggerContainer
          className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          staggerDelay={0.1}
        >
          {leadership.map((leader) => (
            <StaggerItem key={leader.name}>
              <div
                className={`h-full rounded-3xl ${leader.color} p-7 md:p-8 flex flex-col items-center text-center`}
              >
                <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold font-mono text-[#4928FD] tracking-tight select-none">
                    {getInitials(leader.name)}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#1B1D1E] tracking-tight">
                  {leader.name}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#888888] uppercase tracking-[0.15em]">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm text-[#333333] leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Team grid */}
        <StaggerContainer
          className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          staggerDelay={0.08}
        >
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <div className="rounded-3xl bg-[#F7F7F7] p-5 md:p-6 flex flex-col items-center text-center transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-base font-bold font-mono text-[#888888] tracking-tight select-none">
                    {getInitials(member.name)}
                  </span>
                </div>
                <p className="mt-4 text-sm font-semibold text-[#1B1D1E] tracking-tight">
                  {member.name}
                </p>
                <p className="mt-1 text-xs text-[#888888]">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      {/* Team marquee slider */}
      <ScrollReveal delay={0.2}>
        <div className="relative mt-16 md:mt-24">
          {/* Edge fades */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover duration="40s">
            {allMembers.map((member) => (
              <div key={member.name} className="w-48 flex-shrink-0">
                <div className="h-56 rounded-2xl bg-[#F7F7F7] flex items-center justify-center">
                  <span className="text-3xl font-bold font-mono text-[#DDDDDD] tracking-tight select-none">
                    {getInitials(member.name)}
                  </span>
                </div>
                <div className="mt-2.5 px-1">
                  <p className="text-[#1B1D1E] font-semibold tracking-tight text-xs">
                    {member.name}
                  </p>
                  <p className="text-[#888888] text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </ScrollReveal>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F7F7F7]" />
    </section>
  );
}
