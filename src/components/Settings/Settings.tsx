import React, { useCallback } from "react";
import {
  ChangeBackgroundInput,
  SettingsContainer,
  SettingsItem,
  ToggleButton,
} from "./Settings.styles";
import { SettingsProps } from "./Settings.types";
import { updateSettings } from "../../utils/updateSettings";

export const Settings: React.FC<SettingsProps> = ({
  settings,
  setSettings,
}) => {
  const handleClockType = useCallback(() => {
    const newClockType = !settings.clockAmPm;
    updateSettings({ clockAmPm: newClockType });

    setSettings({ ...settings, clockAmPm: newClockType });
  }, [settings, setSettings]);

  const handleStretch = useCallback(() => {
    setSettings({ ...settings, stretch: !settings.stretch });
  }, [settings, setSettings]);

  const handleShowSeconds = useCallback(() => {
    const newShowSeconds = !settings.showSeconds;

    updateSettings({ showSeconds: newShowSeconds });
    setSettings({ ...settings, showSeconds: newShowSeconds });
  }, [settings, setSettings]);

  const handleHideGreetings = useCallback(() => {
    const newHideGreetings = !settings.hideGreetings;

    updateSettings({ hideGreetings: newHideGreetings });
    setSettings({ ...settings, hideGreetings: newHideGreetings });
  }, [settings, setSettings]);

  const handleChangeBackground = useCallback(() => {
    const enable = !settings.changeBackground.enable;
    const interval =
      settings.changeBackground.interval === 0 && enable
        ? 1
        : settings.changeBackground.interval;

    updateSettings({
      changeBackground: {
        enable,
        interval,
      },
    });
    setSettings({
      ...settings,
      changeBackground: {
        enable,
        interval,
      },
    });
  }, [settings, setSettings]);

  const onChangeBackgroundInterval = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const interval = Math.max(0, Number(event.target.value));
      const enable = interval > 0;

      updateSettings({
        changeBackground: { interval, enable },
      });
      setSettings({
        ...settings,
        changeBackground: {
          interval,
          enable,
        },
      });
    },
    [settings, setSettings]
  );

  return (
    <SettingsContainer>
      <SettingsItem>
        <span>Stretch</span>
        <ToggleButton active={settings.stretch} onClick={handleStretch} />
      </SettingsItem>
      <SettingsItem>
        <span>AM/PM Time</span>
        <ToggleButton active={settings.clockAmPm} onClick={handleClockType} />
      </SettingsItem>
      <SettingsItem>
        <span>Show Seconds</span>
        <ToggleButton
          active={settings.showSeconds}
          onClick={handleShowSeconds}
        />
      </SettingsItem>
      <SettingsItem>
        <span>Hide greetings</span>
        <ToggleButton
          active={settings.hideGreetings}
          onClick={handleHideGreetings}
        />
      </SettingsItem>
      <SettingsItem>
        <span>
          Background interval:
          <ChangeBackgroundInput
            type="number"
            value={settings.changeBackground.interval}
            onChange={onChangeBackgroundInterval}
            min="0"
          />
        </span>
        <ToggleButton
          active={settings.changeBackground.enable}
          onClick={handleChangeBackground}
        />
      </SettingsItem>
    </SettingsContainer>
  );
};
