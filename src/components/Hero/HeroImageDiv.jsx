import { GoShieldCheck } from "react-icons/go";
import aiIcon from "../../assets/ai-icon.svg";
import diamondIcon from "../../assets/diamond.svg";
import heroImg from "../../assets/profile-pic.jpg";
import psIcon from "../../assets/ps-icon.svg";
import HeroIconDiv from "./HeroIconDiv";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroImageDiv = () => {

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hero-icon", {
      x: -10,
      y: -10,
      duration: 3,
      repeat: -1,
      ease: "sine.inOut",
      yoyo: true,
    });
  });

  return (
    <div className="lg:w-1/2 h-full flex justify-center items-center">
          <div className=" relative">
            {/* hero image div */}
            <div className="w-[75vh] h-[75vh] rounded-full overflow-hidden">
              <img
                src={heroImg}
                alt="this is the profile pic of ronald"
                className="w-full object-cover object-center"
              />
            </div>
            {/* icon images */}
            <div className="absolute top-12 left-4 hero-icon">
              <HeroIconDiv icon={psIcon} />
            </div>
            <div className="absolute top-12 right-5 hero-icon">
              <HeroIconDiv icon={aiIcon} />
            </div>
            <div className="absolute bottom-16 right-10 hero-icon">
              <HeroIconDiv icon={diamondIcon} />
            </div>
            {/* floating text div */}
            <div className="bg-white flex justify-center gap-4 items-center  font-semibold px-2 py-4 lg:px-6 lg:py-2  rounded-2xl lg:rounded-[40px] absolute bottom-16 left-0 hero-icon">
              <div className="font-extrabold">
                <GoShieldCheck color="#59C378" size={50} />
              </div>
              <div className="flex flex-col w-10/12">
                <h3 className="font-semibold text-2xl text-heading-color">
                  1500+
                </h3>
                <p className="font-medium text-lg text-light-text-color">
                  Complete Project
                </p>
              </div>
            </div>
          </div>
        </div>
  );
};

export default HeroImageDiv;