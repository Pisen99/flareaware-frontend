import React, { useState, useRef, useEffect } from "react";
import Icons from "./Icons";
import useCalendarDateLogic from "./useCalendarDateLogic";

function CalTwo() {
    // ---------------------------
    // Hooks
    // ---------------------------
    const {
        dateInfo,
        currentMonthInfo,
        monthDays,
        handlePrevMonth,
        handleNextMonth
    } = useCalendarDateLogic();

    // ---------------------------
    // Finding & handling the selected day
    // ---------------------------
    const todayIndex = monthDays.findIndex(day => day.isToday);
    const [selectedCard, setSelectedCard] = useState(todayIndex !== -1 ? todayIndex : 0);
    const handleActiveCard = (i) => {
        setSelectedCard(i);
    };

    // ---------------------------
    // Handling position of todays date
    // ---------------------------
    const todayRef = useRef(null);
    useEffect(() => {
        if (todayRef.current) {
            todayRef.current.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
    }, []);

    return (
        <div
            className="
            flex flex-col gap-4
            bg-gray-700/20
            border-gray-500/20 border-y 
            py-8"
        >

            {/* Date Info */}
            <div
                className="
                w-full
                flex flex-col items-center gap-2
                text-beige/30
                text-md font-medium"
            >
                <p className="bg-gray-600/30 py-1 px-2 rounded-full">Label</p>
                <p>{dateInfo.weekday}: {dateInfo.dayOrdinal}</p>
                {/* <span className="text-xl text-beige/60 mt-4">{Icons.symbols.location}</span> */}
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
            <div className="overflow-x-auto bg-gray-800 py-4 px-2">
                <div className="flex space-x-2 min-w-max">
                    {monthDays.map((day, i) => (
                        <div
                            key={i}
                            ref={day.isToday ? todayRef : null}
                            onClick={() => handleActiveCard(i)}
                            className={`
                            flex flex-col items-center gap-1
                            bg-gray-600/30 rounded-lg
                            px-4 py-2
                            text-gray-500
                            transform transition-transform duration-300
                            ${day.isToday ? "border border-indigo-500" : ""}
                            ${selectedCard === i ? "scale-110" : "scale-100"}
                            `}
                        >
                            <p className="text-sm">{day.weekdayShort}</p>
                            <p className="text-md font-semibold">{day.isoDay}</p>
                            {/* Symbol here */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CalTwo;