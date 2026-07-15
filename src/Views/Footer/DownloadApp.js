const DownloadApps = () => {
  return (
    <div className="w-full max-w-[220px]">

      <h3 className="font-sans font-bold text-[20px] text-white mb-6">
        Download our app
      </h3>

      <div className="flex flex-col gap-4">

        {/* App Store */}
        <button className="w-full h-[56px] bg-[#6C49E8] rounded-xl px-5 flex items-center justify-between hover:bg-[#7354eb] transition-all duration-300">
          <div className="flex items-center gap-3">
            <i className="bi bi-apple text-white text-xl"></i>
            <span className="font-sans font-semibold text-white text-[16px]">
              App Store
            </span>
          </div>

          <i className="bi bi-chevron-right text-white"></i>
        </button>

        {/* Play Store */}
        <button className="w-full h-[56px] bg-[#6C49E8] rounded-xl px-5 flex items-center justify-between hover:bg-[#7354eb] transition-all duration-300">
          <div className="flex items-center gap-3">
            <i className="bi bi-google-play text-white text-lg"></i>
            <span className="font-sans font-semibold text-white text-[16px]">
              Play Store
            </span>
          </div>

          <i className="bi bi-chevron-right text-white"></i>
        </button>

      </div>

    </div>
  );
};

export default DownloadApps;