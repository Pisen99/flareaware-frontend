import React from "react";
import Icons from "./Icons"
import Button from "./Button";

function HeroActions() {
    
    return (
        <div className="flex flex-row gap-x-4 justify-center whitespace-nowrap">
            <Button
                label={"Get Started"}
                variant="secondary"
                onClick={() => console.log("Get Started")}
            />
            <Button
                label={"Learn More"}
                variant="primary"
                onClick={() => console.log("Learn More")}
            />
        </div>
    )
}

export default HeroActions;