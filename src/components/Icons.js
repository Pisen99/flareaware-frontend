import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { GiDrop } from "react-icons/gi";
import { BsFire } from "react-icons/bs";

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
    },
    rank: {
        pain: <BsFire />,
        blood: <GiDrop />
    }
};

export default Icons