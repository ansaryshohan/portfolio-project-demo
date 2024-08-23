

const HeroIconDiv = ({icon}) => {

  return (
      <div className="md:w-28 md:h-28 lg:w-20 lg:h-20 rounded-2xl  bg-white bg-opacity-85 flex justify-center items-center">

      <img src={icon} alt="" className="w-9/12 rounded-lg" />   

      </div>
  );
};

export default HeroIconDiv;