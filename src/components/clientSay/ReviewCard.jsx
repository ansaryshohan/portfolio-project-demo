
function ReviewCard({ review }) {
  
  const { name, designation, description,title } = review;


  return (
    <div className="w-full flex flex-col justify-center items-start gap-5 text-left py-10 pl-16 bg-section-bgColor" >
      <h3 className="text-heading-color text-3xl leading-10 font-medium">
        {title}
      </h3>
      <p className="text-light-text-color text-base leading-8 font-normal">
        {description}
      </p>
      <p className="font-semibold text-2xl text-heading-color">
        {name},
        <span className="text-lg font-medium text-light-text-color ml-2">
          {designation}
        </span>
      </p>
    </div>
  );
}

export default ReviewCard;
