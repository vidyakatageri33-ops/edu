
import LeftContent from "./LeftContainer";
import SignupForm from "./SignUpForm";

const Mainframe = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-0">
      <div
        className="
          w-full
          max-w-[1120px]
          min-h-[362px]
          lg:h-[362px]
          mx-auto

          bg-[#5D38DE]
          rounded-[24px]
          overflow-hidden

          flex
          flex-col
          md:flex-row

          items-center
          justify-between

          px-8
          md:px-16
          py-10
        "
      >
        {/* Left Side */}
        <LeftContent />

        {/* Right Side */}
        <SignupForm />
      </div>
    </section>
  );
};

export default Mainframe;