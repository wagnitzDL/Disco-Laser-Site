globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { existsSync, promises, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"13e-NQpnX5kGUrHylF0kJ74FwnL11qY\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 318,
		"path": "../public/favicon.svg"
	},
	"/og.jpg": {
		"type": "image/jpeg",
		"etag": "\"1255b-ZC9MefnHZwHsaDF85iiHVMQVhnE\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 75099,
		"path": "../public/og.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"2e-SXXA+7h0qrNifPZZqSI2l1B/r4k\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 46,
		"path": "../public/robots.txt"
	},
	"/brand/logo.png": {
		"type": "image/png",
		"etag": "\"f907-dRK6A5hSmTwSdbnoZA2GL7mzKto\"",
		"mtime": "2026-09-29T21:55:10.910Z",
		"size": 63751,
		"path": "../public/brand/logo.png"
	},
	"/__grok/icon-180.png": {
		"type": "image/png",
		"etag": "\"834-Xk8vfS0DTFn7ggtkfEduWTcNWGE\"",
		"mtime": "2026-09-29T21:55:10.910Z",
		"size": 2100,
		"path": "../public/__grok/icon-180.png"
	},
	"/images/hero-festa.jpg": {
		"type": "image/jpeg",
		"etag": "\"7023a-StyQVphoPEKE3BpIh2A6QvU61oA\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 459322,
		"path": "../public/images/hero-festa.jpg"
	},
	"/images/jukebox-2014.jpg": {
		"type": "image/jpeg",
		"etag": "\"64623-b1c2mF8Wq8UVjrgyAB8T4XYEbOw\"",
		"mtime": "2026-09-29T21:55:10.974Z",
		"size": 411171,
		"path": "../public/images/jukebox-2014.jpg"
	},
	"/images/jukebox-brg.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b642-QSSfRiHRRyrWNy7sRGJndsa/bK0\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 243266,
		"path": "../public/images/jukebox-brg.jpg"
	},
	"/images/jukebox-parede.jpg": {
		"type": "image/jpeg",
		"etag": "\"46c8a-M9YSJfMHzB6N4qROvKleASGPA9g\"",
		"mtime": "2026-09-29T21:55:10.930Z",
		"size": 289930,
		"path": "../public/images/jukebox-parede.jpg"
	},
	"/images/jukebox-star.jpg": {
		"type": "image/jpeg",
		"etag": "\"6f888-r9t/IJwMEOJiJzfg2aLWozomc4U\"",
		"mtime": "2026-09-29T21:55:10.922Z",
		"size": 456840,
		"path": "../public/images/jukebox-star.jpg"
	},
	"/images/jukebox-thunder.jpg": {
		"type": "image/jpeg",
		"etag": "\"726d0-J8MpHpq3NvH9ZKGuHzHkPk92MyI\"",
		"mtime": "2026-09-29T21:55:10.926Z",
		"size": 468688,
		"path": "../public/images/jukebox-thunder.jpg"
	},
	"/images/jukebox-diamante.jpg": {
		"type": "image/jpeg",
		"etag": "\"40f6e-0o64yke0ueHjdGrU5cdwNuzWx+4\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 266094,
		"path": "../public/images/jukebox-diamante.jpg"
	},
	"/images/jukebox-play.jpg": {
		"type": "image/jpeg",
		"etag": "\"703c6-jI9DJ7bzVasqjl2Yr27ZW/XNZrI\"",
		"mtime": "2026-09-29T21:55:10.926Z",
		"size": 459718,
		"path": "../public/images/jukebox-play.jpg"
	},
	"/images/karaoke-festa.jpg": {
		"type": "image/jpeg",
		"etag": "\"65e6b-FumLcCPyUa3QMGAS6AogjlGktK8\"",
		"mtime": "2026-09-29T21:55:10.930Z",
		"size": 417387,
		"path": "../public/images/karaoke-festa.jpg"
	},
	"/images/karaoke-gabinete.jpg": {
		"type": "image/jpeg",
		"etag": "\"34455-gYcLTUcm15z9yTSkmWOOiNOVy5w\"",
		"mtime": "2026-09-29T21:55:10.934Z",
		"size": 214101,
		"path": "../public/images/karaoke-gabinete.jpg"
	},
	"/images/karaoke-montavel.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bb59-8KefBJIGighGJ6kU6hmR73wSJi0\"",
		"mtime": "2026-09-29T21:55:10.938Z",
		"size": 179033,
		"path": "../public/images/karaoke-montavel.jpg"
	},
	"/images/karaoke-pro.jpg": {
		"type": "image/jpeg",
		"etag": "\"254ef-2f4+EvNt9sqZsC2CDseuNen026E\"",
		"mtime": "2026-09-29T21:55:10.938Z",
		"size": 152815,
		"path": "../public/images/karaoke-pro.jpg"
	},
	"/images/karaoke-sem-tv.jpg": {
		"type": "image/jpeg",
		"etag": "\"2e83b-Nj6ipGKRGEqBxgMP1rfl4DYbIFA\"",
		"mtime": "2026-09-29T21:55:10.942Z",
		"size": 190523,
		"path": "../public/images/karaoke-sem-tv.jpg"
	},
	"/images/jukebox-venus.jpg": {
		"type": "image/jpeg",
		"etag": "\"7559b-m+1y95CY8eUcKguAOQLXW2UaXmU\"",
		"mtime": "2026-09-29T21:55:10.934Z",
		"size": 480667,
		"path": "../public/images/jukebox-venus.jpg"
	},
	"/images/servico-som.jpg": {
		"type": "image/jpeg",
		"etag": "\"5e25d-QwJQB4LpF8lwJjpe62WemI0ad7o\"",
		"mtime": "2026-09-29T21:55:10.950Z",
		"size": 385629,
		"path": "../public/images/servico-som.jpg"
	},
	"/images/servico-karaoke.jpg": {
		"type": "image/jpeg",
		"etag": "\"6eeda-7m5K7rr6stJ+Mmqubx34DsF0bcM\"",
		"mtime": "2026-09-29T21:55:10.946Z",
		"size": 454362,
		"path": "../public/images/servico-karaoke.jpg"
	},
	"/images/servico-tv.jpg": {
		"type": "image/jpeg",
		"etag": "\"7411c-DRiFrE5ZBvKk9Vm2EmvFSI7q8Po\"",
		"mtime": "2026-09-29T21:55:10.950Z",
		"size": 475420,
		"path": "../public/images/servico-tv.jpg"
	},
	"/images/karaoke-mics.jpg": {
		"type": "image/jpeg",
		"etag": "\"b2781-68XmeWE8ff85ZK0C9rQAozd116g\"",
		"mtime": "2026-09-29T21:55:10.938Z",
		"size": 731009,
		"path": "../public/images/karaoke-mics.jpg"
	},
	"/images/servico-jukebox.jpg": {
		"type": "image/jpeg",
		"etag": "\"85586-lfV+4Rcw554Dfl3EASFVsuvrxtY\"",
		"mtime": "2026-09-29T21:55:10.942Z",
		"size": 546182,
		"path": "../public/images/servico-jukebox.jpg"
	},
	"/images/logo.png": {
		"type": "image/png",
		"etag": "\"b7300-DBSeJZCHiI/Y4aqVmthrHsNKlbk\"",
		"mtime": "2026-09-29T21:55:10.942Z",
		"size": 750336,
		"path": "../public/images/logo.png"
	},
	"/images/som-ev.jpg": {
		"type": "image/jpeg",
		"etag": "\"53e5b-OVtYolFh0M8y9Q9hMZC42cR/TFU\"",
		"mtime": "2026-09-29T21:55:10.946Z",
		"size": 343643,
		"path": "../public/images/som-ev.jpg"
	},
	"/images/som-grt12.jpg": {
		"type": "image/jpeg",
		"etag": "\"44b1e-u+QI+OwM5LFugmF8tgT1Q6TNKC4\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 281374,
		"path": "../public/images/som-grt12.jpg"
	},
	"/images/som-mak.jpg": {
		"type": "image/jpeg",
		"etag": "\"48323-MsY6ELfGdtn3MB0dPa0E7Hyz2uE\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 295715,
		"path": "../public/images/som-mak.jpg"
	},
	"/images/tv-43-evento.jpg": {
		"type": "image/jpeg",
		"etag": "\"20f4c-K1Y7er6/CflK9Crfc9sJMGljnik\"",
		"mtime": "2026-09-29T21:55:10.954Z",
		"size": 134988,
		"path": "../public/images/tv-43-evento.jpg"
	},
	"/images/tv-43-salao.jpg": {
		"type": "image/jpeg",
		"etag": "\"286cd-o6iDbMlu6yOhV1GtAcyJ4CKwP8M\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 165581,
		"path": "../public/images/tv-43-salao.jpg"
	},
	"/images/tv-65.jpg": {
		"type": "image/jpeg",
		"etag": "\"27a5c-jbxS0DVGubsqPnQN9smr2UFtf8w\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 162396,
		"path": "../public/images/tv-65.jpg"
	},
	"/images/tv-75-salao.jpg": {
		"type": "image/jpeg",
		"etag": "\"25091-i2txWQL7rYRjIfLD6/5vepGVXXU\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 151697,
		"path": "../public/images/tv-75-salao.jpg"
	},
	"/images/tv-75-suporte.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d931-I3dSl6oxZ/lDcU7+Q9gXnJadcUM\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 121137,
		"path": "../public/images/tv-75-suporte.jpg"
	},
	"/images/tv-86-cortina.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d931-I3dSl6oxZ/lDcU7+Q9gXnJadcUM\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 121137,
		"path": "../public/images/tv-86-cortina.jpg"
	},
	"/images/tv-86-festa.jpg": {
		"type": "image/jpeg",
		"etag": "\"25091-i2txWQL7rYRjIfLD6/5vepGVXXU\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 151697,
		"path": "../public/images/tv-86-festa.jpg"
	},
	"/images/tv-86-jogo.jpg": {
		"type": "image/jpeg",
		"etag": "\"3d75d-94mkMLKmZWMl9kFbZ9kRH55E2xA\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 251741,
		"path": "../public/images/tv-86-jogo.jpg"
	},
	"/images/tv-86.jpg": {
		"type": "image/jpeg",
		"etag": "\"336b6-ISLS4wUTeiyy8mhtL+Jql4emCtk\"",
		"mtime": "2026-09-29T21:55:10.982Z",
		"size": 210614,
		"path": "../public/images/tv-86.jpg"
	},
	"/assets/index-C3Tt4qcx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7293c-bj+McDfZZl9Wm0NCdZmi4irlI5s\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 469308,
		"path": "../public/assets/index-C3Tt4qcx.js"
	},
	"/assets/jukebox-Dt0Gyw4H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e2f-l8RzAtM2XksFhPH066LRl3pq6zE\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 3631,
		"path": "../public/assets/jukebox-Dt0Gyw4H.js"
	},
	"/assets/karaoke-B0tq26Jq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5154-IpauTpTyINgH+Fbp1JTyTQWQPdI\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 20820,
		"path": "../public/assets/karaoke-B0tq26Jq.js"
	},
	"/assets/lead-link-BxHxbSh5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"23da-JeMHOYTxYKS0WqNtVUUp00yLums\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 9178,
		"path": "../public/assets/lead-link-BxHxbSh5.js"
	},
	"/assets/obrigado-B6jvEin1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"44d-ucD/NTrJAm+TUOk5sB+rDiBQ4VM\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 1101,
		"path": "../public/assets/obrigado-B6jvEin1.js"
	},
	"/assets/photo-album-bkjW742m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"aa4-qfv+eii+5+pmegMeQnPTDlCWj2Y\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 2724,
		"path": "../public/assets/photo-album-bkjW742m.js"
	},
	"/assets/privacidade-DfqpPrOO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15b1-bwsk7+mEKgB2wcGKe3+z4kXnIHM\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 5553,
		"path": "../public/assets/privacidade-DfqpPrOO.js"
	},
	"/images/som-jbl.jpg": {
		"type": "image/jpeg",
		"etag": "\"756a0-63AfyGuGr5ffB/VvJ/pab3FYm/k\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 480928,
		"path": "../public/images/som-jbl.jpg"
	},
	"/assets/quote-form-DwPTmaBF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"216c-I8sQv/IRLYqpgk/tz4W80gy4KOY\"",
		"mtime": "2026-09-29T21:55:10.298Z",
		"size": 8556,
		"path": "../public/assets/quote-form-DwPTmaBF.js"
	},
	"/assets/regiao._cidade-oShhYMV-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e26-J7N8k1Ne7aGQI0NJRVaM2v7BR3Y\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 3622,
		"path": "../public/assets/regiao._cidade-oShhYMV-.js"
	},
	"/assets/regiao.index-CHRW6KRN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"457-Q5uvf3wdWZN3PqOVj+XNSkBkObI\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 1111,
		"path": "../public/assets/regiao.index-CHRW6KRN.js"
	},
	"/images/tv-86-salao.jpg": {
		"type": "image/jpeg",
		"etag": "\"d7474-nGwh4YX9+yCxMmGnTgzDme+t2aQ\"",
		"mtime": "2026-09-29T21:55:10.962Z",
		"size": 881780,
		"path": "../public/images/tv-86-salao.jpg"
	},
	"/images/tv-86-evento.jpg": {
		"type": "image/jpeg",
		"etag": "\"f4c43-B92b8a4lyIOLpbbGfJOlrNUUfd4\"",
		"mtime": "2026-09-29T21:55:10.958Z",
		"size": 1002563,
		"path": "../public/images/tv-86-evento.jpg"
	},
	"/assets/region-strip-P42WmJi7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"369-PNNi0kK7XyOi8ecJNvCVoqn6KE0\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 873,
		"path": "../public/assets/region-strip-P42WmJi7.js"
	},
	"/assets/routes-CuNJ6IME.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26dd-Czl3BcTx8bRtndI0Po6zwz91IA0\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 9949,
		"path": "../public/assets/routes-CuNJ6IME.js"
	},
	"/assets/section-FWkZOLIj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d748-slFtQhgPqeKxrxmeukIkkCwDh5M\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 55112,
		"path": "../public/assets/section-FWkZOLIj.js"
	},
	"/assets/site-BKrp1rgV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"913-OlQQ5gVoL8Hzc4CfLTo/hmyWNP0\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 2323,
		"path": "../public/assets/site-BKrp1rgV.js"
	},
	"/assets/som-ChBuxefL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c70-pdJ38IA54xghtzqwflLTn0YVh7I\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 3184,
		"path": "../public/assets/som-ChBuxefL.js"
	},
	"/assets/styles-D_r3yfgd.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"e2fc-xGjS7Vu6Sm8Y85iBbjn4iGCQjDk\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 58108,
		"path": "../public/assets/styles-D_r3yfgd.css"
	},
	"/assets/tv-Cfs0Ex8I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da3-7QB/wDbGb1W3Ug1g3fgQ6Vj/UGc\"",
		"mtime": "2026-09-29T21:55:10.302Z",
		"size": 3491,
		"path": "../public/assets/tv-Cfs0Ex8I.js"
	},
	"/photos/jukebox-2014.jpg": {
		"type": "image/jpeg",
		"etag": "\"500f-OAMCowrlhTGeVaNMYRkqwinLdms\"",
		"mtime": "2026-09-29T21:55:10.910Z",
		"size": 20495,
		"path": "../public/photos/jukebox-2014.jpg"
	},
	"/photos/jukebox-brg-chao.jpg": {
		"type": "image/jpeg",
		"etag": "\"5198-5J2zkqfmJr7fNGn3SgqRY7550no\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 20888,
		"path": "../public/photos/jukebox-brg-chao.jpg"
	},
	"/photos/jukebox-diamante.jpg": {
		"type": "image/jpeg",
		"etag": "\"55f2-dDV8tHa8x5tjvnHKPDZXpFWv/uo\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 22002,
		"path": "../public/photos/jukebox-diamante.jpg"
	},
	"/photos/jukebox-parede.jpg": {
		"type": "image/jpeg",
		"etag": "\"5ebd-bZVib1UWtaf9cid336VxWwJMgug\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 24253,
		"path": "../public/photos/jukebox-parede.jpg"
	},
	"/photos/jukebox-play.jpg": {
		"type": "image/jpeg",
		"etag": "\"569a-3Lbr4EhUXOGYv+1PErQy2Of885c\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 22170,
		"path": "../public/photos/jukebox-play.jpg"
	},
	"/photos/jukebox-star.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c79-6qz3/dl25ac8bmTNW5OtAuE3lEM\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 23673,
		"path": "../public/photos/jukebox-star.jpg"
	},
	"/photos/jukebox-thunder.jpg": {
		"type": "image/jpeg",
		"etag": "\"5789-ahxBMh+6qARPnPy/kvJqLny+OWI\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 22409,
		"path": "../public/photos/jukebox-thunder.jpg"
	},
	"/photos/jukebox-venus.jpg": {
		"type": "image/jpeg",
		"etag": "\"55c7-VJQK/tPEBPnohH/qGSC2OaY5XPw\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 21959,
		"path": "../public/photos/jukebox-venus.jpg"
	},
	"/photos/karaoke-32-loc.jpg": {
		"type": "image/jpeg",
		"etag": "\"924a-ASy6hS5ZioIIij+2feKDhSa/EJg\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 37450,
		"path": "../public/photos/karaoke-32-loc.jpg"
	},
	"/photos/karaoke-32.jpg": {
		"type": "image/jpeg",
		"etag": "\"b438-PDCpFfWHjEqO5FyjE2FqImW4J+M\"",
		"mtime": "2026-09-29T21:55:10.966Z",
		"size": 46136,
		"path": "../public/photos/karaoke-32.jpg"
	},
	"/photos/karaoke-402.jpg": {
		"type": "image/jpeg",
		"etag": "\"e5fe-RvhN1EjnteGFwEl7+yovQfPjPJM\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 58878,
		"path": "../public/photos/karaoke-402.jpg"
	},
	"/photos/karaoke-extra.jpg": {
		"type": "image/jpeg",
		"etag": "\"a371-+C1XCMZmhkxEUr+dVtPhIbZ1kws\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 41841,
		"path": "../public/photos/karaoke-extra.jpg"
	},
	"/photos/karaoke-gb.jpg": {
		"type": "image/jpeg",
		"etag": "\"de51-FX25l/xLY8khxYVjea65FDriX9U\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 56913,
		"path": "../public/photos/karaoke-gb.jpg"
	},
	"/photos/karaoke-loc.jpg": {
		"type": "image/jpeg",
		"etag": "\"137af-7tQO5rLXRsUL2BxkCRq5BvczaMY\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 79791,
		"path": "../public/photos/karaoke-loc.jpg"
	},
	"/photos/karaoke-mod.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad50-6K8677BY7KoX6CBDXyELEK2D9bU\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 44368,
		"path": "../public/photos/karaoke-mod.jpg"
	},
	"/photos/karaoke-setup.jpg": {
		"type": "image/jpeg",
		"etag": "\"96fc-BRMyCe4h2IOddUimikBaWKDr+MU\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 38652,
		"path": "../public/photos/karaoke-setup.jpg"
	},
	"/photos/karaoke-tv.jpg": {
		"type": "image/jpeg",
		"etag": "\"dbe0-wEQQeA95efWQEB/chCAmBSdg1j0\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 56288,
		"path": "../public/photos/karaoke-tv.jpg"
	},
	"/photos/som-ev.jpg": {
		"type": "image/jpeg",
		"etag": "\"50a6-J+wRB17apludXtOP08NCS9no66k\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 20646,
		"path": "../public/photos/som-ev.jpg"
	},
	"/photos/som-grt12.jpg": {
		"type": "image/jpeg",
		"etag": "\"32cc-yUUE0mC0qTybupAFb0Vu8yhJ6CY\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 13004,
		"path": "../public/photos/som-grt12.jpg"
	},
	"/photos/som-jbl.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a5b-ymSwYDtolxtsGV7zHmTU0I6RJEw\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 19035,
		"path": "../public/photos/som-jbl.jpg"
	},
	"/photos/som-mak-full.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e3f-NUK8hakx0MDHyH/QGGy+k35+P04\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 7743,
		"path": "../public/photos/som-mak-full.jpg"
	},
	"/photos/som-mak.jpg": {
		"type": "image/jpeg",
		"etag": "\"5eb0-/KqXML8iiUoyq2yWCYkUWrIXaOI\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 24240,
		"path": "../public/photos/som-mak.jpg"
	},
	"/photos/tv-32.jpg": {
		"type": "image/jpeg",
		"etag": "\"6a4f-rDt8erBFTUlYQG9NyEhxSTkaY6A\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 27215,
		"path": "../public/photos/tv-32.jpg"
	},
	"/photos/tv-43.jpg": {
		"type": "image/jpeg",
		"etag": "\"b25e-4XnI/fcmJmPuvGl6IvcdwD8CH+0\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 45662,
		"path": "../public/photos/tv-43.jpg"
	},
	"/photos/tv-58.jpg": {
		"type": "image/jpeg",
		"etag": "\"b6b8-D7HJHj2W2HJKO4iloPAn0V0KSyk\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 46776,
		"path": "../public/photos/tv-58.jpg"
	},
	"/photos/tv-75.jpg": {
		"type": "image/jpeg",
		"etag": "\"83ab-E9xeREMJdWTz41aziwDMLuR3+vc\"",
		"mtime": "2026-09-29T21:55:10.970Z",
		"size": 33707,
		"path": "../public/photos/tv-75.jpg"
	},
	"/photos/tv.jpg": {
		"type": "image/jpeg",
		"etag": "\"11108-O4dyW19T0c6/hhlvm1scLwDvXNo\"",
		"mtime": "2026-09-29T21:55:10.974Z",
		"size": 69896,
		"path": "../public/photos/tv.jpg"
	},
	"/photos/van-karaoke.png": {
		"type": "image/png",
		"etag": "\"2ff62-o8IQ2O1qDFy8/AVseWbXyzG8rUI\"",
		"mtime": "2026-09-29T21:55:10.986Z",
		"size": 196450,
		"path": "../public/photos/van-karaoke.png"
	},
	"/__grok/install/styles.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1a3d-VUsWOMAheo1/P30EqU5qaIkyvIQ\"",
		"mtime": "2026-09-29T21:55:10.914Z",
		"size": 6717,
		"path": "../public/__grok/install/styles.css"
	},
	"/__grok/install/assets/homescreen/glass-puzzle.svg": {
		"type": "image/svg+xml",
		"etag": "\"713-AP2wG8KChAGjse1Fn+f/+vDN+sQ\"",
		"mtime": "2026-09-29T21:55:11.022Z",
		"size": 1811,
		"path": "../public/__grok/install/assets/homescreen/glass-puzzle.svg"
	},
	"/__grok/install/assets/homescreen/glass-share.svg": {
		"type": "image/svg+xml",
		"etag": "\"954-jb3ATcKjqgMOYrA/4w1v21j0Jvg\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 2388,
		"path": "../public/__grok/install/assets/homescreen/glass-share.svg"
	},
	"/videos/tv-65.mp4": {
		"type": "video/mp4",
		"etag": "\"debc3-+PB6GPy7LnH3U9sqwr5JinHMPFU\"",
		"mtime": "2026-09-29T21:55:11.002Z",
		"size": 912323,
		"path": "../public/videos/tv-65.mp4"
	},
	"/__grok/install/assets/homescreen/logo-grok.svg": {
		"type": "image/svg+xml",
		"etag": "\"423-5mXO+yh9KW40jM3to5JlWPhxNK8\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 1059,
		"path": "../public/__grok/install/assets/homescreen/logo-grok.svg"
	},
	"/__grok/install/assets/homescreen/ob-ipad.png": {
		"type": "image/png",
		"etag": "\"18dd3-wlRwrpmBImStuiu+4poVz7ANin4\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 101843,
		"path": "../public/__grok/install/assets/homescreen/ob-ipad.png"
	},
	"/videos/tv-86-festa.mp4": {
		"type": "video/mp4",
		"etag": "\"1b3230-+6fG2ukrxIW01HhY3c93xmomYa4\"",
		"mtime": "2026-09-29T21:55:11.022Z",
		"size": 1782320,
		"path": "../public/videos/tv-86-festa.mp4"
	},
	"/__grok/install/assets/homescreen/ob-phone.png": {
		"type": "image/png",
		"etag": "\"194bc-oZradWHIHO68q2glHU0Gk5ttpWA\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 103612,
		"path": "../public/__grok/install/assets/homescreen/ob-phone.png"
	},
	"/__grok/install/assets/homescreen/plus.svg": {
		"type": "image/svg+xml",
		"etag": "\"961-sSBPunx/13vbMNAlPxb7UeO3l3A\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 2401,
		"path": "../public/__grok/install/assets/homescreen/plus.svg"
	},
	"/videos/karaoke-sala.mp4": {
		"type": "video/mp4",
		"etag": "\"20d555-A23j8SEXjI91riE286pxFJpjIwc\"",
		"mtime": "2026-09-29T21:55:10.998Z",
		"size": 2151765,
		"path": "../public/videos/karaoke-sala.mp4"
	},
	"/videos/tv-43.mp4": {
		"type": "video/mp4",
		"etag": "\"18aae7-Otk0SJdy5wg+7wpIAAgqE8yTjMg\"",
		"mtime": "2026-09-29T21:55:11.022Z",
		"size": 1616615,
		"path": "../public/videos/tv-43.mp4"
	},
	"/videos/karaoke-gabinete.mp4": {
		"type": "video/mp4",
		"etag": "\"1f4505-ZQI+qAeVgp8K8o7HSOGJzUTvLZQ\"",
		"mtime": "2026-09-29T21:55:10.930Z",
		"size": 2049285,
		"path": "../public/videos/karaoke-gabinete.mp4"
	},
	"/videos/tv-75.mp4": {
		"type": "video/mp4",
		"etag": "\"1b3230-+6fG2ukrxIW01HhY3c93xmomYa4\"",
		"mtime": "2026-09-29T21:55:11.026Z",
		"size": 1782320,
		"path": "../public/videos/tv-75.mp4"
	},
	"/videos/karaoke-tv-torre.mp4": {
		"type": "video/mp4",
		"etag": "\"21c15f-1x9KiTuOyW/+Rbyt61JTwJU+ACk\"",
		"mtime": "2026-09-29T21:55:10.994Z",
		"size": 2212191,
		"path": "../public/videos/karaoke-tv-torre.mp4"
	},
	"/videos/karaoke-jbl.mp4": {
		"type": "video/mp4",
		"etag": "\"3676e4-SSxKbrWahfNc+3ogy2r6AJte89Q\"",
		"mtime": "2026-09-29T21:55:11.010Z",
		"size": 3569380,
		"path": "../public/videos/karaoke-jbl.mp4"
	},
	"/videos/tv-86.mp4": {
		"type": "video/mp4",
		"etag": "\"21d6f9-3QCpCpQzFyQFsGaPLzGkBHpf8jk\"",
		"mtime": "2026-09-29T21:55:11.038Z",
		"size": 2217721,
		"path": "../public/videos/tv-86.mp4"
	},
	"/videos/karaoke-projetor.mp4": {
		"type": "video/mp4",
		"etag": "\"472bf3-FgdV1T8zsPEzAWqB3HAGzYXkTPc\"",
		"mtime": "2026-09-29T21:55:11.030Z",
		"size": 4664307,
		"path": "../public/videos/karaoke-projetor.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region scripts/install-page.html?raw
var install_page_default = "<!DOCTYPE html>\n<html lang=\"en\" class=\"device-desktop\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta\n      name=\"viewport\"\n      content=\"width=device-width, initial-scale=1, viewport-fit=cover\"\n    />\n    <meta name=\"color-scheme\" content=\"dark\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\" />\n    <meta name=\"apple-mobile-web-app-title\" content=\"{{APP_NAME}}\" />\n    <title>Add {{APP_NAME}} to your Home Screen</title>\n    <link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\" />\n    <link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\" />\n    <link rel=\"stylesheet\" href=\"/__grok/install/styles.css\" />\n    <script>\n      (function () {\n        var ua = navigator.userAgent || \"\";\n        var touch = navigator.maxTouchPoints || 0;\n        var isiPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1);\n        var isiPhone = /iPhone|iPod/.test(ua);\n        var isIOS = isiPhone || isiPad;\n        var isAndroid = /Android/i.test(ua);\n        var isAndroidPhone = isAndroid && /Mobile/i.test(ua);\n        var isAndroidTablet = isAndroid && !/Mobile/i.test(ua);\n        var minSide = Math.min(screen.width || 0, screen.height || 0);\n        var maxSide = Math.max(screen.width || 0, screen.height || 0);\n\n        var type = \"desktop\";\n        if (isiPhone) type = \"phone\";\n        else if (isiPad || isAndroidTablet) type = \"tablet\";\n        else if (isAndroidPhone) type = \"phone\";\n        else if (touch > 0 && minSide > 0 && minSide <= 500) type = \"phone\";\n        else if (touch > 0 && minSide > 500 && maxSide <= 1400) type = \"tablet\";\n\n        var iosMajor = null;\n        var osToken = null;\n        var safariToken = null;\n        var iphoneOs = ua.match(/iPhone OS (\\d+)[._]/);\n        var ipadOs = ua.match(/CPU OS (\\d+)[._](\\d+) like Mac OS X/);\n        var safariVer = ua.match(/Version\\/(\\d+)[._]/);\n        if (iphoneOs) osToken = parseInt(iphoneOs[1], 10);\n        else if (ipadOs) osToken = parseInt(ipadOs[1], 10);\n        if (isIOS && safariVer) safariToken = parseInt(safariVer[1], 10);\n        if (osToken != null || safariToken != null) {\n          iosMajor = Math.max(osToken || 0, safariToken || 0);\n        }\n\n        var root = document.documentElement;\n        var classes = [\"device-\" + type];\n        if (iosMajor != null) {\n          root.dataset.ios = String(iosMajor);\n          classes.push(iosMajor >= 27 ? \"ios-27-plus\" : \"ios-below-27\");\n        }\n        root.className = classes.join(\" \");\n      })();\n    <\/script>\n  </head>\n  <body>\n    <div class=\"page\">\n      <header class=\"powered\" aria-label=\"Powered by Grok\">\n        <span class=\"powered-by\">Powered by</span>\n        <span class=\"powered-brand\">\n          <img\n            class=\"grok-logo\"\n            src=\"/__grok/install/assets/homescreen/logo-grok.svg\"\n            width=\"14\"\n            height=\"14\"\n            alt=\"\"\n          />\n          <span class=\"powered-grok\">Grok</span>\n        </span>\n      </header>\n\n      <main class=\"content\">\n        <div class=\"ob\" aria-hidden=\"true\">\n          <img\n            class=\"ob-img ob-phone\"\n            src=\"/__grok/install/assets/homescreen/ob-phone.png\"\n            width=\"338\"\n            height=\"294\"\n            alt=\"\"\n          />\n          <img\n            class=\"ob-img ob-ipad\"\n            src=\"/__grok/install/assets/homescreen/ob-ipad.png\"\n            width=\"634\"\n            height=\"294\"\n            alt=\"\"\n          />\n        </div>\n\n        <section class=\"copy\">\n          <h1>Add {{APP_NAME}} to your&nbsp;Home&nbsp;Screen</h1>\n\n          <div class=\"steps\">\n            <p class=\"step step-tap step-ios27\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-puzzle.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar, then</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar, then</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n            </p>\n\n            <p class=\"step step-tap step-ios-legacy\">\n              <span class=\"muted\">Tap</span>\n              <span class=\"glass glass--icon\" aria-hidden=\"true\">\n                <img src=\"/__grok/install/assets/homescreen/glass-share.svg\" width=\"24\" height=\"24\" alt=\"\" />\n              </span>\n              <span class=\"muted loc loc-phone\">in the bottom bar</span>\n              <span class=\"muted loc loc-ipad\">in the tool bar</span>\n            </p>\n\n            <p class=\"step step-select\">\n              <span class=\"muted\">Select</span>\n              <span class=\"add-label\">\n                <img\n                  class=\"plus-icon\"\n                  src=\"/__grok/install/assets/homescreen/plus.svg\"\n                  width=\"16\"\n                  height=\"16\"\n                  alt=\"\"\n                />\n                <span class=\"add-text\">Add to Home Screen</span>\n              </span>\n            </p>\n          </div>\n        </section>\n      </main>\n\n      <main class=\"content content-desktop\">\n        <section class=\"copy\">\n          <h1>Open this link on your iPhone&nbsp;or&nbsp;iPad</h1>\n          <p class=\"desktop-note\">\n            This page shows how to add {{APP_NAME}} to an iOS Home Screen.\n          </p>\n          <a class=\"desktop-open\" href=\"{{APP_URL}}\">Open {{APP_NAME}}</a>\n        </section>\n      </main>\n    </div>\n  </body>\n</html>\n";
//#endregion
//#region \0virtual:grok-og-identity
var grokOgIdentity = { "site": {
	"title": "Disco Laser Locações",
	"card": "custom",
	"image": "/og.jpg"
} };
//#endregion
//#region scripts/grok-pwa-shared.mjs
/**
* Single source of truth for platform head chrome (PWA, extensions.js, OG),
* shared by the Vite plugin and Nitro middleware. Plain ESM so `node --test`
* and the Nitro bundler can both consume it.
*/
var DEFAULT_APP_NAME = "Grok App";
var OG_SITE_REL_PATH = "src/lib/og/site.json";
var SHARE_META_KEYS = /* @__PURE__ */ new Set([
	"og:title",
	"og:description",
	"og:image",
	"og:image:width",
	"og:image:height",
	"og:type",
	"og:url",
	"og:site_name",
	"twitter:card",
	"twitter:title",
	"twitter:image",
	"twitter:description",
	"x:game:image",
	"x:game:image:width",
	"x:game:image:height"
]);
function escapeHtml(value) {
	return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("'", "&#39;");
}
/** Inverse of escapeHtml. Decode &amp; last so a single pass undoes one encode. */
function unescapeHtml(value) {
	return String(value).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", "\"").replaceAll("&#39;", "'").replaceAll("&amp;", "&");
}
/** 6-digit hex for the og.grok.me placeholder, or "" if site.color is missing/invalid. */
function placeholderCardColor(site = {}) {
	const raw = String(site.color ?? "").trim();
	const hex = raw.startsWith("#") ? raw.slice(1) : raw;
	return /^[0-9a-fA-F]{6}$/.test(hex) ? hex : "";
}
/**
* "wild-race.grok.me" → "Wild Race". Only published app hosts encode the
* display name in the first label. Preview / guest hosts are image origins
* only — slugifying them produced internal names like "Hds Abc 3000 Xy".
*/
function appNameFromHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host.endsWith(".grok.me")) return DEFAULT_APP_NAME;
	const slug = host.split(".")[0] ?? "";
	if (!slug || slug === "www" || !/^[a-z0-9-]{1,63}$/.test(slug)) return DEFAULT_APP_NAME;
	return slug.split("-").filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Grok App";
}
/** True for Vercel system domains. Envoy rewrites origin Host to these; they SSO-protect `/og.jpg`. */
function isVercelSystemHost(host) {
	return host === "vercel.app" || host.endsWith(".vercel.app") || host === "vercel.com" || host.endsWith(".vercel.com");
}
/** Hostname suitable for absolute og:image URLs. Preview guests (X-Forwarded-Host) are allowed. */
function publicAppHost(hostHeader) {
	const host = String(hostHeader ?? "").split(",")[0].trim().split(":")[0].toLowerCase();
	if (!host || !/^[a-z0-9.-]+$/.test(host) || !host.includes(".")) return "";
	if (/^\d{1,3}(?:\.\d{1,3}){3}$/.test(host)) return "";
	if (isVercelSystemHost(host)) return "";
	return host;
}
/**
* Published apps always use `VITE_PUBLIC_HOSTNAME` (the grok.me host the
* deployer injects). Live preview has no such env, so fall back to the
* request host / X-Forwarded-Host. Never prefer request Host on a published
* app — Envoy rewrites it to `*.vercel.app`.
*/
function resolvePublicHost(hostHeader) {
	return publicAppHost(process.env?.VITE_PUBLIC_HOSTNAME) || publicAppHost(hostHeader);
}
function isInstallQuery(url) {
	const query = String(url ?? "").split("?", 2)[1] ?? "";
	const params = new URLSearchParams(query);
	const install = params.get("install");
	const platform = (params.get("platform") ?? "").toLowerCase();
	return (install === "1" || install === "true") && platform === "ios";
}
/** Paths that can carry an app document (vs assets / API / internals). */
function isDocumentPath(pathname) {
	const path = String(pathname ?? "");
	return !path.startsWith("/__grok/") && !path.startsWith("/api/") && !path.startsWith("/@") && !path.startsWith("/node_modules") && !/\.[a-z0-9]+$/i.test(path);
}
function acceptsHtml(accept) {
	const value = String(accept ?? "");
	return value === "" || value.includes("text/html") || value.includes("*/*");
}
/** The same URL without the install-tutorial params (used as the app link). */
function stripInstallParams(url) {
	const [path = "/", query = ""] = String(url ?? "/").split("?", 2);
	const params = new URLSearchParams(query);
	params.delete("install");
	params.delete("platform");
	const rest = params.toString();
	return rest ? `${path}?${rest}` : path;
}
function renderInstallPageHtml(template, { host, url } = {}) {
	return String(template).replaceAll("{{APP_NAME}}", escapeHtml(appNameFromHost(host))).replaceAll("{{APP_URL}}", escapeHtml(stripInstallParams(url)));
}
function renderWebManifest(hostHeader) {
	const name = appNameFromHost(hostHeader);
	return JSON.stringify({
		name,
		short_name: name,
		id: "/",
		start_url: "/",
		scope: "/",
		display: "standalone",
		background_color: "#000000",
		theme_color: "#000000",
		icons: [{
			src: "/__grok/icon-180.png",
			sizes: "180x180",
			type: "image/png"
		}]
	}, null, 2);
}
function grokPwaHeadTags(appName = DEFAULT_APP_NAME) {
	return [
		["manifest", "<link rel=\"manifest\" href=\"/__grok/manifest.webmanifest\">"],
		["apple-touch-icon", "<link rel=\"apple-touch-icon\" href=\"/__grok/icon-180.png\">"],
		["apple-mobile-web-app-title", `<meta name="apple-mobile-web-app-title" content="${escapeHtml(appName)}">`],
		["apple-mobile-web-app-status-bar-style", "<meta name=\"apple-mobile-web-app-status-bar-style\" content=\"black\">"],
		["theme-color", "<meta name=\"theme-color\" content=\"#000000\">"]
	];
}
var GROK_EXTENSIONS_SCRIPT_SRC = "https://grok.com/grok-app-builder/extensions.js";
function readGrokProjectId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_PROJECT_ID : "";
	return String(fromProcess ?? "").trim();
}
function readGrokExtensionsEnabled() {
	const fromProcess = typeof process !== "undefined" ? process.env?.VITE_GROK_EXTENSIONS : "";
	return String(fromProcess ?? "").trim() !== "0";
}
function readXCreator() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR : "";
	return String(fromProcess ?? "").trim();
}
function readXCreatorId() {
	const fromProcess = typeof process !== "undefined" ? process.env?.X_CREATOR_ID : "";
	return String(fromProcess ?? "").trim();
}
function grokXCreatorHeadTags(creator = readXCreator(), creatorId = readXCreatorId()) {
	const name = String(creator ?? "").trim();
	const id = String(creatorId ?? "").trim();
	if (!name || !id) return [];
	return [`<meta property="x:creator" content="${escapeHtml(name)}">`, `<meta property="x:creator:id" content="${escapeHtml(id)}">`];
}
/** Platform "Created with Grok" banner — injected into every HTML document. */
function grokExtensionsHeadTags(projectId = readGrokProjectId()) {
	const id = escapeHtml(projectId);
	const tags = [];
	if (projectId) tags.push(`<meta name="grok-project-id" content="${id}">`);
	if (!readGrokExtensionsEnabled()) return tags;
	tags.push(`<script src="${GROK_EXTENSIONS_SCRIPT_SRC}"${projectId ? ` data-project-id="${id}"` : ""} defer><\/script>`);
	return tags;
}
function readOgSite(cwd = process.cwd()) {
	try {
		const raw = readFileSync(join(cwd, OG_SITE_REL_PATH), "utf8");
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
	} catch {
		return {};
	}
}
/** Public path of an on-disk share card, or "" if neither file exists. */
function ogCardPublicPath(cwd = process.cwd()) {
	if (existsSync(join(cwd, "public/og.jpg"))) return "/og.jpg";
	if (existsSync(join(cwd, "public/og.png"))) return "/og.png";
	return "";
}
function detectCustomOgCard(cwd = process.cwd(), site = {}) {
	if (ogCardPublicPath(cwd)) return true;
	return siteHasCustomCard(site) || Boolean(String(site.image ?? "").trim());
}
/** Snapshot for Vite/Nitro to bake into the server bundle (Vercel has no workspace FS). */
function snapshotOgIdentity(cwd = process.cwd()) {
	const site = { ...readOgSite(cwd) };
	const disk = ogCardPublicPath(cwd);
	if (disk) {
		site.card = "custom";
		site.image = disk;
	} else {
		if (siteHasCustomCard(site)) delete site.card;
		if (site.image) delete site.image;
	}
	if (existsSync(join(cwd, "public/x-banner.jpg"))) site.banner = site.banner || "/x-banner.jpg";
	return { site };
}
function ogServiceUrl() {
	return (String(process.env?.VITE_OG_SERVICE_URL ?? "").trim() || "https://og.grok.me").replace(/\/+$/, "");
}
function titleFromDocument(html) {
	const match = String(html ?? "").match(/<title\b[^>]*>([^<]*)<\/title>/i);
	return match ? unescapeHtml(match[1]).trim() : "";
}
function resolveOgTitle(site = {}, appName = DEFAULT_APP_NAME, host = "", documentTitle = "") {
	const fromSite = String(site.title ?? "").trim();
	if (fromSite) return fromSite;
	const fromDoc = String(documentTitle ?? "").trim();
	if (fromDoc) return fromDoc;
	const fromHost = appNameFromHost(host);
	if (fromHost && fromHost !== "Grok App") return fromHost;
	return String(appName ?? "").trim() || "Grok App";
}
function siteHasCustomCard(site = {}) {
	return String(site.card ?? "").toLowerCase() === "custom";
}
/**
* Preview: public/og.jpg|png on disk.
* Vercel: the bake (`card=custom` / `image`) because the function cannot stat public/.
* Otherwise empty — caller emits the og.grok.me placeholder.
*/
function resolveOgCardAsset(site = {}, cwd = process.cwd()) {
	return ogCardPublicPath(cwd) || (detectCustomOgCard(cwd, site) ? String(site.image ?? "").trim() || "/og.jpg" : "");
}
/** Stamp `card=custom` when public/og.jpg or public/og.png is on disk. */
function applyCustomCardFromFs(site, cwd) {
	const disk = ogCardPublicPath(cwd);
	if (!disk) return site;
	return {
		...site,
		card: "custom",
		image: disk
	};
}
function grokOgHeadTags({ host = "", appName = DEFAULT_APP_NAME, site = {}, documentTitle = "", cwd = process.cwd() } = {}) {
	const title = resolveOgTitle(site, appName, host, documentTitle);
	const publicHost = resolvePublicHost(host);
	const tags = [`<meta name="twitter:card" content="summary_large_image">`, `<meta property="og:title" content="${escapeHtml(title)}">`];
	const description = String(site.description ?? "").trim();
	if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}">`);
	if (String(site.type ?? "").toLowerCase() === "x:game") tags.push(`<meta property="og:type" content="x:game">`);
	if (publicHost) {
		const asset = resolveOgCardAsset(site, cwd);
		const custom = Boolean(asset);
		let image = custom ? `https://${publicHost}${asset.startsWith("/") ? asset : `/${asset}`}` : `${ogServiceUrl()}/v1/card.png?host=${encodeURIComponent(publicHost)}&title=${encodeURIComponent(title)}`;
		const color = !custom ? placeholderCardColor(site) : "";
		if (color) image += `&color=${encodeURIComponent(color)}`;
		tags.push(`<meta property="og:image" content="${escapeHtml(image)}">`);
		tags.push(`<meta property="og:image:width" content="1200">`);
		tags.push(`<meta property="og:image:height" content="630">`);
		const banner = String(site.banner ?? "").trim();
		if (banner) {
			const bannerUrl = `https://${publicHost}${banner.startsWith("/") ? banner : `/${banner}`}`;
			tags.push(`<meta property="x:game:image" content="${escapeHtml(bannerUrl)}">`);
			tags.push(`<meta property="x:game:image:width" content="1200">`);
			tags.push(`<meta property="x:game:image:height" content="264">`);
		}
	}
	return tags;
}
function stripGrokExtensionsScript(html) {
	return String(html).replace(/<script\b[^>]*\bsrc\s*=\s*["'][^"']*\/grok-app-builder\/extensions\.js[^"']*["'][^>]*>\s*<\/script>/gi, "");
}
function stripShareMetaTags(html) {
	return String(html).replace(/<meta\b[^>]*>/gi, (tag) => {
		const attrs = [...tag.matchAll(/\b(?:property|name)\s*=\s*["']([^"']+)["']/gi)];
		for (const match of attrs) if (SHARE_META_KEYS.has(String(match[1]).toLowerCase())) return "";
		return tag;
	});
}
function insertAfterHeadOpen(html, snippet) {
	if (/<head\b[^>]*>/i.test(html)) return html.replace(/<head\b[^>]*>/i, (open) => `${open}${snippet}`);
	if (/<html\b[^>]*>/i.test(html)) return html.replace(/<html\b[^>]*>/i, (open) => `${open}<head>${snippet}</head>`);
	return `<!doctype html><html><head>${snippet}</head>${html}`;
}
function insertBeforeHeadClose(html, snippet) {
	if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `${snippet}</head>`);
	return insertAfterHeadOpen(html, snippet);
}
function normalizeHeadContext(ctx = {}) {
	const cwd = ctx.cwd ?? process.cwd();
	const site = applyCustomCardFromFs(ctx.site !== void 0 ? ctx.site : snapshotOgIdentity(cwd).site, cwd);
	return {
		appName: resolveOgTitle(site, ctx.appName ?? "Grok App", ctx.host ?? ""),
		projectId: ctx.projectId ?? readGrokProjectId(),
		creator: ctx.creator ?? readXCreator(),
		creatorId: ctx.creatorId ?? readXCreatorId(),
		host: ctx.host ?? "",
		cwd,
		site
	};
}
function injectGrokPwaHead(html, ctx = {}) {
	if (typeof html !== "string") return html;
	const { site, projectId, creator, creatorId, host, cwd } = normalizeHeadContext(ctx);
	const documentTitle = titleFromDocument(html);
	const appName = resolveOgTitle(site, ctx.appName ?? "Grok App", host, documentTitle);
	let next = stripShareMetaTags(html);
	if (!readGrokExtensionsEnabled()) next = stripGrokExtensionsScript(next);
	const missing = grokPwaHeadTags(appName).filter(([key]) => {
		if (key === "manifest") return !next.includes("href=\"/__grok/manifest.webmanifest\"");
		if (key === "apple-touch-icon") return !next.includes("href=\"/__grok/icon-180.png\"");
		return !next.includes(`name="${key}"`);
	}).map(([, tag]) => tag);
	next = insertAfterHeadOpen(next, grokOgHeadTags({
		host,
		appName,
		site,
		documentTitle,
		cwd
	}).join(""));
	if (readGrokExtensionsEnabled() && !next.includes("/grok-app-builder/extensions.js")) missing.push(...grokExtensionsHeadTags(projectId));
	else if (projectId && !next.includes("name=\"grok-project-id\"")) missing.push(`<meta name="grok-project-id" content="${escapeHtml(projectId)}">`);
	if (projectId && !next.includes("property=\"grok:app_id\"") && !next.includes("property='grok:app_id'")) missing.push(`<meta property="grok:app_id" content="${escapeHtml(projectId)}">`);
	const creatorTags = grokXCreatorHeadTags(creator, creatorId);
	if (creatorTags.length > 0) {
		if (!(next.includes("property=\"x:creator\" content=") || next.includes("property='x:creator' content="))) missing.push(creatorTags[0]);
		if (!next.includes("property=\"x:creator:id\"")) missing.push(creatorTags[1]);
	}
	if (missing.length === 0) return next;
	return insertBeforeHeadClose(next, missing.join(""));
}
function findHeadClose(buf) {
	return buf.toString("latin1").search(/<\/head>/i);
}
/**
* Streaming head injector: buffers only until `</head>` (ASCII marker; never
* appears inside a UTF-8 continuation byte), overwrites share-card metas,
* then passes later chunks through so streaming SSR keeps streaming.
*/
function createHeadInjector(ctx = {}) {
	const normalized = normalizeHeadContext(ctx);
	/** @type {Buffer[]} */
	let pending = [];
	let done = false;
	const apply = (html) => injectGrokPwaHead(html, {
		appName: normalized.appName,
		projectId: normalized.projectId,
		creator: normalized.creator,
		creatorId: normalized.creatorId,
		host: normalized.host,
		cwd: normalized.cwd,
		site: normalized.site
	});
	return {
		/** @param {Uint8Array | string} chunk @returns {Buffer[]} chunks ready to emit */
		push(chunk) {
			const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
			if (done) return [buf];
			pending.push(buf);
			const joined = Buffer.concat(pending);
			const at = findHeadClose(joined);
			if (at === -1) return [];
			done = true;
			pending = [];
			const closeLen = joined.toString("latin1", at).match(/^<\/head>/i)[0].length;
			const head = apply(joined.subarray(0, at + closeLen).toString("utf8"));
			return [Buffer.concat([Buffer.from(head, "utf8"), joined.subarray(at + closeLen)])];
		},
		/** @returns {Buffer[]} whatever is still buffered (no `</head>` seen) */
		flush() {
			if (done || pending.length === 0) return [];
			const rest = Buffer.concat(pending);
			pending = [];
			done = true;
			return [Buffer.from(apply(rest.toString("utf8")), "utf8")];
		}
	};
}
//#endregion
//#region server/middleware/grok-pwa.ts
/**
* Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
* global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
* without that option Nitro v3 never scans this directory.
*
* - `?install=1&platform=ios` on a document path → the Home Screen tutorial,
*   bundled into the server build via `?raw` (the public/ directory is CDN
*   static output on Vercel and not readable from the function).
* - `/__grok/manifest.webmanifest` → per-app-named manifest (kept out of
*   public/ so this dynamic response is the only one).
* - Other HTML documents → stream-inject PWA + OG head tags at `</head>`.
*   OG identity is baked via `virtual:grok-og-identity` at `vite build`
*   (this function cannot read `src/lib/og/site.json` or `public/og.jpg`).
*   This must be a middleware transforming `next()`: h3 discards the `response`
*   runtime hook's return value, and `render:html` does not exist in Nitro v3.
*/
function requestHost(event) {
	return event.req.headers.get("x-forwarded-host") ?? event.req.headers.get("host") ?? event.url.host;
}
function injectHeadStreaming(response, host) {
	const injector = createHeadInjector({
		host,
		site: grokOgIdentity.site
	});
	const transformed = response.body.pipeThrough(new TransformStream({
		transform(chunk, controller) {
			for (const out of injector.push(chunk)) controller.enqueue(out);
		},
		flush(controller) {
			for (const out of injector.flush()) controller.enqueue(out);
		}
	}));
	const headers = new Headers(response.headers);
	headers.delete("content-length");
	return new Response(transformed, {
		status: response.status,
		statusText: response.statusText,
		headers
	});
}
async function grokPwaMiddleware(event, next) {
	if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
	const path = event.url.pathname;
	const urlWithQuery = path + event.url.search;
	if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") return new Response(renderWebManifest(requestHost(event)), { headers: {
		"content-type": "application/manifest+json; charset=utf-8",
		"cache-control": "no-cache"
	} });
	if (isInstallQuery(urlWithQuery) && isDocumentPath(path) && acceptsHtml(event.req.headers.get("accept"))) {
		const html = renderInstallPageHtml(install_page_default, {
			host: requestHost(event),
			url: urlWithQuery
		});
		return new Response(html, { headers: {
			"content-type": "text/html; charset=utf-8",
			"cache-control": "no-cache"
		} });
	}
	if (!isDocumentPath(path)) return next();
	const result = await next();
	if (result instanceof Response && result.body && String(result.headers.get("content-type") ?? "").includes("text/html") && !result.headers.get("content-encoding")) return injectHeadStreaming(result, requestHost(event));
	return result;
}
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_IO091Z = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_IO091Z
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default), toEventHandler(grokPwaMiddleware)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
