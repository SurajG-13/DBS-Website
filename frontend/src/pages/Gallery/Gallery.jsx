// import React from "react";
// import { galleryEvents } from "../../constants/EventImageDB.js";
// import GalleryCard from "../../components/GalleryCard.jsx"

// export default function Gallery() {
//   return (
//     <main className="px-4 md:px-10 lg:px-16 py-10">
//       <h1 className="text-3xl font-bold text-center mb-10">
//         School Gallery
//       </h1>

//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {galleryEvents.map((event) => (
//           <GalleryCard key={event.id} event={event} />
//         ))}
//       </section>
//     </main>
//   );
// }


import React from "react";
import { galleryEvents } from "../../constants/EventImageDB.js";
import GalleryCard from "../../components/GalleryCard.jsx";

export default function Gallery() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 text-center text-white  pt-32">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            Memories & Moments
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
            School Gallery
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
            Explore memorable events, celebrations, achievements
            and special moments that shape the vibrant life of
            our school community.
          </p>
        </div>
      </section>

      {/* ==========================================
          INTRO CARD
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-14 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Capturing Every Milestone
          </h2>

          <p className="max-w-4xl mx-auto text-slate-600 leading-relaxed">
            From academic achievements and cultural programmes to
            sports competitions and celebrations, our gallery reflects
            the spirit, energy and excellence of student life.
          </p>
        </div>
      </section>

      {/* ==========================================
          GALLERY GRID
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {galleryEvents.map((event) => (
            <GalleryCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </section>

      {/* ==========================================
          FOOTER CTA
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
            Every Picture Tells A Story
          </h3>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-white/80
            "
          >
            Celebrating learning, friendship, achievement
            and unforgettable memories throughout the
            academic journey.
          </p>
        </div>
      </section>

    </main>
  );
}