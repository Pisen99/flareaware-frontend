import React from "react";
import moment from "moment";
import { useState } from "react";

function Calendar() {
    const today = moment();
    const thisWeek = Array.from({ length: 7 }, (_, i) => {
        const day = moment().startOf("day").add(i, "days");
        return {
            day: day.format("ddd")[0], // e.g., Mon
            date: day.date(), // e.g., 28
            month: day.format("MMM"), // e.g., Jun
            currentDay: day.isSame(today, "day")
        }
    })

    const [selectedCard, setSelectedCard] = useState(null)

    const handleActiveCard = (index) => {
        console.log(index)
        setSelectedCard(index)
    }

    const selectedDay = selectedCard !== null ? thisWeek[selectedCard] : thisWeek.find(day => day.currentDay);

    return (
        <>
            {selectedDay && (
                <div className="text-center py-4 text-gray-700 text-sm">
                    <strong>{selectedDay.month}: {selectedDay.date}</strong>
                </div>
            )}
            <div className="grid grid-flow-col grid-cols-7 text-center">
                {thisWeek.map((item, index) => (
                    <div key={index}>
                        <div
                            onClick={() => handleActiveCard(index)}
                            className={`border-2 rounded-full px-2 py-4 ${item.currentDay ? "border-blue-600" : "border-transparent"} ${selectedCard === index ? "bg-blue-300" : "bg-blue-400"}`}
                        >
                            <p>{item.day}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Calendar;