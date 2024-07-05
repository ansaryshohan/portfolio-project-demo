import { FaArrowRightLong } from "react-icons/fa6";

const SingleServiceCard = ({singleService}) => {
  const{title,description,icon}= singleService;
  return (
    <div className="flex flex-col gap-8 items-center justify-center text-center px-4 py-10 border-2 border-border-color rounded-2xl w-full lg:w-1/3">
      {/* icon div of the card */}
      <div className="service-icon-div hover:bg-primary-theme-color hover:text-white h-32 w-32 rounded-full flex justify-center items-center text-6xl font-normal text-service-golden-color">
      <i className={`fi ${icon}`}></i>
      </div>
      {/* texts of the card */}
      <div className="flex flex-col gap-5 justify-center items-center">
        <h4 className="font-bold text-xl text-heading-color">{title}</h4>
        <p className="font-normal text-sm text-light-text-color">{description}</p>
        <p className="service-arrow flex items-center justify-center gap-8 hover:text-service-golden-color text-base font-bold uppercase"><span className="text-sm"><FaArrowRightLong/></span> Learn More </p>
      </div>
    </div>
  );
};

export default SingleServiceCard;