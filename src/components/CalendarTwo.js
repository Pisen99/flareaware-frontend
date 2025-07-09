import React from "react";
import Icons from "./Icons";
import moment from "moment";
import { useState } from "react";

function CalendarTwo() {
    const [selectedCard, setSelectedCard] = useState(null) // Used for handling selected card

    // Handles clicked day card
    const handleActiveCard = (index) => {
        setSelectedCard(index);
    }

    const today = moment(); // Gets today's date using moment

    const startOfWeek = moment().startOf("isoWeek"); // isoWeek order: Monday => Sunday

    const thisWeek = Array.from({ length: 7, }, (_, index) => {
        const day = startOfWeek.clone().add(index, "days");
        return {
            day: day.format("dd")[0], // Ex: "M"
            dayLG: day.format("ddd"), // Ex: "Mon"
            date: day.date(), // Ex: "7" or "28"
            month: day.format("MMMM"), // Ex: "June"
            year: day.year(), // Ex: "2025"
            // currentDay: day.isSame(today, "day")
        }
    })

    return (
        <>
            {/* Displaying exact date of each day clicked or default current day */}
            <div
                className="
                flex flex-row justify-center gap-8
                text-beige
                py-4
                md:py-6
                lg:gap-24"
            >
                <button className="text-gray-400 text-2xl md:text-3xl lg:text-4xl">{Icons.arrows.arrowBack}</button>
                <span className="text-lg md:text-2xl lg:text-3xl">Monday 7 June</span>
                <button className="text-gray-400 text-2xl md:text-3xl lg:text-4xl">{Icons.arrows.arrowForward}</button>
            </div>

            {/* Container: Calendar */}
            <div
                className="
                grid grid-cols-7 grid-rows-2 gap-2
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
                        {/* Display: Each day of the week */}
                        <div
                            className={`
                            col-span-1
                            p-2
                            text-sm md:text-xl lg:text-2xl
                            ${selectedCard === index && "font-bold"}
                            `}
                            
                        >
                            <p>{item.day}</p>
                        </div>
                        {/* Display: Handles active card */}
                        <div
                            className={`
                            col-span-1
                            border-2 border-gray-600 rounded-full 
                            py-0.5
                            ${selectedCard === index ? "bg-beige" : "bg-gray-500"}`}
                        >
                        </div>
                    </div>
                ))}
            </div>

            {/* Container: Buttons */}
            <div
                className="
                bg-gray-500 border-2 border-gray-600 rounded-xl
                p-4 mx-4
                md:border-4 md:border-gray-600 md:mx-20 md:px-8
                lg:mx-48 lg:px-16"
            >
            </div>
        </>

    )
}

export default CalendarTwo