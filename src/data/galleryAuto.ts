// Auto-discovery for gallery images using Vite's import.meta.glob
// Place images in: src/assets/gallery/**/*.{jpg,jpeg,png,webp,avif}
// Falls back to /public/gallery list (src/data/gallery.ts) if none found

import { galleryImages as fallbackPublicList } from "@/data/gallery";

export type GalleryItem = { src: string; alt: string };

// Build list of images from src/assets/gallery at build time
const modules = import.meta.glob("../assets/gallery/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
});

function fileNameToAlt(filePath: string): string {
  const name = filePath.split("/").pop() || "image";
  const base = name.replace(/\.[^.]+$/, "");
  return base.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const autoDiscovered: GalleryItem[] = Object.entries(modules)
  .map(([path, mod]: any) => {
    const url: string = (mod && mod.default) ? mod.default : String(mod);
    return {
      src: url,
      alt: fileNameToAlt(path),
    } as GalleryItem;
  })
  // Keep a stable order by path
  .sort((a, b) => (a.src > b.src ? 1 : -1));

export function getGalleryImages(): GalleryItem[] {
  if (autoDiscovered.length > 0) return autoDiscovered;
  return fallbackPublicList;
}

export function getPreviewImages(count = 8): GalleryItem[] {
  const list = getGalleryImages();
  return list.slice(0, Math.max(0, Math.min(count, list.length)));
}
