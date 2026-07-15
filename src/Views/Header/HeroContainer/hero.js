import HeroContent from "./heroContent";
import HeroImages from "./heroImage";
import HeroStars from "./heroStars";


const Hero = () => {
  return (
    <section className="relative w-full h-[560px] overflow-hidden">
      <HeroImages />
      <HeroStars />
      <HeroContent />
    </section>
  );
};

export default Hero;