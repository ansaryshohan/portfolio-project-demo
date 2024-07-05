
const ServiceSectionHeader = ({activeMenu,setActiveMenu}) => {
  return (
    <header className="flex justify-center items-center gap-14">
          {/* first button */}
          <div>
            <button
              className={`${
                activeMenu === 1 ? "service-active" : ""
              } border-gray-300 border-2 border-solid text-heading-color px-16 py-4 text-2xl font-bold text-center rounded-[40px]`}
              onClick={() => setActiveMenu(1)}
            >
              Design
            </button>
          </div>
          {/* second button */}
          <div>
            <button
              className={`${
                activeMenu === 2 ? "service-active" : ""
              } border-gray-300 border-2 border-solid px-16 py-4 text-heading-color text-2xl font-bold text-center rounded-[40px]`}
              onClick={() => setActiveMenu(2)}
            >
              Development
            </button>
          </div>
          {/* third button */}
          <div>
            <button
              className={`${
                activeMenu === 3 ? "service-active" : ""
              } border-gray-300 border-2 border-solid px-16 py-4 text-heading-color text-2xl font-bold text-center rounded-[40px]`}
              onClick={() => setActiveMenu(3)}
            >
              Marketing
            </button>
          </div>
        </header>
  );
};

export default ServiceSectionHeader;