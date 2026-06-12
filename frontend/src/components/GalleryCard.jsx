// import React from "react";
// import { Link } from "react-router-dom";

// export default function GalleryCard({ event }) {
//   return (
//     <Link
//       to={`/School-Gallery/${event.id}`}
//       className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
//     >
//       <img
//         src={event.coverImage}
//         alt={event.title}
//         className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
//       />

//       <div className="p-4 bg-white">
//         <h3 className="text-lg font-semibold text-center">
//           {event.title}
//         </h3>
//       </div>
//     </Link>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard({ event }) {
  const imageCount =
    event.images?.length || 0;

  return (
    <Link
      to={`/School-Gallery/${event.id}`}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        bg-white
        border
        border-slate-200
        shadow-sm
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
      "
    >
      {/* ==========================
          IMAGE
      ========================== */}
      <div className="relative overflow-hidden h-72">
        <img
          src={event.coverImage}
          alt={event.title}
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

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        {/* Photo Count */}
        <div
          className="
            absolute
            top-4
            right-4
            bg-white/90
            backdrop-blur-md
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
            text-slate-800
          "
        >
          {imageCount} Photos
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="
              text-white
              text-2xl
              font-bold
            "
          >
            {event.title}
          </h3>
        </div>
      </div>

      {/* ==========================
          CONTENT
      ========================== */}
      <div className="p-5">
        <p
          className="
            text-slate-600
            text-sm
            leading-relaxed
          "
        >
          View highlights and memorable
          moments from this event.
        </p>

        <div
          className="
            mt-4
            flex
            items-center
            text-blue-600
            font-medium
            group-hover:gap-3
            gap-2
            transition-all
          "
        >
          Explore Gallery

          <span>
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
