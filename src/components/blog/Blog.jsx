import { forwardRef } from "react";

const Blog = forwardRef((props,ref) => {
  return (
    <div className="w-full h-screen bg-pink-400" ref={ref}>
      <h1>blog</h1>
    </div>
  );
});

Blog.displayName="Blog";

export default Blog;
