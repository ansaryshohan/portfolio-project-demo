import { forwardRef } from "react";

const HeroSection =forwardRef( (props,ref) => {
  return (
    <div className="w-full h-screen gradient-to-right" ref={ref}>
      this is hero
    </div>
  );
})

export default HeroSection;