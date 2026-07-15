const FloatingImage = ({ image, className = "" }) => {
  return (
    <img
      src={image}
      alt="Student"
      className={`
        w-12 h-12
        bg-gray-100
        sm:w-14 sm:h-14
        md:w-16 md:h-16
        lg:w-[80px] lg:h-[80px]
        rounded-full
        object-cover

        ${className}
      `}
    />
  );
};

export default FloatingImage;