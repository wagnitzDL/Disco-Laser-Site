import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, m as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as cn, r as REGIONS } from "./section-CSI_70ka.mjs";
import { a as SITE, o as waLink } from "./site-Hy4REUAz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-link-D3Ov461A.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.06)] hover:bg-primary/90",
			gold: "bg-gold text-gold-foreground hover:bg-gold/90",
			outline: "bg-transparent text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.14)] hover:bg-elevated",
			ghost: "bg-transparent text-foreground hover:bg-elevated",
			whatsapp: "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90",
			link: "bg-transparent text-gold underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-6",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.22-.08-.39-.12-.55.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.25-.17-.5-.29z" })
	});
}
var GOOGLE_ADS_ID = "AW-955191577";
/** AW-955191577 / Orçamento WhatsApp */
var GOOGLE_ADS_SEND_TO = "AW-955191577/-0rUCODT9IodEJmivMcD";
var PUBLIC_PATHS = [
	"/",
	"/karaoke",
	"/jukebox",
	"/tv",
	"/som",
	"/repertorio",
	"/privacidade",
	"/regiao",
	...REGIONS.map((r) => `/regiao/${r.slug}`)
];
function pageMeta(title, description) {
	return { meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "robots",
			content: "index, follow, max-image-preview:large"
		}
	] };
}
function localBusinessLd() {
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
			addressCountry: "BR"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: -27.0247,
			longitude: -48.6556
		},
		areaServed: REGIONS.map((r) => ({
			"@type": "City",
			name: `${r.name}, Santa Catarina`
		})),
		sameAs: [SITE.instagram, SITE.facebook],
		makesOffer: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Aluguel de karaokê"
				}
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Aluguel de jukebox"
				}
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Aluguel de TV"
				}
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Locação de equipamentos de som"
				}
			}
		]
	};
}
function serviceLd(name, description) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		provider: {
			"@type": "LocalBusiness",
			name: SITE.name,
			telephone: "+554733651242"
		},
		areaServed: {
			"@type": "State",
			name: "Santa Catarina"
		},
		serviceType: name
	};
}
function faqLd(items) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: items.map((item) => ({
			"@type": "Question",
			name: item.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: item.a
			}
		}))
	};
}
function jsonLdScript(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
var KEYS = [
	"utm_source",
	"utm_medium",
	"utm_campaign",
	"utm_term",
	"utm_content",
	"gclid"
];
var STORAGE = "dl-campaign";
function captureCampaign() {
	if (typeof window === "undefined") return;
	const params = new URLSearchParams(window.location.search);
	const found = {};
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
	sessionStorage.setItem(STORAGE, JSON.stringify({
		...prev,
		...found
	}));
}
function readCampaign() {
	if (typeof window === "undefined") return {};
	try {
		const raw = sessionStorage.getItem(STORAGE);
		return raw ? JSON.parse(raw) : {};
	} catch {
		return {};
	}
}
function withCampaign(text) {
	const c = readCampaign();
	const bits = KEYS.map((k) => c[k] ? `${k}=${c[k]}` : null).filter(Boolean);
	if (!bits.length) return text;
	return `${text}\nOrigem do anúncio: ${bits.join(" | ")}`;
}
function trackedWa(text) {
	return waLink(withCampaign(text));
}
function trackLead(channel, opts) {
	if (typeof window === "undefined") return;
	const campaign = readCampaign();
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: "generate_lead",
		channel,
		...campaign
	});
	window.gtag?.("event", "generate_lead", {
		send_to: GOOGLE_ADS_ID,
		transport_type: "beacon",
		event_category: "lead",
		event_label: channel
	});
	if (opts?.conversion && "AW-955191577/-0rUCODT9IodEJmivMcD") window.gtag?.("event", "conversion", {
		send_to: GOOGLE_ADS_SEND_TO,
		transport_type: "beacon",
		event_label: channel
	});
}
function goToThanks() {
	window.setTimeout(() => {
		if (!window.location.pathname.startsWith("/obrigado")) window.location.assign("/obrigado");
	}, 400);
}
var LeadLink = (0, import_react.forwardRef)(function LeadLink({ channel, text, className, children }, ref) {
	const message = text ?? "Olá, gostaria de informações da Disco Laser";
	const plain = channel === "phone" ? SITE.phoneHref : waLink(message);
	const [href, setHref] = (0, import_react.useState)(plain);
	(0, import_react.useEffect)(() => {
		captureCampaign();
		if (channel === "whatsapp") setHref(trackedWa(message));
	}, [channel, message]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref,
		href,
		className,
		onClick: () => {
			if (channel === "phone") {
				trackLead("phone", { conversion: true });
				return;
			}
			trackLead("whatsapp");
			goToThanks();
		},
		...channel === "whatsapp" ? {
			target: "_blank",
			rel: "noopener noreferrer"
		} : {},
		children
	});
});
//#endregion
export { WhatsAppIcon as a, goToThanks as c, pageMeta as d, serviceLd as f, PUBLIC_PATHS as i, jsonLdScript as l, trackedWa as m, GOOGLE_ADS_ID as n, captureCampaign as o, trackLead as p, LeadLink as r, faqLd as s, Button as t, localBusinessLd as u };
