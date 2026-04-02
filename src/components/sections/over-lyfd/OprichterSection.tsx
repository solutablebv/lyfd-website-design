"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Marquee } from "@/components/ui/Marquee";

const teamMembers = [
  {
    image: "/team/peter-koenhen.jpg",
    name: "Peter Koenhen",
    role: "Oprichter",
  },
  {
    image: "/team/joppe-erkelens.jpg",
    name: "Joppe Erkelens",
    role: "Sales & Contractmanagement",
  },
  {
    image: "/team/arwin-groenenberg.jpg",
    name: "Arwin Groenenberg",
    role: "Opleiding & Ontwikkeling",
  },
  {
    image: "/team/gydo-broos.jpg",
    name: "Gydo Broos",
    role: "CTO",
  },
  {
    image: "/team/jarno-de-kock.jpg",
    name: "Jarno de Kock",
    role: "Technisch Specialist",
  },
  {
    image: "/team/jasvir-singh.jpg",
    name: "Jasvir Singh",
    role: "Sr Servicemonteur Liften",
  },
  {
    image: "/team/sander-viet.jpg",
    name: "Sander Viet",
    role: "Medior Servicemonteur Liften",
  },
  {
    image: "/team/justin-kort.jpg",
    name: "Justin Kort",
    role: "Jr Servicemonteur Liften",
  },
  {
    image: "/team/randy-janssen.jpg",
    name: "Randy Janssen",
    role: "Jr Servicemonteur Liften",
  },
  {
    image: "/team/nordin-bos.jpg",
    name: "Nordin Bos",
    role: "Moderniseringsmonteur",
  },
  {
    image: "/team/danny-boshamer.jpg",
    name: "Danny Boshamer",
    role: "Jr Servicemonteur Liften",
  },
  {
    image: "/team/jerry-groenenstein.jpg",
    name: "Jerry Groenenstein",
    role: "Projectleider Modernisering",
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

function TeamCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <div className="w-60 flex-shrink-0">
      <div className="h-80 rounded-2xl bg-[#F0F0F0] overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-[#E8E8E8]">
          <span className="text-4xl font-bold font-mono text-[#A0A0A0] tracking-tight select-none">
            {getInitials(member.name)}
          </span>
        </div>
      </div>
      <div className="mt-3 px-1">
        <p className="text-[#1A1A1A] font-semibold tracking-tight text-sm">
          {member.name}
        </p>
        <p className="text-[#6B6B6B] text-sm">{member.role}</p>
      </div>
    </div>
  );
}

export function OprichterSection() {
  return (
    <section className="relative bg-white py-28 md:py-36">
      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <Badge className="mb-5">Het team</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-[1.05] text-[#1A1A1A]">
              De mensen achter LYFD
            </h2>
            <p className="mt-5 text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-[52ch] mx-auto">
              LYFD groeit. Ons team combineert liftbranche-ervaring met
              technologie en operationele kennis.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 md:mt-18 rounded-2xl bg-[#F8F8F8] border border-[#EBEBEB] p-10 md:p-14">
              <div className="flex flex-col items-center gap-6">
                {/* Avatar met initialen */}
                <div className="w-20 h-20 rounded-full bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl font-bold tracking-tight font-mono">
                    PK
                  </span>
                </div>

                <div className="text-center">
                  <p className="text-lg font-semibold text-[#1A1A1A] tracking-tight">
                    Peter Koenhen
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#6B6B6B] uppercase tracking-[0.15em]">
                    Oprichter
                  </p>
                  <p className="mt-5 text-sm md:text-base text-[#404040] leading-[1.75] max-w-[52ch] mx-auto">
                    Vijf jaar actief in de liftbranche. Zag van binnenuit dat het
                    capaciteitsprobleem structureel was, en dat de bestaande
                    oplossingen (zzp, uitzendbureau) het niet oplosten. LYFD is
                    het antwoord.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Team marquee slider */}
      <ScrollReveal delay={0.25}>
        <div className="relative mt-20 md:mt-28">
          {/* Edge fades */}
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover duration="35s">
            {teamMembers.map((member) => (
              <TeamCard key={member.role} member={member} />
            ))}
          </Marquee>
        </div>
      </ScrollReveal>

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#F8F8F8]" />
    </section>
  );
}
