import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const KnowMorePage = () => {
  return (
    <div className="bg-black">
      <Container className="pt-25 md:pt-36 bg-black text-white">
        <FirstSectionWrapper className="w-full bg-black">
          <h1
            className="text-6xl md:text-7xl xl:text-[185.521px] font-bold tracking-[18.552px] font-alan-sans text-center "
            style={{ paddingBottom: "4.44rem" }}
          >
            STUDIO
          </h1>
          <p className="text-[27px] md:text-[38px] font-[500] text-center lg:px-40 ">
            We’re an independent creative studio, shaping brands with design,
            Creativity & marketing that inspire growth.
          </p>
          <img src="/Squanta Assets/team.png" alt="" className="py-44" />
        </FirstSectionWrapper>
      </Container>
      <div className="bg-black text-white">
        <Container className="flex flex-col md:flex-row items-center md:justify-between border-t border-white border-b py-60 gap-4">
          <h1 className="text-[32px] md:text-[50px] xl:text-[64px] font-bold lg:w-[550px] font-alan-sans">
            United Team Worldwide Impact
          </h1>
          <div className="flex flex-col items-around justify-center items-center">
            <div className="text-[80px] md:text-[120px] xl:text-[174.816px] font-bold">
              45+
            </div>
            <div className="text-[16px] lg:text-[32px]  font-bold">
              Project Delivered
            </div>
            <div className="text-[80px] md:text-[120px] xl:text-[174.816px] font-bold">
              40+
            </div>
            <div className="text-[16px] lg:text-[32px] font-bold">Clients</div>
          </div>
        </Container>
        <div className="w-full  px-4 sm:px-6 md:px-[3.75rem] flex flex-col items-center md:justify-between my-60  gap-10">
          <div class="bg-black text-white font-sans w-full">
            <div class="flex flex-col w-full  gap-20">
              <div class="flex flex-row justify-between items-center pb-8 lg:px-8">
                <h2 class="text-2xl md:text-8xl font-bold">01 Ideate</h2>
                <p class="text-sm md:text-base font-semibold tracking-wider text-gray-300">
                  – STRATEGY & BRANDING
                </p>
              </div>

              <div class="flex flex-row justify-between items-center pb-8 lg:px-8">
                <h2 class="text-2xl md:text-8xl font-bold">02 Design</h2>
                <p class="text-sm md:text-base font-semibold tracking-wider text-gray-300">
                  – UX/UI & CREATIVE CONTENT
                </p>
              </div>

              <div class="flex flex-row justify-between items-center pb-8 lg:px-8">
                <h2 class="text-2xl md:text-8xl font-bold">03 Grow</h2>
                <p class="text-sm md:text-base font-semibold tracking-wider text-gray-300">
                  – MARKETING & BUSINESS IMPACT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CollaborationSection />
    </div>
  );
};

export default KnowMorePage;
