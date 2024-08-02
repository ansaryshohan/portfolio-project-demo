import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolioData from "../../data/portfolioData";
import PortfolioCard from "./PortfolioCard";
import PortfolioSwiperButtons from "./PortfolioSwiperButtons";

const PortfolioSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween:30
          },
          768:{
            slidesPerView:3,
            spaceBetween:30
          },
          1024:{
            slidesPerView:3,
            spaceBetween:30
          },
        }}
        autoplay={{
          delay: 800,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        speed={1500}
        modules={[ Autoplay]}
        className="mySwiper "
      >
        {portfolioData.map((portfolio) => (
          <SwiperSlide key={portfolio.id}>
            <PortfolioCard portfolio={portfolio} />
          </SwiperSlide>
        ))}

        <PortfolioSwiperButtons />
      </Swiper>
    </>
  );
};

export default PortfolioSlider;
