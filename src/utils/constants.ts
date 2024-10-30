export const musicVideos = [
  "https://www.youtube.com/watch?v=4xDzrJKXOOY", // Synthwave
  "https://www.youtube.com/watch?v=jfKfPfyJRdk", // Hip hop
  "https://www.youtube.com/watch?v=S_MOd40zlYU", // Dark
  "https://www.youtube.com/watch?v=Na0w3Mz46GA", // Asian
  "https://www.youtube.com/watch?v=-OekvEFm1lo", //  Rain
];

export const transitionStyle = `
  transition: opacity 0.8s;
  opacity: 0.5;
  transition: opacity 0.8s;

  &:hover {
    opacity: 1;
  }
`;

export const defaultPadding = "10px";

export const volumeKey = "volume";
export const favoriteArtistKey = "favoriteArtist";
export const settingsKey = "settings";

export const defaultSettings = {
  clock: true,
  clockAmPm: false,
  showSeconds: false,
  stretch: false,
  smooth: true,
  hideGreetings: false,
  changeBackground: { enable: false, interval: 0 },
};
