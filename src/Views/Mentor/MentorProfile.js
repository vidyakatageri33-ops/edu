const MentorProfile = ({ icon, title, subtitle }) => {
  return (
    <div className="w-full max-w-[220px] h-[72px] sm:h-[82px] lg:h-[92px] bg-white border border-[#14121933] rounded-[54px] shadow-[0px_10px_40px_0px_rgba(0,0,0,0.06)] px-4 sm:px-5 lg:px-6 flex items-center gap-4">

      {/* Icon */}
      <div className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] lg:w-[52px] lg:h-[52px] rounded-full bg-[#F5F2FF] flex items-center justify-center flex-shrink-0">
        <i className={`bi ${icon} text-[#5D38DE] text-[20px] lg:text-[22px]`}></i>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center">
        <h4 className="font-sans font-bold text-[16px] lg:text-[18px] leading-[100%] text-[#141219] uppercase">
          {title}
        </h4>

        <span className="mt-1 font-sans font-normal text-[14px] lg:text-[16px] leading-[100%] text-[#5C5C5C]">
          {subtitle}
        </span>
      </div>

    </div>
  );
};

export default MentorProfile;