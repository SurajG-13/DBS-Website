import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Assets } from "../constants/ImageDB";

/* =========================================================
   NAVIGATION DATA
========================================================= */
const defaultNavItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/About-Us" },
  {
    label: "Academics",
    subsections: [
      { label: "Faculty", link: "/School-Faculty" },
      { label: "Facilities", link: "/School-Facilities" },
      {label: "Admission", link: "/School-Admission"},
    ],
  },
  {
    label: "Student",
    subsections: [
      { label: "Houses", link: "/School-Houses" },
      { label: "Activities", link: "/School-Activities" },
      { label: "Rules and Regulations", link: "/School-Rules" },
    ],
  },
  { label: "Gallery", link: "/School-Gallery" },
  { label: "Calendar", link: "/Academic-Calender" },
  {label: "Contact Us", link: "/Contact-Us"},
];

/* =========================================================
   HEADER COMPONENT
========================================================= */
export default function Header({ navItems = defaultNavItems }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef(null);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close Dropdowns on Outside Click & Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Animations
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -10, scale: 0.95 },
  };

  const mobileDrawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-999 px-4 md:px-8 pt-4">
      
      {/* ==========================================
          GLASS NAVBAR
      ========================================== */}
      <motion.nav
        animate={{ y: isScrolled ? -8 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 border-slate-200 shadow-xl shadow-blue-900/5 backdrop-blur-xl"
            : "bg-white/90 border-white/40 shadow-lg shadow-slate-200/20 backdrop-blur-md"
        }`}
      >
        <div className={`px-6 lg:px-8 transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
          <div className="flex items-center justify-between h-full">
            
            {/* LOGO SECTION */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={Assets.schoolLogo}
                  alt="Don Bosco School Logo"
                  className={`relative object-contain transition-all duration-300 drop-shadow-sm ${
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className=" text-slate-800 text-sm leading-tight tracking-tight group-hover:text-blue-800 transition-colors">
                  Don Bosco School Thakurnagar
                </h1>
           
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => item.subsections && setActiveDropdown(index)}
                    onMouseLeave={() => item.subsections && setActiveDropdown(null)}
                  >
                    {!item.subsections ? (
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          `px-5 py-2.5 rounded-full text-sm transition-all duration-200 ${
                            isActive
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <>
                        <button
                          aria-expanded={activeDropdown === index}
                          aria-haspopup="menu"
                          onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-200 ${
                            activeDropdown === index
                              ? "bg-blue-50 text-blue-700"
                              : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                          }`}
                        >
                          {item.label}
                          <motion.svg
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="w-4 h-4 opacity-70"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                          </motion.svg>
                        </button>

                        {/* DESKTOP DROPDOWN */}
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropdownVariants}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="absolute top-full left-0 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-100 bg-white/95 backdrop-blur-xl shadow-xl shadow-slate-200/50 p-2"
                            >
                              <ul className="flex flex-col gap-1">
                                {item.subsections.map((subsection, subIndex) => (
                                  <li key={subIndex}>
                                    <NavLink
                                      to={subsection.link}
                                      onClick={() => setActiveDropdown(null)}
                                      className={({ isActive }) =>
                                        `block px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                                          isActive
                                            ? "text-blue-700 bg-blue-50"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                        }`
                                      }
                                    >
                                      {subsection.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Toggle Menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ======================================
          MOBILE DRAWER
      ====================================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileDrawerVariants}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-screen w-[320px] max-w-[85vw] bg-white shadow-2xl z-50 flex flex-col"
            >
              {/* DRAWER HEADER */}
              <div className="flex items-center justify-between p-6 bg-linear-to-br from-slate-900 to-blue-900 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 bg-white/10 rounded-xl backdrop-blur-md">
                    <img src={Assets.schoolLogo} alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white leading-tight">
                      Don Bosco
                    </h2>
                    <p className="text-[10px] font-medium tracking-widest text-blue-200 uppercase mt-0.5">
                      Thakurnagar
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* MOBILE NAVIGATION */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <ul className="space-y-1.5">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      {!item.subsections ? (
                        <NavLink
                          to={item.link}
                          onClick={() => setMobileMenuOpen(false)}
                          className={({ isActive }) =>
                            `block w-full rounded-xl px-4 py-3.5 font-semibold text-sm transition-all ${
                              isActive ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-50"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ) : (
                        <div className="bg-slate-50/50 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                            className="w-full flex items-center justify-between px-4 py-3.5 font-semibold text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                          >
                            <span>{item.label}</span>
                            <motion.svg
                              animate={{ rotate: mobileDropdown === index ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              className="w-4 h-4 text-slate-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
                            </motion.svg>
                          </button>

                          <AnimatePresence>
                            {mobileDropdown === index && (
                              <motion.ul
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-white/50 px-2 pb-2"
                              >
                                {item.subsections.map((subsection, subIndex) => (
                                  <li key={subIndex} className="mt-1">
                                    <NavLink
                                      to={subsection.link}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={({ isActive }) =>
                                        `block w-full rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                                          isActive ? "bg-blue-100 text-blue-800" : "text-slate-600 hover:bg-slate-100"
                                        }`
                                      }
                                    >
                                      {subsection.label}
                                    </NavLink>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* DRAWER FOOTER */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                  Educating Minds.<br/>Inspiring Hearts.<br/>Building Futures.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}