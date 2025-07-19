import { TypeAnimation } from "react-type-animation";

function AnimationTyping() {

    return (
        <TypeAnimation
            sequence={[
                800,
                "Track",
                500,
                "Track, Manage",
                500,
                "Track, Manage & Control"
            ]}
            wrapper="span"
            speed={20}
            cursor={false}
            className="
            text-md text-beige
            md:text-4xl
            "
            repeat={0}
        >
        </TypeAnimation>
    )
};

export default AnimationTyping;