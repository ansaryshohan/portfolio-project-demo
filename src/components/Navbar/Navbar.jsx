import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = ({ onClickScrollHandler, currentActiveNav }) => {
  const [navColor, setNavColor] = useState(false);
  // ======= navbar background color change on scroll =======
  useEffect(() => {
    function scrollFunc() {
      if (window.scrollY >= 100) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    }

    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <nav
      className={`w-full ${
        navColor ? "bg-white" : "bg-transparent"
      } fixed z-50 w-full`}
    >
      <div className=" flex justify-between items-center lg:gap-3 lg:container h-20 py-4 lg:px-20 px-3 ">
        {/* hamburger menu */}
        <div className="lg:hidden">
          <div className="bg-primary-theme-color flex items-center justify-center  text-white py-1 px-2 rounded-md  cursor-pointer w-8 h-6">
            <AiOutlineMenu size={15} />
          </div>
        </div>

        {/* logo */}
        <div className="flex justify-center lg:justify-start items-center flex-1 lg:flex-auto gap-2 cursor-pointer w-auto">
          <div className="w-6 h-6 xs:w-10 xs:h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full ">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div className="font-bold text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-5xl text-heading-color">
            Ansary.
          </div>
        </div>

        {/* navbar menu */}
        <div className=" h-full ">
          <ul className="hidden lg:flex justify-between items-center gap-2 cursor-pointer capitalize font-medium text-base text-black/80 px-4 navMenu h-full">
            <li
              className={`${currentActiveNav === 1 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(1)}
            >
              home
            </li>
            <li
              className={`${currentActiveNav === 2 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(2)}
            >
              about
            </li>
            <li
              className={`${currentActiveNav === 3 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(3)}
            >
              service
            </li>
            <li
              className={`${currentActiveNav === 4 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(4)}
            >
              portfolio
            </li>
            <li
              className={`${currentActiveNav === 5 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(5)}
            >
              contact
            </li>
            <li
              className={`${currentActiveNav === 6 ? "active" : ""}`}
              onClick={() => onClickScrollHandler(6)}
            >
              blog
            </li>
          </ul>
        </div>

        {/* resume button */}
        <div className=" flex items-center justify-end w-auto">
          <button className="bg-primary-theme-color flex items-center justify-center gap-2 text-white px-2 py-1 xs:px-3 xs:py-2 lg:px-5 lg:py-2  rounded-2xl lg:rounded-[40px] ">
            {" "}
            <span className="font-semibold text-xs sm:text-sm lg:text-lg  ">Resume</span>
            <FaArrowDown size={8} />{" "}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
