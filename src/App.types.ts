export type StyleConfig = {
  color: string;
  height: string;
  width: string;
  background: string;
  backgroundSize: string;
  imageRendering: string;
};

export type Background = {
  artist: string;
  background: string;
};

export type BackgroundProps = {
  styleConfig: StyleConfig;
};
