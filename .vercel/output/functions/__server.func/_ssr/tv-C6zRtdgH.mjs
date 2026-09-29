import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as QuoteDialog, d as WhatsAppIcon, f as waLink, o as Button } from "./router-BHbBkujo.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tv-C6zRtdgH.js
var import_jsx_runtime = require_jsx_runtime();
var TVS = [
	{
		name: "TV LED Full HD 58\"",
		spec: "Horizontal e vertical · multimídia para reprodução automatizada",
		img: "/photos/tv-58.jpg"
	},
	{
		name: "TV LED 4K LG 75\"",
		spec: "Horizontal e vertical · suporte com altura padrão",
		img: "/photos/tv-75.jpg"
	},
	{
		name: "TV LED 4K LG 43\"",
		spec: "Horizontal e vertical · com suporte",
		img: "/photos/tv-43.jpg"
	},
	{
		name: "TV HD 32\"",
		spec: "Horizontal e vertical · com suporte",
		img: "/photos/tv-32.jpg"
	}
];
function TvPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Locação de TV",
			title: "Aluguel de TV em Balneário Camboriú e SC",
			lead: "Televisores de 32 a 75 polegadas para eventos, vitrines e transmissão em Itajaí, Camboriú, Balneário Camboriú e região. Horizontal ou vertical, com suporte.",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-5 sm:grid-cols-2",
				children: TVS.map((tv) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: tv.img,
						alt: tv.name,
						className: "h-56 w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-medium",
							children: tv.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: tv.spec
						})]
					})]
				}, tv.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink("Olá, Disco Laser. Gostaria de alugar uma TV"),
						target: "_blank",
						rel: "noopener noreferrer",
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
