// components/CaseStudyLayout.tsx
import React, { useState, useEffect } from "react";
import Container from "../../components/ui/Container";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import CollaborationSection2 from "../../components/CollaborationSection2.jsx";
import { motion } from "framer-motion";

// Reusable media renderer that auto-detects image vs video from file extension

 const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Media = ({
  src,
  alt = "",
  className = "",
  controls,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  poster,
}) => {
  if (!src) return null;
  const getExt = (path) => {
    try {
      const clean = path.split("?")[0].split("#")[0];
      const seg = clean.split("/").pop() || "";
      const idx = seg.lastIndexOf(".");
      return idx !== -1 ? seg.slice(idx + 1).toLowerCase() : "";
    } catch {
      return "";
    }
  };
  const ext = getExt(src);
  const videoExts = new Set(["mp4", "webm", "ogg", "ogv", "m4v", "mov"]);
  const isVideo = videoExts.has(ext);

  if (isVideo) {
    return (
      <video
        className={`w-full ${className}`}
        src={src}
        {...(poster ? { poster } : {})}
        {...(playsInline ? { playsInline: true } : {})}
        {...(autoPlay ? { autoPlay: true } : {})}
        {...(loop ? { loop: true } : {})}
        {...(muted ? { muted: true } : {})}
        {...(controls ? { controls: true } : {})}
      />
    );
  }
  return <img src={src} alt={alt} className={`w-full ${className}`} />;
};

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

const WorkCard = ({
  image,
  title,
  countryFlag,
  description,
  disableDescription,
  slug,
  video,
}) => {
  const card = (
    <div className="flex flex-col bg-black text-white overflow-hidden shadow-lg">
      <div className="w-full overflow-hidden">
        {/* Support image or video for card media */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full aspect-square"
          />
        ) : video ? (
          <video
            src={video}
            className="object-cover w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : null}
      </div>
      <div className="py-6 flex flex-col ">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {countryFlag && (
            <img
              src={countryFlag}
              alt="flag"
              className="w-5 h-5 object-cover rounded-full"
            />
          )}
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
  return slug ? (
    <Link to={`/casestudy/${slug}`} className="block">
      {card}
    </Link>
  ) : (
    card
  );
};

export default function CaseStudyLayout({ content, contentId }) {
  const [resolvedContent, setResolvedContent] = useState(content);
  const [loaded, setLoaded] = useState(!!content);

  useEffect(() => {
    let mounted = true;
    if (!content && contentId) {
      import("../../data/caseStudies.js")
        .then((m) => {
          if (!mounted) return;
          setResolvedContent(m.caseStudies[contentId]);
          setLoaded(true);
        })
        .catch(() => {
          if (!mounted) return;
          setResolvedContent(undefined);
          setLoaded(true);
        });
    }
    return () => {
      mounted = false;
    };
  }, [content, contentId]);

  const data = resolvedContent || content;
  const { ref: impactSectionRef, inView: isImpactSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  if (!data) {
    // If we are still loading dynamic content, render nothing (or a lightweight placeholder)
    if (!loaded) return null;
    // Loaded but not found -> render Not Found handler
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-5xl font-alan-sans mb-4">
            Case study not found
          </h1>
          <p className="text-gray-400 mb-8">
            The case study you are looking for doesn’t exist or has been moved.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              className="border border-white rounded-[57px] px-6 py-2 hover:bg-white hover:text-black"
              to="/work"
            >
              Back to Work
            </Link>
            <Link
              className="border border-white rounded-[57px] px-6 py-2 hover:bg-white hover:text-black"
              to="/"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white font-montserrat">
      <Container className="pt-20">
        {/* Ensure Media components have full-width parent containers */}
        <div className="w-full overflow-visible">
          <motion.h1
            className="text-5xl lg:text-[60px] xl:text-[64px] font-alan-sans max-w-7xl pb-20"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span>{data.heading.preTitle}</span>{" "}
            <span style={{ color: data.companyAccent }}>
              {data.heading.title}
            </span>{" "}
            <span>{data.heading.postTitle}</span>
          </motion.h1>

          <hr
            className="w-full h-[14px] flex-shrink-0 border-0 mb-6"
            style={{ backgroundColor: data.companyAccent }}
          />

          {/* About / Industry / Services / Location */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">ABOUT</h5>
              <p className="text-[#A6A6A6] text-base font-semibold">
                {data.info.about}
              </p>
            </div>
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">INDUSTRY</h5>
              <p className="text-[#A6A6A6] text-base font-semibold">
                {data.info.industry}
              </p>
            </div>
            <div className="max-w-[244px]">
              <h5 className="text-xl font-semibold mb-12">SERVICES</h5>
              <div className="flex flex-col gap-4">
                {data.services.map((service, i) => (
                  <div
                    key={i}
                    className="text-[#A6A6A6] font-semibold text-base uppercase"
                  >
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
          <Media src={data.images.one} alt="preview" className="mb-16 w-full" />
          <h6 className="text-xl font-alan-sans pb-16">
            {data.timeline.intro}
          </h6>

          {/* Timeline Sections */}
          <div className="flex flex-col md:flex-row gap-8 py-12">
            <div className="w-full md:w-1/4 lg:w-1/5">
              <h3 className="text-[#787878] font-medium uppercase mb-5">
                TIMELINE
              </h3>
              <p>{data.timeline.duration}</p>
            </div>
            <div className="w-full md:w-3/4 lg:w-4/5 space-y-5">
              {/* Challenge */}
              <div>
                <h3 className="text-[#787878] uppercase mb-5">CHALLENGE</h3>
                <p className="text-gray-300 mb-4">
                  {data.timeline.challenge.description}
                </p>
                <p className="text-gray-300">The Challenge?</p>
                <ul className="text-gray-300">
                  {data.timeline.challenge.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-[#787878] uppercase ">SOLUTION</h3>
                <p className="text-gray-300">
                  {data.timeline.solution.description}
                </p>
              </div>

              {/* Branding */}
              <div>
                <h3 className="text-[#787878] uppercase ">
                  {data.timeline.branding.title}
                </h3>
                <ul className="text-gray-300">
                  {data.timeline.branding.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* App Design */}
              <div>
                <h3 className="text-[#787878] uppercase ">
                  {data.timeline.appDesign.title}
                </h3>
                <ul className="text-gray-300">
                  {data.timeline.appDesign.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Media src={data.images.two} alt="" className="w-full" />

          {/* Impact */}
          <div className="pt-24">
            <h2 className="text-5xl font-alan-sans uppercase mb-20">
              THE IMPACT
            </h2>
            <div
              ref={impactSectionRef}
              className="flex flex-col md:items-end gap-16"
            >
              {data.impact.map((item, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-8xl font-light mr-12 w-48">
                    <CountUp
                      end={item.percentage}
                      start={isImpactSectionVisible}
                    />
                    %
                  </span>
                  <p className="text-lg w-[13.13rem]">{item.description}</p>
                </div>
              ))}
            </div>
            <Media src={data.images.three} alt="" className="my-40 w-full" />
            <Media
              src={data.images.four}
              alt=""
              className="mb-20 md:px-20 w-full"
            />

            {/* Discover More */}
            <h2 className="text-white font-alan-sans text-[32px] md:text-[96.68px] mb-20">
              Discover More
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.works?.map((work, i) => (
                <WorkCard key={i} {...work} />
              ))}
            </div>
          </div>
          <CollaborationSection2 />
        </div>
      </Container>
    </div>
  );
}
