import { Autoplay, HashNavigation, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import portfolio1 from "../../assets/portfolio-1.jpg";
import PortfolioSwiperButtons from "./PortfolioSwiperButtons";

const PortfolioSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={true}
        modules={[Navigation, HashNavigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1" className="">
          <div className="w-full h-[80%] overflow-hidden">
            <img src={portfolio1} alt="" className="w-full h-[200px]" />
            <div>
              <h2>this is portfolio</h2>
              <button>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide2">
          <div>
            <img src={portfolio1} alt="" className="w-full h-[200px]" />
            <div>
              <h2>this is portfolio</h2>
              <button>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide3">
          <div className="w-full h-[80%] overflow-hidden">
            <img src={portfolio1} alt="" className="w-full h-[200px]" />
            <div>
              <h2>this is portfolio</h2>
              <button>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash="slide4">
          <div className="w-full h-[80%] overflow-hidden">
            <img src={portfolio1} alt="" className="w-full h-[200px]" />
            <div>
              <h2>this is portfolio</h2>
              <button>learn more</button>
            </div>
          </div>
        </SwiperSlide>
        <PortfolioSwiperButtons />
      </Swiper>
    </>
  );
};

export default PortfolioSlider;
