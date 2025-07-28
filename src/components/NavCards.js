import React from "react";
import { useState } from "react";
import NavItemsData from "../data/NavItemsData";

function NavCards() {
    // Store the current order of nav items
    const [navItems, setNavItems] = useState(NavItemsData);
    // Tracks which icon is currently in the center position
    const [selectedCard, setSelectedCard] = useState(1);

     // Handles icon click and swaps the clicked item with the center one
    const handleActiveCard = (index) => {
        // Do nothing if the clicked icon is already centered
        if(index === 1) return;

        // Create a shallow copy of the current icon list
        const newNavItems = [...navItems];
        // Swap the clicked icon with the center (index 1)
        [newNavItems[index], newNavItems[1]] = [newNavItems[1], newNavItems[index]];
        // Update the state with the new order
        setNavItems(newNavItems);

        // Update selectedCard to reflect the new center icon
        setSelectedCard(1)
        console.log(index)
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
            {navItems.map((card, index) => (
                <div
                    key={index}
                    onClick={() => handleActiveCard(index)}
                    className={`
                        flex flex-col items-center p-2
                        text-2xl md:text-4xl
                        cursor-pointer 
                        transform transition-transform duration-300 ease-in-out
                        ${selectedCard === index ? "scale-150" : "scale-100"}
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
