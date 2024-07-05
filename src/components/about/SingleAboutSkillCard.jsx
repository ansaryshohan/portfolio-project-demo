const SingleAboutSkillCard = ({
  backgroundColor,
  textColor,
  progress,
  framework,
}) => {
  return (
    <div className={`w-[28%] ${backgroundColor} rounded-xl`}>
      <div className="inner bg-white mt-1 mx-1 p-10 flex flex-col items-center gap-3 rounded-lg">
        <h3 className="text-4xl text-heading-color font-bold">{progress}</h3>
        <p className={`${textColor} font-medium text-base`}>{framework}</p>
      </div>
    </div>
  );
};

export default SingleAboutSkillCard;
