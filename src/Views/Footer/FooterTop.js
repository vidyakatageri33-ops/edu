import DownloadApps from "./DownloadApp";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./footerLogo";

const FooterTop = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 py-10 lg:py-16">

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-8">

          {/* Logo */}
          <div className="w-full lg:max-w-[320px]">
            <FooterLogo />
          </div>

          {/* Links */}
          <div className="w-full lg:flex-1 flex justify-start lg:justify-center">
            <FooterLinks />
          </div>

          {/* Download Apps */}
          <div className="w-full lg:max-w-[220px] flex justify-start lg:justify-end">
            <DownloadApps />
          </div>

        </div>

      </div>
    </section>
  );
};

export default FooterTop;