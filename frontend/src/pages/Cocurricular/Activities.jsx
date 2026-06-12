import React from "react";
import { Assets } from "../../constants/ImageDB";

export default function Activities() {
  const placeholder = Assets.placeholderImage;

  const activities = [
    {
      title: "Music",
      img: placeholder,
      desc:
        "Music education nurtures creativity, confidence, discipline and emotional expression. Students develop vocal and instrumental skills while discovering the joy of performing arts.",
    },
    {
      title: "Dance",
      img: placeholder,
      desc:
        "Dance encourages self-expression, teamwork and cultural appreciation. Through various forms of dance, students build confidence, coordination and artistic talent.",
    },
    {
      title: "Karate",
      img: placeholder,
      desc:
        "Karate develops physical fitness, self-discipline, focus and self-defense skills. Students learn perseverance, respect and confidence through structured training.",
    },
    {
      title: "Guitar",
      img: placeholder,
      desc:
        "Guitar lessons help students enhance concentration, patience and creativity while developing a lifelong appreciation for music and performance.",
    },
    {
      title: "Drawing & Art",
      img: placeholder,
      desc:
        "Art activities foster imagination, observation and creative thinking. Students explore different techniques while expressing their ideas visually.",
    },
    {
      title: "Yoga",
      img: placeholder,
      desc:
        "Yoga promotes physical well-being, mental focus and emotional balance. Regular practice helps students develop healthy habits and inner confidence.",
    },
  ];

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
            Student Development
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
            Extra-Curricular Activities
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-white/80
              text-base
              md:text-lg
              leading-relaxed
            "
          >
            Education extends beyond the classroom. Our co-curricular
            programmes help students discover their talents, build
            confidence, develop leadership skills and achieve holistic
            growth.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRODUCTION CARD
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Learning Beyond Academics
            </h2>

            <p className="text-slate-600 leading-relaxed text-base md:text-lg">
              Co-curricular activities play a vital role in the overall
              development of students. They encourage creativity,
              teamwork, discipline and self-confidence while helping
              learners discover their unique talents and interests.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          ACTIVITIES GRID
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {activities.map((activity, index) => (
            <article
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border
                border-slate-200
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >
              {/* ==========================
                  IMAGE
              ========================== */}
              <div className="overflow-hidden h-64">
                <img
                  src={activity.img}
                  alt={activity.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* ==========================
                  CONTENT
              ========================== */}
              <div className="p-7">
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-slate-800
                    mb-4
                  "
                >
                  {activity.title}
                </h3>

                <p
                  className="
                    text-slate-600
                    leading-relaxed
                    text-justify
                  "
                >
                  {activity.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          BOTTOM CTA
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div
          className="
            rounded-3xl
            bg-gradient-to-r
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
            Nurturing Talent, Building Character
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
            Through a wide range of co-curricular opportunities, we
            encourage every student to explore their passions, develop
            leadership qualities and become confident, well-rounded
            individuals.
          </p>
        </div>
      </section>
    </main>
  );
}