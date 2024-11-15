import { useRef, useState } from "react";

export default function VideoPlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const volumeBarRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [totalTime, setTotalTime] = useState("0:00");
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);

  const [showControls, setShowControls] = useState(false);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(videoRef.current.currentTime));
      if (progressBarRef.current) {
        progressBarRef.current.value = String(
          (videoRef.current.currentTime / videoRef.current.duration) * 100
        );
      }
    }
  };

  const handleProgressBarChange = () => {
    if (videoRef.current && progressBarRef.current) {
      const newTime =
        (Number(progressBarRef.current.value) / 100) *
        videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
  };

  const handleVolumeChange = () => {
    if (videoRef.current && volumeBarRef.current) {
      const newVolume = Number(volumeBarRef.current.value) / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setTotalTime(formatTime(videoRef.current.duration));
    }
  };

  const handleForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10;
    }
  };

  const handleBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10;
    }
  };

  const increasePlaybackRate = () => {
    setPlaybackRate((prev) => {
      const newRate = prev + 0.5;
      if (videoRef.current) videoRef.current.playbackRate = newRate;
      return newRate;
    });
  };

  const decreasePlaybackRate = () => {
    setPlaybackRate((prev) => {
      const newRate = Math.max(prev - 0.5, 0.5);
      if (videoRef.current) videoRef.current.playbackRate = newRate;
      return newRate;
    });
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <section
        className="relative rounded-lg shadow-lg overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          className="w-full rounded-lg"
          src="src/assets/VideoAula.mp4"
          poster="src/assets/capa-do-video.png"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onClick={handlePlayPause}
          controls={false}
        ></video>
        <div
          className={`absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 p-4 transition-transform duration-300 ${
            showControls ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {/* Progress Bar */}
          <input
            ref={progressBarRef}
            type="range"
            min="0"
            max="100"
            step="1"
            defaultValue={0}
            className="w-full h-2 bg-gray-500"
            onChange={handleProgressBarChange}
          />

          {/* Controls */}
          <div className="flex justify-between items-center p-2 text-white">
            {/* Left Controls */}
            <div className="flex items-center space-x-3">
              <button onClick={handlePlayPause}>
                <img
                  src={
                    isPlaying ? "src/assets/pause.png" : "src/assets/play.png"
                  }
                  alt="Play/Pause"
                  className="w-6"
                />
              </button>
              <button onClick={handleBackward}>
                <img src="src/assets/back.png" alt="Backward" className="w-6" />
              </button>
              <button onClick={handleForward}>
                <img
                  src="src/assets/forward.png"
                  alt="Forward"
                  className="w-6"
                />
              </button>
              <span>{currentTime}</span>
              <span>/</span>
              <span>{totalTime}</span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center space-x-3">
              <button onClick={decreasePlaybackRate}>
                <img
                  src="src/assets/outline_remove_circle_outline_white_24dp.png"
                  alt="Decrease Playback Rate"
                  className="w-6"
                />
              </button>
              <span>{playbackRate}x</span>
              <button onClick={increasePlaybackRate}>
                <img
                  src="src/assets/outline_control_point_white_24dp.png"
                  alt="Increase Playback Rate"
                  className="w-6"
                />
              </button>
              <img
                src={
                  volume === 0
                    ? "src/assets/muted.png"
                    : "src/assets/volume.png"
                }
                alt="Volume"
                className="w-6 cursor-pointer"
              />
              <input
                ref={volumeBarRef}
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-24 cursor-pointer"
                defaultValue={volume * 100}
                onChange={handleVolumeChange}
              />
              <img
                id="fullscreenIcon"
                className="icon cursor-pointer"
                onClick={toggleFullscreen}
                src="src/assets/fullscreen.png"
                alt="Icone de fullscreen"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
