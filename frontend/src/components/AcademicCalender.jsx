import React from "react";
import { motion } from "framer-motion";

/* =====================================
   1️⃣ OFFICIAL HOLIDAYS (RED)
===================================== */
const holidays = {
  "2025-04-14": "Ambedkar Jayanti",
  "2025-05-01": "May Day",
  "2025-10-02": "Gandhi Jayanti",
  "2025-10-20": "Diwali",
  "2025-12-25": "Christmas",
  "2026-01-26": "Republic Day",
  "2026-03-08": "Holi",
};

/* =====================================
   2️⃣ SCHOOL CELEBRATION DAYS (BLUE)
===================================== */
const celebrations = {
  "2025-08-15": "Independence Day",
  "2025-09-05": "Teachers' Day",
  "2025-11-14": "Children's Day",
};

/* =====================================
   3️⃣ LONG VACATIONS (EASY RANGE SYSTEM)
===================================== */
const longVacations = [
  {
    name: "Summer Vacation",
    start: "2025-05-17",
    end: "2025-06-15",
  },
    {
    name: "Puja Vacation",
    start: "2025-09-28",
    end: "2025-10-06",
  },
  {
    name: "Winter Vacation",
    start: "2025-12-20",
    end: "2026-01-04",
  },
];


/* =====================================
   4. SPECIAL SATURDAY HOLIDAYS (RED)
===================================== */
const saturdayHolidays = {
  "2025-06-21": true,
  // add more dates later
};



/* =====================================
   MONTH CONFIG (APR 2025 → MAR 2026)
===================================== */
const months = [
  { month: 3, year: 2025, name: "April 2025" },
  { month: 4, year: 2025, name: "May 2025" },
  { month: 5, year: 2025, name: "June 2025" },
  { month: 6, year: 2025, name: "July 2025" },
  { month: 7, year: 2025, name: "August 2025" },
  { month: 8, year: 2025, name: "September 2025" },
  { month: 9, year: 2025, name: "October 2025" },
  { month: 10, year: 2025, name: "November 2025" },
  { month: 11, year: 2025, name: "December 2025" },
  { month: 0, year: 2026, name: "January 2026" },
  { month: 1, year: 2026, name: "February 2026" },
  { month: 2, year: 2026, name: "March 2026" },
];

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AcademicCalendar() {
  return (
    <div className="flex flex-col">

      {/* ========= HEADER ========= */}
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">Academic Calendar</h1>
        <p className="text-gray-600">April 2025 – March 2026</p>
      </div>

      {/* ========= CALENDAR ========= */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {months.map((m) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow p-4"
            >
              <h2 className="text-center font-semibold mb-6">{m.name}</h2>

              <div className="grid grid-cols-7 text-xs font-medium text-center mb-1">
                {days.map((d) => <div key={d}>{d}</div>)}
              </div>

              <div className="grid grid-cols-7 text-center text-xs">
                {renderDays(m.year, m.month)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========= FOOTER ========= */}
      <div className="p-4 text-sm text-center text-gray-600">
        <span className="text-red-600 font-semibold">Red:</span> Holidays & Sundays |
        <span className="text-blue-600 font-semibold"> Blue:</span> School Celebrations |
        <span className="text-yellow-600 font-semibold"> Yellow:</span> Long Vacations
      </div>
    </div>
  );
}

/* =====================================
   HELPER FUNCTIONS
===================================== */
function renderDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay; i++) cells.push(<div key={`e${i}`} />);

  for (let d = 1; d <= totalDays; d++) {
    const date = new Date(year, month, d);
    const day = date.getDay();
    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

    const isSunday = day === 0;
    const isSaturdayHoliday = saturdayHolidays[key];
    const isHoliday = holidays[key];
    const isCelebration = celebrations[key];
    const vacation = getVacation(key);

    let color = "";
    if (vacation) color = "bg-yellow-100 text-yellow-700";
    else if (isHoliday || isSunday || isSaturdayHoliday) color = "bg-red-100 text-red-700";
    else if (isCelebration) color = "text-blue-600 font-semibold";

    cells.push(
      <div key={key} className={`m-0.5 p-1 rounded ${color}`}>
        <div className="text-[20px]">{d}</div>

        {isHoliday && <div className="text-[10px]">{isHoliday}</div>}
        {isCelebration && <div className="text-[10px]">{isCelebration}</div>}
        {vacation && <div className="text-[10px]">{vacation}</div>}
      </div>
    );
  }

  return cells;
}

function getVacation(date) {
  for (let v of longVacations) {
    if (date >= v.start && date <= v.end) return v.name;
  }
  return null;
}
