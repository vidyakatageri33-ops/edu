import profile1 from "../../../Assets/9.png";
import profile2 from "../../../Assets/13.png";
import profile3 from "../../../Assets/10.png";


const Rating = () => {
  return (
    <div className="flex items-center gap-4">
      {/* Profile Images */}
      <div className="flex -space-x-3">
        <img src={profile1} className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-100" alt="profile2" />
        <img src={profile2} className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-100" alt="profile3" />
        <img src={profile3} className="w-12 h-12 rounded-full border-2 border-white object-cover bg-gray-100" alt="profile4" />
      </div>

      {/* Rating */}
      <div>
        <div className="flex gap-1 text-[#FFD700] text-lg">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
        </div>

        <p className="text-sm text-gray-500 mt-1">
          From 2.5K Reviews
        </p>
      </div>
    </div>
  );
};

export default Rating;

