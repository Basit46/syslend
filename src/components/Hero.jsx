import heroImg from "../assets/heroImg.webp";

const Hero = () => {
  return (
    <div className="hero  w-full">
      <div className="h-[120vh] w-full px-[80px] flex items-center text-white">
        <div className="flex-1">
          <h1 className="font-montserrat whitespace-pre-wrap font-semibold text-white text-[65px] 2xl:text-[81px] tracking-[-1.5px] leading-[1.2]">
            Pioneering DeFi in the SYSCOIN Ecosystem
          </h1>
          <p className="mt-[10px] mb-[30px] font-manrope whitespace-pre-wrap font-bold not-italic text-[#e5d7d7] text-base tracking-wider leading-none">
            Pool based Lending and Collateralized Borrowing
          </p>
          <button className="py-[10px] px-[20px] text-[14px] font-bold">
            Discover SYSLEND
          </button>
        </div>
        <div className="h-fit w-[49%]">
          <img
            className="h-fit w-full object-cover"
            src={heroImg}
            alt="heroImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
