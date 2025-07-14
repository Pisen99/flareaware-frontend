import React from "react";
import Icons from "./Icons";

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
            {/* Display: Symptom type */}
            <div 
                className="
                bg-gray-600
                text-center 
                rounded-t-xl 
                py-4"
            >
                Consistency
            </div>
            {/* Container: Symptoms */}
            <div 
                className="
                grid grid-cols-2 items-center
                p-4 inset-shadow-sm"
            >
                <span>symptom here</span>
                <span className="justify-self-end">{Icons.symbols.add}</span>
            </div>
        </div>
    )
}

export default SymptomForm;