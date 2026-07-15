import HeroConatiner from "./HeroContainer/herocontainer"
import NavBar from "./navbar"

const Header=()=>{

  return(
    <section className="w-full max-w-[1440px] mx-auto ">
      <div className="px-6 py-6 lg:px-10 lg:py-8 border-b border-[#0000001A]">
  {/* Header Content */}
  <NavBar/>
  </div>
   <HeroConatiner/>
   
</section>
  )
}



export default Header