import { floatingImages } from "./heroData";

const HeroImages = () => {
  return (
    <>
      {floatingImages.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.className} scale-75 md:scale-90 lg:scale-100`}
        >
          <div className="w-[70px] h-[70px] md:w-[82px] md:h-[82px] lg:w-[96px] lg:h-[96px] rounded-full overflow-hidden border-[6px] border-white shadow-[0px_15px_40px_rgba(0,0,0,0.12)] bg-white">
            <img
              src={item.image}
              alt="student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroImages;