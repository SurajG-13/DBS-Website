import React from "react";
import { Assets } from "../../constants/ImageDB";

/**
 * ======================================================
 * PRINCIPAL'S DESK
 * ------------------------------------------------------
 * Modern Institutional Layout
 * - Premium card design
 * - Leadership profile panel
 * - Responsive layout
 * - Consistent with Hero / Faculty / Facilities pages
 * ======================================================
 */

export default function Info() {
  const PrincipalImage = Assets.principalImage;

  return (
    <main className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ==================================================
            SECTION HEADER
        =================================================== */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Leadership Message
          </span>

          <h1
            className="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              text-slate-800
              font-playfairDisplay
            "
          >
            From The Principal&apos;s Desk
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              mx-auto
              text-slate-500
              text-base
              md:text-lg
            "
          >
            A message of inspiration, values and excellence
            for every learner.
          </p>
        </div>

        {/* ==================================================
            MAIN CONTENT CARD
        =================================================== */}
        <div
          className="
            bg-white
            rounded-4xl
            overflow-hidden
            border border-slate-200
            shadow-xl
          "
        >
          <div className="grid lg:grid-cols-12">

            {/* ==================================================
                LEFT PANEL
                PRINCIPAL PROFILE
            =================================================== */}
            <div
              className="
                lg:col-span-4
                bg-gradient-to-br
                from-blue-900
                via-blue-800
                to-indigo-900
                text-white
                p-8
                md:p-10
                flex
                flex-col
                items-center
                justify-center
              "
            >
              {/* Principal Image */}
              <img
                src={PrincipalImage}
                alt="Sr. Litty Mathhew"
                className="
                  w-64
                  h-80
                  object-cover
                  rounded-3xl
                  border-4
                  border-white/20
                  shadow-2xl
                "
              />

              {/* Name */}
              <h2 className="mt-6 text-2xl font-bold text-center">
                Sr. Litty Mathhew
              </h2>

              {/* Designation */}
              <p className="mt-2 text-white/80">
                Principal
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/20 my-8" />

              {/* Quote */}
              <blockquote
                className="
                  text-center
                  italic
                  text-white/90
                  leading-relaxed
                "
              >
                “Education is not the filling of a bucket,
                but the lighting of a fire.”
              </blockquote>

              <p className="mt-2 text-sm text-white/70">
                — W. B. Yeats
              </p>
            </div>

            {/* ==================================================
                RIGHT PANEL
                MESSAGE CONTENT
            =================================================== */}
            <div className="lg:col-span-8 p-8 md:p-12 lg:p-14">

              {/* Opening Highlight */}
              <div
                className="
                  mb-8
                  rounded-2xl
                  bg-blue-50
                  border
                  border-blue-100
                  p-6
                "
              >
                <p
                  className="
                    text-blue-900
                    font-medium
                    text-lg
                    leading-relaxed
                  "
                >
                  “Education is not the filling of a bucket,
                  but the lighting of a fire.”
                </p>
              </div>

              {/* Message */}
              <div
                className="
                  space-y-6
                  text-slate-700
                  leading-relaxed
                  text-justify
                "
              >
                <p>
                  For us at Don Bosco School, Thakurnagar,
                  education is much more than academic excellence.
                  It is about nurturing curiosity, building confidence,
                  developing character and inspiring students to
                  become responsible citizens of tomorrow.
                </p>

                <p>
                  The school is a place where children are encouraged
                  to say, “I see it, I get it, I can do it.”
                  Our philosophy of education has always focused on
                  understanding the needs of every individual child.
                  We believe that children acquire knowledge and skills
                  best when the learning environment is stimulating,
                  supportive and purposeful.
                </p>

                <p>
                  To my mind, an educational institution is not merely
                  a place for academic instruction. It is a place where
                  character is built, minds are enriched and meaningful
                  experiences are created—experiences that remain with
                  students throughout their lives.
                </p>

                <p>
                  I wish all our students a bright, successful and
                  prosperous future. May they continue to grow in
                  wisdom, confidence and values while achieving their
                  dreams and aspirations.
                </p>
              </div>

             

              {/* Signature */}
              <div className="mt-10">
                <p
                  className="
                    font-playfairDisplay
                    text-2xl
                    text-slate-800
                  "
                >
                  Sr. Litty Mathhew
                </p>

                <p className="mt-1 text-slate-500">
                  Principal
                </p>

                <div className="mt-3 w-24 h-1 bg-blue-600 rounded-full" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}