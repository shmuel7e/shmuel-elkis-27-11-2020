import { css } from "styled-components";
import { THEME, THEME_COLOR } from "../../constants";

export const Header = css`
a:link,
a:visited {
  color: inherit;
}
outline: none;
display: flex;
align-items: center;
justify-content: space-between;
transition: all 0.5s ease;
border-bottom: 1px groove ${({ theme }) => {
  return theme === THEME.DEFAULT ? THEME_COLOR.DARK : THEME_COLOR.DEFAULT;
}}}
background: ${({ theme }) =>
  theme === THEME.DEFAULT ? THEME_COLOR.DEFAULT : THEME_COLOR.DARK};
`;
