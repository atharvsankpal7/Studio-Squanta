// components/CaseStudyLayout.tsx
import React, { useState, useEffect } from "react";
import Container from "../../components/ui/Container";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end, duration = 2000, start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      startVal += increment;
      if (startVal >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(startVal));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, start]);

  return <>{count}</>;
};

const WorkCard = ({ image, title, countryFlag, description, disableDescription }) => (
  <div className="flex flex-col bg-black text-white overflow-hidden shadow-lg">
    <div className="w-full overflow-hidden">
      <img src={image} alt={title} className="lg:w-[645px] lg:h-[618px]" />
    </div>
    <div className="py-6 flex flex-col ">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {countryFlag && <img src={countryFlag} alt="flag" className="w-5 h-5 object-cover rounded-full" />}
      </div>
      {!disableDescription && (
        <p
          className="text-base lg:text-[26px] text-gray-300 leading-tight mb-4 font-alan-sans"
          style={{ letterSpacing: "0.18106rem", minHeight: "6.1rem" }}
        >
          {description}
        </p>
      )}
    </div>
  </div>
);

export default function CaseStudyLayout({ content, contentId }) {
  const [resolvedContent, setResolvedContent] = useState(content);

  useEffect(() => {
    let mounted = true;
    if (!content && contentId) {
      import("../../data/caseStudies.js")
        .then((m) => {
          if (mounted) setResolvedContent(m.caseStudies[contentId]);
        })
        .catch(() => { });
    }
    return () => {
      mounted = false;
    };
  }, [content, contentId]);

  const data = resolvedContent || content;
  const { ref: impactSectionRef, inView: isImpactSectionVisible } = useInView({ triggerOnce: true, threshold: 0.5 });

  if (!data) return null;

  return (
    <div className="bg-black text-white font-montserrat">
      <Container className="pt-20">
        {/* Heading */}
        <h1 className="text-5xl lg:text-[60px] xl:text-[64px] font-alan-sans max-w-4xl pb-20">
          <span>{data.heading.preTitle}</span>{" "}
          <span style={{ color: data.companyAccent }}>{data.heading.title}</span>{" "}
          <span>{data.heading.postTitle}</span>
        </h1>
        <hr
          className="w-full h-[14px] flex-shrink-0 border-0 mb-6"
          style={{ backgroundColor: data.companyAccent }}
        />

        {/* About / Industry / Services / Location */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div className="max-w-[244px]">
            <h5 className="text-xl font-semibold mb-12">ABOUT</h5>
            <p className="text-[#A6A6A6] text-base font-semibold">{data.info.about}</p>
          </div>
          <div className="max-w-[244px]">
            <h5 className="text-xl font-semibold mb-12">INDUSTRY</h5>
            <p className="text-[#A6A6A6] text-base font-semibold">{data.info.industry}</p>
          </div>
          <div className="max-w-[244px]">
            <h5 className="text-xl font-semibold mb-12">SERVICES</h5>
            <div className="flex flex-col gap-4">
              {data.services.map((service, i) => (
                <div key={i} className="text-[#A6A6A6] font-semibold text-base uppercase">
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[244px]">
            <h5 className="text-xl font-semibold mb-12">LOCATION</h5>
            <div>
              <img src="/Squanta Assets/India.png" alt="India Flag" />
            </div>
          </div>
        </div>

        {/* Images + Timeline */}
        <img src={data.images.one} alt="preview" className="mb-16" />
        <h6 className="text-xl font-alan-sans pb-16">{data.timeline.intro}</h6>

        {/* Timeline Sections */}
        <div className="flex flex-col md:flex-row gap-8 py-12">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <h3 className="text-[#787878] font-medium uppercase mb-5">TIMELINE</h3>
            <p>{data.timeline.duration}</p>
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 space-y-5">
            {/* Challenge */}
            <div>
              <h3 className="text-[#787878] uppercase mb-5">CHALLENGE</h3>
              <p className="text-gray-300 mb-4">{data.timeline.challenge.description}</p>
              <ul className="text-gray-300">
                {data.timeline.challenge.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-[#787878] uppercase mb-5">SOLUTION</h3>
              <p className="text-gray-300">{data.timeline.solution.description}</p>
            </div>

            {/* Branding */}
            <div>
              <h3 className="text-[#787878] uppercase mb-5">{data.timeline.branding.title}</h3>
              <ul className="text-gray-300">
                {data.timeline.branding.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>

            {/* App Design */}
            <div>
              <h3 className="text-[#787878] uppercase mb-5">{data.timeline.appDesign.title}</h3>
              <ul className="text-gray-300">
                {data.timeline.appDesign.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <img src={data.images.two} alt="" />

        {/* Impact */}
        <div className="pt-24 pb-20">
          <h2 className="text-5xl font-alan-sans uppercase mb-20">THE IMPACT</h2>
          <div ref={impactSectionRef} className="flex flex-col md:items-end gap-16">
            {data.impact.map((item, i) => (
              <div key={i} className="flex items-center">
                <span className="text-8xl font-light mr-4 w-48">
                  <CountUp end={item.percentage} start={isImpactSectionVisible} />%
                </span>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
          <img src={data.images.three} alt="" className="my-20" />
          <img src={data.images.four} alt="" className="mb-20 md:px-20" />

          {/* Discover More */}
          <h2 className="text-white font-alan-sans text-[32px] md:text-[96.68px] mb-20">Discover More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.works?.map((work, i) => <WorkCard key={i} {...work} />)}
          </div>
        </div>
      </Container>
    </div>
  );
}
