import React from "react";
import Button from "../components/Button";

function Hero() {

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="min-h-[50vh] flex flex-col items-center justify-end">
                <h1>
                    FlareAware
                </h1>
                <p>-</p>
                <p>
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