import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icons from "./Icons";
import FoodLogSelections from "./FoodLogSelections";

function SymptomForm() {
    // State: Index of the currently selected category in FoodLogSelections
    const [index, setIndex] = useState(0);
    // State: Direction of animation (1 for forward, -1 for backward)
    // Used to determine the direction of the slide transition
    const [direction, setDirection] = useState(0);

    // Get the currently selected item based on the index
    const selection = FoodLogSelections[index];

    // Handler: Move to the next category
    // Sets direction to 1 (next) & loops back to 0 after the last item
    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % FoodLogSelections.length);
    };

    // Handler: Move to the prev category
    // Sets direction to -1 (backward) & loops to the last item
    const handlePrev = () => {
        setDirection(-1);
        setIndex((prev) =>
            prev === 0 ? FoodLogSelections.length - 1 : prev - 1
        );
    };

    // Animation variants: Sliding transitions using Framer Motion
    // Controls how the motion.div enters, stays, & exits
    const animationVariants = {
        enter: (direction) => ({
            // NEW category enters: slide in from the left or right
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            position: "absolute",
            width: "100%",
        }),
        // When active/visible on screen
        center: {
            x: 0,
            opacity: 1,
            position: "relative",
            width: "100%",
        },
        // Old category exits: slide out in the opposite direction of entry
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            position: "absolute",
            width: "100%",
        }),
    };

    return (
        <div className="relative overflow-hidden mx-4 mt-4 min-h-[300px]">
            {/* Animation: Categories & selections */}
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={selection.category}
                    custom={direction}
                    variants={animationVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="bg-gray-500 text-beige rounded-xl shadow-xl/30"
                >
                    {/* Display: Category & prev/next buttons*/}
                    <div className="flex justify-around bg-gray-600 text-center rounded-t-xl py-4">
                        <button onClick={handlePrev}>{Icons.arrows.prev}</button>
                        <span>{selection.category}</span>
                        <button onClick={handleNext}>{Icons.arrows.next}</button>
                    </div>
                    {/* Display: Items for this category */}
                    {selection.items.map((label, i) => (
                        <div key={i} className="grid grid-cols-2 items-center p-4">
                            <span>{label}</span>
                            <span className="justify-self-end">{Icons.symbols.add}</span>
                        </div>
                    ))}

                    {/* hide for now */}
                    <div className="hidden">
                        {/* Display: SUB Label */}
                        <div className="flex flex-col justify-center text-center">
                            <span className="text-gray-600 text-sm border-gray-600/30 border-t-2 pt-2">
                                subLabel
                            </span>
                        </div>
                        {/* Display: SUB Symptoms */}
                        <div className="grid grid-cols-2 items-center p-4">
                            <span>subSymptom</span>
                            <div className="flex justify-end items-center gap-1 text-xl">
                                <span className="text-red-400">{Icons.rank.blood}</span>
                                <span className="text-red-600">{Icons.rank.blood}</span>
                                <span className="text-red-900">{Icons.rank.blood}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default SymptomForm;
