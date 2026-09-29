import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, n as PageHero, r as REGIONS, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as SITE } from "./site-Hy4REUAz.mjs";
import { a as WhatsAppIcon, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as QuoteForm, n as Route } from "./router-vV1FZYJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/regiao._cidade-byjYBcEF.js
var import_jsx_runtime = require_jsx_runtime();
function CityPage() {
	const city = Route.useLoaderData();
	const others = REGIONS.filter((r) => r.slug !== city.slug);
	const wa = `Olá, quero orçamento de karaokê em ${city.name}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: city.area,
			title: `Aluguel de karaokê em ${city.name}`,
			lead: city.lead,
			image: city.image,
			imageAlt: `Festa com karaokê atendida a partir de Camboriú para ${city.name}`
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Trilha",
			className: "mb-8 text-sm text-muted",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "hover:text-foreground",
					children: "Início"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2 text-subtle",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/regiao",
					className: "hover:text-foreground",
					children: "Cidades"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "px-2 text-subtle",
					children: "/"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground",
					children: city.name
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Entrega" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display mt-2 text-4xl",
							children: ["Como chega em ", city.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 leading-relaxed text-muted",
							children: city.delivery
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Karaokê" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 text-lg font-medium",
							children: ["Kit para festa em ", city.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: city.karaoke
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/karaoke",
							className: "mt-3 inline-block text-sm text-gold hover:underline",
							children: "Ver o kit completo de karaokê"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Bar e comércio" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-2 text-lg font-medium",
							children: ["Jukebox, TV e som em ", city.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 leading-relaxed text-muted",
							children: city.commerce
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-4 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/jukebox",
									className: "text-gold hover:underline",
									children: "Jukebox"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/tv",
									className: "text-gold hover:underline",
									children: "TV"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/som",
									className: "text-gold hover:underline",
									children: "Som"
								})
							]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "whatsapp",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
								channel: "whatsapp",
								text: wa,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }),
									"Orçamento em ",
									city.name
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
								channel: "phone",
								children: ["Ligar ", SITE.phone]
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Pedir orçamento"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 mb-6 text-sm text-muted",
						children: [
							"A mensagem abre no WhatsApp com a cidade ",
							city.name,
							" preenchida. Sem cadastro."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {
						defaultService: "Karaokê",
						defaultCity: city.name
					})
				]
			})]
		})] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: ["Perto de ", city.name] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl",
					children: "Outras cidades da rota"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: others.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/regiao/$cidade",
						params: { cidade: r.slug },
						className: "inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm hover:text-gold",
						children: r.name
					}) }, r.slug))
				})
			]
		})
	] });
}
//#endregion
export { CityPage as component };
