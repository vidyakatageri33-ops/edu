import { useState } from "react";
import logo from "../../Assets/logo1.png";
import Button from "../../Components/Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About us",
    "Courses",
    "Mentors",
    "Blogs",
    "Contact us",
  ];

  return (
    <header className="w-full border-b border-[#0000001A] bg-white">
      <div className="w-full max-w-[1120px] h-[120px] mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-[10px] cursor-pointer">

          <img
            src={logo}
            alt="Sparkly"
            className="w-[21px] h-[31px] object-contain"
          />

          <h1 className="font-sans font-bold text-[24px] md:text-[26px] lg:text-[28px] leading-[100%] text-[#141219]">
            Sparkly
          </h1>

        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-[80px]">

          <ul className="flex items-center gap-[40px]">

            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`font-sans font-medium text-[18px] leading-[100%] cursor-pointer transition-all duration-300 ${
                  item === "Mentors"
                    ? "text-[#5D38DE]"
                    : "text-[#141219] hover:text-[#5D38DE]"
                }`}
              >
                {item}

                {item === "Courses" && (
                  <i className="bi bi-chevron-down text-[12px] ml-2"></i>
                )}
              </li>
            ))}

          </ul>

          <Button
            name="Register now"
            bgColor="bg-[#5D38DE]"
            textColor="text-white"
            className="w-[173px] h-[56px] rounded-[80px] font-bold text-[18px]"
          />

        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-[30px] text-[#141219]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-5 pb-6">

          <ul className="flex flex-col gap-5">

            {menuItems.map((item, index) => (
              <li
                key={index}
                className="font-medium text-[18px] text-[#141219]"
              >
                {item}
              </li>
            ))}

          </ul>

          <Button
            name="Register now"
            bgColor="bg-[#5D38DE]"
            textColor="text-white"
            className="mt-6 w-full h-[52px] rounded-full"
          />

        </div>
      </div>

    </header>
  );
};

export default NavBar;