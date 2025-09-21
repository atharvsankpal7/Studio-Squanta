import React, { useState, useEffect, useRef } from "react";

// Reusable AnimatedText Component
const AnimatedText = ({ children, className, delay, style }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <h1
      ref={ref}
      className={`font-semibold transition-all duration-1000 ease-out transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
        ${className}`}
      style={{
        transitionDelay: delay,
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 600,
        lineHeight: "normal",
        ...style,
      }}
    >
      {children}
    </h1>
  );
};

// Main Header
const AnimatedHeader = () => {
  return (
    <div className="w-full flex justify-center items-center bg-black min-h-screen px-4">
      <div
        className="bg-black flex flex-col justify-center items-center text-center font-sans antialiased w-full max-w-[90rem]"
        style={{
          height: "clamp(30rem, 49.125rem, 90vh)",
          flexShrink: 0,
          gap: "clamp(1.5rem, 3.56rem, 4rem)",
        }}
      >
        <AnimatedText
          className="text-[2rem] md:text-[4rem] lg:text-[5.1rem]"
          delay="0ms"
          style={{ color: "#9E9E9E" }}
        >
          Initiate
        </AnimatedText>

        <AnimatedText
          className="text-[2.5rem] md:text-[5rem] lg:text-[6.56rem]"
          delay="500ms"
          style={{ color: "#BBB" }}
        >
          Expand
        </AnimatedText>

        <AnimatedText
          className="text-[3rem] md:text-[6rem] lg:text-[7.4rem]"
          delay="1000ms"
          style={{ color: "#FFF" }}
        >
          Transform
        </AnimatedText>
      </div>
    </div>
  );
};

export default AnimatedHeader;
  