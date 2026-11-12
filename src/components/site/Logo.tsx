import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="100 128 300 240" className={cn("h-6 w-auto", className)} aria-hidden="true">
      <polygon points="108,200 168,200 138,252" className="fill-primary" />
      <polygon points="156,283 186,230 232,312 203,360" fill="currentColor" opacity="0.9" />
      <polygon points="330,137 390,137 265,360 203,360" className="fill-primary" />
    </svg>
  );
}

export function Logo({ className, subtle }: { className?: string; subtle?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className="text-[15px] font-bold tracking-tight">VELLAR</span>
        <span className={cn("text-[11px] font-medium tracking-wide", subtle ? "opacity-60" : "opacity-70")}>
          Soluções
        </span>
      </span>
    </span>
  );
}
