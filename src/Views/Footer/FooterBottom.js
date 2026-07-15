import Copyright from "./copyRight";
import SocialIcons from "./socialLinks";

const FooterBottom = () => {
  return (
    <section className="w-full border-t border-white/20">
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 py-5 sm:py-6 lg:py-8">

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">

          {/* Copyright */}
          <div className="text-center sm:text-left">
            <Copyright />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end">
            <SocialIcons />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterBottom;