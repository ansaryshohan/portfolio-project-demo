import { useRef, useState } from "react";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/service/ServiceSection";
import WorkExperienceSection from "./components/workExperience/WorkExperienceSection";
import PortfolioSection from "./components/portfolio/PortfolioSection";
// import Blog from "./components/blog/Blog";
// import ReviewSection from "./components/clientSay/ReviewSection";
// import ContactSection from "./components/contact/ContactSection";
// import PricingSection from "./components/pricing/PricingSection";
// import BackToTop from "./components/bactToTopButton/BackToTop";
// import Footer from "./components/Footer/Footer";

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
      {/*<ReviewSection />
      <PricingSection />
      <ContactSection
        ref={contactRef}
        setCurrentActiveNav={setCurrentActiveNav}
      />
      <Blog ref={blogRef} setCurrentActiveNav={setCurrentActiveNav} />
      <Footer onClickScrollHandler={handleOnClickScroll} />
      <BackToTop/> */}
    </div>
  );
}

export default App;
