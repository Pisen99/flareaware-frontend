import React from "react";
import Icons from "./Icons";
import FoodLogSelections from "./FoodLogSelections";

function SymptomForm() {

    return (
        // Container: Symptom form
        <div 
            className="
            bg-gray-500 
            text-beige 
            rounded-xl shadow-xl/30
            mx-4 mt-4 "
        >
            {/* MAPPING: FoodLogSelections => categories & items */}
            {FoodLogSelections.map((item, index) => (
            <div key={index}>
                {/* Display: Category */}
                <div 
                    className="
                    flex justify-around
                    bg-gray-600
                    text-center 
                    rounded-t-xl 
                    py-4"
                >
                    <button>{Icons.arrows.arrowBack}</button>
                    <span>{item.category}</span>
                    <button>{Icons.arrows.arrowForward}</button>
                    
                </div>
                {/* MAPPING: induvidual items */}
                {item.items.map((label, i) => (
                    // Display: Symptoms/label
                    <div 
                        className="
                        grid grid-cols-2 items-center
                        p-4"
                    >
                        <span>{label}</span>
                        <span className="justify-self-end">{Icons.symbols.add}</span>
                    </div>
                ))}
            </div>
            ))}

            {/* hide for now */}
            <div className="hidden">
                {/* Display: SUB Label */}
                <div className="flex flex-col justify-center text-center">
                    <span
                        className="
                        text-gray-600 text-sm 
                        border-gray-600/30 border-t-2
                        pt-2"
                    >
                        subLabel
                    </span>
                </div>

                {/* Display: SUB Symptoms */}
                <div 
                    className="
                    grid grid-cols-2 items-center
                    p-4"
                >
                    <span>subSymptom</span>
                    <div className="flex justify-end items-center gap-1 text-xl">
                        <span className="text-red-400">{Icons.rank.blood}</span>
                        <span className="text-red-600">{Icons.rank.blood}</span>
                        <span className="text-red-900">{Icons.rank.blood}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SymptomForm;