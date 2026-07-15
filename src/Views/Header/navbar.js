import logo from "../../Assets/Vector.png";
import Button from "../../Components/Button";

const NavBar = () => {
  return (
<nav className="w-full">

    
<div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-4 lg:gap-10">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-1">
            <div className="w-6 h-8 sm:w-7 sm:h-9 lg:w-[20px] lg:h-[36px] bg-[#5D38DE] rounded flex items-center justify-center">
              <img
                src={logo}
                alt="Sparkly Logo"
                className=" text-black w-3 h-6 sm:w-3.5 sm:h-7 lg:w-[14.64px] lg:h-[31.36px] object-contain"
              />
            </div>

            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[32px] font-bold text-[#141219] whitespace-nowrap">
              Sparkly
            </h1>
          </div>

          {/* Navigation Links */}
          <ul className="flex items-center gap-2 sm:gap-3 md:gap-5 lg:gap-8 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-[#141219] whitespace-nowrap">
            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              Home
            </li>

            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              About Us
            </li>

            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              Courses
            </li>

            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              Mentors
            </li>

            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              Blogs
            </li>

            <li className="cursor-pointer hover:text-[#5D38DE] transition">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Register Button */}
  <Button
  name="Register Now"
  className="
    inline-flex
    items-center
    justify-center

    w-[110px] h-[38px]
    sm:w-[130px] sm:h-[44px]
    md:w-[150px] md:h-[50px]
    lg:w-[173px] lg:h-[56px]

    px-3 py-2
    sm:px-5 sm:py-3
    lg:px-[32px] lg:py-[16px]

    rounded-[80px]
    gap-[10px]

    text-[11px]
    sm:text-sm
    lg:text-base

    font-bold
  "
/>
      </div>
    </nav>
  );
};

export default NavBar;

//   <nav className="w-full">
//       <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">

//         {/* Top Navbar */}
//         <div className="h-[56px] flex items-center justify-between">

//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <div className="w-[20px] h-[36px] bg-[#5D38DE] rounded flex items-center justify-center">
//               <img
//                 src={logo}
//                 alt="Sparkly"
//                 className="w-[14px] h-[31px] object-contain"
//               />
//             </div>

//             <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold text-[#141219]">
//               Sparkly
//             </h1>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex items-center gap-10">

//             <ul className="flex items-center gap-8 text-base font-medium text-[#141219]">
//               <li className="hover:text-[#5D38DE] cursor-pointer">Home</li>
//               <li className="hover:text-[#5D38DE] cursor-pointer">About Us</li>
//               <li className="hover:text-[#5D38DE] cursor-pointer">Courses</li>
//               <li className="hover:text-[#5D38DE] cursor-pointer">Mentors</li>
//               <li className="hover:text-[#5D38DE] cursor-pointer">Blogs</li>
//               <li className="hover:text-[#5D38DE] cursor-pointer">Contact Us</li>
//             </ul>

//             <Button
//               name="Register Now"
//               className="
//                 w-[173px]
//                 h-[56px]
//                 rounded-full
//                 px-8
//                 py-4
//                 text-base
//               "
//             />
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-3xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-6">

//             <ul className="flex flex-col gap-5 text-base font-medium text-[#141219]">
//               <li>Home</li>
//               <li>About Us</li>
//               <li>Courses</li>
//               <li>Mentors</li>
//               <li>Blogs</li>
//               <li>Contact Us</li>
//             </ul>

//             <Button
//               name="Register Now"
//               className="
//                 mt-6
//                 w-full
//                 h-[50px]
//                 rounded-full
//                 text-base
//               "
//             />

//           </div>
//         )}
//       </div>
//     </nav>
