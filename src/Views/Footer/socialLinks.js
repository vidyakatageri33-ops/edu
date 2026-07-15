const SocialIcons = () => {
  const socialLinks = [
    { icon: "bi-facebook", link: "#" },
    { icon: "bi-instagram", link: "#" },
    { icon: "bi-twitter-x", link: "#" },
    { icon: "bi-linkedin", link: "#" },
  ];

  return (
    <div className="w-full max-w-[272px] flex items-center justify-center md:justify-end gap-4">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] rounded-[60px] border border-[#FFFFFF1A] flex items-center justify-center text-white text-[18px] sm:text-[20px] hover:bg-white hover:text-[#5D38DE] transition-all duration-300"
        >
          <i className={`bi ${item.icon}`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;