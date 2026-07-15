import Button from "../../Components/Button";
import InputField from "../../Components/InputField";

const Newsletter = () => {
  return (
    <div className="w-full max-w-[340px] flex flex-col gap-4">
      <InputField
        type="email"
        placeholder="Email address"
        icon="bi-envelope"
      />

      <Button
        name="Submit"
        bgColor="bg-white"
        textColor="text-[#5D38DE]"
        className="w-[120px] h-[56px] rounded-full font-bold text-[16px] hover:bg-gray-100"
      />
    </div>
  );
};

export default Newsletter;