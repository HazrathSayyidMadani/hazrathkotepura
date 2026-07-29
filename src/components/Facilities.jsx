import {
  FaChalkboardTeacher,
  FaBook,
  FaFlask,
  FaFutbol,
  FaLaptop,
  FaBus,
} from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import school from "../config/school";

const icons = [FaChalkboardTeacher, FaBook, FaFlask, FaLaptop, FaFutbol, FaBus];

function Facilities() {
  return (
    <section id="facilities" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Our Facilities" subtitle="Modern infrastructure designed for holistic learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {school.facilities.map((facility, index) => {
            const Icon = icons[index];
            return (
              <div
                key={facility.title}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <div className="mb-4 group-hover:scale-110 transition-transform" style={{ color: "var(--accent)" }}>
                  <Icon size={36} />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{facility.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
