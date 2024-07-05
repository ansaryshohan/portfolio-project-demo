import { useRef } from "react";
import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/blog/Blog";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/service/ServiceSection";

function App() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const blogRef = useRef();
  const portfolioRef = useRef();

  const handleScroll = (sectionId) => {
    let clickedSection = {};

    switch (sectionId) {
      case 1: {
        clickedSection = heroRef;
        break;
      }
      case 2: {
        clickedSection = aboutRef;
        break;
      }
      case 3: {
        clickedSection = serviceRef;
        break;
      }
      default: {
        clickedSection = {};
        return;
      }
    }
    // console.log(clickedSection);
    window.scrollTo({top:clickedSection.current.offsetTop-80, behavior:"smooth"})
  };

  return (
    <div className="min-h-screen w-full font-Inter">
      <Navbar onScrollHandler={handleScroll} />
      <HeroSection ref={heroRef} />
      <AboutSection ref={aboutRef}/>
      <ServiceSection ref={serviceRef}/>
      <Blog ref={blogRef} />
      <PortfolioSection ref={portfolioRef} />
    </div>
  );
}

export default App;
