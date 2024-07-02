import { FaArrowDown } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Navbar = ({ onScrollHandler }) => {
  return (
    <nav className="w-full bg-transparent fixed">
      <div className=" flex justify-between items-center gap-3 container h-20 py-2 ">
        {/* hamburger menu */}
        <div className="w-1/3 lg:hidden">
        <div className="bg-primary-theme-color flex items-center justify-center  text-white py-1 px-2 rounded-md  cursor-pointer w-10 h-8">
          <AiOutlineMenu size={20}/>
        </div>
        </div>

        {/* logo */}
        <div className="flex justify-start lg:justify-center items-center gap-2 cursor-pointer w-1/3 lg:w-auto">
          <div className=" w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div className="font-bold text-2xl md:text-3xl lg:text-5xl text-heading-color">Elito.</div>
        </div>

        {/* navbar menu */}
        <div className=" h-full">
          <ul className="hidden lg:flex justify-between items-center gap-2 cursor-pointer capitalize font-medium text-base text-black/80 px-4 navMenu h-full">
            <li className="active" onClick={() => onScrollHandler(1)}>home</li>
            <li onClick={() => onScrollHandler(2)}>about</li>
            <li onClick={() => onScrollHandler(3)}>service</li>
            <li onClick={() => onScrollHandler(4)}>portfolio</li>
            <li onClick={() => onScrollHandler(5)}>contact</li>
            <li onClick={() => onScrollHandler(6)}>blog</li>
          </ul>
        </div>

        {/* button */}
        <div className=" flex items-center justify-center w-1/3 lg:w-auto">
          <button
            className="bg-primary-theme-color flex items-center justify-center gap-2 text-white px-2 py-2 lg:px-5 lg:py-2  rounded-2xl lg:rounded-[40px] "
          >
            {" "}
            <span className="font-semibold text-sm lg:text-lg  ">Resume</span>
            <FaArrowDown size={12} />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
