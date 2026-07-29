import school from "../config/school";

function Stats() {
  return (
    <section className="text-white py-12 md:py-16" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">

        {school.stats.map((item, index) => {
          const numericPart = parseInt(item.number, 10);
          const suffix = item.number.replace(/[\d]/g, "");

          return (
            <div key={item.label} data-aos="zoom-in" data-aos-delay={index * 100}>
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ color: "var(--accent)" }}
              >
                {Number.isNaN(numericPart)
                  ? item.number
                  : `${numericPart}${suffix}`}
              </h3>

              <p className="mt-2 md:mt-3 text-sm md:text-base text-blue-100">
                {item.label}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Stats;