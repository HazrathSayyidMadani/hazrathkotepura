import SectionHeading from "./SectionHeading";
import school from "../config/school";
import principal from "../assets/gallery/hmkotepura.jpeg";

function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Us" subtitle="Building character, knowledge, and confidence" />

        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-8 mb-8 md:mb-10 border border-gray-100" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>Our History</h3>
          <p className="text-gray-600 leading-relaxed md:leading-8 text-sm md:text-base whitespace-pre-line">{school.history}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          <div className="text-white p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl" style={{ background: `linear-gradient(to bottom right, var(--primary), var(--primary-light))` }} data-aos="fade-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
            <ul className="space-y-3 text-sm md:text-base">
              {school.vision.map((item) => (
                <li key={item} className="flex gap-2"><span style={{ color: "var(--accent)" }} className="shrink-0">✦</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl" style={{ background: `linear-gradient(to bottom right, var(--accent), var(--accent-light))`, color: "var(--primary)" }} data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
            <ul className="space-y-3 text-sm md:text-base">
              {school.mission.map((item) => (
                <li key={item} className="flex gap-2"><span className="shrink-0">✦</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl md:rounded-3xl shadow-lg p-6 md:p-10" data-aos="fade-up">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4" style={{ borderColor: "var(--accent)" }}>
                <img src={school.principal.image} alt={school.principal.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--primary)" }}>Principal&apos;s Message</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{school.principal.message}</p>
              <h4 className="mt-6 text-lg md:text-xl font-bold" style={{ color: "var(--primary)" }}>{school.principal.name}</h4>
              <p className="text-gray-500">Headmaster  </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
