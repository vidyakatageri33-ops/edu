
import Button from "../../../Components/Button";
import Rating from "../../Header/HeroContainer/Rating";
// import underline from "./underlineSVG.svg";


const HeroContent = () => {
  return (
    <div
      className="
        absolute
        top-[15px]
        left-1/2
        -translate-x-1/2
        z-30

        w-full
        max-w-[760px]

        flex
        flex-col
        items-center
        text-center

        px-4
      "
    >
      {/* Heading */}
      <h1
        className="
          font-sans
          font-bold
          text-[#141219]

          text-[34px]
          sm:text-[46px]
          md:text-[56px]
          lg:text-[64px]

          leading-[100%]
          max-w-[760px]
        "
      >
        Elevate Your Skills
        <br />

        with Expert-Led{" "}

        {/* <span className="relative inline-block">
          Training

          <div className="absolute left-0 -bottom-2 w-full">
            <underline />
          </div>
        </span> */}
      </h1>

      {/* Rating */}
      <div className="mt-5">
        <Rating />
      </div>

      {/* Button */}
      <Button
        name="Explore Courses"
        bgColor="bg-[#5D38DE]"
        textColor="text-white"
        className="
          mt-6
          w-[197px]
          h-[56px]
          rounded-full
          font-bold
          text-[18px]
        "
      />
    </div>
  );
};

export default HeroContent;