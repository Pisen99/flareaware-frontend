import React from "react";

function Button({ label, variant, onClick }) {
    const btnDefault = "w-full sm:w-auto px-4 py-2 rounded-xl font-semibold transition text-center";

    const variants = {
        primary: "text-beige animate-bounce text-3xl",
        secondary: "text-red-400 text-3xl",
        other: "bg-red-500 text-white hover:bg-red-600",
    };

    const btnClasses = `${btnDefault} ${variants[variant]}`;

    return (
        <div>
            <button onClick={onClick} className={btnClasses}>{label}</button>
        </div>
    )
};

export default Button;