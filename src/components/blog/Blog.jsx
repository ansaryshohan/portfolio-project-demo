import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";

const Blog = forwardRef(({setCurrentActiveNav},ref) => {

  const isInView= useInView(ref,{amount:.4});

  useEffect(() => {
    isInView?setCurrentActiveNav(6):setCurrentActiveNav(0);
  }, [isInView,setCurrentActiveNav])

  return (
    <div className="w-full h-screen bg-pink-400" ref={ref}>
      <h1>blog</h1>
    </div>
  );
});

Blog.displayName="Blog";

export default Blog;
