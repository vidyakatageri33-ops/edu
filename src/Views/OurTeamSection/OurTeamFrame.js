import Button from "../../Components/Button";
import MentorCard from "./MentorsCard";
import SectionHeading from "./SectionHeading";
import SectionTitle from "./SectionTitle";
import { mentors } from "./Mentors";

const TeamSection = () => {
  return (
    <section className="py-24 px-4">

      <div className="max-w-[1120px] mx-auto">

        <div className="text-center">
          <SectionTitle />
        <SectionHeading/>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 justify-items-center mt-16 ">
  {mentors.map((mentor) => (
    <MentorCard
      key={mentor.id}
      mentor={mentor}
    />
  ))}
</div>

        <div className="flex justify-center mt-16">
          <Button
            name="See all"
            bgColor="bg-[#5D38DE]"
            textColor="text-white"
            className="w-[160px] h-[56px]"
          />
        </div>

      </div>

    </section>
  );
};

export default TeamSection;