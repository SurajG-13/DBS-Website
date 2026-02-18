import React, { Suspense, useState } from "react";
import { Blurhash } from "react-blurhash";
import { Facilities } from "../../constants/ImageDB";

/**
 * ======================================================
 * BLURHASH IMAGE COMPONENT
 * ------------------------------------------------------
 * - Shows Blurhash placeholder until image loads
 * - Fades in image smoothly
 * - Used for better perceived performance
 * ======================================================
 */
function BlurHashImage({ src, hash, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg">
      
      {/* Blurhash placeholder */}
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

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
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
  { title: "Chemistry Lab", img: Facilities.chemistryLab, hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_" },
  { title: "Physics Lab", img: Facilities.physicsLab, hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_" },
  { title: "Biology Lab", img: Facilities.biologyLab, hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_" },
  { title: "Computer Lab", img: Facilities.computerLab, hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_" },
  { title: "Library", img: Facilities.library, hash: "LLI5Y$00xZR:WAIA%Mxa~q%MWDM_" },
  { title: "Smart Class", img: Facilities.smartRoom, hash: "L7HB@|%1000002RP~qIA?HIU?a%L" },
  { title: "CCTV Surveillance", img: Facilities.cctv, hash: "L7HB@|%1000002RP~qIA?HIU?a%L" },
];

/**
 * ======================================================
 * FACILITIES PAGE
 * ======================================================
 */
export default function FacilitiesPage() {
  return (
    <>
      {/* ==================================================
          MAIN CONTAINER
          - Responsive padding
          - Centered content with max width
      =================================================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-12">

        {/* ==================================================
            INTRODUCTION TEXT
        =================================================== */}
        <section className="max-w-5xl mx-auto text-justify leading-relaxed text-sm sm:text-base md:text-lg">
          <p>
            Being the only English medium school in the vicinity, Don Bosco School,
            Thakurnagar, has a well laid out campus, large airy classrooms, computer
            laboratories, a compact library and three well-equipped spacious science
            laboratories, with efficient teachers to guide and nurture students.
          </p>

          <p className="mt-4">
            Apart from modern infrastructure amenities, the school has collaborated
            with various organisations across the city to develop competitive spirit
            among students. The spacious examination hall provides an ideal
            examination ambience. The school continues to grow with new wings and
            classrooms, ensuring holistic development of every child.
          </p>
        </section>

        {/* ==================================================
            FACILITIES GRID
            - 1 column on mobile
            - 2 columns on tablets
            - 3 columns on desktops
        =================================================== */}
        <section className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="
                bg-neutral-primary-soft rounded-lg p-3
                hover:shadow-lg transition-shadow duration-300
              "
            >
              {/* IMAGE WITH SUSPENSE + BLURHASH */}
              <Suspense
                fallback={
                  <div className="w-full h-64 overflow-hidden rounded-lg">
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

              {/* TITLE */}
              <h5 className="mt-4 text-center text-lg sm:text-xl font-semibold tracking-tight">
                {item.title}
              </h5>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
