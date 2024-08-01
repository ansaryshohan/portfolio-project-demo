import { useSwiper } from "swiper/react";

function BlogSwiperButton({ swipeBtn, btnStyle, icon }) {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={()=>{swipeBtn === "next" ? swiper.slideNext() : swiper.slidePrev()}}
        className={`w-14 h-14 rounded-full text-center border border-primary-theme-color bg-white hover:bg-primary-theme-color text-primary-theme-color hover:text-white transition-all text-lg font-medium ${btnStyle}`}
      >
        <i className={`fi ${icon}`}></i>
      </button>
    </>
  );
}

export default BlogSwiperButton;
