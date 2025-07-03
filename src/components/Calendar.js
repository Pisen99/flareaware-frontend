import React from "react";
import moment from "moment";
import { useState } from "react";
import Icons from "./Icons";

function Calendar() {
    // Get today's date using moment
    const today = moment();
    // Get the index of today's day in the week (Monday = 0, Sunday = 6)
    const todayIndex = today.isoWeekday() - 1;

    // State to track week offset from current week (0 = current)
    const [weekOffSet, setWeekOffSet] = useState(0);
    // State to track which weekday card is currently selected (defaults to today)
    const [selectedCard, setSelectedCard] = useState(todayIndex)
    
    // Calculate the start of the week based on the offset
    const startOfWeek = moment().startOf("isoWeek").add(weekOffSet, "weeks");

    // Generate array of 7 days for the current week view
    const thisWeek = Array.from({ length: 7 }, (_, i) => {
        const day = startOfWeek.clone().add(i, "days");
        return {
            day: day.format("ddd")[0], // First letter of weekday (e.g., M)
            date: day.date(), // Day number (e.g., 28)
            month: day.format("MMMM"), // Full month name (e.g., June)
            currentDay: day.isSame(today, "day") // Marks today's date
        }
    })

    // Handle clicking a specific day card
    const handleActiveCard = (index) => {
        console.log(index)
        setSelectedCard(index)
    }

    // Determine which day to display as selected (clicked or today)
    const selectedDay = selectedCard !== null ? thisWeek[selectedCard] : thisWeek.find(day => day.currentDay);

    // Adjust the visible week (back or forward) and update the offset
    const handleWeeks = (direction) => {
        setWeekOffSet(prev => prev + (direction === "forward" ? 1 : -1))
    }

    return (
        <>
            {/* Display selected day info with navigation buttons */}
            {selectedDay && (
                <div className="flex justify-center items-center text-center py-4">
                    <button onClick={() => handleWeeks("back")} className="p-4 text-2xl" >{Icons.arrows.arrowBack}</button>
                    <strong>{selectedDay.month}: {selectedDay.date}</strong>
                    <button onClick={() => handleWeeks("forward")} className="p-4 text-2xl" >{Icons.arrows.arrowForward}</button>
                </div>
            )}
            {/* Weekday cards */}
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