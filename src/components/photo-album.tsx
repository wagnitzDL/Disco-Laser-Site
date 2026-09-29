import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export type AlbumPhoto = { src: string; alt: string };

const FRAME = "relative aspect-[3/4] w-full max-h-[720px] bg-[#14110e]";

export function PhotoAlbum({
  photos,
  autoMs,
  frameClass = FRAME,
}: {
  photos: AlbumPhoto[];
  autoMs?: number;
  frameClass?: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const startX = useRef<number | null>(null);
  const photo = photos[index] ?? photos[0];
  const many = photos.length > 1;

  function go(step: number) {
    setIndex((i) => (i + step + photos.length) % photos.length);
  }

  useEffect(() => {
    if (!autoMs || photos.length < 2 || open) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, autoMs);
    return () => window.clearInterval(id);
  }, [autoMs, open, photos.length]);

  if (!photo) return null;

  return (
    <div>
      <div
        className={frameClass}
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
        <button
          type="button"
          className="absolute inset-0 cursor-zoom-in"
          onClick={() => setOpen(true)}
          aria-label={`Ampliar foto ${index + 1} de ${photos.length}`}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="size-full object-contain"
          />
        </button>
        {many ? (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-3 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground"
              onClick={() => go(1)}
              aria-label="Próxima foto"
            >
              <ChevronRight className="size-5" />
            </button>
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground">
              {index + 1} / {photos.length}
            </p>
          </>
        ) : null}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl bg-[#14110e] p-3 sm:p-4">
          <DialogTitle className="sr-only">{photo.alt}</DialogTitle>
          <img
            src={photo.src}
            alt={photo.alt}
            className="max-h-[82vh] w-full object-contain"
          />
          {many ? (
            <div className="flex justify-center gap-2">
              <button
                type="button"
                className="flex size-11 items-center justify-center rounded-full bg-elevated text-foreground"
                onClick={() => go(-1)}
                aria-label="Foto anterior"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                className="flex size-11 items-center justify-center rounded-full bg-elevated text-foreground"
                onClick={() => go(1)}
                aria-label="Próxima foto"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
