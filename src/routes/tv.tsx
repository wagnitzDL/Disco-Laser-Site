import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { QuoteDialog } from "@/components/quote-dialog";
import { Kicker, PageHero, Section } from "@/components/section";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { LeadLink } from "@/components/lead-link";
import { PhotoAlbum, type AlbumPhoto } from "@/components/photo-album";
import { jsonLdScript, pageMeta, serviceLd } from "@/lib/seo";
import { RegionStrip } from "@/components/region-strip";

export const Route = createFileRoute("/tv")({
  head: () => ({
    ...pageMeta(
      "Aluguel de TV em Itajaí, Balneário Camboriú e SC | Disco Laser",
      "Locação de TVs LG 86, 75, 65 e 43 polegadas, com suporte, em Itajaí, Balneário Camboriú, Camboriú e Santa Catarina.",
    ),
    scripts: [
      jsonLdScript(
        serviceLd(
          "Aluguel de TV",
          "Locação de televisores LED Full HD e 4K com suporte, na horizontal ou vertical, para eventos em Santa Catarina.",
        ),
      ),
    ],
  }),
  component: TvPage,
});

type TvModel = {
  name: string;
  spec: string;
  featured?: boolean;
  photos: AlbumPhoto[];
  videos?: string[];
};

const TVS: TvModel[] = [
  {
    name: "TV LG 86 polegadas 4K QNED",
    spec: "Suporte de altura padrão em treliça de alumínio",
    featured: true,
    photos: [
      {
        src: "/images/tv-86-evento.jpg",
        alt: "TV LG 86 polegadas 4K QNED no suporte de altura padrão, em evento",
      },
      {
        src: "/images/tv-86-salao.jpg",
        alt: "TV LG 86 polegadas no suporte de treliça, em salão",
      },
    ],
    videos: ["/videos/tv-86.mp4"],
  },
  {
    name: "TV LG 75 polegadas 4K QNED",
    spec: "Suporte de altura padrão em treliça de alumínio",
    photos: [
      {
        src: "/images/tv-75-suporte.jpg",
        alt: "TV LG 75 polegadas 4K QNED no suporte de altura padrão",
      },
      {
        src: "/images/tv-75-salao.jpg",
        alt: "TV LG 75 polegadas 4K QNED em salão de festa",
      },
    ],
    videos: ["/videos/tv-75.mp4"],
  },
  {
    name: "TV 65 polegadas",
    spec: "Suporte de chão com base cruz",
    photos: [
      {
        src: "/images/tv-65.jpg",
        alt: "TV 65 polegadas no suporte de chão, em salão",
      },
    ],
    videos: ["/videos/tv-65.mp4"],
  },
  {
    name: "TV LG 43 polegadas 4K QNED",
    spec: "Suporte de chão com base cruz",
    photos: [
      {
        src: "/images/tv-43-salao.jpg",
        alt: "TV LG 43 polegadas 4K QNED no suporte de chão",
      },
      {
        src: "/images/tv-43-evento.jpg",
        alt: "TV LG 43 polegadas 4K QNED em evento",
      },
    ],
    videos: ["/videos/tv-43.mp4"],
  },
];

function TvPage() {
  return (
    <main>
      <PageHero
        kicker="Locação de TV"
        title="Aluguel de TV em Balneário Camboriú e SC"
        lead="Televisores de 43 a 86 polegadas para eventos, vitrines e transmissão em Itajaí, Camboriú, Balneário Camboriú e região. A LG 86 polegadas 4K QNED sai com suporte de altura padrão."
        image="/images/servico-tv.jpg"
        imageAlt="TVs LED em suportes para evento"
      />

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>Modelos</Kicker>
            <h2 className="font-display mt-2 text-4xl sm:text-5xl">
              TVs para locação
            </h2>
          </div>
          <QuoteDialog
            defaultService="Aluguel de TV"
            trigger={<Button>Pedir orçamento</Button>}
          />
        </div>
        <div className="mt-10 grid gap-12">
          {TVS.map((tv) => (
            <article
              key={tv.name}
              className={
                tv.featured
                  ? "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(197,160,53,0.45)]"
                  : "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(244,237,228,0.08)]"
              }
            >
              <PhotoAlbum photos={tv.photos} />
              {tv.videos?.length ? (
                <div className="flex flex-wrap justify-center gap-3 bg-black px-3 py-4">
                  {tv.videos.map((src) => (
                    <video
                      key={src}
                      src={src}
                      poster={tv.photos[0]?.src}
                      controls
                      playsInline
                      muted
                      loop
                      className="aspect-[9/16] w-full max-w-[280px] object-contain"
                    />
                  ))}
                </div>
              ) : null}
              <div className="p-5 sm:p-8">
                {tv.featured ? (
                  <p className="text-kicker font-medium tracking-[0.18em] text-gold uppercase">
                    Destaque
                  </p>
                ) : null}
                <h3 className="font-display mt-2 text-4xl">{tv.name}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {tv.spec}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild variant="whatsapp" size="lg">
            <LeadLink channel="whatsapp" text="Olá, Disco Laser. Gostaria de alugar uma TV">
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </LeadLink>
          </Button>
        </div>
      </Section>
      <Section className="bg-card">
        <RegionStrip service="TV" />
      </Section>
    </main>
  );
}
