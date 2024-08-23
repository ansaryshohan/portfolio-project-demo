import { GoShieldCheck } from "react-icons/go";
import aiIcon from "../../assets/javascript-icon.svg";
import diamondIcon from "../../assets/node.svg";
import heroImg from "../../assets/my-pic.jpg";
import psIcon from "../../assets/react-icon.svg";
import HeroIconDiv from "./HeroIconDiv";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import {easeInOut, motion} from "framer-motion"

const HeroImageDiv = () => {

  const IconVariant = {
    initial:{
      x:10,
      y:10
    },
    animate:{
      x:-10,
      y:-10,
      transition:{
        duration:2,
        repeat:Infinity,
        repeatType: "reverse",
        ease: easeInOut,
      }
    }
  } 

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.from(".hero-icon", {
  //     x: -10,
  //     y: -10,
  //     duration: 3,
  //     repeat: -1,
  //     ease: "sine.inOut",
  //     yoyo: true,
  //   });
  // });

  return (
    <div className="lg:w-1/2 h-full flex justify-center items-center">
          <div className=" relative">
            {/* hero image div */}
            <div className="w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[60vw] lg:w-[35vw] lg:h-[35vw]  rounded-full overflow-hidden border-8 border-sky-200">
              <img
                src={heroImg}
                alt="this is the profile pic of ronald"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* icon images that will float with animation */}
            <motion.div className="absolute top-20 left-4 hidden md:block" variants={IconVariant} initial="initial" animate="animate" >
            <HeroIconDiv icon={psIcon}/>
            </motion.div>
            <motion.div className="absolute top-20 right-5 hidden md:block" variants={IconVariant} initial="initial" animate="animate">
              <HeroIconDiv icon={aiIcon} />
            </motion.div>
            <motion.div className="absolute md:bottom-10 md:-right-3 lg:bottom-5 lg:right-2 hidden md:block" variants={IconVariant} initial="initial" animate="animate">
              <HeroIconDiv icon={diamondIcon} />
            </motion.div>
            {/* floating text div */}
            <motion.div className="bg-white md:flex justify-center gap-2 items-center  font-semibold px-6 py-3  rounded-2xl lg:rounded-[40px] absolute md:bottom-10 md:left-2 lg:bottom-5 lg:-left-4 hidden" variants={IconVariant} initial="initial" animate="animate">
              <div className="font-extrabold">
                <GoShieldCheck color="#59C378" size={30} />
              </div>
              <div className="flex flex-col w-10/12">
                <h3 className="font-semibold text-xl text-heading-color">
                  150+
                </h3>
                <p className="font-medium text-sm text-light-text-color">
                  Complete Project
                </p>
              </div>
            </motion.div>
          </div>
        </div>
  );
};

export default HeroImageDiv;