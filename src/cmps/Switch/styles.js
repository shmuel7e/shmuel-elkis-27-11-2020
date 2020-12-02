import { css } from "styled-components";

export const Switches = css`
  .MuiSwitch-colorSecondary.Mui-checked {
    color: black;
  }
  .MuiSwitch-colorSecondary {
    color: white;
  }
  .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
    background-color: black;
  }
  .MuiSwitch-colorSecondary + .MuiSwitch-track {
    background-color: white;
  }
`;
