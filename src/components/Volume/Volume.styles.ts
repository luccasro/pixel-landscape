import { ReactComponent as Volume } from "../../icons/volume.svg";
import { ReactComponent as VolumeMuted } from "../../icons/volume-muted.svg";
import styled from "styled-components";
import { defaultPadding, transitionStyle } from "../../utils/constants";

export const VolumeIcon = styled(Volume)`
  width: 2em;
  height: auto;
  stroke: white;
`;

export const VolumeMutedIcon = styled(VolumeMuted)`
  width: 2em;
  height: auto;
`;

export const VolumeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${defaultPadding};
  padding-top: ${defaultPadding};
  display: flex;
  align-items: center;
  gap: ${defaultPadding};

  @media (min-width: 767px) {
    transform: translateX(-50%);
    left: 50%;
  }
`;

export const VolumeSlider = styled.input`
  ${transitionStyle}
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  border-radius: 16px;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #8e8e8e;
    box-shadow: -407px 0 0 400px #8e8e8e;
  }

  &::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #8e8e8e;
    box-shadow: -407px 0 0 400px #8e8e8e;
  }

  &::-webkit-slider-runnable-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }

  &::-moz-range-track {
    height: 15px;
    background: #ccc;
    border-radius: 16px;
  }
`;
