import React, { Suspense, useState } from "react";
import { Blurhash } from "react-blurhash";
import { Facilities } from "../../constants/ImageDB";

/**
 * ======================================================
 * BLURHASH IMAGE COMPONENT
 * ======================================================
 */
function BlurHashImage({ src, hash, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-72 overflow-hidden">
      {!isLoaded && (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`
          absolute inset-0
          w-full h-full object-cover
          transition-all duration-700
          group-hover:scale-105
          ${isLoaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}

/**
 * ======================================================
 * FACILITIES DATA
 * ======================================================
 */
const facilities = [
  {
    title: "Chemistry Lab",
    description:
      "Modern laboratory equipped for practical chemistry experiments and scientific exploration.",
    img: Facilities.chemistryLab,
    hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_",
  },
  {
    title: "Physics Lab",
    description:
      "Hands-on learning environment designed to develop scientific thinking and experimentation.",
    img: Facilities.physicsLab,
    hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_",
  },
  {
    title: "Biology Lab",
    description:
      "Well-equipped facility encouraging observation, research and biological studies.",
    img: Facilities.biologyLab,
    hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_",
  },
  {
    title: "Computer Lab",
    description:
      "Technology-enabled learning space supporting digital literacy and innovation.",
    img: Facilities.computerLab,
    hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_",
  },
  {
    title: "Library",
    description:
      "A rich collection of books and resources that cultivate reading habits and knowledge.",
    img: Facilities.library,
    hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_",
  },
  {
    title: "Smart Class",
    description:
      "Interactive digital classrooms enhancing engagement and modern learning experiences.",
    img: Facilities.smartRoom,
    hash: "L7HB@|%1000002RP~qIA?HIU?a%L",
  },
  {
    title: "CCTV Surveillance",
    description:
      "Comprehensive monitoring system ensuring safety, security and peace of mind.",
    img: Facilities.cctv,
    hash: "L7HB@|%1000002RP~qIA?HIU?a%L",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-slate-50 min-h-screen font-spaceGrotesk">
      {/* ==================================================
          HERO SECTION
      =================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center text-white pt-32">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            School Infrastructure
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-playfairDisplay">
            Learning Beyond
            <br />
            The Classroom
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
            Our modern facilities provide students with the ideal
            environment to learn, explore, innovate and grow into
            confident future leaders.
          </p>
        </div>
      </section>
            {/* ==================================================
          INTRODUCTION CARD
      =================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              World-Class Educational Facilities
            </h2>

            <p className="text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              Being one of the leading English medium schools in the
              region, our institution is equipped with spacious
              classrooms, advanced science laboratories, computer
              facilities, a resource-rich library and modern educational
              infrastructure.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-justify text-base md:text-lg">
              Every facility has been designed to support academic
              excellence, practical learning and holistic development,
              ensuring that students receive a well-rounded educational
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          STATS SECTION
      =================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["1", "Computer Lab"],
            ["3", "Science Labs"],
            ["1", "Library"],
            ["100%", "Campus Security"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200"
            >
              <h3 className="text-3xl font-bold text-blue-700">
                {value}
              </h3>

              <p className="text-slate-600 mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================
          FACILITY CARDS
      =================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-slate-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              <div className="relative">
                <Suspense
                  fallback={
                    <div className="h-72">
                      <Blurhash
                        hash={item.hash}
                        width="100%"
                        height="100%"
                        resolutionX={32}
                        resolutionY={32}
                        punch={1}
                      />
                    </div>
                  }
                >
                  <BlurHashImage
                    src={item.img}
                    hash={item.hash}
                    alt={item.title}
                  />
                </Suspense>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <span className="text-2xl">{item.icon}</span>

                  <h3 className="mt-2 text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}