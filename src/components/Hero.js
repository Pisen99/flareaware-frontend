import React from "react";
import Button from "../components/Button";
import img from "../assets/img/flareaware-bg.png";
import Icons from "./Icons";

function Hero() {

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover" 
            }}
        >
            <div className="min-h-[50vh] flex flex-col items-center justify-end gap-4">
                <h1 className="text-4xl font-bold text-beige">
                    FlareAware
                </h1>
                <p className="text-xl text-beige">
                    Track, Manage & Take Control
                </p>
            </div>
            <div className="min-h-[50vh] flex flex-col items-center justify-end p-4 gap-4">
                <p className="text-lg text-beige">Get Started</p>
                <Button label={Icons.arrowDown} variant="primary" onClick={() => console.log("Clicked")}/>
            </div>
        </div>
        </>
    )
};

export default Hero;