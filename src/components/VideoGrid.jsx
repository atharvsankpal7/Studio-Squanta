import React, { useState } from "react";
import Container from "./ui/Container";

// Helper to extract YouTube video ID
const extractYouTubeID = (url) => {
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

  const videos = defaultVideos;
  const selectedVideo = videos[selectedIndex];
  const videoId = extractYouTubeID(selectedVideo?.source);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4">
        {/* Left Pillars */}
        <div className="flex space-x-4 items-center">
          <Pillar author={videos[3]?.author || "Winzone"} height="453px" />
          <Pillar
            author={videos[1]?.author || "Alex Hamilton"}
            height="515px"
          />
        </div>

        {/* Center video */}
        <div className="relative">
          <div className="w-[898px] h-[552px] bg-black rounded-[32px] overflow-hidden relative">
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
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={selectedVideo?.title}
                  className="w-full h-full object-cover rounded-[32px]"
                />
                {/* Green Play Button Overlay */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              setIsPlaying(false); // reset playing state when navigating
              const prevIndex =
                selectedIndex === 0 ? videos.length - 1 : selectedIndex - 1;
              onVideoSelect(prevIndex);
            }}
            className="absolute left-[121px] bottom-8 w-[58px] h-[58px] flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all duration-300 shadow-lg"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            onClick={() => {
              setIsPlaying(false); // reset playing state when navigating
              const nextIndex =
                selectedIndex === videos.length - 1 ? 0 : selectedIndex + 1;
              onVideoSelect(nextIndex);
            }}
            className="absolute right-[121px] bottom-8 w-[58px] h-[58px] flex items-center justify-center bg-white/90 hover:bg-white rounded-full transition-all duration-300 shadow-lg"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>

        {/* Right Pillars */}
        <div className="flex space-x-4 items-center">
          <Pillar author={videos[0]?.author || "IVANA Flores"} height="515px" />
          <Pillar author={videos[2]?.author || "Jeet Patel"} height="453px" />
        </div>
      </div>
    </div>
  );
}

function Pillar({ author, height }) {
  return (
    <div
      className="w-[88px] bg-[#E6FFEA] rounded-[34px] flex items-center justify-center"
      style={{ height }}
    >
      <div className="transform -rotate-90 whitespace-nowrap text-black font-alan-sans text-[46px] uppercase tracking-wider">
        {author}
      </div>
    </div>
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
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[72px] xl:text-[96.68px] font-alan-sans font-normal leading-tight sm:leading-normal tracking-[1px] sm:tracking-[1.28px] md:tracking-[2px] lg:tracking-[3px] xl:tracking-[3.867px] uppercase text-white max-w-[90%] sm:max-w-[95%] md:max-w-[1279px] mx-auto text-center sm:text-left">
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
