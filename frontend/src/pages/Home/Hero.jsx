import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Campus } from "../../constants/ImageDB.js";

/* =========================================================
   HERO SLIDES DATA
   Each slide contains:
   - src  : image path
   - text : alt text for accessibility
========================================================= */
const images = [
  { src: Campus.mainBuilding, text: "Main Building" },
  { src: Campus.prayerLine, text: "Morning Assembly" },
  { src: Campus.library, text: "Library" },
];

/* Time (in ms) each slide stays on screen */
const slideshowDuration = 5000;

const Hero = () => {
  /* Track current image index */
  const [index, setIndex] = useState(0);

  /* =========================================================
     AUTO SLIDESHOW EFFECT
     Changes image every `slideshowDuration` milliseconds
  ========================================================= */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, slideshowDuration);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      {/* =====================================================
          HERO CONTAINER
          - Full viewport height
          - overflow-hidden prevents scrollbars during animation
      ====================================================== */}
      <div className="relative w-screen h-screen overflow-hidden">
        
        {/* =====================================================
            BACKGROUND IMAGE SLIDESHOW
            - AnimatePresence handles fade in/out
            - Absolute positioning layers images
        ====================================================== */}
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].text}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>

        {/* =====================================================
            DARK OVERLAY
            Improves text readability on bright images
        ====================================================== */}
        <div className="absolute inset-0 bg-black/30" />

        {/* =====================================================
            HERO TEXT CONTENT
            - Centered vertically & horizontally
            - Padding ensures spacing on small screens
        ====================================================== */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <div className="max-w-6xl text-left">
            
            {/* "Welcome to" text */}
            <p
              className="
                font-playfairDisplay text-white drop-shadow-lg mb-4
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              "
            >
              Welcome to
            </p>

            {/* School name */}
            <p
              className="
                font-spaceGrotesk font-bold text-white drop-shadow-lg leading-tight
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              "
            >
              Don Bosco School <br className="block sm:hidden" />
              Thakurnagar
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
