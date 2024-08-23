const LeftAboutSection = () => {
  return (
    <div className="w-full lg:w-2/5 px-4 py-10">
      <div className="relative max-w-[480px] h-full mx-auto md:mx-0">
        {/* experience text div */}
        <div className="about-left-bgColor max-w-[75%] xs:max-w-80 mx-auto md:mx-0 text-center px-6 xs:px-12 pt-12 pb-32 xs:pb-44 rounded-xl">
          <h2 className="font-bold text-6xl xs:text-9xl text-service-golden-color">03</h2>
          <p className="font-medium text-base xs:text-xl text-primary-text-color">
            Years of Experience
          </p>
        </div>
        {/* absolute div section  */}
        <div className="absolute bottom-5 xs:bottom-10 right-0 max-w-40 xs:max-w-72 rounded-xl p-3 xxs:p-5 flex items-center gap-2 bg-white">
          <h3 className="text-primary-theme-color text-xl xs:text-4xl w-1/2 font-bold ">
            100%
          </h3>
          <p className="text-primary-text-color text-xs xxs:text-xs xs:text-base w-1/2">
            Clients Satisfaction{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftAboutSection;
