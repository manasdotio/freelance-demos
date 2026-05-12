import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary mb-4",
        className
      )}
    >
      {children}
    </span>
  );
}
