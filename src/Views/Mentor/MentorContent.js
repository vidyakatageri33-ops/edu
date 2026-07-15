import Button from "../../Components/Button";
import FeatureList from "./FeatureList";

const MentorContent = () => {
  return (
    <div className="w-full max-w-[560px] flex flex-col gap-12">

      {/* Badge */}
      <div className="w-fit h-[38px] px-[20px] py-[8px] rounded-[66px] bg-[#F5F2FF] flex items-center justify-center">
        <span className="font-sans font-bold text-[14px] leading-[100%] text-[#5D38DE]">
          Become a Mentor
        </span>
      </div>

      {/* Heading & Description */}
      <div className="flex flex-col gap-12">

        <h2 className="font-sans font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-[100%] text-[#141219]">
          <span className="whitespace-nowrap">Join Our Team —</span>
          <br />
          <span className="whitespace-nowrap">Inspire Learners Today!</span>
        </h2>

        <p className="max-w-[521px] font-sans font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[170%] text-[#141219]">
          Become a part of our passionate educator community and share your
          expertise with learners worldwide. As an instructor, you'll create
          engaging courses, guide students, and help shape their personal and
          professional success.
        </p>

      </div>

      {/* Features */}
      <FeatureList />

      {/* Button */}
      <Button
        name="Join our team"
        bgColor="bg-[#5D38DE]"
        textColor="text-white"
        className="w-[160px] sm:w-[170px] lg:w-[180px] h-[48px] sm:h-[52px] lg:h-[56px] rounded-[80px] px-6 lg:px-[32px] py-3 lg:py-[16px] gap-[10px] font-sans font-bold text-[16px] lg:text-[18px] leading-[100%] hover:bg-[#4C2BC5] transition-all duration-300"
      />

    </div>
  );
};

export default MentorContent;