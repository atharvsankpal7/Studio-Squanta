import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Make sure to import this

const MotionButton = ({className}) => {
  const navigate = useNavigate();

  className = `py-6 sm:py-8 md:py-10 lg:py-12 xl:pt-[6.6rem] xl:pb-[3rem] ${className}`
  return (
    <div className={className}>

      <motion.button
        // 1. Removed the 'whileHover' prop to prevent scaling and shadow changes.
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="
        hidden 
        group lg:flex justify-center items-center
        w-[18rem] h-[3rem] p-[0.375rem] gap-[0.75rem] rounded-[1.5rem] 
        sm:w-[24rem] sm:h-[3.5rem] sm:p-[0.5rem] sm:gap-[0.875rem] sm:rounded-[2rem] 
        md:w-[32rem] md:h-[4rem] md:p-[0.625rem] md:gap-[1rem] md:rounded-[2.5rem] 
        lg:w-[50rem] lg:h-[5rem] lg:p-[0.625rem] lg:gap-[1.125rem] lg:rounded-[3rem] 
        xl:w-[82.375rem] xl:h-[6.3125rem] xl:p-[0.625rem] xl:gap-[1.25rem] xl:rounded-[3.5625rem]
        border-2 border-[#00FF26] bg-[#000] cursor-pointer
        " // 2. Removed Tailwind's hover classes: 'hover:bg-[#00FF26]' and 'hover:drop-shadow-[...]'
        onClick={() => navigate("/collaboration")}
      >
        {/* Button Text */}
        <span
          className="
          text-white font-montserrat font-semibold leading-normal whitespace-nowrap
          text-[1rem] w-[8rem]
          sm:text-[1.25rem] sm:w-[10rem]
          md:text-[1.5rem] md:w-[12rem]
          lg:text-[2rem] lg:w-[16rem]
          xl:text-[3rem] xl:w-[25.75rem]
          " // 3. Removed 'group-hover:text-black' to keep the text color white on hover.
          style={{
            flexShrink: 0,
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "normal",
          }}
        >
          Let's Collaborate
        </span>

        {/* Icon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 31"
          fill="none"
          className="
          group-hover:rotate-[42.597deg] transition-transform duration-300 ease-in-out // This is the only hover effect remaining
          w-[1rem] h-[1rem]
          sm:w-[1.25rem] sm:h-[1.25rem]
          md:w-[1.5rem] md:h-[1.5rem]
          lg:w-[2rem] lg:h-[2rem]
          xl:w-[2.35269rem] xl:h-[2.43769rem]
        "
          style={{
            flexShrink: 0,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.5819 5.67288L1.27061 26.1711C0.389836 26.9809 0.331184 28.3539 1.14003 29.2336C1.94985 30.1144 3.32291 30.1731 4.20262 29.3642L26.683 8.7126C26.7247 8.98638 26.7333 9.26696 26.7113 9.5483C26.108 16.9774 25.1688 28.5373 25.1688 28.5373C25.0717 29.7298 25.9605 30.7755 27.153 30.8726C28.3454 30.9697 29.3922 30.0799 29.4893 28.8874C29.4893 28.8874 30.4284 17.3295 31.0328 9.89944C31.2092 7.71727 30.4796 5.55945 29.0138 3.93321C27.547 2.30795 25.477 1.35894 23.2885 1.31003L4.06755 0.881708C2.87216 0.854034 1.87815 1.8033 1.85145 2.99976C1.82582 4.19523 2.77411 5.18818 3.97056 5.21487L23.1915 5.6432C23.3222 5.64664 23.4527 5.65621 23.5819 5.67288Z"
            fill="white"
          />
        </motion.svg>
      </motion.button>
    </div>

  );
};

export default MotionButton;