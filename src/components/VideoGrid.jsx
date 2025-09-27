import React, { useState } from "react";
import Container from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion"; // Import motion and AnimatePresence

// Helper to extract YouTube video ID
const extractYouTubeID = (url) => {
  if (!url) return null; // Add null check for url
  const regExp =
    /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]{11}).*/;
  const match = url.match(regExp);
  return match && match[1] ? match[1] : null;
};

const defaultVideos = [
  {
    title: "How to stay productive",
    author: "IVANA Flores",
    duration: "5:23",
    source: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    title: "Morning Routine Tips",
    author: "Alex Hamilton",
    duration: "8:41",
    source: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
  {
    title: "Creative Workspace Setup",
    author: "Jeet Patel",
    duration: "6:11",
    source: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Design Thinking Explained",
    author: "Winzone",
    duration: "7:00",
    source: "https://www.youtube.com/watch?v=3fumBcKC6RE",
  },
];

function CircularVideoList({ selectedIndex, onVideoSelect }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(0); // For animating video slide

  const videos = defaultVideos;
  const n = videos.length; // Number of videos

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
      x: direction > 0 ? 500 : -500, // Enters from right if direction is positive (next), from left if negative (prev)
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500, // Exits to right if direction is negative (prev), to left if positive (next)
      opacity: 0,
    }),
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4">
        {/* Left Pillars with Navigation */}
        <div className="flex space-x-4 items-center">
          {/* Far Left Pillar */}
          <Pillar author={farLeftPillarData?.author || "Unknown"} height="453px" />
          <div className="relative">
            {/* Near Left Pillar */}
            <Pillar author={nearLeftPillarData?.author || "Unknown"} height="515px" />
            <button
              onClick={() => {
                const prevIndex = selectedIndex === 0 ? n - 1 : selectedIndex - 1;
                handleNavigation(prevIndex, -1); // -1 for previous direction
              }}
              className="absolute bottom-3 right-3.5 w-[58px] h-[58px] cursor-pointer flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110"
            >
              <ArrowIcon direction="left" />
            </button>
          </div>
        </div>

        {/* Center video */}
        <div className="relative w-[898px] h-[552px] rounded-[32px] overflow-hidden bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={selectedIndex} // Key is crucial for AnimatePresence to detect changes
              custom={direction}
              variants={videoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full h-full absolute"
            >
              {isPlaying && videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
                  title={selectedVideo?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-[32px]"
                ></iframe>
              ) : (
                <div className="w-full h-full relative">
                  <img
                    // Ensure videoId is available before attempting to construct the URL
                    src={videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ''}
                    alt={selectedVideo?.title}
                    className="w-full h-full object-cover rounded-[32px]"
                  />
                  {/* Green Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                  >
                    <div className="w-20 h-20 bg-[#00FF26] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-black ml-1" // Changed text-white to text-black
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Pillars with Navigation */}
        <div className="flex space-x-4 items-center">
          <div className="relative">
            {/* Near Right Pillar */}
            <Pillar author={nearRightPillarData?.author || "Unknown"} height="515px" />
            <button
              onClick={() => {
                const nextIndex = selectedIndex === n - 1 ? 0 : selectedIndex + 1;
                handleNavigation(nextIndex, 1); // 1 for next direction
              }}
              className="absolute bottom-3 left-3.5 w-[58px] h-[58px] flex items-center cursor-pointer justify-center z-10 transition-transform duration-300 hover:scale-110"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
          {/* Far Right Pillar */}
          <Pillar author={farRightPillarData?.author || "Unknown"} height="453px" />
        </div>
      </div>
    </div>
  );
}

function Pillar({ author, height }) {
  return (
    <motion.div
      className="w-[88px] bg-[#E6FFEA] rounded-[34px] flex items-center justify-center overflow-hidden"
      style={{ height }}
      layout // Animates layout changes (like height)
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait"> {/* Ensures only one text element is mounted at a time */}
        <motion.div
          key={author} // Key changes when author changes, triggering animation
          className="transform -rotate-90 whitespace-nowrap font-[700] text-black font-alan-sans text-[36px] uppercase tracking-wider"
          initial={{ opacity: 0, y: 25 }} // Initial state for new text entering
          animate={{ opacity: 1, y: 0 }} // Animate to this state
          exit={{ opacity: 0, y: -25 }} // Exit state for old text leaving
          transition={{ duration: 0.4, ease: "easeInOut" }}
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
    <svg
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={isLeft ? { transform: "rotate(180deg)" } : {}}
    >
      <path
        d="M15.4513 29.7091H44.4836M44.4836 29.7091L32.3868 17.6123M44.4836 29.7091L32.3868 41.8059"
        stroke="black"
        strokeWidth="2.90322"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoGrid() {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  return (
    <section className="px-[60px] pb-[120px] pt-[120px] bg-black xl:block hidden">
      {/* Hero Section with Partner Text */}
      <Container className="bg-black">
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] xl:text-[64px] font-alan-sans font-bold leading-tight sm:leading-normal tracking-[1px] sm:tracking-[1.28px] md:tracking-[2px] lg:tracking-[3px] xl:tracking-[3.867px] uppercase text-white max-w-[90%] sm:max-w-[95%] md:max-w-[1279px] mx-auto text-center sm:text-left">
          Trusted by 50+ innovators and change-makers.
        </h1>
      </Container>
      <div className="flex justify-center">
        <CircularVideoList
          selectedIndex={selectedVideoIndex}
          onVideoSelect={setSelectedVideoIndex}
        />
      </div>
    </section>
  );
}

export default VideoGrid;