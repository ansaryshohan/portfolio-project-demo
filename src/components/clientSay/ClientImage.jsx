import img2 from "../../assets/img-2.jpg";
import img3 from "../../assets/img-3.jpg";
import img4 from "../../assets/img-4.jpg";
import img5 from "../../assets/img-5.jpg";
import img6 from "../../assets/img-6.jpg";

function ClientImage({ clientImage }) {
  return (
    <div className="w-full sm:w-4/5 lg:w-2/5 pt-10 md:p-10 grid place-content-center">
      <div className="w-72 h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-2 p-6 lg:p-10 border-[#0000000d] flex items-center justify-center">
        <div className="w-full relative rounded-full border-2 p-6 lg:p-10 bg-amber-300/10 border-[#0000000d] flex items-center justify-center">
          {/* float images */}
          <img
            src={img2}
            alt="client 2"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full absolute top-0 left-0"
          />
          <img
            src={img3}
            alt="client 2"
            className="w-10 h-10 md:w-14 md:h-14 lg:h-20 lg:w-20 rounded-full absolute bottom-[20%] left-[-10%]"
          />
          <img
            src={img4}
            alt="client 2"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full absolute top-0 right-0"
          />
          <img
            src={img5}
            alt="client 2"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full absolute bottom-[10%] right-[-5%]"
          />
          <img
            src={img6}
            alt="client 2"
            className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 rounded-full absolute bottom-[-15%] left-[50%] translate-x-[-50%]"
          />
          {/* main image div */}
          <div className="w-full rounded-full  overflow-hidden border-2 p-4 md:p-7 border-[#0000001f] flex items-center justify-center ">
            <img src={clientImage} alt="client img" className="w-full rounded-full transition-all duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientImage;
