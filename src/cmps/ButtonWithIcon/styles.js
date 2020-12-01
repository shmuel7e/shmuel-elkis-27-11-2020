import { css } from "styled-components";
import { THEME, THEME_COLOR } from "../../constants";

export const ButtonWithIcon = css`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 50px;
  height: 50px;
  cursor: pointer;
  outline: none;
  background: none;
  border: none;
  color: ${({ theme }) =>
    theme === THEME.DEFAULT ? THEME_COLOR.DARK : THEME_COLOR.DEFAULT};
`;
