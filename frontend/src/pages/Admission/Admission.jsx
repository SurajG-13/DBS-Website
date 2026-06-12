import React from "react";

export default function Admissions() {
  const admissionSteps = [
    {
      title: "Submit Enquiry",
      description:
        "Parents may contact the school office or visit the campus to obtain information regarding admissions and seat availability.",
    },
    {
      title: "Application Form",
      description:
        "Complete the prescribed admission form and submit it along with the required documents within the notified period.",
    },
    {
      title: "Interaction / Assessment",
      description:
        "Students may be invited for an age-appropriate interaction or assessment, depending on the class for which admission is sought.",
    },
    {
      title: "Admission Confirmation",
      description:
        "Selected candidates will receive admission confirmation and further instructions regarding fee payment and commencement of classes.",
    },
  ];

  const documents = [
    "Birth Certificate (for Nursery and Primary Classes)",
    "Transfer Certificate (where applicable)",
    "Previous School Report Card / Progress Report",
    "Passport-size Photographs of the Student",
    "Passport-size Photographs of Parents/Guardians",
    "Aadhaar Card Copy (if available)",
    "Address Proof",
  ];

  const classes = [
    "Nursery",
    "Lower Kindergarten (LKG)",
    "Upper Kindergarten (UKG)",
    "Classes I – X (Subject to CISCE regulations)",
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
            Admissions
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
            Admission Information
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
            Welcome to Don Bosco School, Thakurnagar. We are committed
            to providing a nurturing environment that promotes academic
            excellence, character formation and holistic development.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRO CARD
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
            Admission Policy
          </h2>

          <p className="text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
            Admissions are granted on the basis of seat availability,
            age eligibility and fulfillment of school requirements.
            The school welcomes students from all communities and
            backgrounds and seeks to provide quality education in a
            disciplined and value-based environment.
          </p>
        </div>
      </section>

      {/* ==========================================
          ELIGIBILITY + CLASSES
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Classes Offered
            </h3>

            <ul className="space-y-4">
              {classes.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Eligibility
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Admission to Nursery and Kindergarten classes is based on
              the prescribed age criteria. Admissions to higher classes
              are subject to seat availability, previous academic
              performance and successful completion of any required
              interaction or assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          ADMISSION PROCESS
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="text-center mb-12">
          <h2
            className="
              text-4xl
              font-bold
              text-slate-800
            "
          >
            Admission Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {admissionSteps.map((step, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-lg
                transition-all
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-blue-100
                  text-blue-700
                  flex
                  items-center
                  justify-center
                  font-bold
                  mb-6
                "
              >
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          DOCUMENTS REQUIRED
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Documents Required
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-3
                  p-4
                  rounded-xl
                  bg-slate-50
                "
              >
                <span className="text-green-600 font-bold">
                  ✓
                </span>

                <span className="text-slate-700">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          IMPORTANT NOTES
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Important Notes
          </h2>

          <ul className="space-y-4 text-slate-700 leading-relaxed">
            <li>
              • Submission of an application does not guarantee admission.
            </li>

            <li>
              • Admission is subject to verification of all documents.
            </li>

            <li>
              • The decision of the school authorities regarding admissions
              shall be final.
            </li>

            <li>
              • Parents are requested to ensure that all information
              provided is accurate and complete.
            </li>

            <li>
              • School rules and regulations must be adhered to at all times.
            </li>
          </ul>
        </div>
      </section>

      {/* ==========================================
          FOOTER MESSAGE
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
          <h3
            className="
              text-3xl
              md:text-4xl
              font-bold
              font-playfairDisplay
            "
          >
            Begin Your Educational Journey With Us
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-white/80">
            We look forward to welcoming young learners into a vibrant
            community dedicated to academic excellence, character
            formation and lifelong learning.
          </p>
        </div>
      </section>
    </main>
  );
}