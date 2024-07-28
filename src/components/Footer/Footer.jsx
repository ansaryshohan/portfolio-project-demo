import LowerFooter from "./LowerFooter";
import UpperContentFooter from "./UpperContentFooter";
import UpperFooter from "./UpperFooter";

const Footer = ({onClickScrollHandler}) => {
  return (
    <footer className="pl-4  dark:bg-gray-100 dark:text-gray-800 bg-footer-bgColor text-white relative">
      {/* red div content footer */}
      <UpperContentFooter />

      <section className="container md:pl-20 divide-y divide-footer-line-color footer-wrapper pt-40">
        {/* upper footer section */}
        <UpperFooter  onClickScrollHandler={onClickScrollHandler}/>
        {/* lower footer section */}
        <LowerFooter />
      </section>
    </footer>
  );
};

export default Footer;
