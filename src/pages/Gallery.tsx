import { getGalleryImages } from "@/data/galleryAuto";

const Gallery = () => {
  const galleryImages = getGalleryImages();
  return (
    <>
      <title>Gallery — Blessed LEJ Care</title>
      <meta name="description" content="A glimpse of our care in action. Browse our photo gallery." />

      <section className="care-section">
        <div className="care-container">
          <div className="text-center space-y-4 mb-10">
            <h1 className="care-heading">Our Gallery</h1>
            <p className="care-subheading max-w-3xl mx-auto">
              Moments from our compassionate in-home aged care and disability support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl bg-muted/40 border border-border care-transition hover:shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 care-transition"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
