function SinglePricingCard({ pricing }) {
  const { name, description, price, works } = pricing;
  return (
    <div className="relative z-0 flex flex-col items-center p-8 border rounded-md bg-white shadow-xl">
      <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-600 dark:text-gray-50 bg-primary-theme-color text-white">
        {name}
      </span>
      <p className="my-6 text-4xl font-bold dark:text-violet-600">
        ${price}
        <span className="text-2xl font-medium text-light-text-color">
          /per month
        </span>
      </p>
      <p className="mt-3 mb-6 text-center text-base text-light-text-color">
        {description}
      </p>

      <hr className="w-[80%] mx-auto h-1 mb-5" />
      {/* ==== pricing works ==== */}
      <ul className="flex-1 space-y-2">
        {works.map((work, i) => (
          <li key={i} className="flex items-center space-x-2 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-violet-600 text-green-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              ></path>
            </svg>
            <span className="font-normal text-lg text-light-text-color">
              {work}
            </span>
          </li>
        ))}
      </ul>
      <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-600 hover:bg-primary-theme-color hover:text-white transition-all duration-200 ease-in-out text-primary-theme-color">
        Subscribe
      </button>
    </div>
  );
}

export default SinglePricingCard;
