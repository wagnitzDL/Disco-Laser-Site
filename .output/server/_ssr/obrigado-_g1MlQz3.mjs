import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as SITE } from "./site-Hy4REUAz.mjs";
import { a as WhatsAppIcon, p as trackLead, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/obrigado-_g1MlQz3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThanksPage() {
	(0, import_react.useEffect)(() => {
		trackLead("form", { conversion: true });
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-20 sm:pt-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Disco Laser" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 max-w-2xl text-display",
				children: "Orçamento a caminho"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: [
					"O WhatsApp da Disco Laser deve ter aberto em outra aba. Se não abriu, toque no botão. Telefone ",
					SITE.phone,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "whatsapp",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
						channel: "whatsapp",
						text: "Olá, acabei de pedir um orçamento no site da Disco Laser",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "Abrir WhatsApp"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Voltar ao início"
					})
				})]
			})
		]
	}) });
}
//#endregion
export { ThanksPage as component };
