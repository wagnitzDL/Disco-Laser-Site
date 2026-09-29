import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { regionBySlug, REGIONS } from "@/lib/regions";
import { faqLd, jsonLdScript, pageMeta, serviceLd } from "@/lib/seo";
import { Kicker, PageHero, Section } from "@/components/section";
import { QuoteForm } from "@/components/quote-form";
import { Button } from "@/components/ui/button";
import { LeadLink } from "@/components/lead-link";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/regiao/$cidade")({
  loader: ({ params }) => {
    const city = regionBySlug(params.cidade);
    if (!city) throw notFound();
    return city;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Cidade | Disco Laser" }] };
    const title = `Aluguel de karaokê em ${loaderData.name}, SC | Disco Laser`;
    const description = `${loaderData.lead} WhatsApp ${SITE.whatsappDisplay}. Entrega e montagem. Também jukebox, TV e som.`;
    const faqs = [
      {
        q: `Vocês entregam karaokê em ${loaderData.name}?`,
        a: loaderData.delivery,
      },
      {
        q: `O que vem no aluguel de karaokê em ${loaderData.name}?`,
        a: loaderData.karaoke,
      },
    ];
    return {
      ...pageMeta(title, description),
      scripts: [
        jsonLdScript(
          serviceLd(
            `Aluguel de karaokê em ${loaderData.name}`,
            loaderData.lead,
          ),
        ),
        jsonLdScript(faqLd(faqs)),
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const city = Route.useLoaderData();
  const others = REGIONS.filter((r) => r.slug !== city.slug);
  const wa = `Olá, quero orçamento de karaokê em ${city.name}`;

  return (
    <main>
      <PageHero
        kicker={city.area}
        title={`Aluguel de karaokê em ${city.name}`}
        lead={city.lead}
        image={city.image}
        imageAlt={`Festa com karaokê atendida a partir de Camboriú para ${city.name}`}
      />
      <Section>
        <nav aria-label="Trilha" className="mb-8 text-sm text-muted">
          <Link to="/" className="hover:text-foreground">
            Início
          </Link>
          <span className="px-2 text-subtle">/</span>
          <Link to="/regiao" className="hover:text-foreground">
            Cidades
          </Link>
          <span className="px-2 text-subtle">/</span>
          <span className="text-foreground">{city.name}</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="grid gap-8">
            <div>
              <Kicker>Entrega</Kicker>
              <h2 className="font-display mt-2 text-4xl">
                Como chega em {city.name}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{city.delivery}</p>
            </div>
            <div>
              <Kicker>Karaokê</Kicker>
              <h2 className="mt-2 text-lg font-medium">
                Kit para festa em {city.name}
              </h2>
              <p className="mt-2 leading-relaxed text-muted">{city.karaoke}</p>
              <Link
                to="/karaoke"
                className="mt-3 inline-block text-sm text-gold hover:underline"
              >
                Ver o kit completo de karaokê
              </Link>
            </div>
            <div>
              <Kicker>Bar e comércio</Kicker>
              <h2 className="mt-2 text-lg font-medium">
                Jukebox, TV e som em {city.name}
              </h2>
              <p className="mt-2 leading-relaxed text-muted">{city.commerce}</p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <Link to="/jukebox" className="text-gold hover:underline">
                  Jukebox
                </Link>
                <Link to="/tv" className="text-gold hover:underline">
                  TV
                </Link>
                <Link to="/som" className="text-gold hover:underline">
                  Som
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="whatsapp" size="lg">
                <LeadLink channel="whatsapp" text={wa}>
                  <WhatsAppIcon className="size-4" />
                  Orçamento em {city.name}
                </LeadLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <LeadLink channel="phone">Ligar {SITE.phone}</LeadLink>
              </Button>
            </div>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] sm:p-8">
            <h2 className="font-display text-3xl">Pedir orçamento</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              A mensagem abre no WhatsApp com a cidade {city.name} preenchida.
              Sem cadastro.
            </p>
            <QuoteForm defaultService="Karaokê" defaultCity={city.name} />
          </div>
        </div>
      </Section>
      <Section className="bg-card">
        <Kicker>Perto de {city.name}</Kicker>
        <h2 className="font-display mt-2 text-4xl">Outras cidades da rota</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {others.map((r) => (
            <li key={r.slug}>
              <Link
                to="/regiao/$cidade"
                params={{ cidade: r.slug }}
                className="inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm hover:text-gold"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
