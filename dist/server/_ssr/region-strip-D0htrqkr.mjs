import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { r as REGIONS, t as Kicker } from "./section-CSI_70ka.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/region-strip-D0htrqkr.js
var import_jsx_runtime = require_jsx_runtime();
function RegionStrip({ service }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Atendimento regional" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "font-display mt-2 text-4xl",
			children: [service === "karaokê" ? "Aluguel de karaokê" : `Aluguel de ${service}`, " por cidade"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-muted",
			children: "Cada cidade tem página própria, com o que muda na entrega. Use o link da sua cidade no anúncio ou mande direto no WhatsApp."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 flex flex-wrap gap-2",
			children: REGIONS.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/regiao/$cidade",
				params: { cidade: city.slug },
				className: "inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.08)] hover:text-gold",
				children: city.name
			}) }, city.slug))
		})
	] });
}
//#endregion
export { RegionStrip as t };
