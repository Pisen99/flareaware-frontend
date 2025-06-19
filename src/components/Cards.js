import React from "react";
import Images from "./Images";
import Icons from "./Icons";
import Button from "./Button";
import { useState } from "react";

function Cards() {

    // Creating an Array w Objects for menu items
    const menuItems = [
        {
            title: "Bowel symptoms",
            bgImg: Images.navbar.bowelLog,
            about: "",
            symbols: <Button label={Icons.symbols.add} variant="secondary" onClick={() => console.log("Clicked 'Bowel symptoms'")} />
        },
        {
            title: "Log meals",
            bgImg: Images.navbar.foodLog,
            about: "",
            symbols: <Button label={Icons.symbols.list} variant="secondary" onClick={() => console.log("Clicked 'Log meals'")} />
        },
        {
            title: "Other",
            bgImg: Images.navbar.other,
            about: "",
            symbols: <Button label={Icons.symbols.heart} variant="secondary" onClick={() => console.log("Clicked 'Other'")} />
        }
    ]

    const [selectedCard, setSelectedCard] = useState();

    const handleActiveCard = (index) => {
        console.log(index)
        setSelectedCard(index)
    }

    return (
        <>
            {/* Mapping through menuItems, obj = card, index = counting through each obj in array */}
            {menuItems.map((card, index) => (
                <div
                    onClick={() => handleActiveCard(index)}
                    className={`
                    ${selectedCard === index ? "border-red-400 border-3" : "border-transparent hover:border-red-400"}
                    border-2 rounded-xl
                    col-span-1
                    w-full h-full
                    md:p-0.5
                    `}
                    key={index}
                >
                    <div
                        style={card.bgImg}
                        className="
                        flex flex-col
                        h-full 
                        border-white border-4 rounded-lg shadow-lg p-2"
                    >
                        <div
                            className="
                            flex flex-col items-center justify-evenly
                            w-full h-full
                            p-2
                            md:gap-4"
                        >
                            <h2 className="text-center font-varela">{card.title}</h2>
                            <p className="text-center font-varela">{card.about}</p>
                            {card.symbols}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Cards;