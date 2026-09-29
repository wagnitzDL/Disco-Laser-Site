import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kicker, Section } from "@/components/section";
import { searchSongs, type SongList } from "@/lib/catalog";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/repertorio")({
  head: () =>
    pageMeta(
      "Repertório de Karaokê — músicas nacionais e internacionais | Disco Laser",
      "Consulte músicas do karaokê Disco Laser antes da festa em Santa Catarina. Amostra no site, buscador completo e PDFs nacional e internacional.",
    ),
  component: RepertorioPage,
});

type Filter = "todas" | SongList;

export function RepertorioPage() {
  const [q, setQ] = useState("");
  const [list, setList] = useState<Filter>("todas");
  const results = useMemo(() => searchSongs(q, list), [q, list]);
  const shown = results.slice(0, 80);

  return (
    <main>
      <Section className="pb-8 pt-14 sm:pt-20">
        <Kicker>Karaokê 41</Kicker>
        <h1 className="font-display mt-2 text-display">Repertório</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Amostra do catálogo para você localizar artista e título. O acervo
          completo — mais de 10 mil faixas — está no buscador e nos PDFs.
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

      <Section className="pt-0">
        <div className="relative mb-4">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar por música, artista ou código"
            className="pl-10"
            aria-label="Buscar músicas"
          />
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {(
            [
              ["todas", "Todas"],
              ["nacional", "Nacional"],
              ["internacional", "Internacional"],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setList(value)}
              className={cn(
                "h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150",
                list === value
                  ? "bg-gold text-gold-foreground"
                  : "bg-elevated text-muted hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mb-3 text-xs text-subtle">
          {results.length} faixa{results.length === 1 ? "" : "s"} nesta amostra
          {results.length > shown.length
            ? ` · mostrando as primeiras ${shown.length}`
            : ""}
        </p>
        <div className="overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(244,237,228,0.08)]">
          <table className="w-full text-left text-sm">
            <thead className="bg-elevated text-kicker tracking-[0.14em] text-subtle uppercase">
              <tr>
                <th className="px-4 py-3 font-medium">Código</th>
                <th className="px-4 py-3 font-medium">Artista</th>
                <th className="px-4 py-3 font-medium">Música</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">
                  Lista
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-12 text-center text-muted">
                    Nada por aqui. Tenta outro termo ou abre o buscador
                    completo.
                  </td>
                </tr>
              ) : (
                shown.map((s) => (
                  <tr
                    key={`${s.list}-${s.code}-${s.title}`}
                    className="border-t border-border"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-gold">
                      {s.code.startsWith("000") ? "—" : s.code}
                    </td>
                    <td className="px-4 py-3 text-foreground">{s.artist}</td>
                    <td className="px-4 py-3 text-muted">{s.title}</td>
                    <td className="hidden px-4 py-3 text-subtle capitalize sm:table-cell">
                      {s.list}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  );
}
