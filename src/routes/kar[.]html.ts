import { createFileRoute } from "@tanstack/react-router";

/** QR code antigo impresso. 301 permanente para a página de karaokê. */
function goneToKaraoke() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: "/karaoke",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

export const Route = createFileRoute("/kar.html")({
  server: {
    handlers: {
      GET: () => goneToKaraoke(),
      HEAD: () => goneToKaraoke(),
    },
  },
});
