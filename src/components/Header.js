import React from "react";
import AnimationOrb from "./AnimationOrb";
import AnimationTyping from "./AnimationTyping";
import HeroActions from "./HeroActions";

function Header() {

    return (
        <div className="w-full h-screen relative">
            <AnimationOrb
                hoverIntensity={0.5}    // How strong the wave-y distortion is on hover
                rotateOnHover={true}    // Whether the background rotates when hovered
                hue={179}                 // Base hue shift (0 means default color palette)
                forceHoverState={false} // When true, hover is always "on"
            />
            {/* SECTION: Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-rubik">
                <h1 className="text-4xl font-bold text-beige md:text-6xl animate-grow mb-2 md:mb-4">FlareAware</h1>
            </div>
            {/* SECTION: Motto / Tagline */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-rubik mt-2 whitespace-nowrap">
                <AnimationTyping />
            </div>
            {/* SECTION: Hero action buttons */}
            <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-[90%] md:top-[70%]">
                <HeroActions />
            </div>
            
        </div>
    )
}

export default Header;

