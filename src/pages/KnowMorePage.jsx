import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import DetailedSection from "../components/DetailedSection";
import FocusResearchSection from "../components/FocusResearchSection";
import CapabilitiesSection from "../components/CapabilitiesSection";
import CybersecuritySection from "../components/CybersecuritySection";
import TalentAcquisitionSection from "../components/TalentAqu";
import CollaborationSection from "../components/CollaborationSection";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import FirstSectionWrapper from "../components/FirstSectionWrapper";

const tabData = {
  strategy: {
    title:
      "Strategic solutions designed to accelerate progress and maximize impact.",
    image: "All Images Landing page Altecht\\Rectangle 76.png",
    paragraph1:
      "At the core of our strategy services is a commitment to creating frameworks that are not only clear but also actionable and future-ready. We specialize in designing roadmaps that evolve with your business while maintaining the focus and adaptability required to thrive in today’s competitive landscape.",
    paragraph2:
      "Our approach blends data-driven insights with creative vision. From market research and competitive analysis to product strategy, financial modeling, software architecture, UI/UX auditing, cybersecurity planning, and talent acquisition strategies, we design solutions that adapt to change while driving measurable impact. Every recommendation we deliver is built to evolve with your brand and position you ahead of the competition. What truly sets us apart is our collaborative mindset.We work as an extension of your team—analyzing, refining, and optimizing strategies so you’re always prepared to move faster, adapt smarter, hire better, and scale securely",
    paragraph3:
      "By leveraging industry insights and proven methodologies, we deliver scalable, adaptable strategies. Whether it’s launching new products, optimizing operations, or shaping your digital ecosystem, we ensure every initiative is measurable, efficient, and future-ready. Our expertise spans business strategy, technology adoption, and operational planning, ensuring success across every layer. From defining growth pathways to enabling sustainable innovation, we design strategies that evolve with your business and drive lasting impact.",
    sammary:
      "At Altecht, we transform complexity into clarity by creating actionable roadmaps that align every decision, campaign, and initiative with your business goals. Our approach combines data-driven insights with creative vision—covering market research, product strategy, financial modeling, software architecture, UI/UX auditing, cybersecurity, and talent acquisition—to design solutions that adapt to change while driving measurable impact. What sets us apart is our collaborative mindset: we work as an extension of your team to analyze, refine, and optimize strategies so you can move faster, adapt smarter, hire better, and scale securely. For us, strategy isn’t just guidance—it’s a growth blueprint that keeps your brand secure, agile, and future-ready.",
    section: FocusResearchSection,
  },
  engineering: {
    title: "We turn bold ideas into powerful digital solutions.",
    image: "All Images Landing page Altecht\\engineering.png",
    paragraph1:
      "At the core of our engineering services is a commitment to building systems that are not only powerful but also scalable and reliable. We specialize in creating solutions that can grow with your business while maintaining the performance and dependability required to meet today’s fast-paced technological demands.",
    paragraph2:
      "Our engineering process begins with a deep understanding of your project’s technical requirements, encompassing areas like AI/ML, app development, web development, DevOps, and cloud management. We work closely with you to define specific goals, challenges, and opportunities, crafting solutions that align with your business objectives. This initial phase helps us establish a clear strategy for building systems that maximize functionality while integrating seamlessly with existing platforms and future advancements.",
    paragraph3:
      "By leveraging industry-leading technologies and best practices, we deliver scalable, adaptable solutions. Whether it’s developing applications from scratch, optimizing cloud infrastructure, or implementing AI-driven systems, we ensure every aspect is secure, efficient, and future-ready. Our expertise spans backend architecture, front-end development, and cloud services, ensuring smooth operations across every layer. From managing complex data processes to delivering intuitive user experiences, we build systems designed to evolve with your business and support sustainable success.",
    sammary:
      "At the heart of our engineering services is a commitment to building systems that are powerful, scalable, and reliable. We specialize in solutions that grow with your business while maintaining the performance and dependability needed in today’s fast-paced tech landscape. Our process starts with understanding your project’s technical requirements—including AI/ML, app and web development, DevOps, and cloud management—so we can define clear goals and craft solutions that align with your business objectives. Leveraging industry-leading technologies and best practices, we deliver adaptable, secure, and future-ready systems, whether it’s developing applications, optimizing cloud infrastructure, or implementing AI-driven solutions. From backend architecture to front-end development and cloud services, we build systems designed to evolve with your business and drive sustainable success..",
    section: CapabilitiesSection,
  },
  cybersecurity: {
    title: "We don't just protect systems - we secure your future.",
    image: "All Images Landing page Altecht\\Services_ Know more 2.jpg",
    paragraph1:
      "At the core of our cybersecurity services is a commitment to safeguarding systems that are not only secure but also resilient and adaptive. We specialize in delivering protection strategies that grow with your business while maintaining the vigilance and reliability required to withstand today’s evolving digital threats.",
    paragraph2:
      "Our cybersecurity process begins with a deep understanding of your organization’s risk landscape, encompassing areas like network defense, endpoint protection, identity management, cloud security, and compliance. We work closely with you to define specific vulnerabilities, challenges, and opportunities, crafting defense mechanisms that align with your business objectives. This initial phase helps us establish a clear strategy for protecting assets while integrating seamlessly with existing frameworks and future advancements.",
    paragraph3:
      "By leveraging industry-leading tools and best practices, we deliver scalable, adaptive security solutions. Whether it’s safeguarding data, hardening cloud infrastructure, or implementing AI-driven threat detection, we ensure every aspect is proactive, efficient, and future-ready. Our expertise spans risk assessment, incident response, and continuous monitoring, ensuring strong defenses across every layer. From managing complex security operations to enabling user trust, we build systems designed to evolve with your business and support long-term resilience.",
    sammary:
      "At the core of our cybersecurity services is a commitment to creating secure digital ecosystems that protect your data, infrastructure, and operations. We take a proactive approach, implementing solutions that evolve with emerging threats while ensuring compliance with global security standards. Our process starts with comprehensive risk assessments—including vulnerability scanning, threat modeling, and compliance checks—and we work closely with your team to design security frameworks tailored to your needs, whether it’s endpoint protection, cloud security, or incident response planning. Using the latest technologies and best practices, we deliver solutions that safeguard your business while enabling growth, from security audits and continuous monitoring to employee training, keeping your operations secure, agile, and future-ready.",
    section: CybersecuritySection,
  },
  talentAcquisition: {
    title: "We connect you with the right talent to accelerate success.",
    image: "All Images Landing page Altecht\\Services know more 3.jpg",
    paragraph1:
      "At the core of our talent acquisition services is a commitment to connecting businesses with talent that is not only skilled but also aligned and future-focused. We specialize in building recruitment strategies that scale with your organization while maintaining the precision and reliability required to succeed in today’s competitive job market.",
    paragraph2:
      "Our talent acquisition process begins with a deep understanding of your hiring needs, encompassing areas like workforce planning, role definition, skill mapping, cultural fit, and employer branding. We work closely with you to identify gaps, challenges, and opportunities, crafting solutions that align with your growth objectives. This initial phase helps establish a clear strategy for attracting and retaining top talent while supporting long-term workforce development.",
    paragraph3:
      "By leveraging advanced sourcing tools and industry best practices, we deliver scalable, adaptive hiring solutions. Whether it’s executive search, technical recruitment, or large-scale hiring campaigns, we ensure every hire is efficient, sustainable, and future-ready. Our expertise spans candidate experience, onboarding, and retention strategies, ensuring seamless hiring across every stage. From building high-performance teams to enabling organizational resilience, we design talent systems that evolve with your business and secure long-term success.",
    sammary:
      "At the heart of our talent acquisition services is a commitment to finding, attracting, and retaining top-tier tech talent that fits your company’s culture and growth goals. We use data-driven strategies to streamline recruitment and deliver high-quality results, starting with a thorough analysis of your hiring needs, workforce planning, and skill-gap assessments. By combining tailored recruitment strategies, advanced technology, and market insights, we create a scalable talent pipeline that supports long-term success. From IT staffing to leadership roles, we ensure you have the right people in the right positions—ready to innovate, build, and grow with your business.",
    section: TalentAcquisitionSection,
  },
};

const KnowMorePage = () => {
  const [activeTab, setActiveTab] = useState("strategy");
  const location = useLocation();

  // Check if we have an active tab passed from navigation
  useEffect(() => {
    if (location.state && location.state.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  return (
    <>
      <Container className="pt-25 md:pt-36">
        <FirstSectionWrapper>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        </FirstSectionWrapper>
      </Container>
      <div className="bg-black">
        <Container>
          <DetailedSection
            title={tabData[activeTab].title}
            image={tabData[activeTab].image}
            paragraph1={tabData[activeTab].paragraph1}
            paragraph2={tabData[activeTab].paragraph2}
            paragraph3={tabData[activeTab].paragraph3}
            sammary={tabData[activeTab].sammary}
          />
          {React.createElement(tabData[activeTab].section)}
        </Container>
      </div>
      <CollaborationSection />
    </>
  );
};

export default KnowMorePage;
