import { FaArrowDown } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { GiDrop } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { TbSoupFilled } from "react-icons/tb";
import { GiStomach } from "react-icons/gi";
import { BsInfoLg } from "react-icons/bs";
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaToiletPaper } from "react-icons/fa";


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
        food: <TbSoupFilled />,
        bowel: <GiStomach />,
        info: <BsInfoLg />,
        home: <BiSolidHomeHeart />,
        toilet: <FaToiletPaper />,
    },
    rank: {
        pain: <BsFire />,
        blood: <GiDrop />
    }
};

export default Icons