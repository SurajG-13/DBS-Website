import React from "react";
import FacultyGrid from "./FacultyGrid";
import { Assets } from "../../constants/ImageDB";

/**
 * =====================================================
 * STAFF DATA
 * =====================================================
 */

const adminMembers = [
  {
    name: "Sr. Litty Mathhew",
    designation: "Principal",
    dp: Assets.principalImage,
  },
  {
    name: "Sr. Beena Thomas",
    designation: "Secretary",
  },
];

const officeStaff = [
  {
    name: "Samarpan Halder",
    designation: "Office Staff",
  },
  {
    name: "Rosy Rinke Dey",
    designation: "Office Staff",
  },
];

const teachingStaff = [
  { name: "Ankita Biswas", designation: "Teacher" },
  { name: "Aparna Biswas", designation: "Teacher" },
  { name: "Baishali Majumder", designation: "Teacher" },
  { name: "Beatrice Mondal", designation: "Teacher" },
  { name: "Dibya Chowdhury", designation: "Teacher" },
  { name: "Dona Mondal", designation: "Teacher" },
  { name: "Jui Mondal", designation: "Teacher" },
  { name: "Keya Mallick", designation: "Teacher" },
  { name: "Mousumi Dutta", designation: "Teacher" },
  { name: "Pinki Biswas", designation: "Teacher" },
  { name: "Putul Chakraborty", designation: "Teacher" },
  { name: "Sanchita Roy", designation: "Teacher" },
  { name: "Sangita Mishra", designation: "Teacher" },
  { name: "Sankar Das", designation: "Teacher" },
  { name: "Saroj Dey", designation: "Teacher" },
  { name: "Sathi Biswas", designation: "Teacher" },
  { name: "Soma Khan", designation: "Teacher" },
  { name: "Soumi Biswas", designation: "Teacher" },
  { name: "Sr. Sugyani Nayak", designation: "Teacher" },
  { name: "Suraj Ghosh", designation: "Teacher" },
  { name: "Susmita Das", designation: "Teacher" },
].sort((a, b) => a.name.localeCompare(b.name));

const nonTeachingStaff = [
  {
    name: "Cecilia Tina Seth",
    designation: "Support Staff",
  },
  {
    name: "Mrinal Kanti Majumder",
    designation: "Support Staff",
  },
   {
    name: "Lokhi Mondal",
    designation: "Support Staff",
  },
   {
    name: "Leena Mondal",
    designation: "Support Staff",
  },
   {
    name: "Bandana Halder",
    designation: "Support Staff",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default function Faculty() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-32 text-center text-white">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            Our Faculty & Staff
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfairDisplay">
            Meet The People
            <br />
            Behind Our Excellence
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
            Our institution is powered by dedicated educators,
            administrators and support staff who work together
            to provide an environment where a
            student can grow and succeed.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRODUCTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Our Commitment to Education
            </h2>

            <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              The school is endowed with educationally and professionally
              qualified teaching staff who strive to provide quality
              education while nurturing the intellectual, emotional and
              moral development of every student.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              We believe in fostering a healthy teacher–student
              relationship and recognize the unique potential present
              in every child.
            </p>

            <div className="mt-4">
              <p className="text-base md:text-lg text-slate-600">
                “What is taught, after all, is at least as important
                as how it is taught.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          FACULTY SECTIONS
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 space-y-24">
        <FacultyGrid
          title="Administrative Leadership"
          subtitle="Providing vision, guidance and leadership for the continued growth and excellence of our institution."
          badgeText="Leadership Team"
          members={adminMembers}
        />

        <FacultyGrid
          title="Office Staff"
          subtitle="Ensuring smooth administration and daily operations of the school."
          badgeText="Administration"
          members={officeStaff}
        />

        <FacultyGrid
          title="Teaching Staff"
          subtitle="Dedicated educators committed to academic excellence and holistic student development."
          badgeText="Faculty Directory"
          members={teachingStaff}
        />

        <FacultyGrid
          title="Non-Teaching Staff"
          subtitle="Dedicated professionals supporting students, teachers and school operations."
          badgeText="Support Team"
          members={nonTeachingStaff}
        />
      </section>
    </main>
  );
}