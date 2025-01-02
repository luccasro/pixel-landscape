import React, { useEffect, useState, useCallback } from "react";
import {
  ArtistName,
  Button,
  Clock,
  Container,
  Footer,
  FullScreenIcon,
  Greetings,
  IconsContainer,
  IpodIcon,
  ReloadIcon,
  StarIcon,
  SettingsIcon,
  FavoriteArtistButton,
} from "./App.styles";
import { getRandomBackground } from "./utils/getRandomBackground";
import { useWindowSize } from "./utils/useWindowSize";
import { StyleConfig } from "./App.types";
import { useCurrentTime } from "./utils/useCurrentTime";
import { getGreetings } from "./utils/getGreetings";
import { Settings } from "./components/Settings/Settings";
import { SettingsConfig } from "./components/Settings/Settings.types";
import { getSettings } from "./utils/getSettings";
import { handleFullScreen } from "./utils/handleFullScreen";
import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer";
import { defaultSettings, favoriteArtistKey } from "./utils/constants";

const greetings = getGreetings();

function App() {
  const [background, setBackground] = useState({ artist: "", url: "" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [favoriteArtist, setFavoriteArtist] = useState("");
  const [settings, setSettings] = useState<SettingsConfig>(defaultSettings);

  const size = useWindowSize();
  const time = useCurrentTime({
    isAmPm: settings.clockAmPm,
    showSeconds: settings.showSeconds,
  });

  const generateBackgroundUrl = useCallback(() => {
    const randomBackground = getRandomBackground();
    const newImageUrl = `/assets/backgrounds/${randomBackground.artist}/${randomBackground.background}`;

    if (!background.url) {
      setBackground({
        artist: randomBackground.artist,
        url: newImageUrl,
      });
      return;
    }

    // Preload the image
    const img = new Image();
    img.src = newImageUrl;

    img.onload = () => {
      // Only update the state once the image is fully loaded to avoid flickering
      setBackground({
        artist: randomBackground.artist,
        url: newImageUrl,
      });
    };
  }, [background.url]);

  const loadSettings = useCallback(() => {
    const settingsParsed = getSettings();
    if (settingsParsed) {
      setSettings((prevSettings) => ({ ...prevSettings, ...settingsParsed }));
    }
  }, []);

  const getFavoriteArtist = useCallback(() => {
    const favoriteArtistStorage = localStorage.getItem(favoriteArtistKey);
    if (favoriteArtistStorage) {
      setFavoriteArtist(favoriteArtistStorage);
    }
  }, []);

  const handleFavoriteArtist = useCallback(() => {
    const updatedArtist =
      favoriteArtist === background.artist ? "" : background.artist;
    localStorage.setItem(favoriteArtistKey, updatedArtist);
    setFavoriteArtist(updatedArtist);
  }, [favoriteArtist, background.artist]);

  const handleShowSettings = useCallback(() => {
    setShowSettings((prev) => !prev);
  }, []);

  const handleShowMusic = useCallback(() => {
    setShowMusic((prev) => !prev);
    if (!isPlaying && !showMusic) {
      setIsPlaying(true);
    }
  }, [isPlaying, showMusic]);

  useEffect(() => {
    loadSettings();
    getFavoriteArtist();
    generateBackgroundUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      settings.changeBackground.enable &&
      settings.changeBackground.interval > 0
    ) {
      const interval = setInterval(
        generateBackgroundUrl,
        settings.changeBackground.interval * 1000
      );
      return () => clearInterval(interval);
    }
  }, [settings.changeBackground, generateBackgroundUrl]);

  const styleConfig: StyleConfig = {
    color: "white",
    height: `${size.height}px`,
    width: `${size.width}px`,
    background: background.url,
    backgroundSize: settings.stretch ? "100% 100%" : "cover",
    imageRendering: settings.smooth ? "auto" : "crisp-edges",
  };

  const isFavoriteArtist = favoriteArtist === background.artist;

  return (
    <Container styleConfig={styleConfig}>
      {settings.clock && (
        <Clock>
          {time}
          {!settings.hideGreetings && <Greetings>{greetings}</Greetings>}
        </Clock>
      )}
      <IconsContainer>
        <Button
          aria-label="Change background"
          title="Change background"
          onClick={generateBackgroundUrl}
        >
          <ReloadIcon />
        </Button>
        <Button
          aria-label="Stretch background"
          title="Stretch background"
          onClick={handleShowSettings}
          active={showSettings}
        >
          <SettingsIcon />
        </Button>
        <Button
          aria-label="Toggle Fullscreen"
          title="Toggle Fullscreen"
          onClick={handleFullScreen}
        >
          <FullScreenIcon />
        </Button>
      </IconsContainer>
      {showSettings && (
        <Settings settings={settings} setSettings={setSettings} />
      )}
      <Footer>
        <ArtistName>
          <FavoriteArtistButton
            onClick={handleFavoriteArtist}
            active={isFavoriteArtist}
          >
            <StarIcon active={isFavoriteArtist} />
          </FavoriteArtistButton>
          <span>{background.artist}</span>
        </ArtistName>
        <Button onClick={handleShowMusic} active={showMusic}>
          <IpodIcon />
        </Button>
      </Footer>
      <MusicPlayer showMusicPlayer={showMusic} />
    </Container>
  );
}

export default App;
