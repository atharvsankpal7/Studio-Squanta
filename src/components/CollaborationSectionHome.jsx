import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const CollaborationSectionHome = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-black text-white"> 
            <div className="
            w-full max-w-[90rem] h-auto lg:h-[58rem]  mx-auto 
            flex flex-col items-center px-[0.25rem]
            pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[6rem] xl:pt-[9rem]
            py-[1rem] sm:py-[2rem] md:py-[3rem] lg:py-[4rem] xl:py-0
        ">
                {/* Heading */}
                <h2
                    className="
                    text-center font-montserrat font-medium
                    text-[2rem] leading-tight h-auto w-full max-w-[20rem] mx-auto mb-4
                    sm:text-[3rem] sm:max-w-[30rem] sm:mb-6
                    md:text-[4rem] md:max-w-[40rem] md:mb-8
                    lg:text-[5.8rem] lg:max-w-[60rem] lg:mb-12
                    xl:text-[6.1rem] xl:max-w-[72.5rem] xl:h-[29.25rem] xl:mb-0
                    flex items-center justify-center
                    font-rogbold
                "
                    style={{
                        fontStyle: "normal",
                        lineHeight: "normal",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    We approach every project as a true partnership where our innovation aligns with your vision.
                </h2>

                {/* Motion Button */}
                <motion.button
                    whileHover={{
                        scale: 1.02,
                        boxShadow: "inset 0rem 0.25rem 0.5rem rgba(0,0,0,0.25), 0rem 0.5rem 1.25rem rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
                    group flex justify-center items-center
                    w-[18rem] h-[3rem] p-[0.375rem] gap-[1rem] rounded-[1.5rem] mt-6
                    sm:w-[24rem] sm:h-[3.5rem] sm:p-[0.5rem] sm:gap-[1rem] sm:rounded-[2rem] sm:mt-8
                    md:w-[32rem] md:h-[4rem] md:p-[0.625rem] md:gap-[1rem] md:rounded-[2.5rem] md:mt-12
                    lg:w-[50rem] lg:h-[5rem] lg:p-[0.625rem] lg:gap-[1.25rem] lg:rounded-[3rem] lg:mt-16
                    xl:w-[82.8125rem] xl:h-[6.3125rem] xl:p-[0.625rem] xl:gap-[1.25rem] xl:rounded-[3.5625rem] xl:mt-[10.75rem]
                    border-2 border-[#00FF26] bg-[#000] cursor-pointer
                    hover:bg-[#00FF26] hover:drop-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] hover:border-[#00FF26] 
                "
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        navigate('/collaboration');
                    }}
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
                    "
                        style={{
                            flexShrink: 0,
                            color: "#FFF",
                            fontFamily: "Montserrat",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal"
                        }}
                    >
                        Let's Collaborate
                    </span>

                    {/* Icon */}
                    <motion.svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 31 31"
                        fill="none"
                        className="
                        group-hover:rotate-[42.597deg] transition-transform duration-300 ease-in-out
                        w-[0.8rem] h-[0.8rem]
                        sm:w-[1.2rem] sm:h-[1.2rem]
                        md:w-[1.5rem] md:h-[1.5rem]
                        lg:w-[2rem] lg:h-[2rem]
                        xl:w-[2.35269rem] xl:h-[2.43769rem]
                    "
                        style={{
                            flexShrink: 0
                        }}
                    >
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M23.0819 5.67288L0.770614 26.1711C-0.110164 26.9809 -0.168816 28.3539 0.640028 29.2336C1.44985 30.1144 2.82291 30.1731 3.70262 29.3642L26.183 8.7126C26.2247 8.98638 26.2333 9.26696 26.2113 9.5483C25.608 16.9774 24.6688 28.5373 24.6688 28.5373C24.5717 29.7298 25.4605 30.7755 26.653 30.8726C27.8454 30.9697 28.8922 30.0799 28.9893 28.8874C28.9893 28.8874 29.9284 17.3295 30.5328 9.89944C30.7092 7.71727 29.9796 5.55945 28.5138 3.93321C27.047 2.30795 24.977 1.35894 22.7885 1.31003L3.56755 0.881708C2.37216 0.854034 1.37815 1.8033 1.35145 2.99976C1.32582 4.19523 2.27411 5.18818 3.47056 5.21487L22.6915 5.6432C22.8222 5.64664 22.9527 5.65621 23.0819 5.67288Z"
                            fill="white" />
                    </motion.svg>
                </motion.button>
            </div>
        </div>
    );
};

export default CollaborationSectionHome;
