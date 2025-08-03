import React, { useState } from "react";
import Icons from "./Icons";
import NavCards from "./NavCards";

function NavToggle() {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prev => !prev);
    }

    const toggleBtn = isToggled ? Icons.arrows.down : Icons.arrows.up;

    return (
        <div className="relative group">
            <div
                onClick={handleToggle}
                className={`
                    absolute z-10
                    -top-5 left-1/2 transform -translate-x-1/2
                    transition-opacity duration-300
                    text-beige text-xl cursor-pointer
                    ${isToggled ? "opacity-0 group-hover:opacity-100" : "animate-pulse"}
                `}
                    
            >
                {toggleBtn}
            </div>
            {isToggled && <NavCards />}
            
        </div>    
    )
};

export default NavToggle;