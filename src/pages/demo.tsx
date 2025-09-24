import Example from "@/components/ui/image-gallery";
import { getGalleryImages } from "@/data/galleryAuto";

export default function DemoOne() {
  const images = getGalleryImages().map((g) => g.src);
  return <Example images={images} title="Gallery Demo" description="Using your local gallery images." />;
}
