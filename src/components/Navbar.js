import React from "react";
import Button from "./Button";
import Images from "./Images";

function Navbar() {

    return (
        <>
            <div className="min-h-screen bg-beige grid grid-flow-row grid-rows-3 items-center gap-2 p-4">
                <div className="w-full h-full row-span-1">
                    <div style={Images.navbar.bowelLog} className="flex flex-col border-beige shadow-md border-2 rounded-sm h-full">
                        <div className="flex flex-col items-center justify-evenly w-full h-full uppercase">
                            <h2>Bowel Log</h2>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full row-span-1">
                    <div style={Images.navbar.foodLog} className="border-beige shadow-md border-2 rounded-sm h-full">
                        <div className="flex flex-col items-center justify-evenly w-full h-full uppercase">
                            <h2>Food Log</h2>
                            <p>+</p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full row-span-1">
                    <div style={Images.navbar.other} className="border-beige shadow-md border-2 rounded-sm h-full">
                        <div className="flex flex-col items-center justify-evenly w-full h-full uppercase">
                            <h2>Other</h2>
                        </div>
                    </div>
                </div>


                {/* <Button label="Bowel Log" variant="secondary" onClick={() => console.log("Bowel Log")}/>
                <Button label="Food Log" variant="secondary" onClick={() => console.log("Food Log")}/>
                <Button label="Other" variant="secondary" onClick={() => console.log("Other")}/> */}
            </div>
        </>
    )
};

export default Navbar;