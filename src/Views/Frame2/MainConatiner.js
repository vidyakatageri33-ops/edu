import LeftContent from "./LeftContainer";
import SignupForm from "./SignUpForm";

const Mainframe = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-0">
      <div
        className="
          relative
          overflow-hidden
          max-w-[1120px]
          mx-auto
          rounded-[24px]
          bg-[#5D38DE]
          min-h-[362px]
          flex
          flex-col
          lg:flex-row
          items-center
          justify-between
          px-8
          sm:px-10
          lg:px-16
          py-10
        "
      >
        {/* Top Left */}
        <div className="absolute -top-[180px] -left-[180px] w-[360px] h-[360px] rounded-full bg-white/5"></div>
        <div className="absolute -top-[130px] -left-[130px] w-[260px] h-[260px] rounded-full bg-white/5"></div>
        <div className="absolute -top-[80px] -left-[80px] w-[160px] h-[160px] rounded-full bg-white/5"></div>

        {/* Top Right */}
        <div className="absolute -top-[180px] -right-[180px] w-[360px] h-[360px] rounded-full bg-white/5"></div>
        <div className="absolute -top-[130px] -right-[130px] w-[260px] h-[260px] rounded-full bg-white/5"></div>
        <div className="absolute -top-[80px] -right-[80px] w-[160px] h-[160px] rounded-full bg-white/5"></div>

        {/* Bottom Center */}
        <div className="absolute -bottom-[240px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full bg-white/5"></div>
        <div className="absolute -bottom-[190px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-white/5"></div>
        <div className="absolute -bottom-[140px] left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-white/5"></div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-auto">
          <LeftContent />
        </div>

        <div className="relative z-10 w-full lg:w-auto mt-8 lg:mt-0">
          <SignupForm />
        </div>
      </div>
    </section>
  );
};

export default Mainframe;