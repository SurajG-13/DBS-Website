import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Campus } from "../../constants/ImageDB.js";
import { Link } from "react-router-dom";

/* =========================================================
   HERO SLIDES DATA
========================================================= */
const images = [
  {
    src: Campus.mainBuilding,
    text: "Main Building",
  },
  {
    src: Campus.prayerLine,
    text: "Morning Assembly",
  },
  {
    src: Campus.library,
    text: "Library",
  },
];

/* =========================================================
   SLIDE DURATION
========================================================= */
const slideshowDuration = 5000;

/* =========================================================
   HERO COMPONENT
========================================================= */
export default function Hero() {
  const [index, setIndex] = useState(0);

  /* =====================================================
     AUTO SLIDESHOW
  ===================================================== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, slideshowDuration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* =================================================
          BACKGROUND SLIDESHOW
      ================================================== */}
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].text}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1.15,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            opacity: { duration: 1 },
            scale: {
              duration: slideshowDuration / 1000,
              ease: "linear",
            },
          }}
        />
      </AnimatePresence>

      {/* =================================================
          OVERLAYS
      ================================================== */}

      {/* Main Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/55 to-black/25" />

      {/* Blue Bottom Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-950/40 via-transparent to-transparent" />

      {/* =================================================
          HERO CONTENT
      ================================================== */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-[0.2em] text-white uppercase backdrop-blur-md">
              Welcome To
            </span>

            {/* Main Heading */}
            <h1 className="font-playfairDisplay mt-6 text-5xl leading-tight font-bold text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
              Don Bosco School
              <br />
              Thakurnagar
            </h1>

            {/* Tagline */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Educating Minds. Inspiring Hearts. Building Futures Through
              Excellence, Discipline and Values.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                CICSE Curriculam Based
              </button>

              <Link
                to="/Contact-Us"
                className="inline-block rounded-full border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            {/* School Statistics */}
            <div className="mt-12 flex flex-wrap gap-8 text-white">
              <div>
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-sm text-white/70">Years of Excellence</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-sm text-white/70">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">30+</h3>
                <p className="text-sm text-white/70">Faculty Members</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =================================================
          SLIDE INDICATORS
      ================================================== */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            } `}
          />
        ))}
      </div>

      {/* =================================================
          SCROLL INDICATOR
      ================================================== */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute right-8 bottom-16 hidden text-white/80 md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>

          <span className="text-2xl">↓</span>
        </div>
      </motion.div>
    </section>
  );
}
