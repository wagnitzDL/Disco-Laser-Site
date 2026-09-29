import { waLink } from "@/lib/site";
import { GOOGLE_ADS_ID, GOOGLE_ADS_SEND_TO } from "@/lib/seo";

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"] as const;
const STORAGE = "dl-campaign";

export type Campaign = Partial<Record<(typeof KEYS)[number], string>>;

export function captureCampaign() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const found: Campaign = {};
  let any = false;
  for (const key of KEYS) {
    const value = params.get(key);
    if (value) {
      found[key] = value.slice(0, 120);
      any = true;
    }
  }
  if (!any) return;
  const prev = readCampaign();
  sessionStorage.setItem(STORAGE, JSON.stringify({ ...prev, ...found }));
}

export function readCampaign(): Campaign {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE);
    return raw ? (JSON.parse(raw) as Campaign) : {};
  } catch {
    return {};
  }
}

export function withCampaign(text: string) {
  const c = readCampaign();
  const bits = KEYS.map((k) => (c[k] ? `${k}=${c[k]}` : null)).filter(Boolean);
  if (!bits.length) return text;
  return `${text}\nOrigem do anúncio: ${bits.join(" | ")}`;
}

export function trackedWa(text: string) {
  return waLink(withCampaign(text));
}

export function trackLead(
  channel: "whatsapp" | "phone" | "form",
  opts?: { conversion?: boolean },
) {
  if (typeof window === "undefined") return;
  const campaign = readCampaign();
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "generate_lead", channel, ...campaign });
  window.gtag?.("event", "generate_lead", {
    send_to: GOOGLE_ADS_ID,
    transport_type: "beacon",
    event_category: "lead",
    event_label: channel,
  });
  if (opts?.conversion && GOOGLE_ADS_SEND_TO) {
    window.gtag?.("event", "conversion", {
      send_to: GOOGLE_ADS_SEND_TO,
      transport_type: "beacon",
      event_label: channel,
    });
  }
}

export function goToThanks() {
  window.setTimeout(() => {
    if (!window.location.pathname.startsWith("/obrigado")) {
      window.location.assign("/obrigado");
    }
  }, 400);
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}
