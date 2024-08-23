import SingleAboutSkillCard from "./SingleAboutSkillCard";

const AboutSkillCards = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 ">
      {/* card 1 */}
      <SingleAboutSkillCard
        textColor={"text-service-golden-color"}
        backgroundColor={"golden-gradient-background"}
        progress={"98%"}
        framework={"JavaScript"}
      />
      {/* card 2 */}
      <SingleAboutSkillCard
        textColor={"text-green-700"}
        backgroundColor={"green-gradient-background"}
        progress={"80%"}
        framework={"React.js"}
      />
      {/* card 3 */}
      <SingleAboutSkillCard
        textColor={"text-pink-500"}
        backgroundColor={"peach-gradient-background"}
        progress={"95%"}
        framework={"Express.js"}
      />
      {/* card 4 */}
      <SingleAboutSkillCard
        textColor={"text-orange-600"}
        backgroundColor={"orange-gradient-background"}
        progress={"85%"}
        framework={"Redux"}
      />
      {/* card 5 */}
      <SingleAboutSkillCard
        textColor={"text-blue-600"}
        backgroundColor={"blue-gradient-background"}
        progress={"75%"}
        framework={"Node.js"}
      />
      {/* card 6 */}
      <SingleAboutSkillCard
        textColor={"text-purple-600"}
        backgroundColor={"purple-gradient-background"}
        progress={"80%"}
        framework={"MongoDB"}
      />
    </div>
  );
};

export default AboutSkillCards;
