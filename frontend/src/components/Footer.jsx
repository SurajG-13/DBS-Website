import React from "react";
import { motion } from "framer-motion";
import Location from "./Location";

/**
 * ======================================================
 * FOOTER COMPONENT
 * ------------------------------------------------------
 * 
 * Layout:
 * 
 * - Mobile   : Brand on top, links stacked
 * - Tablet   : Brand + links in 2 rows
 * - Desktop  : Brand left, links right
 * ======================================================
 */

const Footer = () => {
  /* Animation variant for link sections */
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Location/>
   <footer className="bg-lightBackground dark:bg-darkBackground text-primaryBlack dark:text-primaryWhite pt-12 px-4 sm:px-8 lg:px-20">
  
  {/* ==================================================
      TOP FOOTER CONTENT
  =================================================== */}
  <main className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* ================= BRAND SECTION ================= */}
    <section className="text-center lg:text-left">
      <h2
        className="
          font-bold leading-tight
          text-2xl sm:text-3xl md:text-4xl lg:text-6xl
        "
      >
        Don Bosco School
        <br />
        Thakurnagar
      </h2>
    </section>

    {/* ================= LINKS SECTION ================= */}
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        grid grid-cols-2 sm:grid-cols-3
        gap-8
        text-sm
        text-center sm:text-left
        lg:ml-40 lg:pl-20
      "
    >
      {/* Navigation */}
      <div>
        <h3 className="text-base font-bold mb-3">Navigation</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/School-Calender" className="hover:underline">School Calendar</a></li>
        </ul>
      </div>

      {/* Academics */}
      <div>
        <h3 className="text-base font-bold mb-3">Academics</h3>
        <ul className="space-y-2">
          <li><a href="/School-Faculty" className="hover:underline">Faculty</a></li>
          <li><a href="/School-Facilities" className="hover:underline">Facilities</a></li>
        </ul>
      </div>

      {/* Co-Curricular */}
      <div className="col-span-2 sm:col-span-1">
        <h3 className="text-base font-bold mb-3">Co-Curricular</h3>
        <ul className="space-y-2">
          <li><a href="/School-Houses" className="hover:underline">School Houses</a></li>
          <li><a href="/School-Activities" className="hover:underline">Activities</a></li>
        </ul>
      </div>

    </motion.section>
  </main>

  {/* ==================================================
      COPYRIGHT
  =================================================== */}
  <div className="mt-12 pt-6 text-center text-xs sm:text-sm text-gray-600">
    © {new Date().getFullYear()} Don Bosco School Thakurnagar. All rights reserved.
  </div>
</footer>

     </>
  );
};

export default Footer;
