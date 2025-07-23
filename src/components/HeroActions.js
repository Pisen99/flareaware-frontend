import React from "react";
import Icons from "./Icons"
import Button from "./Button";

function HeroActions() {
    
    return (
        <div className="flex flex-row gap-x-4 justify-center whitespace-nowrap">
            {/* Get started */}
            <div className="animate-grow-in opacity-0 delay-3700">
                <Button
                    label="Get Started"
                    variant="secondary"
                    onClick={() => console.log("Get Started")}
                />
            </div>
            
            {/* Learn more */}
            <div className="animate-grow-in opacity-0 delay-4000">
                <Button
                    label="Learn More"
                    symbol={Icons.symbols.info}
                    variant="primary"
                    expand={true}
                    onClick={() => console.log("Learn More")}
            />
            </div>
            
            
        </div>
    )
}

export default HeroActions;