import Button from "../../Components/Button";
import MentorCard from "./MentorsCard";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { mentors } from "./Mentors";

const TeamSection = () => {
  return (
    <section className="py-24 px-4">

      <div className="max-w-[1120px] mx-auto">

  <div className="w-full max-w-[620px] mx-auto text-center">
  <SectionTitle />
  <SectionHeading />
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-items-center mt-16 ">
  {mentors.map((mentor) => (
    <MentorCard
      key={mentor.id}
      mentor={mentor}
    />
  ))}
</div>

       <div className="flex justify-center mt-12 lg:mt-16">
 <Button
  name="See all"
  bgColor="bg-[#5D38DE]"
  textColor="text-white"
  className="w-[100px] sm:w-[110px] lg:w-[119px] h-[48px] sm:h-[52px] lg:h-[56px] rounded-[80px] px-6 lg:px-[32px] py-3 lg:py-[16px] gap-[10px] font-sans font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-[100%] hover:bg-[#4C2BC5] transition-all duration-300"
 />
</div>

      </div>

    </section>
  );
};

export default TeamSection;