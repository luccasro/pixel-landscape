export interface SettingsConfig {
  clock: boolean;
  clockAmPm: boolean;
  stretch: boolean;
  smooth: boolean;
  showSeconds: boolean;
  hideGreetings: boolean;
  changeBackground: {
    enable: boolean;
    interval: number;
  };
}

export type SettingsProps = {
  settings: SettingsConfig;
  setSettings: (settings: SettingsConfig) => void;
};
