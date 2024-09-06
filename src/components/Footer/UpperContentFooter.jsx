function UpperContentFooter() {
  return (
    <section className="hidden  upper-content absolute top-[-45%] left-0 w-[90%] bg-[#FF4155] py-20 pl-20 pr-32 lg:flex flex-col md:flex-row justify-between items-center">
      <div className="w-1/2">
        <h3 className="text-5xl font-bold leading-[60px] text-white">
          Send me a message and make something together.
        </h3>
      </div>
      <div className="w-1/2 text-right">
        {/* */}
        <button className="bg-heading-color border-0 rounded-md cursor-pointer py-4 px-9 text-center">
          Contact us <i className="fi fi-rr-arrow-right ml-4"></i>
        </button>
      </div>
    </section>
  );
}

export default UpperContentFooter;
