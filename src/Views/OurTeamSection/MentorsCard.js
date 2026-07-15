const MentorCard = ({ mentor }) => {
  return (
    <div className="w-full max-w-[480px] min-h-[168px] bg-white rounded-[24px] shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)] p-4
        sm:p-5 lg:p-6 flex items-center gap-4 sm:gap-5
        lg:gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_70px_0px_rgba(0,0,0,0.08)]">
      {/* Avatar */}
      <img src={mentor.image} alt={mentor.name} className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px]
          lg:w-[96px] lg:h-[96px] rounded-full object-cover flex-shrink-0 "/>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className=" text-[18px] sm:text-[20px] lg:text-[32px]  font-bold text-[#141219] truncate" >
          {mentor.name}
        </h3>
        <p className=" mt-2 text-[13px]  sm:text-[15px] lg:text-[18px] text-[#5C5C5C] " >
          {mentor.role}
        </p>

        <div
          className=" flex flex-wrap items-center gap-3 sm:gap-5 mt-4" >
          <div className="flex items-center gap-1">
            <i className="bi bi-star-fill text-[#FFD700]"></i>

            <span className="text-sm text-[#5C5C5C]">{mentor.rating}</span>
          </div>

          <div className="flex items-center gap-1">
            <i className="bi bi-play-circle text-[#5C5C5C]"></i>

            <span className="text-sm text-[#5C5C5C]">{mentor.courses}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
