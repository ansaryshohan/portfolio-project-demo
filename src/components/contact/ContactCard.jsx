function ContactCard({ contact }) {
  const { title, name, icon } = contact;
  return (
    <div className="py-7 px-8 w-full sm:w-80 border border-[#ebebeb] border-solid shadow-xl rounded-lg bg-white">
      <h3 className="text-2xl font-semibold text-heading-color mb-4">
        {title}
      </h3>

      <div className="flex justify-start items-center gap-4">
        {/* icon div */}
        <div className="service-icon-div h-20 w-20 rounded-full flex justify-center items-center text-3xl font-normal text-service-golden-color">
          <div className="text-center">
            <i className={`fi ${icon}`}></i>
          </div>
        </div>
        {/* info */}
        <p className="text-lg text-light-text-color font-light">{name}</p>
      </div>
    </div>
  );
}

export default ContactCard;
