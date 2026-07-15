import Star from "../../Header/Stars/start1";
import Start2 from "../../Header/Stars/start2";

const HeroShapes = () => {
  return (
    <>
      {/* Left Star */}
      <div
        className="
          absolute
          top-[145px]
          left-[110px]
          z-10
          hidden lg:block
        "
      >
        <Start2 />
      </div>

      {/* Right Star */}
      <div
        className="
          absolute
          top-[220px]
          right-[110px]
          z-10
          hidden lg:block
        "
      >
        <Star />
      </div>
    </>
  );
};

export default HeroShapes;