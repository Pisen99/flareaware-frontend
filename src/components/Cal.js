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
    const scrollRef = useRef(null);

    // ---------------------------
    // Utility: Generate all days for a given month
    // ---------------------------
    const daysInMonth = (month) => {
        const startOfMonth = currentMonth.clone().startOf("month");
        const endOfMonth = currentMonth.clone().endOf("month");
        const days = [];

        let day = startOfMonth.clone();
        while (day.isSameOrBefore(endOfMonth, "day")) {
            const dayNumber = day.date();
            let ordinal = "th";
            if (dayNumber === 1 || dayNumber === 21 || dayNumber === 31) ordinal = "st";
            else if (dayNumber === 2 || dayNumber === 22) ordinal = "nd";
            else if (dayNumber === 3 || dayNumber === 23) ordinal = "rd";

            days.push({
                dayLabel: day.format("dd")[0],      // Ex: "M"
                fullDayLabel: day.format("dddd"),   // Ex: "Monday"
                dateOrdinalLabel: ordinal,          // Ex: "th, st, nd, rd"
                dateLabel: dayNumber,               // Ex: "28"
                monthLabel: day.format("MMMM"),     // Ex: "June"
                shortMonthLabel: day.format("MMM"), // Ex: "Jun"
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
        else label = selectedDay.monthLabel;
    };

    // const handleScroll = () => {
    //     if (!scrollRef.current) return;

    //     const scrollContainer = scrollRef.current;
    //     const containerCenter = scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;

    //     let closestIndex = 0;
    //     let closestDistance = Infinity;

    //     dayRefs.current.forEach((el, i) => {
    //       if (!el) return;
    //       const elCenter = el.offsetLeft + el.offsetWidth / 2;
    //       const distance = Math.abs(containerCenter - elCenter);

    //       if (distance < closestDistance) {
    //         closestDistance = distance;
    //         closestIndex = i;
    //       }
    //     });

    //     setSelectedCard(closestIndex);
    //   };


    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.clone().subtract(1, "month"));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.clone().add(1, "month"));
    };

    const prevMonthLabel = currentMonth.clone().subtract(1, "month").format("MMM");
    const nextMonthLabel = currentMonth.clone().add(1, "month").format("MMM");

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
            {/* Info Card */}
            <div
                className="
                w-max self-center inline-block 
                bg-gray-800/20 rounded-xl
                p-6 
                md:p-10 lg:px-14
                border border-indigo-400 
                inset-shadow-all-indigo-in shadow-all-indigo-out 
                animate-shadow-pulse"
            >
                {selectedDay && (
                    <div
                        className="
                        flex flex-col items-center gap-2
                        text-base font-medium
                        min-w-[200px] md:min-w-[250px] lg:min-w-[280px]
                        md:text-2xl"
                    >
                        {/* Labels */}
                        <p
                            className="bg-indigo-500/30 py-1 px-3 md:px-4 rounded-full text-indigo-400"
                        >
                            {label}
                        </p>

                        {/* Full day & date */}
                        <p className="text-beige/30">
                            {selectedDay.fullDayLabel} {selectedDay.dateLabel}
                            <span className="text-xs md:text-sm align-super ml-1">{selectedDay.dateOrdinalLabel}</span>
                        </p>
                        {/* <span className="text-xl text-beige/60 mt-4">{Icons.symbols.location}</span> */}
                    </div>
                )}
            </div>

            {/* Calendar grid */}
            <div className="relative">

                <div
                    className="overflow-x-auto py-6 px-4"
                >
                    <div className="flex space-x-2 min-w-max">
                        {days.map((day, i) => (
                            <div
                                ref={(el) => (dayRefs.current[i] = el)}
                                key={i}
                                onClick={() => handleActiveCard(i)}
                                className={`
                                flex flex-col items-center gap-1
                                bg-gray-600/30 rounded-lg
                                w-14 h-20
                                px-4 py-2
                                text-gray-500
                                cursor-pointer
                                transition-transform duration-200 ease-in-out
                                ${day.currentDay ? "bg-indigo-500/30" : ""}
                                ${selectedCard === i ? "scale-110 border border-indigo-400" : "scale-100 inset-shadow-all/30"}
                                `}
                            >
                                <p className="text-sm md:text-lg truncate">{day.dayLabel}</p>
                                <p className="text-base md:text-xl font-semibold">{day.dateLabel}</p>
                                {/* Symbol here */}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigations */}
                {/* Left fade + arrow */}
                <div className="absolute top-0 left-0 h-full w-12 flex items-center justify-start">
                    <div className="pointer-events-none absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#111828] to-transparent"></div>
                    <button
                        onClick={handlePrevMonth}
                        className="z-10 ml-1 text-3xl text-gray-700/40 hover:text-indigo-400 active:text-indigo-400 transition cursor-pointer"
                    >
                        {Icons.arrows.prevW}
                    </button>
                </div>

                {/* Right fade + arrow */}
                <div className="absolute top-0 right-0 h-full w-12 flex items-center justify-end">
                    <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#111828] to-transparent"></div>
                    <button
                        onClick={handleNextMonth}
                        className="z-10 mr-1 text-3xl text-gray-700/40 hover:text-indigo-400 active:text-indigo-400 transition cursor-pointer"
                    >
                        {Icons.arrows.nextW}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Cal;