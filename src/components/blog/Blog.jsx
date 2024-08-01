import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import blogData from "../../data/blogData";
import TopHeading from "../shared/TopHeading";
import BlogCard from "./BlogCard";
import BlogSwiperButton from "./BlogSwiperButton";

const Blog = forwardRef(({ setCurrentActiveNav }, ref) => {
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    isInView ? setCurrentActiveNav(6) : setCurrentActiveNav(0);
  }, [isInView, setCurrentActiveNav]);

  return (
    <section className="bg-primary-bgColor pb-96" ref={ref}>
      <div className="container md:px-20">
        {/* === top heading og the section=== */}
        <TopHeading
          title={"Latest News"}
          paragraph={
            "Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          }
        />
        {/* === section content ===== */}
        <div className="">
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
        </div>
      </div>
    </section>
  );
});

Blog.displayName = "Blog";

export default Blog;
