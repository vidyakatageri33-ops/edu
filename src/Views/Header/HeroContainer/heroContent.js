import Button from "../../../Components/Button";
import Rating from "./Rating";

const HeroContent = () => {
  return (
    <div className="relative z-30 flex flex-col items-center text-center w-full max-w-[779px] mx-auto">

      {/* Heading */}
      <h1 className="font-sans font-bold text-[#141219] text-[34px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[100%] max-w-[779px]">
        Elevate Your Skills
        <br />
        with Expert-Led{" "}
      <span
  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2
after:w-full after:h-[5px] after:bg-[#FFD700] after:rounded-full after:rotate-[-2deg] after:opacity-90
  "
>
  Training
</span>
      </h1>

      {/* Rating */}
      <div className="mt-6">
        <Rating />
      </div>

      {/* Button */}
      <Button
        name="Explore Courses"
        bgColor="bg-[#5D38DE]"
        textColor="text-white"
        className="mt-8 w-[170px] sm:w-[185px] lg:w-[197px] h-[48px] sm:h-[52px] lg:h-[56px] rounded-full text-[16px] lg:text-[18px] font-bold"
      />

    </div>
  );
};

export default HeroContent;