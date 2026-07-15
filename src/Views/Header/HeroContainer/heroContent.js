import Button from "../../../Components/Button";
import Rating from "./Rating";


const HeroContent = () => {
  return (
    <div
      className="
        absolute
        top-[20px]
        left-1/2
        -translate-x-1/2
        z-30

        flex
        flex-col
        items-center
        text-center

        w-full
        max-w-[779px]
      "
    >
      {/* Heading */}
      <h1
        className="
          font-sans
          font-bold
          text-[#141219]

          text-[38px]
          sm:text-[52px]
          lg:text-[64px]

          leading-[100%]
          tracking-[0]

          max-w-[779px]
        "
      >
        Elevate Your Skills
        <br />

        with Expert-Led{" "}

        <span className="relative inline-block">
          Training

          {/* <div className="absolute left-0 -bottom-[8px] w-full">
            <UnderlineSVG />
          </div> */}
        </span>
      </h1>

      {/* Rating */}
      <div className="mt-6">
       <Rating/>
      </div>

      {/* Button */}
      <Button
        name="Explore Courses"
        bgColor="bg-[#5D38DE]"
        textColor="text-white"
        className="
          mt-8

          w-[197px]
          h-[56px]

          rounded-[80px]

          px-8
          py-4

          text-[18px]
          font-bold
        "
      />
    </div>
  );
};

export default HeroContent;