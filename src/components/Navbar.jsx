import { useState } from "react";
import { FaBars, FaTimes, FaChevronRight } from "react-icons/fa";
import logo from "../assets/logo.jpeg";
import school from "../config/school";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10 shadow-xl text-white"
  style={{ backgroundColor: "color-mix(in srgb, var(--primary) 96%, transparent)" }}
>
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex justify-between items-center gap-2.5 sm:gap-4">
          <a href="#home" onClick={closeMenu} className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 sm:flex-initial">
            <img
              src={logo}
              alt={`${school.name} Logo`}
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-lg shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-sm xs:text-base sm:text-xl md:text-2xl font-black tracking-wide leading-tight truncate">
                {school.name}
              </h1>
              <p className="text-[9px] xs:text-[10px] sm:text-xs md:text-sm text-blue-100 tracking-wider xs:tracking-widest uppercase truncate">
                {school.subtitle}
              </p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base">
              {school.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-yellow-300 transition-colors duration-300 py-1">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#admissions"
              className="px-5 py-2.5 rounded-full font-semibold hover:scale-105 transition duration-300 whitespace-nowrap shadow-md"
              style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
            >
              Apply Now
            </a>
          </div>

          <button
            className="lg:hidden p-2.5 rounded-xl hover:bg-white/10 active:bg-white/20 transition shrink-0 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-200" style={{ backgroundColor: "var(--primary)" }}>
            <ul className="flex flex-col py-3 px-4 gap-1 font-medium">
              {school.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between py-3 px-3.5 rounded-xl hover:bg-white/10 active:bg-white/15 transition text-base"
                  >
                    <span>{link.label}</span>
                    <FaChevronRight size={12} className="opacity-60" />
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href="#admissions"
                  onClick={closeMenu}
                  className="block text-center px-5 py-3.5 rounded-xl font-bold shadow-lg text-base active:scale-[0.98] transition"
                  style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Backdrop overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[60px] bg-black/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;
