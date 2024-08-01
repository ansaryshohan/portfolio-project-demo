
const TopHeading = ({title,paragraph}) => {
  return (
    <div className="w-full md:w-2/3 container md:px-20 text-center pt-32 pb-20 flex flex-col gap-9">
      <h3 className="text-heading-color text-5xl font-bold">{title}</h3>
      <p className="text-light-text-color text-lg font-medium  mx-auto leading-8">{paragraph}</p>     
    </div>
  );
};

export default TopHeading;