import React from "react";
import Button from "./Button";
import Images from "./Images";
import HeaderTypeAnimation from "./HeaderTypeAnimation";
import Icons from "./Icons";

function Header() {

    return (
        <>
        <div style={Images.header} className="min-h-screen flex flex-col items-center justify-center">
            <div className="min-h-[50vh] flex flex-col items-center justify-end gap-4">
                <h1 className="
                    text-4xl font-bold text-beige
                    md:text-8xl
                    "
                >
                    FlareAware
                </h1>
                <HeaderTypeAnimation />
            </div>
            <div className="min-h-[50vh] flex flex-col items-center justify-end p-4 gap-4">
                <p className="text-lg text-beige">Get Started</p>
                <Button label={Icons.arrowDown} variant="primary" onClick={() => console.log("Clicked")}/>
            </div>
        </div>
        </>
    )
};

export default Header;