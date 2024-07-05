import { forwardRef } from "react";

import HeroImageDiv from "./HeroImageDiv";
import HeroTextDiv from "./HeroTextDiv";

const HeroSection = forwardRef((props, ref) => {
  return (
    <section className="w-full min-h-screen gradient-to-right pt-48 pb-20 " ref={ref}>
      <div className="flex flex-col justify-between items-center gap-10 lg:flex-row container w-full h-full">
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
