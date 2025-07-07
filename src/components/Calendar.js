import React from "react";
import moment from "moment";
import { useState } from "react";
import Icons from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

function Calendar() {
    // Get today's date using moment
    const today = moment();
    // Get the index of today's day in the week (Monday = 0, Sunday = 6)
    const todayIndex = today.isoWeekday() - 1;

    // State to track week offset from current week (0 = current)
    const [weekOffSet, setWeekOffSet] = useState(0);
    // State to track which weekday card is currently selected (defaults to today)
    const [selectedCard, setSelectedCard] = useState(todayIndex);
    // State to track animation direction when changing switching between weeks
    const [direction, setDirection] = useState("forward");

    // Calculate the start of the week based on the offset
    const startOfWeek = moment().startOf("isoWeek").add(weekOffSet, "weeks");

    // Generate array of 7 days for the current week view
    const thisWeek = Array.from({ length: 7 }, (_, i) => {
        const day = startOfWeek.clone().add(i, "days");
        return {
            daySM: day.format("ddd")[0], // First letter of weekday (e.g., M)
            dayMD: day.format("ddd"), // First 3 letters of weekday (e.g., Mon)
            dayLG: day.format("dddd"), // Weekday (e.g., Monday)
            date: day.date(), // Day number (e.g., 28)
            month: day.format("MMMM"), // Full month name (e.g., June)
            currentDay: day.isSame(today, "day") // Marks today's date
        }
    })

    // Handle clicking a specific day card
    const handleActiveCard = (index) => {
        // console.log(index);
        setSelectedCard(index);
    }

    // Determine which day to display as selected (clicked or today)
    const selectedDay = selectedCard !== null ? thisWeek[selectedCard] : thisWeek.find(day => day.currentDay);
    // console.log(selectedDay);

    // Handle week navigation:
    // - Updates scroll direction for animation
    // - Adjusts the week offset (moves forward or back by 1 week)
    const handleWeeks = (dir) => {
        setDirection(dir);
        setWeekOffSet(prev => prev + (direction === "forward" ? 1 : -1));
    }

    return (
        <div className="py-4">
            {/* Display selected day info with navigation buttons */}
            {selectedDay && (
                <div className="flex justify-center items-center text-center py-4">
                    <button onClick={() => handleWeeks("back")} className="p-4 text-2xl" >{Icons.arrows.arrowBack}</button>
                    <strong className="w-40">{selectedDay.month}: {selectedDay.date}</strong>
                    <button onClick={() => handleWeeks("forward")} className="p-4 text-2xl" >{Icons.arrows.arrowForward}</button>
                </div>
            )}
            {/* Weekday cards w animation */}
            <div 
                className="
                relative h-24 overflow-hidden
                md:px-12
                lg:px-24
                "
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={weekOffSet}
                        initial={{ x: direction === "forward" ? 300 : -300, opacity: 0.5 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-flow-col grid-cols-7 text-center"
                    >
                        {thisWeek.map((item, index) => (
                            <div key={index}>
                                <div
                                    onClick={() => handleActiveCard(index)}
                                    className={`border-2 rounded-full px-2 py-4 ${item.currentDay ? "border-blue-600" : "border-transparent"} ${selectedCard === index ? "bg-blue-300" : "bg-blue-400"}`}
                                >
                                    <p>
                                        <span className="block sm:hidden">{item.daySM}</span>
                                        <span className="hidden sm:block lg:hidden">{item.dayMD}</span>
                                        <span className="hidden lg:block">{item.dayLG}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Calendar;