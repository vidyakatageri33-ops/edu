// const SectionHeading = () => {
//   return (
//     <>
//       <h2 className="mt-5 text-[32px] md:text-[48px] font-bold text-[#141219] leading-tight">
//         Learn from Industry Experts
//       </h2>

//       <p className="mt-4 max-w-[620px] mx-auto text-[#5C5C5C] text-base md:text-lg">
//         Gain insights from industry experts and master real-world skills for
//         career growth and professional development
//       </p>
//     </>
//   );
// };

// export default SectionHeading;
const SectionHeading = () => {
  return (
    <div className="w-full max-w-[621px] flex flex-col items-center gap-4 mx-auto">
      <h2 className="w-full max-w-[621px] font-sans font-bold text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[100%] tracking-normal text-center text-[#141219]">
        Learn from Industry Experts
      </h2>

      <p className="w-full max-w-[577px] font-sans font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[150%] tracking-normal text-center text-[#141219]">
        Gain insights from industry experts and master real-world skills for career growth and professional development.
      </p>
    </div>
  );
};

export default SectionHeading;