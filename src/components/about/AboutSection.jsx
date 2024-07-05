import { forwardRef } from "react";

const AboutSection = forwardRef((props,ref) => {
  return (
    <div className="w-full h-screen bg-lime-300" ref={ref}>
      thi sis the about section
    </div>
  );
});

AboutSection.displayName="AboutSection";

export default AboutSection;