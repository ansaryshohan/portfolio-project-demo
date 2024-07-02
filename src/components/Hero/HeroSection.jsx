import { forwardRef } from "react";
import heroImg from "../../assets/profile-pic.jpg";
import HeroTextDiv from "./HeroTextDiv";
import psIcon from "../../assets/ps-icon.svg";
import aiIcon from "../../assets/ai-icon.svg";
import diamondIcon from "../../assets/diamond.svg";
import HeroIconDiv from "./HeroIconDiv";


const HeroSection = forwardRef((props, ref) => {
  return (
    <section className="w-full h-screen gradient-to-right pt-24 " ref={ref}>
      <div className="flex flex-col justify-between items-center gap-10 lg:flex-row container w-full h-full">
        {/* text of hero */}
        <HeroTextDiv />

        {/* hero image */}
        <div className="lg:w-1/2 h-full flex justify-center items-center">
          <div className="border-2 border-green-900 relative">
            {/* hero image div */}
            <div className="w-[75vh] h-[75vh] rounded-full overflow-hidden border-2 border-purple-900">
              <img
                src={heroImg}
                alt="this is the profile pic of ronald"
                className="w-full object-cover object-center"
              />
            </div>
            {/* icon images */}
            <div className="absolute top-10 left-0">
            <HeroIconDiv icon={psIcon}/>
            </div>
            <div className="absolute top-10 right-0">
            <HeroIconDiv icon={aiIcon}/>
            </div>
            <div className="hidden">
            <HeroIconDiv icon={diamondIcon}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
HeroSection.displayName = "HeroSection";

export default HeroSection;
