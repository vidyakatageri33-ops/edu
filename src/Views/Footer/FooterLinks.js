import { companyLinks, courseLinks } from "./FooterData";

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20">

      {/* Company */}
      <div className="min-w-[160px]">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white mb-6 md:mb-8">
          Company
        </h3>

        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          {companyLinks.map((item, index) => (
            <a
              key={index}
              href="/"
              className="group relative flex items-center w-fit text-[16px] lg:text-[18px] text-white transition-all duration-300 hover:text-[#FFD166]"
            >
              <span className="transition-all duration-300 group-hover:translate-x-2">
                {item}
              </span>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FFD166] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Courses */}
      <div className="min-w-[160px]">
        <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold text-white mb-6 md:mb-8">
          Courses
        </h3>

        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          {courseLinks.map((item, index) => (
            <a
              key={index}
              href="/"
              className="group relative flex items-center w-fit text-[16px] lg:text-[18px] text-white transition-all duration-300 hover:text-[#FFD166]"
            >
              <span className="transition-all duration-300 group-hover:translate-x-2">
                {item}
              </span>

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FFD166] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default FooterLinks;