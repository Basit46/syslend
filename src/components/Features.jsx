import React, { useState, useRef, useEffect } from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";
import Feature4 from "./Feature4";
import Feature5 from "./Feature5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sliderRef = useRef();
  const featuresContRef = useRef();
  const featuresRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      featuresRef.current,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: featuresContRef.current, start: "top 70%" },
      }
    );
  }, []);

  let settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  let settingsMd = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  let settingsMobile = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 7000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleRadioClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div
      ref={featuresContRef}
      id="features"
      className="w-full bg-[#2b1581] h-fit grid place-items-center"
    >
      <div
        ref={featuresRef}
        className="features w-[95vw] h-fit my-[100px] py-[50px] rounded-[22px]"
      >
        <h1 className="font-manrope font-bold text-center text-white text-[47px] tracking-[-1.5px] leading-[1.2]">
          SYSLEND Features
        </h1>
        <p className="font-sans text-center text-[rgba(233,231,231,0.81)] text-base tracking-[0.14em] leading-[1.2]">
          more than you think
        </p>

        <div className="mt-[50px] w-full h-fit overflow-x-hidden px-[50px] hidden xl:flex justify-center ">
          <Slider ref={sliderRef} {...settings} className="w-[100%] h-fit">
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
          </Slider>
        </div>

        <div className="mt-[50px] w-full h-fit overflow-x-hidden px-[50px] hidden md:flex xl:hidden justify-center ">
          <Slider ref={sliderRef} {...settingsMd} className="w-[100%] h-fit">
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
          </Slider>
        </div>

        <div className="mt-[50px] w-full h-fit overflow-x-hidden flex md:hidden justify-center">
          <Slider ref={sliderRef} {...settingsMobile} className="w-[100%]">
            <Feature1 />
            <Feature2 />
            <Feature3 />
            <Feature4 />
            <Feature5 />
          </Slider>
        </div>

        <div className="radio-container">
          {/* Render the radio buttons */}
          {React.Children.toArray(
            Array(5)
              .fill(null)
              .map((_, index) => (
                <div
                  className={`radio-button ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => handleRadioClick(index)}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
