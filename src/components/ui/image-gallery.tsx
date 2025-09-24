export interface ImageGalleryProps {
  images?: string[];
  title?: string;
  description?: string;
}

export default function Example({
  images,
  title = "Our Latest Creations",
  description = "A visual collection of our most recent works – each piece crafted with intention, emotion, and style.",
}: ImageGalleryProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');
    
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      
      <section className="w-full flex flex-col items-center justify-start py-12">
      
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        </div>

        {/* Gallery row (mobile: horizontal scroll, desktop: hover-expand) */}
        <div className="flex items-center gap-3 md:gap-4 h-[240px] sm:h-[320px] md:h-[400px] w-full max-w-5xl mt-6 px-4 overflow-x-auto no-scrollbar flex-nowrap snap-x snap-mandatory">
          {(images && images.length > 0
            ? images
            : [
                "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop",
              ]
          ).map((src, idx) => (
            <div
              key={idx}
              className="relative group flex-shrink-0 w-56 h-[240px] sm:w-56 sm:h-[320px] md:w-56 md:h-[400px] rounded-lg overflow-hidden transition-[width] duration-500 sm:flex-grow sm:hover:w-full snap-center"
            >
              <img
                className="h-full w-full object-cover object-center"
                src={src}
                alt={`image-${idx}`  }
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
