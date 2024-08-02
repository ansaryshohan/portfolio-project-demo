function PortfolioCard({ portfolio }) {
  const { title, image, category } = portfolio;
  return (
    <div className="w-full shadow-xl bg-white">
      <div className="w-full  overflow-hidden">
      <img src={image} alt="" className="w-full h-[200px] hover:scale-125 transition-all" />
      </div>
      <div className="flex flex-col justify-between items-start p-8 pl-3 h-44">
        <h2 className="text-xl font-semibold text-heading-color text-left pb-4">{title}</h2>
        <p className=" text-sm font-medium text-light-text-color pb-2">{category}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
