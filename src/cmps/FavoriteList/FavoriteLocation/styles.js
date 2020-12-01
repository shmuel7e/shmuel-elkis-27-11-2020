import { css } from "styled-components";
import { THEME, THEME_COLOR } from "../../../constants";

export const FavoriteLocation = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 120px;
  &:hover {
    border: 1px groove silver;
  }
  color: black;
  padding: 20px;
  cursor: pointer;
  box-shadow: 3px 2px 2px rgba(0, 0, 0, 0.12), 0 3px 10px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ image }) => image});
  color: ${({ theme }) =>
    theme === THEME.DEFAULT ? THEME_COLOR.DARK : THEME_COLOR.DEFAULT};
  :hover {
    opacity: 0.8;
  }
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
  font-weight:bold;
`;
