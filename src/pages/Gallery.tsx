import { getGalleryImages } from "@/data/galleryAuto";
import ImageGallery from "@/components/ui/image-gallery";

const Gallery = () => {
  const galleryImages = getGalleryImages();
  return (
    <>
      <title>Gallery — Blessed LEJ Care</title>
      <meta name="description" content="A glimpse of our care in action. Browse our photo gallery." />

      <section className="care-section">
        <div className="care-container">
          <ImageGallery
            images={galleryImages.map((g) => g.src)}
            title="Our Gallery"
            description="Moments from our compassionate in-home aged care and disability support."
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
