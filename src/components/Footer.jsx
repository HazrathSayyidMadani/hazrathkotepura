import school from "../config/school";

function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "var(--primary)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">{school.fullName}</h3>
          <p className="text-blue-100 text-sm md:text-base">{school.motto}</p>
          <p className="text-blue-200 text-xs md:text-sm mt-2">{school.trust}</p>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base text-blue-100">
            {school.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:opacity-80 transition">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Contact</h3>
          <p className="text-blue-100 text-sm md:text-base mb-2">{school.contact.address}</p>
          <p className="text-blue-100 text-sm md:text-base mb-2">{school.contact.phone}</p>
          <p className="text-blue-100 text-sm md:text-base">{school.contact.email}</p>
        </div>
      </div>
      <div className="border-t border-white/20 py-5 text-center text-blue-200 text-xs md:text-sm px-4">
        © {new Date().getFullYear()} {school.fullName}. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
