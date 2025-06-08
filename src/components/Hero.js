import React from "react";
import Button from "../components/Button";
import img from "../assets/img/flareaware-bg.png";

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
                <h1 className="text-4xl">
                    FlareAware
                </h1>
                <p className="text-xl">
                    Track, Manage & Take Control
                </p>
            </div>
            <div className="min-h-[50vh] flex flex-col items-center justify-end p-4">
                <Button label="Get Started" variant="primary" onClick={() => console.log("Clicked")}/>
            </div>
        </div>
        </>
    )
};

export default Hero;