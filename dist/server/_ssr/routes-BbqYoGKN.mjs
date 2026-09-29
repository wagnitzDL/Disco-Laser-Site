import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, r as REGIONS, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as SITE, i as SERVICES, n as DEFAULT_WA } from "./site-Hy4REUAz.mjs";
import { a as WhatsAppIcon, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as MapPin, i as Truck, l as Music2, n as Wrench, o as Speaker, r as Tv, u as MicVocal, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as QuoteForm, i as QuoteDialog } from "./router-vV1FZYJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BbqYoGKN.js
var import_jsx_runtime = require_jsx_runtime();
var ICONS = {
	karaoke: MicVocal,
	jukebox: Music2,
	tv: Tv,
	som: Speaker
};
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[88vh] overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-festa.jpg",
					alt: "Amigos cantando karaokê em uma festa",
					className: "absolute inset-0 size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							className: "rise-in",
							children: "Camboriú · Itajaí · Balneário Camboriú"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display rise-in mt-3 max-w-4xl text-display text-foreground",
							style: { animationDelay: "70ms" },
							children: [
								"Aluguel de karaokê",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"em Santa Catarina"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg",
							style: { animationDelay: "130ms" },
							children: "A festa começa quando o microfone liga. Jukebox, TV e som com entrega e montagem a partir de Camboriú — Itajaí, Balneário Camboriú, Itapema e o Vale."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in mt-8 flex flex-wrap gap-3",
							style: { animationDelay: "180ms" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, { trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "lg",
									children: "Pedir orçamento"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "whatsapp",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
										channel: "whatsapp",
										text: DEFAULT_WA,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "Chamar no WhatsApp"]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/karaoke",
										children: ["Ver karaokê", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
									})
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "laser-rule" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			className: "py-12 sm:py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 sm:grid-cols-3",
				children: [
					{
						n: "+10 mil",
						l: "músicas no repertório, com pontuação"
					},
					{
						n: "Entrega",
						l: "e montagem inclusas na região"
					},
					{
						n: "SC",
						l: "Itajaí, BC, Camboriú, Blumenau e mais"
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l border-gold/40 pl-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl text-foreground",
						children: item.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: item.l
					})]
				}, item.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "pt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "O que alugamos" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Quatro jeitos de animar a noite"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted",
					children: "Do aniversário em casa ao bar da esquina. Equipamento próprio, revisado, com quem entende de festa no Litoral Norte."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: SERVICES.map((svc, i) => {
					const Icon = ICONS[svc.slug];
					const featured = i === 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: svc.href,
						className: featured ? "group relative isolate min-h-80 overflow-hidden rounded-2xl md:col-span-2 md:min-h-[28rem]" : "group relative isolate min-h-72 overflow-hidden rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: svc.image,
								alt: "",
								className: "absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full min-h-72 flex-col justify-end p-6 sm:p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-10 items-center justify-center rounded-md bg-elevated/80 text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-kicker tracking-[0.18em] text-gold uppercase",
										children: svc.kicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display mt-1 text-4xl sm:text-5xl",
										children: svc.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 max-w-md text-sm leading-relaxed text-muted",
										children: svc.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground",
										children: ["Conhecer", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })]
									})
								]
							})
						]
					}, svc.slug);
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Como funciona" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Três passos. Zero complicação."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: [
						{
							icon: MicVocal,
							n: "01",
							t: "Peça o orçamento",
							d: "WhatsApp ou formulário. Diz a data, a cidade e o que precisa — karaokê, som, TV ou jukebox."
						},
						{
							icon: Truck,
							n: "02",
							t: "A gente entrega e monta",
							d: "Leva, instala e testa no local. Você não precisa entender de cabo nem de equalizador."
						},
						{
							icon: Wrench,
							n: "03",
							t: "Canta a noite toda",
							d: "Repertório atualizado, pontuação na tela e suporte se algo sair do tom."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-elevated p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "size-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl text-subtle",
									children: step.n
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg font-medium",
								children: step.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: step.d
							})
						]
					}, step.n))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Repertório" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Nacional, internacional e o hit da semana."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: "Mais de 10 mil faixas com pontuação. Consulte o buscador online ou baixe as listas em PDF antes da festa — ninguém perde o momento por não achar a música."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/repertorio",
							children: ["Buscar músicas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.catalogApp,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "Buscador completo"
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/karaoke-mics.jpg",
				alt: "Microfones sem fio prontos para karaokê",
				className: "h-80 w-full rounded-xl object-cover sm:h-96"
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Onde atendemos" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Do Vale ao Litoral Norte"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "Sede em Camboriú. Entrega nas cidades abaixo e região de Santa Catarina."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 flex flex-wrap gap-2",
					children: REGIONS.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/regiao/$cidade",
						params: { cidade: city.slug },
						className: "inline-flex h-11 items-center rounded-full bg-elevated px-4 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.08)] hover:text-gold",
						children: ["Aluguel em ", city.name]
					}) }, city.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "orcamento",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Orçamento" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-2 text-4xl sm:text-5xl",
						children: "Fala com a gente."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted",
						children: "Resposta pelo WhatsApp. Sem cadastro, sem espera em formulário perdido."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 grid gap-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0 text-gold" }), SITE.address.full]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Telefone ",
								SITE.phone,
								" · WhatsApp ",
								SITE.whatsappDisplay
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SITE.email}`,
								className: "hover:text-foreground",
								children: SITE.email
							}) })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: "Mapa da Disco Laser em Camboriú",
							src: "https://maps.google.com/maps?q=Rua%20Manoel%20Anast%C3%A1cio%20Pereira%2085%20Cambori%C3%BA&z=16&output=embed",
							className: "h-56 w-full grayscale",
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.08)] sm:p-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {})
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
