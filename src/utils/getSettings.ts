import { settingsKey } from "./constants";

export const getSettings = () => {
  const settingsStorage = localStorage.getItem(settingsKey);
  const settingsParsed = settingsStorage ? JSON.parse(settingsStorage) : null;
  return settingsParsed;
};
