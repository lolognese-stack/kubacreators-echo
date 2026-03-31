import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="flex gap-4 animate-scroll-left" style={{ width: "max-content" }}>
        {[...images, ...images].map((src, i) => (
          <div
            key={i}
            className="w-40 h-56 md:w-48 md:h-64 rounded-2xl overflow-hidden flex-shrink-0"
            style={{ transform: `rotate(${(i % 6 - 2.5) * 3}deg)` }}
          >
            <img
              src={src}
              alt="AI creator"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
