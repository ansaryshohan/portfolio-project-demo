import { forwardRef, useEffect } from "react";
import leftShape from "../../assets/about-shape1.png";
import rightShape from "../../assets/about-shape2.png";
import AboutSkillCards from "./AboutSkillCards";
import LeftAboutSection from "./LeftAboutSection";
import { useInView } from "framer-motion";

const AboutSection = forwardRef(({setCurrentActiveNav}, ref) => {
  const isInView= useInView(ref,{amount:.4});

  useEffect(() => {
    isInView?setCurrentActiveNav(2):setCurrentActiveNav(0);
  }, [isInView,setCurrentActiveNav])

  return (
    <div
      className="w-full min-h-screen gradient-to-left relative pt-60 pb-32 z-10"
      ref={ref}
    >
      {/* shapes of the background 1*/}
      <div className="absolute left-0 top-12 -z-10">
        <img src={leftShape} alt="background curve shape of about" />
      </div>
      {/* shapes of the background 2*/}
      <div className="absolute bottom-0 right-0 -z-10">
        <img src={rightShape} alt="background curve shape of about" />
      </div>
      {/* content of this section */}
      <div className="container md:px-20 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 h-full">
        {/* image type text div -left section */}
        <LeftAboutSection />
        {/* text div of about -right section */}
        <div className="w-full lg:w-7/12 px-2">
          {/* heading of -right section */}
          <div className="flex flex-col gap-5 mb-10">
            <h3 className="text-5xl font-semibold text-heading-color ">
              My Advantage
            </h3>
            <p className="text-base font-medium text-primary-text-color">
              Must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account the system and expound the actual and praising pain was
              born.
            </p>
          </div>
          {/* skill boxes -right section */}
          <AboutSkillCards />
        </div>
      </div>
    </div>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
