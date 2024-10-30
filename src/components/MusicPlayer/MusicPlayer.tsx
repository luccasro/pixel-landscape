import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import {
  MusicWrapper,
  MusicSubtitle,
  MusicSubtitleContainer,
  PauseIcon,
  PlayIcon,
  MusicChannel,
  PreviousIcon,
  NextIcon,
  MusicControls,
} from "./MusicPlayer.styles";
import { Button } from "../../App.styles";
import { Volume } from "../Volume/Volume";
import { MusicPlayerProps } from "./MusicPlayer.types";

const musicVideos = [
  "https://www.youtube.com/watch?v=4xDzrJKXOOY", // Synthwave
  "https://www.youtube.com/watch?v=jfKfPfyJRdk", // Hip hop
  "https://www.youtube.com/watch?v=S_MOd40zlYU", // Dark
  "https://www.youtube.com/watch?v=Na0w3Mz46GA", // Asian
  "https://www.youtube.com/watch?v=-OekvEFm1lo", //  Rain
];

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  showMusicPlayer = false,
}) => {
  const [volume, setVolume] = useState(0.1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoDetails, setVideoDetails] = useState({
    title: "",
    channelName: "",
    url: "",
  });
  const videoUrl = musicVideos[videoIndex];

  const fetchVideoDetails = async () => {
    try {
      const response = await fetch(
        `https://www.youtube.com/oembed?url=${videoUrl}&format=json`
      );
      const data = await response.json();
      setVideoDetails({
        title: data.title,
        channelName: data.author_name,
        url: data.author_url,
      });
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };
  useEffect(() => {
    fetchVideoDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoIndex]);

  useEffect(() => {
    if (showMusicPlayer && !isPlaying) {
      setIsPlaying(true);
    }
  }, [showMusicPlayer, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextVideo = () => {
    const nextIndex = videoIndex + 1;

    if (nextIndex < musicVideos.length) {
      setVideoIndex(nextIndex);
    } else {
      setVideoIndex(0);
    }
  };

  const handlePreviousVideo = () => {
    const previousIndex = videoIndex - 1;

    if (previousIndex >= 0) {
      setVideoIndex(previousIndex);
    } else {
      setVideoIndex(musicVideos.length - 1);
    }
  };

  return (
    <>
      {showMusicPlayer && (
        <>
          <MusicWrapper>
            <MusicChannel
              href={videoDetails.url}
              target="_blank"
              rel="noreferrer"
            >
              {videoDetails.channelName}
            </MusicChannel>
            <MusicSubtitleContainer>
              <MusicSubtitle>{videoDetails.title}</MusicSubtitle>
            </MusicSubtitleContainer>
            <MusicControls>
              <Button onClick={handlePreviousVideo}>
                <PreviousIcon />
              </Button>
              <Button onClick={handlePlayPause}>
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
              </Button>
              <Button onClick={handleNextVideo}>
                <NextIcon />
              </Button>
            </MusicControls>
          </MusicWrapper>
          <Volume onVolumeChange={setVolume} />
        </>
      )}
      <ReactPlayer
        url={videoUrl}
        playing={isPlaying}
        loop
        volume={volume}
        muted={false}
        width={0}
        height={0}
      />
    </>
  );
};
