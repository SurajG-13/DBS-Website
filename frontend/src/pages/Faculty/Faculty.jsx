import React from "react";
import AdminMembers from "./AdminMembers.jsx";
import OfficeStaff from "./OfficeStaff.jsx";
import TeachingStaff from "./TeachingStaff.jsx";
import NonTeachingStaff from "./NonTeachingStaff.jsx";

/**
 * ======================================================
 * FACULTY PAGE
 * ------------------------------------------------------
 * Sections:
 * 1. Introductory message
 * 2. Staff categories:
 *    - Admin
 *    - Office
 *    - Teaching
 *    - Non-Teaching
 * ======================================================
 */

export default function Faculty() {
  return (
    <>
      {/* ==================================================
          MAIN CONTAINER
          - Centered content with max width
          - Responsive horizontal padding
      =================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12 font-spaceGrotesk">

        {/* ==================================================
            INTRODUCTION TEXT
        =================================================== */}
        <section className="mb-12">
          <p
            className="
              text-sm sm:text-base md:text-lg
              leading-relaxed text-justify
              max-w-5xl mx-auto
            "
          >
            The school is endowed with the educationally and professionally qualified teaching staff,
            who aims to render a complete quality education to all the students, nurturing the mind,
            spirit and individual character. The school aims at a healthy teacher–student relationship,
            believing that there is a seed of greatness in every child.
            <br /><br />
            <span className="italic font-medium">
              “What is taught, after all, is at least as important as how it is taught.”
            </span>
          </p>
        </section>

        {/* ==================================================
            FACULTY SECTIONS
            Each component handles its own layout
        =================================================== */}
        <AdminMembers />
        <OfficeStaff />
        <TeachingStaff />
        <NonTeachingStaff />

      </main>
    </>
  );
}
