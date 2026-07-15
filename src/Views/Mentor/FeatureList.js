import { features } from "./FeatureData";

const FeatureList = () => {
  return (
    <div className="w-full max-w-[521px] grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <i className="bi bi-check-circle text-[#5D38DE] text-[24px] flex-shrink-0"></i>

          <span className="font-sans font-normal text-[16px] lg:text-[18px] leading-[100%] text-[#141219]">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureList;