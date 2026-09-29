import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as Section, n as PageHero, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as WhatsAppIcon, r as LeadLink, t as Button } from "./lead-link-D3Ov461A.mjs";
import { i as QuoteDialog } from "./router-vV1FZYJC.mjs";
import { t as RegionStrip } from "./region-strip-D0htrqkr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jukebox-CHqhL07V.js
var import_jsx_runtime = require_jsx_runtime();
var MODELS = [
	{
		name: "Brg 2016",
		kind: "Chão",
		img: "/images/jukebox-brg.jpg"
	},
	{
		name: "2014 Play Média",
		kind: "Chão",
		img: "/images/jukebox-2014.jpg"
	},
	{
		name: "Diamante Original",
		kind: "Modificada",
		img: "/images/jukebox-diamante.jpg"
	},
	{
		name: "Brg Parede",
		kind: "Parede",
		img: "/images/jukebox-parede.jpg"
	},
	{
		name: "2013 Play Grande",
		kind: "Chão",
		img: "/images/jukebox-play.jpg"
	},
	{
		name: "Vênus Original",
		kind: "Modificada",
		img: "/images/jukebox-venus.jpg"
	},
	{
		name: "StarLight Original",
		kind: "Modificada",
		img: "/images/jukebox-star.jpg"
	},
	{
		name: "Thunder Original",
		kind: "Modificada",
		img: "/images/jukebox-thunder.jpg"
	}
];
function JukeboxPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Bares e comércio",
			title: "Aluguel de jukebox para bares em SC",
			lead: "A máquina de música que vira o bar. Comodato ou comissão em Itajaí, Balneário Camboriú, Camboriú, Blumenau e Florianópolis.",
			image: "/images/servico-jukebox.jpg",
			imageAlt: "Jukebox digital em um bar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Como alugar" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl sm:text-5xl",
					children: "Comodato ou comissão."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Para estabelecimento comercial a Disco Laser trabalha com locação contínua: a máquina fica no seu ponto, o repertório circula sozinho e o cliente põe a música. Combinamos o modelo (chão ou parede) e a forma de cobrança — comodato ou comissão."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 leading-relaxed text-muted",
					children: "Também atendemos festa e evento pontual. Manda o perfil do espaço que indicamos o gabinete certo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, {
						defaultService: "Jukebox para bar",
						trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							children: "Quero no meu bar"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "whatsapp",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
							channel: "whatsapp",
							text: "Olá, gostaria de saber sobre o aluguel de Jukebox para meu bar",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
						})
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-video overflow-hidden rounded-xl bg-elevated",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					className: "size-full",
					src: "https://www.youtube.com/embed/zJ-pqOk34vY",
					title: "Vídeo das máquinas de jukebox Disco Laser",
					allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true
				})
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
			className: "bg-card",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Modelos" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-4xl",
					children: "Alguns gabinetes da frota"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-sm text-muted",
					children: "Disponibilidade varia. Na conversa a gente confirma o que está livre para o seu ponto."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: MODELS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "overflow-hidden rounded-xl bg-elevated shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: m.img,
							alt: `Jukebox ${m.name}`,
							className: "aspect-[3/4] w-full bg-[#14110e] object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-kicker tracking-[0.16em] text-gold uppercase",
								children: m.kind
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-medium",
								children: m.name
							})]
						})]
					}, m.name))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RegionStrip, { service: "jukebox" }) })
	] });
}
//#endregion
export { JukeboxPage as component };
