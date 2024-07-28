import { useSwiper } from "swiper/react";

const SwiperButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="w-full text-center pt-16 pb-20">
      <button onClick={() => swiper.slidePrev()} className="w-14 h-14 rounded-full text-center border border-primary-theme-color bg-white hover:bg-primary-theme-color text-primary-theme-color hover:text-white transition-all text-lg font-medium mr-10">
        <i className="fi fi-rr-arrow-left "></i>
      </button>
      <button onClick={() => swiper.slideNext()} className="w-14 h-14 rounded-full text-center border border-primary-theme-color bg-white hover:bg-primary-theme-color text-primary-theme-color hover:text-white transition-all text-lg font-medium ">
        <i className="fi fi-rr-arrow-right"></i>
      </button>
    </div>
  );
};

export default SwiperButtons;
