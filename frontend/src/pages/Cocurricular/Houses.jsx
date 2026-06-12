import React from "react";
import { Assets } from "../../constants/ImageDB";

export default function Houses() {
  const placeholder = Assets.placeholderImage;

  const houses = [
    {
      title: "Red House",
      text: "text-red-600",
      img: placeholder,
      desc: "Red House symbolizes courage, determination and leadership. Students are encouraged to face challenges with confidence while demonstrating resilience and team spirit.",
    },
    {
      title: "Blue House",
      text: "text-blue-600",
      img: placeholder,
      desc: "Blue House represents wisdom, integrity and responsibility. Members strive for excellence through discipline, honesty and a commitment to lifelong learning.",
    },
    {
      title: "Green House",
      text: "text-emerald-600",
      img: placeholder,
      desc: "Green House reflects growth, harmony and perseverance. Students learn the value of teamwork, sustainability and continuous self-improvement.",
    },
    {
      title: "Yellow House",
      text: "text-yellow-600",
      img: placeholder,
      desc: "Yellow House embodies optimism, creativity and enthusiasm. Members are encouraged to think innovatively and contribute positively to the school community.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 pt-32 text-center text-white lg:px-12">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide backdrop-blur-md">
            Student Leadership & Team Spirit
          </span>

          <h1 className="font-playfairDisplay mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Our School Houses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
            The House System promotes healthy competition, leadership, teamwork
            and school spirit while helping students develop confidence,
            responsibility and a strong sense of belonging.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRODUCTION CARD
      ========================================== */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6 lg:px-12">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-800">
              Building Character Through Competition
            </h2>

            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Every student is assigned to a house which serves as a platform
              for participation in academic, cultural, literary and sporting
              activities. Through inter-house competitions, students learn
              teamwork, sportsmanship, discipline and leadership while creating
              lasting friendships.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          HOUSES GRID
      ========================================== */}
      <section className="mx-auto px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {houses.map((house, index) => (
            <article
              key={index}
              className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* ==========================
                  IMAGE
              ========================== */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={house.img}
                  alt={house.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute top-4 right-4 h-4 w-4 rounded-full shadow-lg`}
                />
              </div>

              {/* ==========================
                  CONTENT
              ========================== */}
              <div className="p-7">
                <h3
                  className={`mb-4 flex justify-center text-2xl font-bold ${house.text} `}
                >
                  {house.title}
                </h3>

                <p className="text-justify leading-relaxed text-slate-600">
                  {house.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          BOTTOM SECTION
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-10 text-center text-white">
          <h3 className="font-playfairDisplay text-3xl font-bold md:text-4xl">
            Unity, Leadership & Excellence
          </h3>

          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-white/80">
            Through the House System, students discover their strengths, embrace
            teamwork and cultivate the values necessary to become responsible
            citizens and future leaders.
          </p>
        </div>
      </section>
    </main>
  );
}
