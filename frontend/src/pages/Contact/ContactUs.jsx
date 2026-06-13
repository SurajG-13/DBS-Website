import React from "react";
import Location from "../../components/Location";

export default function ContactUs() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center text-white pt-32">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            Get In Touch
          </span>

          <h1
            className="
              mt-6
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              font-playfairDisplay
            "
          >
            Contact Us
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-white/80
              text-base
              md:text-lg
            "
          >
            We welcome parents, students and visitors.
            Feel free to reach out to us during office hours
            for admissions, enquiries and school-related information.
          </p>
        </div>
      </section>

      {/* ==========================================
          CONTACT INFORMATION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
  <div className="grid lg:grid-cols-3 gap-8">

    {/* ==========================================
        MAIN CONTACT CARD
    ========================================== */}
    <div
      className="
        lg:col-span-2
        bg-white
        rounded-3xl
        p-8 md:p-10
        shadow-xl
        border border-slate-200
      "
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
          📍
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Contact Information
          </h2>

          <p className="text-slate-500">
            We'd love to hear from you
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Address */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3">
            School Address
          </h3>

          <div className="space-y-1 text-slate-600">
            <p>Don Bosco School Thakurnagar</p>
            <p>PO: Thakurnagar</p>
            <p>PS: Gaighata</p>
            <p>North 24 Parganas</p>
            <p>West Bengal – 743287</p>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3">
            Contact Details
          </h3>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-slate-500">
                Mobile
              </p>

              <a
                href="tel:+917063180390"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                +91 70631 80390
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Email
              </p>

              <a
                href="mailto:donboscoschooltknr@gmail.com"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                donboscoschooltknr@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Website
              </p>

              <a
                href="https://www.dbsthakurnagar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-700 break-all"
              >
                www.dbsthakurnagar.com
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* ==========================================
        RIGHT SIDE INFO CARDS
    ========================================== */}
    <div className="space-y-8">

      {/* Office Hours */}
      <div
        className="
          bg-white
          rounded-3xl
          p-8
          shadow-xl
        "
      >
       

        <h3 className="text-xl font-bold mb-4">
          Office Hours
        </h3>

        <p className="text-base">
          Monday – Friday
        </p>

        <p className="text-lg font-semibold mt-1 text-blue-700 ">
          09:00 A.M. – 12:30 P.M.
        </p>
      </div>

      {/* Visiting Hours */}
      <div
        className="
          bg-white
          rounded-3xl
          border
          border-slate-200
          p-8
          shadow-lg
        "
      >

        <h3 className="text-xl font-bold text-slate-800 mb-5">
          Visiting Hours
        </h3>

        <div className="space-y-5">

          <div>
            <p className="font-semibold text-slate-800">
              Principal
            </p>

            <p className="text-slate-600 text-sm">
              Monday – Friday
            </p>

            <p className="text-blue-700 font-medium">
              09:00 A.M. – 10:00 A.M.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <p className="font-semibold text-slate-800">
              Teachers
            </p>

            <p className="text-slate-600 text-sm">
              Friday
            </p>

            <p className="text-blue-700 font-medium">
              02:00 P.M. – 02:30 P.M.
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>


      {/* ==========================================
          IMPORTANT NOTICE
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div
          className="
            rounded-3xl
            bg-linear-to-r
            from-blue-900
            via-blue-800
            to-indigo-900
            p-10
            text-center
            text-white
          "
        >
          <h3
            className="
              text-3xl
              md:text-4xl
              font-bold
              font-playfairDisplay
            "
          >
            Visitor Information
          </h3>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-white/80
            "
          >
            Parents and visitors are requested to
            adhere to the prescribed visiting hours.
            All school-related enquiries should be made
            during office hours for prompt assistance.
          </p>

          <p className="mt-6 italic text-white/70">
            "All business will be restricted to these hours."
          </p>
        </div>
      </section>

    </main>
  );
}