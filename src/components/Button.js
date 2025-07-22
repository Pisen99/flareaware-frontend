import React from "react";

function Button({ label, variant, onClick, className = "" }) {
    // DEFAULT btn syle
    const btnDefault = `
        text-beige
        relative w-full sm:w-auto
        px-4 py-2
        rounded-full font-semibold text-center
        transition
        overflow-hidden group
        cursor-pointer

        text-sm
        md:text-xl
    `.trim().replace(/\s+/g, ' ');

    // VARIANTS btn style
    const variants = {
        primary: `
            bg-gray-800
            text-gray-600
            backdrop-blur-md
            shadow-md shadow-gray-600/50 
            border-gray-600 border-2
            duration-300 ease-in-out

            hover:bg-gray-700/80
            hover:shadow-md
            
            active:inset-shadow-sm active:inset-shadow-gray-900 active:shadow-xs active:scale-95
        `.trim().replace(/\s+/g, ' '),
        secondary: `
            bg-green/30
            text-green
            backdrop-blur-md
            shadow-md shadow-green/50
            border-green border-2
            duration-300 ease-in-out

            hover:bg-green/60
            hover:shadow-md
            hover:-translate-y-1 hover:scale-100
            
            active:inset-shadow-sm active:inset-shadow-gray-900 active:shadow-xs active:scale-95
        `.trim().replace(/\s+/g, ' '),
        icon: "text-2xl md:text-3xl lg:text-4xl",
    };

    const btnClasses = `${btnDefault} ${variants[variant] || ""} ${className}`.trim();

    return (
        <div>
            <button onClick={onClick} className={btnClasses}>{label}</button>
        </div>
    )
};

export default Button;