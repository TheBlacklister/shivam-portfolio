import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300",
        "transition-colors duration-300 hover:border-line-strong hover:bg-white/[0.06] hover:text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
