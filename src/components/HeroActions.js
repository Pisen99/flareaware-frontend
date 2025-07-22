import React from "react";
import Icons from "./Icons"
import Button from "./Button";

function HeroActions() {
    
    return (
        <div className="flex flex-row gap-x-4 justify-center whitespace-nowrap">
            {/* Get started */}
            <Button
                variant="secondary"
                label="Get Started"
                onClick={() => console.log("Get Started")}
            />
            {/* Learn more */}
            <Button
                variant="primary"
                symbol={Icons.symbols.info}
                label="Learn More"
                expand={true}
                onClick={() => console.log("Learn More")}
            />
            
        </div>
    )
}

export default HeroActions;