import FloatingImage from "./FloatingImages/floatingImage"
import img16 from "../../../Assets/16.png"
import img17 from "../../../Assets/17.png"
import img15 from "../../../Assets/15.png"
import img14 from "../../../Assets/14.png"
import Rating from "./Rating"
import Button from "../../../Components/Button"
import Start2 from "../Stars/start2"
import Star from "../Stars/start1"
const HeroConatiner=()=>{
    return(
<section className="relative w-full h-[560px]">
  {/* Left Top Avatar */}
  
  <div className="absolute top-8 left-[6%]">
    <FloatingImage image={img16}/>
  </div>

  {/* Left Star */}
  <div className="absolute top-[26%] left-[12%]">
    <Start2 />
  </div>

  {/* Left Bottom Avatar */}
  <div className="absolute bottom-[40%] left-[25%]">
    <FloatingImage image={img17} />
  </div>

  {/* Center */}
 <div className="z-10 flex flex-col items-center -translate-y-15">
   <h1
  className=" max-w-[779px] w-full mx-auto font-sans font-bold
text-[30px] sm:text-[44px] md:text-[52px] lg:text-[64px] leading-[100%] text-center text-[#141219]">
  Elevate Your Skills
  <br />
  with Expert-Led Training
</h1>
    <div className="mt-8">
      <Rating />
    </div>

    <div className="mt-8">
    <Button
  name="Explore Courses"
  bgColor="bg-[#5D38DE]"
  textColor="text-white"
  className="inline-flex items-center justify-center w-[150px] h-[44px] sm:w-[170px] sm:h-[50px] lg:w-[197px] lg:h-[56px]
    px-5 sm:px-6 lg:px-[32px] py-3 lg:py-[16px] gap-[10px] rounded-[80px] text-sm sm:text-base font-bold
    hover:bg-[#4C2BC5] transition-all duration-300"
/>
 </div>
  </div>
  {/* Right Top Avatar */}
  <div className="absolute top-36 right-[10%]">
    <FloatingImage image={img15} />
  </div>

  {/* Right Star */}
  <div className="absolute top-30 right-[10%]">
    <Star />
  </div>

  {/* Right Bottom Avatar */}
  <div className="absolute bottom-40 right-[15%]">
    <FloatingImage image={img14} />
  </div>
</section>
    )
}
export default HeroConatiner