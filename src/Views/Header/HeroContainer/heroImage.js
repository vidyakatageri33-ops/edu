
import img16 from "../../../Assets/16.png";
import img17 from "../../../Assets/17.png";
import img15 from "../../../Assets/15.png";
import img14 from "../../../Assets/14.png";
import FloatingImage from "./FloatingImages/floatingImage";

const HeroImages = () => {
  return (
    <>
      {/* Left Top */}
      <div className="absolute top-8 left-[6%]">
        <FloatingImage image={img16} />
      </div>

      {/* Left Bottom */}
      <div className="absolute bottom-[40%] left-[25%]">
        <FloatingImage image={img17} />
      </div>

      {/* Right Top */}
      <div className="absolute top-36 right-[10%]">
        <FloatingImage image={img15} />
      </div>

      {/* Right Bottom */}
      <div className="absolute bottom-40 right-[15%]">
        <FloatingImage image={img14} />
      </div>
    </>
  );
};

export default HeroImages;