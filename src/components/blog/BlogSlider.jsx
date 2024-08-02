import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import blogData from "../../data/blogData";
import BlogCard from "./BlogCard";
import BlogSwiperButton from "./BlogSwiperButton";

function BlogSlider() {
  return (
    <Swiper
            draggable={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 600,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1200}
            centeredSlides={true}
            grabCursor={true}
            // onMouseEnter={{

            // }}
            modules={[Autoplay]}
            className="mySwiper relative "
          >
            {/* swiper cards */}
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
            {/* navigation buttons */}

            <BlogSwiperButton
              icon={"fi-rs-arrow-down-left"}
              btnStyle={"absolute left-0 top-[50%] translate-y-[-50%] z-10"}
              swipeBtn={""}
            />
            <BlogSwiperButton
              icon={"fi-sr-arrow-up-right"}
              btnStyle={"absolute right-0 top-[50%] translate-y-[-50%] z-10"}
              swipeBtn={"next"}
            />
          </Swiper>
  )
}

export default BlogSlider