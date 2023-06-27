import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef();
  const firstAboutTextRef = useRef();
  const secondAboutTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      firstAboutTextRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: { trigger: aboutRef.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      secondAboutTextRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 2,
        scrollTrigger: { trigger: aboutRef.current, start: "top 70%" },
      }
    );
  }, []);
  return (
    <div ref={aboutRef} className="w-full px-[40px] md:px-[60px] py-[75px]">
      <h1
        ref={firstAboutTextRef}
        className="font-bold not-italic text-white text-[24px] md:text-[50px] tracking-[-1.5px] leading-[1.2] text-center"
      >
        SysLend is a decentralized money market for the Syscoin Ecosystem with
        tokenized Governance from Stakeholders to provide on-demand pool based
        Lending and Borrowing.
      </h1>
      <p
        ref={secondAboutTextRef}
        className="mt-[20px] font-medium text-[#c0bfbf] text-[16px] md:text-[18px] tracking-[-0.5px] leading-normal text-center"
      >
        Experience the new era of decentralized Lending and Borrowing with
        SYSLEND
      </p>
    </div>
  );
};

export default About;
