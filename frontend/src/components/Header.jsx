import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Assets } from "../constants/ImageDB";

/**
 * - Accepts a `navItems` array where sections MAY or MAY NOT have `subsections`.
 * - If a section has no `subsections`, it renders as a simple link.
 * - If a section has `subsections`, it renders an accessible dropdown (hover on desktop, click on mobile).
 *
 * Features:
 * - Responsive: desktop horizontal nav, mobile slide-down menu with accordion subsections.
 * - Accessible: keyboard support (Esc closes), aria attributes, focus handling.
 * - Clean modern header design (centered brand, subtle shadow, pill-shaped nav items).
 */

const defaultNavItems = [
  { label: "Home", link: "/" },
  {
    label: "Academics",
    subsections: [
      // { label: "Curriculum", link: "/curriculum" },
      { label: "Faculty", link: "/School-Faculty" },
      { label: "Facilities", link: "/School-Facilities" },
    ],
  },
  {
    label: "Co-Curricular",
    subsections: [
      { label: "Houses", link: "/School-Houses" },
      { label: "Activities", link: "/School-Activities" },
    ],
  },
  
  // { label: "About Us", subsections: [{ label: "Our History", link: "/history" }, { label: "Mission & Vision", link: "/mission-vision" }] },
  {label: "Gallery", link: "/School-Gallery"},
  { label: "Calender", link: "/Academic-Calender" },

];

export default function Header({ navItems = defaultNavItems }) {
  const [activeNav, setActiveNav] = useState(null); // index of open dropdown on desktop
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null); // which accordion in mobile is opened
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setActiveNav(null);
      }
    }

    function onKey(e) {
      if (e.key === "Escape") {
        setActiveNav(null);
        setMobileOpen(false);
        setMobileOpenIndex(null);
      }
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // small motion variants
  const dropVariants = {
    hidden: { opacity: 0, y: -6 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
  };

  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0 },
    open: { height: "auto", opacity: 1 },
  };

  return (
    <header ref={rootRef} className="sticky top-0 z-50">
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: logo / brand */}
            <div className="flex items-center flex-1 lg:flex-none">
              <Link to="/" className="flex items-center">
              
                <img src={Assets.schoolLogo} alt="School Logo" className="w-30 h-30 object-contain" />
                <div className="hidden sm:block">
                  <h1 className="text-lg font-semibold">Don Bosco School</h1>
                  <p className="text-xs text-gray-500">Thakurnagar</p>
                </div>
              </Link>
            </div>

            {/* Center / Desktop Nav */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-3 flex-1">
              <ul className="flex items-center space-x-3">
                {navItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="relative"
                    onMouseEnter={() => item.subsections && setActiveNav(idx)}
                    onMouseLeave={() => item.subsections && setActiveNav(null)}
                  >
                    {/* If no subsections, render a link */}
                    {!item.subsections ? (
                      <Link
                        to={item.link}
                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 flex items-center gap-2"
                          aria-haspopup="menu"
                          aria-expanded={activeNav === idx}
                          onClick={() => setActiveNav((c) => (c === idx ? null : idx))}
                        >
                          <span>{item.label}</span>
                          <svg className="w-3 h-3 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {activeNav === idx && (
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              variants={dropVariants}
                              transition={{ duration: 0.12 }}
                              className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg z-50"
                            >
                              <ul className="py-1">
                                {item.subsections.map((sub, sidx) => (
                                  <li key={sidx}>
                                    <Link
                                      to={sub.link}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500"
                                      onClick={() => setActiveNav(null)}
                                    >
                                      {sub.label}
                                    </Link>
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

            {/* Right: actions + mobile menu button */}
            <div className="flex items-center gap-3">
              {/* <div className="hidden lg:flex items-center gap-3">
                <Link to="/contact" className="text-sm px-3 py-2 rounded-md bg-red-600 text-white font-medium">Contact</Link>
              </div> */}

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-md inline-flex items-center justify-center text-gray-600 hover:bg-gray-100"
                aria-expanded={mobileOpen}
                aria-label="Toggle menu"
                onClick={() => setMobileOpen((s) => !s)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu - slide down */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="px-4 py-3">
                <ul className="space-y-1">
                  {navItems.map((item, idx) => (
                    <li key={idx}>
                      {!item.subsections ? (
                        <Link
                          to={item.link}
                          className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <button
                            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                            onClick={() => setMobileOpenIndex((c) => (c === idx ? null : idx))}
                            aria-expanded={mobileOpenIndex === idx}
                          >
                            <span>{item.label}</span>
                            <svg className={`w-4 h-4 text-gray-500 transform ${mobileOpenIndex === idx ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {mobileOpenIndex === idx && (
                              <motion.ul
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={mobileMenuVariants}
                                transition={{ duration: 0.16 }}
                                className="pl-4 mt-1 space-y-1"
                              >
                                {item.subsections.map((sub, sidx) => (
                                  <li key={sidx}>
                                    <Link
                                      to={sub.link}
                                      className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {sub.label}
                                    </Link>
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
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
