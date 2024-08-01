import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";
import contactData from "../../data/contactData";
import TopHeading from "../shared/TopHeading";
import ContactCard from "./ContactCard";
import ContactFormCard from "./ContactFormCard";

const ContactSection = forwardRef(({ setCurrentActiveNav }, ref) => {
  const isInView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    isInView ? setCurrentActiveNav(5) : setCurrentActiveNav(0);
  }, [isInView, setCurrentActiveNav]);

  return (
    <section className="bg-service-bgColor pb-20" ref={ref}>
      <div className="container md:px-20">
        {/* === top heading og the section=== */}
        <TopHeading
          title={"Let’s Talk"}
          paragraph={
            "Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system"
          }
        />
        {/* === section content ===== */}
        <div className="container md:px-10 flex flex-col md:flex-row justify-center items-stretch gap-2">
          {/* form div */}
          <div className="w-full md:w-1/2 border border-[#ebebeb] border-solid shadow-xl rounded-md bg-white md:flex-1">
            <ContactFormCard />
          </div>
          {/* single components div */}
          <div className="w-full md:w-1/2 flex flex-row flex-wrap sm:flex-nowrap sm:flex-col justify-between items-center gap-5">
            {contactData.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;
