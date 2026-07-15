import MentorContent from "./MentorContent";
import MentorImages from "./MentorImage";

const BecomeMentor = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Images */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <MentorImages />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <MentorContent />
          </div>

        </div>

      </div>
    </section>
  );
};

export default BecomeMentor;