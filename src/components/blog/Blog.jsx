import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";
import TopHeading from "../shared/TopHeading";
import BlogSlider from "./BlogSlider";

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

        <BlogSlider />
      </div>
    </section>
  );
});

Blog.displayName = "Blog";

export default Blog;
