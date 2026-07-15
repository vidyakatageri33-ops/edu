const Button = ({
  name,
  bgColor = "bg-[#5D38DE]",
  textColor = "text-white",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
    style={{fontFamily:"sans-serif"}}
      type={type}
      onClick={onClick}
      className={`
        ${bgColor}
        ${textColor}
        rounded-full
        font-bold
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        transition-all
        duration-300
        hover:opacity-90
        ${className}
      `}
   
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;