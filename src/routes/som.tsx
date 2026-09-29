import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
import { Kicker, PageHero, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { LeadLink } from "@/components/lead-link";
import { jsonLdScript, pageMeta, serviceLd } from "@/lib/seo";
import { RegionStrip } from "@/components/region-strip";

export const Route = createFileRoute("/som")({
  head: () => ({
    ...pageMeta(
      "Locação de Equipamentos de Som em Itajaí e SC | Disco Laser",
      "Aluguel de caixas ativas Electro-Voice, JBL, line array Frahm e MAK e microfones sem fio em Itajaí, Balneário Camboriú, Camboriú e Santa Catarina.",
    ),
    scripts: [
      jsonLdScript(
        serviceLd(
          "Locação de equipamentos de som",
          "Aluguel de PA, line array e microfones sem fio para eventos em Santa Catarina, com entrega e montagem.",
        ),
      ),
    ],
  }),
  component: SomPage,
});

const GEAR = [
  {
    name: "Caixa ativa Electro-Voice ZX15",
    spec: "1000 W",
    img: "/images/som-ev.jpg",
  },
  {
    name: "Caixa ativa JBL JS15BT",
    spec: "15\" · 200 W RMS",
    img: "/images/som-jbl.jpg",
  },
  {
    name: "Line vertical Frahm GRT12",
    spec: "500 W",
    img: "/images/som-grt12.jpg",
  },
  {
    name: "Line vertical MAK PRO 12\"",
    spec: "MK-CA4.8SW12.1K · 500 W",
    img: "/images/som-mak.jpg",
  },
];

const MICS = [
  "Microfone sem fio duplo Arcano BB2 cardioide",
  "Microfone sem fio duplo Dylan D-9000 Power",
  "Microfone sem fio AKG WMS 40 Pro — único ou duplo",
];

function SomPage() {
  return (
    <main>
      <PageHero
        kicker="Equipamentos de som"
        title="Locação de som para eventos em SC"
        lead="Caixas ativas, line array e microfones sem fio para evento, bar e cerimônia em Itajaí, Balneário Camboriú, Camboriú e região. Montagem inclusa."
        image="/images/servico-som.jpg"
        imageAlt="Caixas de som profissionais em palco"
      />

      <Section>
        <Kicker>Caixas e line</Kicker>
        <h2 className="font-display mt-2 text-4xl sm:text-5xl">
          Equipamentos para locação
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {GEAR.map((g) => (
            <li
              key={g.name}
              className="overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(244,237,228,0.08)]"
            >
              <img
                src={g.img}
                alt={g.name}
                className="aspect-[3/4] w-full bg-[#14110e] object-contain"
              />
              <div className="p-5">
                <p className="text-kicker tracking-[0.16em] text-gold uppercase">
                  {g.spec}
                </p>
                <h3 className="mt-1 text-lg font-medium">{g.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-card">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Microfones</Kicker>
            <h2 className="font-display mt-2 text-4xl">Sem fio, único ou duplo</h2>
            <ul className="mt-6 grid gap-3 text-sm text-muted">
              {MICS.map((m) => (
                <li key={m} className="border-l border-gold/40 pl-4">
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Também locamos TVs de 58\", 40\" e 32\" junto com o som, se a
              festa pedir imagem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog
                defaultService="Equipamentos de som"
                trigger={<Button size="lg">Pedir orçamento</Button>}
              />
              <Button asChild variant="whatsapp" size="lg">
                <LeadLink
                  channel="whatsapp"
                  text="Olá, Disco Laser. Gostaria de alugar equipamentos de som"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </LeadLink>
              </Button>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl bg-elevated">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/egA8-DIFhMw"
              title="Vídeo dos equipamentos de som Disco Laser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
      <Section>
        <RegionStrip service="som" />
      </Section>
    </main>
  );
}
