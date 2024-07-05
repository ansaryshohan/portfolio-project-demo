const LeftAboutSection = () => {
  return (
    <div className="w-full lg:w-2/5 px-4 py-10">
      <div className="relative max-w-[480px] h-full">
        {/* experience text div */}
        <div className="about-left-bgColor max-w-80 text-center px-12 pt-12 pb-44 rounded-xl">
          <h2 className="font-bold text-9xl text-service-golden-color">03</h2>
          <p className="font-medium text-xl text-primary-text-color">
            Years of Experience
          </p>
        </div>
        {/* absolute div section  */}
        <div className="absolute bottom-10 right-0 max-w-72 rounded-xl p-5 flex items-center gap-2 bg-white">
          <h3 className="text-primary-theme-color text-4xl w-1/2 font-bold ">
            100%
          </h3>
          <p className="text-primary-text-color text-base w-1/2">
            Clients Satisfaction{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftAboutSection;
