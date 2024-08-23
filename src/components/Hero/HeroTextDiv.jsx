import { IoArrowForward } from "react-icons/io5";

const HeroTextDiv = () => {
  return (
    <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6 lg:w-1/2">
          <h3 className="text-golden-theme-color text-3xl sm:text-6xl font-bold">
            Hello,
          </h3>
          <h1 className="text-heading-color text-4xl sm:text-7xl font-bold">
            I Am Ansary.
          </h1>
          <h4 className="text-primary-theme-color text-xl sm:text-2xl font-semibold">
            Front-end REACT Developer
          </h4>
          <p className="text-light-text-color text-base sm:text-xl font-medium">
            I am a professional React.js developer. I can make responsive website from any figma design or convert any html template into react websites.
          </p>
          <div>
            <button className="bg-primary-theme-color flex items-center justify-center gap-4 text-white text-base sm:text-xl font-semibold px-4 py-2 sm:px-8 sm:py-3  rounded-3xl sm:rounded-[40px] ">
              Hire Me <IoArrowForward />
            </button>
          </div>
        </div>
  );
};

export default HeroTextDiv;