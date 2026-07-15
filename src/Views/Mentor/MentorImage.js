import MentorProfile from "./MentorProfile";
import img1 from "../../Assets/20.png";
import img2 from "../../Assets/19.png";

const MentorImages = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[380px] md:w-[420px] md:h-[450px] lg:w-[498px] lg:h-[496px]">

        {/* BEST Badge */}
        <div className="absolute top-2 left-0 z-30 scale-75 sm:scale-90 lg:scale-100 origin-left">
          <MentorProfile
            icon="bi-people"
            title="BEST"
            subtitle="Mentors"
          />
        </div>

        {/* Top Image */}
        <div className="absolute top-0 right-4 sm:right-6 md:right-8 lg:right-[40px] z-20 w-[130px] h-[200px] sm:w-[160px] sm:h-[245px] md:w-[190px] md:h-[295px] lg:w-[220px] lg:h-[342px] rounded-tl-[70px] rounded-br-[70px] lg:rounded-tl-[126px] lg:rounded-br-[126px] overflow-hidden border-[4px] border-white bg-[#FAFAFA]">
          <img
            src={img2}
            alt="Mentor"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Image */}
        <div className="absolute top-[90px] left-5 sm:top-[115px] sm:left-8 md:top-[145px] md:left-10 lg:top-[175px] lg:left-[70px] z-10 w-[130px] h-[200px] sm:w-[160px] sm:h-[245px] md:w-[190px] md:h-[295px] lg:w-[220px] lg:h-[342px] rounded-tl-[70px] rounded-br-[70px] lg:rounded-tl-[126px] lg:rounded-br-[126px] overflow-hidden bg-[#FAFAFA]">
          <img
            src={img1}
            alt="Student"
            className="w-full h-full object-cover"
          />
        </div>

        {/* VIDEO Badge */}
        <div className="absolute bottom-0 right-0 z-30 scale-75 sm:scale-90 lg:scale-100 origin-right">
          <MentorProfile
            icon="bi-camera-video"
            title="VIDEO"
            subtitle="Lessons"
          />
        </div>

      </div>
    </div>
  );
};

export default MentorImages;