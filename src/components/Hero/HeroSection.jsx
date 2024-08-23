import { forwardRef, useEffect } from "react";
import HeroImageDiv from "./HeroImageDiv";
import HeroTextDiv from "./HeroTextDiv";
import { useInView } from "framer-motion"

const HeroSection = forwardRef(({setCurrentActiveNav}, ref) => {
  const isInView= useInView(ref,{amount:.4});

  useEffect(() => {
    isInView ? setCurrentActiveNav(1):setCurrentActiveNav(1);
  }, [isInView,setCurrentActiveNav])

  return (
    <section
      className="w-full min-h-screen gradient-to-right pt-28 sm:pt-36 lg:pt-48 pb-20"
      ref={ref}
    >
      <div className="flex flex-col justify-between items-center gap-10 lg:flex-row container md:px-20 w-full h-full">
        {/* text of hero */}

        <HeroTextDiv />

        {/* hero image */}
        <HeroImageDiv />
      </div>
    </section>
  );
});
HeroSection.displayName = "HeroSection";

export default HeroSection;
