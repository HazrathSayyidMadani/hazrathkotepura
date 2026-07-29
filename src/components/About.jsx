import SectionHeading from "./SectionHeading";
import school from "../config/school";

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <SectionHeading title="About Us" subtitle="Building character, knowledge, and confidence" />

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-5 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-10 border border-gray-100" data-aos="fade-up">
          <h3 className="text-xl xs:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "var(--primary)" }}>Our History</h3>
          <p className="text-gray-600 leading-relaxed sm:leading-7 md:leading-8 text-xs xs:text-sm md:text-base whitespace-pre-line">{school.history}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
          <div className="text-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl" style={{ background: `linear-gradient(to bottom right, var(--primary), var(--primary-light))` }} data-aos="fade-right">
            <h3 className="text-xl xs:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs xs:text-sm md:text-base">
              {school.vision.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span style={{ color: "var(--accent)" }} className="shrink-0 mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl" style={{ background: `linear-gradient(to bottom right, var(--accent), var(--accent-light))`, color: "var(--primary)" }} data-aos="fade-left">
            <h3 className="text-xl xs:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs xs:text-sm md:text-base font-medium">
              {school.mission.map((item) => (
                <li key={item} className="flex gap-2.5 items-start">
                  <span className="shrink-0 mt-0.5">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl md:rounded-3xl shadow-lg p-5 sm:p-8 md:p-10 border border-gray-100" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-32 h-32 xs:w-36 xs:h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 shrink-0" style={{ borderColor: "var(--accent)" }}>
                <img src={school.principal.image} alt={school.principal.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-xl xs:text-2xl md:text-3xl font-bold mb-3 sm:mb-4" style={{ color: "var(--primary)" }}>Principal&apos;s Message</h3>
              <p className="text-gray-600 leading-relaxed text-xs xs:text-sm md:text-base">{school.principal.message}</p>
              <h4 className="mt-4 sm:mt-6 text-base xs:text-lg md:text-xl font-bold" style={{ color: "var(--primary)" }}>{school.principal.name}</h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Headmaster</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
