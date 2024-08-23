import { FaArrowRightLong } from "react-icons/fa6";

function BlogCard({blog}) {
  const{title,date,image}=blog;
  return (
    <div className="w-5/6 text-left rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      <img
        src={image}
        alt={title}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 pl-1">
        <div className="space-y-2">
          <button
            type="button"
            className="py-1 px-3 font-normal text-sm tracking-wide dark:bg-violet-600 dark:text-gray-50 bg-[#3c3c3c] text-white"
          >
            {date}
          </button>
          <h2 className="text-xl font-bold tracking-wide pt-3">
            {title}
          </h2>
          <p className="service-arrow flex items-center justify-start gap-5 hover:text-service-golden-color text-base font-medium uppercase pt-5">
            <span className="text-sm">
              <FaArrowRightLong />
            </span>{" "}
            <small className="">Learn More </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
