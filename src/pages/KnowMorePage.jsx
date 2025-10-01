import CollaborationSection from "../components/CollaborationSection";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";
import { motion }  from "framer-motion";
import { fadeInUp } from "../components/ui/animations";

const KnowMorePage = () => {
  return (
    <div className="bg-black">
      <Container className="pt-25 md:pt-36 bg-black text-white">
        <FirstSectionWrapper className="w-full bg-black">
          <motion.h1
            className="text-6xl md:text-7xl xl:text-[185.521px] font-bold tracking-[18.552px] font-alan-sans text-center"
            style={{ paddingBottom: "4.44rem" }}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            STUDIO
          </motion.h1>

          <motion.p
            className="text-[27px] md:text-[38px] font-[500] text-center lg:px-40"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            We’re an independent creative studio, shaping brands with design,
            Creativity & marketing that inspire growth.
          </motion.p>

          <motion.img
            src="/Squanta Assets/team.png"
            alt=""
            className="py-44"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          />
        </FirstSectionWrapper>
      </Container>
      <Container>
        <div className="border-t border-white"></div>
      </Container>
      <div className="bg-black text-white">
        <Container className="flex flex-col md:flex-row items-center md:justify-between  py-60 gap-4">
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
        <Container>
          <div className="border-t border-white"></div>
        </Container>
        <div className="w-full max-w-[90rem] mx-auto  px-4 sm:px-6 md:px-[3.75rem] flex flex-col items-center md:justify-between my-60 gap-10">
          <div className="bg-black text-white font-sans w-full">
            <div className="flex flex-col w-full gap-20">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 lg:px-8">
                <h2 className="text-5xl text-center md:text-left md:text-8xl font-bold w-full">
                  01 Ideate
                </h2>
                <p className="text-sm md:text-base font-semibold tracking-wider text-gray-300 w-full text-center md:text-right">
                  – STRATEGY & BRANDING
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 lg:px-8">
                <h2 className="text-5xl text-center md:text-left md:text-8xl font-bold w-full">
                  02 Design
                </h2>
                <p className="text-sm md:text-base font-semibold tracking-wider text-gray-300 w-full text-center md:text-right">
                  – UX/UI & CREATIVE CONTENT
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 lg:px-8">
                <h2 className="text-5xl text-center md:text-left md:text-8xl font-bold w-full">
                  03 Grow
                </h2>
                <p className="text-sm md:text-base font-semibold tracking-wider text-gray-300 w-full text-center md:text-right">
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
