import heroImg from "../assets/heroImg.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroTextRef = useRef();
  const heroImgRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 150 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.to(heroImgRef.current, {
      opacity: 1,
      y: -40,
      duration: 0.8,
      scrollTrigger: {
        trigger: heroImgRef.current,
        start: "bottom 50%",
        end: "bottom center",
        // scrub: 2,
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div id="hero" className="hero z-[20] w-full">
      <div className="hero-child  relative h-[88vh] vsm:h-[120vh] w-full px-[35px] md:px-[80px] flex items-center text-white">
        <div className="flex-1 flex lg:block flex-col items-center">
          <h1
            ref={heroTextRef}
            className="text-center lg:text-left font-montserrat whitespace-pre-wrap font-semibold text-white text-[35px] md:text-[50px] xmd:text-[65px] 2xl:text-[81px] tracking-[-1.5px] leading-[1.2]"
          >
            Pioneering DeFi in the SYSCOIN Ecosystem
          </h1>
          <p className="text-center lg:text-left mt-[10px] mb-[30px] text-[14px] md:text-[16px] font-manrope whitespace-pre-wrap font-bold not-italic text-[#e5d7d7] text-base tracking-wider leading-none">
            Pool based Lending and Collateralized Borrowing
          </p>
          <button className="py-[10px] px-[20px] text-[14px] font-bold">
            Discover SYSLEND
          </button>
        </div>
        <div className="hidden lg:block h-fit w-[49%]">
          <img
            ref={heroImgRef}
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
