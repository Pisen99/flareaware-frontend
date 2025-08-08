import React, { useState, useEffect, useRef } from "react";
import Icons from "./Icons";
import moment from "moment";

function Cal() {
    const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));

    const today = moment();
    const dayRefs = useRef([]);

    const daysInMonth = (month) => {
        const startOfMonth = currentMonth.clone().startOf("month");
        const endOfMonth = currentMonth.clone().endOf("month");
        const days = [];

        let day = startOfMonth.clone();
        while (day.isSameOrBefore(endOfMonth, "day")) {
            days.push({
                dayLabel: day.format("dd")[0],   // Ex: "M"
                fullDayLabel: day.format("dddd"),
                dateLabel: day.date(),           // Ex: "28"
                monthLabel: day.format("MMMM"),  // Ex: "June"
                yearLabel: day.year(),           // Ex: "2025"
                currentDay: day.isSame(today, "day") // true if it's today
            });
            day.add(1, "day");
        }
        return days;
    }

    const days = daysInMonth(currentMonth);
    const todayIndex = days.findIndex((d,) => d.currentDay);

    useEffect(() => {
        if (todayIndex !== -1 && dayRefs.current[todayIndex]) {
            dayRefs.current[todayIndex].scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            })
        }
    }, [currentMonth]);

    const [selectedCard, setSelectedCard] = useState(todayIndex);

    const handleActiveCard = (i) => {
        setSelectedCard(i)
    };

    const selectedDay = days[selectedCard];

    let label = "";
    if(selectedDay) {
        const selectedDate = currentMonth.clone().date(selectedDay.dateLabel).startOf('day');
        const todayMidnight = moment().startOf('day');
        const diff = selectedDate.diff(todayMidnight, "days");
        
        if(diff === -2) {
            label = "Day before yesterday";
        } else if(diff === -1) {
            label = "Yesterday";
        } else if(diff === 0) {
            label = "Today";
        } else if(diff === 1) {
            label = "Tomorrow";
        } else if(diff === 2) {
            label = "Day after tomorrow";
        } else {
            label = "";
        }
    }

    return (
        <div
            className="
            flex flex-col gap-8
            bg-gray-700/20
            border-gray-500/20 border-y 
            pt-10 pb-2"
        >
            {selectedDay && (
                // {/* Dates */}
                <div
                    className="
                    w-full
                    flex flex-col items-center gap-2
                    text-beige/30
                    text-md font-medium"
                >
                    <p
                        className={`
                        bg-gray-600/30 py-1 px-2 rounded-full
                        transition-opacity duration-200
                        ${label ? "visible opacity-100" : "invisible opacity-0"}
                        `}
                    >
                        {label || "Placeholder"}
                    </p>
                    <p>{selectedDay.fullDayLabel}: {selectedDay.dateLabel}</p>
                    {/* <span className="text-xl text-beige/60 mt-4">{Icons.symbols.location}</span> */}
                </div>
            )}
            

            {/* Calendar grid */}
            <div className="overflow-x-auto bg-gray-800 py-4 px-2">
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
                            ${day.currentDay ? "border border-indigo-500" : ""}
                            ${selectedCard === i ? "scale-110" : "scale-100"}
                            `}
                        >
                            <p className="text-sm">{day.dayLabel}</p>
                            <p className="text-md font-semibold">{day.dateLabel}</p>
                            {/* Symbol here */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Calendar Navigations */}
            <div className="invisible w-full flex flex-row justify-between text-beige/30">
                <div className="flex items-center justify-start gap-2">
                    <span className="text-xl">{Icons.arrows.prev}</span>
                    <p className="text-sm font-semibold text-beige/20">Feb</p>
                </div>
                <div className="flex items-center justify-end gap-2">
                    <p className="text-sm font-semibold text-beige/20">Mar</p>
                    <span className="text-xl">{Icons.arrows.next}</span>
                </div>
            </div>
        </div>
    )
};

export default Cal;