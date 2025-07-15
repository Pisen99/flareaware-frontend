import React from "react";
import Icons from "./Icons";
import moment from "moment";
import { useState } from "react";

function Calendar() {
    const today = moment(); // Gets today's date using moment
    const todayIndex = today.isoWeekday() - 1; // index of today's day in the week (Monday = 0, Sunday = 6) o
    
    const [selectedCard, setSelectedCard] = useState(todayIndex); // Used for handling selected card
    const [weekOffSet, setWeekOffSet] = useState(0); // State to track week offset from current week (0 = current)

    const startOfWeek = moment().startOf("isoWeek").add(weekOffSet, "weeks"); // isoWeek order: Monday => Sunday
    // Generate array of 7 days for the current week view
    const thisWeek = Array.from({ length: 7, }, (_, index) => {
        const day = startOfWeek.clone().add(index, "days");
        return {
            day: day.format("dd")[0], // Ex: "M"
            dayLG: day.format("ddd"), // Ex: "Mon"
            date: day.date(), // Ex: "7" or "28"
            month: day.format("MMMM"), // Ex: "June"
            year: day.year(), // Ex: "2025"
            currentDay: day.isSame(today, "day")
        }
    })

    // Handle week navigation:
    // - Adjusts the week offset (moves forward or back by 1 week)
    const handleWeek = (dir) => {
        setWeekOffSet(prev => prev + (dir === "next" ? 1 : - 1));
    }

    // Handles clicked day card
    const handleActiveCard = (index) => {
        setSelectedCard(index);
    }

    // Determine which day to display as selected (clicked or today)
    const selectedDay = selectedCard !== null ? thisWeek[selectedCard] : thisWeek.find(day => day.currentDay);

    return (
        <>
            {/* Displaying exact date of each day clicked or default current day */}
            {selectedDay && (
                <div
                    className="
                    flex flex-row justify-center text-center gap-4
                    text-beige
                    py-4
                    md:py-6
                    lg:gap-24"
                >
                    <button 
                        onClick={() => handleWeek("prev")}
                        className="cursor-pointer text-gray-400 text-2xl md:text-3xl lg:text-4xl"
                    >{Icons.arrows.prev}</button>
                    <span className="w-40 md:w-60 text-lg md:text-2xl lg:text-3xl ">{selectedDay.month}: {selectedDay.date}</span>
                    <button
                        onClick={() => handleWeek("next")} 
                        className="cursor-pointer text-gray-400 text-2xl md:text-3xl lg:text-4xl"
                    >{Icons.arrows.next}</button>
                </div>
            )}
            {/* Container: Calendar */}
            <div
                className="
                grid grid-flow-col grid-cols-7 gap-2
              text-beige text-center
                py-4 px-4
                md:px-20 md:gap-3
                lg:mx-32 lg:gap-4"
            >
                {/* ROW 1: Mapping to generate calendar */}
                {thisWeek.map((item, index) => (
                    <div 
                        key={index}
                        onClick={() => handleActiveCard(index)}
                    >
                        {/* Display: Each day of the week & changes on active card */}
                        <div
                            className={`
                            p-1 md:p-2
                            text-base md:text-2xl lg:text-3xl
                            cursor-pointer
                            ${selectedCard === index && "font-bold"}`}
                        >
                            <p className="leading-loose sm:block lg:hidden">{item.day}</p>
                            <p className="leading-loose hidden lg:block">{item.dayLG}</p>
                            {/* Display: changes on active card */}
                            <div 
                                className={`
                                border-2 rounded-full 
                                py-0.5
                                ${item.currentDay ? "border-beige" : "border-gray-600"}
                                ${selectedCard === index ? "bg-beige" : "bg-gray-500"}`}>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Calendar