import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker, Section } from "@/components/section";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/repertorio")({
  head: () =>
    pageMeta(
      "Repertório de Karaokê — músicas nacionais e internacionais | Disco Laser",
      "Repertório do karaokê Disco Laser. Baixe o PDF nacional e o PDF internacional, ou abra o buscador completo.",
    ),
  component: RepertorioPage,
});

export function RepertorioPage() {
  return (
    <main>
      <Section className="pt-14 sm:pt-20">
        <Kicker>Karaokê 41</Kicker>
        <h1 className="font-display mt-2 text-display">Repertório</h1>
        <p className="mt-4 max-w-2xl text-muted">
          O acervo completo — mais de 10 mil faixas — está no buscador e nos
          PDFs nacional e internacional.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild>
            <a href={SITE.catalogApp} target="_blank" rel="noopener noreferrer">
              Abrir buscador completo
              <ExternalLink className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={SITE.nacionalPdf} target="_blank" rel="noopener noreferrer">
              PDF nacional
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={SITE.internacionalPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              PDF internacional
            </a>
          </Button>
        </div>
      </Section>
    </main>
  );
}
