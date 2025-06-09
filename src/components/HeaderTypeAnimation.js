import { TypeAnimation } from "react-type-animation";

function HeaderTypeAnimation() {

    return (
        <TypeAnimation
            sequence={[
                "Track",
                500,
                "Track, Manage",
                500,
                "Track, Manage & Take Control"
            ]}
            wrapper="span"
            speed={20}
            cursor={false}
            className="text-xl text-beige"
            repeat={0}
        >
        </TypeAnimation>
    )
};

export default HeaderTypeAnimation;