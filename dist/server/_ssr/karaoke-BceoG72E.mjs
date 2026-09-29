import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as SITE } from "./site-Hy4REUAz.mjs";
import { a as WhatsAppIcon, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ChevronRight, b as Check, g as ExternalLink, v as ChevronLeft, y as ChevronDown } from "../_libs/lucide-react.mjs";
import { i as QuoteDialog, r as FAQ } from "./router-vV1FZYJC.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
import { t as PhotoAlbum } from "./photo-album-BKrh2T1m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/karaoke-BceoG72E.js
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
function VideoAlbum({ videos }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const startX = (0, import_react.useRef)(null);
	const clip = videos[index];
	const many = videos.length > 1;
	function go(step) {
		setIndex((i) => (i + step + videos.length) % videos.length);
	}
	if (!clip) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-xl bg-black",
				onTouchStart: (e) => {
					startX.current = e.touches[0]?.clientX ?? null;
				},
				onTouchEnd: (e) => {
					if (startX.current == null) return;
					const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
					if (dx > 40) go(-1);
					else if (dx < -40) go(1);
					startX.current = null;
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: clip.src,
					controls: true,
					playsInline: true,
					muted: true,
					autoPlay: true,
					onEnded: () => go(1),
					className: "mx-auto max-h-[640px] w-full object-contain",
					"aria-label": clip.label
				}, clip.src), many ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground",
						onClick: () => go(-1),
						"aria-label": "Vídeo anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground",
						onClick: () => go(1),
						"aria-label": "Próximo vídeo",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground",
						children: [
							index + 1,
							" / ",
							videos.length
						]
					})
				] }) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-center text-sm text-muted",
				children: clip.label
			}),
			many ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex justify-center gap-2",
				children: videos.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": item.label,
					onClick: () => setIndex(i),
					className: i === index ? "size-2.5 rounded-full bg-gold" : "size-2.5 rounded-full bg-foreground/25"
				}, item.src))
			}) : null
		]
	});
}
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
var MODELS = [
	{
		src: "/images/karaoke-pro.jpg",
		alt: "Karaokê Pro com tela de 40 polegadas, microfones AKG e som Frahm GRT 12"
	},
	{
		src: "/images/karaoke-gabinete.jpg",
		alt: "Karaokê gabinete com tela de 24 polegadas e mais de 8 mil músicas"
	},
	{
		src: "/images/karaoke-montavel.jpg",
		alt: "Karaokê montável com tela de 32 polegadas e caixa JBL 15"
	},
	{
		src: "/images/karaoke-sem-tv.jpg",
		alt: "Karaokê sem TV, caixa JBL 10 polegadas e dois microfones sem fio"
	}
];
var CLIPS = [
	{
		src: "/videos/karaoke-tv-torre.mp4",
		label: "Karaokê com TV, caixa de retorno e torre de som"
	},
	{
		src: "/videos/karaoke-projetor.mp4",
		label: "Karaokê com projetor no salão"
	},
	{
		src: "/videos/karaoke-jbl.mp4",
		label: "Karaokê montável com caixa JBL"
	},
	{
		src: "/videos/karaoke-sala.mp4",
		label: "Karaokê com TV e torre de som"
	},
	{
		src: "/videos/karaoke-gabinete.mp4",
		label: "Karaokê gabinete"
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
							channel: "whatsapp",
							text: "Olá, gostaria de alugar um Karaokê",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoAlbum, {
				photos: MODELS,
				autoMs: 3e3,
				frameClass: "relative aspect-square w-full overflow-hidden rounded-xl bg-[#14110e]"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoAlbum, { videos: CLIPS })] }),
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
