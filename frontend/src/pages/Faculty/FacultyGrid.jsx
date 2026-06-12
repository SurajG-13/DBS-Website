import React from "react";

/**
 * =====================================================
 * REUSABLE FACULTY GRID
 * -----------------------------------------------------
 * Displays staff members in a modern card layout.
 * =====================================================
 */

export default function FacultyGrid({
  title,
  subtitle,
  members,
  badgeText,
}) {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
          {badgeText}
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.name}
            className="
              bg-white
              rounded-3xl
              border border-slate-200
              p-6
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            {/* Avatar */}
            {/* Avatar */}
            <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
              {member.dp ? (
                <img src={member.dp} alt={member.name || 'Avatar'} className="h-full w-full rounded-full" />
              ) : (
                member.name?.charAt(0) || 'U'
              )}
            </div>

            {/* Member Details */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-slate-800">
                {member.name}
              </h3>

              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                {member.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}