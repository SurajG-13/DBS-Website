import React from "react";
import { useParams } from "react-router-dom";
import { galleryEvents } from "../../constants/EventImageDB.js";
import { useState, useEffect } from "react";


export default function EventPage() {
  const { eventId } = useParams();
  const event = galleryEvents.find((e) => e.id === eventId);

  const [activeImage, setActiveImage] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!event) {
    return (
      <div className="p-10 text-center text-red-600">
        Event not found
      </div>
    );
  }

  return (
    <main className="px-4 md:px-10 lg:px-16 py-10">
      {/* Event Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <p className="text-sm text-gray-500">{event.date}</p>
      </div>

      {/* Images Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {event.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${event.title} ${index + 1}`}
            className="w-full h-56 object-cover rounded-lg shadow cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setActiveImage(img)}
          />
        ))}
      </section>

      {/* LIGHTBOX MODAL */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-9999 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-red-400"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>

          {/* Image */}
          <img
            src={activeImage}
            alt="Full View"
            className="max-w-[95%] max-h-[95%] object-contain"
            onClick={(e) => e.stopPropagation()} // prevent close on image click
          />
        </div>
      )}
    </main>
  );
}
