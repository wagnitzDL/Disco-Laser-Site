import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Kicker, Section } from "@/components/section";
import { LeadLink } from "@/components/lead-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { faqLd, jsonLdScript, pageMeta } from "@/lib/seo";

const PG_PHONE = "5542999617410";
const PG_TEL = "tel:+5542999617410";
const PG_DISPLAY = "(42) 99961-7410";
const PG_TEXT = "Alugar Karaoke";

const PDF_NACIONAL =
  "https://drive.google.com/file/d/1pE-ZzbHvfjhdyw7Av_G7r6IgxKfpC3yN/view?usp=sharing";
const PDF_INTERNACIONAL =
  "https://drive.google.com/file/d/1qdhamUc4Wo8MnF3Wdx1XIX6ZN0nCAFIb/view";

export const Route = createFileRoute("/pg")({
  head: () => {
    const title = "Aluguel de Karaokê, Videokê em Ponta Grossa - Disco Laser";
    const description =
      "Aluguel de karaokê e videokê em Ponta Grossa, PR. Kit com tela 32 polegadas, caixa JBL e microfones sem fio. WhatsApp e ligação (42) 99961-7410.";
    return {
      ...pageMeta(title, description),
      meta: [
        ...pageMeta(title, description).meta,
        {
          name: "keywords",
          content:
            "karaoke ponta grossa, alugar karaoke, locação karaoke, aluguel karaoke, videokê",
        },
      ],
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Aluguel de karaokê em Ponta Grossa",
          description,
          serviceType: "Aluguel de karaokê e videokê",
          areaServed: {
            "@type": "City",
            name: "Ponta Grossa",
            containedInPlace: { "@type": "State", name: "Paraná" },
          },
          provider: {
            "@type": "LocalBusiness",
            name: "Disco Laser",
            telephone: "+5542999617410",
            url: "https://dljk.com.br/pg",
          },
        }),
        jsonLdScript(
          faqLd([
            {
              q: "Qual o telefone para alugar karaokê em Ponta Grossa?",
              a: "WhatsApp e ligação (42) 99961-7410. A mensagem pronta é Alugar Karaoke.",
            },
            {
              q: "O que vem no karaokê montável de Ponta Grossa?",
              a: "Tela de 32 polegadas, 2 microfones sem fio e caixa ativa JBL 15 polegadas 200W RMS.",
            },
          ]),
        ),
      ],
    };
  },
  component: PontaGrossaPage,
});

function PontaGrossaPage() {
  return (
    <main>
      <section className="px-4 pt-8 sm:px-6 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <LeadLink
            channel="whatsapp"
            text={PG_TEXT}
            whatsappE164={PG_PHONE}
            className="block overflow-hidden rounded-lg bg-card"
          >
            <img
              src="/images/pg-banner.jpg"
              alt="Anime sua festa. Alugue um karaokê em Ponta Grossa. Caixa ativa JBL 15, microfones sem fio, tela 32 polegadas e mais de 8 mil músicas. WhatsApp (42) 99961-7410."
              className="mx-auto h-auto w-full max-w-4xl object-contain outline-none"
            />
          </LeadLink>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="whatsapp" size="lg">
              <LeadLink
                channel="whatsapp"
                text={PG_TEXT}
                whatsappE164={PG_PHONE}
              >
                <WhatsAppIcon className="size-4" />
                Clique para mandar mensagem
              </LeadLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <LeadLink channel="phone" phoneHref={PG_TEL}>
                <Phone className="size-4" />
                Clique para fazer ligação {PG_DISPLAY}
              </LeadLink>
            </Button>
          </div>
        </div>
      </section>

      <Section className="pt-12">
        <Kicker>Ponta Grossa · PR</Kicker>
        <h1 className="font-display mt-2 text-display">
          Aluguel de karaokê e videokê em Ponta Grossa
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Atendimento local pelo {PG_DISPLAY}. O kit completo sai com tela,
          caixa e microfones. Mais de 9 mil músicas e todos os modelos com
          pontuação.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Button asChild variant="outline" className="h-auto py-4">
            <a href="/repertorio">
              Buscador de músicas
              <span className="block text-xs font-normal text-muted">
                clique para entrar na busca
              </span>
            </a>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4">
            <a href={PDF_NACIONAL} target="_blank" rel="noopener noreferrer">
              Lista músicas nacionais
              <span className="block text-xs font-normal text-muted">
                clique para baixar PDF
              </span>
            </a>
          </Button>
          <Button asChild variant="outline" className="h-auto py-4">
            <a
              href={PDF_INTERNACIONAL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lista músicas internacionais
              <span className="block text-xs font-normal text-muted">
                clique para baixar PDF
              </span>
            </a>
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-lg bg-card">
            <img
              src="/images/pg-montavel.jpg"
              alt="Karaokê montável com tela 32 polegadas, 2 microfones sem fio e caixa ativa JBL 15 polegadas 200W RMS."
              className="h-auto w-full object-contain outline-none"
            />
          </figure>
          <div>
            <Kicker>Modelo</Kicker>
            <h2 className="font-display mt-2 text-4xl">Karaokê montável</h2>
            <ul className="mt-5 grid gap-3 text-muted">
              <li className="border-l border-gold/40 pl-4">Tela 32 polegadas</li>
              <li className="border-l border-gold/40 pl-4">
                2 microfones sem fio
              </li>
              <li className="border-l border-gold/40 pl-4">
                Caixa ativa JBL 15 polegadas, 200W RMS
              </li>
              <li className="border-l border-gold/40 pl-4">
                Mais de 8 mil músicas no anúncio do kit completo
              </li>
            </ul>
            <p className="mt-6 leading-relaxed text-muted">
              Consulte modelo personalizado: palco com tela adicional de 40
              polegadas e monitor para o cantor com retorno.
            </p>
            <Button asChild variant="whatsapp" className="mt-6">
              <LeadLink
                channel="whatsapp"
                text={PG_TEXT}
                whatsappE164={PG_PHONE}
              >
                <WhatsAppIcon className="size-4" />
                Alugar karaokê
              </LeadLink>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-lg bg-card">
            <img
              src="/images/pg-setup.jpg"
              alt="Karaokê montado com caixa JBL no tripé, TV e aparelho no suporte."
              className="h-auto w-full object-contain outline-none"
            />
          </figure>
          <figure className="overflow-hidden rounded-lg bg-card">
            <img
              src="/images/pg-foto.jpg"
              alt="Kit de karaokê com TV, caixa no tripé, aparelho e maleta de microfones."
              className="h-auto w-full object-contain outline-none"
            />
          </figure>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-lg bg-card">
            <img
              src="/images/pg-sem-tv.jpg"
              alt="Karaokê sem TV: caixa ativa JBL 12 polegadas 150W, 2 microfones sem fio e aparelho com saída HDMI."
              className="h-auto w-full object-contain outline-none"
            />
          </figure>
          <div>
            <Kicker>Também disponível</Kicker>
            <h2 className="font-display mt-2 text-4xl">Karaokê sem TV</h2>
            <ul className="mt-5 grid gap-3 text-muted">
              <li className="border-l border-gold/40 pl-4">
                Caixa ativa 12 polegadas JBL 150W
              </li>
              <li className="border-l border-gold/40 pl-4">
                2 microfones sem fio
              </li>
              <li className="border-l border-gold/40 pl-4">
                Aparelho com saída HDMI
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
