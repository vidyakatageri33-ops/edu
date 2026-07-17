import { useState } from "react";
import logo from "../../../Assets/logo1.png";
import Button from "../../../Components/Button";
import { navLinks } from "./navData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#0000001A]">
      <div className="max-w-[1120px] h-[90px] lg:h-[120px] mx-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between">
        {/* Logo */}
        <div className="group flex items-center gap-[5px] cursor-pointer">
          <div className=" flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
            <img
              src={logo}
              alt="Sparkly"
              className="w-[20px] h-[30px] object-contain"
            />
          </div>

          <h1 className="font-bold text-[22px] sm:text-[24px] lg:text-[28px] text-[#141219] transition-colors duration-300 group-hover:text-[#5D38DE]">
            Sparkly
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`relative group flex items-center gap-2 text-[18px] font-medium cursor-pointer transition-all duration-300 ${
                  link.name === "Mentors"
                    ? "text-[#5D38DE]"
                    : "text-[#141219] hover:text-[#5D38DE]"
                }`}
              >
                {link.name}

                {link.hasDropdown && (
                  <i className="bi bi-chevron-down text-[12px] transition-transform duration-300 group-hover:rotate-180"></i>
                )}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#5D38DE] transition-all duration-300 ${
                    link.name === "Mentors"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-8 w-px bg-[#0000001A]"></div>

          <Button
            name="Register now"
            bgColor="bg-[#5D38DE]"
            textColor="text-white"
            className="w-[173px] h-[56px] rounded-full text-[18px] font-bold transition-all duration-300 hover:bg-[#4C2BC5] hover:scale-105 hover:shadow-xl active:scale-95"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden flex items-center justify-center w-11 h-11 rounded-full shadow-md border transition-all duration-300 ${
            isOpen
              ? "bg-[#5D38DE] border-[#5D38DE]"
              : "bg-white border-[#E5E7EB] hover:bg-[#5D38DE] hover:border-[#5D38DE]"
          }`}
        >
          <i
            className={`bi ${
              isOpen ? "bi-x-lg rotate-180" : "bi-list"
            } text-[22px] transition-all duration-300 ${
              isOpen ? "text-white" : "text-[#141219] hover:text-white"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-xl px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between text-[18px] font-medium text-[#141219] cursor-pointer transition-all duration-300 hover:text-[#5D38DE] hover:translate-x-2"
              >
                {link.name}

                {link.hasDropdown && (
                  <i className="bi bi-chevron-down transition-transform duration-300 group-hover:rotate-180"></i>
                )}
              </li>
            ))}
          </ul>

          <Button
            name="Register now"
            bgColor="bg-[#5D38DE]"
            textColor="text-white"
            className="mt-8 w-full h-[52px] rounded-full text-[18px] font-bold transition-all duration-300 hover:bg-[#4C2BC5] hover:scale-[1.02] hover:shadow-lg active:scale-95"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
