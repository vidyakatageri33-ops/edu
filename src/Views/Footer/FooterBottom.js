import Copyright from "./copyRight";
import SocialIcons from "./socialLinks";

const FooterBottom = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <Copyright />
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;