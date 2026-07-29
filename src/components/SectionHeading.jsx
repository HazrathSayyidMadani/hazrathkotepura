import school from "../config/school";

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--primary)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 mx-auto rounded-full mt-4" style={{ backgroundColor: "var(--accent)" }} />
    </div>
  );
}

export default SectionHeading;
