import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";

const Icons = {
    arrows: {
        arrowDown: <FaArrowDown />,
        arrowBack: <IoIosArrowBack />,
        arrowForward: <IoIosArrowForward />
    },
    symbols: {
        add: <IoIosAddCircle />,
        heart: <FaHeart />,
        list: <CiViewList />
    }
};

export default Icons