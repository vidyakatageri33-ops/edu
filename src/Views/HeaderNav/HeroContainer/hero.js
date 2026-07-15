import HeroContent from "./heroContent";
import HeroImages from "./heroImages";
import HeroShapes from "./heroShape";


const Hero = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      <div className="w-full max-w-[1440px] mx-auto">

        <div className="relative w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 min-h-[620px] flex items-center justify-center">

          {/* Decorative Shapes */}
          <HeroShapes />

          {/* Floating Images */}
          <HeroImages />

          {/* Hero Content */}
          <HeroContent />

        </div>

      </div>

    </section>
  );
};

export default Hero;