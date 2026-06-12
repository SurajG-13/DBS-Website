import React from "react";
import { motion } from "framer-motion";

/* =====================================================
   OFFICIAL HOLIDAYS
===================================================== */
const holidays = {
  "2026-04-14": "Ambedkar Jayanti",
  "2026-04-15": "Bengali New Year",
  "2026-05-01": "May Day",
  "2026-06-26": "Muharram",
  "2026-08-26": "Milad Nabi",
  "2026-09-04": "Janmashtami",
  "2026-10-02": "Gandhi Jayanti",
  "2026-10-10": "Mahalaya",
  "2026-10-20": "Diwali",
  "2026-11-24": "Guru Nanak's Birthday",
  "2027-01-12": "Swami Vivekananda Jayanti",
  "2027-01-23": "Subhas Chandra Bose Jayanti",
  "2027-02-11": "Saraswati Puja",
  "2027-03-09": "Eid",
  "2027-03-22": "Holi",
};

/* =====================================================
   SCHOOL EVENTS / CELEBRATIONS
===================================================== */
const celebrations = {
  "2026-05-09": "Rabindra Jayanti",
  "2026-08-15": "Independence Day",
  "2026-09-05": "Teachers' Day",
  "2026-11-14": "Children's Day",
  "2027-01-26": "Republic Day",
};

/* =====================================================
   LONG VACATIONS
===================================================== */
const longVacations = [
  {
    name: "Summer Vacation",
    start: "2026-05-16",
    end: "2026-06-14",
  },
  {
    name: "Puja Vacation",
    start: "2026-10-18",
    end: "2026-10-25",
  },
  {
    name: "Diwali",
    start: "2026-11-08",
    end: "2026-11-10",
  },
  {
    name: "Winter Vacation",
    start: "2026-12-19",
    end: "2027-01-04",
  },
];

/* =====================================================
   SPECIAL SATURDAY HOLIDAYS
===================================================== */
const saturdayHolidays = {
  "2026-04-04": true,
  "2026-04-18": true,
  "2026-05-02": true,
  "2026-06-27": true,
  "2026-07-04": true, 
  "2026-07-18": true,
  "2026-08-01": true,  
  "2026-08-08": true, 
  "2026-08-22": true, 
  "2026-09-12": true, 
  "2026-09-26": true, 
  "2026-10-03": true,
  "2026-10-17": true, 
  "2026-11-07": true,  
  "2026-11-28": true,
  "2026-12-05": true,
  "2027-01-09": true,  
  "2027-02-06": true, 
  "2027-02-13": true, 
  "2027-02-20": true, 
  "2027-03-20": true, 
  "2027-03-27": true, 

};

/* =====================================================
   MONTHS
===================================================== */

 const months = [
  { month: 3, year: 2026, name: "April 2026" },
  { month: 4, year: 2026, name: "May 2026" },
  { month: 5, year: 2026, name: "June 2026" },
  { month: 6, year: 2026, name: "July 2026" },
  { month: 7, year: 2026, name: "August 2026" },
  { month: 8, year: 2026, name: "September 2026" },
  { month: 9, year: 2026, name: "October 2026" },
  { month: 10, year: 2026, name: "November 2026" },
  { month: 11, year: 2026, name: "December 2026" },
  { month: 0, year: 2027, name: "January 2027" },
  { month: 1, year: 2027, name: "February 2027" },
  { month: 2, year: 2027, name: "March 2027" },
];


const days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

/* =====================================================
   COMPONENT
===================================================== */
export default function AcademicCalendar() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* ==========================================
          HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-700 to-indigo-900" />

        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 pt-32 text-center text-white">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide">
            Academic Session
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
            Academic Calendar
          </h1>

          <p className="mt-5 text-white/80 text-lg">
            April 2026 – March 2027
          </p>
        </div>
      </section>

      {/* ==========================================
          LEGEND
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
          <div className="flex flex-wrap justify-center gap-6">

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-slate-700">
                Holiday / Sunday
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-slate-700">
                School Celebration
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-slate-700">
                Vacation
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-slate-700">
                Today
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          MONTH GRID
      ========================================== */}
      <section className="mx-auto px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {months.map((monthData, index) => (
            <motion.div
              key={monthData.name}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
              }}
              className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* ==========================
                  MONTH HEADER
              ========================== */}
              <div
                className="
                  bg-linear-to-r
                  from-blue-900
                  via-blue-700
                  to-indigo-700
                  text-white
                  px-6
                  py-4
                "
              >
                <h2
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-center
                  "
                >
                  {monthData.name}
                </h2>
              </div>

              {/* ==========================
                  CALENDAR BODY
              ========================== */}
              <div className="p-5">

                {/* Days Header */}
                <div
                  className="
                    grid
                    grid-cols-7
                    mb-4
                    text-center
                    text-xs
                    md:text-sm
                    font-semibold
                    text-slate-500
                  "
                >
                  {days.map((day) => (
                    <div key={day}>
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div
                  className="
                    grid
                    grid-cols-7
                    gap-2
                  "
                >
                  {renderDays(
                    monthData.year,
                    monthData.month
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          BOTTOM QUOTE
      ========================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div
          className="
            rounded-3xl
            bg-linear-to-r
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
            Learning Today,
            <br />
            Leading Tomorrow
          </h3>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-white/80
              leading-relaxed
            "
          >
            This academic calendar serves as a guide
            to the school's educational journey,
            celebrations, holidays and important
            vacation periods throughout the session.
          </p>
        </div>
      </section>

    </main>
  );
}

/* =====================================================
   RENDER DAYS
===================================================== */
function renderDays(year, month) {
  const firstDay = new Date(
    year,
    month,
    1
  ).getDay();

  const totalDays = new Date(
    year,
    month + 1,
    0
  ).getDate();

  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push(
      <div
        key={`empty-${i}`}
        className="h-14"
      />
    );
  }

  for (
    let dayNumber = 1;
    dayNumber <= totalDays;
    dayNumber++
  ) {
    const date = new Date(
      year,
      month,
      dayNumber
    );

    const dayOfWeek =
      date.getDay();

    const dateKey =
      `${year}-${String(
        month + 1
      ).padStart(2, "0")}-${String(
        dayNumber
      ).padStart(2, "0")}`;

    const holiday =
      holidays[dateKey];

    const celebration =
      celebrations[dateKey];

    const vacation =
      getVacation(dateKey);

    const saturdayHoliday =
      saturdayHolidays[
        dateKey
      ];

    const isSunday =
      dayOfWeek === 0;

    const today =
      isToday(date);

    cells.push(
      renderDayCell({
        dateKey,
        dayNumber,
        holiday,
        celebration,
        vacation,
        saturdayHoliday,
        isSunday,
        today,
      })
    );
  }

  return cells;
}
/* =====================================================
   DAY CELL
===================================================== */
function renderDayCell({
  dateKey,
  dayNumber,
  holiday,
  celebration,
  vacation,
  saturdayHoliday,
  isSunday,
  today,
}) {
  const isHoliday =
    holiday ||
    isSunday ||
    saturdayHoliday;

  const tooltip =
    holiday ||
    celebration ||
    vacation ||
    "";

  return (
    <div
      key={dateKey}
      title={tooltip}
      className={`
        relative
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        text-sm
        font-medium
        transition-all
        duration-200
        cursor-default

        ${
          today
            ? `
              bg-emerald-500
              text-white
              shadow-lg
              scale-105
            `
            : `
              hover:bg-slate-100
            `
        }
      `}
    >
      {/* ======================
          DATE NUMBER
      ====================== */}
      <span
        className={`
          ${
            !today &&
            isHoliday
              ? "text-red-600"
              : ""
          }

          ${
            !today &&
            celebration
              ? "text-blue-600"
              : ""
          }

          ${
            !today &&
            vacation
              ? "text-yellow-700"
              : ""
          }
        `}
      >
        {dayNumber}
      </span>

      {/* ======================
          HOLIDAY DOT
      ====================== */}
      {!today && isHoliday && (
        <span
          className="
            absolute
            bottom-1.5
            w-2.5
            h-2.5
            rounded-full
            bg-red-500
          "
        />
      )}

      {/* ======================
          CELEBRATION DOT
      ====================== */}
      {!today &&
        !isHoliday &&
        celebration && (
          <span
            className="
              absolute
              bottom-1.5
              w-2.5
              h-2.5
              rounded-full
              bg-blue-500
            "
          />
        )}

      {/* ======================
          VACATION DOT
      ====================== */}
      {!today &&
        !isHoliday &&
        !celebration &&
        vacation && (
          <span
            className="
              absolute
              bottom-1.5
              w-2.5
              h-2.5
              rounded-full
              bg-yellow-500
            "
          />
        )}
    </div>
  );
}

/* =====================================================
   TODAY CHECK
===================================================== */
function isToday(date) {
  const now = new Date();

  return (
    date.getDate() ===
      now.getDate() &&
    date.getMonth() ===
      now.getMonth() &&
    date.getFullYear() ===
      now.getFullYear()
  );
}

/* =====================================================
   VACATION LOOKUP
===================================================== */
function getVacation(date) {
  for (const vacation of longVacations) {
    if (
      date >= vacation.start &&
      date <= vacation.end
    ) {
      return vacation.name;
    }
  }

  return null;
}