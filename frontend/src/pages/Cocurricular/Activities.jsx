import React from "react";
import { Assets } from "../../constants/ImageDB";

/**
 * ======================================================
 * CO-CURRICULAR ACTIVITIES PAGE
 * ------------------------------------------------------
 * - Responsive grid layout
 * - Clean card-based design
 * - Optimised for mobile → large screens
 * ======================================================
 */

export default function Activities() {

  const Red = Assets.placeholderImage;
  /**
   * Activities data
   * Each item represents one co-curricular activity
   */
  const activities = [
    {
      title: "Music",
      img: Red,
      desc:
        "Red House stands for passion, courage, and relentless determination. Inspired by Saint Joseph, it nurtures leadership and resilience.",
    },
    {
      title: "Dance",
      img: Red,
      desc:
        "Blue House represents wisdom, integrity, and calm confidence. Guided by Saint Teresa of Kolkata, members lead with clarity and kindness.",
    },
    {
      title: "Karate",
      img: Red,
      desc:
        "Green House embodies growth, harmony, and perseverance. Inspired by Dr. APJ Abdul Kalam, ambition and teamwork thrive here.",
    },
    {
      title: "Guitar",
      img: Red,
      desc:
        "Yellow House symbolizes optimism, energy, and creativity. Inspired by Rabindranath Tagore, members shine in academics, culture, and service.",
    },
    {
      title: "Drawing",
      img: Red,
      desc:
        "Yellow House symbolizes optimism, energy, and creativity. Inspired by Rabindranath Tagore, members shine in academics, culture, and service.",
    },
    {
      title: "Yoga",
      img: Red,
      desc:
        "Yellow House symbolizes optimism, energy, and creativity. Inspired by Rabindranath Tagore, members shine in academics, culture, and service.",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      
      {/* ==================================================
          PAGE HEADING
      =================================================== */}
      <section className="mb-10 text-center">
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-green-600">
          Co-Curricular Activities
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
          The school is committed to the all-round development of the personality
          of the students. Extra-curricular activities are regarded as an
          important part of the total learning experience.
        </p>
      </section>

      {/* ==================================================
          ACTIVITIES GRID
          - 1 column on mobile
          - 2 columns on tablets
          - 3 columns on desktops
      =================================================== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((activity, idx) => (
          <article
            key={idx}
            aria-labelledby={`activity-${idx}-title`}
            className="
              bg-white rounded-lg overflow-hidden
              shadow-sm hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* Activity Image */}
            <img
              src={activity.img}
              alt={`${activity.title} activity`}
              loading="lazy"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            {/* Activity Content */}
            <div className="p-4 sm:p-6 flex flex-col h-full">
              <h2
                id={`activity-${idx}-title`}
                className="text-xl sm:text-2xl font-semibold text-center mb-3"
              >
                {activity.title}
              </h2>

              <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                {activity.desc}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
