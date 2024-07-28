function UpperFooterColumn({ title, options,onClickScrollHandler }) {
  return (
    <div className="space-y-3">
      <h3 className="tracking-wide capitalize dark:text-gray-900 text-white font-semibold text-2xl pb-2">
        {title}
      </h3>
      <ul className="space-y-1">
       {
        options.map((option,index)=>(<li
         key={index}
          className=" cursor-pointer"
          onClick={() => onClickScrollHandler(option.id)}
        >
         <span className="mr-3">-</span> {option.menu}
        </li>))
       }
      </ul>
    </div>
  );
}

export default UpperFooterColumn;
