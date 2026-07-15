import Button from "../../Components/Button";
import InputField from "../../Components/InputField";

const SignupForm = () => {
  return (
    <div className="w-full flex justify-center md:justify-end">
 <form
  className="
    w-full
    max-w-[358px]

    flex
    flex-col
    gap-4
    sm:gap-[17px]
  "
>
  <InputField
    icon="bi-person"
    placeholder="Your Name"
  />

  <InputField
    icon="bi-envelope"
    placeholder="Email Address"
    type="email"
  />

  <Button
    name="Submit form"
    bgColor="bg-white"
    textColor="text-[#5D38DE]"
    className="
      w-[150px]
      sm:w-[170px]
      lg:w-[173px]

      h-[48px]
      sm:h-[52px]
      lg:h-[56px]
    "
  />
</form>
    </div>
  );
};

export default SignupForm;