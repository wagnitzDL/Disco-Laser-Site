import { createFileRoute, Link } from "@tanstack/react-router";
import { REGIONS } from "@/lib/regions";
import { jsonLdScript, localBusinessLd, pageMeta } from "@/lib/seo";
import { Kicker, Section } from "@/components/section";

export const Route = createFileRoute("/regiao/")({
  head: () => ({
    ...pageMeta(
      "Aluguel de karaokê por cidade em Santa Catarina | Disco Laser",
      "Disco Laser atende Camboriú, Balneário Camboriú, Itajaí, Itapema, Navegantes, Brusque, Blumenau, Tijucas, Barra Velha, São José e Florianópolis. Entrega e montagem.",
    ),
    scripts: [jsonLdScript(localBusinessLd())],
  }),
  component: RegiaoIndex,
});

function RegiaoIndex() {
  return (
    <main>
      <Section className="pt-14 sm:pt-20">
        <Kicker>Santa Catarina</Kicker>
        <h1 className="font-display mt-2 max-w-3xl text-display">
          Aluguel de karaokê na sua cidade
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Sede em Camboriú. Escolha a cidade para ver entrega, karaokê, jukebox,
          TV e som — e pedir orçamento no WhatsApp.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {REGIONS.map((city) => (
            <li key={city.slug}>
              <Link
                to="/regiao/$cidade"
                params={{ cidade: city.slug }}
                className="block rounded-xl bg-card p-5 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] transition-colors hover:text-gold"
              >
                <p className="text-kicker tracking-[0.16em] text-gold uppercase">
                  {city.area}
                </p>
                <h2 className="mt-1 text-lg font-medium text-foreground">
                  {city.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {city.lead}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
