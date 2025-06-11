import React from "react";
import Images from "./Images";
import Icons from "./Icons";
import Button from "./Button";

function Cards() {

    // Creating an Array w Objects for menu items
    const menuItems = [
        {
            title: "",
            bgImg: Images.navbar.bowelLog,
            about: "Bowel symptoms",
            symbols: <Button label={Icons.symbols.add} variant="secondary" onClick={() => console.log("Clicked add")} />
        },
        {
            title: "",
            bgImg: Images.navbar.foodLog,
            about: "Log meals",
            symbols: ""
        },
        {
            title: "Other",
            bgImg: Images.navbar.other,
            about: "",
            symbols: ""
        }
    ]

    return (
        <>
            {/* Mapping through menuItems, obj = card, index = counting through each obj in array */}
            {menuItems.map((card, index) => (
                <div
                    className="w-full h-full col-span-1"
                    key={index}
                >
                    <div style={card.bgImg} className="flex flex-col border-white shadow-lg border-2 rounded-lg h-full">
                        <div className="flex flex-col items-center justify-evenly w-full h-full p-2">
                            <h2 className="uppercase font-varela">{card.title}</h2>
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