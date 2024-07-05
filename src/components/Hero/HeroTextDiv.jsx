import { IoArrowForward } from "react-icons/io5";

const HeroTextDiv = () => {
  return (
    <div className="text-center lg:text-left flex flex-col gap-6 lg:w-1/2">
          <h3 className="text-golden-theme-color text-6xl font-bold">
            Hello,
          </h3>
          <h1 className="text-heading-color text-7xl font-bold">
            I Am Ronald.
          </h1>
          <h4 className="text-primary-theme-color text-4xl font-semibold">
            UI/UX Designer
          </h4>
          <p className="text-light-text-color text-xl font-medium">
            Must explain to how all this mistaken idea denouncing pleasure pain
            the system and expound the actua.
          </p>
          <div>
            <button className="bg-primary-theme-color flex items-center justify-center gap-4 text-white font-semibold px-2 py-4 lg:px-8 lg:py-4  rounded-2xl lg:rounded-[40px] ">
              Hire Me <IoArrowForward />
            </button>
          </div>
        </div>
  );
};

export default HeroTextDiv;