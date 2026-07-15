import { companyLinks,courseLinks } from "./FooterData";



const FooterLinks = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-10 lg:gap-16">
        <div className="flex flex-col gap-8 min-w-[190px]">

        <h3 className="font-sans font-bold text-[20px] lg:text-[24px] leading-[100%] text-white whitespace-nowrap">
          Company
        </h3>

        <div className="flex flex-col gap-6">
          {companyLinks.map((item, index) => (
            <a
              key={index}
              href="/"
              className="font-sans font-normal text-[16px] lg:text-[18px] leading-[100%] text-white whitespace-nowrap hover:text-gray-200 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

      </div>

      {/* Courses */}
      <div className="flex flex-col gap-8 min-w-[190px]">

        <h3 className="font-sans font-bold text-[20px] lg:text-[24px] leading-[100%] text-white whitespace-nowrap">
          Courses
        </h3>

        <div className="flex flex-col gap-6">
          {courseLinks.map((item, index) => (
            <a
              key={index}
              href="/"
              className="font-sans font-normal text-[16px] lg:text-[18px] leading-[100%] text-white whitespace-nowrap hover:text-gray-200 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

      </div>

    </div>
  );
};

export default FooterLinks;