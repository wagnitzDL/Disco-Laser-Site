import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, r as REGIONS, t as Kicker } from "./section-CSI_70ka.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/regiao.index-Tp-gbrmU.js
var import_jsx_runtime = require_jsx_runtime();
function RegiaoIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-14 sm:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Santa Catarina" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 max-w-3xl text-display",
				children: "Aluguel de karaokê na sua cidade"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Sede em Camboriú. Escolha a cidade para ver entrega, karaokê, jukebox, TV e som — e pedir orçamento no WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-10 grid gap-4 sm:grid-cols-2",
				children: REGIONS.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/regiao/$cidade",
					params: { cidade: city.slug },
					className: "block rounded-xl bg-card p-5 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] transition-colors hover:text-gold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-kicker tracking-[0.16em] text-gold uppercase",
							children: city.area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 text-lg font-medium text-foreground",
							children: city.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: city.lead
						})
					]
				}) }, city.slug))
			})
		]
	}) });
}
//#endregion
export { RegiaoIndex as component };
