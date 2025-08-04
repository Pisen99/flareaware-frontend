import React from "react";
import Icons from "./Icons";

function Cal() {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    // const nums = Array.from({ length: 7 }, (_, i) => i + 1);

    return (
        <div 
            className="
                flex flex-col gap-2
                bg-gray-700/20
                border-gray-500/20 border-y 
                py-8"
        >
            {/* Dates */}
            <div 
                className="
                    w-full
                    flex flex-col items-center gap-2
                    text-beige/30
                    text-md font-medium"
            >
                <p>Monday</p>
                <p className="border-indigo-400 border rounded-full py-2 px-3">15</p>
                <span className="text-xl">{Icons.symbols.location}</span>
            </div>
            {/* Calendar grid */}
            <div 
                className="
                    w-full h-10
                    flex text-center
                    divide-gray-600/40 divide-x-2
                    text-beige/50
                    px-2"
            >
                {days.map((day, i) => (
                    <div key={i} className="flex-1 flex items-center justify-center text-sm font-medium">
                        <p>{day}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Cal;