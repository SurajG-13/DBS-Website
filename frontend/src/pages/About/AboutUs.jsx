import React from "react";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center text-white lg:px-12  pt-32">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide backdrop-blur-md">
            About Our School
          </span>

          <h1 className="font-playfairDisplay mt-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Don Bosco School
            <br />
            Thakurnagar
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-white/80 md:text-lg">
            Inspiring young minds through quality education, strong values and
            holistic development.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRODUCTION
      ========================================== */}
      <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-6 lg:px-12">
        <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-12">
          <h2 className="mb-6 text-center text-3xl font-bold text-slate-800">
            Welcome to Our School
          </h2>

          <p className="text-justify leading-relaxed text-slate-600">
            Don Bosco School, Thakurnagar is an English-medium, co-educational
            institution that follows the rules and norms of the Council for the
            Indian School Certificate Examinations (CISCE). The school is
            committed to providing quality education in an environment that
            promotes academic excellence, moral values, discipline, and
            character formation.
          </p>

          <p className="mt-4 text-justify leading-relaxed text-slate-600">
            We strive to create a nurturing atmosphere where every student is
            encouraged to discover their potential, develop confidence and
            become responsible members of society. Through a balanced approach
            to academics, co-curricular activities and value-based education, we
            aim to prepare students for the challenges of the future.
          </p>
        </div>
      </section>

      {/* ==========================================
          MISSION & VISION
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-3xl font-bold text-slate-800">
              Our Vision
            </h3>

            <p className="leading-relaxed text-slate-600">
              To nurture young learners into confident, compassionate and
              responsible individuals who contribute positively to society while
              striving for excellence in every sphere of life.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-3xl font-bold text-slate-800">
              Our Mission
            </h3>

            <p className="leading-relaxed text-slate-600">
              To provide a holistic education that promotes intellectual growth,
              moral integrity, social responsibility and spiritual values while
              fostering creativity, leadership and lifelong learning.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          DON BOSCO TRADITION
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="mb-8 text-3xl font-bold text-slate-800">
            The Don Bosco Tradition
          </h2>

          <p className="text-justify leading-relaxed text-slate-600">
            The educational philosophy of Don Bosco is inspired by Saint John
            Bosco, one of the most respected educators in history. His
            preventive system of education emphasizes reason, religion and
            loving kindness, creating an environment where students grow through
            encouragement, understanding and positive guidance.
          </p>

          <p className="mt-4 text-justify leading-relaxed text-slate-600">
            Don Bosco educational institutions around the world are known for
            their commitment to academic excellence, discipline, character
            formation and the holistic development of every child. The Don Bosco
            educational mission continues to inspire generations of students to
            become responsible citizens and compassionate leaders.
          </p>
        </div>
      </section>

      {/* ==========================================
          CORE VALUES
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">
          Our Core Values
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-3 text-xl font-bold">Excellence</h3>

            <p className="text-slate-600">
              Striving for the highest standards in academics, conduct and
              personal growth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-3 text-xl font-bold">Discipline</h3>

            <p className="text-slate-600">
              Developing self-control, responsibility and respect for others.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-3 text-xl font-bold">Integrity</h3>

            <p className="text-slate-600">
              Encouraging honesty, fairness and ethical behaviour in all aspects
              of life.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h3 className="mb-3 text-xl font-bold">Service</h3>

            <p className="text-slate-600">
              Inspiring students to contribute positively to their communities
              and society.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          CLOSING SECTION
      ========================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-12">
        <div className="rounded-3xl bg-linear-to-r from-blue-900 via-blue-800 to-indigo-900 p-10 text-center text-white">
          <h3 className="font-playfairDisplay text-3xl font-bold md:text-4xl">
            Educating for Life
          </h3>

          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            At Don Bosco School, Thakurnagar, education goes beyond textbooks.
            We strive to shape knowledgeable, confident, compassionate and
            responsible individuals prepared to make a positive difference in
            the world.
          </p>
        </div>
      </section>
    </main>
  );
}
