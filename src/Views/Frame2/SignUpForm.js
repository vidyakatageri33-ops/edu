import Button from "../../Components/Button";
import InputField from "../../Components/InputField";

const SignupForm = () => {
  return (
    <div className="w-full flex justify-center lg:justify-end">
      <form
        className="
          w-full
          max-w-[358px]
          flex
          flex-col
          gap-4
          sm:gap-5
          lg:gap-[17px]
        "
      >
        {/* Name */}
        <InputField
          icon="bi-person"
          placeholder="Your Name"
        />

        {/* Email */}
        <InputField
          icon="bi-envelope"
          placeholder="Email Address"
          type="email"
        />

        {/* Submit Button */}
        <Button
          name="Submit form"
          bgColor="bg-white"
          textColor="text-[#5D38DE]"
          className="
            w-full
            sm:w-[180px]
            lg:w-[173px]

            h-[48px]
            sm:h-[52px]
            lg:h-[56px]

            rounded-full
            font-bold

            text-[14px]
            sm:text-[15px]
            lg:text-[16px]

            transition-all
            duration-300

            hover:bg-[#F5F5F5]
            hover:shadow-lg
            hover:scale-105

            active:scale-95
          "
        />
      </form>
    </div>
  );
};

export default SignupForm;