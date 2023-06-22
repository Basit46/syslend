import heroImg from "../assets/heroImg.webp";

const Hero = () => {
  return (
    <div id="hero" className="hero  w-full">
      <div className="h-[100vh] vsm:h-[120vh] w-full px-[35px] md:px-[80px] flex items-center text-white">
        <div className="flex-1 flex xl:block flex-col items-center">
          <h1 className="text-center xl:text-left font-montserrat whitespace-pre-wrap font-semibold text-white text-[35px] md:text-[50px] xmd:text-[65px] 2xl:text-[81px] tracking-[-1.5px] leading-[1.2]">
            Pioneering DeFi in the SYSCOIN Ecosystem
          </h1>
          <p className="text-center xl:text-left mt-[10px] mb-[30px] text-[14px] md:text-[16px] font-manrope whitespace-pre-wrap font-bold not-italic text-[#e5d7d7] text-base tracking-wider leading-none">
            Pool based Lending and Collateralized Borrowing
          </p>
          <button className="py-[10px] px-[20px] text-[14px] font-bold">
            Discover SYSLEND
          </button>
        </div>
        <div className="hidden xl:block h-fit w-[49%]">
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
