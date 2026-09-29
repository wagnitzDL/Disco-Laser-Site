import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type AlbumVideo = { src: string; label: string };

export function VideoAlbum({ videos }: { videos: AlbumVideo[] }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);
  const clip = videos[index];
  const many = videos.length > 1;

  function go(step: number) {
    setIndex((i) => (i + step + videos.length) % videos.length);
  }

  if (!clip) return null;

  return (
    <div className="mt-8">
      <div
        className="relative overflow-hidden rounded-xl bg-black"
        onTouchStart={(e) => {
          startX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (startX.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? startX.current) - startX.current;
          if (dx > 40) go(-1);
          else if (dx < -40) go(1);
          startX.current = null;
        }}
      >
        <video
          key={clip.src}
          src={clip.src}
          controls
          playsInline
          muted
          autoPlay
          onEnded={() => go(1)}
          className="mx-auto max-h-[640px] w-full object-contain"
          aria-label={clip.label}
        />
        {many ? (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground"
              onClick={() => go(-1)}
              aria-label="Vídeo anterior"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground"
              onClick={() => go(1)}
              aria-label="Próximo vídeo"
            >
              <ChevronRight className="size-5" />
            </button>
            <p className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground">
              {index + 1} / {videos.length}
            </p>
          </>
        ) : null}
      </div>
      <p className="mt-3 text-center text-sm text-muted">{clip.label}</p>
      {many ? (
        <div className="mt-3 flex justify-center gap-2">
          {videos.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={item.label}
              onClick={() => setIndex(i)}
              className={
                i === index
                  ? "size-2.5 rounded-full bg-gold"
                  : "size-2.5 rounded-full bg-foreground/25"
              }
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
