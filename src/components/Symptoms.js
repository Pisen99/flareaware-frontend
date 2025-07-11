const Symptoms = {
    foodLog: {
        consistency: {
            solid: "solid",
            boiled: "boiled",
            liquid: "liquid"
        },
        meats: {
            redMeat: "red meat",
            whiteMeat: "white meat",
            fish: "fish",
            shellfish: "shellfish"
        },
        triggers: {
            fried: "fried",
            gluten: "gluten",
            lactose: "lactose",
            fiber: "fiber",
            sugar: "sugar",
            alcohol: "alcohol",
            caffeine: "caffeine",
            spicy: "spicy"
        }
    },
    // BOWEL LOG
    bowelLog: {
        consistency: {
            hard: "hard",
            solid: "solid",
            creamy: "creamy",
            lumpy: "lumpy",
            liquid: "liquid"
        },
        color: {
            brown: "brown",
            orange: "orange",
            pale: "pale"
        },
        blood: {
            brightRed: "bright red",
            darkRed: "dark red",
            mucus: "mucus",
            clumps: "clumps",
            bloodLocation: {
                paperOnly: "on toilet paper",
                inWater: "in water",
                onStool: "on stool",
                mixedInStool: "mixed in stool"
            },
        },
        urgency: {
            noRush: "no rush",
            mild: "mild",
            urgent: "urgent",
            nightVisits: "night visits"
        },
        pain: {
            cramps: "cramps",
            stabbing: "stabbing",
            bloating: "bloating",
            gasPain: "gas pain",
        },
        other: {
            nausea: "nausea",
            vomit: "vomit",
            lostAppetite: "lost appetite",
            increasedAppetite: "increased appetite"
        }
    }
}

export default Symptoms;