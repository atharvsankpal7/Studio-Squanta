import React from 'react'

function WorkPageFirstSection() {
  return (
    <div>
      <h2
        className="
          text-center text-white
          text-[70px] tracking-[4.7px]
          md:text-[120px] md:tracking-[7px]
          uppercase
          lg:text-[185.521px] lg:tracking-[10px]
          xl:text-[185.521px] xl:tracking-[18.552px]
          leading-normal h-auto w-full max-w-[18rem] mx-auto mb-4
          sm:max-w-[24rem] sm:mb-6
          md:max-w-[32rem] md:mb-8
          lg:max-w-[976px] lg:mb-12
          xl:max-w-[82.375rem] xl:mb-0
          flex items-center justify-center
          bg-black
          pt-[2rem] sm:pt-[3rem] md:pt-[4rem] lg:pt-[6rem] xl:pt-[9rem]
        pb-[2rem] sm:pb-[3rem] md:pb-[4rem] lg:pb-[5rem] xl:pb-0
        "
        style={{
          fontFamily: "Rogbold",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
        }}
      >
       Our Work
      </h2>
    </div>
  )
}

export default WorkPageFirstSection
