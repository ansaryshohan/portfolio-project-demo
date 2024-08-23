
const TopHeading = ({title,paragraph}) => {
  return (
    <div className="w-full container md:px-20 text-center pt-16 md:pt-32 pb-20 flex flex-col gap-9">
      <h3 className="text-heading-color text-2xl sm:text-4xl lg:text-5xl font-bold md:w-2/3 mx-auto">{title}</h3>
      <p className="text-light-text-color text-base sm:text-lg font-medium  mx-auto leading-5 sm:leading-8 w-5/6">{paragraph}</p>     
    </div>
  );
};

export default TopHeading;