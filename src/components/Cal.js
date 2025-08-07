import React, { useState } from "react";
import Icons from "./Icons";
import moment from "moment";

function Cal() {
    const [currentMonth, setCurrentMonth] = useState(moment().startOf("month"));

    const daysInMonth = (month) => {
        const startOfMonth = currentMonth.clone().startOf("month");
        const endOfMonth = currentMonth.clone().endOf("month");
        const today = moment();
        const days = [];

        let day = startOfMonth.clone();
        while (day.isSameOrBefore(endOfMonth, "day")) {
            days.push({
                dayLabel: day.format("dd")[0],   // Ex: "M"
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
    console.log(days)

    return (
        <div
            className="
                flex flex-col gap-8
                bg-gray-700/20
                border-gray-500/20 border-y 
                pt-10 pb-2 px-2"
        >
            {/* Dates */}
            <div
                className="
                    w-full
                    flex flex-col items-center gap-2
                    text-beige/30
                    text-md font-medium"
            >
                <p className="bg-gray-600/30 py-1 px-2 rounded-full">Yesterday</p>
                <p>Wednesday: 6</p>
                {/* <span className="text-xl text-beige/60 mt-4">{Icons.symbols.location}</span> */}
            </div>

            {/* Calendar grid */}
            <div className="overflow-x-auto">
                <div className="flex space-x-2 min-w-max">
                    {days.map((day, i) => (
                        <div
                            key={i}
                            className={`
                                flex flex-col items-center gap-1
                                bg-gray-600/30 rounded-lg
                                px-4 py-2
                                text-gray-500
                                ${day.currentDay ? "border border-red-400" : ""}
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