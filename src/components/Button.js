import React from "react";

function Button({ label, variant, onClick, className = "" }) {
    // DEFAULT btn syle
    const btnDefault = `
        text-beige
        relative w-full sm:w-auto
        px-4 py-2
        rounded-xl font-semibold text-center
        transition
        overflow-hidden group
        cursor-pointer
    `.trim().replace(/\s+/g, ' ');

    // VARIANTS btn style
    const variants = {
        primary: `
            bg-white
            text-gray-900
            border border-gray-300
            shadow-sm transition-colors
            hover:bg-gray-100 active:bg-gray-200
            dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:border-gray-700
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