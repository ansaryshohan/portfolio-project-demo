import pricingData from "../../data/pricingData";
import TopHeading from "../shared/TopHeading";
import SinglePricingCard from "./SinglePricingCard";

function PricingSection() {
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-900 bg-primary-bgColor pb-20">
      <div className="container mx-auto md:px-20">
        {/* === top header of the section ==== */}
        <TopHeading
          title={"Pricing Plan"}
          paragraph={
            "Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          }
        />
        {/* === content of the pricing section ======== */}
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
          {
            pricingData.map(pricing=><SinglePricingCard key={pricing.id} pricing={pricing}/>)
          }
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
