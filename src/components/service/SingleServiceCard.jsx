import { FaArrowRightLong } from "react-icons/fa6";

const SingleServiceCard = ({singleService}) => {
  const{title,description,icon}= singleService;
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center px-4 pt-8 pb-10 sm:pt-10 sm:pb-16 border-2 border-border-color rounded-2xl w-5/6 mx-auto lg:w-1/3">
      {/* icon div of the card */}
      <div className="service-icon-div hover:bg-primary-theme-color hover:text-white w-24 h-24 sm:h-32 sm:w-32 rounded-full grid place-content-center text-3xl sm:text-5xl font-normal text-service-golden-color">
        <div className="grid place-content-center">
           <i className={`fi ${icon}`}></i>
        </div>
      </div>
      {/* texts of the card */}
      <div className="flex flex-col gap-3 md:gap-5 justify-center items-center">
        <h4 className="font-extrabold text-base sm:text-xl text-heading-color">{title}</h4>
        <p className="font-normal text-sm text-light-text-color">{description}</p>
        <p className="service-arrow flex items-center justify-center gap-3 sm:gap-8 hover:text-service-golden-color text-sm sm:text-base font-bold uppercase"><span className="text-sm"><FaArrowRightLong/></span> Learn More </p>
      </div>
    </div>
  );
};

export default SingleServiceCard;