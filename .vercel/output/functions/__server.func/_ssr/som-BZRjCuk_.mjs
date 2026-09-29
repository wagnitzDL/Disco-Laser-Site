import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as QuoteDialog, d as WhatsAppIcon, f as waLink, o as Button } from "./router-BHbBkujo.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/som-BZRjCuk_.js
var import_jsx_runtime = require_jsx_runtime();
var GEAR = [
	{
		name: "Caixa ativa Electro-Voice ZX15",
		spec: "1000 W",
		img: "/photos/som-ev.jpg"
	},
	{
		name: "Caixa ativa JBL JS15BT",
		spec: "15\" · 200 W RMS",
		img: "/photos/som-jbl.jpg"
	},
	{
		name: "Line vertical Frahm GRT12",
		spec: "500 W",
		img: "/photos/som-grt12.jpg"
	},
	{
		name: "Line vertical MAK PRO 12\"",
		spec: "MK-CA4.8SW12.1K · 500 W",
		img: "/photos/som-mak.jpg"
	}
];
var MICS = [
	"Microfone sem fio duplo Arcano BB2 cardioide",
	"Microfone sem fio duplo Dylan D-9000 Power",
	"Microfone sem fio AKG WMS 40 Pro — único ou duplo"
];
function SomPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Equipamentos de som",
			title: "Locação de som para eventos em SC",
			lead: "Caixas ativas, line array e microfones sem fio para evento, bar e cerimônia em Itajaí, Balneário Camboriú, Camboriú e região. Montagem inclusa.",
			image: "/images/servico-som.jpg",
			imageAlt: "Caixas de som profissionais em palco"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Caixas e line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-4xl sm:text-5xl",
				children: "Equipamentos para locação"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: GEAR.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.img,
						alt: g.name,
						className: "h-52 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker tracking-[0.16em] text-gold uppercase",
							children: g.spec
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-lg font-medium",
							children: g.name
						})]
					})]
				}, g.name))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Microfones" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-2 text-4xl",
						children: "Sem fio, único ou duplo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid gap-3 text-sm text-muted",
						children: MICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border-l border-gold/40 pl-4",
							children: m
						}, m))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm text-muted",
						children: "Também locamos TVs de 58\\\", 40\\\" e 32\\\" junto com o som, se a festa pedir imagem."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, {
							defaultService: "Equipamentos de som",
							trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								children: "Pedir orçamento"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "whatsapp",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: waLink("Olá, Disco Laser. Gostaria de alugar equipamentos de som"),
								target: "_blank",
								rel: "noopener noreferrer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
							})
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video overflow-hidden rounded-xl bg-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "size-full",
						src: "https://www.youtube.com/embed/egA8-DIFhMw",
						title: "Vídeo dos equipamentos de som Disco Laser",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionStrip, { service: "som" }) })
	] });
}
//#endregion
export { SomPage as component };
