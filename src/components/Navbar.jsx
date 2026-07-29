import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import school from "../config/school";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 shadow-xl text-white"
      style={{ backgroundColor: "color-mix(in srgb, var(--primary) 95%, transparent)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center gap-4">
        <a href="#home" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt={`${school.name} Logo`}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-lg shrink-0"
          />
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl md:text-2xl font-black tracking-wide leading-tight truncate">
              {school.name}
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-100 tracking-widest uppercase">
              {school.subtitle}
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
            {school.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-yellow-300 transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#admissions"
            className="px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition duration-300 whitespace-nowrap"
            style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
          >
            Apply Now
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ backgroundColor: "var(--primary)" }}>
          <ul className="flex flex-col py-4 px-6 gap-1 font-medium">
            {school.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu} className="block py-3 px-2 rounded-lg hover:bg-white/10 transition">
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#admissions"
                onClick={closeMenu}
                className="block text-center px-5 py-3 rounded-full font-semibold"
                style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
