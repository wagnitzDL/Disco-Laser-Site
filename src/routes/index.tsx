import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  Mic2,
  Music2,
  Speaker,
  Tv,
  Truck,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
import { QuoteForm } from "@/components/quote-form";
import { Kicker, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { DEFAULT_WA, SERVICES, SITE } from "@/lib/site";
import { LeadLink } from "@/components/lead-link";
import { REGIONS } from "@/lib/regions";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Aluguel de Karaokê em Itajaí, BC e Camboriú | Disco Laser",
      "Aluguel de karaokê, jukebox, TV e som em Camboriú, Itajaí, Balneário Camboriú, Itapema e Santa Catarina. Entrega e montagem. WhatsApp (47) 99927-7622.",
    ),
  component: Home,
});

const ICONS = {
  karaoke: Mic2,
  jukebox: Music2,
  tv: Tv,
  som: Speaker,
} as const;

function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img
          src="/images/hero-festa.jpg"
          alt="Amigos cantando karaokê em uma festa"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24">
          <Kicker className="rise-in">Itajaí · Balneário Camboriú · Blumenau · Florianópolis</Kicker>
          <h1
            className="font-display rise-in mt-3 max-w-4xl text-display text-foreground"
            style={{ animationDelay: "70ms" }}
          >
            Aluguel de karaokê
            <br />
            em Santa Catarina
          </h1>
          <p
            className="rise-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "130ms" }}
          >
            A festa começa quando o microfone liga. Karaokê, TV's.
            Equipamentos de som e Jukebox; Com entrega e montagem em:
            Camboriú, Itajaí, Balneário Camboriú, Itapema, Brusque, Blumenau,
            Joinville, Florianópolis e Região.
          </p>
          <div
            className="rise-in mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <QuoteDialog
              trigger={<Button size="lg">Pedir orçamento</Button>}
            />
            <Button asChild variant="whatsapp" size="lg">
              <LeadLink channel="whatsapp" text={DEFAULT_WA}>
                <WhatsAppIcon className="size-4" />
                Chamar no WhatsApp
              </LeadLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/karaoke">
                Ver karaokê
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="laser-rule" />

      <Section className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { n: "+10 mil", l: "músicas no repertório, com pontuação" },
            { n: "Entrega", l: "e montagem inclusas na região" },
            { n: "SC", l: "Itajaí, BC, Camboriú, Blumenau e mais" },
          ].map((item) => (
            <div key={item.n} className="border-l border-gold/40 pl-5">
              <p className="font-display text-4xl text-foreground">{item.n}</p>
              <p className="mt-1 text-sm text-muted">{item.l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-4">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>O que alugamos</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Quatro jeitos de animar a noite
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Do aniversário em casa ao bar da esquina. Equipamento próprio,
            revisado, com quem entende de festa no Litoral Norte.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICES.map((svc, i) => {
            const Icon = ICONS[svc.slug];
            const featured = i === 0;
            return (
              <Link
                key={svc.slug}
                to={svc.href}
                className={
                  featured
                    ? "group relative isolate min-h-80 overflow-hidden rounded-2xl md:col-span-2 md:min-h-[28rem]"
                    : "group relative isolate min-h-72 overflow-hidden rounded-xl"
                }
              >
                <img
                  src={svc.image}
                  alt=""
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="relative flex h-full min-h-72 flex-col justify-end p-6 sm:p-8">
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-elevated/80 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-kicker tracking-[0.18em] text-gold uppercase">
                    {svc.kicker}
                  </p>
                  <h3 className="font-display mt-1 text-4xl sm:text-5xl">
                    {svc.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {svc.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    Conhecer
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section className="bg-card">
        <Kicker>Como funciona</Kicker>
        <h2 className="font-display mt-2 text-4xl sm:text-5xl">
          Três passos. Zero complicação.
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Mic2,
              n: "01",
              t: "Peça o orçamento",
              d: "WhatsApp ou formulário. Diz a data, a cidade e o que precisa — karaokê, som, TV ou jukebox.",
            },
            {
              icon: Truck,
              n: "02",
              t: "A gente entrega e monta",
              d: "Leva, instala e testa no local. Você não precisa entender de cabo nem de equalizador.",
            },
            {
              icon: Wrench,
              n: "03",
              t: "Canta a noite toda",
              d: "Repertório atualizado, pontuação na tela e suporte se algo sair do tom.",
            },
          ].map((step) => (
            <li
              key={step.n}
              className="rounded-xl bg-elevated p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)]"
            >
              <div className="flex items-center justify-between">
                <step.icon className="size-5 text-gold" />
                <span className="font-display text-2xl text-subtle">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-medium">{step.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.d}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Repertório</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Nacional, internacional e o hit da semana.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Mais de 10 mil faixas com pontuação. Consulte o buscador online
              ou baixe as listas em PDF antes da festa — ninguém perde o
              momento por não achar a música.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a
                  href={SITE.catalogApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APP de Buscar Músicas
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={SITE.nacionalPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </div>
          <img
            src="/images/karaoke-mics.jpg"
            alt="Microfones sem fio prontos para karaokê"
            className="h-80 w-full rounded-xl object-cover sm:h-96"
          />
        </div>
      </Section>

      <Section className="bg-card">
        <Kicker>Onde atendemos</Kicker>
        <h2 className="font-display mt-2 text-4xl sm:text-5xl">
          Do Vale ao Litoral Norte
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Sede em Camboriú. Entrega nas cidades abaixo e região de Santa
          Catarina.
        </p>
        <ul className="mt-10 flex flex-wrap gap-2">
          {REGIONS.map((city) => (
            <li key={city.slug}>
              <Link
                to="/regiao/$cidade"
                params={{ cidade: city.slug }}
                className="inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.08)] hover:text-gold"
              >
                Aluguel em {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="orcamento">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Kicker>Orçamento</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              Fala com a gente.
            </h2>
            <p className="mt-4 text-muted">
              Resposta pelo WhatsApp. Sem cadastro, sem espera em formulário
              perdido.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-muted">
              <li className="flex gap-2">
                <MapPin className="size-4 shrink-0 text-gold" />
                {SITE.address.full}
              </li>
              <li>
                Telefone {SITE.phone} · WhatsApp {SITE.whatsappDisplay}
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-foreground"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-xl">
              <iframe
                title="Mapa da Disco Laser em Camboriú"
                src="https://maps.google.com/maps?q=Rua%20Manoel%20Anast%C3%A1cio%20Pereira%2085%20Cambori%C3%BA&z=16&output=embed"
                className="h-56 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
