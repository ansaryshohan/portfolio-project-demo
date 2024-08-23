import { forwardRef, useEffect } from "react";
import PortfolioSlider from "./PortfolioSlider";
import { useInView } from "framer-motion";

const PortfolioSection = forwardRef(({setCurrentActiveNav}, ref) => {
  const isInView= useInView(ref,{amount:.4});

  useEffect(() => {
    isInView?setCurrentActiveNav(4):setCurrentActiveNav(0);
  }, [isInView,setCurrentActiveNav])

  return (
    <section className="portfolio-section w-full min-h-screen pt-2 pb-20 md:pb-32" ref={ref}>
      <div className="container mt-10 md:mt-20 md:px-20">
        {/* upper text section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 md:gap-10 pt-5 md:pt-10 pb-20">
          {/* left text div */}
          <div>
            <h3 className="text-heading-color text-2xl md:text-5xl font-bold mb-5 text-center md:text-left">
              Recent Work.
            </h3>
            <p className="text-light-text-color text-base md:text-lg font-medium leading-6 md:leading-8 text-center md:text-left">
              Must explain to you how all this mistaken <br /> idea pleasure
              born and give you a <br /> complete account.
            </p>
          </div>
          {/* right icon div */}
          <div className="p-3 border border-service-golden-color border-dashed rounded-full">
            <div className="h-40 w-40 rounded-full bg-[#faf8e0] flex justify-center items-center">
              <i className="fi fi-bs-challenge-alt  text-7xl font-light text-service-golden-color"></i>
            </div>
          </div>
        </div>
        {/* actual portfolio section */}
        <PortfolioSlider />
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";
export default PortfolioSection;
