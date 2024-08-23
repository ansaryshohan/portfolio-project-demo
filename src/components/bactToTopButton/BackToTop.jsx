import { useEffect, useState } from "react";

function BackToTop() {
  const [btnShow, setBtnShow] = useState(false);

  useEffect(() => {
    const handleBtnShow = () => {
      if (window.scrollY >= 300) {
        setBtnShow(true);
      } else {
        setBtnShow(false);
      }
    };

    window.addEventListener("scroll", handleBtnShow);
    return () => {
      window.removeEventListener("scroll", handleBtnShow);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={btnShow ? "block fixed bottom-10 -right-1 sm:right-2 z-[99]" : "hidden"}
    >
      <button
        onClick={handleClick}
        className="w-10 h-10 sm:w-14 sm:h-14  rounded-full text-center border-2 border-green-600 bg-primary-theme-color text-white  text-lg font-medium mr-3 sm:mr-10 grid place-content-center"
      >
        <i className="fi fi-sr-arrow-small-up text-2xl sm:text-4xl"></i>
      </button>
    </div>
  );
}

export default BackToTop;
