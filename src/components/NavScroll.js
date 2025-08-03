import React, { useState, useEffect, useRef } from "react";
import NavCards from "./NavCards";

function NavScroll() {
    const [showNav, setShowNav] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            let currentScroll = window.scrollY;

            if(lastScrollY.current > currentScroll) {
                setShowNav(false);
            } else if(lastScrollY.current < currentScroll) {
                setShowNav(true);
            }
            lastScrollY.current = currentScroll;
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <div className="">
            {showNav && <NavCards />}
        </div>
            
    )
};

export default NavScroll;