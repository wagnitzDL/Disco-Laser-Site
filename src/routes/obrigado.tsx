import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LeadLink } from "@/components/lead-link";
import { Kicker, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { trackLead } from "@/lib/ads";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Pedido enviado | Disco Laser" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThanksPage,
});

function ThanksPage() {
  useEffect(() => {
    trackLead("form", { conversion: true });
  }, []);

  return (
    <main>
      <Section className="pt-20 sm:pt-28">
        <Kicker>Disco Laser</Kicker>
        <h1 className="font-display mt-2 max-w-2xl text-display">
          Orçamento a caminho
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          O WhatsApp da Disco Laser deve ter aberto em outra aba. Se não
          abriu, toque no botão. Telefone {SITE.phone}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="whatsapp" size="lg">
            <LeadLink channel="whatsapp" text="Olá, acabei de pedir um orçamento no site da Disco Laser">
              <WhatsAppIcon className="size-4" />
              Abrir WhatsApp
            </LeadLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/">Voltar ao início</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
