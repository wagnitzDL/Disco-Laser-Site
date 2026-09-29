import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Wordmark } from "@/components/wordmark";
import { NAV, SITE } from "@/lib/site";
import { REGIONS } from "@/lib/regions";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Locação de karaokê, jukebox, TV e som para festas, bares e eventos
            em Santa Catarina.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-11 items-center justify-center rounded-md text-muted shadow-[0_0_0_1px_rgba(244,237,228,0.12)] transition-colors hover:text-gold"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-11 items-center justify-center rounded-md text-muted shadow-[0_0_0_1px_rgba(244,237,228,0.12)] transition-colors hover:text-gold"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-kicker font-medium tracking-[0.18em] text-gold uppercase">
            Navegação
          </p>
          <ul className="mt-4 grid gap-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/regiao"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                Cidades
              </Link>
            </li>
          </ul>
          <ul className="mt-4 grid gap-2">
            <li>
              <Link
                to="/pg"
                className="text-sm text-muted hover:text-foreground"
              >
                Karaokê em Ponta Grossa
              </Link>
            </li>
            {REGIONS.slice(0, 6).map((city) => (
              <li key={city.slug}>
                <Link
                  to="/regiao/$cidade"
                  params={{ cidade: city.slug }}
                  className="text-sm text-muted hover:text-foreground"
                >
                  Karaokê em {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <address className="not-italic">
          <p className="text-kicker font-medium tracking-[0.18em] text-gold uppercase">
            Contato
          </p>
          <ul className="mt-4 grid gap-3 text-sm text-muted">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {SITE.address.full}
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="flex gap-2 hover:text-foreground"
              >
                <Phone className="size-4 shrink-0 text-gold" />
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="flex gap-2 hover:text-foreground"
              >
                <Mail className="size-4 shrink-0 text-gold" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-border py-5 pb-24 text-center text-xs text-subtle md:pb-5">
        <p>© {new Date().getFullYear()} Disco Laser Jukebox · Camboriú, SC</p>
        <p className="mt-2">
          <Link to="/privacidade" className="underline hover:text-foreground">
            Política de Privacidade
          </Link>
        </p>
      </div>
    </footer>
  );
}
