import headerImg from "../assets/img/headerImg.png";
import bowelLog from "../assets/img/bowelLog.png";
import foodLog from "../assets/img/foodLog.png";
import other from "../assets/img/other.png";

const Images = {
    header: {
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover" 
    },
    navbar: {
        bowelLog: {
            backgroundImage: `url(${bowelLog})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        foodLog: {
            backgroundImage: `url(${foodLog})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        other: {
            backgroundImage: `url(${other})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }
    }
};

export default Images;
