import Image from "next/image";
import type { GalleryImage } from "@/data/barber";

type GalleryGridProps = {
  images: GalleryImage[];
};

/**
 * Feed-like square grid (the Studios gallery). Consumes the GalleryImage
 * shape only, so a live Instagram feed could feed it later without changes.
 */
export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4">
      {images.map((image) => (
        <li key={image.src} className="group relative aspect-square overflow-hidden bg-surface">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            className="object-cover transition-[transform,filter] duration-500 [transition-timing-function:var(--ease-out-strong)] group-hover:scale-[1.05] group-hover:brightness-110"
          />
        </li>
      ))}
    </ul>
  );
}
