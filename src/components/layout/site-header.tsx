import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { QuoteDialog } from "@/components/quote-dialog";
import { NAV } from "@/lib/site";
import { LeadLink } from "@/components/lead-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { cn } from "@/lib/utils";

function NavLinks({
  onClick,
  stacked = false,
}: {
  onClick?: () => void;
  stacked?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav
      aria-label="Principal"
      className={cn(
        stacked ? "flex flex-col gap-1" : "hidden items-center gap-6 md:flex",
      )}
    >
      {NAV.map((item) => {
        const active =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);
        const link = (
          <Link
            to={item.href}
            onClick={onClick}
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-150",
              stacked ? "rounded-md px-3 py-3" : "",
              active ? "text-gold" : "text-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
        return stacked ? (
          <SheetClose asChild key={item.href}>
            {link}
          </SheetClose>
        ) : (
          <span key={item.href}>{link}</span>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" aria-label="Disco Laser — início" className="shrink-0">
          <img
            src="/images/logo.png"
            alt="Discolaser"
            className="h-10 w-auto outline-none sm:h-11"
          />
        </Link>
        <NavLinks />
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="whatsapp"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <LeadLink channel="whatsapp">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </LeadLink>
          </Button>
          <QuoteDialog
            trigger={
              <Button size="sm" className="hidden md:inline-flex">
                Orçamento
              </Button>
            }
          />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <img
                src="/images/logo.png"
                alt="Discolaser"
                width={2685}
                height={901}
                className="mb-8 h-11 w-auto max-w-full shrink-0 self-start object-contain outline-none"
              />
              <NavLinks stacked onClick={() => setOpen(false)} />
              <div className="mt-8 grid gap-2">
                <QuoteDialog
                  trigger={<Button className="w-full">Pedir orçamento</Button>}
                />
                <Button asChild variant="whatsapp" className="w-full">
                  <LeadLink channel="whatsapp">
                    <WhatsAppIcon className="size-4" />
                    WhatsApp
                  </LeadLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
