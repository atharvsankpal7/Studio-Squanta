const CollaborationSection1 = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Desktop Container */}
      <div
        className="hidden lg:flex w-[90rem] h-[43.875rem]  mx-auto items-center justify-center"
        style={{ marginTop: "5.63rem" }}
      >
        <h1
          className="text-[6.528rem] font-semibold leading-normal"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600"
          }}
        >
          <span style={{ color: "#5B5B5B" }}>Collaborating to </span>
          <span style={{ color: "#000" }}>accelerate progress, inspire change, </span>
          <span style={{ color: "#5B5B5B" }}>and lead the future.</span>
        </h1>
      </div>

      {/* Mobile Container */}
      <div className="lg:hidden px-[1rem] py-[3rem] mt-[3.5rem] sm:mt-[3rem] md:mt-[4rem]">
        <h1
          className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-semibold leading-tight"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "600"
          }}
        >
          <span style={{ color: "#5B5B5B" }}>Collaborating to </span>
          <span style={{ color: "#000" }}>accelerate progress, inspire change, </span>
          <span style={{ color: "#5B5B5B" }}>and lead the future.</span>
        </h1>
      </div>
    </div>
  );
};

export default CollaborationSection1;
