import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronDown, g as ExternalLink, v as Check } from "../_libs/lucide-react.mjs";
import { a as QuoteDialog, d as WhatsAppIcon, f as waLink, o as Button, r as FAQ, u as SITE } from "./router-BHbBkujo.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karaoke-pnbldAWX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b border-border", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-left text-base font-medium transition-colors hover:text-gold [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 shrink-0 text-subtle transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm text-muted data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pt-0 pb-4 leading-relaxed", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var INCLUDED = [
	"Máquina de karaokê com pontuação",
	"TV tela plana",
	"Caixa de som",
	"Dois microfones sem fio",
	"Pedestais",
	"Entrega e montagem na região",
	"Mais de 10 mil músicas — nacional e internacional",
	"Listas em PDF e buscador online"
];
var GALLERY = [
	{
		src: "/images/servico-karaoke.jpg",
		alt: "Kit profissional de karaokê com TV, microfones e caixa"
	},
	{
		src: "/images/karaoke-festa.jpg",
		alt: "Convidados cantando karaokê em uma festa"
	},
	{
		src: "/images/karaoke-mics.jpg",
		alt: "Microfones sem fio e receptor"
	}
];
function KaraokePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Aluguel de karaokê",
			title: "Aluguel de karaokê em Santa Catarina",
			lead: "O microfone que salva a festa. Kit com TV, som e mais de 10 mil músicas em Itajaí, Balneário Camboriú, Camboriú, Itapema e região. Entrega e montagem.",
			image: "/images/karaoke-festa.jpg",
			imageAlt: "Amigos cantando karaokê"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "O kit" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Tudo incluso. Você só canta."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Modelos para sala, salão e área gourmet. TV, som e microfones chegam juntos — sem montar quebra-cabeça na hora da festa."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-3",
					children: INCLUDED.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 text-sm text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-gold" }), item]
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, {
						defaultService: "Karaokê",
						trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "Pedir orçamento"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "whatsapp",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waLink("Olá, gostaria de alugar um Karaokê"),
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3",
				children: GALLERY.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img.src,
					alt: img.alt,
					className: i === 0 ? "col-span-2 h-64 rounded-xl object-cover sm:h-80" : "h-44 rounded-lg object-cover sm:h-52"
				}, img.src))
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Repertório" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl",
					children: "Consulte antes da festa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "Listas nacionais e internacionais em PDF, além do buscador online com o catálogo completo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/repertorio",
								children: "Buscar no site"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.catalogApp,
								target: "_blank",
								rel: "noopener noreferrer",
								children: ["Buscador completo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.nacionalPdf,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "PDF nacional"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ghost",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: SITE.internacionalPdf,
								target: "_blank",
								rel: "noopener noreferrer",
								children: "PDF internacional"
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 aspect-video overflow-hidden rounded-xl bg-elevated",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						className: "size-full",
						src: "https://www.youtube.com/embed/E-PprnsLYE4",
						title: "Vídeo demonstrativo do karaokê Disco Laser",
						allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: true
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Dúvidas" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-4xl",
				children: "Perguntas frequentes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-8 max-w-3xl",
				children: FAQ.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: item.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: item.a })]
				}, item.q))
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionStrip, { service: "karaokê" })
		})
	] });
}
//#endregion
export { KaraokePage as component };
