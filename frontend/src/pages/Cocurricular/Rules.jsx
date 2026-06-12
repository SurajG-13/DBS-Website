import React from "react";

const rules = [
  {
    title: "Attendance & Punctuality",
    points: [
      "Students are expected to attend school regularly and punctually.",
      "Absence from school must be supported by a written application from parents/guardians.",
      "Medical certificates may be required for prolonged absence.",
      "Students arriving late must report to the school office before entering class.",
      "Repeated absenteeism may affect promotion to the next class.",
    ],
  },

  {
    title: "Uniform & Appearance",
    points: [
      "Students must wear the prescribed school uniform neatly and correctly.",
      "Shoes must be clean and polished.",
      "Hair should be neat, tidy and appropriately maintained.",
      "Fashion accessories, excessive jewellery, nail polish and cosmetics are not permitted.",
      "Students must maintain a clean and presentable appearance at all times.",
    ],
  },

  {
    title: "Conduct & Discipline",
    points: [
      "Students shall show respect to teachers, staff and fellow students.",
      "Bullying, harassment, fighting or abusive language will not be tolerated.",
      "Discipline must be maintained in classrooms, corridors and all school premises.",
      "Any act that disrupts the learning environment may result in disciplinary action.",
      "Students are expected to uphold the values and reputation of the school.",
    ],
  },

  {
    title: "Academic Responsibilities",
    points: [
      "Homework, assignments and projects must be completed on time.",
      "Students should bring all required books and materials according to the timetable.",
      "Active participation in classroom activities is encouraged.",
      "Academic honesty must be maintained at all times.",
      "Plagiarism and copying of work are strictly prohibited.",
    ],
  },

  {
    title: "Examination Rules",
    points: [
      "Students must strictly follow all examination instructions.",
      "Use of unfair means during examinations will invite disciplinary action.",
      "Absence during examinations must be supported by valid reasons.",
      "Promotion and assessment policies shall be governed by school regulations.",
      "Examination decisions of the school authorities shall be final.",
    ],
  },

  {
    title: "School Property",
    points: [
      "Students must take care of school furniture, books and equipment.",
      "Damage caused intentionally must be compensated by the responsible student.",
      "Classrooms and school premises must be kept clean.",
      "Laboratory and library facilities should be used responsibly.",
      "School property is to be treated with respect and care.",
    ],
  },

  {
    title: "Digital Devices",
    points: [
      "Mobile phones are not permitted unless specifically authorized.",
      "Smart watches and electronic gadgets should not be brought to school.",
      "The school is not responsible for loss of personal belongings.",
      "Unauthorized photography or recording is prohibited.",
      "Technology should be used responsibly and ethically.",
    ],
  },

  {
    title: "Parent Cooperation",
    points: [
      "Parents are requested to monitor their child's academic progress.",
      "Parents should attend Parent-Teacher Meetings regularly.",
      "Communication from the school should be acknowledged promptly.",
      "Changes in address or contact details must be informed to the school office.",
      "Parents are expected to support the school's disciplinary policies.",
    ],
  },

  {
    title: "Safety & Security",
    points: [
      "Students must follow all safety instructions issued by the school.",
      "Visitors must report to the office before entering the campus.",
      "Students may not leave the campus during school hours without permission.",
      "Emergency procedures must be followed whenever instructed.",
      "Students should immediately report unsafe situations to school authorities.",
    ],
  },

  {
    title: "General Regulations",
    points: [
      "Students must uphold the ideals and values of Don Bosco School.",
      "The Principal reserves the right to take disciplinary action when necessary.",
      "Rules may be modified or updated by the school authorities.",
      "Ignorance of school regulations shall not be accepted as an excuse.",
      "All students are expected to contribute positively to the school community.",
    ],
  },
];

export default function RulesAndRegulations() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center text-white  pt-32">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            Student Handbook
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-playfairDisplay">
            School Rules &
            <br />
            Regulations
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-base md:text-lg">
            These regulations are designed to foster discipline,
            responsibility, respect and excellence while ensuring a
            safe and productive learning environment for all students.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRODUCTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
            Guiding Principles
          </h2>

          <p className="text-slate-600 text-center max-w-4xl mx-auto leading-relaxed">
            Discipline is an essential part of education. These rules are
            intended not merely to maintain order, but to help students
            develop responsibility, integrity, self-discipline and respect
            for others. Every member of the school community is expected
            to uphold these principles.
          </p>
        </div>
      </section>

      {/* ==========================================
          RULES GRID
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {rules.map((rule, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-5">
                {rule.title}
              </h3>

              <ul className="space-y-3">
                {rule.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="
                      flex
                      items-start
                      gap-3
                      text-slate-600
                      leading-relaxed
                    "
                  >
                    <span className="text-blue-600 mt-1">
                      •
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* ==========================================
          CLOSING MESSAGE
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
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
          <h3 className="text-3xl md:text-4xl font-bold font-playfairDisplay">
            Together We Build Character
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-white/80">
            The success of a school community depends upon mutual
            respect, cooperation and responsibility. By following
            these regulations, students contribute to a positive,
            safe and inspiring educational environment.
          </p>
        </div>
      </section>

    </main>
  );
}