import { REGIONS } from "@/lib/regions";

export const SITE = {
  name: "Disco Laser Locações",
  shortName: "Disco Laser",
  tagline: "Jukebox e Karaokê",
  description:
    "Aluguel de karaokê, jukebox, TV e equipamentos de som em Camboriú, Itajaí, Balneário Camboriú e toda a região de Santa Catarina.",
  phone: "(47) 3365-1242",
  phoneHref: "tel:+554733651242",
  whatsappDisplay: "(47) 99927-7622",
  whatsappE164: "5547999277622",
  email: "contato@dljk.com.br",
  instagram: "https://www.instagram.com/discolaser2",
  facebook: "https://www.facebook.com/discolaser/",
  catalogApp: "https://app.dljk.com.br/",
  nacionalPdf: "https://www.dljk.com.br/nacional.pdf",
  internacionalPdf: "https://www.dljk.com.br/internacional.pdf",
  address: {
    street: "Rua Manoel Anastácio Pereira, 85",
    neighborhood: "Centro",
    city: "Camboriú",
    state: "SC",
    cep: "88340-299",
    full: "Rua Manoel Anastácio Pereira, 85 — Centro, Camboriú — SC",
  },
} as const;

export const CITIES = REGIONS.map((region) => region.name);

export const SERVICES = [
  {
    slug: "karaoke",
    href: "/karaoke",
    title: "Karaokê",
    kicker: "Festas e eventos",
    blurb:
      "Kit completo com TV, som, microfones e mais de 10 mil músicas. Entrega e montagem inclusas.",
    image: "/images/servico-karaoke.jpg",
    waText: "Olá, gostaria de alugar um Karaokê",
  },
  {
    slug: "jukebox",
    href: "/jukebox",
    title: "Jukebox",
    kicker: "Bares e comércio",
    blurb:
      "Máquina de música em comodato ou comissão para bares, lanchonetes e casas noturnas.",
    image: "/images/servico-jukebox.jpg",
    waText:
      "Olá, gostaria de saber sobre o aluguel de Jukebox para meu bar",
  },
  {
    slug: "tv",
    href: "/tv",
    title: "TV",
    kicker: "32\" a 75\"",
    blurb:
      "Televisores LED Full HD e 4K, na horizontal ou vertical, com suporte para eventos e vitrines.",
    image: "/images/servico-tv.jpg",
    waText: "Olá, Disco Laser. Gostaria de alugar uma TV",
  },
  {
    slug: "som",
    href: "/som",
    title: "Som",
    kicker: "PA e microfones",
    blurb:
      "Caixas ativas JBL, Electro-Voice, line array Frahm e MAK, além de microfones sem fio.",
    image: "/images/servico-som.jpg",
    waText: "Olá, Disco Laser. Gostaria de alugar equipamentos de som",
  },
] as const;

export const NAV = [
  { href: "/", label: "Início" },
  { href: "/karaoke", label: "Karaokê" },
  { href: "/jukebox", label: "Jukebox" },
  { href: "/tv", label: "TV" },
  { href: "/som", label: "Som" },
  { href: "/repertorio", label: "Repertório" },
] as const;

export function waLink(text: string) {
  return `https://api.whatsapp.com/send?phone=${SITE.whatsappE164}&text=${encodeURIComponent(text)}`;
}

export const DEFAULT_WA =
  "Olá, gostaria de informações da Disco Laser";
