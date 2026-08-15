import React from "react";

const VideoLength = ({ time }) => {
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    }

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <span className="absolute bottom-1 right-1 bg-black/[0.8] text-white text-xs px-1 py-[2px] rounded">
      {formatTime(time)}
    </span>
  );
};

export default VideoLength;