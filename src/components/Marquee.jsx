import React from 'react';

/**
 * A responsive, two-line marquee component using React and Tailwind CSS.
 * The animation pauses when the user hovers over the component.
 */
export default function Marquee() {
  // --- Content for the marquee lines ---
  const line11 = "• Underway on a brand and website for an innovative leadership consultancy";
  const line12 = "• Engineered dynamic explainer videos to showcase Healnex’s AI-powered wellness tools";

  const line21 = "• Teamed up with Fitverse to reimagine their health app’s branding and user journey";
  const line22 = "• Currently modernizing a premium outdoor apparel brand • Working on launching a first-of-its-kind cake mix for people with severe allergies";

  /**
   * Represents a single, repeatable item within the marquee.
   * @param {{text: string}} props - The text content to display.
   */
  const MarqueeItem = ({ text }) => (
    <p className="font-medium text-base lg:text-lg whitespace-nowrap pr-[12.6rem]">
      {text}
    </p>
  );

  return (
    // Wrapper to center the component on the page for demonstration
    <main className="antialiased  flex items-center justify-center bg-black font-alan-sans">

      {/* --- Style block for Google Fonts and custom animations --- */}
      <style>
        {`
          
          /* Keyframes for the left-to-right marquee animation */
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }

          /* Keyframes for the right-to-left marquee animation */
          @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }

          /* Apply animation to the content */
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 60s linear infinite;
          }
        `}
      </style>

      {/* --- Marquee Component --- */}
      <div
        // The 'group' class enables the pause-on-hover functionality
        className="group  mx-auto bg-black text-white h-[6.25rem] flex flex-col justify-center overflow-hidden"
      >
        {/* --- Line 1 (Scrolls Left) --- */}
        <div className="flex">
          {/* We repeat the content block twice and animate both to create a seamless loop */}
          <div className="group-hover:[animation-play-state:paused] animate-marquee flex shrink-0">
            <MarqueeItem text={line11} />
            <MarqueeItem text={line12} />
            {/* <MarqueeItem text={line1} /> */}
          </div>
          <div className="group-hover:[animation-play-state:paused] animate-marquee flex shrink-0">
            <MarqueeItem text={line11} />
            <MarqueeItem text={line12} />
            {/* <MarqueeItem text={line1} /> */}
          </div>
        </div>

        {/* --- Line 2 (Scrolls Right) --- */}
        <div className="flex mt-2">
          {/* The reverse animation provides a nice contrast in movement */}
          <div className="group-hover:[animation-play-state:paused] animate-marquee-reverse flex shrink-0">
            <MarqueeItem text={line21} />
            <MarqueeItem text={line22} />
            {/* <MarqueeItem text={line2} /> */}
          </div>
          <div className="group-hover:[animation-play-state:paused] animate-marquee-reverse flex shrink-0">
            <MarqueeItem text={line21} />
            <MarqueeItem text={line22} />
            {/* <MarqueeItem text={line2} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
