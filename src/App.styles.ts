import styled, { css, keyframes } from "styled-components";
import { ReactComponent as Reload } from "./icons/reload.svg";
import { ReactComponent as Fullscreen } from "./icons/fullscreen.svg";
import { ReactComponent as Settings } from "./icons/settings.svg";
import { ReactComponent as Star } from "./icons/star.svg";
import { ReactComponent as Ipod2 } from "./icons/ipod.svg";
import { defaultPadding, transitionStyle } from "./utils/constants";
import { BackgroundProps } from "./App.types";

export const subtitleKeyframes = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

const placeholderBackground =
  "linear-gradient(135deg, rgba(10, 10, 60, 0.9), rgba(20, 20, 80, 0.8), rgba(50, 0, 100, 0.7), rgba(200, 50, 255, 0.4))";

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: white;
  ${transitionStyle}

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `};
`;

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => !["styleConfig"].includes(prop),
})<BackgroundProps>`
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  background: ${({ styleConfig: { background, backgroundSize } }) =>
    background
      ? `url("${background}") no-repeat 0% 0% /${backgroundSize}`
      : placeholderBackground};
  width: ${({ styleConfig: { width } }) => width || "100%"};
  height: ${({ styleConfig: { height } }) => height || "100%"};
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${defaultPadding};
  padding-right: ${defaultPadding};
  gap: ${defaultPadding};
`;

export const ReloadIcon = styled(Reload)`
  width: 2.2em;
  height: auto;
  stroke: white;
`;

export const FullScreenIcon = styled(Fullscreen)`
  width: 2.5em;
  height: auto;
  stroke: white;
`;

export const SettingsIcon = styled(Settings)`
  width: 2.5em;
  height: auto;
`;

export const Clock = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  font-weight: 800;
  color: rgb(255, 255, 255);
  opacity: 1;
  font-size: 5.01087em;
  text-shadow: rgb(0, 0, 0) 0px 0px 2px;
`;

export const Greetings = styled.div`
  font-weight: 800;
  font-size: 0.24em;
`;

export const Footer = styled.div`
  position: absolute;
  text-align: center;
  font-weight: 400;
  font-size: 1em;
  bottom: ${defaultPadding};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ArtistName = styled.div`
  display: flex;
  padding-left: ${defaultPadding};
  gap: 8px;

  span {
    opacity: 0.5;
  }
`;

export const FavoriteArtistButton = styled(Button)`
  opacity: 0.5;
`;

export const IpodIcon = styled(Ipod2)`
  width: 3.5em;
`;

export const StarIcon = styled(Star).withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  width: 1.5em;
  height: auto;
  fill: ${({ active }) => (active ? "white" : "none")};
  stroke: white;
`;
