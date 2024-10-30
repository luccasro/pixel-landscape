import styled from "styled-components";

export const SettingsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 50px;
  width: 65vw;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  text-align: left;
  padding: 10px;
  margin-right: 10px;
  font-size: 12px;

  @media (min-width: 767px) {
    width: 19.5em;
  }
`;

export const SettingsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ChangeBackgroundInput = styled.input`
  background: none;
  border: none;
  color: white;
  font-size: 12px;
  width: 30px;
  padding: 5px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const ToggleButton = styled("button").withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
  background: rgba(255, 255, 255, 0.25);
  border: none;
  border-radius: 15px;
  width: 40px;
  height: 20px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: ${({ active }) => (active ? "22px" : "2px")};
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;
