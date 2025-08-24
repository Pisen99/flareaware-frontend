import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { GiDrop } from "react-icons/gi";
import { BsFire } from "react-icons/bs";
import { TbSoupFilled } from "react-icons/tb";
import { GiStomach } from "react-icons/gi";
import { BsInfoLg } from "react-icons/bs";
import { BiSolidHomeHeart } from "react-icons/bi";
import { FaToilet } from "react-icons/fa";
import { VscLocation } from "react-icons/vsc";

const Icons = {
    arrows: {
        down: <IoIosArrowDown />,
        up: <IoIosArrowUp />,
        prev: <IoIosArrowBack />,
        next: <IoIosArrowForward />,
        prevW: <RiArrowLeftWideFill />,
        nextW: <RiArrowRightWideFill />
    },
    symbols: {
        location: <VscLocation />,
        add: <IoIosAddCircle />,
        heart: <FaHeart />,
        list: <CiViewList />,
        food: <TbSoupFilled />,
        bowel: <GiStomach />,
        info: <BsInfoLg />,
        home: <BiSolidHomeHeart />,
        toilet: <FaToilet />,
    },
    rank: {
        pain: <BsFire />,
        blood: <GiDrop />
    }
};

export default Icons