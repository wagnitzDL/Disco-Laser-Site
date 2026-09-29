import { Link } from "@tanstack/react-router";
import { REGIONS } from "@/lib/regions";
import { Kicker } from "@/components/section";

export function RegionStrip({
  service,
}: {
  service: "karaokê" | "jukebox" | "TV" | "som";
}) {
  return (
    <div>
      <Kicker>Atendimento regional</Kicker>
      <h2 className="font-display mt-2 text-4xl">
        {service === "karaokê" ? "Aluguel de karaokê" : `Aluguel de ${service}`} por cidade
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Cada cidade tem página própria, com o que muda na entrega. Use o link
        da sua cidade no anúncio ou mande direto no WhatsApp.
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {REGIONS.map((city) => (
          <li key={city.slug}>
            <Link
              to="/regiao/$cidade"
              params={{ cidade: city.slug }}
              className="inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.08)] hover:text-gold"
            >
              {city.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
