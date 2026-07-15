import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#5D38DE] px-5 py-5">
      <div className="w-full max-w-[1440px] mx-auto">
        <FooterTop />
        {/* Divider */}
        <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0">
          <div className="w-full h-px bg-[#FFFFFF1A]"></div>
        </div>
         <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;