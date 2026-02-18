import React from "react";
import { Link } from "react-router-dom";

export default function GalleryCard({ event }) {
  return (
    <Link
      to={`/School-Gallery/${event.id}`}
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
    >
      <img
        src={event.coverImage}
        alt={event.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
      />

      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-center">
          {event.title}
        </h3>
      </div>
    </Link>
  );
}
