import React from "react";
import { Aims } from "../../constants/ImageDB.js";

const features = [
  {
    title: "Value based Education",
    desc:
      "To instill values in children from a young age onwards Don Bosco School of Excellence will be laying a lot of emphasis on Value based education among students.",
    icon: Aims.first,
  },
  {
    title: "Preventive System",
    desc:
      "Don Bosco chose Preventive System of education — protecting students from physical or moral harm through education and preventing bad influences.",
    icon: Aims.second,
  },
  {
    title: "Christian Minority Body",
    desc:
      "Although the school is meant for the Christian students, the provision is made for the admission of non-Christian students. Lessons on moral principles will be given to all.",
    icon: Aims.third,
  },
  {
    title: "Moral Science and Value Education",
    desc:
      "To instill values in children from a young age onwards Don Bosco School of Excellence will be laying a lot of emphasis on Value based education among students.",
    icon: Aims.fourth,
  },
  {
    title: "Discipline",
    desc:
      "No act of indiscipline, insubordination, interference in the administration shall be tolerated. Those found guilty may be expelled from the school.",
    icon: Aims.fifth,
  },
  {
    title: "Programs",
    desc:
      "To instill values in children from a young age onwards Don Bosco School of Excellence will be laying a lot of emphasis on Value based education among students.",
    icon: Aims.sixth,
  },
];

export default function FeaturesGrid() {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className={`relative rounded-lg overflow-hidden p-8 border border-gray-200 text-white ${
              i % 2 === 0 ? "bg-sky-500" : "bg-sky-900"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img
                src={f.icon}
                alt={f.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-center font-bold text-xl mb-3">
              {f.title}
            </h3>

            {/* Divider */}
            <div className="mx-auto w-14 h-0.5 bg-white/60 mb-4"></div>

            {/* Description */}
            <p className="text-center text-white text-sm md:text-base leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
