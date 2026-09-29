import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as cn, i as Section, o as regionBySlug, r as REGIONS, t as Kicker } from "./section-CSI_70ka.mjs";
import { a as SITE, r as NAV, t as CITIES } from "./site-Hy4REUAz.mjs";
import { a as WhatsAppIcon, c as goToThanks, d as pageMeta, f as serviceLd, i as PUBLIC_PATHS, l as jsonLdScript, m as trackedWa, n as GOOGLE_ADS_ID, o as captureCampaign, p as trackLead, r as LeadLink, s as faqLd, t as Button, u as localBusinessLd } from "./lead-link-D3Ov461A.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TriangleAlert, c as Phone, d as Menu, f as MapPin, g as ExternalLink, h as Facebook, m as Instagram, p as Mail, s as Search, t as X } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-vV1FZYJC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger$1;
var SheetClose = DialogClose;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/80", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-72 flex-col bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.1)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm text-muted opacity-70 transition-opacity hover:opacity-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Fechar"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-card p-6 shadow-[0_0_0_1px_rgba(244,237,228,0.1)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm text-muted opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Fechar"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col space-y-1.5 text-left", className),
		...props
	});
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-2xl text-foreground", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("text-sm text-muted", className),
		...props
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-elevated px-3 py-2 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.1)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted uppercase", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-28 w-full rounded-lg bg-elevated px-3 py-3 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.1)] transition-[box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var SERVICE_OPTIONS = [
	"Karaokê",
	"Jukebox para bar",
	"Aluguel de TV",
	"Equipamentos de som",
	"Outro"
];
function QuoteForm({ defaultService = "", defaultCity = "", onSent }) {
	const [name, setName] = (0, import_react.useState)("");
	const [city, setCity] = (0, import_react.useState)(defaultCity);
	const [service, setService] = (0, import_react.useState)(defaultService);
	const [date, setDate] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	function handleSubmit(e) {
		e.preventDefault();
		captureCampaign();
		const lines = [
			"Olá, gostaria de um orçamento da Disco Laser.",
			name ? `Nome: ${name}` : null,
			service ? `Serviço: ${service}` : null,
			city ? `Cidade: ${city}` : null,
			date ? `Data: ${date}` : null,
			message ? `Detalhes: ${message}` : null
		].filter(Boolean);
		trackLead("form");
		window.open(trackedWa(lines.join("\n")), "_blank", "noopener,noreferrer");
		goToThanks();
		onSent?.();
	}
	const fieldClass = "w-full h-11 rounded-md bg-elevated px-3 text-sm text-foreground shadow-[0_0_0_1px_rgba(244,237,228,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: handleSubmit,
		className: "grid gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "quote-name",
					children: "Nome"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "quote-name",
					required: true,
					value: name,
					onChange: (e) => setName(e.target.value),
					placeholder: "Seu nome",
					autoComplete: "name"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "quote-service",
						children: "Serviço"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "quote-service",
						required: true,
						value: service,
						onChange: (e) => setService(e.target.value),
						className: fieldClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Selecione"
						}), SERVICE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: opt,
							children: opt
						}, opt))]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "quote-city",
							children: "Cidade"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "quote-city",
							required: true,
							list: "quote-cities",
							value: city,
							onChange: (e) => setCity(e.target.value),
							placeholder: "Itajaí, Camboriú…",
							className: fieldClass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
							id: "quote-cities",
							children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: c }, c))
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "quote-date",
					children: "Data do evento"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "quote-date",
					type: "date",
					value: date,
					onChange: (e) => setDate(e.target.value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "quote-msg",
					children: "Mensagem"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "quote-msg",
					value: message,
					onChange: (e) => setMessage(e.target.value),
					placeholder: "Quantidade de pessoas, local, horário…"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "whatsapp",
				size: "lg",
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "Enviar no WhatsApp"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs leading-relaxed text-subtle",
				children: [
					"Ao enviar, você concorda com o uso desses dados para o orçamento.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacidade",
						className: "underline hover:text-foreground",
						children: "Política de Privacidade"
					}),
					"."
				]
			})
		]
	});
}
function QuoteDialog({ trigger, defaultService }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Pedir orçamento" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Preencha e a gente continua no WhatsApp — resposta rápida, sem cadastro." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteForm, {
			defaultService,
			onSent: () => setOpen(false)
		})] })]
	});
}
function NavLinks({ onClick, stacked = false }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Principal",
		className: cn(stacked ? "flex flex-col gap-1" : "hidden items-center gap-6 md:flex"),
		children: NAV.map((item) => {
			const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
			const link = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.href,
				onClick,
				className: cn("text-sm font-medium tracking-wide transition-colors duration-150", stacked ? "rounded-md px-3 py-3" : "", active ? "text-gold" : "text-muted hover:text-foreground"),
				children: item.label
			});
			return stacked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetClose, {
				asChild: true,
				children: link
			}, item.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: link }, item.href);
		})
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Disco Laser — início",
					className: "shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/logo.png",
						alt: "Discolaser",
						className: "h-10 w-auto outline-none sm:h-11"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "whatsapp",
							size: "sm",
							className: "hidden sm:inline-flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
								channel: "whatsapp",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, { trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							className: "hidden md:inline-flex",
							children: "Orçamento"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "icon",
									className: "md:hidden",
									"aria-label": "Abrir menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/logo.png",
									alt: "Discolaser",
									width: 2685,
									height: 901,
									className: "mb-8 h-11 w-auto max-w-full shrink-0 self-start object-contain outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLinks, {
									stacked: true,
									onClick: () => setOpen(false)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteDialog, { trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "w-full",
										children: "Pedir orçamento"
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										variant: "whatsapp",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
											channel: "whatsapp",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
										})
									})]
								})
							] })]
						})
					]
				})
			]
		})
	});
}
function Wordmark({ className, compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("flex flex-col leading-none", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-display text-[1.65rem] tracking-wide sm:text-[1.85rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "DISCO"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: " LASER"
			})]
		}), compact ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 text-[0.625rem] font-medium tracking-[0.22em] text-muted uppercase",
			children: "Jukebox e Karaokê"
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted",
						children: "Locação de karaokê, jukebox, TV e som para festas, bares e eventos em Santa Catarina."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.instagram,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Instagram",
							className: "flex size-11 items-center justify-center rounded-md text-muted shadow-[0_0_0_1px_rgba(244,237,228,0.12)] transition-colors hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.facebook,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Facebook",
							className: "flex size-11 items-center justify-center rounded-md text-muted shadow-[0_0_0_1px_rgba(244,237,228,0.12)] transition-colors hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "size-4" })
						})]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker font-medium tracking-[0.18em] text-gold uppercase",
						children: "Navegação"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-2",
						children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: "text-sm text-muted transition-colors hover:text-foreground",
							children: item.label
						}) }, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/regiao",
							className: "text-sm text-muted transition-colors hover:text-foreground",
							children: "Cidades"
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2",
						children: REGIONS.slice(0, 6).map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/regiao/$cidade",
							params: { cidade: city.slug },
							className: "text-sm text-muted hover:text-foreground",
							children: ["Karaokê em ", city.name]
						}) }, city.slug))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
					className: "not-italic",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-kicker font-medium tracking-[0.18em] text-gold uppercase",
						children: "Contato"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 grid gap-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-gold" }), SITE.address.full]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "flex gap-2 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-gold" }), SITE.phone]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${SITE.email}`,
								className: "flex gap-2 hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-gold" }), SITE.email]
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-border py-5 pb-24 text-center text-xs text-subtle md:pb-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Disco Laser Jukebox · Camboriú, SC"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/privacidade",
					className: "underline hover:text-foreground",
					children: "Política de Privacidade"
				})
			})]
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
		channel: "whatsapp",
		className: "fixed right-4 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-150 hover:scale-105 active:scale-95 md:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Falar no WhatsApp"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-7" })]
	});
}
function MobileCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-border bg-border pb-[env(safe-area-inset-bottom)] md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
			channel: "phone",
			className: "flex h-14 items-center justify-center gap-2 bg-elevated text-sm font-medium text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-gold" }), "Ligar"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LeadLink, {
			channel: "whatsapp",
			text: `Olá, vim pelo anúncio e quero orçamento da Disco Laser. Tel ${SITE.phone}`,
			className: "flex h-14 items-center justify-center gap-2 bg-whatsapp text-sm font-medium text-whatsapp-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), "WhatsApp"]
		})]
	});
}
var styles_default = "/assets/styles-D_r3yfgd.css";
var APP_NAME = "Disco Laser Locações";
var Route$11 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "Disco Laser — aluguel de karaokê, jukebox, TV e som em Itajaí, Balneário Camboriú, Camboriú e região de Santa Catarina."
			},
			{
				name: "robots",
				content: "index, follow, max-image-preview:large"
			},
			{
				name: "geo.region",
				content: "BR-SC"
			},
			{
				name: "geo.placename",
				content: "Camboriú"
			},
			{
				name: "google-site-verification",
				content: "VDGS-9VbO9pLoDO13uIDiSezP5apIcptK4XG7b-_GII"
			},
			{
				name: "theme-color",
				content: "#0C0A09"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		],
		scripts: [
			{
				src: `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`,
				async: true
			},
			{ children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GOOGLE_ADS_ID}');` },
			jsonLdScript(localBusinessLd())
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "pt-BR",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "min-h-dvh bg-background font-sans text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileCta, {})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-BbqYoGKN.mjs");
var Route$10 = createFileRoute("/")({
	head: () => pageMeta("Aluguel de Karaokê em Itajaí, BC e Camboriú | Disco Laser", "Aluguel de karaokê, jukebox, TV e som em Camboriú, Itajaí, Balneário Camboriú, Itapema e Santa Catarina. Entrega e montagem. WhatsApp (47) 99927-7622."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./jukebox-CHqhL07V.mjs");
var Route$9 = createFileRoute("/jukebox")({
	head: () => ({
		...pageMeta("Aluguel de Jukebox para Bares em Itajaí, BC e SC | Disco Laser", "Máquina de música para bares em Itajaí, Balneário Camboriú, Camboriú, Florianópolis e Santa Catarina. Locação em comodato ou comissão. WhatsApp (47) 99927-7622."),
		scripts: [jsonLdScript(serviceLd("Aluguel de jukebox para bares", "Locação de máquina de música em comodato ou comissão para bares e comércio em Santa Catarina."))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var FAQ = [
	{
		q: "Vocês entregam e montam?",
		a: "Sim. Na região de Camboriú, Itajaí, Balneário Camboriú e cidades vizinhas a entrega e a montagem fazem parte do aluguel. É só indicar o endereço e o horário."
	},
	{
		q: "Quantas músicas têm no repertório?",
		a: "Mais de 10 mil faixas, nacionais e internacionais, com sistema de pontuação. Dá para consultar no buscador ou nos PDFs antes do evento."
	},
	{
		q: "Atende a minha cidade?",
		a: "Atendemos Camboriú, Balneário Camboriú, Itajaí, Itapema, Navegantes, Brusque, Blumenau, Tijucas, Barra Velha, São José, Florianópolis e região. Se a sua cidade não está na lista, manda um WhatsApp."
	},
	{
		q: "Com quanta antecedência reservar?",
		a: "Fins de semana e feriados saem rápido. O ideal é falar o quanto antes; para datas próximas, chama no WhatsApp que confirmamos a disponibilidade na hora."
	}
];
var $$splitComponentImporter$6 = () => import("./karaoke-BceoG72E.mjs");
var Route$8 = createFileRoute("/karaoke")({
	head: () => ({
		...pageMeta("Aluguel de Karaokê em Itajaí, BC, Camboriú e SC | Disco Laser", "Aluguel de karaokê para festas em Itajaí, Balneário Camboriú, Camboriú, Itapema e região. Mais de 10 mil músicas, entrega e montagem. WhatsApp (47) 99927-7622."),
		scripts: [jsonLdScript(serviceLd("Aluguel de karaokê", "Locação de karaokê com TV, som, microfones e mais de 10 mil músicas em Santa Catarina. Entrega e montagem inclusas.")), jsonLdScript(faqLd(FAQ))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./obrigado-_g1MlQz3.mjs");
var Route$7 = createFileRoute("/obrigado")({
	head: () => ({ meta: [{ title: "Pedido enviado | Disco Laser" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacidade-DlQ6HsxR.mjs");
var Route$6 = createFileRoute("/privacidade")({
	head: () => pageMeta("Política de Privacidade | Disco Laser Locações", "Política de Privacidade da Disco Laser Locações, Camboriú/SC. Como tratamos nome, contato, orçamento e dados de anúncio, nos termos da LGPD."),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var N = [
	[
		"03755",
		"14 Bis",
		"Linda Juventude"
	],
	[
		"06074",
		"14 Bis",
		"Planeta Sonho"
	],
	[
		"01039",
		"14 Bis",
		"Bola de Meia Bola de Gude"
	],
	[
		"06197",
		"14 Bis",
		"Todo Azul do Mar"
	],
	[
		"03078",
		"14 Bis",
		"Espanhola"
	],
	[
		"30306",
		"1Kilo",
		"Deixe-me Ir"
	],
	[
		"02748",
		"A Banda Mais Bonita da Cidade",
		"Oração"
	],
	[
		"07480",
		"A Cor do Som",
		"Zanzibar"
	],
	[
		"07175",
		"A Cor do Som",
		"Menino Deus"
	],
	[
		"06402",
		"A Cor do Som",
		"Abri a Porta"
	],
	[
		"07505",
		"A Turma do Balão Mágico",
		"A Galinha Magricela"
	],
	[
		"01066",
		"A Turma do Balão Mágico",
		"Superfantástico"
	],
	[
		"03129",
		"A Turma do Balão Mágico",
		"Lindo Balão Azul"
	],
	[
		"03729",
		"Adoniran Barbosa",
		"Tiro ao Álvaro"
	],
	[
		"03273",
		"Adoniran Barbosa",
		"Trem das Onze"
	],
	[
		"03251",
		"Adoniran Barbosa",
		"Saudosa Maloca"
	],
	[
		"04161",
		"Adriana Calcanhotto",
		"Mentiras"
	],
	[
		"04160",
		"Adriana Calcanhotto",
		"Mais Feliz"
	],
	[
		"04138",
		"Adriana Calcanhotto",
		"Vambora"
	],
	[
		"06126",
		"Adriana Calcanhotto",
		"Devolva-me"
	],
	[
		"06822",
		"Adriana Calcanhotto",
		"Fico Assim Sem Você"
	],
	[
		"04458",
		"Adryana e a Rapaziada",
		"Só Faltava Você"
	],
	[
		"06752",
		"Alceu Valença",
		"Táxi Lunar"
	],
	[
		"03277",
		"Alceu Valença",
		"Tropicana"
	],
	[
		"03880",
		"Alceu Valença",
		"La Belle de Jour"
	],
	[
		"03903",
		"Alceu Valença",
		"Anunciação"
	],
	[
		"01604",
		"Alcione",
		"Faz Uma Loucura Por Mim"
	],
	[
		"09527",
		"Aline Barros",
		"Recomeçar"
	],
	[
		"01809",
		"Aline Barros",
		"Ressuscita-me"
	],
	[
		"02403",
		"Aline Barros",
		"A Mensagem da Cruz"
	],
	[
		"05622",
		"Aline Barros",
		"Não Há Deus Maior"
	],
	[
		"01486",
		"Almir Sater",
		"Beijinho"
	],
	[
		"02792",
		"Agridoce",
		"Dançando"
	],
	[
		"30876",
		"Alanzim Coreano",
		"Pega o Guanabara"
	],
	[
		"00001",
		"Ana Carolina",
		"Garganta"
	],
	[
		"00002",
		"Ana Carolina",
		"Elevador"
	],
	[
		"00003",
		"Anitta",
		"Show das Poderosas"
	],
	[
		"00004",
		"Anitta",
		"Envolver"
	],
	[
		"00005",
		"Belo",
		"Tudo de Novo"
	],
	[
		"00006",
		"Bruno & Marrone",
		"Dormi na Praça"
	],
	[
		"00007",
		"Capital Inicial",
		"Primeiros Erros"
	],
	[
		"00008",
		"Cazuza",
		"Exagerado"
	],
	[
		"00009",
		"Cazuza",
		"O Tempo Não Para"
	],
	[
		"00010",
		"Charlie Brown Jr.",
		"Céu Azul"
	],
	[
		"00011",
		"Chitãozinho & Xororó",
		"Evidências"
	],
	[
		"00012",
		"Cássia Eller",
		"Malandragem"
	],
	[
		"00013",
		"Djavan",
		"Sina"
	],
	[
		"00014",
		"Djavan",
		"Oceano"
	],
	[
		"00015",
		"Engenheiros do Hawaii",
		"Infinita Highway"
	],
	[
		"00016",
		"Fundo de Quintal",
		"Cheiro de Amor"
	],
	[
		"00017",
		"Gusttavo Lima",
		"Balada Boa"
	],
	[
		"00018",
		"Ivete Sangalo",
		"Sorte Grande"
	],
	[
		"00019",
		"Jorge Aragão",
		"Moleque"
	],
	[
		"00020",
		"Jorge & Mateus",
		"Amo Noite e Dia"
	],
	[
		"00021",
		"Legião Urbana",
		"Tempo Perdido"
	],
	[
		"00022",
		"Legião Urbana",
		"Pais e Filhos"
	],
	[
		"00023",
		"Luan Santana",
		"Meteoro"
	],
	[
		"00024",
		"Lulu Santos",
		"Tempos Modernos"
	],
	[
		"00025",
		"Marisa Monte",
		"Ainda Lembro"
	],
	[
		"00026",
		"Marília Mendonça",
		"Infiel"
	],
	[
		"00027",
		"Nando Reis",
		"All Star"
	],
	[
		"00028",
		"Os Paralamas do Sucesso",
		"A Novidade"
	],
	[
		"00029",
		"Pitty",
		"Equalize"
	],
	[
		"00030",
		"Raça Negra",
		"Cheia de Manias"
	],
	[
		"00031",
		"Roberto Carlos",
		"Detalhes"
	],
	[
		"00032",
		"Roberto Carlos",
		"Amigo"
	],
	[
		"00033",
		"Sandy & Junior",
		"A Lenda"
	],
	[
		"00034",
		"Skank",
		"Vou Deixar"
	],
	[
		"00035",
		"Skank",
		"Sutilmente"
	],
	[
		"00036",
		"Thiaguinho",
		"Buquê de Flor"
	],
	[
		"00037",
		"Titãs",
		"Epitáfio"
	],
	[
		"00038",
		"Tribalistas",
		"Velha Infância"
	],
	[
		"00039",
		"Zezé Di Camargo & Luciano",
		"É o Amor"
	],
	[
		"00040",
		"Zeca Pagodinho",
		"Deixa a Vida Me Levar"
	]
];
var I = [
	[
		"02533",
		"ABBA",
		"Mamma Mia"
	],
	[
		"04574",
		"ABBA",
		"Dancing Queen"
	],
	[
		"04787",
		"ABBA",
		"The Winner Takes It All"
	],
	[
		"04877",
		"ABBA",
		"Chiquitita"
	],
	[
		"02569",
		"Adele",
		"Rolling in the Deep"
	],
	[
		"02600",
		"Adele",
		"Someone Like You"
	],
	[
		"24376",
		"Adele",
		"Hello"
	],
	[
		"24002",
		"Adele",
		"Set Fire to the Rain"
	],
	[
		"24003",
		"Adele",
		"Skyfall"
	],
	[
		"26383",
		"Adele",
		"Easy On Me"
	],
	[
		"09072",
		"4 Non Blondes",
		"What's Up"
	],
	[
		"09033",
		"3 Doors Down",
		"Here Without You"
	],
	[
		"18221",
		"50 Cent",
		"In Da Club"
	],
	[
		"04938",
		"A Teens",
		"Mamma Mia"
	],
	[
		"04678",
		"Aerosmith",
		"I Don't Want to Miss a Thing"
	],
	[
		"18939",
		"Ace of Base",
		"The Sign"
	],
	[
		"24603",
		"Alan Walker",
		"Faded"
	],
	[
		"04922",
		"Alanis Morissette",
		"Ironic"
	],
	[
		"04850",
		"Alanis Morissette",
		"You Oughta Know"
	],
	[
		"05000",
		"The Cranberries",
		"Zombie"
	],
	[
		"09040",
		"The Cranberries",
		"Linger"
	],
	[
		"09010",
		"The Cure",
		"Boys Don't Cry"
	],
	[
		"18494",
		"The Cure",
		"Friday I'm In Love"
	],
	[
		"04733",
		"The Doors",
		"Light My Fire"
	],
	[
		"04576",
		"The Police",
		"Every Breath You Take"
	],
	[
		"04763",
		"The Police",
		"Roxanne"
	],
	[
		"02628",
		"The White Stripes",
		"Seven Nation Army"
	],
	[
		"24370",
		"Sia",
		"Elastic Heart"
	],
	[
		"24097",
		"Sia",
		"Chandelier"
	],
	[
		"24091",
		"Sam Smith",
		"Stay With Me"
	],
	[
		"04840",
		"Rod Stewart",
		"Sailing"
	],
	[
		"04908",
		"Rolling Stones",
		"(I Can't Get No) Satisfaction"
	],
	[
		"18902",
		"Rolling Stones",
		"Paint It Black"
	],
	[
		"26585",
		"Rosalía",
		"Despechá"
	],
	[
		"9122",
		"Toto",
		"I'll Be Over You"
	],
	[
		"9202",
		"Toto",
		"Africa"
	],
	[
		"18504",
		"Toto",
		"Rosanna"
	],
	[
		"4813",
		"Tracy Chapman",
		"Baby Can I Hold You"
	],
	[
		"18981",
		"Tracy Chapman",
		"Fast Car"
	],
	[
		"24398",
		"The Weeknd",
		"The Hills"
	],
	[
		"00041",
		"Beyoncé",
		"Halo"
	],
	[
		"00042",
		"Billie Eilish",
		"Bad Guy"
	],
	[
		"00043",
		"Bon Jovi",
		"It's My Life"
	],
	[
		"00044",
		"Coldplay",
		"Yellow"
	],
	[
		"00045",
		"Coldplay",
		"Viva La Vida"
	],
	[
		"00046",
		"Ed Sheeran",
		"Perfect"
	],
	[
		"00047",
		"Ed Sheeran",
		"Shape of You"
	],
	[
		"00048",
		"Elvis Presley",
		"Can't Help Falling in Love"
	],
	[
		"00049",
		"Elton John",
		"Your Song"
	],
	[
		"00050",
		"Lady Gaga",
		"Shallow"
	],
	[
		"00051",
		"Madonna",
		"Like a Prayer"
	],
	[
		"00052",
		"Metallica",
		"Nothing Else Matters"
	],
	[
		"00053",
		"Nirvana",
		"Smells Like Teen Spirit"
	],
	[
		"00054",
		"Queen",
		"Bohemian Rhapsody"
	],
	[
		"00055",
		"Queen",
		"Don't Stop Me Now"
	],
	[
		"00056",
		"Shakira",
		"Hips Don't Lie"
	],
	[
		"00057",
		"Taylor Swift",
		"Love Story"
	],
	[
		"00058",
		"The Beatles",
		"Hey Jude"
	],
	[
		"00059",
		"U2",
		"With or Without You"
	],
	[
		"00060",
		"Whitney Houston",
		"I Will Always Love You"
	]
];
function mapList(rows, list) {
	return rows.map(([code, artist, title]) => ({
		code,
		artist,
		title,
		list
	}));
}
var SONGS = [...mapList(N, "nacional"), ...mapList(I, "internacional")];
function searchSongs(query, list = "todas") {
	const q = query.trim().toLowerCase();
	return SONGS.filter((s) => {
		if (list !== "todas" && s.list !== list) return false;
		if (!q) return true;
		return s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q) || s.code.includes(q);
	});
}
var Route$5 = createFileRoute("/repertorio")({
	head: () => pageMeta("Repertório de Karaokê — músicas nacionais e internacionais | Disco Laser", "Consulte músicas do karaokê Disco Laser antes da festa em Santa Catarina. Amostra no site, buscador completo e PDFs nacional e internacional."),
	component: RepertorioPage
});
function RepertorioPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [list, setList] = (0, import_react.useState)("todas");
	const results = (0, import_react.useMemo)(() => searchSongs(q, list), [q, list]);
	const shown = results.slice(0, 80);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pb-8 pt-14 sm:pt-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Karaokê 41" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-2 text-display",
				children: "Repertório"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-muted",
				children: "Amostra do catálogo para você localizar artista e título. O acervo completo — mais de 10 mil faixas — está no buscador e nos PDFs."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.catalogApp,
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Abrir buscador completo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.nacionalPdf,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "PDF nacional"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SITE.internacionalPdf,
							target: "_blank",
							rel: "noopener noreferrer",
							children: "PDF internacional"
						})
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		className: "pt-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Buscar por música, artista ou código",
					className: "pl-10",
					"aria-label": "Buscar músicas"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex flex-wrap gap-2",
				children: [
					["todas", "Todas"],
					["nacional", "Nacional"],
					["internacional", "Internacional"]
				].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setList(value),
					className: cn("h-11 rounded-full px-4 text-sm font-medium transition-colors duration-150", list === value ? "bg-gold text-gold-foreground" : "bg-elevated text-muted hover:text-foreground"),
					children: label
				}, value))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-3 text-xs text-subtle",
				children: [
					results.length,
					" faixa",
					results.length === 1 ? "" : "s",
					" nesta amostra",
					results.length > shown.length ? ` · mostrando as primeiras ${shown.length}` : ""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(244,237,228,0.08)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-elevated text-kicker tracking-[0.14em] text-subtle uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Código"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Artista"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-4 py-3 font-medium",
								children: "Música"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "hidden px-4 py-3 font-medium sm:table-cell",
								children: "Lista"
							})
						] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: shown.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 4,
						className: "px-4 py-12 text-center text-muted",
						children: "Nada por aqui. Tenta outro termo ou abre o buscador completo."
					}) }) : shown.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs text-gold",
								children: s.code.startsWith("000") ? "—" : s.code
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-foreground",
								children: s.artist
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-muted",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "hidden px-4 py-3 text-subtle capitalize sm:table-cell",
								children: s.list
							})
						]
					}, `${s.list}-${s.code}-${s.title}`)) })]
				})
			})
		]
	})] });
}
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async ({ request }) => {
	const origin = new URL(request.url).origin;
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PUBLIC_PATHS.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join("\n")}
</urlset>`;
	return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
} } } });
var $$splitComponentImporter$3 = () => import("./som-4PRp4Cb4.mjs");
var Route$3 = createFileRoute("/som")({
	head: () => ({
		...pageMeta("Locação de Equipamentos de Som em Itajaí e SC | Disco Laser", "Aluguel de caixas ativas Electro-Voice, JBL, line array Frahm e MAK e microfones sem fio em Itajaí, Balneário Camboriú, Camboriú e Santa Catarina."),
		scripts: [jsonLdScript(serviceLd("Locação de equipamentos de som", "Aluguel de PA, line array e microfones sem fio para eventos em Santa Catarina, com entrega e montagem."))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./tv-C87NOBM_.mjs");
var Route$2 = createFileRoute("/tv")({
	head: () => ({
		...pageMeta("Aluguel de TV em Itajaí, Balneário Camboriú e SC | Disco Laser", "Locação de TVs LG 86, 75, 65 e 43 polegadas, com suporte, em Itajaí, Balneário Camboriú, Camboriú e Santa Catarina."),
		scripts: [jsonLdScript(serviceLd("Aluguel de TV", "Locação de televisores LED Full HD e 4K com suporte, na horizontal ou vertical, para eventos em Santa Catarina."))]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./regiao.index-Tp-gbrmU.mjs");
var Route$1 = createFileRoute("/regiao/")({
	head: () => ({
		...pageMeta("Aluguel de karaokê por cidade em Santa Catarina | Disco Laser", "Disco Laser atende Camboriú, Balneário Camboriú, Itajaí, Itapema, Navegantes, Brusque, Blumenau, Tijucas, Barra Velha, São José e Florianópolis. Entrega e montagem."),
		scripts: [jsonLdScript(localBusinessLd())]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./regiao._cidade-byjYBcEF.mjs");
var Route = createFileRoute("/regiao/$cidade")({
	loader: ({ params }) => {
		const city = regionBySlug(params.cidade);
		if (!city) throw notFound();
		return city;
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Cidade | Disco Laser" }] };
		const title = `Aluguel de karaokê em ${loaderData.name}, SC | Disco Laser`;
		const description = `${loaderData.lead} WhatsApp ${SITE.whatsappDisplay}. Entrega e montagem. Também jukebox, TV e som.`;
		const faqs = [{
			q: `Vocês entregam karaokê em ${loaderData.name}?`,
			a: loaderData.delivery
		}, {
			q: `O que vem no aluguel de karaokê em ${loaderData.name}?`,
			a: loaderData.karaoke
		}];
		return {
			...pageMeta(title, description),
			scripts: [jsonLdScript(serviceLd(`Aluguel de karaokê em ${loaderData.name}`, loaderData.lead)), jsonLdScript(faqLd(faqs))]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$10.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$11
});
var JukeboxRoute = Route$9.update({
	id: "/jukebox",
	path: "/jukebox",
	getParentRoute: () => Route$11
});
var KaraokeRoute = Route$8.update({
	id: "/karaoke",
	path: "/karaoke",
	getParentRoute: () => Route$11
});
var ObrigadoRoute = Route$7.update({
	id: "/obrigado",
	path: "/obrigado",
	getParentRoute: () => Route$11
});
var PrivacidadeRoute = Route$6.update({
	id: "/privacidade",
	path: "/privacidade",
	getParentRoute: () => Route$11
});
var RepertorioRoute = Route$5.update({
	id: "/repertorio",
	path: "/repertorio",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var SomRoute = Route$3.update({
	id: "/som",
	path: "/som",
	getParentRoute: () => Route$11
});
var TvRoute = Route$2.update({
	id: "/tv",
	path: "/tv",
	getParentRoute: () => Route$11
});
var RegiaoIndexRoute = Route$1.update({
	id: "/regiao/",
	path: "/regiao/",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute,
	JukeboxRoute,
	KaraokeRoute,
	ObrigadoRoute,
	PrivacidadeRoute,
	RepertorioRoute,
	SitemapDotxmlRoute,
	SomRoute,
	TvRoute,
	RegiaoCidadeRoute: Route.update({
		id: "/regiao/$cidade",
		path: "/regiao/$cidade",
		getParentRoute: () => Route$11
	}),
	RegiaoIndexRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { QuoteForm as a, DialogTitle as c, QuoteDialog as i, Route as n, Dialog as o, FAQ as r, DialogContent as s, router_exports as t };
