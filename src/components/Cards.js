import React from "react";
import Images from "./Images";

function Cards() {

    // Creating an Array w Objects for menu items
    const menuItems = [
        {
            title: "Bowel Log",
            bgImg: Images.navbar.bowelLog,
            about: ""
        },
        {
            title: "Food Log",
            bgImg: Images.navbar.foodLog,
            about: ""
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
                            <p>{card.about}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
};

export default Cards;