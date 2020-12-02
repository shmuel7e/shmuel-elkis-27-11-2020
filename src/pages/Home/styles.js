import { css } from "styled-components";
import { THEME, THEME_COLOR } from "../../constants";
import { getImageBg } from "../../helpers";

export const Home = css`
  transition: all 0.5s ease;
  height: calc(100vh - 51px);
  @media (max-width: 780px) {
    height: initial;
  }
  overflow: hidden;
  ${({ theme }) =>
    theme === THEME.DEFAULT
      ? css`
          color: ${THEME_COLOR.DARK};
          background-color: ${THEME_COLOR.DEFAULT};
        `
      : css`
          color: ${THEME_COLOR.DEFAULT};
          background-color: ${THEME_COLOR.DARK};
        `}

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ weather }) =>  weather ? getImageBg(weather.WeatherText) : 'clear'});
`;