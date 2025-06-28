import React from "react";

function Calendar() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const calCards = days.map((day) => ({
        day: day,
        date: ""
    }));

    return (
        <>
            <div className="grid grid-flow-col grid-cols-7 text-center">
                {calCards.map((item, index) => (
                    <div
                        key={index}
                    >
                        <div className="bg-blue-400 rounded-full p-2">
                            <p>{item.day}</p>
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Calendar;