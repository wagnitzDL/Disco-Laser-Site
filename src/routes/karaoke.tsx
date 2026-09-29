import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QuoteDialog } from "@/components/quote-dialog";
import { Kicker, PageHero, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/site";
import { LeadLink } from "@/components/lead-link";
import { PhotoAlbum } from "@/components/photo-album";
import { VideoAlbum } from "@/components/video-album";
import { faqLd, jsonLdScript, pageMeta, serviceLd } from "@/lib/seo";
import { RegionStrip } from "@/components/region-strip";

const FAQ = [
  {
    q: "Vocês entregam e montam?",
    a: "Sim. Na região de Camboriú, Itajaí, Balneário Camboriú e cidades vizinhas a entrega e a montagem fazem parte do aluguel. É só indicar o endereço e o horário.",
  },
  {
    q: "Quantas músicas têm no repertório?",
    a: "Mais de 10 mil faixas, nacionais e internacionais, com sistema de pontuação. Dá para consultar no buscador ou nos PDFs antes do evento.",
  },
  {
    q: "Atende a minha cidade?",
    a: "Atendemos Camboriú, Balneário Camboriú, Itajaí, Itapema, Navegantes, Brusque, Blumenau, Tijucas, Barra Velha, São José, Florianópolis e região. Se a sua cidade não está na lista, manda um WhatsApp.",
  },
  {
    q: "Com quanta antecedência reservar?",
    a: "Fins de semana e feriados saem rápido. O ideal é falar o quanto antes; para datas próximas, chama no WhatsApp que confirmamos a disponibilidade na hora.",
  },
];

export const Route = createFileRoute("/karaoke")({
  head: () => ({
    ...pageMeta(
      "Aluguel de Karaokê em Itajaí, BC, Camboriú e SC | Disco Laser",
      "Aluguel de karaokê para festas em Itajaí, Balneário Camboriú, Camboriú, Itapema e região. Mais de 10 mil músicas, entrega e montagem. WhatsApp (47) 99927-7622.",
    ),
    scripts: [
      jsonLdScript(
        serviceLd(
          "Aluguel de karaokê",
          "Locação de karaokê com TV, som, microfones e mais de 10 mil músicas em Santa Catarina. Entrega e montagem inclusas.",
        ),
      ),
      jsonLdScript(faqLd(FAQ)),
    ],
  }),
  component: KaraokePage,
});

const INCLUDED = [
  "Máquina de karaokê com pontuação",
  "TV tela plana",
  "Caixa de som",
  "Dois microfones sem fio",
  "Pedestais",
  "Entrega e montagem na região",
  "Mais de 10 mil músicas — nacional e internacional",
  "Listas em PDF e buscador online",
];

const MODELS = [
  {
    src: "/images/karaoke-pro.jpg",
    alt: "Karaokê Pro com tela de 40 polegadas, microfones AKG e som Frahm GRT 12",
  },
  {
    src: "/images/karaoke-gabinete.jpg",
    alt: "Karaokê gabinete com tela de 24 polegadas e mais de 8 mil músicas",
  },
  {
    src: "/images/karaoke-montavel.jpg",
    alt: "Karaokê montável com tela de 32 polegadas e caixa JBL 15",
  },
  {
    src: "/images/karaoke-sem-tv.jpg",
    alt: "Karaokê sem TV, caixa JBL 10 polegadas e dois microfones sem fio",
  },
];

const CLIPS = [
  {
    src: "/videos/karaoke-tv-torre.mp4",
    label: "Karaokê com TV, caixa de retorno e torre de som",
  },
  {
    src: "/videos/karaoke-projetor.mp4",
    label: "Karaokê com projetor no salão",
  },
  {
    src: "/videos/karaoke-jbl.mp4",
    label: "Karaokê montável com caixa JBL",
  },
  {
    src: "/videos/karaoke-sala.mp4",
    label: "Karaokê com TV e torre de som",
  },
  {
    src: "/videos/karaoke-gabinete.mp4",
    label: "Karaokê gabinete",
  },
];

function KaraokePage() {
  return (
    <main>
      <PageHero
        kicker="Aluguel de karaokê"
        title="Aluguel de karaokê em Santa Catarina"
        lead="O microfone que salva a festa. Kit com TV, som e mais de 10 mil músicas em Itajaí, Balneário Camboriú, Camboriú, Itapema e região. Entrega e montagem."
        image="/images/karaoke-festa.jpg"
        imageAlt="Amigos cantando karaokê"
      >
        <div className="rise-in mt-6 flex flex-wrap gap-3" style={{ animationDelay: "200ms" }}>
          <Button asChild>
            <a href={SITE.catalogApp} target="_blank" rel="noopener noreferrer">
              APP de Buscar Músicas
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
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Kicker>O kit</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Tudo incluso. Você só canta.
            </h2>
            <p className="mt-4 text-muted">
              Modelos para sala, salão e área gourmet. TV, som e microfones
              chegam juntos — sem montar quebra-cabeça na hora da festa.
            </p>
            <ul className="mt-8 grid gap-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteDialog
                defaultService="Karaokê"
                trigger={<Button size="lg">Pedir orçamento</Button>}
              />
              <Button asChild variant="whatsapp" size="lg">
                <LeadLink channel="whatsapp" text="Olá, gostaria de alugar um Karaokê">
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </LeadLink>
              </Button>
            </div>
          </div>
          <PhotoAlbum
            photos={MODELS}
            autoMs={3000}
            frameClass="relative aspect-square w-full overflow-hidden rounded-xl bg-[#14110e]"
          />
        </div>
        <VideoAlbum videos={CLIPS} />
      </Section>

      <Section className="bg-card">
        <Kicker>Repertório</Kicker>
        <h2 className="font-display mt-2 text-4xl">Consulte antes da festa</h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Listas nacionais e internacionais em PDF, além da busca no site com
          o catálogo completo.
        </p>
        <div className="mt-10 aspect-video overflow-hidden rounded-xl bg-elevated">
          <iframe
            className="size-full"
            src="https://www.youtube.com/embed/E-PprnsLYE4"
            title="Vídeo demonstrativo do karaokê Disco Laser"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Section>

      <Section>
        <Kicker>Dúvidas</Kicker>
        <h2 className="font-display mt-2 text-4xl">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="mt-8 max-w-3xl">
          {FAQ.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
      <Section className="bg-card">
        <RegionStrip service="karaokê" />
      </Section>
    </main>
  );
}
