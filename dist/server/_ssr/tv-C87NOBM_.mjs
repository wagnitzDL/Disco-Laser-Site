import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as WhatsAppIcon, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { i as QuoteDialog } from "./router-vV1FZYJC.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
import { t as PhotoAlbum } from "./photo-album-BKrh2T1m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tv-C87NOBM_.js
var import_jsx_runtime = require_jsx_runtime();
var TVS = [
	{
		name: "TV LG 86 polegadas 4K QNED",
		spec: "Suporte de altura padrão em treliça de alumínio",
		featured: true,
		photos: [{
			src: "/images/tv-86-evento.jpg",
			alt: "TV LG 86 polegadas 4K QNED no suporte de altura padrão, em evento"
		}, {
			src: "/images/tv-86-salao.jpg",
			alt: "TV LG 86 polegadas no suporte de treliça, em salão"
		}],
		videos: ["/videos/tv-86.mp4"]
	},
	{
		name: "TV LG 75 polegadas 4K QNED",
		spec: "Suporte de altura padrão em treliça de alumínio",
		photos: [{
			src: "/images/tv-75-suporte.jpg",
			alt: "TV LG 75 polegadas 4K QNED no suporte de altura padrão"
		}, {
			src: "/images/tv-75-salao.jpg",
			alt: "TV LG 75 polegadas 4K QNED em salão de festa"
		}],
		videos: ["/videos/tv-75.mp4"]
	},
	{
		name: "TV 65 polegadas",
		spec: "Suporte de chão com base cruz",
		photos: [{
			src: "/images/tv-65.jpg",
			alt: "TV 65 polegadas no suporte de chão, em salão"
		}],
		videos: ["/videos/tv-65.mp4"]
	},
	{
		name: "TV LG 43 polegadas 4K QNED",
		spec: "Suporte de chão com base cruz",
		photos: [{
			src: "/images/tv-43-salao.jpg",
			alt: "TV LG 43 polegadas 4K QNED no suporte de chão"
		}, {
			src: "/images/tv-43-evento.jpg",
			alt: "TV LG 43 polegadas 4K QNED em evento"
		}],
		videos: ["/videos/tv-43.mp4"]
	}
];
function TvPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Locação de TV",
			title: "Aluguel de TV em Balneário Camboriú e SC",
			lead: "Televisores de 43 a 86 polegadas para eventos, vitrines e transmissão em Itajaí, Camboriú, Balneário Camboriú e região. A LG 86 polegadas 4K QNED sai com suporte de altura padrão.",
			image: "/images/servico-tv.jpg",
			imageAlt: "TVs LED em suportes para evento"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Modelos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "TVs para locação"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, {
					defaultService: "Aluguel de TV",
					trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, { children: "Pedir orçamento" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-12",
				children: TVS.map((tv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: tv.featured ? "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(197,160,53,0.45)]" : "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoAlbum, { photos: tv.photos }),
						tv.videos?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap justify-center gap-3 bg-black px-3 py-4",
							children: tv.videos.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src,
								poster: tv.photos[0]?.src,
								controls: true,
								playsInline: true,
								muted: true,
								loop: true,
								className: "aspect-[9/16] w-full max-w-[280px] object-contain"
							}, src))
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5 sm:p-8",
							children: [
								tv.featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-kicker font-medium tracking-[0.18em] text-gold uppercase",
									children: "Destaque"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display mt-2 text-4xl",
									children: tv.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
									children: tv.spec
								})
							]
						})
					]
				}, tv.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
						channel: "whatsapp",
						text: "Olá, Disco Laser. Gostaria de alugar uma TV",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
					})
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionStrip, { service: "TV" })
		})
	] });
}
//#endregion
export { TvPage as component };
