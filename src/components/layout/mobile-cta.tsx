import { Phone } from "lucide-react";
import { LeadLink } from "@/components/lead-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border pb-[env(safe-area-inset-bottom)] md:hidden">
      <LeadLink
        channel="phone"
        className="flex h-14 items-center justify-center gap-2 bg-elevated text-sm font-medium text-foreground"
      >
        <Phone className="size-4 text-gold" />
        Ligar
      </LeadLink>
      <LeadLink
        channel="whatsapp"
        text={`Olá, vim pelo anúncio e quero orçamento da Disco Laser. Tel ${SITE.phone}`}
        className="flex h-14 items-center justify-center gap-2 bg-whatsapp text-sm font-medium text-whatsapp-foreground"
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
      </LeadLink>
    </div>
  );
}
