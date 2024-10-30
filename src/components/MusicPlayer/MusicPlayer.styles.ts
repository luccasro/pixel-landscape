import styled, { keyframes } from "styled-components";
import { ReactComponent as Play } from "../../icons/play.svg";
import { ReactComponent as Pause } from "../../icons/pause.svg";
import { ReactComponent as Next } from "../../icons/next.svg";
import { ReactComponent as Previous } from "../../icons/back.svg";
import { ReactComponent as Ipod2 } from "../../icons/ipod.svg";
import { defaultPadding, transitionStyle } from "../../utils/constants";

export const subtitleKeyframes = keyframes`
  0% {
    transform: translate3d(100%, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`;

export const MusicWrapper = styled.div`
  margin: 0 auto;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 767px) {
    bottom: ${defaultPadding};
  }
`;

export const MusicControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MusicSubtitleContainer = styled.div`
  width: 17em;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 5px;
  opacity: 0.5;
`;

export const MusicSubtitle = styled.div`
  width: max-content;
  animation: ${subtitleKeyframes} 12s linear infinite;
  white-space: nowrap;
  font-size: 14px;
`;

export const MusicChannel = styled.a`
  display: flex;
  justify-content: left;
  font-size: 10px;
  color: white;
  text-decoration: none;
  ${transitionStyle}
`;

export const IpodIcon = styled(Ipod2)`
  width: 3.5em;
`;

export const PlayIcon = styled(Play)`
  width: 2.5em;
`;

export const PauseIcon = styled(Pause)`
  width: 2.5em;
`;

export const NextIcon = styled(Next)`
  width: 2.5em;
`;

export const PreviousIcon = styled(Previous)`
  width: 2.5em;
`;
