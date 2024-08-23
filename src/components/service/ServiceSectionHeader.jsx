const ServiceSectionHeader = ({ activeMenu, setActiveMenu }) => {
  return (
    <header className="grid grid-cols-2 xxs:grid-cols-[.8fr_1.2fr_1fr] sm:grid-cols-3 gap-1 xxs:gap-2 sm:gap-3">
      {/* first button */}
      <div className="grid place-content-center">
        <button
          className={`${
            activeMenu === 1 ? "service-active" : ""
          } border-gray-300 border-2 border-solid text-heading-color px-2 py-2 text-sm xs:px-5 xs:py-2 xs:text-base lg:px-16 lg:py-4 lg:text-2xl font-bold text-center rounded-[40px]`}
          onClick={() => setActiveMenu(1)}
        >
          Design
        </button>
      </div>
      {/* second button */}
      <div className="grid place-content-center">
        <button
          className={`${
            activeMenu === 2 ? "service-active" : ""
          } border-gray-300 border-2 border-solid  text-heading-color px-2 py-2 text-sm xs:px-5 xs:py-2 xs:text-base lg:px-16 lg:py-4 lg:text-2xl font-bold text-center rounded-[40px]`}
          onClick={() => setActiveMenu(2)}
        >
          Development
        </button>
      </div>
      {/* third button */}
      <div className="grid place-content-center">
        <button
          className={`${
            activeMenu === 3 ? "service-active" : ""
          } border-gray-300 border-2 border-solid text-heading-color px-2 py-2 text-sm xs:px-5 xs:py-2 xs:text-base lg:px-16 lg:py-4 lg:text-2xl font-bold text-center rounded-[40px]`}
          onClick={() => setActiveMenu(3)}
        >
          Marketing
        </button>
      </div>
    </header>
  );
};

export default ServiceSectionHeader;
