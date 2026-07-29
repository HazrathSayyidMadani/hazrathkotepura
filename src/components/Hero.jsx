import hero from "../assets/hero.jpg";
import school from "../config/school";

function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center">
      <img src={hero} alt={school.fullName} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto" data-aos="fade-up">
        <p className="font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4" style={{ color: "var(--accent)" }}>
          {school.trust}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          {school.fullName}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-2 text-gray-200">{school.tagline}</p>
        <p className="text-sm sm:text-base text-gray-300 mb-8 md:mb-10">
          {school.grades} · Government Recognized
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#admissions"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
          >
            Admissions Open 2026-27
          </a>
          <a
            href="/Prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white transition hover:text-[var(--primary)]"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
