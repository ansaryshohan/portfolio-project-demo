import { useEffect, useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewData from "../../data/reviewData";
import ClientImage from "./ClientImage";
import ReviewButtons from "./ReviewButtons";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  const swiperRef = useRef(null); // Ref for Swiper instance
  const [activeSlideData, setActiveSlideData] = useState(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const realIndex = swiperInstance.realIndex;
      const currentData = reviewData[realIndex];
      setActiveSlideData(currentData);
    }
  };

  useEffect(() => {
    // Initialize Swiper instance and set initial active slide data
    if (swiperRef.current) {
      handleSlideChange(); // Get data for the initial slide
    }
  }, []);

  return (
    <section className="w-full h-screen bg-white relative">
      <div className="review-bg-shape"></div>
      <div className="absolute z-10 h-full w-full bg-section-bgColor "></div>
      <div className="container md:px-10 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]  z-20 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* image div */}
        <ClientImage clientImage={activeSlideData?.image} />
        {/* content div */}
        <Swiper
          rewind={true}
          loop={true}
          modules={[Navigation]}
          className="mySwiper w-3/5 relative"
          onSlideChange={handleSlideChange}
          ref={swiperRef}
        >
          {reviewData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
          <div className="absolute bottom-0 right-0 z-30">
            <ReviewButtons />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default ReviewSection;
