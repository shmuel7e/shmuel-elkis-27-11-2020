import { css } from "styled-components";
import { THEME, THEME_COLOR } from "../../constants";

export const Favorits = css`
  h1 {
    margin-left: auto;
    margin-right: auto;
    width: 200px;
  }
  height: calc(100vh - 51px);
  overflow:hidden;
  transition:all ease 0.5s;
  color: ${({ theme }) =>
    theme === THEME.DEFAULT ? THEME_COLOR.DARK : THEME_COLOR.DEFAULT};
  background-color: ${({ theme }) =>
    theme === THEME.DEFAULT ? THEME_COLOR.DEFAULT : THEME_COLOR.DARK};
  box-sizing: border-box;
`;
