import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import Icons from "./Icons";

function Cal() {
    // ---------------------------
    // Imports & State
    // ---------------------------
    const [currentMonth, setCurrentMonth] = useState(
        moment().startOf("month") // Start at the first day of the current month
    );
    const today = moment(); // Current date & time
    const dayRefs = useRef([]); // Array of DOM refs for each day element

    // ---------------------------
    // Utility: Generate all days for a given month
    // ---------------------------
    const daysInMonth = (month) => {
        const startOfMonth = currentMonth.clone().startOf("month");
        const endOfMonth = currentMonth.clone().endOf("month");
        const days = [];

        let day = startOfMonth.clone();
        while (day.isSameOrBefore(endOfMonth, "day")) {
            days.push({
                dayLabel: day.format("dd")[0],      // Ex: "M"
                fullDayLabel: day.format("dddd"),   // Ex: "Monday"
                dateOrdinalLabel: day.format("Do"),
                dateLabel: day.date(),              // Ex: "28"
                monthLabel: day.format("MMMM"),     // Ex: "June"
                yearLabel: day.year(),              // Ex: "2025"
                currentDay: day.isSame(today, "day") // true if it's today
            });
            day.add(1, "day");
        }
        return days;
    }

    // ---------------------------
    // Derived Data
    // ---------------------------
    const days = daysInMonth(currentMonth);
    const todayIndex = days.findIndex((d,) => d.currentDay); // Index of today's date in "days"

    // Initialize selected card to today's index
    useEffect(() => {
        if (todayIndex !== -1) {
            setSelectedCard(todayIndex);
        }
    }, [todayIndex]);

    // ---------------------------
    // Auto-scroll to today on month change
    // ---------------------------
    useEffect(() => {
        if (todayIndex !== -1 && dayRefs.current[todayIndex]) {
            dayRefs.current[todayIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [currentMonth]);

    // ---------------------------
    // Handlers
    // ---------------------------
    const [selectedCard, setSelectedCard] = useState(todayIndex); // State here due to order conflict if its higher up in
    const handleActiveCard = (i) => {
        setSelectedCard(i);
    };

    // ---------------------------
    // Label for Selected Day
    // ---------------------------
    const selectedDay = days[selectedCard];
    let label = "";

    if (selectedDay) {
        const selectedDate = currentMonth.clone().date(selectedDay.dateLabel).startOf('day');
        const todayMidnight = moment().startOf('day');
        const diff = selectedDate.diff(todayMidnight, "days");

        if (diff === -2) label = "Day before yesterday";
        else if (diff === -1) label = "Yesterday";
        else if (diff === 0) label = "Today";
        else if (diff === 1) label = "Tomorrow";
        else if (diff === 2) label = "Day after tomorrow";
        else label = "Date";
    };

    // ---------------------------
    // Debug Logs
    // ---------------------------

    return (
        <div
            className="
            flex flex-col gap-4
            lg:mx-60 lg:py-20 lg:rounded-2xl
            py-8"
        >
            <div className="self-center inline-block w-max bg-gray-800/15 py-4 px-6 rounded-xl">
                {selectedDay && (
                    // Dates 
                    <div
                        className="
                        flex flex-col items-center gap-2
                        text-beige/30
                        text-base font-medium
                        min-w-[200px]
                        md:text-xl"
                    >
                        <p
                            className="bg-indigo-500/30 py-1 px-2 rounded-full"
                        >
                            {label}
                        </p>
                        <p>{selectedDay.fullDayLabel}: {selectedDay.dateLabel}</p>
                        {/* <span className="text-xl text-beige/60 mt-4">{Icons.symbols.location}</span> */}
                    </div>
                )}
            </div>
            

            {/* Navigations */}
            <div className="w-full flex flex-row justify-between text-beige/30" >
                <div className="opacity-0 flex items-center justify-start gap-2">
                    <span className="text-xl">{Icons.arrows.prev}</span>
                    <p className="text-sm font-semibold text-beige/20">Feb</p>
                </div>
                <div className="opacity-0 flex items-center justify-end gap-2">
                    <p className="text-sm font-semibold text-beige/20">Mar</p>
                    <span className="text-xl">{Icons.arrows.next}</span>
                </div>
            </div>

            {/* Calendar grid */}
            <div className="overflow-x-auto py-4">
                <div className="flex space-x-2 min-w-max">
                    {days.map((day, i) => (
                        <div
                            ref={(el) => (dayRefs.current[i] = el)}
                            key={i}
                            onClick={() => handleActiveCard(i)}
                            className={`
                            flex flex-col items-center gap-1
                            bg-gray-600/30 rounded-lg
                            px-4 py-2
                            text-gray-500
                            transition-transform duration-200 ease-in-out
                            ${day.currentDay ? "bg-indigo-500/30" : ""}
                            ${selectedCard === i ? "scale-110 border border-indigo-500" : "scale-100 inset-shadow-all/30"}
                            `}
                        >
                            <p className="text-sm md:text-lg">{day.dayLabel}</p>
                            <p className="text-base md:text-xl font-semibold">{day.dateLabel}</p>
                            {/* Symbol here */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Cal;