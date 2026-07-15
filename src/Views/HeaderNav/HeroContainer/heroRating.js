import { reviewImages } from "./heroData";

const HeroRating = () => {
  return (
    <div className="inline-flex items-center gap-4 px-5 py-3 rounded-full bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.08)]">

      {/* Student Images */}
      <div className="flex -space-x-3">
        {reviewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="student"
            className="w-[48px] h-[48px] rounded-full border-[3px] border-white object-cover"
          />
        ))}
      </div>

      {/* Divider */}
      <div className="w-px h-10 bg-[#E5E5E5]"></div>

      {/* Rating */}
      <div className="flex flex-col">

        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className="bi bi-star-fill text-[#FFC107] text-[14px]"
              ></i>
            ))}
          </div>

          <span className="font-bold text-[18px] text-[#141219]">
            4.9/5
          </span>
        </div>

        <p className="text-[14px] text-[#5C5C5C] mt-1">
          500+ Active Students
        </p>

      </div>

    </div>
  );
};

export default HeroRating;