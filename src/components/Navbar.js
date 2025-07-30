import React from "react";
import NavCards from "./NavCards";

function Navbar() {
    return (
        <div className="sticky bottom-1 flex justify-center w-full px-4">
            <div className="md:max-w-[50%] lg:max-w-[30%] w-full">
                <NavCards />
            </div>
        </div>
    )
};

export default Navbar