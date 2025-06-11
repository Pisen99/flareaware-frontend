import React from "react";
import Cards from "./Cards";

function Navbar() {

    return (
        <>
            <div className="min-h-screen bg-beige grid grid-flow-row grid-rows-3 items-center gap-2 p-4">
                <Cards />
            </div>
        </>
    )
};

export default Navbar;