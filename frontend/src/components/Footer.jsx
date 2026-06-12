import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Location from "./Location";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Location />

      <footer className="relative overflow-hidden bg-slate-950 text-white">
        {/* ==========================================
            BACKGROUND EFFECTS
        ========================================== */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        {/* ==========================================
            MAIN FOOTER
        ========================================== */}
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* ======================================
                BRAND SECTION
            ====================================== */}
            <div className="lg:col-span-5">
              <span className="inline-block rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm tracking-wide backdrop-blur-md">
                Don Bosco School
              </span>

              <h2 className="font-playfairDisplay mt-6 text-4xl leading-tight font-bold md:text-5xl">
                Don Bosco School
                <br />
                Thakurnagar
              </h2>

              <p className="mt-6 max-w-md leading-relaxed text-slate-300">
                Educating Minds. Inspiring Hearts. Building Futures.
              </p>

              <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
                We are committed to nurturing academic excellence, strong values
                and lifelong learning in a caring, inclusive and future-ready
                environment.
              </p>

              {/* Optional Socials */}
              <div className="mt-8 flex gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  D
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  B
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
                  S
                </div>
              </div>
            </div>

            {/* ======================================
                LINKS SECTION
            ====================================== */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
                {/* Navigation */}
                <div>
                  <h3 className="mb-5 text-lg font-semibold">Navigation</h3>

                  <ul className="space-y-3 text-slate-400">
                    <li>
                      <Link to="/" className="transition hover:text-white">
                        Home
                      </Link>
                    </li>

                     <li>
                      <Link to="/About-Us" className="transition hover:text-white">
                       About
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/Academic-Calender"
                        className="transition hover:text-white"
                      >
                        Academic Calendar
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Academics */}
                <div>
                  <h3 className="mb-5 text-lg font-semibold">Academics</h3>

                  <ul className="space-y-3 text-slate-400">
                    <li>
                      <Link
                        to="/School-Faculty"
                        className="transition hover:text-white"
                      >
                        Faculty
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/School-Facilities"
                        className="transition hover:text-white"
                      >
                        Facilities
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/School-Admission"
                        className="transition hover:text-white"
                      >
                        Admission
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Student Life */}
                <div>
                  <h3 className="mb-5 text-lg font-semibold">Student Life</h3>

                  <ul className="space-y-3 text-slate-400">
                    <li>
                      <Link
                        to="/School-Houses"
                        className="transition hover:text-white"
                      >
                        Houses
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/School-Activities"
                        className="transition hover:text-white"
                      >
                        Activities
                      </Link>
                    </li>
                       <li>
                      <Link
                        to="/School-Rules"
                        className="transition hover:text-white"
                      >
                        Rules
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ==================================
                  CONTACT CARD
              ================================== */}
              <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <h3 className="mb-3 text-xl font-semibold">
                  School Address
                </h3>

                <p className="text-slate-400">Don Bosco School, Thakurnagar</p>

                <p className="mt-2 text-slate-400">
                  PO: Thakurnagar, PS: Gaighata <br/> North 24 Parganas – 743287
                </p>
                 <p className="mt-2 text-slate-400">
                  Mob:  <a
                href="tel:+917063180390"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                +91 70631 80390
              </a> <br/> E-mail:  <a
                href="mailto:donboscoschooltknr@gmail.com"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                donboscoschooltknr@gmail.com
              </a>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ======================================
              DIVIDER
          ====================================== */}
          <div className="mt-16 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

          {/* ======================================
              COPYRIGHT
          ====================================== */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Don Bosco School, Thakurnagar. All
              rights reserved.
            </p>

            <p>Inspiring Minds Today • Shaping Leaders For Tomorrow</p>
          </div>
        </div>
      </footer>
    </>
  );
}
