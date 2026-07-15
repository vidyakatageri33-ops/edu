import img16 from "../../../Assets/16.png";
import img17 from "../../../Assets/17.png";
import img15 from "../../../Assets/15.png";
import img14 from "../../../Assets/14.png";

import FloatingImage from "./FloatingImages/floatingImage";
import HeroContent from "./heroContent";
import HeroShapes from "../../HeaderNav/HeroContainer/heroShape";

const HeroContainer = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-8 lg:py-12">
      <div className="relative max-w-[1120px] mx-auto px-4 min-h-[360px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]">

        {/* Left Top */}
     <FloatingImage
  image={img16}
  className="absolute z-20 top-[60px] left-[-5px] sm:top-[45px] sm:left-[10px] md:top-[40px] md:left-[30px] lg:top-[40px] lg:left-[60px]"
/>

        {/* Left Bottom */}
        <FloatingImage
          image={img17}
          className="absolute z-20 top-[170px] left-[15px] sm:top-[190px] sm:left-[35px] md:top-[220px] md:left-[70px] lg:top-[240px] lg:left-[130px]"
        />

        {/* Hero Content */}
        <HeroContent />

        {/* Right Top */}
      <FloatingImage
  image={img15}
  className="absolute z-20 top-[55px] right-[-6px] sm:top-[45px] sm:right-[10px] md:top-[40px] md:right-[30px] lg:top-[40px] lg:right-[60px]"
/>

        {/* Right Bottom */}
        <FloatingImage
          image={img14}
          className="absolute z-20 top-[170px] right-[15px] sm:top-[190px] sm:right-[35px] md:top-[220px] md:right-[70px] lg:top-[240px] lg:right-[130px]"
        />

        <HeroShapes />

      </div>
    </section>
  );
};

export default HeroContainer;