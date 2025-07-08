import React from "react";
import Icons from "./Icons";

function CalendarTwo() {

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
                <button
                    className="
                    text-gray-400 text-2xl
                    md:text-3xl"
                >
                    {Icons.arrows.arrowBack}
                </button>
                <span className="text-lg md:text-2xl">Monday 7 June</span>
                <button
                    className="
                    text-gray-400 text-2xl
                    md:text-3xl"
                >
                    {Icons.arrows.arrowForward}
                </button>
            </div>
            {/* Container: Calendar */}
            <div
                className="
                grid grid-cols-7 grid-rows-2 gap-2
              text-beige text-center 
                py-4 px-4
                md:px-20 md:gap-3
                lg:mx-32 lg:gap-4">

                {/* Displaying each day of the week */}
                <div
                    className="
                    col-span-1
                    p-2"
                >
                    <p className="text-sm md:text-xl lg:text-2xl">day</p>
                </div>

                {/* Symbol will appear when something is added */}
                <div
                    className="
                    row-start-2
                    bg-gray-500 border-2 border-gray-600 rounded-full
                    md:py-0.5"
                >
                </div>
            </div>


            {/* Container: Buttons */}
            <div
                className="
                bg-gray-500 border-2 border-gray-600 rounded-xl
                p-4 mx-4
                md:border-4 md:border-gray-600 md:mx-20 md:px-8
                lg:mx-32 lg:px-16"
            >
            </div>
        </>

    )
}

export default CalendarTwo
