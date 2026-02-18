import React, { useEffect, useState } from "react";

/* ======================================================
   RULES / HANDBOOK DATA
====================================================== */

const sections = [
  {
    id: "overview",
    number: "1",
    title: "Educational Ideals",
    paragraphs: [
      "Don Bosco School, Thakurnagar aims at the total development of the individual through liberal and scientific knowledge, character formation, and physical training. The education imparted by the institution seeks to inspire students with the following ideals:",
    ],
    list: [
      "A deep sense of religious and moral principles that enable the student to be open to fellow human beings and to God.",
      "A strong sense of responsibility, discipline, and commitment towards society.",
    ],
  },
  {
    id: "attendance",
    number: "2",
    title: "Campus Regulations",
    paragraphs: [
      "Regular attendance is compulsory for all students on every working day of the academic year.",
      "Absence for more than three consecutive days must be supported by a written application from parents or guardians.",
      "The school day begins at 8:00 A.M. Students are expected to be seated in their classrooms before the first bell.",
    ],
  },
  {
    id: "behavior",
    number: "3",
    title: "Behaviour and Discipline",
    paragraphs: [
      "Students are expected to maintain exemplary conduct both within and outside the school premises.",
      "Respect towards teachers, staff members, and fellow students is mandatory.",
    ],
    list: [
      "Bullying, teasing, or harassment of any form will invite strict disciplinary action.",
      "Damage to school property must be compensated by the student concerned.",
    ],
  },
  {
    id: "safety",
    number: "4",
    title: "Safety and Campus Rules",
    paragraphs: [
      "Students are not permitted to leave the school campus during school hours without written permission from parents and approval of the school authorities.",
      "The use of mobile phones and electronic gadgets during school hours is prohibited.",
    ],
  },
  {
    id: "exams",
    number: "5",
    title: "Examinations and Promotion",
    paragraphs: [
      "Students must appear for all examinations and assessments scheduled by the school.",
      "Any use of unfair means during examinations will result in severe disciplinary action.",
      "Absence from an examination without valid reason will result in a zero score for that assessment.",
    ],
  },
  {
    id: "uniform",
    number: "6",
    title: "Uniform and Grooming",
    paragraphs: [
      "Students must attend school in the prescribed uniform on all working days and during official school functions unless otherwise specified.",
      "Personal grooming must reflect discipline and modesty.",
    ],
    list: [
      "Boys must maintain short and neat haircuts.",
      "Girls with long hair must keep it properly tied.",
      "Coloured hair, extreme hairstyles, or accessories are strictly prohibited.",
    ],
  },
];

/* ======================================================
   RULES PAGE COMPONENT
====================================================== */

export default function RulesPage() {
  const [activeId, setActiveId] = useState("overview");

  /* ==================================================
     SCROLL SPY
     - Highlights active section in sidebar
     - Stable (no layout shift)
  =================================================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    document.querySelectorAll("section[data-rule]").forEach((sec) => {
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  /* Smooth scroll to section */
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen flex">

      {/* ==================================================
          FIXED SIDEBAR (Desktop only)
      =================================================== */}
      <aside className="hidden lg:block w-72">
        <div className="fixed top-0 left-0 h-screen w-72 px-6 pt-28">
          <h2 className="text-base font-semibold mb-1">
            School Handbook
          </h2>
          <p className="text-sm text-gray-600 mb-10">
            Don Bosco School, Thakurnagar
          </p>

          <nav>
            <ul className="space-y-3 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection(s.id)}
                    className={`w-full text-left px-3 py-2 border-l-2 transition ${
                      activeId === s.id
                        ? "border-gray-800 font-semibold"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* ==================================================
          MAIN CONTENT
          - Responsive margins
          - Sidebar offset only on large screens
      =================================================== */}
      <main className="flex-1 px-4 sm:px-6 lg:ml-72 lg:px-12 py-10">

        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <header className="mb-14 border-b border-gray-300 pb-6">
            <h1 className="text-2xl font-semibold">
              Don Bosco School Thakurnagar
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              School Rules and Regulations
            </p>
          </header>

          {/* Rules Sections */}
          <div className="space-y-16 text-[15px] leading-7 text-gray-800">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                data-rule
                className="scroll-mt-28"
              >
                <h2 className="text-lg font-semibold mb-4">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {section.list && (
                    <ol className="list-decimal pl-6 space-y-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="pl-2">
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
