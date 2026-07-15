import img16 from "../../../Assets/16.png";
import img17 from "../../../Assets/17.png";
import img15 from "../../../Assets/15.png";
import img14 from "../../../Assets/14.png";
import FloatingImage from "./FloatingImages/floatingImage";
import HeroContent from "./heroContent";
import HeroShapes from "../../HeaderNav/HeroContainer/heroShape";
const HeroContainer = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="relative max-w-[1120px] mx-auto h-[520px]">

        {/* Left Top Avatar */}
        <FloatingImage
          image={img16}
          className="
            absolute
            top-[45px]
            left-[60px]
            z-20
            hidden lg:block
          "
        />

        {/* Left Bottom Avatar */}
        <FloatingImage
          image={img17}
          className="
            absolute
            top-[255px]
            left-[130px]
            z-20
            hidden lg:block
          "
        />

        {/* Hero Content */}
        <HeroContent />

        {/* Right Top Avatar */}
        <FloatingImage
          image={img15}
          className="
            absolute
            top-[40px]
            right-[60px]
            z-20
            hidden lg:block
          "
        />

        {/* Right Bottom Avatar */}
        <FloatingImage
          image={img14}
          className="
            absolute
            top-[275px]
            right-[130px]
            z-20
            hidden lg:block
          "
        />

        {/* Stars */}
        <HeroShapes />

      </div>
    </section>
  );
};

export default HeroContainer;