import { forwardRef } from "react";

const Blog = forwardRef((props,ref) => {
  return (
    <div className="w-full h-screen bg-pink-400" ref={ref}>
      thi sis the blog section
    </div>
  );
});

Blog.displayName="Blog";

export default Blog;
