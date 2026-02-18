import React from "react";
import { Assets } from "../../constants/ImageDB";

/**
 * ======================================================
 * SCHOOL HOUSES SECTION
 * ------------------------------------------------------
 * - Displays the four school houses
 * - Responsive grid layout
 * - Clean, card-based design
 * ======================================================
 */

export default function Houses() {


    const Red = Assets.placeholderImage;
  /**
   * Houses data
   * Each object represents one school house
   */
  const houses = [
    {
      title: "House Red",
      img: Red,
      desc:
        "Red House stands for passion, courage, and relentless determination. Inspired by Saint Joseph, it nurtures leadership and resilience.",
    },
    {
      title: "House Blue",
      img: Red,
      desc:
        "Blue House represents wisdom, integrity, and calm confidence. Guided by Saint Teresa of Kolkata, members lead with clarity and kindness.",
    },
    {
      title: "House Green",
      img: Red,
      desc:
        "Green House embodies growth, harmony, and perseverance. Inspired by Dr. APJ Abdul Kalam, ambition and teamwork thrive here.",
    },
    {
      title: "House Yellow",
      img: Red,
      desc:
        "Yellow House symbolizes optimism, energy, and creativity. Inspired by Rabindranath Tagore, members shine in academics, culture, and service.",
    },
  ];

  return (
    <main className="w-screen mx-auto px-4 sm:px-6 lg:px-12 py-12">

      {/* ==================================================
          PAGE HEADING
      =================================================== */}
      <section className="mb-10 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-600">
          Our School Houses
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          Our houses encourage teamwork, leadership and healthy competition.
          <br />
          Each house represents values that help shape the character of our students.
        </p>
      </section>

      {/* ==================================================
          HOUSES GRID
          - 1 column on mobile
          - 2 columns on tablet
          - 4 columns on desktop
      =================================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {houses.map((house, idx) => (
          <article
            key={idx}
            aria-labelledby={`house-${idx}-title`}
            className="
              bg-white rounded-lg overflow-hidden
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* House Image */}
            <img
              src={house.img}
              alt={`${house.title}`}
              loading="lazy"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            {/* House Content */}
            <div className="p-4 sm:p-6 flex flex-col h-full">
              <h2
                id={`house-${idx}-title`}
                className="text-xl sm:text-2xl font-semibold text-center mb-3"
              >
                {house.title}
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {house.desc}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
