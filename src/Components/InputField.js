const InputField = ({
  icon,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="relative w-full max-w-[358px]">
      {/* Icon */}
      <i
        className={`bi ${icon} absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-base`}
      ></i>

      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-[48px]
          sm:h-[52px]
          lg:h-[56px]

          rounded-[12px]

          border
          border-[#FFFFFF66]

          bg-transparent

          pl-12
          pr-8
          py-4

          text-sm
          sm:text-base

          text-white
          placeholder:text-white/70

          outline-none
          focus:border-white
          transition-all
          duration-300
        "
      />
    </div>
  );
};

export default InputField;