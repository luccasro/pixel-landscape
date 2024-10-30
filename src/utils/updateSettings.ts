import { settingsKey } from "./constants";
import { getSettings } from "./getSettings";

export const updateSettings = (settings: any) => {
  const settingsParsed = getSettings();
  localStorage.setItem(
    settingsKey,
    JSON.stringify({ ...settingsParsed, ...settings })
  );
  return { ...settingsParsed, ...settings };
};
