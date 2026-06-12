import React from "react";
import { Aims } from "../../constants/ImageDB.js";

/**
 * ======================================================
 * EDUCATIONAL PHILOSOPHY / AIMS SECTION
 * ------------------------------------------------------
 * Modern card-based layout
 * Consistent with:
 * - Hero Section
 * - Principal's Message
 * - Facilities
 * - Faculty Directory
 * ======================================================
 */

const features = [
  {
    title: "Value Based Education",
    desc:
      "We nurture integrity, compassion and responsibility, helping students develop strong character alongside academic excellence.",
    icon: Aims.first,
  },
  {
    title: "Preventive System",
    desc:
      "Inspired by the educational philosophy of Don Bosco, we guide students through encouragement, understanding and positive reinforcement.",
    icon: Aims.second,
  },
  {
    title: "Christian Minority Institution",
    desc:
      "While rooted in Christian values, our school welcomes students from all communities and backgrounds with equal respect and dignity.",
    icon: Aims.third,
  },
  {
    title: "Moral & Value Education",
    desc:
      "Students are encouraged to cultivate honesty, empathy, discipline and social responsibility in their everyday lives.",
    icon: Aims.fourth,
  },
  {
    title: "Discipline & Responsibility",
    desc:
      "We promote self-discipline, mutual respect and accountability to create a positive and productive learning environment.",
    icon: Aims.fifth,
  },
  {
    title: "Holistic Development",
    desc:
      "Academic learning is complemented by co-curricular activities, leadership opportunities and personal growth experiences.",
    icon: Aims.sixth,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ==========================================
            SECTION HEADER
        ========================================== */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Our Vision & Values
          </span>

          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              font-bold
              text-slate-800
              font-playfairDisplay
            "
          >
            The Foundation of Our Education
          </h2>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-slate-500
              text-base
              md:text-lg
            "
          >
            Our educational philosophy is rooted in values,
            excellence, discipline and holistic development,
            preparing students for success in life.
          </p>
        </div>

        {/* ==========================================
            FEATURE CARDS
        ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              {/* ======================================
                  ICON
              ====================================== */}
              <div className="flex justify-center">
                <div
                  className="
                    h-20
                    w-20
                    rounded-2xl
                    bg-blue-500
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    group-hover:bg-blue-900
                  "
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* ======================================
                  TITLE
              ====================================== */}
              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-slate-800
                  text-center
                "
              >
                {feature.title}
              </h3>

              {/* ======================================
                  DIVIDER
              ====================================== */}
              <div
                className="
                  mx-auto
                  mt-4
                  h-1
                  w-12
                  rounded-full
                  bg-blue-600
                "
              />

              {/* ======================================
                  DESCRIPTION
              ====================================== */}
              <p
                className="
                  mt-5
                  text-center
                  text-slate-600
                  leading-relaxed
                "
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ==========================================
            BOTTOM QUOTE SECTION
        ========================================== */}
        <div
          className="
            mt-16
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
              font-playfairDisplay
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            Inspiring Minds Today,
            <br />
            Shaping Leaders For Tomorrow
          </h3>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-white/80
              leading-relaxed
            "
          >
            We believe that education is not only about academic
            achievement but also about developing character,
            values and the confidence to make a positive
            difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
}