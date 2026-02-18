import React from "react";
import { galleryEvents } from "../../constants/EventImageDB.js";
import GalleryCard from "../../components/GalleryCard.jsx"

export default function Gallery() {
  return (
    <main className="px-4 md:px-10 lg:px-16 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        School Gallery
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryEvents.map((event) => (
          <GalleryCard key={event.id} event={event} />
        ))}
      </section>
    </main>
  );
}
