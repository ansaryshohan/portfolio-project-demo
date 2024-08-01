import { useRef, useState } from "react";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/about/AboutSection";
import Blog from "./components/blog/Blog";
import ContactSection from "./components/contact/ContactSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
import PricingSection from "./components/pricing/PricingSection";
import ServiceSection from "./components/service/ServiceSection";
import WorkExperienceSection from "./components/workExperience/WorkExperienceSection";

function App() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const blogRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const [currentActiveNav, setCurrentActiveNav] = useState(1);

  // navbar click and scroll to a section handler function ===
  const handleOnClickScroll = (sectionId) => {
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
      case 4: {
        clickedSection = portfolioRef;
        break;
      }
      case 5: {
        clickedSection = contactRef;
        break;
      }
      case 6: {
        clickedSection = blogRef;
        break;
      }
      default: {
        clickedSection = {};
        return;
      }
    }

    window.scrollTo({
      top: clickedSection.current.offsetTop - 80,
      behavior: "smooth",
    });

    setCurrentActiveNav(sectionId);
  };

  return (
    <div className="min-h-screen w-full font-Inter">
      <Navbar
        onClickScrollHandler={handleOnClickScroll}
        currentActiveNav={currentActiveNav}
      />
      <HeroSection ref={heroRef} setCurrentActiveNav={setCurrentActiveNav} />
      <AboutSection ref={aboutRef} setCurrentActiveNav={setCurrentActiveNav} />
      <ServiceSection
        ref={serviceRef}
        setCurrentActiveNav={setCurrentActiveNav}
      />
      <WorkExperienceSection />
      <PortfolioSection
        ref={portfolioRef}
        setCurrentActiveNav={setCurrentActiveNav}
      />
      <PricingSection />
      <ContactSection
        ref={contactRef}
        setCurrentActiveNav={setCurrentActiveNav}
      />
      <Blog ref={blogRef} setCurrentActiveNav={setCurrentActiveNav} />
      <Footer onClickScrollHandler={handleOnClickScroll} />
    </div>
  );
}

export default App;
