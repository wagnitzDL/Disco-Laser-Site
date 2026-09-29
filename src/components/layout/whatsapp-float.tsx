import { LeadLink } from "@/components/lead-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <LeadLink
      channel="whatsapp"
      className="fixed right-4 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-150 hover:scale-105 active:scale-95 md:flex"
    >
      <span className="sr-only">Falar no WhatsApp</span>
      <WhatsAppIcon className="size-7" />
    </LeadLink>
  );
}