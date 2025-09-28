"use client";

import { useState } from "react";
import Container from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";

// Helper to extract YouTube video ID
const extractYouTubeID = (url) => {
  if (!url) return null;
  const regExp =
    /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#&?]{11}).*/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
};

const defaultVideos = [
  {
    title: "How to stay productive",
    author: "IVANA Flores",
    duration: "5:23",
    source: "https://youtu.be/rBKh4zpD-30",
  },
  {
    title: "Morning Routine Tips",
    author: "Alex Hamilton",
    duration: "8:41",
    source: "https://youtu.be/Go8ILyzi8xI",
  },
  {
    title: "Creative Workspace Setup",
    author: "Jeet Patel",
    duration: "6:11",
    source: "https://youtu.be/qV91g9g6eyU",
  },
  {
    title: "Design Thinking Explained",
    author: "Winzone",
    duration: "7:00",
    source: "https://youtu.be/82IDZPr2c_Q",
  },

];

function CircularVideoList({ selectedIndex, onVideoSelect }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0);

  const videos = defaultVideos;
  const n = videos.length;

  const selectedVideo = videos[selectedIndex];
  const videoId = extractYouTubeID(selectedVideo?.source);

  // Dynamically calculate which video data to show in each pillar
  const farLeftPillarData = videos[(selectedIndex - 2 + n) % n];
  const nearLeftPillarData = videos[(selectedIndex - 1 + n) % n];
  const nearRightPillarData = videos[(selectedIndex + 1) % n];
  const farRightPillarData = videos[(selectedIndex + 2) % n];

  const handleNavigation = (newIndex, navDirection) => {
    setIsPlaying(false);
    setDirection(navDirection);
    onVideoSelect(newIndex);
  };

  const videoVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? -15 : 15,
    }),
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center"
      variants={containerVariants}
      animate="animate"
    >
      <div className="flex items-center space-x-4">
        {/* Left Pillars with Navigation */}
        <motion.div
          className="flex space-x-4 items-center"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Far Left Pillar */}
          <Pillar
            author={farLeftPillarData?.author || "Unknown"}
            height="453px"
          />
          <div className="relative">
            {/* Near Left Pillar */}
            <Pillar
              author={nearLeftPillarData?.author || "Unknown"}
              height="515px"
            />
            <motion.button
              onClick={() => {
                const prevIndex =
                  selectedIndex === 0 ? n - 1 : selectedIndex - 1;
                handleNavigation(prevIndex, -1);
              }}
              className="absolute bottom-3 right-3.5 w-[58px] h-[58px] cursor-pointer flex items-center justify-center z-10"
              whileHover={{
                scale: 1.15,
                // rotate: -5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: -2,
                transition: { duration: 0.1 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ArrowIcon direction="left" />
            </motion.button>
          </div>
        </motion.div>

        {/* Center video */}
        <motion.div
          className="relative w-[898px] h-[552px] rounded-[32px] overflow-hidden bg-black"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={selectedIndex}
              custom={direction}
              variants={videoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                  mass: 0.8,
                },
                opacity: { duration: 0.4, ease: "easeInOut" },
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
                rotateY: {
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                },
              }}
              className="w-full h-full absolute"
              style={{ perspective: "1000px" }}
            >
              {isPlaying && videoId ? (
                <motion.iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                  title={selectedVideo?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-[32px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <div className="w-full h-full relative">
                  <motion.img
                    src={
                      videoId
                        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                        : ""
                    }
                    alt={selectedVideo?.title}
                    className="w-full h-full object-cover rounded-[32px]"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Green Play Button Overlay */}
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-[#00FF26] rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(0, 255, 38, 0.4)",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.1 },
                      }}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </motion.svg>
                    </motion.div>
                  </motion.button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Pillars with Navigation */}
        <motion.div
          className="flex space-x-4 items-center"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            {/* Near Right Pillar */}
            <Pillar
              author={nearRightPillarData?.author || "Unknown"}
              height="515px"
            />
            <motion.button
              onClick={() => {
                const nextIndex =
                  selectedIndex === n - 1 ? 0 : selectedIndex + 1;
                handleNavigation(nextIndex, 1);
              }}
              className="absolute bottom-3 left-3.5 w-[58px] h-[58px] flex items-center cursor-pointer justify-center z-10"
              whileHover={{
                scale: 1.15,
                // rotate: 5,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{
                scale: 0.95,
                rotate: 2,
                transition: { duration: 0.1 },
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ArrowIcon direction="right" />
            </motion.button>
          </div>
          {/* Far Right Pillar */}
          <Pillar
            author={farRightPillarData?.author || "Unknown"}
            height="453px"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Pillar({ author, height }) {
  return (
    <motion.div
      className="w-[88px] bg-[#E6FFEA] rounded-[34px] flex items-center justify-center overflow-hidden"
      style={{ height }}
      layout
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        layout: { duration: 0.6 },
      }}
      whileHover={{
        scale: 1.02,
        backgroundColor: "#D4F7D9",
        transition: { duration: 0.3 },
      }}
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={author}
          className="transform  whitespace-nowrap font-[700] text-black font-alan-sans text-[36px] uppercase tracking-wider "
          initial={{
            opacity: 0,
            y: 40,
            rotateZ: -90,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateZ: -90,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -40,
            rotateZ: -90,
            scale: 0.8,
          }}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
        >
          {author}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function ArrowIcon({ direction = "left" }) {
  const isLeft = direction === "left";
  return (
    <motion.svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={isLeft ? { transform: "rotate(180deg)" } : {}}
      whileHover={{
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
        transition: { duration: 0.2 },
      }}
    >
      <motion.path
        d="M15.4513 29.7091H44.4836M44.4836 29.7091L32.3868 17.6123M44.4836 29.7091L32.3868 41.8059"
        stroke="black"
        strokeWidth="2.90322"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      />
    </motion.svg>
  );
}

function VideoGrid() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  return (
    <motion.section
      className="px-[60px] pb-[120px] pt-[120px] bg-black xl:block hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Hero Section with Partner Text */}
      <div className="bg-black w-full max-w-[90rem] mx-auto ">
        <motion.h1
          className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] xl:text-[64px] font-alan-sans font-bold leading-tight sm:leading-normal tracking-[1px] sm:tracking-[1.28px] md:tracking-[2px] lg:tracking-[3px] xl:tracking-[3.867px] uppercase text-white  mx-auto text-center sm:text-left "
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Trusted by 50+ innovators and
        </motion.h1>
        <div className="">
          <motion.h1
            className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] xl:text-[64px] font-alan-sans font-bold leading-tight sm:leading-normal tracking-[1px] sm:tracking-[1.28px] md:tracking-[2px] lg:tracking-[3px] xl:tracking-[3.867px] uppercase text-white  mx-auto text-center sm:text-left mb-[2rem] md:mb-[6rem] lg:mb-[8.2rem] flex"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            change-makers.
            {/* SVG Checkmark Icon */}
            <div className="flex justify-center ml-4 mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.625rem"
                height="5.625rem"
                viewBox="0 0 90 90"
                fill="none"
              >
                <path
                  d="M45 7.5C24.3375 7.5 7.5 24.3375 7.5 45C7.5 65.6625 24.3375 82.5 45 82.5C65.6625 82.5 82.5 65.6625 82.5 45C82.5 24.3375 65.6625 7.5 45 7.5ZM62.925 36.375L41.6625 57.6375C41.1375 58.1625 40.425 58.4625 39.675 58.4625C38.925 58.4625 38.2125 58.1625 37.6875 57.6375L27.075 47.025C25.9875 45.9375 25.9875 44.1375 27.075 43.05C28.1625 41.9625 29.9625 41.9625 31.05 43.05L39.675 51.675L58.95 32.4C60.0375 31.3125 61.8375 31.3125 62.925 32.4C64.0125 33.4875 64.0125 35.25 62.925 36.375Z"
                  fill="white"
                />
              </svg>
            </div>

          </motion.h1>
        </div>

      </div>
      <motion.div
        className="flex justify-center"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
      >
        <CircularVideoList
          selectedIndex={selectedVideoIndex}
          onVideoSelect={setSelectedVideoIndex}
        />
      </motion.div>

    </motion.section>
  );
}

export default VideoGrid;
