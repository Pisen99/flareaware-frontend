import { TypeAnimation } from "react-type-animation";

function AnimationTyping() {

    return (
        <TypeAnimation
            sequence={[
                700,
                "Track",
                400,
                "Track, Manage",
                400,
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