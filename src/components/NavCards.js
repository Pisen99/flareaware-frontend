import React from "react";
import { useState } from "react";
import NavItemsData from "../data/NavItemsData";

function NavCards() {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleActiveCard = (index) => {
        console.log(index)
        setSelectedCard(index)
    };

    return (
        // CONTAINER: cards
        <div 
            className="
                flex flex-row justify-evenly gap-6 md:px-16
                px-4 my-6 
                text-beige"
            >
            {/* MAPPING: rendering each "card" from NavMenuItemsData */}
            {NavItemsData.map((card, index) => (
                <div
                    key={index}
                    onClick={() => handleActiveCard(index)}
                    className={`
                        flex flex-col items-center p-2
                        text-2xl md:text-4xl
                        cursor-pointer 
                        transform transition-transform duration-300 ease-in-out
                        ${selectedCard === index ? "scale-150" : ""}
                    `}
                >
                    {/* SHADOW: glow effect on active card */}
                    <span
                        className={`
                            ${selectedCard === index && "fill-beige drop-shadow-md drop-shadow-beige/20"}
                        `}
                    >
                        {card.icon}
                    </span>
                    {/* ANIMATION: pulse on active card */}
                    {selectedCard === index && (
                        <div
                            className={`
                                mt-1 w-2 h-1 rounded-full bg-beige ${selectedCard === index && `${card.color} animate-pulse`}
                            `}
                        />
                    )}
                </div>
            ))}
        </div>

    )
}

export default NavCards;
