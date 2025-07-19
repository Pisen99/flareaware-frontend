import React from "react";
import AnimationOrb from "./AnimationOrb";
import AnimationTyping from "./AnimationTyping";

function Header() {
    return (
        <div className="w-full h-screen relative">
            <AnimationOrb
                hoverIntensity={0.5}    // How strong the wave-y distortion is on hover
                rotateOnHover={true}    // Whether the background rotates when hovered
                hue={179}                 // Base hue shift (0 means default color palette)
                forceHoverState={false} // When true, hover is always "on"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center font-rubik mt-2 whitespace-nowrap">
                <h1 className="text-4xl font-bold text-beige md:text-6xl animate-grow mb-2 md:mb-4">FlareAware</h1>
                <AnimationTyping />
            </div>
        </div>
    )
}

export default Header;

