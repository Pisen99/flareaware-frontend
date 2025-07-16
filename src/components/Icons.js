import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { GiDrop } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiStomach } from "react-icons/gi";

const Icons = {
    arrows: {
        down: <FaArrowDown />,
        prev: <IoIosArrowBack />,
        next: <IoIosArrowForward />
    },
    symbols: {
        add: <IoIosAddCircle />,
        heart: <FaHeart />,
        list: <CiViewList />,
        food: <IoFastFoodOutline />,
        bowel: <GiStomach />
    },
    rank: {
        pain: <BsFire />,
        blood: <GiDrop />
    }
};

export default Icons