import React from "react";
import Images from "./Images";
import Icons from "./Icons";
import Button from "./Button";

function Cards() {

    // Creating an Array w Objects for menu items
    const menuItems = [
        {
            title: "Bowel Log",
            bgImg: Images.navbar.bowelLog,
            about: "Track your bowel movements",
            symbols: Icons.symbols.add
        },
        {
            title: "Food Log",
            bgImg: Images.navbar.foodLog,
            about: "Log your meals & triggers",
            symbols: <Button label={Icons.symbols.heart} variant="secondary" onClick={() => console.log("Clicked")} />
        },
        {
            title: "Other",
            bgImg: Images.navbar.other,
            about: "Notes, symptoms, medications, and anything else you need",
            symbols: ""
        }
    ]

    return (
        <>
            {/* Mapping through menuItems, obj = card, index = counting through each obj in array */}
            {menuItems.map((card, index) => (
                <div
                    className="w-full h-full row-span-1"
                    key={index}
                >
                    <div style={card.bgImg} className="flex flex-col border-beige shadow-md border-2 rounded-sm h-full">
                        <div className="flex flex-col items-center justify-evenly w-full h-full">
                            <h2 className="uppercase">{card.title}</h2>
                            {card.symbols}
                            <p className="text-center">{card.about}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Cards;