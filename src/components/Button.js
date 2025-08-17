import React from "react";
import clsx from "clsx";

function Button({
    label,
    variant = "primary",
    symbol,
    onClick,
    className = "",
    expand = false,
}) {

    const btnBase = `
        flex justify-center items-center
        relative w-auto
        px-4 py-2

        bg-gray-600 border-2 border-beige

        text-beige font-semibold text-center
        text-sm md:text-xl
        rounded-full 

        transition
        overflow-hidden
        group cursor-pointer

        focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-300

    `;

    const btnVariant = {
        primary: clsx(`
            bg-gray-800
            text-gray-600
            shadow-gray-600/50 shadow-md 
            border-gray-600

            backdrop-blur-md
            duration-300 ease-in-out
            
            hover:shadow-md
            
            active:inset-shadow-gray-900 active:inset-shadow-sm
            active:shadow-xs
            active:scale-95
        `),
        secondary: clsx(`
            bg-indigo-500/30
            text-indigo-500
            shadow-indigo-500/50 shadow-md 
            border-indigo-500

            backdrop-blur-md
            duration-300 ease-in-out

            hover:bg-indigo-500/60
            hover:shadow-md
            hover:-translate-y-1 hover:scale-100
            
            active:inset-shadow-gray-900 active:inset-shadow-sm
            active:shadow-xs
            active:scale-95
        `),
        icon: clsx(`
            bg-transparent border-transparent
            !text-2xl !md:text-3xl !lg:text-4xl
        `),
    };

    const btnClasses = clsx(
        btnBase,
        btnVariant[variant],
        className
    );

    return (
        <button onClick={onClick} className={btnClasses}>
            {symbol && <span className="transition-all duration-500">{symbol}</span>}
            {label && (
                <span className={clsx(
                    "transition-all duration-500 whitespace-nowrap",
                    expand ? "max-w-0 opacity-0 overflow-hidden group-hover:ml-2 group-hover:max-w-[200px] group-hover:opacity-100 transform translate-x-[-8px] group-hover:translate-x-0" : "opacity-100 max-w-full"
                )}
                >
                    {label}
                </span>
            )}
        </button>
    )
};

export default Button;