import React from "react";
import Cards from "./Cards";

function Navbar() {

    return (
        <>
            <div className="grid grid-flow-col grid-cols-3 items-center gap-2 px-2 py-4">
                <Cards />
            </div>
        </>
    )
};

export default Navbar;