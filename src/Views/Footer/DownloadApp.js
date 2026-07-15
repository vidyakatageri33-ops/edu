const DownloadApps = () => {
  return (
    <div className="w-full max-w-[320px]">

      {/* Heading */}
      <h3 className="font-sans font-bold text-[20px] sm:text-[22px] lg:text-[24px] text-white mb-5 sm:mb-6">
        Download our app
      </h3>

      {/* Buttons */}
      <div className="flex flex-col gap-4">

        {/* App Store */}
        <button
          className="
            group
            w-full
            h-[50px]
            sm:h-[54px]
            lg:h-[56px]
            bg-[#6C49E8]
            rounded-xl
            px-4
            sm:px-5
            flex
            items-center
            justify-between
            transition-all
            duration-300
            hover:bg-[#7354EB]
            hover:shadow-xl
            hover:scale-[1.02]
            active:scale-95
          "
        >
          <div className="flex items-center gap-3">

            <i className="bi bi-apple text-white text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110"></i>

            <span className="font-semibold text-white text-[15px] sm:text-[16px] lg:text-[17px]">
              App Store
            </span>

          </div>

          <i className="bi bi-chevron-right text-white transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>

        {/* Play Store */}
        <button
          className="
            group
            w-full
            h-[50px]
            sm:h-[54px]
            lg:h-[56px]
            bg-[#6C49E8]
            rounded-xl
            px-4
            sm:px-5
            flex
            items-center
            justify-between
            transition-all
            duration-300
            hover:bg-[#7354EB]
            hover:shadow-xl
            hover:scale-[1.02]
            active:scale-95
          "
        >
          <div className="flex items-center gap-3">

            <i className="bi bi-google-play text-white text-base sm:text-lg transition-transform duration-300 group-hover:scale-110"></i>

            <span className="font-semibold text-white text-[15px] sm:text-[16px] lg:text-[17px]">
              Play Store
            </span>

          </div>

          <i className="bi bi-chevron-right text-white transition-transform duration-300 group-hover:translate-x-1"></i>
        </button>

      </div>

    </div>
  );
};

export default DownloadApps;