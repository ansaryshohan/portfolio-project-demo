import { forwardRef } from "react";

const PortfolioSection = forwardRef( (props, ref) => {
  return (
    <div className="w-full h-screen bg-purple-500" ref={ref}>
      portfolio
    </div>
  );
});

PortfolioSection.displayName = 'PortfolioSection';
export default PortfolioSection;
