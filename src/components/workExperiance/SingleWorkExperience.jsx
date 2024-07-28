import { FaArrowRightLong } from "react-icons/fa6";

function SingleWorkExperience({ work }) {
  const { years, companyLogo, position, location, jobType } = work;
  return (
    <div className="flex flex-col justify-center align-center gap-8 md:flex-row md:justify-around md:items-center md:gap-5 work-experience-card">
      {/* years */}
      <div className="w-[20%]">
        <h3 className="text-heading-color text-3xl text-center font-bold leading-9">{years}</h3>
      </div>
      {/* image of the company */}
      <div className="w-[15%]">
        <div className="w-1/2  rounded-full overflow-hidden">
        <img src={companyLogo} alt={"company logo"}  className=" object-cover object-center w-full "/>
        </div>
      </div>
      {/* job description */}
      <div className="w-[35%]">
        <h3 className="text-heading-color text-2xl  font-bold leading-7">{position}</h3>
        <p className="text-work-position-color text-base font-normal mt-3 leading-4">
          {location} <span className="text-[#727272]">{jobType ? `(${jobType})` : ""}</span>
        </p>
      </div>
      {/* go to website=== */}
      <p className="service-arrow flex items-center justify-center gap-4 hover:text-service-golden-color text-base font-semibold uppercase w-[20%]">
        <span className="text-sm">
          <FaArrowRightLong />
        </span>{" "}
        Go to Website{" "}
      </p>
    </div>
  );
}

export default SingleWorkExperience;
