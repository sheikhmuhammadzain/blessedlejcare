// Auto-discovery for gallery images using Vite's import.meta.glob
// Place images in: src/assets/gallery/**/*.{jpg,jpeg,png,webp,avif}
// Also auto-imports all images from /public/gallery via an auto-generated manifest.
// Falls back to /public/gallery manual list (src/data/gallery.ts) if none found

import { galleryImages as fallbackPublicList } from "@/data/gallery";
import { galleryPublicManifest } from "@/data/gallery.manifest";

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
  // 1) Prefer auto-generated manifest from /public/gallery
  if (Array.isArray(galleryPublicManifest) && galleryPublicManifest.length > 0) {
    return galleryPublicManifest as GalleryItem[];
  }
  // 2) Then, use auto-discovered assets from src/assets/gallery
  if (autoDiscovered.length > 0) return autoDiscovered;
  // 3) Finally, fall back to a static list
  return fallbackPublicList;
}

export function getPreviewImages(count = 8): GalleryItem[] {
  const list = getGalleryImages();
  return list.slice(0, Math.max(0, Math.min(count, list.length)));
}
