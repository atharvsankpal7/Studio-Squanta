import React, { useState } from "react";

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
  const videos = defaultVideos;

  const selectedVideo = videos[selectedIndex];
  const videoId = extractYouTubeID(selectedVideo?.source);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4">
        {/* Left Pillars */}
        <div className="flex space-x-4">
          <Pillar author={videos[3]?.author || "Winzone"} height="453px" />
          <Pillar
            author={videos[1]?.author || "Alex Hamilton"}
            height="515px"
          />
        </div>

        {/* Center video */}
        <div className="relative">
          <div className="w-[898px] h-[552px] bg-black rounded-[32px] overflow-hidden relative">
            {videoId ? (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`}
                title={selectedVideo?.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-[32px]"
              ></iframe>
            ) : (
              <div className="flex items-center justify-center w-full h-full text-white">
                Invalid YouTube Link
              </div>
            )}

            {/* Title + Duration */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 text-center px-4">
              <h3 className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">
                {selectedVideo.title}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
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
        <div className="flex space-x-4">
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
      <div
        className="transform -rotate-90 whitespace-nowrap text-black font-bold text-[46px] uppercase tracking-wider"
        style={{
          fontFamily: "Rogbold, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
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
