import React, { useCallback, useEffect, useState } from "react";
import {
  VolumeSlider,
  VolumeWrapper,
  VolumeIcon,
  VolumeMutedIcon,
} from "./Volume.styles";
import { Button } from "../../App.styles";
import { VolumeProps } from "./Volume.types";
import { volumeKey } from "../../utils/constants";

export const Volume: React.FC<VolumeProps> = ({ onVolumeChange }) => {
  const [volume, setVolume] = useState(0.1);
  const isMuted = volume === 0;

  const getStorageVolume = () => {
    const storedVolume = localStorage.getItem(volumeKey);
    if (storedVolume) {
      const parsedVolume = Number(storedVolume);
      setVolume(parsedVolume);
      onVolumeChange(parsedVolume);
    }
  };

  useEffect(() => {
    getStorageVolume();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVolumeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = Number(event.target.value) / 100;
      setVolume(newVolume);
      onVolumeChange(newVolume);
      localStorage.setItem(volumeKey, String(newVolume));
    },
    [onVolumeChange]
  );

  const handleMute = useCallback(() => {
    const newVolume = isMuted ? 0.1 : 0;
    setVolume(newVolume);
    onVolumeChange(newVolume);
    localStorage.setItem(volumeKey, String(newVolume));
  }, [isMuted, onVolumeChange]);

  return (
    <VolumeWrapper>
      <Button onClick={handleMute}>
        {isMuted ? <VolumeMutedIcon /> : <VolumeIcon />}
      </Button>
      <VolumeSlider
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={handleVolumeChange}
      />
    </VolumeWrapper>
  );
};
