const MentorCard = ({ mentor }) => {
  return (
    <div className="w-full max-w-[480px] min-h-[168px] bg-white rounded-[24px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)] p-4 sm:p-5 lg:p-6 flex items-center gap-4 sm:gap-5 lg:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_70px_0px_rgba(0,0,0,0.08)]">
      
    <div
  className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full ${mentor.bgColor} flex items-center justify-center flex-shrink-0`}
>
  <img
    src={mentor.image}
    alt={mentor.name}
    className="w-full h-full rounded-full object-cover"
  />
</div>

      <div className="flex-1 min-w-0">
      <div className="w-full max-w-[179px] flex flex-col gap-2">
  <h3 className="font-sans font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%] text-[#141219]">
    {mentor.name}
  </h3>

  <p className="font-sans font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[100%] text-[#5C5C5C]">
    {mentor.role}
  </p>
</div>

      <div className="w-full max-w-[166px] h-[22px] flex items-center justify-between mt-4">
  <div className="flex items-center gap-2">
    <i className="bi bi-star-fill text-[#FFD700] text-sm"></i>
    <span className="font-sans font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[100%] text-[#141219]">
      {mentor.rating}
    </span>
  </div>

  <div className="flex items-center gap-2">
    <i className="bi bi-play-circle text-[#5D38DE] text-sm"></i>
    <span className="w-full max-w-[79px] font-sans font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[100%] text-center text-[#141219]">
      {mentor.courses}
    </span>
  </div>
</div>
      </div>
    </div>
  );
};

export default MentorCard;