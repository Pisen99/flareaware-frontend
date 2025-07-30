import React from "react";
import NavCards from "./NavCards";

function Navbar() {
    return (
        <div className="sticky bottom-1 flex justify-center">
            <div>
                <NavCards />
            </div>
        </div>
    )
};

export default Navbar;