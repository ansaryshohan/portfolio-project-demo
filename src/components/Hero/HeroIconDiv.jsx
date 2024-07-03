

const HeroIconDiv = ({icon}) => {
  return (
      <div className="w-24 h-24 rounded-2xl  bg-white flex justify-center items-center">
      <img src={icon} alt="" className="w-8/12" />
      </div>
  );
};

export default HeroIconDiv;