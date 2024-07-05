import { forwardRef, useState } from "react";
import {
  getDesignData,
  getDevelopmentData,
  getMarketingData,
} from "../../data/serviceData";
import TopHeading from "../shared/TopHeading";
import ServiceSectionHeader from "./ServiceSectionHeader";
import SingleServiceCard from "./SingleServiceCard";

const ServiceSection = forwardRef((props, ref) => {
  const [activeMenu, setActiveMenu] = useState(1);

  // === service data processing====
  let serviceData;
  switch (activeMenu) {
    case 1: {
      serviceData =getDesignData();
      break;
    }
    case 2: {
      serviceData = getDevelopmentData(); 
      break;
    }
    case 3: {
      serviceData = getMarketingData();
      break;
    }
    default: {
      serviceData = getDevelopmentData();
    }
  }

  return (
    <section className="w-full min-h-screen bg-service-color  pb-20" ref={ref}>
      <div className="container w-full h-full">
        {" "}
        <TopHeading
          title={"Popular Services"}
          paragraph={
            "Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          }
        />
        <article>
          {/* three heading buttons */}
          <ServiceSectionHeader
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
          {/* cards section  */}
          <section className="pt-16 flex flex-col lg:flex-row w-full gap-5">
            {serviceData.map((singleService) => (
              <SingleServiceCard
                key={singleService.id}
                singleService={singleService}
              />
            ))}
          </section>
        </article>
      </div>
    </section>
  );
});

ServiceSection.displayName = "AboutSection";

export default ServiceSection;
