import Button from "../../Components/Button";
import Rating from "../Header/HeroContainer/Rating";

const HeroContent = () => {
  return (
    <div className="relative z-30 w-full max-w-[779px] mx-auto flex flex-col items-center justify-center text-center px-4 py-6 sm:py-8 md:py-10 lg:py-0">

      {/* Heading */}
      <h1 className="font-sans font-bold text-[#141219] text-[30px] sm:text-[40px] md:text-[52px] lg:text-[64px] leading-[110%] lg:leading-[100%] max-w-[779px]">
        Elevate Your Skills
        <br />
        with Expert-Led{" "}
        <span className="relative inline-block">
          Training
        </span>
      </h1>

      {/* Rating */}
      <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8">
        <Rating />
      </div>

      {/* Button */}
      <div className="mt-6 sm:mt-7 lg:mt-8">
        <Button
          name="Explore Courses"
          bgColor="bg-[#5D38DE]"
          textColor="text-white"
          className="w-[170px] sm:w-[185px] lg:w-[197px] h-[48px] sm:h-[52px] lg:h-[56px] rounded-full text-[15px] sm:text-[16px] lg:text-[18px] font-bold transition-all duration-300 hover:bg-[#4C2BC5] hover:shadow-xl hover:scale-105 active:scale-95"
        />
      </div>

    </div>
  );
};

export default HeroContent;