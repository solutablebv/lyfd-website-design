import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "dark" | "outline" | "accent";
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
          "bg-[#F2F0ED] text-[#2A2A2A]",
        variant === "dark" &&
          "bg-white/10 text-white/80 border border-white/15",
        variant === "outline" &&
          "bg-transparent text-[#6B6560] border border-[#E8E5E0]",
        variant === "accent" &&
          "bg-[#F5EDE6] text-[#7D5A3C]",
        className
      )}
    >
      {children}
    </span>
  );
}
