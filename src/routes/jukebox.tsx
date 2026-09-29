import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
import { Kicker, PageHero, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { LeadLink } from "@/components/lead-link";
import { jsonLdScript, pageMeta, serviceLd } from "@/lib/seo";
import { RegionStrip } from "@/components/region-strip";

export const Route = createFileRoute("/jukebox")({
  head: () => ({
    ...pageMeta(
      "Aluguel de Jukebox para Bares em Itajaí, BC e SC | Disco Laser",
      "Máquina de música para bares em Itajaí, Balneário Camboriú, Camboriú, Florianópolis e Santa Catarina. Locação em comodato ou comissão. WhatsApp (47) 99927-7622.",
    ),
    scripts: [
      jsonLdScript(
        serviceLd(
          "Aluguel de jukebox para bares",
          "Locação de máquina de música em comodato ou comissão para bares e comércio em Santa Catarina.",
        ),
      ),
    ],
  }),
  component: JukeboxPage,
});

const MODELS = [
  {
    name: "Brg 2016",
    kind: "Chão",
    img: "/images/jukebox-brg.jpg",
  },
  {
    name: "2014 Play Média",
    kind: "Chão",
    img: "/images/jukebox-2014.jpg",
  },
  {
    name: "Diamante Original",
    kind: "Modificada",
    img: "/images/jukebox-diamante.jpg",
  },
  {
    name: "Brg Parede",
    kind: "Parede",
    img: "/images/jukebox-parede.jpg",
  },
  {
    name: "2013 Play Grande",
    kind: "Chão",
    img: "/images/jukebox-play.jpg",
  },
  {
    name: "Vênus Original",
    kind: "Modificada",
    img: "/images/jukebox-venus.jpg",
  },
  {
    name: "StarLight Original",
    kind: "Modificada",
    img: "/images/jukebox-star.jpg",
  },
  {
    name: "Thunder Original",
    kind: "Modificada",
    img: "/images/jukebox-thunder.jpg",
  },
];

function JukeboxPage() {
  return (
    <main>
      <PageHero
        kicker="Bares e comércio"
        title="Aluguel de jukebox para bares em SC"
        lead="A máquina de música que vira o bar. Comodato ou comissão em Itajaí, Balneário Camboriú, Camboriú, Blumenau e Florianópolis."
        image="/images/servico-jukebox.jpg"
        imageAlt="Jukebox digital em um bar"
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Como alugar</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Comodato ou comissão.
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Para estabelecimento comercial a Disco Laser trabalha com
              locação contínua: a máquina fica no seu ponto, o repertório
              circula sozinho e o cliente põe a música. Combinamos o modelo
              (chão ou parede) e a forma de cobrança — comodato ou comissão.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Também atendemos festa e evento pontual. Manda o perfil do
              espaço que indicamos o gabinete certo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog
                defaultService="Jukebox para bar"
                trigger={<Button size="lg">Quero no meu bar</Button>}
              />
              <Button asChild variant="whatsapp" size="lg">
                <LeadLink
                  channel="whatsapp"
                  text="Olá, gostaria de saber sobre o aluguel de Jukebox para meu bar"
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
              src="https://www.youtube.com/embed/zJ-pqOk34vY"
              title="Vídeo das máquinas de jukebox Disco Laser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>

      <Section className="bg-card">
        <Kicker>Modelos</Kicker>
        <h2 className="font-display mt-2 text-4xl">Alguns gabinetes da frota</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Disponibilidade varia. Na conversa a gente confirma o que está livre
          para o seu ponto.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODELS.map((m) => (
            <li
              key={m.name}
              className="overflow-hidden rounded-xl bg-elevated shadow-[0_0_0_1px_rgba(244,237,228,0.08)]"
            >
              <img
                src={m.img}
                alt={`Jukebox ${m.name}`}
                className="aspect-[3/4] w-full bg-[#14110e] object-contain"
              />
              <div className="p-4">
                <p className="text-kicker tracking-[0.16em] text-gold uppercase">
                  {m.kind}
                </p>
                <h3 className="mt-1 font-medium">{m.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section>
        <RegionStrip service="jukebox" />
      </Section>
    </main>
  );
}
