import { useInView } from "framer-motion";
import { forwardRef, useEffect } from "react";

const ContactSection = forwardRef( ({setCurrentActiveNav}, ref) => {
  const isInView= useInView(ref,{amount:.4});

  useEffect(() => {
    isInView?setCurrentActiveNav(5):setCurrentActiveNav(0);
  }, [isInView,setCurrentActiveNav])
  
  return (
    <div className="w-full h-screen bg-lime-500" ref={ref}>
      Contact
    </div>
  );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;