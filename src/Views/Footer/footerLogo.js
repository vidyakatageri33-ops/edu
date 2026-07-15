import logo from "../../Assets/Vector.png"
import Newsletter from "./newsLetter";

const FooterLogo = () => {
  return (
    <div className="w-full max-w-[340px] flex flex-col gap-8">

      {/* Logo */}

      <div className="flex items-center gap-2">

        <img
          src={logo}
          alt="Sparkly"
          className="w-8 h-8 object-contain"
        />

        <h2 className="font-sans font-bold text-[28px] text-white">
          Sparkly
        </h2>

      </div>
      <Newsletter />

    </div>
  );
};

export default FooterLogo;