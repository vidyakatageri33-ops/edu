const FloatingImage = ({ image, className = "" }) => {
  return (
    <div
      className={`absolute z-20 w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden border-[3px] lg:border-[4px] border-white bg-[#E9E9E9] shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${className}`}
    >
      <img
        src={image}
        alt="student"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
export default FloatingImage