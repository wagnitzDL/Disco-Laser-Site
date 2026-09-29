import { i as __toESM } from "../_runtime.mjs";
import { _ as require_react, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as ChevronRight, v as ChevronLeft } from "../_libs/lucide-react.mjs";
import { c as DialogTitle, o as Dialog, s as DialogContent } from "./router-vV1FZYJC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/photo-album-BKrh2T1m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FRAME = "relative aspect-[3/4] w-full max-h-[720px] bg-[#14110e]";
function PhotoAlbum({ photos, autoMs, frameClass = FRAME }) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [open, setOpen] = (0, import_react.useState)(false);
	const startX = (0, import_react.useRef)(null);
	const photo = photos[index] ?? photos[0];
	const many = photos.length > 1;
	function go(step) {
		setIndex((i) => (i + step + photos.length) % photos.length);
	}
	(0, import_react.useEffect)(() => {
		if (!autoMs || photos.length < 2 || open) return;
		const id = window.setInterval(() => {
			setIndex((i) => (i + 1) % photos.length);
		}, autoMs);
		return () => window.clearInterval(id);
	}, [
		autoMs,
		open,
		photos.length
	]);
	if (!photo) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: frameClass,
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
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "absolute inset-0 cursor-zoom-in",
			onClick: () => setOpen(true),
			"aria-label": `Ampliar foto ${index + 1} de ${photos.length}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: photo.src,
				alt: photo.alt,
				className: "size-full object-contain"
			})
		}), many ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground",
				onClick: () => go(-1),
				"aria-label": "Foto anterior",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground",
				onClick: () => go(1),
				"aria-label": "Próxima foto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground",
				children: [
					index + 1,
					" / ",
					photos.length
				]
			})
		] }) : null]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-5xl bg-[#14110e] p-3 sm:p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: photo.alt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: photo.src,
					alt: photo.alt,
					className: "max-h-[82vh] w-full object-contain"
				}),
				many ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center rounded-full bg-elevated text-foreground",
						onClick: () => go(-1),
						"aria-label": "Foto anterior",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "flex size-11 items-center justify-center rounded-full bg-elevated text-foreground",
						onClick: () => go(1),
						"aria-label": "Próxima foto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})]
				}) : null
			]
		})
	})] });
}
//#endregion
export { PhotoAlbum as t };
