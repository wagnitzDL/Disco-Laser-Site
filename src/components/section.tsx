import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-kicker font-medium tracking-[0.18em] text-gold uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-16 sm:px-6 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function PageHero({
  kicker,
  title,
  lead,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative isolate min-h-[70vh] overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/25" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6">
        <Kicker className="rise-in">{kicker}</Kicker>
        <h1
          className="font-display rise-in mt-3 max-w-4xl text-display text-foreground"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        <p
          className="rise-in mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "140ms" }}
        >
          {lead}
        </p>
      </div>
    </section>
  );
}
