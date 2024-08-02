import { useSwiper } from "swiper/react";

function ReviewButtons() {
  const swiper = useSwiper();

  return (
    <div className="text-right pt-4 pb-4 flex justify-center items-center pr-8 ">
      <button
        onClick={()=>swiper.slideNext()}
        className="w-10 h-10 rounded-full border border-primary-theme-color bg-white hover:bg-primary-theme-color text-primary-theme-color hover:text-white transition-all text-lg font-medium mr-3 flex justify-center items-center"
      >
        <i className="fi fi-rr-arrow-left inline-block"></i>
      </button>
      <button
        onClick={()=>swiper.slidePrev()}
        className="w-10 h-10 rounded-full border border-primary-theme-color bg-white hover:bg-primary-theme-color text-primary-theme-color hover:text-white transition-all text-lg font-medium flex justify-center items-center"
      >
        <i className="fi fi-rr-arrow-right inline-block"></i>
      </button>
    </div>
  );
}

export default ReviewButtons;
