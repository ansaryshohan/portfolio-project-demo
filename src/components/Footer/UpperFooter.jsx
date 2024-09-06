import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import logo from "../../assets/logo.png";
import footerMenuData from "../../data/footerMenuData";
import UpperFooterColumn from "./UpperFooterColumn";

function UpperFooter({ onClickScrollHandler }) {
  return (
    <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
      {/* Brand Name column */}
      <div className="lg:w-1/3 pr-0 lg:pr-16">
        <div className="border-b lg:border-b-0 lg:border-r border-footer-line-color lg:pr-8 flex flex-col items-center justify-center pb-8 lg:pb-0">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex justify-start lg:justify-center items-center gap-2 cursor-pointer lg:w-auto">
              <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
                <img src={logo} alt="" className="w-full" />
              </div>
              <div className="font-bold text-xl md:text-3xl lg:text-4xl ml-5">
                Ansary.
              </div>
            </div>
          </a>
          <p className="mt-10 mb-3 text-center">
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>
          {/* social icons */}
          <div className="flex justify-start items-center gap-5 mt-10 ">
            <div className="p-1.5 rounded-full border border-zinc-200 ">
              <FaFacebookF
                size={22}
                className="hover:text-service-golden-color cursor-pointer"
              />
            </div>
            <div className="p-1.5 rounded-full border border-zinc-200 ">
              <FaLinkedinIn
                size={25}
                className="hover:text-service-golden-color cursor-pointer"
              />
            </div>
            <div className="p-1.5 rounded-full border border-zinc-200 ">
              <FaInstagram
                size={25}
                className="hover:text-service-golden-color cursor-pointer"
              />
            </div>
            <div className="p-1.5 rounded-full border border-zinc-200 ">
              <FaXTwitter
                size={25}
                className="hover:text-service-golden-color cursor-pointer"
              />
            </div>
            <div className="p-1.5 rounded-full border border-zinc-200 ">
              <FaPinterestP
                size={25}
                className="hover:text-service-golden-color cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 lg:w-2/3 md:grid-cols-3">
        {/* 2nd and third column */}
        {footerMenuData.map((footerData, i) => (
          <UpperFooterColumn
            key={i}
            onClickScrollHandler={onClickScrollHandler}
            title={footerData.title}
            options={footerData.options}
          />
        ))}
        {/* fourth column */}
        <div className="space-y-3">
          <h3 className="tracking-wide capitalize dark:text-gray-900 text-white font-semibold text-2xl pb-2">
            News Letter
          </h3>
          <ul className="space-y-1 pr-8">
            <li>
              Must explain to you how all this mistaken idea pleasure born and
              give you a complete account.
            </li>
            <li>
              <form
                action=""
                className="relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email"
                  className="mt-5 bg-[#101211] border border-solid border-[#222623] text-white h-12 px-3 py-4 outline-none w-full md:w-11/12"
                  required
                />
                <button type="submit" className="absolute right-6 top-[50%]">
                  <a href="#">
                    <TfiEmail size={20} className="text-white" />
                  </a>
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
