import DownloadApps from "./DownloadApp";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./footerLogo";

const FooterTop = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-0 pt-10 sm:pt-12 lg:pt-16 pb-8 sm:pb-10 lg:pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-8 sm:gap-10 lg:gap-16">

          <FooterLogo />

          <FooterLinks />

          <DownloadApps />

        </div>

      </div>
    </section>
  );
};

export default FooterTop;