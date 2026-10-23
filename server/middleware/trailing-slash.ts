/**
 * Google Ads recusa a página quando a resposta é 307.
 * /karaoke/ virava 307 para /karaoke. A barra sai do pedido antes do
 * TanStack, e o navegador recebe 200.
 */
interface SlashRequest extends Request {
  runtime?: unknown;
  context?: unknown;
  waitUntil?: (promise: Promise<unknown>) => void;
}

interface SlashEvent {
  url: URL;
  req: SlashRequest;
}

export default function trailingSlashMiddleware(
  event: SlashEvent,
  next: () => unknown,
) {
  const method = (event.req.method ?? "GET").toUpperCase();
  if (method !== "GET" && method !== "HEAD") return next();

  const path = event.url.pathname;
  if (path.length <= 1 || !path.endsWith("/")) return next();

  const clean = path.replace(/\/+$/, "") || "/";
  const nextUrl = new URL(event.req.url);
  nextUrl.pathname = clean;
  const rewritten = new Request(nextUrl, {
    method: event.req.method,
    headers: event.req.headers,
  }) as SlashRequest;
  rewritten.runtime = event.req.runtime;
  rewritten.context = event.req.context;
  rewritten.waitUntil = event.req.waitUntil?.bind(event.req);
  event.req = rewritten;
  event.url = nextUrl;
  return next();
}
