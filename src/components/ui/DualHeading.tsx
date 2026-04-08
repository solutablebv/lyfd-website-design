interface DualHeadingProps {
  bold: string;
  italic: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "hero" | "section" | "subsection";
}

export function DualHeading({
  bold,
  italic,
  as: Tag = "h2",
  className,
  size = "section",
}: DualHeadingProps) {
  const sizeClasses = {
    hero: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    section: "text-3xl sm:text-4xl md:text-5xl",
    subsection: "text-2xl sm:text-3xl md:text-4xl",
  };

  return (
    <Tag className={`${sizeClasses[size]} leading-[1.05] tracking-[-0.02em] text-[#1B1D1E] text-balance ${className || ""}`}>
      <span className="font-bold block">{bold}</span>
      <span className="font-normal italic block" style={{ fontFamily: "var(--font-serif), serif", letterSpacing: "-0.03em" }}>
        {italic}
      </span>
    </Tag>
  );
}
