import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "outline" | "accent" | "pastel-lilac" | "pastel-pink" | "pastel-blue" | "pastel-peach";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium",
        variant === "default" &&
          "bg-[#F7F7F7] text-[#1B1D1E]",
        variant === "dark" &&
          "bg-white/10 text-white/80 border border-white/15",
        variant === "outline" &&
          "bg-transparent text-[#888888] border border-[#DDDDDD]",
        variant === "accent" &&
          "bg-[#EDE8FF] text-[#4928FD]",
        variant === "pastel-lilac" &&
          "bg-[#EDE8FF] text-[#4928FD]",
        variant === "pastel-pink" &&
          "bg-[#FFE4E4] text-[#1B1D1E]",
        variant === "pastel-blue" &&
          "bg-[#E0EAFF] text-[#1B1D1E]",
        variant === "pastel-peach" &&
          "bg-[#FFE8E0] text-[#1B1D1E]",
        className
      )}
    >
      {children}
    </span>
  );
}
