import Star from "../Stars/start1";
import Start2 from "../Stars/start2";


const HeroStars = () => {
  return (
    <>
      {/* Left Star */}
      <div className="absolute top-[26%] left-[12%]">
        <Start2 />
      </div>

      {/* Right Star */}
      <div className="absolute top-30 right-[10%]">
        <Star />
      </div>
    </>
  );
};

export default HeroStars;