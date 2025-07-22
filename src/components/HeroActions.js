import React from "react";
import Icons from "./Icons"
import Button from "./Button";

function HeroActions() {
    
    return (
        <div className="flex flex-row gap-x-4 justify-center whitespace-nowrap">
            {/* Get started */}
            <Button
                label="Get Started"
                variant="secondary"
                onClick={() => console.log("Get Started")}
            />
            {/* Learn more */}
            <Button
                label="Learn More"
                symbol={Icons.symbols.info}
                variant="primary"
                expand={true}
                onClick={() => console.log("Learn More")}
            />
            
        </div>
    )
}

export default HeroActions;