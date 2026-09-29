import { REGIONS } from "@/lib/regions";
import { SITE } from "@/lib/site";

export const GOOGLE_ADS_ID = "AW-955191577";

/** AW-955191577 / Orçamento WhatsApp */
export const GOOGLE_ADS_SEND_TO = "AW-955191577/-0rUCODT9IodEJmivMcD";

export const PUBLIC_PATHS = [
  "/",
  "/karaoke",
  "/jukebox",
  "/tv",
  "/som",
  "/pg",
  "/privacidade",
  "/regiao",
  ...REGIONS.map((r) => `/regiao/${r.slug}`),
];

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: ["Disco Laser Jukebox", "Disco Laser"],
    description: SITE.description,
    telephone: "+554733651242",
    email: SITE.email,
    image: "https://www.dljk.com.br/images/logo-site-2025.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Manoel Anastácio Pereira, 85",
      addressLocality: "Camboriú",
      addressRegion: "SC",
      postalCode: "88340-299",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.0247,
      longitude: -48.6556,
    },
    areaServed: REGIONS.map((r) => ({
      "@type": "City",
      name: `${r.name}, Santa Catarina`,
    })),
    sameAs: [SITE.instagram, SITE.facebook],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluguel de karaokê" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluguel de jukebox" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluguel de TV" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Locação de equipamentos de som" } },
    ],
  };
}

export function serviceLd(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "LocalBusiness", name: SITE.name, telephone: "+554733651242" },
    areaServed: { "@type": "State", name: "Santa Catarina" },
    serviceType: name,
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  };
}
