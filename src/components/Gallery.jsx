import gallery1 from "../assets/gallery/gallery1.jpeg";
import kotepura from "../assets/gallery/kotepura.jpg";
import { PhotoProvider, PhotoView } from "react-photo-view";
import SectionHeading from "./SectionHeading";

function Gallery() {
  const images = [
    { src: kotepura, alt: "School campus" },
    // { src: gallery1, alt: "School activities" },
    // { src: hazrath, alt: "Students at school" },
    // { src: gallery1, alt: "School event" },
    // { src: hazrath, alt: "Classroom learning" },
    // { src: gallery1, alt: "School gathering" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="School Gallery"
          subtitle="Glimpses of life at our campus"
        />

        <PhotoProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, index) => (
              <PhotoView key={index} src={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-md cursor-pointer hover:scale-[1.02] hover:shadow-xl transition duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}

export default Gallery;
