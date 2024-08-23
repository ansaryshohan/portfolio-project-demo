import { FaArrowRightLong } from "react-icons/fa6";

function SingleWorkExperience({ work }) {
  const { years, companyLogo, position, location, jobType } = work;
  return (
    <div className="flex flex-col justify-center align-center gap-8 md:flex-row md:justify-around md:items-center md:gap-5 work-experience-card">
      {/* years */}
      <div className="md:w-[20%] w-full mx-auto">
        <h3 className="text-heading-color text-lg xs:text-3xl text-center font-bold leading-9">{years}</h3>
      </div>
      {/* image of the company */}
      <div className="md:w-[25%] xs:w-4/6 w-full mx-auto">
        <div className="w-5/6 sm:w-1/2  rounded-full overflow-hidden mx-auto">
        <img src={companyLogo} alt={"company logo"}  className=" object-cover object-center w-full "/>
        </div>
      </div>
      {/* job description */}
      <div className="md:w-[50%] xs:w-4/6 w-full mx-auto text-center">
        <h3 className="text-heading-color text-lg xs:text-2xl  font-bold leading-7">{position}</h3>
        <p className="text-work-position-color text-base font-normal mt-3 leading-4">
          {location} <span className="text-[#727272]">{jobType ? `(${jobType})` : ""}</span>
        </p>
      </div>
       {/* go to website=== */}
      {/* <p className="service-arrow flex items-center justify-center gap-4 hover:text-service-golden-color text-base font-semibold uppercase md:w-[20%] w-4/6 mx-auto">
        <span className="text-sm">
          <FaArrowRightLong />
        </span>{" "}
        Go to Website{" "}
      </p>  */}
    </div>
  );
}

export default SingleWorkExperience;
