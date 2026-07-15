// const SectionTitle = () => {
//   return (
//     <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#F3EEFF] text-[#5D38DE] text-sm font-semibold">
//       Our Team
//     </div>
//   );
// };

// export default SectionTitle;
const SectionTitle = () => {
  return (
    <div
      className="
        inline-flex
        items-center
        justify-center

        px-4
        py-2

        sm:px-5
        sm:py-2.5

        rounded-full

        bg-[#F3EEFF]
        border border-[#E7DEFF]
      "
    >
      <span
        className="
          font-sans
          font-bold

          text-[14px]
          sm:text-[15px]
          lg:text-[16px]

          leading-[100%]
          tracking-normal

          text-[#5D38DE]
          whitespace-nowrap
        "
      >
        Our Team
      </span>
    </div>
  );
};

export default SectionTitle;