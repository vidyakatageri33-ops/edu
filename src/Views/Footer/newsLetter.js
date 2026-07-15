import Button from "../../Components/Button";
import InputField from "../../Components/InputField";

const Newsletter = () => {
  return (
    <div className="w-full max-w-[380px] flex flex-col gap-4">

      <InputField
        type="email"
        placeholder="Email address"
        icon="bi-envelope"
      />

      <Button
        name="Submit"
        bgColor="bg-white"
        textColor="text-[#5D38DE]"
        className="w-full sm:w-[180px] lg:w-[200px] h-[48px] sm:h-[52px] lg:h-[56px] rounded-full font-bold text-[14px] sm:text-[15px] lg:text-[16px] transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105 active:scale-95"
      />

    </div>
  );
};

export default Newsletter;