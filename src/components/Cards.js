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
            about: Icons.symbols.add
        },
        {
            title: "Food Log",
            bgImg: Images.navbar.foodLog,
            about: <Button label={Icons.symbols.heart} variant="secondary" onClick={() => console.log("Clicked")} />
        },
        {
            title: "Other",
            bgImg: Images.navbar.other,
            about: ""
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
                        <div className="flex flex-col items-center justify-evenly w-full h-full uppercase">
                            <h2>{card.title}</h2>
                            {card.about}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Cards;